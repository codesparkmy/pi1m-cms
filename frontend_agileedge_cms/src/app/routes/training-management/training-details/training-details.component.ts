import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, NgForm } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { Router, ActivatedRoute } from '@angular/router';
import { RemoteApiService } from '../../../core/services/remote-service/remote-api.service';
import { AppConstants } from '../../../core/constants/AppConstants';
import { ApiUrlConstants } from '../../../core/constants/apiUrlConstants';
import { AppService } from '../../../core/services/app/app.service';
import { Request } from '../../../core/services/remote-service/reqResObj/Request';
import * as moment from 'moment';
import { Profile } from 'src/app/core/objects/loginObject';

@Component({
  selector: 'app-training-details',
  templateUrl: './training-details.component.html',
  styleUrls: ['./training-details.component.scss']
})
export class TrainingDetailsComponent implements OnInit {
  public trainingList: any;
  public itemid: any;
  public courseList: any;
  trainingDetails: any = [];
  public employeeData: Profile = new Profile();

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    public request: Request,
    public api: RemoteApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activateRoute.queryParams.subscribe(params => {
      this.itemid = params["id"];
    });
    this.getEmployee();
    if (this.itemid) {
      this.getTrainingDetail();
      this.getCourseDetail();
    }
  }
  getTrainingDetail() {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.TRAINING;
    this.request.params = this.itemid
    this.request.body = "";
    this.api.requestObject(this.request).then(data => {
      this.trainingDetails = data;
      // this.trainingList = new TraingDetail();
      this.trainingList = data.trainer;
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }
  getCourseDetail() {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.TRAINING_DETAIL;
    this.request.params = this.itemid
    this.request.body = "";
    this.api.requestObject(this.request).then(data => {
      this.courseList = data;
      // this.trainingList = new TraingDetail();
      // this.trainingList = data.trainer;

    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }

  getEmployee() {
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

  markAttend(item, event) {
    let restObj = {
      "attendance": event.target.checked,
      "courseRegisterId": item.id,
      "trainingId": item.trainingId,
      "member": item.id
    }
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.TRAINING_ATTENDENCE;
    this.request.params = ""
    this.request.body = restObj;
    this.api.requestObject(this.request).then(data => {
      this.getCourseDetail();
    }, (err) => {
      console.error(err);
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }


}

