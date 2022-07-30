import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RemoteApiService } from 'src/app/core/services/remote-service/remote-api.service';
import { AlertService } from '../../services/alert/alert.service';
import { AppConstants } from 'src/app/core/constants/AppConstants';
import { ApiUrlConstants } from 'src/app/core/constants/apiUrlConstants';

import { AppService } from 'src/app/core/services/app/app.service';
import { Request } from 'src/app/core/services/remote-service/reqResObj/Request';

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
  filterList:any;
  p:number = 1;
  pageSize:number = 10;
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
    console.log(this.request, "reqqqq")
    this.api.requestObject(this.request).then(data => {
      this.loader = false;
      // console.log(data,"Training")
      this.TrainingList = data;
      this.filterList = data;
      console.log(this.TrainingList, "TrainingData")
      // console.log(JSON.stringify(data))
      this.router.navigate(['/trainingManagement']);
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }

  viewTraining(itemid) {
    this.itemid = itemid;
    console.log(this.itemid, "itemID")
    let id = this.itemid
    this.router.navigate(['trainingManagement/trainingdetail'], { queryParams: { id: this.itemid } });
  }

  openDetail(itemID) {
    this.itemid = itemID;
    console.log(this.itemid, "itemID")
    let id = this.itemid
    this.router.navigate(['trainingManagement/trainingdetail'], { queryParams: { id: this.itemid } });
  }
  // addMember(itemid){

  //   this.itemid=itemid;
  //   console.log(this.itemid,"itemID")
  //   let id=this.itemid
  //   this.router.navigate(['/trainingManagement/createMember'], {queryParams: {id: this.itemid}});

  // }
  searchFilter(text: any) {
    this.filterList = this.TrainingList.filter(result =>
      JSON.stringify(result.course).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
      JSON.stringify(result.courseDuration).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
      JSON.stringify(result.fee).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
      JSON.stringify(result.enrolled).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
      JSON.stringify(result.maximumSubscription).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||

      JSON.stringify(result).toLocaleLowerCase().includes(text.toLocaleLowerCase())
      );
  }

}
