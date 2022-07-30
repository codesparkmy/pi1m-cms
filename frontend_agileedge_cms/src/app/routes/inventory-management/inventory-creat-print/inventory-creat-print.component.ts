import { Component, OnInit, Input, InputDecorator } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, NgForm } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { Router, ActivatedRoute } from '@angular/router';
import { RemoteApiService } from '../../../core/services/remote-service/remote-api.service';
import { AppConstants } from '../../../core/constants/AppConstants';
import { ApiUrlConstants } from '../../../core/constants/apiUrlConstants';
import { AppService } from '../../../core/services/app/app.service';
import { Request } from '../../../core/services/remote-service/reqResObj/Request';
import * as moment from 'moment';
import { AlertService } from 'src/app/core/services/alert/alert.service';

@Component({
  selector: 'app-inventory-creat-print',
  templateUrl: './inventory-creat-print.component.html',
  styleUrls: ['./inventory-creat-print.component.scss']
})
export class InventoryCreatPrintComponent implements OnInit {
  public printForm: any;
  public categoryForm: any;
  public categoryList: any;
  public data: any;
  public toggle: true;
  public itemid: any;
  public printOutType: any;
  public printOutSize: any;
  public price: any;
  clicked = false;
  public printdata: any;
  public quantity: any;
  public data1: any;
  locationid: any;
  location: any;

  constructor(private router: Router,
    private activateRoute: ActivatedRoute,
    public request: Request,
    public api: RemoteApiService,
    private route: ActivatedRoute,
    private alert: AlertService,
  ) { }

  ngOnInit() {
    this.getLocation();
    this.getCategory()
    this.activateRoute.queryParams.subscribe(params => {
      this.itemid = params["id"];
    });
    if (this.itemid) {
      this.editPrint()
    }
    this.setPrintForm();
    this.setCategoryForm();
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
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });

  }


  setPrintForm() {
    this.printForm = new FormGroup({
      printOutType: new FormControl('', [Validators.required]),
      // inventoryType: new FormControl('', [Validators.required]),
      printOutSize: new FormControl('', [Validators.required]),
      // quantity: new FormControl(this.quantity, [Validators.required]),
      memberprice: new FormControl('', [Validators.required]),
      nonMemberprice: new FormControl('', [Validators.required]),
      // price: new FormControl('', [Validators.required])
    });
  }

  public findInvalidControls() {
    const invalid = [];
    const controls = this.printForm.controls;
    for (const name in controls) {
        if (controls[name].invalid) {
            invalid.push(name);
        }
    }
    console.log(invalid);
    // return invalid;
}

  setCategoryForm() {
    this.categoryForm = new FormGroup({
      printOutType: new FormControl('', [Validators.required]),
    });
  }

  addInventory(data) {
    this.clicked = true;
    this.data1 = parseInt(data['quantity']);
    let obj = {
      inventoryType: "Print",
      printOutSize: data.printOutSize,
      price: parseInt(data.price),
      printOutType: parseInt(data.printOutType),
      quantity: parseInt(this.data1),
      memberprice: data.memberprice,
      nonMemberprice: data.nonMemberprice,
      locationId: this.locationid
    }
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.INVENTORY;
    this.request.body = obj;
    this.request.params = ""
    this.api.requestObject(this.request).then(data => {
      this.alert.stickyAlerShow('Created Successful', 'alert-success');
      this.router.navigate(['/inventoryManagement']);
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }

  modifySize(value) {
    switch (value) {
      case "a1":
        return "A1"
      case "a2":
        return "A2"
      case "a3":
        return "A3"
      case "a4":
        return "A4"
      case "a5":
        return "A5"
      case "a6":
        return "A6"
      default:
        return value
    }
  }
 
  clear() {
    this.categoryForm.reset();
    this.clicked = false;
  }
  addCategory(data) {
    this.clicked = true;
    let obj = {
      inventoryType: "Print",
    }
    this.data = Object.assign(obj, data)
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.PRINT_CATEGORY;
    this.request.body = this.data;
    this.request.params = ""
    this.api.requestObject(this.request).then(data => {
      // this.visitorDetailModal.hide()
      this.getCategory();
      this.alert.stickyAlerShow('Created Successful', 'alert-success');
      this.categoryForm.reset();
      this.router.navigate(['/inventoryManagement/creatPrint']);
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }

  getCategory() {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.GET_PRINT_CATEGORY;
    this.request.body = "";
    this.request.params = ""
    this.api.requestObject(this.request).then(data => {
      this.categoryList = data;
      // this.router.navigate(['/inventoryManagement/creatFood']);
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }

  editPrint() {
    const inventoryType = "Print";
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.INVENTORY_ID;
    this.request.params = "inventoryType=" + inventoryType + "&inventoryId=" + this.itemid;
    this.request.body = "";
    this.api.requestObject(this.request).then(data => {
      console.log(data,'data')
      this.printForm.patchValue({
        printOutType: data.printOutType.id,
        printOutSize: this.modifySize(data.name),
        quantity: data.quantity,
        price: data.price,
        memberprice: data.memberprice,
        nonMemberprice: data.nonMemberprice
      })
      this.printdata = data.printOutType;
      // this.router.navigate(['/employeeManagement']);
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }
  UpdatePrint(data) {
    this.clicked = true;
    let obj = {
      inventoryType: "Print",
    }
    this.data = Object.assign(obj, data);
    this.data['locationId'] = this.locationid;
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.INVENTORY;
    this.request.body = this.data;
    this.request.params = this.itemid;
    this.api.requestObject(this.request).then(data => {
      this.alert.stickyAlerShow('Updated Successful', 'alert-success');
      this.router.navigate(['/inventoryManagement']);
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
}
