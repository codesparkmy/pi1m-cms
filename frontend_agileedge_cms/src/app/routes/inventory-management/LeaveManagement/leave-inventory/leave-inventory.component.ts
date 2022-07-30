import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiUrlConstants } from 'src/app/core/constants/apiUrlConstants';
import { AppConstants } from 'src/app/core/constants/AppConstants';
import { AlertService } from 'src/app/core/services/alert/alert.service';
import { AppService } from 'src/app/core/services/app/app.service';
import { RemoteApiService } from 'src/app/core/services/remote-service/remote-api.service';
import { Request } from 'src/app/core/services/remote-service/reqResObj/Request';

@Component({
  selector: 'app-leave-inventory',
  templateUrl: './leave-inventory.component.html',
  styleUrls: ['./leave-inventory.component.scss']
})
export class LeaveInventoryComponent implements OnInit {

  public viewMode = "leave";
  public loader: any = false;
  public i1state: any = true;
  public i2state: any = false;
  public i3state: any = false;
  public i = 1;
  public i1: any = this.i;
  public i2: any = this.i1 + 1;
  public i3: any = this.i2 + 1;
  p: number = 1;
  public leaveTypeList = [];
  public tabs = ["leave"];
  public leaveFilterList = [];

  constructor(
    private router: Router,
    public request: Request,
    public api: RemoteApiService,
    private alert: AlertService,
    public appService: AppService
  ) { }

  ngOnInit() {
    this.getData();
  }

  searchFilter(text: any) {
    this.leaveFilterList = this.leaveTypeList.filter(result =>
      JSON.stringify(result.id).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
      JSON.stringify(result.name).toLocaleLowerCase().includes(text.toLocaleLowerCase())
    );
  }

  getData() {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.LEAVE_INV;
    this.request.params = "";
    this.api.requestObject(this.request).then(data => {
      this.leaveFilterList = data;
      this.leaveTypeList = data;
      this.loader = false;
    }, (err) => {
      console.error(err);
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }

  editLeave(id) {
    this.router.navigate(['/inventoryManagement/createLeave'], { queryParams: { id: id } })
  }

  deleteLeave(id) {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.LEAVE_INV;
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
