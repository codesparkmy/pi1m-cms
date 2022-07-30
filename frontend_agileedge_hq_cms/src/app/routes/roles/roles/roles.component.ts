import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, NgForm } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { Router, ActivatedRoute } from '@angular/router';
import { RemoteApiService } from '../../../core/services/remote-service/remote-api.service';
import { AppConstants } from '../../../core/constants/AppConstants';
import { ApiUrlConstants } from '../../../core/constants/apiUrlConstants';
import { AppService } from '../../../core/services/app/app.service';
import { Request } from '../../../core/services/remote-service/reqResObj/Request';
import { AlertService } from '../../services/alert/alert.service';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {
  public employeeForm: FormGroup;
  public positionId: any;
  @ViewChild('visitorDetailModal') visitorDetailModal: ModalDirective;

  public loader: any = true;
  public i1state: any = true;
  public i2state: any = false;
  public i3state: any = false;
  public i = 1;
  public i1: any = this.i;
  public i2: any = this.i1 + 1;
  public i3: any = this.i2 + 1;
  roleData: any;
  employeeloginData: any;
  viewEmployeeData: any;
  itemid: any;
  filterList: any;
  p: number = 1;
  pageSize: number = 10;
  constructor(
    private router: Router, private activateRoute: ActivatedRoute,

    public request: Request, private alert: AlertService,

    public api: RemoteApiService,) { }

  ngOnInit() {
    // this.activateRoute.queryParams.subscribe(params => {
    //   this.itemid = params["id"];
    // });
    // console.log('id', this.itemid);
    // if (this.itemid) {
    //   // this.viewEmployee()
    // }
    this.getRoleList();
    // this.employeeForm = new FormGroup({
    //   positionId: new FormControl(this.positionId, [Validators.required]),
    // });
  }
  getRoleList() {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.GET_ALL_ROLES;
    this.request.params = ""
    this.api.requestObject(this.request).then(data => {
      console.log(data);
      this.loader = false;
      this.roleData = data;
      // this.router.navigate(['/employeeManagement']);

    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });

  }
  viewEmployee(id) {
    // this.getEmployee()
    // this.itemid = id;

    // console.log(this.itemid, "SElectedID")
    // this.employeeData.map((data) => {
    //   console.log(data['id'], "employeeDATA")
    //   if (id == data['id']) {
    //     this.viewEmployeeData = data;
    //     console.log(this.viewEmployeeData, "ViewEmployee")
    //   }
    // });
    // this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    // this.request.type = AppConstants.API_GET;
    // this.request.reqModule = ApiUrlConstants.USER;
    // this.request.params = this.itemid
    // this.request.body = "";
    // console.log(this.request, "reqqqq")
    // this.api.requestObject(this.request).then(data => {

    //   this.employeeForm.setValue({
    //     positionId: data.positionId,
    //   })
    //   console.log(this.employeeForm, "emp id")

    // }, (err) => {

    // });

  }
  searchFilter(text: any) {
    // this.filterList = this.employeeData.filter(result =>
    //   JSON.stringify(result.fullName).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
    //   JSON.stringify(result.employeeId).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
    //   JSON.stringify(result.phoneNumber).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
    //   JSON.stringify(result.positionId).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
    //   JSON.stringify(result).toLocaleLowerCase().includes(text.toLocaleLowerCase())
    //   );
  }
  updateEmployee(data) {

    // let obj = {
    //   positionId: data.positionId,
    // }
    // console.log(data, "FormData")
    // this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    // this.request.type = AppConstants.API_POST;
    // this.request.reqModule = ApiUrlConstants.Update_EMPLOYEE;
    // this.request.body = obj;
    // this.request.params = this.itemid;
    // this.api.requestObject(this.request).then(data => {
    //   console.log(data, "updatevisitor");
    //   this.visitorDetailModal.hide();
    //   this.getEmployee();
    //   this.alert.stickyAlerShow('Updated Successful', 'alert-success');

    //   // this.router.navigate(['/employeeManagement']);
    // }, (err) => {
    //   // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
    //   // this.errLogin = err.error;
    // });
  }
  editRole(id) {
    this.router.navigate(['/roles/createRole'], { queryParams: { id: id } });
  }

}
