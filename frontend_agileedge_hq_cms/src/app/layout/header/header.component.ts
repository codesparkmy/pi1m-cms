import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, NgForm } from '@angular/forms';
// import { SharedModule } from '../../../shared/shared.module';
import { Router } from '@angular/router';

import { RemoteApiService } from 'src/app/core/services/remote-service/remote-api.service';
import { AppConstants } from 'src/app/core/constants/AppConstants';
import { ApiUrlConstants } from 'src/app/core/constants/apiUrlConstants';
import { AppService } from 'src/app/core/services/app/app.service';
import { Request } from 'src/app/core/services/remote-service/reqResObj/Request';
import { Profile } from 'src/app/core/objects/loginObject';
import { ProfileService } from 'src/app/core/services/profile/profile.service';
import { ProfileComponent } from 'src/app/routes/Profile/profile/profile.component';
// import { Profile } from 'src/app/core/objects/loginObject';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild(ProfileComponent) child: ProfileComponent;

  public notification: any = true;
  public name: any = "John Doe"
  public itemid: any = 1;
  public profileImg: any;
  public employeeData: any;
  public updatedImg:any=false;
  public isImgUploaded: boolean=false;
    constructor(
    private service: ProfileService,
    private router: Router,
    public request: Request,
    public api: RemoteApiService
  ) {
  }


  moveToLogin() {
    this.router.navigate(['/login']);

  }
  ngAfterViewInit() {
    // this.child.uploadFile();
    // this.child.getEmployee();
  }
  editProfile(itemid) {
    this.itemid = itemid;
    console.log(this.itemid, "itemID")
    let id = this.itemid
    this.router.navigate(['/profile'], { queryParams: { id: this.itemid } });
    // this.router.navigate(['/profile']);

  }
  ngOnInit() {
    this.buildForm();
    this.profileImg = "/assets/images/user.jpg";
    this.service.$updateProfile.subscribe((data) => {
      console.log(data, "This is HeaderComponent")
      // this.router.navigate(['/login']);
      this.updateProfile(data)
    })
    this.getEmployee()
    // this.child.getEmployee();
    // this.child.uploadFile();
    // this.child.ProfileView(e);

  }

  updateProfile(data){
    
    const reader = new FileReader();
    reader.readAsDataURL(data);
    reader.onload = () => {
      console.log(reader,"READER")
      this.profileImg = reader.result;
    }
    this.updatedImg=true;
  }
  getEmployee() {
    // console.log(data,"FormData")

    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.GET_ALL_EMPLOYEE;
    this.request.params = ""
    this.api.requestObject(this.request).then(result => {
      this.employeeData = result.find(empDetails => empDetails.id == localStorage.getItem('userId'));
      console.log(this.employeeData,"SSSSS")
      if( this.employeeData && this.employeeData.profilePicture!=="" || this.employeeData && this.employeeData.profilePicture!==undefined ){
        this.isImgUploaded=true;
        this.profileImg = this.employeeData.profilePicture
      }
      else {
        this.profileImg = "/assets/images/user.jpg";
      }
      this.buildForm();
      // console.log('find',this.employeeData)


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
}
