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
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  public ForgotForm: FormGroup;
  invalidLogin: any = false;
  invaliduser: any = false;
  public loginFormErrorShow: boolean = false;

  constructor(
    private router: Router,
    public request: Request,
    public api: RemoteApiService,
    public app: AppService,
    private alert: AlertService,
    private form: FormBuilder,
    private userservice: UserserviceService) { }

  ngOnInit() {
    const emailPattern = '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,63}';

    this.ForgotForm = this.form.group({
      email: new FormControl('', Validators.compose([Validators.required, Validators.pattern(emailPattern)])),

    });
  }
  moveToLogin() {
    this.router.navigate(['/login']);

  }
  resetPassword(data) {
    this.loginFormErrorShow = false;

    this.invalidLogin = false;
    this.invaliduser = false;
    let obj = {
      email: data.email,
      phoneNumber: 123456789,
      fullName: 'test',
      employeeId: 'test',
      subscriptionId: 54645,
    }

    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.FORGOT_PASSWORD;
    this.request.params = "";
    this.request.body = obj;
    this.api.requestObject(this.request).then(data => {

      this.invalidLogin = true;

      setTimeout(() => {
        this.invalidLogin = false;
      }, 3000);
      this.router.navigate(['/login']);
    }, (err) => {
      // this.loginFormErrorShow = false;
      this.invaliduser = true;
      setTimeout(() => {
        this.invaliduser = false;
      }, 3000);
      this.alert.stickyAlerShow('User Not found', 'alert-danger');

    });

  }

}
