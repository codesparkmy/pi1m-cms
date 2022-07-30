import { Component, OnInit, Input } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { FormGroup, FormControl, FormArray, Validators, NgForm } from '@angular/forms';
import { NgbDropdown, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { RemoteApiService } from '../../../core/services/remote-service/remote-api.service';
import { AppConstants } from '../../../core/constants/AppConstants';
import { ApiUrlConstants } from '../../../core/constants/apiUrlConstants';
import { AppService } from '../../../core/services/app/app.service';
import { Request } from '../../../core/services/remote-service/reqResObj/Request';
import { AlertService } from 'src/app/core/services/alert/alert.service';

@Component({
  selector: 'app-inventory-management',
  templateUrl: './inventory-management.component.html',
  styleUrls: ['./inventory-management.component.scss']
})
export class InventoryManagementComponent implements OnInit {
  inventorySystem: any;
  inventoryPrint: any;
  inventoryFood: any;
  filterList: any;
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
  filterprintList: any;
  filterFoodList: any;
  p: number = 1;
  public showPos = false;
  public showTraining = false;
  public showVisitor = true;
  public showExpense = false;
  public showLeave = false;
  public subView = "";
  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    public request: Request,
    public api: RemoteApiService,
    private alert: AlertService,
    public appService: AppService
  ) {
    this.posForm = new FormGroup({
      printOutType: new FormControl('', [Validators.required]),
      inventoryType: new FormControl('', [Validators.required]),
      printOutSize: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
    const value2 = this.appService.getSubViewdata();
    this.showPage(value2);
    const value = this.appService.getViewdata();
    if (value) this.viewMode = value;
    else this.viewMode = "customer";
    this.getAllInventory();
  }
  ngOnDestroy() {
    this.appService.setSubViewData(this.subView);
    this.appService.setViewData(this.viewMode);
  }

  ngOnChanges(viewMode) {
    this.getAllInventory()
  }
  searchFilter(text: any) {
    if (this.viewMode == 'customer') {
      //   this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
      //   this.request.type = AppConstants.API_GET;
      //   this.request.reqModule = ApiUrlConstants.INVENTORY;
      //   this.request.params = "System/"+"?limit="+text
      //   this.api.requestObject(this.request).then(data => {
      //       this.inventorySystem = data;
      //       this.filterList = data;
      //     })
      this.filterList = this.inventorySystem.filter(result =>
        JSON.stringify(result.id).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
        JSON.stringify(result.systemId).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
        JSON.stringify(result.deviceName).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
        JSON.stringify(result.inventoryType).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
        JSON.stringify(result.memory, result.processor).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
        JSON.stringify(result.processor).toLocaleLowerCase().includes(text.toLocaleLowerCase())
      );
    }
    else if (this.viewMode == 'costing') {
      this.filterFoodList = this.inventoryFood.filter(result =>
        JSON.stringify(result.id).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
        JSON.stringify(result.inventoryType).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
        JSON.stringify(result.name).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
        JSON.stringify(result.noOfqty).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||

        JSON.stringify(result.price).toLocaleLowerCase().includes(text.toLocaleLowerCase())
      );
    }
    else {
      this.filterprintList = this.inventoryPrint.filter(result =>
        JSON.stringify(result.id).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
        JSON.stringify(result.inventoryType).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
        JSON.stringify(result.price).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
        JSON.stringify(result.printOutSize).toLocaleLowerCase().includes(text.toLocaleLowerCase())
      );
    }
  }
  getAllInventory() {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.INVENTORY;
    if (this.viewMode == 'customer') {
      this.request.params = "System"
    }
    else if (this.viewMode == 'costing') {
      this.request.params = "Food"
    }
    else {
      this.request.params = "Print"
    }
    // this.request.params=""
    // this.request.body = data;
    this.api.requestObject(this.request).then(data => {
      if (this.viewMode == 'customer') {
        this.inventorySystem = data;
        this.filterList = data;
      }
      else if (this.viewMode == 'costing') {
        this.inventoryFood = data;
        this.filterFoodList = data;

      }
      else {
        this.inventoryPrint = data;
        this.filterprintList = data;

      }
      this.loader = false;
      // this.router.navigate(['/employeeManagement']);
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }

  viewEmployee(itemid) {
    this.itemid = itemid;
    let id = this.itemid
    this.router.navigate(['inventoryManagement/creat'], { queryParams: { id: this.itemid } });
  }
  editsystem(itemid) {

    this.itemid = itemid;
    let id = this.itemid
    this.router.navigate(['inventoryManagement/creat'], { queryParams: { id: this.itemid } });

  }
  deletesystem(itemid) {
    let data = {
      status: 2,
      inventoryType: "System",
    }
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.INVENTORY;
    this.request.params = itemid
    this.request.body = data;
    this.api.requestObject(this.request).then(data => {
      console.log(data, "dataLogin")
      this.alert.stickyAlerShow("Deleted Successfully", 'alert-success');
      this.getAllInventory();
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }
  editfood(itemid) {
    this.itemid = itemid;
    let id = this.itemid
    this.router.navigate(['inventoryManagement/creatFood'], { queryParams: { id: this.itemid } });
  }
  deletefood(itemid) {
    let data = {
      status: 2,
      inventoryType: "Food",
    }
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.INVENTORY;
    this.request.params = itemid
    this.request.body = data;
    console.log(this.request, "reqqqq")
    this.api.requestObject(this.request).then(data => {
      this.getAllInventory();
      this.alert.stickyAlerShow("Deleted Successfully", 'alert-success');
      console.log(JSON.stringify(data))
      // this.router.navigate(['/employeeManagement']);
    }, (err) => {

    });
  }
  editprint(itemid) {
    this.itemid = itemid;
    let id = this.itemid
    this.router.navigate(['inventoryManagement/creatPrint'], { queryParams: { id: this.itemid } });
  }
  deleteprint(itemid) {
    let data = {
      status: 2,
      inventoryType: "Print",
    }
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.INVENTORY;
    this.request.params = itemid
    this.request.body = data;
    console.log(this.request, "reqqqq")
    this.api.requestObject(this.request).then(data => {
      this.getAllInventory();
      this.alert.stickyAlerShow("Deleted Successfully", 'alert-success');
      // this.router.navigate(['/employeeManagement']);
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }

  showPage(value) {
    this.subView = value;
    switch (value) {
      case 'trainingManagement':
        this.showTraining = true;
        this.showVisitor = false;
        this.showPos = false;
        this.showExpense = false;
        this.showLeave = false;
        break;
      case 'visitorManagement':
        this.showVisitor = true;
        this.showTraining = false;
        this.showPos = false;
        this.showExpense = false;
        this.showLeave = false;
        break;
      case 'pos':
        this.showVisitor = false;
        this.showTraining = false;
        this.showPos = true;
        this.showExpense = false;
        this.showLeave = false;
        break;
      case 'expense':
        this.showVisitor = false;
        this.showTraining = false;
        this.showPos = false;
        this.showExpense = true;
        this.showLeave = false;
        break;
      case 'leave':
        this.showLeave = true;
        this.showVisitor = false;
        this.showTraining = false;
        this.showPos = false;
        this.showExpense = false;
        break;
    }
  }



}
