import { Component, OnInit, Input, InputDecorator } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, NgForm } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { Router, ActivatedRoute } from '@angular/router';
import { RemoteApiService } from '../../../core/services/remote-service/remote-api.service';
import { AppConstants } from '../../../core/constants/AppConstants';
import { ApiUrlConstants } from '../../../core/constants/apiUrlConstants';
import { AppService } from '../../../core/services/app/app.service';
import { Request } from '../../../core/services/remote-service/reqResObj/Request';
import * as moment from 'moment';
import { AlertService } from 'src/app/core/services/alert/alert.service';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-visitor-create',
  templateUrl: './visitor-create.component.html',
  styleUrls: ['./visitor-create.component.scss']
})
export class VisitorCreateComponent implements OnInit {
  public visitorForm: any;
  public fileUploadForm: FormGroup;
  public visitorData: [];
  public name: any;
  public itemid: any = "";
  public memeberCode: any;
  public subscriptionId: any;
  public nrciNo: any;
  public dob: any = moment().format("YYYY-MM-DD");
  public gender: any;
  public isBumi: any;
  public contactNo: any;
  public martialStatus: any;
  public incomeLevel: any;
  public memebershipSince: any = moment().format("YYYY-MM-DD");;
  public emailId: any;
  public profileImage: any;
  public storeImage: File;
  public profilePhoto: any;
  public isImgUploaded: any = false;
  public isClicked: any = true;
  viewImage: boolean = false;
  postImage: boolean = false;
  postPicture: any;
  locationid: any;
  location: any;
  public data: any;
  public nationList = [];
  public incomeList = [];
  public maritalList = [];
  public genderList = [];
  public occupationList = [];
  public nationalityList = [];
  public showStateDropDown: boolean = false;
  public stateList = [];
  public countryList = [];
  public userQuestionUpdate = new Subject<string>();

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    public request: Request,
    public api: RemoteApiService,
    private route: ActivatedRoute, private http: HttpClient,
    private alert: AlertService
  ) {
    this.userQuestionUpdate.pipe(
      debounceTime(1000),
      distinctUntilChanged())
      .subscribe(value => {
        this.fetchDateNric(value);
      });
  }

  ngOnInit() {
    this.profileImage = null;
    this.profileImage = "";
    this.activateRoute.queryParams.subscribe(params => {
      this.itemid = params["id"];
    });
    this.profilePhoto = "./assets/images/user.jpg"
    this.getLocation();
    if (this.itemid) this.editVisitor();
    this.fileUploadForm = new FormGroup({
      profileImage: new FormControl('', [Validators.required]),
    });
    this.getNationality();
    this.getIncomeLevels();
    this.getMaritalStatus();
    this.getGenderDetails();
    this.getOccupationDetails();
    this.getNationalityDetails();
    this.getMemberCode();
    this.getCountryList();
    this.setForm();

  }

  setForm() {
    this.visitorForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      memeberCode: new FormControl('', [Validators.required]),
      subscriptionId: new FormControl('', [Validators.required]),
      nrciNo: new FormControl('', [Validators.required, Validators.pattern("\\d{6}\\-\\d{2}\\-\\d{4}")]),
      dob: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      isBumi: new FormControl('', [Validators.required]),
      contactNo: new FormControl('', [Validators.required]),
      martialStatus: new FormControl('', [Validators.required]),
      incomeLevel: new FormControl('', [Validators.required]),
      // memebershipSince: new FormControl('', [Validators.required]),
      emailId: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      isMember: new FormControl('', [Validators.required]),
      occupation: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      postalcode: new FormControl('', [Validators.required, Validators.maxLength(5)]),
      address: new FormControl('', [Validators.required]),
    });
  }

  fetchDateNric(event) {
    let tempdate = event.split('-')[0];
    let year = tempdate.substring(0, 2);
    let month = tempdate.substring(2, 4);
    let day = tempdate.substring(4, 6);
    var cutoff = (new Date()).getFullYear() - 2000
    var dob = (year > cutoff ? '19' : '20') + year + '-' + month + '-' + day;
    this.visitorForm.patchValue({
      dob: dob
    })
  }

  getNationality() {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.VISITOR_GET;
    this.request.params = "nationality"
    this.api.requestObject(this.request).then(data => {
      this.nationList = data;
    }, (err) => {
      console.error(err);
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }
  getIncomeLevels() {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.VISITOR_GET;
    this.request.params = "incomelevel"
    this.api.requestObject(this.request).then(data => {
      this.incomeList = data;
    }, (err) => {
      console.error(err);
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }
  getMaritalStatus() {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.VISITOR_GET;
    this.request.params = "maritalstatus";
    this.api.requestObject(this.request).then(data => {
      this.maritalList = data;
    }, (err) => {
      console.error(err);
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }
  getGenderDetails() {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.VISITOR_GET;
    this.request.params = "gender"
    this.api.requestObject(this.request).then(data => {
      this.genderList = data;
    }, (err) => {
      console.error(err);
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }

  getOccupationDetails() {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.OCCUPATION_GET;
    this.request.params = ""
    this.api.requestObject(this.request).then(data => {
      this.occupationList = data;
    }, (err) => {
      console.error(err);
    });
  }

  getNationalityDetails() {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.NATIONALITY_TYPE_GET;
    this.request.params = ""
    this.api.requestObject(this.request).then(data => {
      this.nationalityList = data;      
    }, (err) => {
      console.error(err);
    });
  }


  getToday(): string {
    return new Date().toISOString().split('T')[0]
  }
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
  onFileChange(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      let file = event.target.files[0];
      this.profileImage = file;
      reader.readAsDataURL(file);
      // this.uploadProfilePhoto = true;
      reader.onload = () => {
        this.profilePhoto = reader.result;
        this.isImgUploaded = true;
      };

    }
  }
  uploadFile() {
    let formData = new FormData();
    formData.append("file", this.profileImage);
    let url = AppConstants.SERVER_URI_OBJECT['core'];
    this.http.post(url + '/uploadVisitors/' + this.itemid, formData).subscribe((res: any) => { }) /**updation */
    // this.profileImage=null;/
    // else{
    // this.http.post(url + '/uploadVisitor/', formData).subscribe((res: any) => { }) /**creation */

    // }
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
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });

  }
  addVisitor(data) {
    this.isClicked = false;
    let obj = {
      location: this.locationid
    }
    this.data = Object.assign(obj, data)
    this.data['memebershipSince'] = moment(new Date()).format("YYYY-MM-DD");
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.VISITOR;
    this.request.body = this.data;
    this.request.params = "";
    this.api.requestObject(this.request).then(data => {
      this.itemid = data.id;
      this.uploadFile();
      if (data.message) {
        this.alert.stickyAlerShow(data.message, 'alert-danger');
        this.visitorForm.reset();
      } else {
        this.alert.stickyAlerShow("Created Successfully", 'alert-success');
        this.router.navigate(['/visitorManagement']);
      }
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }

  updateVisitor(data) {
    if(this.visitorForm.valid){
      this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
      this.request.type = AppConstants.API_POST;
      this.request.reqModule = ApiUrlConstants.VISITOR;
      this.request.body = data;
      this.request.params = this.itemid;
      this.api.requestObject(this.request).then(data => {
        this.uploadFile();
        this.alert.stickyAlerShow('Uploaded Successful', 'alert-success');
        this.router.navigate(['/visitorManagement']);
  
      }, (err) => {
        // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
        // this.errLogin = err.error;
      });
    }
  }

  editVisitor() {
    // debugger
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.VISITOR;
    this.request.params = this.itemid
    this.request.body = "";
    this.api.requestObject(this.request).then(data => {
      if (data.profileImage !== '' || data.profileImage == undefined) this.profilePhoto = data.profileImage;
      else this.profilePhoto = "./assets/images/user.jpg";
      this.getStateForCountry(data.country, true, data);
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }

  getDate(event) {
    let birthdate = event;
    if (birthdate) {
      var timeDiff = Math.abs(Date.now() - new Date(birthdate).getTime());
      let age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
      this.visitorForm.patchValue({
        age: age
      })
    }
  }

  getCountryList() {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.COUNTRIES_LIST;
    this.request.body = {};
    this.request.params = "";
    this.api.requestObject(this.request).then(data => {
      this.countryList = data;
      this.visitorForm.patchValue({
        country: 1
      })
    }, (err) => {
      console.error(err);
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }

  getMemberCode() {
    if (this.itemid == undefined) {
      this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
      this.request.type = AppConstants.API_GET;
      this.request.reqModule = ApiUrlConstants.MEMBER_CODE;
      this.request.body = {};
      this.request.params = "1";
      this.api.requestObject(this.request).then(data => {
        let temp = data[0];
        this.visitorForm.patchValue({
          memeberCode: temp.prefix + temp.count
        });
      }, (err) => {
        console.error(err);
        // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
        // this.errLogin = err.error;
      });
    }
  }

  getStateForCountry(event, boo, prevData?) {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.STATES_LIST;
    this.request.body = {};
    this.request.params = event
    this.api.requestObject(this.request).then(data => {
      this.stateList = data;
      if (boo == true) this.patchForm(prevData);
    }, (err) => {
      console.error(err);
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }

  patchForm(prevData) {
    prevData.dob = moment(prevData.dob).format("YYYY-MM-DD");
    // prevData.memebershipSince = moment(prevData.memebershipSince).format("YYYY-MM-DD");
    prevData.occupation = parseInt(prevData.occupation);
    this.visitorForm.patchValue(prevData);
    console.log(this.visitorForm);
    this.fileUploadForm.patchValue({
      profileImage: prevData.profileImage
    });
  }

}
