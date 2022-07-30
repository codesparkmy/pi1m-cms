import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ApiUrlConstants } from 'src/app/core/constants/apiUrlConstants';
import { AppConstants } from 'src/app/core/constants/AppConstants';
import { AlertService } from 'src/app/core/services/alert/alert.service';
import { AppService } from 'src/app/core/services/app/app.service';
import { RemoteApiService } from 'src/app/core/services/remote-service/remote-api.service';
import { Request } from 'src/app/core/services/remote-service/reqResObj/Request';

@Component({
  selector: 'app-change-pc',
  templateUrl: './change-pc.component.html',
  styleUrls: ['./change-pc.component.scss']
})
export class ChangePcComponent implements OnInit {

  @ViewChild('changePcModal') topUpModal: ModalDirective;
  @Output() hide = new EventEmitter();
  @ViewChild('encasUnPwModal')

  public systemList: any;
  public modal: ModalDirective;
  public itemid = "";
  public selectedPc = "";
  public selectedBox: any;

  constructor(
    private alert: AlertService,
    private activateRoute: ActivatedRoute,
    public request: Request,
    public api: RemoteApiService,
    public appService: AppService) { }

  ngOnInit() {
    this.activateRoute.queryParams.subscribe(params => {
      this.itemid = params["id"];
    });
    this.getSystemInventory();
  }


  getSystemInventory() {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.INVENTORY;
    this.request.params = "System"
    this.api.requestObject(this.request).then(data => {
      this.systemList = data;
    }, (err) => {
      console.error(err);
    });
  }

  onSystem(index, item) {
    this.selectedBox = index;
    this.selectedPc = item.id;
  }

  ngAfterViewInit() {
    this.topUpModal.show();
  }

  showChildModal() {
    this.topUpModal.show();
  }

  hideModalWindow() {
    this.topUpModal.hide();
    this.hide.emit('');
  }


  changePc() { 
    let oldsystemId = localStorage.getItem('oldSystemId')
    let restObj = {
      oldsystemId: oldsystemId,
      newsystemId: this.selectedPc.toString(),
    }
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.CHANGE_PC;
    this.request.params = this.itemid;
    this.request.body = restObj;
    this.api.requestObject(this.request).then(data => {
      if (data.message == "updated successfully") this.hideModalWindow();
    }, (err) => {
      console.error(err);
    });
  }
}
