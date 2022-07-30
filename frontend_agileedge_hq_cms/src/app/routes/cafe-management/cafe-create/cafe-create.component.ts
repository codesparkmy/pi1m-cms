import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, NgForm } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { Router, ActivatedRoute } from '@angular/router';
import { RemoteApiService } from '../../../core/services/remote-service/remote-api.service';
import { AppConstants } from '../../../core/constants/AppConstants';
import { ApiUrlConstants } from '../../../core/constants/apiUrlConstants';
import { AppService } from '../../../core/services/app/app.service';
import { Request } from '../../../core/services/remote-service/reqResObj/Request';
import { AlertService } from '../../services/alert/alert.service';

@Component({
  selector: 'app-cafe-create',
  templateUrl: './cafe-create.component.html',
  styleUrls: ['./cafe-create.component.scss']
})
export class CafeCreateComponent implements OnInit {
  public branchForm: any;
  public branchId: any;
  public branchName: any;
  public branchHead: any;
  public contactNumber: any;
  public capacityOfBranch: any;
  public gstNumber: any;
  public itemid: any;
  constructor(
    private router: Router,
    public request: Request,
    public api: RemoteApiService,
    private alert: AlertService,
    private activateRoute: ActivatedRoute,
  ) {
    this.branchForm = new FormGroup({
      branchId: new FormControl('', [Validators.required]),
      branchName: new FormControl('', [Validators.required]),
      branchHead: new FormControl('', [Validators.required]),
      contactNumber: new FormControl('', [Validators.required]),
      capacityOfBranch: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required]),
      assitbranchHead: new FormControl('', [Validators.required]),
      gstNumber: new FormControl('', [Validators.required])
    })
  }

  ngOnInit() {
    this.activateRoute.queryParams.subscribe(params => {
      this.itemid = params["id"];
    });
    console.log(this.itemid)
    if (this.itemid) {
      this.editBranch()
    }
  }
  addBranch(data) {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.GET_ALL_CAFE;
    this.request.body = data;
    this.request.params = "";
    this.api.requestObject(this.request).then(data => {
      console.log(data.status, "dataLogin");
      if (data.data==undefined) {
        console.log(data.data, "dataLogin");
        this.alert.stickyAlerShow(data.message, 'alert-danger');
        this.branchForm.reset();
      } else {
        this.alert.stickyAlerShow("Created Successfully", 'alert-success');
        this.router.navigate(['/cafeManagement']);

      }

      console.log(JSON.stringify(data))

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
  updateBranch(data) {

    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.GET_ALL_CAFE;
    this.request.body = data;
    this.request.params = this.itemid;
    this.api.requestObject(this.request).then(data => {
      console.log(data, "updatevisitor");

      console.log(JSON.stringify(data));
      this.alert.stickyAlerShow('Updated Successful', 'alert-success');

      this.router.navigate(['/cafeManagement']);
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }
  editBranch() {

    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.GET_ALL_CAFE;
    this.request.params = this.itemid
    this.request.body = "";
    console.log(this.request, "reqqqq")
    this.api.requestObject(this.request).then(data => {
      this.branchForm.setValue({
        branchId: data.branchId,
        branchName: data.branchName,
        branchHead: data.branchHead,
        contactNumber: data.contactNumber,
        capacityOfBranch: data.capacityOfBranch,
        location: data.location,
        assitbranchHead: data.assitbranchHead,
        gstNumber: data.gstNumber,


      })

    }, (err) => {

    });
  }
}


