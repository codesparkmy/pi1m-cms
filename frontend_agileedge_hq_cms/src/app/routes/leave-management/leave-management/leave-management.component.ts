import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, NgForm } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { Router, ActivatedRoute } from '@angular/router';
import { RemoteApiService } from '../../../core/services/remote-service/remote-api.service';
import { AppConstants } from '../../../core/constants/AppConstants';
import { ApiUrlConstants } from '../../../core/constants/apiUrlConstants';
import { AppService } from '../../../core/services/app/app.service';
// import { AlertService } from '../../../core/services/alert/alert.service';
import { Request } from '../../../core/services/remote-service/reqResObj/Request';
import * as moment from 'moment';
import { AlertService } from '../../services/alert/alert.service';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-leave-management',
  templateUrl: './leave-management.component.html',
  styleUrls: ['./leave-management.component.scss']
})
export class LeaveManagementComponent implements OnInit {
  @ViewChild('LeaveDetModal') LeaveDetModal: ModalDirective ;

  public leaveForm: any;
  public userData = localStorage.getItem('userId');
  public data: any;
  itemid: any;
  leaveListDetail: any = [];
  leaveList: any; public loader: any = true;
  public i1state: any = true;
  public i2state: any = false;
  public i3state: any = false;
  public i = 1;
  public i1: any = this.i;
  public i2: any = this.i1 + 1;
  public i3: any = this.i2 + 1;
  filterList: any;
  p: number = 1;
  pageSize:number = 10;
  userdetails:any;
  constructor(
    private router: Router,
    private alert: AlertService,
    private activateRoute: ActivatedRoute,
    public request: Request,
    public api: RemoteApiService,
    private route: ActivatedRoute) {
    this.leaveForm = new FormGroup({
      reasonforLeave: new FormControl('', [Validators.required]),
      fromDate: new FormControl('', [Validators.required]),
      toDate: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
    this.getAllLeave()
    // this.user=localStorage.getItem('user');
    this.userData = localStorage.getItem('userId');
    console.log(this.userData, "USERDATA")

    // console.log(this.user,"USERDATA")
  }
  getAllLeave() {
    this.loader = true;
    console.log(this.data, "leaveFormData")
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.LEAVE;
    this.request.params = '';
    this.request.body = "";
    this.api.requestObject(this.request).then(data => {
      this.loader = false;
      this.leaveList = data;
      this.userdetails = data.userId;
      console.log(this.userdetails,'user')
      this.filterList = data;

      console.log('hi', this.leaveList)
      // this.router.navigate(['/leaveManagement']);
      this.leaveForm.reset();
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }
  openLeaveDetail(itemID) {
    this.itemid = itemID;
    console.log(this.itemid, "itemID")
    let id = this.itemid;
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.LEAVE;
    this.request.params = itemID;
    this.request.body = "";
    this.api.requestObject(this.request).then(data => {
      this.leaveListDetail = data;
      console.log(this.leaveListDetail)
      // this.router.navigate(['/employeeManagement']);
    }, (err) => {

    });

  }
  leaveStatus(id, status) {
    let obj = {
      leaveStatus: status
    }
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.LEAVE;
    this.request.params = id;
    this.request.body = obj;
    this.api.requestObject(this.request).then(data => {
      this.leaveListDetail = data;

      this.LeaveDetModal.hide();

      this.alert.stickyAlerShow(data['message'], 'alert-success');
      this.getAllLeave();
      console.log('success')
      // this.router.navigate(['/employeeManagement']);
    }, (err) => {

    });

  }
  searchFilter(text: any) {
    this.filterList = this.leaveList.filter(result =>
           JSON.stringify(result).toLocaleLowerCase().includes(text.toLocaleLowerCase())
      );
  }
  onClick() {
    let message = "Help!!!"
    // this.alert.stickyAlerShow(message, 'alert-danger');
    this.alert.show("Confirmation", "Are you Sure to delete this?", 'confirm').then(value => {
      if (value == true) {


      } else {
      }

    }, (err) => {


    });
  }

}
