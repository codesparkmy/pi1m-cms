import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NgbDropdown, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { RemoteApiService } from '../../../core/services/remote-service/remote-api.service';
import { AppConstants } from '../../../core/constants/AppConstants';
import { ApiUrlConstants } from '../../../core/constants/apiUrlConstants';
import { AppService } from '../../../core/services/app/app.service';
import { Request } from '../../../core/services/remote-service/reqResObj/Request';
import { AlertService } from '../../../core/services/alert/alert.service';

@Component({
  selector: 'app-training-management',
  templateUrl: './training-management.component.html',
  styleUrls: ['./training-management.component.scss']
})
export class TrainingManagementComponent implements OnInit {
  public loader: any = true;
  public i1state: any = true;
  public i2state: any = false;
  public i3state: any = false;
  public i = 1;
  public i1: any = this.i;
  public i2: any = this.i1 + 1;
  public i3: any = this.i2 + 1;
  public TrainingList: any;
  public itemid: any;
  filterTraining: any;
  p: number = 1;

  constructor(
    private router: Router,
    public request: Request,
    public api: RemoteApiService,
    private alert: AlertService,
  ) { }

  ngOnInit() {
    this.getAllTraining()
  }

  getAllTraining() {
    this.loader = true;
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.TRAINING;
    this.request.params = ""
    // this.request.body = data;
    this.api.requestObject(this.request).then(data => {
      this.loader = false;
      this.TrainingList = data;
      this.filterTraining = data;
      this.router.navigate(['/trainingManagement']);
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }

  viewTraining(itemid) {
    this.itemid = itemid;
    let id = this.itemid
    this.router.navigate(['trainingManagement/detail'], { queryParams: { id: this.itemid } });
  }
  editTraining(itemid) {

    this.itemid = itemid;
    let id = this.itemid;

    this.router.navigate(['trainingManagement/create'], { queryParams: { id: this.itemid } });

  }
  deleteTraining(itemid) {
    let data = {
      "status": 2
    }
    this.itemid = itemid;
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.DELETE_TRAINING;
    this.request.params = this.itemid
    this.request.body = data;
    console.log(this.request, "reqqqq")
    this.api.requestObject(this.request).then(data => {
      this.getAllTraining();
      this.alert.stickyAlerShow("Deleted Successfully", 'alert-success');
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
    // this.router.navigate(['trainingManagement/create'], {queryParams: {id: this.itemid}});

  }
  searchFilters(text: any) {
   
      this.loader = true;
      this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
      this.request.type = AppConstants.API_GET;
      this.request.reqModule = ApiUrlConstants.TRAINING;
      this.request.params = "?limit="+text
      // this.request.body = data;
      this.api.requestObject(this.request).then(data => {
        this.loader = false;
        // console.log(data,"Training")
        this.TrainingList = data;
        this.filterTraining = data;
        // console.log(JSON.stringify(data))
        this.router.navigate(['/trainingManagement']);
      }, (err) => {
        // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
        // this.errLogin = err.error;
      });
    
    // this.filterTraining = this.TrainingList.filter(result =>
    //   JSON.stringify(result.course).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
    //   JSON.stringify(result.courseDuration).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
    //   JSON.stringify(result.fee).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
    //   JSON.stringify(result.enrolled).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
    //   JSON.stringify(result.maximumSubscription).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
    //   JSON.stringify(result).toLocaleLowerCase().includes(text.toLocaleLowerCase())

    //   );
  }
  openDetail(itemID) {
    this.itemid = itemID;
    let id = this.itemid
    this.router.navigate(['trainingManagement/detail'], { queryParams: { id: this.itemid } });
  }
  addMember(itemid) {

    this.itemid = itemid;
    let id = this.itemid
    this.router.navigate(['/trainingManagement/createMember'], { queryParams: { id: this.itemid } });

  }


}
