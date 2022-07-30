import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, NgForm } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { Router, ActivatedRoute } from '@angular/router';
import { RemoteApiService } from '../../../core/services/remote-service/remote-api.service';
import { AppConstants } from '../../../core/constants/AppConstants';
import { ApiUrlConstants } from '../../../core/constants/apiUrlConstants';
import { AppService } from '../../../core/services/app/app.service';
import { Request } from '../../../core/services/remote-service/reqResObj/Request';
import { AlertService } from '../../services/alert/alert.service';
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';

class ImageSnippet {
  constructor(public src: string, public file: File) { }
}

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss']
})
export class EmployeeCreateComponent implements OnInit {
  public employeeForm: FormGroup;
  public fileUploadForm: FormGroup;
  public fullName: any;
  public employeeId: any;
  public subscriptionId: any;
  public storeImage: File;
  public isImgUploaded: any = false;
  public RaceId: any;
  public dob: any = null;
  public gender = false;
  // public ReligionCId: any;
  public phoneNumber: any;
  public jobCategory: any;
  public positionId: any;
  public joiningDate: any = null;
  public email: any;
  public storeData: any = {};
  public profilePhoto: any;
  // public citizenShip: any;
  public nationality: any;
  public totalObtain:any = '';
  // public businessFax: any;
  public password: any = '';
  public branchAllocation: any;
  public profilePicture: any;
  public itemid: any;
  selectedFile: ImageSnippet;
  cafeData: any;
  data: any;
  public roleList = [];
  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    public request: Request,
    public api: RemoteApiService,
    private alert: AlertService, private http: HttpClient, private cd: ChangeDetectorRef
  ) {
    const emailPattern = '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,63}';
    this.fileUploadForm = new FormGroup({
      profilePicture: new FormControl(this.profilePicture, [Validators.required]),
    });
    this.employeeForm = new FormGroup({
      fullName: new FormControl('', [Validators.required]),
      employeeId: new FormControl('', [Validators.required]),
      subscriptionId: new FormControl('', [Validators.required, Validators.pattern("\\d{6}\\-\\d{2}\\-\\d{4}")]),
      RaceId: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      // ReligionCId: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(8)]),
      jobCategory: new FormControl('', [Validators.required]),
      positionId: new FormControl('', [Validators.required]),
      joiningDate: new FormControl('', [Validators.required]),
      email: new FormControl('', Validators.compose([Validators.required, Validators.pattern(emailPattern)])),
      // citizenShip: new FormControl('', [Validators.required]),
      nationality: new FormControl('', [Validators.required]),
      totalObtain: new FormControl('', [Validators.required]),
      // businessFax: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      branchAllocation: new FormControl('', [Validators.required]),
    });

  }

  ngOnInit() {
    this.activateRoute.queryParams.subscribe(params => {
      this.itemid = params["id"];
    });
    this.getCafe();
    if (this.itemid) {
      this.editEmployee()
    }
    this.getRoleList();
  }
  getToday(): string {
    return new Date().toISOString().split('T')[0]
  }

  getRoleList() {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.GET_ALL_ROLES;
    this.request.params = ""
    this.api.requestObject(this.request).then(data => {
      this.roleList = data;
      // this.router.navigate(['/employeeManagement']);
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }


  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
  getCafe() {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.GET_ALL_CAFE;
    this.request.params = "";
    this.request.body = ""
    this.api.requestObject(this.request).then(data => {

      this.cafeData = data
      console.log(this.cafeData, "cafeData")
      // this.router.navigate(['/employeeManagement']);

    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });

  }

  addEmployee(data) {
    // const formData = new FormData();
    // formData.append('file', this.fileData);
    let obj = {
      email: data.email,
      phoneNumber: data.phoneNumber,
      fullName: data.fullName,
      employeeId: data.employeeId,
      subscriptionId: data.subscriptionId,
      branchAllocation: data.branchAllocation,
      role: data.positionId,
    }
    this.data = Object.assign(obj, data)

    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.CREATE_EMPLOYEE;
    this.request.body = obj;
    this.request.params = "";

    this.api.requestObject(this.request).then(data => {
      this.alert.stickyAlerShow('Created Successful', 'alert-success');
      console.log(data, "create Emp")
      console.log(JSON.stringify(data));

      this.router.navigate(['/employeeManagement']);

    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });

  }

  updateEmployee(data) {

    let obj = {
      email: data.email,
      phoneNumber: data.phoneNumber,
      fullName: data.fullName,
      employeeId: data.employeeId,
      subscriptionId: data.subscriptionId,
      branchAllocation: data.branchAllocation,
      role: data.positionId,
    }
    console.log(data, "FormData")
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.Update_EMPLOYEE;
    this.request.body = obj;
    this.request.params = this.itemid;
    this.api.requestObject(this.request).then(data => {
      console.log(data, "updatevisitor");

      console.log(JSON.stringify(data));
      this.alert.stickyAlerShow('Updated Successful', 'alert-success');

      this.router.navigate(['/employeeManagement']);
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }
  editEmployee() {

    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.USER;
    this.request.params = this.itemid
    this.request.body = "";
    console.log(this.request, "reqqqq")
    this.api.requestObject(this.request).then(data => {
      this.profilePicture = data.profilePicture;
      this.employeeForm.setValue({
        fullName: data.fullName,
        employeeId: data.employeeId,
        subscriptionId: data.subscriptionId,
        RaceId: data.RaceId,
        dob: moment(data.dob).format("YYYY-MM-DD"),
        gender: data.gender,
        // ReligionCId: data.ReligionCId,
        phoneNumber: data.phoneNumber,
        jobCategory: data.jobCategory,
        positionId: data.positionId,
        joiningDate: moment(data.joiningDate).format("YYYY-MM-DD"),
        email: data.email,
        // citizenShip: data.citizenShip,
        nationality: data.nationality,
        totalObtain: data.totalObtain,
        // businessFax: data.businessFax,
        password: '',
        branchAllocation: data.branchAllocation
      })
    }, (err) => {

    });
  }

  showPassword() {
    var x = document.getElementById("passwordInput");
    if (x['type'] === "password") {
      x['type'] = "text";
    } else {
      x['type'] = "password";
    }
  }

}
