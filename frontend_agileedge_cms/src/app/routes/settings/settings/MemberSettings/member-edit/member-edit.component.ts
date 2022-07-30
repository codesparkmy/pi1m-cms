import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiUrlConstants } from 'src/app/core/constants/apiUrlConstants';
import { AppConstants } from 'src/app/core/constants/AppConstants';
import { AlertService } from 'src/app/core/services/alert/alert.service';
import { RemoteApiService } from 'src/app/core/services/remote-service/remote-api.service';
import { Request } from 'src/app/core/services/remote-service/reqResObj/Request';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.scss']
})
export class MemberEditComponent implements OnInit {

  public memberForm: any;
  public prevId = "";
  public location = "";
  public locationid = "";

  constructor(private router: Router,
    private activateRoute: ActivatedRoute,
    public request: Request,
    public api: RemoteApiService,
    private alert: AlertService) {
    this.memberForm = new FormGroup({
      registrationfees: new FormControl('', [Validators.required]),
      renewalfees: new FormControl('', [Validators.required]),
      browsePerhours: new FormControl('', [Validators.required]),
      serviceCharge: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
    this.activateRoute.queryParams.subscribe(params => {
      this.prevId = params["id"];
      if (this.prevId) this.getData();
    });
    this.getLocation()
  }

  getData() {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.GET_MEMBER_SET;
    this.request.params = "1";
    this.api.requestObject(this.request).then(data => {
      let tempObj = {
        registrationfees: data['registrationfees'],
        renewalfees: data['renewalfees'],
        browsePerhours: data['browsePerhours'],
        serviceCharge: data['serviceCharge'],
      }
      this.memberForm.patchValue(tempObj);
    }, (err) => {
      console.error(err);
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
      this.location = this.locationid;
    }, (err) => {
      console.error(err);
    });
  }

  updateMember(value) {
    let restObj = {
      "browsePerhours": value.browsePerhours,
      "locationId": this.location,
      "registrationfees": value.registrationfees,
      "renewalfees": value.renewalfees,
      "serviceCharge": value.serviceCharge
    }
    this.location = localStorage.getItem('userId');
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.UPDATE_MEMBER;
    this.request.params = "1";
    this.request.body = restObj;
    this.api.requestObject(this.request).then(data => {
      this.router.navigate(['/settings']);
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }

}
