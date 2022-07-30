import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiUrlConstants } from 'src/app/core/constants/apiUrlConstants';
import { AppConstants } from 'src/app/core/constants/AppConstants';
import { RemoteApiService } from 'src/app/core/services/remote-service/remote-api.service';
import { Request } from 'src/app/core/services/remote-service/reqResObj/Request';
import * as moment from 'moment';

@Component({
  selector: 'app-registration-edit',
  templateUrl: './registration-edit.component.html',
  styleUrls: ['./registration-edit.component.scss']
})
export class RegistrationEditComponent implements OnInit {

  public visitorDetails = [];
  public regForm: any;
  public membershipType = "";
  public showForm = false;
  public memberDetails = "";
  public setReadonly = false;
  public setfeeReadonly = false;
  public selectedVisitor = "";
  location: any;
  public userData;
  public locationid;
  public gstprice = 0;
  public sgstprice = 0;
  public regFee = 0;
  public total = 0;

  constructor(private router: Router,
    public request: Request,
    public api: RemoteApiService) { }

  ngOnInit() {
    this.setForm();
    this.userData = localStorage.getItem('userId');
    this.getLocation();
  }

  getLocation() {
    this.location = this.userData;
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.USER;
    this.request.params = this.location;
    this.request.body = "";
    this.api.requestObject(this.request).then(data => {
      this.locationid = data.branchAllocation;
      this.location = this.locationid;
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }

  setForm() {
    this.regForm = new FormGroup({
      visitorId: new FormControl('', [Validators.required]),
      memebershipSince: new FormControl('', [Validators.required]),
      year: new FormControl('', [Validators.required]),
      fees: new FormControl('', [Validators.required])
    });
  }

  getType(event) {
    this.setReadonly = false;
    this.setfeeReadonly = false;
    this.membershipType = event.target.value;
    this.showForm = true;
    if (event.target.value == "1") {
      this.request.params = "";
      this.request.reqModule = ApiUrlConstants.GET_REGISTERED;
    }
    else {
      this.request.params = "";
      this.request.reqModule = ApiUrlConstants.GET_MEMBERSHIP;
    }
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.api.requestObject(this.request).then(data => {
      this.visitorDetails = data;
    }, (err) => {
      console.error(err);
    });
  }

  getmemberDetails() {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.GET_MEMBER_SET;
    this.request.params = "1";
    this.api.requestObject(this.request).then(data => {
      this.memberDetails = data;
      this.gstprice = this.memberDetails['GstRate'];
      this.sgstprice = this.memberDetails['SgstRate'];
      this.regFee = this.memberDetails['registrationfees'];
      this.total = this.gstprice + this.sgstprice + this.regFee;
      if (this.membershipType != "1") {
        this.setReadonly = true;
        this.setfeeReadonly = true;
        let obj = {
          memebershipSince: moment(this.visitorDetails[0]['membership_to']).format("YYYY-MM-DD"),
          year: this.visitorDetails[0]['year'],
          fees: this.total
        }
        this.regForm.patchValue(obj);
      }
      else {
        this.regForm.patchValue({ fees: this.total })
        this.setReadonly = false;
        this.setfeeReadonly = true;
      }
    }, (err) => {
      console.error(err);
    });
  }

  getvisitor(event) {
    this.selectedVisitor = event.target.value;
    this.getmemberDetails();
  }

  getToday(): string {
    return new Date().toISOString().split('T')[0]
  }

  update(value) {
    if (this.membershipType == "1") this.request.params = "";
    else this.request.params = "1";
    let restObj = {
      "visitorId": value.visitorId,
      "membership_from": value.memebershipSince,
      "fee": this.total,
      "type": this.membershipType,
      "year": value.year,
      "createdBy": "1",
      "location": this.location
    }
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.GET_MEMBERSHIP;
    this.request.body = restObj;
    this.api.requestObject(this.request).then(data => {
      if (data.message) this.router.navigate(['/settings']);
    }, (err) => {
      console.error(err);
    });
  }

}
