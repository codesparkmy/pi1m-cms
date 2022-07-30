import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, NgForm, FormBuilder } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { Router, ActivatedRoute } from '@angular/router';
import { RemoteApiService } from '../../../core/services/remote-service/remote-api.service';
import { AppConstants } from '../../../core/constants/AppConstants';
import { ApiUrlConstants } from '../../../core/constants/apiUrlConstants';
import { AppService } from '../../../core/services/app/app.service';
import { Request } from '../../../core/services/remote-service/reqResObj/Request';
import * as moment from 'moment';
import { AlertService } from '../../../core/services/alert/alert.service';


@Component({
  selector: 'app-creat-member',
  templateUrl: './creat-member.component.html',
  styleUrls: ['./creat-member.component.scss']
})
export class CreatMemberComponent implements OnInit {
  public memberForm: any;
  public memberData: [];
  data: any;
  public name: any;
  public memberID: any;
  public fee: any;
  public date: any = moment().format("YYYY-MM-DD");
  public type: any;
  public itemid: any;
  public courseRegisteration;
  public isClicked: any = true;
  isUpload: boolean = false;
  uploadFile:any;
  uploadedFileResponse:any;

  // public itemid:any;
  // public memeberCode:any;
  // public subscriptionId:any;
  // public nrciNo:any;
  // public dob:any=moment().format("YYYY-MM-DD");
  // public gender:any;
  // public isBumi:any;
  // public contactNo:any;
  // public martialStatus:any;
  // public incomeLevel:any;
  // public memebershipSince:any=moment().format("YYYY-MM-DD");;
  // public emailId:any;
  constructor(private router: Router,
    private activateRoute: ActivatedRoute,
    public request: Request,
    private alert: AlertService,
    public api: RemoteApiService,
    public formBuilder: FormBuilder) {
    // this.memberForm = new FormGroup({
    //   memberName: new FormControl('', [Validators.required]),
    //   nricNo: new FormControl('', [Validators.required]),
    //   fee: new FormControl('', [Validators.required]),
    //   // date:new FormControl('',[Validators.required]),
    //   // trainingType: new FormControl('', [Validators.required]),
    //   // createdBy:new FormControl('',[Validators.required]),
    // });
  }

  ngOnInit() {
    this.activateRoute.queryParams.subscribe(params => {
      this.itemid = params["id"];
    });
    this.courseRegisteration = this.formBuilder.group({
      memberDetails: this.formBuilder.array([
        this.getTimeSlot()  // load first row at start
      ])
    })
  }

  getTimeSlot() {
    return this.formBuilder.group({
      memberName: ['', Validators.required],
      nricNo: ['', Validators.required],
      fee: ['', Validators.required],
      memberId: ['']
    });
  }

  formControls() {
    return this.courseRegisteration.controls;
  }

  public addUnit() {
    const control = <FormArray>this.courseRegisteration.controls['memberDetails'];
    control.push(this.getTimeSlot());
    this.courseRegisteration.submitted = false;
  }


  public removeUnit(i: number) {
    const control = <FormArray>this.courseRegisteration.controls['memberDetails'];
    control.removeAt(i);
  }


  getMemberData(index) {
    let nricNo = this.courseRegisteration.value.memberDetails[index]['nricNo'];
    this.autoFill(nricNo, index);
    this.getFeedata(index);
  }

  autoFill(nricNo, index) {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    // this.request.reqModule = ApiUrlConstants.VISITOR;  
    this.request.reqModule = "/getvisitorNricno/"
    this.request.params = nricNo;
    this.request.body = "";
    this.api.requestObject(this.request).then(res => {
      if (res.membershipFlag != 3) {
        this.courseRegisteration.get('memberDetails').at(index).patchValue({ memberName: res.name, memberId: res.id.toString() });
      } else {
        this.alert.stickyAlerShow('No Member found with the NRIC number', 'alert-danger');
        this.courseRegisteration.get('memberDetails').at(index).patchValue({ memberName: "", memberId: "" });
      }
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }

  getFeedata(index) {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.TRAINING;
    this.request.params = this.itemid
    this.request.body = "";
    this.api.requestObject(this.request).then(data => {
      if (data) this.courseRegisteration.get('memberDetails').at(index).patchValue({ fee: data['fee'] });
      else this.courseRegisteration.get('memberDetails').at(index).patchValue({ fee: "" });
    }, (err) => {
      console.error(err);
    });
  }


  addVisitor() {
    this.isClicked = false;
    let tempOBj = Object.assign({}, this.courseRegisteration.value);
    tempOBj['memberDetails'].forEach((element, index) => {
      element['fee'] = element['fee'].toString();
      element['createdBy'] = moment(element['createdBy']).format("YYYY-MM-DD");
    });
    let restObj = {
      trainingId: this.itemid,
      courseRegisteration: tempOBj['memberDetails']
    }
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.COURSE_REGISTRATION;
    this.request.params = "";
    this.request.body = restObj;
    this.api.requestObject(this.request).then(data => {
      if (data.message == "Registration Successfully") {
        this.router.navigate(['/trainingManagement']);
        this.alert.stickyAlerShow(data.message, 'alert-success');
      } else {
        this.alert.stickyAlerShow('This is not valid training', 'alert-danger');
      }
    }, (err) => {
      console.error(err)
    });
  }

  upload() {
    this.isUpload = !this.isUpload
  }

  Uploadfile(event) {
    const files: Array<File> = <Array<File>>event.target.files;
    if (files[0]) {
      for (let file of files) {
        let reader = new FileReader();
        reader.onload = (e: any) => { };
        reader.readAsDataURL(file);
      }
      let fileExt = files[0]["name"].split(".").pop();
       if (fileExt == "xlsx") {
        this.uploadFile = files;
       }
    }
  }

  saveUploadFile() {
    if( this.uploadFile && this.uploadFile[0] ) {
      let file = {
        file : this.uploadFile,
        type : 'file'
      }
      if( this.uploadFile&&this.uploadFile[0] ){
        let formdata: FormData = new FormData()
        formdata.append("file", this.uploadFile[0]);
        formdata.append("type", 'file');
        this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
        this.request.type = AppConstants.API_POST;
        this.request.reqModule = ApiUrlConstants.FILE_UPLOAD +this.itemid;
        this.request.params = "";
        this.request.body = formdata;
        this.api.requestObject(this.request).then(data => {
          this.uploadedFileResponse = data;
        }, (err) => {
          console.error(err)
        });
      }
    }
  }

}
