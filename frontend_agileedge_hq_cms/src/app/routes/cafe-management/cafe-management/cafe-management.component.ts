import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RemoteApiService } from '../../../core/services/remote-service/remote-api.service';
import { AppConstants } from '../../../core/constants/AppConstants';
import { ApiUrlConstants } from '../../../core/constants/apiUrlConstants';
import { AppService } from '../../../core/services/app/app.service';
import { Request } from '../../../core/services/remote-service/reqResObj/Request';
import { AlertService } from '../../services/alert/alert.service';
@Component({
  selector: 'app-cafe-management',
  templateUrl: './cafe-management.component.html',
  styleUrls: ['./cafe-management.component.scss']
})
export class CafeManagementComponent implements OnInit {
  public cafeData: any;
  public cafeListDetail: any;
  public loader: any = true;
  public i1state: any = true;
  public i2state: any = false;
  public i3state: any = false;
  public i = 1;
  public i1: any = this.i;
  public i2: any = this.i1 + 1;
  public i3: any = this.i2 + 1;
  public employeeData: any;
  filterList:any;
  public itemid: any;
  public p :number = 1;
  pageSize:number=10;
  constructor(
    private router: Router,
    public request: Request,
    public api: RemoteApiService,    private alert: AlertService,
    ) { }

  ngOnInit() {
    this.getCafe();
    this.getEmployee()
  }
  getCafe() {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.GET_ALL_CAFE;
    this.request.params = "";
    this.request.body = ""
    this.api.requestObject(this.request).then(data => {
      this.loader = false;
      console.log(data, "dataCafe")
      this.cafeData = data;
      this.filterList = data;
      console.log(this.cafeData, "cafeData")
      // this.router.navigate(['/employeeManagement']);

    }, (err) => {

    });

  }
  searchFilter(text: any) {
    this.filterList = this.cafeData.filter(result =>
      JSON.stringify(result.branchId).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
      JSON.stringify(result.branchName).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
      JSON.stringify(result.location).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
      JSON.stringify(result.contactNumber).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
      JSON.stringify(result.branchHead).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
      JSON.stringify(result).toLocaleLowerCase().includes(text.toLocaleLowerCase())
      );
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
  openCafeDetail(itemID) {
    this.itemid = itemID;
    console.log(this.itemid, "itemID")
    let id = this.itemid;
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.GET_ALL_CAFE;
    this.request.params = itemID;
    this.request.body = "";
    this.api.requestObject(this.request).then(data => {
      this.cafeListDetail = data;
      console.log(JSON.stringify(data))
      // this.router.navigate(['/employeeManagement']);
    }, (err) => {

    });

  }
  editCafe(itemid) {

    this.itemid = itemid;
    console.log(this.itemid, "itemID")
    let id = this.itemid;

    this.router.navigate(['cafeManagement/cafe'], { queryParams: { id: this.itemid } });

  }
  deleteCafe(itemid) {
    let data = {
      status: 2
    }
    this.itemid = itemid;
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.GET_ALL_CAFE;
    this.request.params = this.itemid;
    this.request.body = data;
    console.log(this.request, "reqqqq")
    this.api.requestObject(this.request).then(data => {
      this.alert.stickyAlerShow("Deleted Successfully", 'alert-success');
      this.getCafe();

    }, (err) => {

    });
    // this.router.navigate(['trainingManagement/create'], {queryParams: {id: this.itemid}});

  }


}
