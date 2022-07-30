import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, NgForm } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { Router } from '@angular/router';
import { RemoteApiService } from '../../../core/services/remote-service/remote-api.service';
import { AppConstants } from '../../../core/constants/AppConstants';
import { ApiUrlConstants } from '../../../core/constants/apiUrlConstants';
import { AppService } from '../../../core/services/app/app.service';
import { Request } from '../../../core/services/remote-service/reqResObj/Request';

@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.scss']
})
export class EmployeeManagementComponent implements OnInit {
  public employeeData: any;
  public itemid: any;
  public filterList: any;
  p: number = 1;
  public loader: any = true;
  public i1state: any = true;
  public i2state: any = false;
  public i3state: any = false;
  public i = 1;
  public i1: any = this.i;
  public i2: any = this.i1 + 1;
  public i3: any = this.i2 + 1;
  public viewEmployeeData: any;
  employeeloginData: any;
  pageSize: number = 10;
  constructor(
    private router: Router,
    public request: Request,
    public api: RemoteApiService
  ) { }

  ngOnInit() {
    this.getloginEmployee(); this.getEmployee()
  }
  getEmployee() {
    // console.log(data,"FormData")
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.GET_ALL_EMPLOYEE;
    this.request.params = ""
    this.api.requestObject(this.request).then(data => {
      this.loader = false;
      this.employeeData = data;
      this.filterList = this.employeeData;
      this.employeeloginData = data.find(empDetails => empDetails.id == localStorage.getItem('userId'));

      console.log(this.employeeData, "DATAEMPLOYEE")
      // this.router.navigate(['/employeeManagement']);

    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });

  }
  getToday(): string {
    return new Date().toISOString().split('T')[0]
  }
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
  getloginEmployee() {
    // console.log(data,"FormData")
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.GET_ALL_EMPLOYEE;
    this.request.params = ""
    this.api.requestObject(this.request).then(result => {
      this.loader = false;
      this.employeeData = result;
      this.filterList = result;
      this.employeeloginData = result.find(empDetails => empDetails.id == localStorage.getItem('userId'));

      console.log(this.employeeData, "DATAEMPLOYEE")
      // this.router.navigate(['/employeeManagement']);

    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });

  }
  viewEmployee(id) {
    this.getEmployee();
    this.itemid = id;
    this.employeeData.map((data) => {
      if (id == data['id']) {
        // data['profilePicture'] = './assert/' + data['profilePicture'];
        this.viewEmployeeData = data;

        // this.viewEmployeeData.profilePicture = './assets/images/' + data['profilePicture'];
        console.log(this.viewEmployeeData, "ViewEmployee");
      }
    });

  }

  editEmployee(itemid) {

    this.itemid = itemid;
    console.log(this.itemid, "EditID")
    let id = this.itemid;

    this.router.navigate(['/employeeManagement/employee'], { queryParams: { id: this.itemid } });

  }
  searchFilter(text: any) {
    this.filterList = this.employeeData.filter(result =>
      JSON.stringify(result.fullName).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
      JSON.stringify(result.employeeId).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
      JSON.stringify(result.email).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
      JSON.stringify(result.positionId).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
      JSON.stringify(result.phoneNumber).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
      JSON.stringify(result).toLocaleLowerCase().includes(text.toLocaleLowerCase())
    );

  }
  deleteEmployee(itemid) {
    let data = {
      userstatus: false
    }
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.Update_EMPLOYEE;
    this.request.params = itemid
    this.request.body = data;
    this.api.requestObject(this.request).then(data => {
      console.log(data, "dataLogin")
      this.getEmployee();

      // this.router.navigate(['/employeeManagement']);
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }

  resetPassword(data) {
    this.router.navigate(['login/resetPassword/' + data]);
  }

}
