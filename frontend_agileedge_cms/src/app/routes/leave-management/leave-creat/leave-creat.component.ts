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
  selector: 'app-leave-creat',
  templateUrl: './leave-creat.component.html',
  styleUrls: ['./leave-creat.component.scss']
})
export class LeaveCreatComponent implements OnInit {
  public leaveForm: any;
  public userData = localStorage.getItem('userId');
  public data: any;
  error: any = { isError: false, errorMessage: '' };
  public location: any;
  public locationid: any;
  public leaveTypeList = [];
  public locationName;
  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    public request: Request,
    public api: RemoteApiService,
    private route: ActivatedRoute, private alert: AlertService) {

  }

  ngOnInit() {
    this.getLocation();
    this.leaveForm = new FormGroup({
      fromDate: new FormControl('', [Validators.required]),
      toDate: new FormControl('', [Validators.required]),
      location: new FormControl(''),
      // reasonforLeave: new FormControl('', [Validators.required]),
      reason: new FormControl('', [Validators.required]),
    });
    // this.leaveForm.controls['location'].setValue(this.locationid);
    this.userData = localStorage.getItem('userId');
    this.getAllLeave();
    this.getLeavedata();
  }


  getLeavedata() {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.LEAVE_INV;
    this.request.params = "";
    this.api.requestObject(this.request).then(data => {
      this.leaveTypeList = data;
    }, (err) => {
      console.error(err);
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }

  getToday(): string {
    return new Date().toISOString().split('T')[0]
  }
  compareTwoDates() {
    if (new Date(this.leaveForm.controls['toDate'].value) < new Date(this.leaveForm.controls['fromDate'].value)) {
      this.error = { isError: true, errorMessage: 'From Date Should be greater than To Date' };
    } else {
      this.error = { isError: false }
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
      this.locationName = data.cafeBranch;
      this.locationid = data.branchAllocation;
      this.location = this.locationid;
      // this.leaveForm.controls['location'].patchValue(this.locationid);

    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });

  }
  getAllLeave() {
    // this.loader = true;
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.LEAVE;
    this.request.params = '';
    this.request.body = "";
    this.api.requestObject(this.request).then(data => {

      // this.router.navigate(['/leaveManagement']);
      this.leaveForm.reset();
    }, (err) => {

    });
  }
  addLeave(data) {
    let obj = {
      location: this.locationid,
      userId: this.userData
    }
    this.data = Object.assign(data, obj)
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.LEAVE;
    this.request.params = '';
    this.request.body = data;
    this.api.requestObject(this.request).then(data => {
      if( data.status == 0 ) {
        this.alert.stickyAlerShow( data.message, 'alert-danger');
      } else {
        this.alert.stickyAlerShow('Leave Applied Successful', 'alert-success');
        this.leaveForm.reset();
        this.router.navigate(['/leaveManagement']);
        this.getAllLeave();
      }
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }


}
