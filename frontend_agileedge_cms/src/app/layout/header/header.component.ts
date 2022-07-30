import { Component, OnInit, ViewChild } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, NgForm } from '@angular/forms';
// import { SharedModule } from '../../../shared/shared.module';
import { Router } from '@angular/router';
import { RemoteApiService } from 'src/app/core/services/remote-service/remote-api.service';
import { AppConstants } from 'src/app/core/constants/AppConstants';
import { ApiUrlConstants } from 'src/app/core/constants/apiUrlConstants';
import { AppService } from 'src/app/core/services/app/app.service';
import { Request } from 'src/app/core/services/remote-service/reqResObj/Request';
import { ProfileService } from 'src/app/core/services/profile/profile.service';
import { Profile } from 'src/app/core/objects/loginObject';
import { ProfileComponent } from './../../routes/Profile/profile/profile.component';
import { AlertService } from 'src/app/core/services/alert/alert.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  // directives: [ProfileComponent]

})
export class HeaderComponent implements OnInit {
  @ViewChild(ProfileComponent) child: ProfileComponent;

  public notification: any = true;
  public name: any = "John Doe"
  public itemid: any = 1;
  public profileImg: any;
  public employeeData: any;
  public updatedImg: any = false;
  public isImgUploaded: boolean = false;

  public loginDone = false;
  public logoutDone = false;
  public location = "";
  public locationid = "";

  constructor(
    private service: ProfileService,
    private router: Router,
    public request: Request,
    public api: RemoteApiService,
    public alert: AlertService
  ) {
    this.getEmployee()
  }


  moveToLogin() {
    if (this.logoutDone == true) this.router.navigate(['/login']);
  
    else this.alert.stickyAlerShow('Please click clock out button and then proceed to log out', 'alert-danger');
  }
  ngAfterViewInit() {
    // this.child.uploadFile();
    // this.child.getEmployee();
  }
  editProfile(itemid) {
    this.itemid = itemid;
    let id = this.itemid
    this.router.navigate(['/profile'], { queryParams: { id: this.itemid } });
    // this.router.navigate(['/profile']);

  }
  ngOnInit() {
    this.getLocation();
    this.buildForm();
    this.profileImg = "./assets/images/user.jpg";
    this.service.$updateProfile.subscribe((data) => {
      this.updateProfile(data);
      // this.getEmployee();
      // this.router.navigate(['/login']);
    })
    this.getEmployee();
    this.setLoginTime();
    // this.child.getEmployee();
    // this.child.uploadFile();
    // this.child.ProfileView(e);

  }

  updateProfile(data) {
    const reader = new FileReader();
    reader.readAsDataURL(data);
    reader.onload = () => {
      console.log(reader, "READER")
      this.profileImg = reader.result;
    }
    this.updatedImg = true;
  }
  getEmployee() {
    this.updatedImg = false;
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.GET_ALL_EMPLOYEE;
    this.request.params = ""
    this.api.requestObject(this.request).then(result => {
      this.employeeData = result.find(empDetails => empDetails.id == localStorage.getItem('userId'));
      console.log(this.employeeData.profilePicture !== '', '#SSS')
      if (this.employeeData.profilePicture !== "" && this.employeeData.profilePicture !== undefined) {
        this.isImgUploaded = true;
        this.profileImg = this.employeeData.profilePicture;
      }
      else {
        this.profileImg = "./assets/images/user.jpg";
      }
      this.buildForm();
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });

  }
  buildForm() {
    if (!this.employeeData) {
      this.employeeData = new Profile();
    }
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

  setLoginTime() {
    if (localStorage.getItem('clockIn') != 'true') {
      let restObj = {
        userId: localStorage.getItem('userId'),
        locationId: this.location
      }
      this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
      this.request.type = AppConstants.API_POST;
      this.request.reqModule = ApiUrlConstants.CLOCK_TIME;
      this.request.params = "";
      this.request.body = restObj;
      this.api.requestObject(this.request).then(data => {
        this.loginDone = true;
        localStorage.setItem('clockIn', 'true');
        this.alert.stickyAlerShow('Login time captured,Thank you', 'alert-success');
      }, (err) => {
        console.error(err);
      });
    }
    if (localStorage.getItem('clockIn') == 'true') this.loginDone = true;
  }

  setLogoutTime() {
    let restObj = {
      userId: localStorage.getItem('userId'),
      locationId: this.location
    }
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.CLOCK_TIME;
    this.request.params = restObj['userId'];
    this.request.body = restObj;
    this.api.requestObject(this.request).then(data => {
      this.logoutDone = true;
      this.moveToLogin();
    }, (err) => {
      console.error(err);
    });
  }

}
