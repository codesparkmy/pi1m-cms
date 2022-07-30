import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiUrlConstants } from 'src/app/core/constants/apiUrlConstants';
import { AppConstants } from 'src/app/core/constants/AppConstants';
import { AlertService } from 'src/app/core/services/alert/alert.service';
import { RemoteApiService } from 'src/app/core/services/remote-service/remote-api.service';
import { Request } from 'src/app/core/services/remote-service/reqResObj/Request';

@Component({
  selector: 'app-gst-edit',
  templateUrl: './gst-edit.component.html',
  styleUrls: ['./gst-edit.component.scss']
})
export class GstEditComponent implements OnInit {

  public gstForm: any;
  public prevId = "";
  public location = "";
  public locationid = "";

  constructor(private router: Router,
    private activateRoute: ActivatedRoute,
    public request: Request,
    public api: RemoteApiService,
    private alert: AlertService) {
    this.gstForm = new FormGroup({
      gstRate: new FormControl('', [Validators.required,Validators.max(99)]),
      sgstRate: new FormControl('', [Validators.required,Validators.max(99)]),
    });
  }

  ngOnInit() {
    this.activateRoute.queryParams.subscribe(params => {
      this.prevId = params["id"];
    });
    if (this.prevId) this.setDefault()
    this.getLocation();
  }

  setDefault() {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.BILL_GENERATE;
    this.request.params = '/' +this.prevId
    this.api.requestObject(this.request).then(data => {
      let tempObj = {
        gstRate: data['GstRate'],
        sgstRate: data['SgstRate']
      }
      this.gstForm.setValue(tempObj);
    }, (err) => {
      console.error(err);
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
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
      this.location = this.locationid;
    }, (err) => {
      console.error(err);
    });
  }


  updategst(data) {
    let restObj = {
      location: this.location,
      gstRate: data['gstRate'],
      sgstRate: data['sgstRate']
    }
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    // this.request.reqModule = ApiUrlConstants.BILL_GENERATE;
    this.request.reqModule = ApiUrlConstants.TAX_SETTINGS;
    this.request.body = restObj;
    // this.request.params = '/' + this.prevId;
    this.request.params = "";
    this.api.requestObject(this.request).then(data => {
      this.router.navigate(['/settings']);
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }

}
