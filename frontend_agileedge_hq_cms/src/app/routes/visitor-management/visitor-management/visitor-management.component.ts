
import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
// import {NgbDropdown, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { RemoteApiService } from '../../../core/services/remote-service/remote-api.service';
import { AppConstants } from '../../../core/constants/AppConstants';
import { ApiUrlConstants } from '../../../core/constants/apiUrlConstants';
import { AppService } from '../../../core/services/app/app.service';
import { Request } from '../../../core/services/remote-service/reqResObj/Request';
import { AlertService } from '../../services/alert/alert.service';

@Component({
  selector: 'app-visitor-management',
  templateUrl: './visitor-management.component.html',
  styleUrls: ['./visitor-management.component.scss']
})
export class VisitorManagementComponent implements OnInit {
  public visitorList: any = [];
  public visitorListDetail :any = [];
  public loader: any = true;
  public i1state: any = true;
  public i2state: any = false;
  public i3state: any = false;
  public i = 1;public employeeData:any;
  public i1: any = this.i;
  public i2: any = this.i1 + 1;
  public i3: any = this.i2 + 1;
p:number = 1;
filterList:any;
pageSize:number = 10;
  public itemid: any;
  public cafeData: any;
  constructor(
    private alert: AlertService,
    private router: Router,
    public request: Request,
    public api: RemoteApiService,
  ) { }

  ngOnInit() {
    this.getAllVisitor();
    this.getEmployee();
  }
  getAllVisitor() {
    // this.loader=true;
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.VISITOR;
    this.request.params = ""
    // this.request.body = data;
    console.log(this.request, "reqqqq")
    this.loader = true;
    this.api.requestObject(this.request).then(data => {
      this.loader = false;
      console.log(data, "dataLogin")
      this.visitorList = data;
      this.filterList = data;
      this.loader = false;
      console.log(JSON.stringify(data))
      // this.router.navigate(['/employeeManagement']);
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });

  }

  openDetail(itemID) {
    this.itemid = itemID;
    console.log(this.itemid, "itemID")
    let id = this.itemid;
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.VISITOR;
    this.request.params = itemID;
    this.request.body = "";
    this.api.requestObject(this.request).then(data => {
      this.visitorListDetail = data;
      console.log(JSON.stringify(data))
      // this.router.navigate(['/employeeManagement']);
    }, (err) => {

    });

  }
  getEmployee() {
    // console.log(data,"FormData")
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

  searchFilter(text: any) {
    this.filterList = this.visitorList.filter(result =>
      JSON.stringify(result.memeberCode).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
      JSON.stringify(result.name).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
      JSON.stringify(result.contactNo).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
      JSON.stringify(result.memebershipSince).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
      JSON.stringify(result.location).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||

       JSON.stringify(result).toLocaleLowerCase().includes(text.toLocaleLowerCase())
       );
  }
}
