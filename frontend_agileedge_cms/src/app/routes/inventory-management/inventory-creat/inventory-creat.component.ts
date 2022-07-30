import { Component, OnInit, Input, InputDecorator, ViewChild, ElementRef } from '@angular/core';
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
  selector: 'app-inventory-creat',
  templateUrl: './inventory-creat.component.html',
  styleUrls: ['./inventory-creat.component.scss']
})
export class InventoryCreatComponent implements OnInit {
  @ViewChild('clickonce') clickonce: ElementRef;

  public createForm: any;
  public itemid: any; inventoryType: any; location: any;
  locationid: any;
  clicked: boolean = false;
  public data: any; public inventoryName: any; public deviceName: any; public typeOfSystem: any; public processor: any; public memory: any; public version: any;
  public serialNumber: any; public ipAddress: any
  constructor(private router: Router,
    private activateRoute: ActivatedRoute,
    public request: Request,
    public api: RemoteApiService,
    private route: ActivatedRoute,
    private alert: AlertService,
  ) {
    this.createForm = new FormGroup({
      systemId: new FormControl('', [Validators.required]),
      inventoryName: new FormControl('System', [Validators.required]),
      deviceName: new FormControl(this.deviceName, [Validators.required]),
      // inventoryType:new FormControl('',[Validators.required]),

      typeOfSystem: new FormControl(this.typeOfSystem, [Validators.required]),
      processor: new FormControl(this.processor, [Validators.required]),
      memory: new FormControl(this.memory, [Validators.required]),
      version: new FormControl(this.memory, [Validators.required]),
      serialNumber: new FormControl(this.serialNumber, [Validators.required]),
      ipAddress: new FormControl(this.ipAddress, [Validators.required]),
    });
  }

  ngOnInit() {

    this.activateRoute.queryParams.subscribe(params => {
      this.itemid = params["id"];
    });
    this.getLocation();
    if (this.itemid) {
      this.editSystem()
    }
  }
  numberOnly(e): boolean {
    var rgx = /^[0-9]*\.?[0-9]*$/;
    return e.match(rgx);

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
      this.location = this.locationid;
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });

  }
  addInventory(data) {
    if (this.checkValues(data)) return this.alert.stickyAlerShow("please fill all the fields", 'alert-danger');
    else {
      // this.clickonce.nativeElement.disabled = true;
      let obj = {
        inventoryType: "System",
        locationId: this.location

      }
      this.clicked = true;

      this.data = Object.assign(obj, data)
      this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
      this.request.type = AppConstants.API_POST;
      this.request.reqModule = ApiUrlConstants.INVENTORY;
      this.request.body = this.data;
      this.request.params = ""
      this.api.requestObject(this.request).then(data => {
        if (data.message == 'System id already exists') {
          this.alert.stickyAlerShow(data.message, 'alert-danger');
          this.clicked = false;
        } else {
          this.alert.stickyAlerShow('Created Successful', 'alert-success');
          this.router.navigate(['/inventoryManagement']);
        }
      }, (err) => {
        this.clicked = false;
        // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
        // this.errLogin = err.error;
      });
    }
  }

  checkValues(data) {
    for (let field in data) {
      if (("" == data[field] || null == data[field] || undefined == data[field])) {
        return true
      }
      if (typeof data[field] === "object" && !Array.isArray(data[field])) this.checkValues(data[field]);
    }
    return false;
  }

  editSystem() {
    const inventoryType = "System";
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.INVENTORY_ID;
    this.request.params = "inventoryType=" + inventoryType + "&inventoryId=" + this.itemid;
    this.request.body = "";
    this.api.requestObject(this.request).then(data => {
      this.createForm.setValue({
        inventoryName: data.inventoryName,
        deviceName: data.deviceName,
        // inventoryType:new FormControl('',[Validators.required]),
        systemId: data.systemId,
        typeOfSystem: data.typeOfSystem,
        processor: data.processor,
        memory: data.memory,
        version: data.version,
        serialNumber: data.serialNumber,
        ipAddress: data.ipAddress,
      })
      // this.router.navigate(['/employeeManagement']);
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }
  updateSystem(data) {
    let obj = {
      inventoryType: "System",

    }
    this.data = Object.assign(obj, data);
    this.data['locationId'] = this.location;
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.INVENTORY;
    this.request.body = this.data;
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
