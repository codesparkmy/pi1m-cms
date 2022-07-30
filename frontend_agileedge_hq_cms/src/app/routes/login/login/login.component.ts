import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginFormErrorShow: boolean = false;
  public loginForm: FormGroup;
  login: any;
  data:any;
  userData:any;
  invalidLogin: any = false;

  public loginObject: LoginObject = new LoginObject();

  constructor(
      private router: Router,
      public request: Request,
      public api: RemoteApiService,
      public app: AppService,
      private form: FormBuilder,
      private userservice: UserserviceService,public alert :AlertService ) {
        const emailPattern = '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,63}';

    this.loginForm = this.form.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(emailPattern)])],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {

    // this.loginForm = new FormGroup({
    //   email: new FormControl('', [Validators.required, Validators.email]),
    //   password: new FormControl('', [Validators.required])
    // });

  }

  onSubmit(data) {
    this.loginFormErrorShow = false;
    this.app.console('this.request');
    if (this.loginForm.valid) {
      this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
      // this.request.url = this.app.apiUrlLink;
      this.request.type = AppConstants.API_POST;
      this.request.reqModule = ApiUrlConstants.LOGIN;
      this.request.body = data;
      this.request.params = "";
      console.log(AppConstants.SERVER_URI_OBJECT['core'],"CORE")
      this.app.console(this.request);
      
      this.api.requestObject(this.request).then(data => {
        console.log(data,"login")
        console.log(JSON.stringify(data))
        this.userData={
          userID:data.id,
          userEmail:data.email
        }
        localStorage.setItem('user',this.userData);
        localStorage.setItem('userId', this.userData.userID);
        localStorage.setItem('userEmail', this.userData.userEmail);

        localStorage.setItem('auth_token',data.token);
        this.alert.stickyAlerShow('Login Successful', 'alert-success');

        this.router.navigate(['/dashboard']);
    }, (err) => {
      this.invalidLogin = true;

      setTimeout(() => {
        this.invalidLogin = false;
      }, 3000);
        // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
        this.app.console('err login----' + JSON.stringify(err.error));
        // this.errLogin = err.error;
      });
      // this.userservice.login(this.loginForm.value).then((result)=>{
      //   this.login = result;
      //    console.log(result);
      //     if(this.login.status == 1){
      //       var token = result['token'];
      //       var userID = result['userData']['id'];
      //       var username = result['userData']['name'];

      //       localStorage.setItem('auth_token',token);
      //       console.log('authtoken',token);
      //       localStorage.setItem('currentUser',userID);



      //         this.router.navigate(['/dashboard']);
      //         console.log('Valid!');
      //         alert("fdeffew");

      //       }else{
      //         this.router.navigate(['/login']);


      //       }

      // },(err)=>{
      // console.log(err);
      // });
    } else {
      this.loginFormErrorShow = true;
      this.app.console('not Valid!');
    }
  }



}
