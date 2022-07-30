import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { AlertService } from '../../../core/services/alert/alert.service';
import { UserserviceService } from '../../services/userservice.service';
import { RemoteApiService } from '../../../core/services/remote-service/remote-api.service';
import { AppConstants } from '../../../core/constants/AppConstants';
import { ApiUrlConstants } from '../../../core/constants/apiUrlConstants';
import { AppService } from '../../../core/services/app/app.service';
import { Request } from '../../../core/services/remote-service/reqResObj/Request';
import { LoginObject } from '../../../core/objects/loginObject';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  public resetForm: FormGroup;
  itemId: any;
  result: any;
  isreset:any = false;
  constructor(
    private router: Router,
    public request: Request,
    public api: RemoteApiService,
    public app: AppService,
    private alert: AlertService,
    private form: FormBuilder,
    private userservice: UserserviceService) { }

  ngOnInit() {
    this.resetForm = this.form.group({
      newpassword: new FormControl('', Validators.compose([Validators.required])),
      password: new FormControl('', [Validators.required])
    });
    let url = window.location.href;;
    let x = url.split(":");
    this.result = x.slice(-1);
    console.log(this.result);
    console.log(x)

  }
  moveToLogin() {
    this.router.navigate(['/login']);

  }
  createNewpassword(data) {
    this.itemId = this.result;
    console.log(this.itemId);
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.UPDATE_PASSWORD;
    this.request.params = this.itemId;
    this.request.body = data;
    this.api.requestObject(this.request).then(data => {
      console.log(data);
      this.isreset = true;

      this.alert.stickyAlerShow('Password Successfully updated', 'alert-success');
      setTimeout(() => {    //<<<---    using ()=> syntax
        this.isreset = false;
      }, 3000);
      this.resetForm.reset();
      // this.router.navigate(['/resetPassword']);
    }, (err) => {
    });
  }

}
