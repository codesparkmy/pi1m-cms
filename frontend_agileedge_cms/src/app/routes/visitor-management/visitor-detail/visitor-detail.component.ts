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
import { Profile } from 'src/app/core/objects/loginObject';


@Component({
  selector: 'app-visitor-detail',
  templateUrl: './visitor-detail.component.html',
  styleUrls: ['./visitor-detail.component.scss']
})
export class VisitorDetailComponent implements OnInit {
  public employeeData: Profile = new Profile();

  totalHours: any;
  public visitorForm: any;
  public visitorData: [];
  public viewMode: any;
  public name: any;
  public itemid: any;
  public memeberCode: any;
  public subscriptionId: any;
  public nrciNo: any;
  public dob: any = moment().format("YYYY-MM-DD");
  public gender: any;
  public isBumi: any;
  public contactNo: any;
  public martialStatus: any;
  public incomeLevel: any;
  public memebershipSince: any = moment().format("YYYY-MM-DD");;
  public emailId: any;
  public profileImg: any;
  visitorList: any;
  posList: any;
  public isImagePresent: any = false;
  public totalhoursList: any;
  public recentActivityList: any;
  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    public request: Request,
    public api: RemoteApiService,
    private route: ActivatedRoute,

  ) {
    this.viewMode = "customer"
    this.visitorForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      memeberCode: new FormControl('', [Validators.required]),
      subscriptionId: new FormControl('', [Validators.required]),
      nrciNo: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      isBumi: new FormControl('', [Validators.required]),
      contactNo: new FormControl('', [Validators.required]),
      martialStatus: new FormControl('', [Validators.required]),
      incomeLevel: new FormControl('', [Validators.required]),
      memebershipSince: new FormControl('', [Validators.required]),
      emailId: new FormControl('', [Validators.required])
    });

  }

  ngOnInit() {
    this.activateRoute.queryParams.subscribe(params => {
      this.itemid = params["id"];
    });
    this.getEmployee();
    this.profileImg = "./assets/images/user.jpg"
    this.getRecentactivity();
    this.getTotalhours();
    if (this.itemid) {
      this.getAllVisitor();
      this.getPos();
    }
  }

  getAllVisitor() {
    // this.loader=true;
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.VISITOR;
    this.request.params = this.itemid
    this.request.body = "";
    // this.loader = true;
    this.api.requestObject(this.request).then(data => {
      this.visitorList = data;
      if (data.profileImage !== "" && data.profileImage !== undefined) {
        this.profileImg = data.profileImage;
        this.isImagePresent = true;
      }
      else {
        this.profileImg = "./assets/images/user.jpg"
        this.isImagePresent = false;

      }

      // this.loader = false;
      console.log(JSON.stringify(data))
      // this.router.navigate(['/employeeManagement']);
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });

  }
  getPos() {
    // this.loader=true;
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.POS_SYSTEM_USER;
    this.request.params = this.itemid;
    this.request.body = "";
    this.api.requestObject(this.request).then(data => {
      this.posList = data;
      this.totalHours = this.posList.totalHours;
      // this.router.navigate(['/employeeManagement']);
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });

  }
  getTotalhours() {
    // this.loader=true;
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.TOTAL_HOURS;
    this.request.params = this.itemid;
    this.request.body = "";
    this.api.requestObject(this.request).then(data => {
      this.totalhoursList = data;
      // this.router.navigate(['/employeeManagement']);
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });

  }
  getRecentactivity() {
    // this.loader=true;
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.RECENT_ACTIVITY;
    this.request.params = this.itemid;
    this.request.body = "";
    this.api.requestObject(this.request).then(data => {
      this.recentActivityList = data;
      // this.router.navigate(['/employeeManagement']);
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
  editVisitor(itemid) {

    this.itemid = itemid;
    let id = this.itemid
    this.router.navigate(['visitorManagement/visitor'], { queryParams: { id: this.itemid } });

  }
}
