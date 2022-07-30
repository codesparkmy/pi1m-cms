import { Component, OnInit, Output, Input } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
// import {NgbDropdown, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { RemoteApiService } from '../../../core/services/remote-service/remote-api.service';
import { AppConstants } from '../../../core/constants/AppConstants';
import { ApiUrlConstants } from '../../../core/constants/apiUrlConstants';
import { AlertService } from '../../../core/services/alert/alert.service';
import { AppService } from '../../../core/services/app/app.service';
import { Request } from '../../../core/services/remote-service/reqResObj/Request';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-visitor-management',
  templateUrl: './visitor-management.component.html',
  styleUrls: ['./visitor-management.component.scss']
})
export class VisitorManagementComponent implements OnInit {
  @Input() id: string;
  @Input() maxSize: number;
  public visitorList: any;
  public loader: any = true;
  public i1state: any = true;
  public i2state: any = false;
  public i3state: any = false;
  public i = 1;
  public i1: any = this.i;
  public i2: any = this.i1 + 1;
  public i3: any = this.i2 + 1;
  public filterList: any;
  p: number = 1;
  pageSize: number = 10;
  public itemid: any;
  public searchText: any;

  constructor(
    private alert: AlertService,
    private router: Router,
    public request: Request,
    public api: RemoteApiService,
  ) {
    for (let i = 1; i <= 100; i++) {
      // this.filterList[i].push(`${i}`);
    }
  }

  ngOnInit() {
    this.getAllVisitor();
    var myNumber = this.filterList;
    var formattedNumber = ("0" + myNumber).slice(-2);
  }
  pageChanged(e) { }

  getAllVisitor() {
    // this.loader=true;
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.VISITOR;
    this.request.params = ""
    // this.request.body = data;
    this.loader = true;
    this.api.requestObject(this.request).then(data => {
      this.visitorList = data;
      this.filterList = data;
      this.loader = false;
      // this.router.navigate(['/employeeManagement']);
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });

  }
  searchFilter(text: any) {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.VISITOR_PAGE;
    this.request.params = "?limit=" + text
    // this.request.body = data;
    this.loader = true;
    this.api.requestObject(this.request).then(data => {
      this.visitorList = data;
      this.filterList = data;
      this.loader = false;
      // this.router.navigate(['/employeeManagement']);
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
    // this.filterList = this.visitorList.filter(result =>
    //   JSON.stringify(result.memeberCode).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
    //   JSON.stringify(result.name).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
    //   JSON.stringify(result.contactNo).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
    //   JSON.stringify(result.memebershipSince).toLocaleLowerCase().includes(text.toLocaleLowerCase())
    //   );

  }
  viewEmployee(itemid) {
    this.itemid = itemid;
    let id = this.itemid
    this.router.navigate(['visitorManagement/visitorDetail'], { queryParams: { id: this.itemid } });
  }
  editVisitor(itemid) {

    this.itemid = itemid;
    let id = this.itemid
    this.router.navigate(['visitorManagement/visitor'], { queryParams: { id: this.itemid } });

  }
  deleteVisitor(itemid) {
    let data = {
      "status": 2
    }
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.DELETE_VISITOR;
    this.request.params = itemid
    this.request.body = data;
    this.api.requestObject(this.request).then(data => {
      this.getAllVisitor()
      this.alert.stickyAlerShow("Deleted Successfully", 'alert-success');
      // this.router.navigate(['/employeeManagement']);
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }

}
