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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginFormErrorShow: boolean = false;
  public loginForm: FormGroup;
  invalidLogin: any = false;
  loadingText:boolean = false;
  login: any;
  data: any;
  userData: any;
  public loginObject: LoginObject = new LoginObject();
  email: any;

  constructor(
    private router: Router,
    public request: Request,
    public api: RemoteApiService,
    public app: AppService,
    private alert: AlertService,
    private form: FormBuilder,
    private userservice: UserserviceService) {
    const emailPattern = '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,63}';

    this.loginForm = this.form.group({
      email: new FormControl('', Validators.compose([Validators.required, Validators.pattern(emailPattern)])),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
    localStorage.clear();
    // this.loginForm = new FormGroup({
    //   email: new FormControl('', [Validators.required, Validators.email]),
    //   password: new FormControl('', [Validators.required])
    // });

  }

  onSubmit() {
    this.loadingText = true;
    this.invalidLogin = false;
    this.loginFormErrorShow = false;
    this.app.console('this.request');
    if (this.loginForm.valid) {
      this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
      this.request.type = AppConstants.API_POST;
      this.request.reqModule = ApiUrlConstants.LOGIN;
      this.request.body = this.loginObject;
      this.request.params = '';
      this.app.console(this.request);
      this.api.requestObject(this.request).then(data => {
        this.loadingText = false;
        this.alert.stickyAlerShow('Login Successful', 'alert-success');
        console.log(data, "dataLogin")
        console.log(JSON.stringify(data))
        let message = "happy"
        // this.alert.showSuccess(message);
        this.userData = {
          userID: data.id,
          userEmail: data.email
        }
        localStorage.setItem('userId', this.userData.userID);
        localStorage.setItem('userEmail', this.userData.userEmail);
        localStorage.setItem('auth_token', 'Bearer ' + data.token);
        this.router.navigate(['/dashboard']);
      }, (err) => {
        // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');

        // var that = this; // no need of this line
        this.invalidLogin = true;

        setTimeout(() => {    //<<<---    using ()=> syntax
          this.invalidLogin = false;
        }, 3000);
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
      this.invalidLogin = true;
      this.loginFormErrorShow = true;
      this.app.console('not Valid!');
    }
  }



}
