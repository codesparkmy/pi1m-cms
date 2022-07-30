import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { UserserviceService } from '../../services/userservice.service';
import { RemoteApiService } from '../../../core/services/remote-service/remote-api.service';
import { AppConstants } from '../../../core/constants/AppConstants';
import { ApiUrlConstants } from '../../../core/constants/apiUrlConstants';
import { AppService } from '../../../core/services/app/app.service';
import { Request } from '../../../core/services/remote-service/reqResObj/Request';
import { LoginObject } from '../../../core/objects/loginObject';
import { AlertService } from '../../services/alert/alert.service';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  public resetForm: FormGroup;
  itemId: any;
  result: any;
  isreset: any = false;
  public prevId = "";
  constructor(
    private router: Router,
    public request: Request,
    public api: RemoteApiService,
    public app: AppService,
    private alert: AlertService,
    private form: FormBuilder,
    private userservice: UserserviceService,
    public activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.resetForm = this.form.group({
      newPassword: new FormControl('', Validators.compose([Validators.required])),
      confirmPassword: new FormControl('', [Validators.required])
    }, { validator: this.matchingPasswords('newPassword', 'confirmPassword') });
    this.activateRoute.params.subscribe(params => {
      this.prevId = params.id
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

  matchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
      let password = group.controls[passwordKey];
      let passwordConfirmation = group.controls[passwordConfirmationKey];
      if (password.value !== passwordConfirmation.value) {
        return passwordConfirmation.setErrors({ mismatchedPasswords: true })
      }
    }
  }

  createNewpassword(data) {
    let tempObj = {
      "newPassword": data.newPassword
    }
    this.itemId = this.result;
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.RESET_PASSWORD;
    this.request.params = this.prevId;
    this.request.body = tempObj
    console.log(this.request);
    this.api.requestObject(this.request).then(data => {
      this.alert.stickyAlerShow('Password Successfully updated', 'alert-success');
      this.moveToLogin();
      // this.isreset = true;
      // this.alert.stickyAlerShow('Password Successfully updated', 'alert-success');
      // setTimeout(() => {    //<<<---    using ()=> syntax
      //   this.isreset = false;
      // }, 3000);
      this.resetForm.reset();
      // this.router.navigate(['/resetPassword']);
    }, (err) => {
    });
  }

}
