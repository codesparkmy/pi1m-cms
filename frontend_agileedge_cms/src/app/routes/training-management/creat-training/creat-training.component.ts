import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators, NgForm } from '@angular/forms';
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
  selector: 'app-creat-training',
  templateUrl: './creat-training.component.html',
  styleUrls: ['./creat-training.component.scss']
})
export class CreatTrainingComponent implements OnInit {
  public trainingForm: any;
  public courseCode: any;
  public courseType: any;
  public duration: any;
  public durationType: any;
  public fee: any = '';
  public enrolled: any;
  public maximumSubscription: any;
  public trainer: any;
  public courseDuration: any;
  public itemid: any;
  trainersDeList: any;
  locationid: any;
  location: any;
  public data: any;
  trainerName: any;
  public employeeData: any;
  formBuilder: any;
  actualFee: any;
  public trainingList = [];
  public isClicked: any = true;
  public targetList = [];

  constructor(private router: Router,
    private activateRoute: ActivatedRoute,
    public request: Request,
    public api: RemoteApiService,
    private route: ActivatedRoute,
    private alert: AlertService,
    private formbuilder: FormBuilder) {
  }

  ngOnInit() {
    this.getTrainingType();
    this.getTargetList();
    this.trainingForm = new FormGroup({
      course: new FormControl('', [Validators.required]),
      courseCode: new FormControl('', [Validators.required]),
      courseType: new FormControl('', [Validators.required]),
      fee: new FormControl('', [Validators.required]),
      // enrolled: new FormControl('', [Validators.required]),
      maximumSubscription: new FormControl('', [Validators.required]),
      trainer: new FormControl('', [Validators.required]),
      // courseDuration: new FormControl('', [Validators.required]),
      trainingDate: new FormControl('', [Validators.required]),
      startTime: new FormControl('', [Validators.required]),
      endTime: new FormControl('', [Validators.required]),
      courseTarget: new FormControl('', [Validators.required])
    });
    this.activateRoute.queryParams.subscribe(params => {
      this.itemid = params["id"];
    });
    // this.getTrainer();
    // this.getEmployee();
    this.getLocation()
    if (this.itemid) {
      this.editTraining()
    }
  }
  addTraining(data) {
    this.isClicked = false;
    let obj = {
      location: this.locationid
    }
    let tempPayload = Object.assign(obj, data);
    // tempPayload['courseDuration'] = tempPayload['hours'] + ':' + tempPayload['minutes'];
    tempPayload['fee'] = this.actualFee;
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.TRAINING;
    this.request.params = '';
    this.request.body = tempPayload;
    this.api.requestObject(this.request).then(data => {
      this.alert.stickyAlerShow('Created Successful', 'alert-success');
      this.router.navigate(['/trainingManagement']);
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }
  editTraining() {
    // debugger
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.TRAINING;
    this.request.params = this.itemid
    this.request.body = "";

    this.api.requestObject(this.request).then(data => {
      this.trainersDeList = [];
      this.trainersDeList.push(data.trainer);
      this.trainerName = data.trainer.fullName;
      // let date=data[0].dob
      // let date1=data[0].memebershipSince
      // this.dob=moment(date).format("YYYY-MM-DD")
      // let memberSince=moment(date1).format("YYYY-MM-DD")
      this.trainingForm.patchValue({
        course: data.course,
        courseCode: data.courseCode,
        courseType: data.courseType,
        fee: data.fee,
        // enrolled: data.enrolled,
        maximumSubscription: data.maximumSubscription,
        trainer: this.trainersDeList[0].id,
        // courseDuration: data.courseDuration,
        trainingDate: moment(data.trainingDate).format("YYYY-MM-DD"),
        startTime: data.start_hour,
        endTime: data.end_hour,
        courseTarget: data.courseTarget
      });
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

  onKey(event) {
    let phone = event.target.value;
    const regex = /^\(?([1-9]{1})\)?[,]?([1-9]{3})[,]?([0-9]{3})$/;

    this.fee = regex.test(phone);

  }
  keyEvent(event) {
    this.actualFee = event.target.value;
    let value = event.target.value
    this.fee = this.destroyMask(value);
    this.fee = this.createMask(value);
  }
  editMask(fee) {
    this.actualFee = fee;
    this.fee = this.createMask(fee);
    this.fee = this.destroyMask(fee);
  }
  createMask(value) {
    if (value.length < 4) {

      return value.replace(/(\d{1})(\d{3})/, "$1,$2");
    }
    else {
      return value.replace(/(\d{2})(\d{3})/, "$1,$2");
    }


  }
  destroyMask(value) {
    return value.replace(/\D/g, '').substring(0, 4);

  }
  updateVisitor(data) {
    data.fee = this.actualFee;
    // data['courseDuration'] = data['hours'] + ':' + data['minutes'];
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.TRAINING;
    this.request.body = data;
    this.request.params = this.itemid;
    this.api.requestObject(this.request).then(data => {
      this.alert.stickyAlerShow('Updated Successful', 'alert-success');
      this.router.navigate(['/trainingManagement']);
    }, (err) => {
      this.alert.stickyAlerShow("Trainer Need to be Add", 'alert-danger');
      // this.errLogin = err.error;
    });
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
      this.getTrainer();
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });

  }
  getTrainer() {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.LOCATION_USER;
    this.request.params = this.locationid;
    this.request.body = "";
    this.api.requestObject(this.request).then(data => {
      this.trainersDeList = data;
      // this.router.navigate(['/employeeManagement']);
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });

  }

  getTrainingType() {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.TRAINING_TYPE_GET;
    this.request.params = "";
    this.api.requestObject(this.request).then(data => {
      this.trainingList = data;
    }, (err) => {
      console.error(err);
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }

  getTargetList() {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.TARGET_INV;
    this.request.params = "";
    this.api.requestObject(this.request).then(data => {
      this.targetList = data;
    }, (err) => {
      console.error(err);
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }

}
