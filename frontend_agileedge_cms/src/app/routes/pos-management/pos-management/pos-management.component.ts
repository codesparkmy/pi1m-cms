import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RemoteApiService } from '../../../core/services/remote-service/remote-api.service';
import { AppConstants } from '../../../core/constants/AppConstants';
import { ApiUrlConstants } from '../../../core/constants/apiUrlConstants';
import { AppService } from '../../../core/services/app/app.service';
import { Request } from '../../../core/services/remote-service/reqResObj/Request';
import { AlertService } from 'src/app/core/services/alert/alert.service';
import { Profile } from 'src/app/core/objects/loginObject';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TopUpComponent } from '../top-up/top-up.component';
import { Input } from '@angular/core';


@Component({
  selector: 'app-pos-management',
  templateUrl: './pos-management.component.html',
  styleUrls: ['./pos-management.component.scss']
})
export class PosManagementComponent implements OnInit {
  loader: any = false;
  public selectedPC: any;
  editOption: boolean = false;
  public isassignPcModel: boolean = false;
  public isposDetailsModel: boolean = false;
  public istopupmodal: boolean = false;
  public isChangePc: boolean = false;
  posList: any = "";
  p: number = 1;
  isActive: any = false;
  itemid: any;
  filterList: any;
  isDisable: boolean = false;
  checkIfOthersAreSelected: boolean = false;
  public i1state: any = true;
  public i2state: any = false;
  public i3state: any = false;
  public i = 1;
  public i1: any = this.i;
  public i2: any = this.i1 + 1;
  public i3: any = this.i2 + 1;
  public employeeData: Profile = new Profile();
  public foodList = [];

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    public request: Request,
    public api: RemoteApiService, private alert: AlertService,
    public appService: AppService, public modalService: NgbModal

  ) {
  }

  ngOnInit() {
    this.getAllPos();
    this.getEmployee();
    this.getFruits();
  }

  getFruits() {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.INVENTORY;
    this.request.params = "Food";
    this.api.requestObject(this.request).then(data => {
      this.appService.setUserDetails(data);
      // this.router.navigate(['/employeeManagement']);
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }

  assignPcModelOpen() {
    this.editOption = false
    this.getAllPos();
    this.isassignPcModel = !this.isassignPcModel;
    this.router.navigate(['/posManagement']);
  }

  posDetailsModelClose() {
    this.isposDetailsModel = !this.isposDetailsModel;
    this.getAllPos();
    // this.isDisable=true;
    this.isActive = true;
  }

  posDetailsModelOpen(itemid) {
    // this.getAllPos();
    this.isposDetailsModel = !this.isposDetailsModel;
    let id = itemid;
    this.router.navigate(['posManagement/'], { queryParams: { id: id } });
    // this.getAllPos();
    // this.isDisabled = false;
    // document.getElementById("myCheck").disabled = true;
  }


  sendsystemStatus(item, e) {
    // this.sendInventoryStatus(item);
    if (e.target.checked) {
      if (item.pcNo.status == '1') {
        this.isDisable = false;
      } else {
        this.isDisable = true;
      }
    }

  }
  getAllPos() {
    this.loader = true;
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.POS;
    this.request.params = "";
    this.request.body = "";
    this.api.requestObject(this.request).then(data => {
      this.posList = data;
      this.filterList = data;
      console.log(this.filterList,"...this.filterList....")
      this.selectedPC = data.pcNo;
      this.loader = false;
    }, (err) => {
    });
  }
  checkSelected(e) {
    if (e.target.checked) {
      this.checkIfOthersAreSelected = true;
    }
  }

  getEmployee() {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.GET_ALL_EMPLOYEE;
    this.request.params = ""
    this.api.requestObject(this.request).then(result => {
      this.employeeData = result.find(empDetails => empDetails.id == localStorage.getItem('userId'));
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });

  }
  editpos(itemid) {
    this.editOption = true
    this.isassignPcModel = !this.isassignPcModel;
    let id = itemid
    this.router.navigate(['posManagement/'], { queryParams: { id: id } });
    // this.isassignPcModel = !this.isassignPcModel;

  }
  // deletepos(deleteitemid) {
  //   let data = {
  //     status: 3
  //   }
  //   this.loader = true;
  //   this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
  //   this.request.type = AppConstants.API_POST;
  //   this.request.reqModule = ApiUrlConstants.POS;
  //   this.request.params = deleteitemid;
  //   this.request.body = data;
  //   this.api.requestObject(this.request).then(data => {
  //     this.alert.stickyAlerShow("Deleted Successfully", 'alert-success');
  //     this.getAllPos();

  //   }, (err) => {

  //   });

  // }
  searchFilter(text: any) {
    this.loader = true;
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.POS;
    this.request.params = "?limit=" + text
    this.request.body = "";
    this.api.requestObject(this.request).then(data => {
      this.posList = data;
      this.filterList = data;
      this.selectedPC = data.pcNo;
      this.loader = false;
    }, (err) => {
    });

    this.filterList = this.posList.filter(result => JSON.stringify(result).toLocaleLowerCase().includes(text.toLocaleLowerCase()));
  }

  openTopUpModal(id) {
    this.istopupmodal = !this.istopupmodal;
    this.router.navigate(['/posManagement'], { queryParams: { id: id } });
  }

  topupmodalclose() {
    this.istopupmodal = !this.istopupmodal;
    this.getAllPos();
  }

  openChangePc(paramsId, oldSystemId) {
    this.isChangePc = !this.isChangePc;
    localStorage.setItem('oldSystemId',oldSystemId)
    this.router.navigate(['/posManagement'], { queryParams: { id: paramsId } });
  }

  changePcmodalclose() {
    this.isChangePc = !this.isChangePc
    this.getAllPos();
  }

  timerCompleted(event) {
    console.log(event);
  }

}
