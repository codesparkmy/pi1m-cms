import { Component, OnInit, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, NgForm } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { Router, ActivatedRoute } from '@angular/router';
import { RemoteApiService } from '../../../core/services/remote-service/remote-api.service';
import { AppConstants } from '../../../core/constants/AppConstants';
import { ApiUrlConstants } from '../../../core/constants/apiUrlConstants';
import { AppService } from '../../../core/services/app/app.service';
import { Request } from '../../../core/services/remote-service/reqResObj/Request';
import { Profile } from '../../../core/objects/loginObject';
import { ProfileService } from '../../../core/services/profile/profile.service';

import { AlertService } from 'src/app/core/services/alert/alert.service';
import {
  HttpClient, HttpHeaders,
} from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public employeeData: Profile = new Profile();
  public profileForm: any;
  fileUploadForm: FormGroup;
  fileData: File = null;
  previewUrl: any = null;
  headers: any;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  public profilePicture: any;
  public storeImage: File;
  public profilePhoto: any;
  public isImgUploaded: any = false;
  @Output() update = new EventEmitter();
  @Output() change = new EventEmitter();
  viewImage: boolean = false;
  postImage: boolean = false;
  postPicture: any;
  itemid: any;
  public Formdata_img: any;
  constructor(

    private router: Router,
    private service: ProfileService,
    public request: Request, private activateRoute: ActivatedRoute,
    private http: HttpClient,
    public api: RemoteApiService,
    private alert: AlertService,
    private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.buildForm();
    console.log('hello', localStorage.getItem('userId')
    );
    this.itemid = localStorage.getItem('userId');

    this.getEmployee();
    this.fileUploadForm = new FormGroup({
      profilePicture: new FormControl('', [Validators.required]),
    });
  }
  getEmployee() {
    // console.log(data,"FormData")
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.GET_ALL_EMPLOYEE;
    this.request.params = ""
    this.api.requestObject(this.request).then(result => {
      this.employeeData = result.find(empDetails => empDetails.id == localStorage.getItem('userId'));
      this.change.emit({
        profilePic: this.employeeData.profilePicture
      })
      let obj = {
        profilePhoto: this.employeeData.profilePicture
      }

      this.buildForm();
      console.log('find', this.employeeData)


    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });

  }

  onFileChange(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      let file = event.target.files[0];
      this.profilePicture = file;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.profilePhoto = reader.result;
        this.isImgUploaded = true;
      };
     // this.uploadFile()
    }


  }
  uploadFile() {
    const formData = new FormData();
    this.service.upload(this.profilePicture);
    formData.append("file", this.profilePicture);
    let url = AppConstants.SERVER_URI_OBJECT['core'];
    this.http.post(url + '/upload/' + this.itemid, formData).subscribe((res: any) => {
      let obj = {
        profilePhoto: this.profilePhoto
      }
      // this.service.upload(obj);
      this.alert.stickyAlerShow('Uploaded Successful', 'alert-success');
      this.update.emit('');
      this.getEmployee();
      this.router.navigate(['/dashboard'])
    }, (err) => {
      this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }

  buildForm() {
    if (!this.employeeData) {
      this.employeeData = new Profile();
    }
    this.profileForm = new FormGroup({
      fullName: new FormControl(this.employeeData.fullName, [Validators.required]),
      employeeId: new FormControl(this.employeeData.employeeId, [Validators.required]),
      phoneNumber: new FormControl(this.employeeData.phoneNumber, [Validators.required, Validators.maxLength(10)]),

      email: new FormControl(this.employeeData.email, Validators.compose([Validators.required])),

    });
  }



  ProfileView(data) {
    this.uploadFile();

    let obj = {
      email: data.email,
      phoneNumber: data.phoneNumber,
      fullName: data.fullName,
      employeeId: data.employeeId,
      subscriptionId: data.subscriptionId,
      branchAllocation: data.branchAllocation,

      // profilePicture: this.fileData.type
    }

    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.Update_EMPLOYEE;
    this.request.body = obj;
    this.request.params = this.itemid;
    this.api.requestObject(this.request).then(data => {
      this.alert.stickyAlerShow('Updated Successful', 'alert-success');
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    })
  }

}
