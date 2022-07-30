
import { Component, OnInit, Input } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { FormGroup, FormControl, FormArray, Validators, NgForm } from '@angular/forms';
// import {NgbDropdown, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { RemoteApiService } from '../../../core/services/remote-service/remote-api.service';
import { AppConstants } from '../../../core/constants/AppConstants';
import { ApiUrlConstants } from '../../../core/constants/apiUrlConstants';
import { AppService } from '../../../core/services/app/app.service';
import { Request } from '../../../core/services/remote-service/reqResObj/Request';

@Component({
  selector: 'app-inventory-management',
  templateUrl: './inventory-management.component.html',
  styleUrls: ['./inventory-management.component.scss']
})
export class InventoryManagementComponent implements OnInit {
  inventoryList: any;
  posForm: any;
  viewMode: any = "customer";
  public loader: any = true;
  public i1state: any = true;
  public i2state: any = false;
  public i3state: any = false;
  public i = 1;
  public i1: any = this.i;
  public i2: any = this.i1 + 1;
  public i3: any = this.i2 + 1;

  public itemid: any;
  filterList:any;
  p:number = 1;
  pageSize:number = 10;
  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    public request: Request,
    public api: RemoteApiService,

  ) {
    this.posForm = new FormGroup({
      printOutType: new FormControl('', [Validators.required]),
      inventoryType: new FormControl('', [Validators.required]),
      printOutSize: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
    this.getAllInventory()
  }
  ngOnChanges(viewMode) {
    this.getAllInventory()
  }

  getAllInventory() {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.INVENTORY;
    // if (this.viewMode == 'customer') {
    //   this.request.params = "System"
    // }
    // else if (this.viewMode == 'costing') {
    //   this.request.params = "Food"
    // }
    // else {
    //   this.request.params = "Print"
    // }
    this.request.params="System";
    this.request.body = "";
    console.log(this.request, "reqqqq")
    this.api.requestObject(this.request).then(data => {
      this.loader = false;
      console.log(data, "dataLogin")
      this.inventoryList = data;
      this.filterList = data;
      console.log(JSON.stringify(data));
      this.loader = false;
      // this.router.navigate(['/employeeManagement']);
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }
  searchFilter(text: any) {
    this.filterList = this.inventoryList.filter(result =>
      JSON.stringify(result.systemId).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
      JSON.stringify(result.processor).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
      JSON.stringify(result.deviceName).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
      JSON.stringify(result.ipAddress).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
      JSON.stringify(result.inventoryType).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||

      JSON.stringify(result).toLocaleLowerCase().includes(text.toLocaleLowerCase())
      );
  }
}
