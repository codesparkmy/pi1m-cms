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
import { ModalDirective } from 'ngx-bootstrap/modal';
import { AlertService } from 'src/app/core/services/alert/alert.service';


@Component({
  selector: 'app-inventory-creat-food',
  templateUrl: './inventory-creat-food.component.html',
  styleUrls: ['./inventory-creat-food.component.scss']
})
export class InventoryCreatFoodComponent implements OnInit {
  public foodForm: any;
  public categoryForm: any;
  public categoryList: any;
  public itemid: any;
  public price: any;
  public clicked: any = false;
  locationid: any;
  location: any;

  public data1: any; public name: any; public quantity: any; public foodInventryType: any; public noOfqty: any;
  data: any;
  constructor(private router: Router,
    private activateRoute: ActivatedRoute,
    public request: Request,
    public api: RemoteApiService,
    private route: ActivatedRoute,
    private alert: AlertService,

  ) {
    this.foodForm = new FormGroup({
      name: new FormControl(this.name, [Validators.required]),
      // quantity: new FormControl(this.quantity, [Validators.required]),
      // inventoryType:new FormControl('',[Validators.required]),
      foodInventryType: new FormControl(this.foodInventryType, [Validators.required]),
      noOfqty: new FormControl(this.noOfqty, [Validators.required]),
      price: new FormControl(this.price, [Validators.required]),
      memberprice: new FormControl('', [Validators.required]),
      nonMemberprice: new FormControl('', [Validators.required])
    });
    this.categoryForm = new FormGroup({
      foodInventryType: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
    this.getLocation();
    this.getCategory();
    this.activateRoute.queryParams.subscribe(params => {
      this.itemid = params["id"];
    });
    if (this.itemid) {
      this.editFood()
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
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });

  }

  addInventory(data) {
    this.clicked = true;
    this.data1 = parseInt(data['noOfqty']);
    this.price = data['price'];
    let obj = {
      inventoryType: "Food",
      noOfqty: parseInt(this.data1),
      price: this.price,
      foodInventryType: parseInt(data.foodInventryType),
      name: data.name,
      locationId: this.locationid,
      memberprice: data.memberprice,
      nonMemberprice: data.nonMemberprice
      // quantity: data.quantity,
    }
    // this.data=Object.assign(obj,data,this.data1)
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
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
  clear() {
    this.categoryForm.reset();
    this.clicked = false
  }
  addCategory(data) {
    this.clicked = true;
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.FOOD_CATEGORY;
    this.request.body = data;
    this.request.params = ""
    this.api.requestObject(this.request).then(data => {
      this.alert.stickyAlerShow('Added Successful', 'alert-success');
      this.categoryForm.reset()
      // this.visitorDetailModal.hide()
      this.getCategory();
      this.router.navigate(['/inventoryManagement/creatFood']);
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }
  getCategory() {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.GET_FOOD_CATEGORY;
    this.request.body = this.data;
    this.request.params = ""
    this.api.requestObject(this.request).then(data => {
      this.categoryList = data;
      // this.alert.stickyAlerShow('Created Successful', 'alert-success');
      // this.router.navigate(['/inventoryManagement/creatFood']);
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });

  }
  editFood() {
    const inventoryType = "Food";
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.INVENTORY_ID;
    this.request.params = "inventoryType=" + inventoryType + "&inventoryId=" + this.itemid;
    this.request.body = "";
    this.api.requestObject(this.request).then(data => {
      this.foodForm.patchValue({
        name: data.name,
        // quantity: data.quantity,
        foodInventryType: data.foodInventryType.id,
        noOfqty: data.noOfqty,
        price: data.price,
        memberprice: data.memberprice,
        nonMemberprice: data.nonMemberprice
      });
      // this.router.navigate(['/employeeManagement']);
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }
  UpdateFood(data) {
    this.data1 = parseInt(data['noOfqty']);
    this.price = data['price'];
    let obj = {
      inventoryType: "Food",
      noOfqty: parseInt(this.data1),
      price: this.price,
      foodInventryType: parseInt(data.foodInventryType),
      name: data.name,
      memberprice: data.memberprice,
      nonMemberprice: data.nonMemberprice,
      locationId: this.locationid,
    }
    console.log(obj);
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.INVENTORY;
    this.request.body = obj;
    this.request.params = this.itemid
    this.api.requestObject(this.request).then(data => {
      this.alert.stickyAlerShow('Updated Successful', 'alert-success');
      this.router.navigate(['/inventoryManagement']);
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }
}
