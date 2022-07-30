import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { Component, OnInit, Input, InputDecorator } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, NgForm, AbstractControl, FormBuilder } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { Router, ActivatedRoute } from '@angular/router';
import { RemoteApiService } from '../../../core/services/remote-service/remote-api.service';
import { AppConstants } from '../../../core/constants/AppConstants';
import { ApiUrlConstants } from '../../../core/constants/apiUrlConstants';
import { AppService } from '../../../core/services/app/app.service';
import { Request } from '../../../core/services/remote-service/reqResObj/Request';
import * as moment from 'moment';
import { AlertService } from '../../../core/services/alert/alert.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { getMaxListeners } from 'process';
import { Profile } from 'src/app/core/objects/loginObject';
import { ConditionalExpr } from '@angular/compiler';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  visible = true;
  ResetForm: any;
  billingForm: any;
  public userData: any;
  public userId: any;
  // toppings = new FormControl();
  // toppingList: string[] = ['Xerox', 'Food', 'Browsing', 'Course'];
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  fruits = [
    { name: 'Lemon' },
    { name: 'Lime' },
    { name: 'Apple' },
  ];
  location: any;
  isUpdate: any = false;
  itemid: any;
  billList: any;
  EmpList: any;
  public data: any;
  locationid: any;
  public employeeData: Profile = new Profile();
  public showGst: boolean = true;
  public showMember: boolean = false;
  public showNonMember: boolean = false;
  public showmemberRegistration: boolean = false;
  public settingView = "";

  constructor(private router: Router,
    private activateRoute: ActivatedRoute,
    public request: Request,
    public api: RemoteApiService,
    private alert: AlertService, private formBuilder: FormBuilder,
    private appService: AppService
  ) {
    // this.billingForm = new FormGroup({
    //   browsePerhours: new FormControl('', [Validators.required]),
    //   // printout: new FormControl('', [Validators.required]),
    //   // rentalPerhours: new FormControl('', [Validators.required]),
    //   member: new FormControl('', [Validators.required]),
    //   nonMember: new FormControl('', [Validators.required]),
    //   gst: new FormControl('', [Validators.required]),
    //   sgst: new FormControl('', [Validators.required])
    // });
  }

  ngOnInit() {
    this.ResetForm = this.formBuilder.group({
      password: new FormControl('', [Validators.required]),
      newpassword: new FormControl('', [Validators.required]),
    }, { validator: this.passwordConfirming });
    this.userData = localStorage.getItem('userEmail');
    this.userId = localStorage.getItem('userId');
    this.activateRoute.queryParams.subscribe(params => {
      this.itemid = params["id"];
      //this.showGst = true;
    });
    const value = this.appService.getSettingView();
    if (value) this.showPage(value);
    this.getEmployee();
    this.getLocation();
  }

  ngOnDestroy() {
    this.appService.setSettingView(this.settingView);
  }

  passwordConfirming(c: FormGroup) {
    // return c.get('newpassword').value === c.get('password').value ? null : {'mismatch': true};
    if (c.get('newpassword').value !== c.get('password').value) {
      c.get('password').setErrors({ 'noMatch': true });
      return { invalid: true };
    }

  }
  getLocation() {
    this.location = localStorage.getItem('userId');
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.USER;
    this.request.params = this.location;
    this.request.body = "";

    this.api.requestObject(this.request).then(data => {
      this.locationid = data.branchAllocation;
      this.getBilling();
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });

  }
  getBilling() {
    let obj = {
      locationId: this.location
    }
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.BILL_GENERATE;
    this.request.body = '';
    this.request.params = '/' + this.locationid;
    this.api.requestObject(this.request).then(data => {
      this.billList = data;
      if (data.browsePerhours !== undefined) this.isUpdate = true;
      //this.billingForm = data;
      // this.billingForm.patchValue({
      //   browsePerhours: data.browsePerhours,
      //   rentalPerhours: data.rentalPerhours,
      //   member: data.member,
      //   nonMember: data.nonMember,
      //   gst: data.gst,
      //   sgst: data.sgst
      // })
      // this.router.navigate(['/invetoryManagement']);
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }

  // addBilling(data) {
  //   console.log(data);
  //   let obj = {
  //     locationId: this.locationid
  //   }
  //   this.data = Object.assign(obj, data)
  //   this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
  //   this.request.type = AppConstants.API_POST;
  //   this.request.reqModule = ApiUrlConstants.BILL_GENERATE;
  //   this.request.body = this.data;
  //   this.request.params = ''
  //   this.api.requestObject(this.request).then(data => {
  //     this.billList = data;
  //     console.log(this.billList, "BILLLIST")
  //     this.alert.stickyAlerShow("Added successfully", 'alert-success');
  //     this.billingForm.reset();
  //     this.getBilling();
  //     this.isUpdate = true;
  //     // this.router.navigate(['/invetoryManagement']);
  //   }, (err) => {
  //     // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
  //     // this.errLogin = err.error;
  //   });
  // }
  // updateBilling(data) {
  //   let obj = {
  //     browsePerhours: parseInt(data.browsePerhours),
  //     // rentalPerhours: parseInt(data.rentalPerhours),
  //     member: parseInt(data.member),
  //     nonMember: parseInt(data.nonMember),
  //     locationId: this.locationid,
  //     gst: data.gst,
  //     sgst: data.sgst
  //   }
  //   this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
  //   this.request.type = AppConstants.API_POST;
  //   this.request.reqModule = ApiUrlConstants.BILL_GENERATE;
  //   this.request.body = obj;
  //   this.request.params = '/' + this.billList.id;
  //   this.api.requestObject(this.request).then(data => {
  //     this.billList = data;
  //     console.log(this.billList, "BILLLIST")
  //     this.alert.stickyAlerShow("Updated successfully", 'alert-success');
  //     this.getBilling()
  //     // this.router.navigate(['/invetoryManagement']);
  //   }, (err) => {
  //     // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
  //     // this.errLogin = err.error;
  //   });
  // }

  updatePassword(data) {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.UPDATE_PASSWORD;
    this.request.body = data;
    this.request.params = this.userId;
    this.api.requestObject(this.request).then(data => {
      this.alert.stickyAlerShow("Password changed successfully", 'alert-success');
      this.ResetForm.reset();
    }, (err) => {

    });
  }

  remove(fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  getEmployee() {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.GET_ALL_EMPLOYEE;
    this.request.params = ""
    this.api.requestObject(this.request).then(result => {
      this.employeeData = result.find(empDetails => empDetails.id == localStorage.getItem('userId'));
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }

  showPage(value) {
    this.settingView = value;
    switch (value) {
      case 'gst':
        this.showGst = true;
        this.showMember = false;
        this.showNonMember = false;
        this.showmemberRegistration = false;
        break;
      case 'member':
        this.showGst = false;
        this.showMember = true;
        this.showNonMember = false;
        this.showmemberRegistration = false;
        break;
      case 'nonmember':
        this.showGst = false;
        this.showMember = false;
        this.showNonMember = true;
        this.showmemberRegistration = false;
        break;
      case 'memberRegistration':
        this.showGst = false;
        this.showMember = false;
        this.showNonMember = false;
        this.showmemberRegistration = true;
        break;
    }
    this.getLocation();
  }

  editGst() {
    let obj = {
      locationId: this.location
    }
    // this.data = Object.assign(obj, data)
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.BILL_GENERATE;
    this.request.body = '';
    this.request.params = '/' + this.locationid;
    this.api.requestObject(this.request).then(data => {
      this.billList = data;
      if (data.browsePerhours !== undefined) this.isUpdate = true;
      //this.billingForm = data;
      // this.billingForm.patchValue({
      //   browsePerhours: data.browsePerhours,
      //   rentalPerhours: data.rentalPerhours,
      //   member: data.member,
      //   nonMember: data.nonMember,
      //   gst: data.gst,
      //   sgst: data.sgst
      // })
      // this.router.navigate(['/invetoryManagement']);
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
    this.router.navigate(['/settings/editGst'], { queryParams: { id: "1" } })
  }


}
