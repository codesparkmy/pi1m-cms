import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiUrlConstants } from 'src/app/core/constants/apiUrlConstants';
import { AppConstants } from 'src/app/core/constants/AppConstants';
import { AlertService } from 'src/app/core/services/alert/alert.service';
import { AppService } from 'src/app/core/services/app/app.service';
import { RemoteApiService } from 'src/app/core/services/remote-service/remote-api.service';
import { Request } from 'src/app/core/services/remote-service/reqResObj/Request';

@Component({
  selector: 'app-training-inventory',
  templateUrl: './training-inventory.component.html',
  styleUrls: ['./training-inventory.component.scss']
})
export class TrainingInventoryComponent implements OnInit {

  public viewMode = "training";
  public loader: boolean = false;
  public i1state: any = true;
  public i2state: any = false;
  public i3state: any = false;
  public i = 1;
  public i1: any = this.i;
  public i2: any = this.i1 + 1;
  public i3: any = this.i2 + 1;
  p: number = 1;
  public trainigTypeList = [];
  public targetList = [];

  public filterTrainingType = [];
  public filterTargetList = [];

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    public request: Request,
    public api: RemoteApiService,
    private alert: AlertService,
    public appService: AppService
  ) { }

  ngOnInit() {
    const value = this.appService.getTrainingView();
    if (value) this.viewMode = value;
    else this.viewMode = "training";
    this.getData();
  }

  searchFilter(text: any) {
    if (this.viewMode == 'training') {
      this.filterTrainingType = this.trainigTypeList.filter(result =>
        JSON.stringify(result.id).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
        JSON.stringify(result.name).toLocaleLowerCase().includes(text.toLocaleLowerCase())
      );
    } else {
      this.filterTargetList = this.targetList.filter(result =>
        JSON.stringify(result.id).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
        JSON.stringify(result.name).toLocaleLowerCase().includes(text.toLocaleLowerCase())
      );
    }
  }

  ngOnDestroy() {
    this.appService.setTrainingView(this.viewMode);
  }

  getData() {
    if (this.viewMode == "training") this.request.reqModule = ApiUrlConstants.TRAINING_TYPE_GET;
    else this.request.reqModule = ApiUrlConstants.TARGET_INV;
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    // this.request.reqModule = ApiUrlConstants.TRAINING_TYPE_GET;
    this.request.params = "";
    this.api.requestObject(this.request).then(data => {
      if (this.viewMode == "training") {
        this.filterTrainingType = data;
        this.trainigTypeList = data;
      }
      else {
        this.filterTargetList = data;
        this.targetList = data;
      }
      this.loader = false;
    }, (err) => {
      console.error(err);
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }

  editTraining(id) {
    this.router.navigate(['/inventoryManagement/createTraining'], { queryParams: { id: id } })
  }

  deleteTraining(id) {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.TRAINING_TYPE_DELETE;
    this.request.params = id;
    this.request.body = {status:0};
    this.api.requestObject(this.request).then(data => {
      this.alert.stickyAlerShow("Deleted Successfully", 'alert-success');
      this.getData();
    }, (err) => {
      console.error(err);
      this.alert.stickyAlerShow(err, 'alert-danger');
    });
  }
  viewTraining(id) {
    console.log(id);
  }

  editTarget(id) {
    this.router.navigate(['/inventoryManagement/createTarget'], { queryParams: { id: id } })
  }

  deleteTarget(id) {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.TARGET_INV;
    this.request.params = id;
    this.request.body = {status:0};
    this.api.requestObject(this.request).then(data => {
      this.alert.stickyAlerShow("Deleted Successfully", 'alert-success');
      this.getData();
    }, (err) => {
      console.error(err);
      this.alert.stickyAlerShow(err, 'alert-danger');
    });
  }


}
