
import { Component, OnInit, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, FormArray, Validators, NgForm } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { NgbDropdown, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { RemoteApiService } from '../../../core/services/remote-service/remote-api.service';
import { AppConstants } from '../../../core/constants/AppConstants';
import { ApiUrlConstants } from '../../../core/constants/apiUrlConstants';
import { AppService } from '../../../core/services/app/app.service';
import { Request } from '../../../core/services/remote-service/reqResObj/Request';
import * as moment from 'moment';
import { AlertService } from 'src/app/core/services/alert/alert.service';

@Component({
  selector: 'app-control-bot',
  templateUrl: './control-bot.component.html',
  styleUrls: ['./control-bot.component.scss']
})
export class ControlBot implements OnInit {
  posList: any;
  ipAddress: any;
  toggle: any;
  toggle1: any;
  message: any;
  shutdownMessage: any;
  lockMessage: any;
  pcSelected: any = false;
  public selectedPC: "";

  constructor(private router: Router, public alert: AlertService,
    // private toastr: ToastrService,
    public request: Request,
    public api: RemoteApiService,) { }

  ngOnInit() {
    this.getAllInventory()
  }
  getAllInventory() {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.INVENTORY;
    this.request.params = "System"
    // this.request.params=""
    // this.request.body = data;
    // console.log(this.request, "reqqqq")
    this.api.requestObject(this.request).then(data => {
      // console.log(data, "dataLogin")
      this.posList = data;
      // console.log(JSON.stringify(data))
      // this.router.navigate(['/employeeManagement']);
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }
  onSystem(i, ipaddress) {
    // console.log(event.target.name, "EvetClick")
    // console.log(ipaddress, "ipaddress")

    this.selectedPC = i;
    this.pcSelected = true;
    this.ipAddress = ipaddress
    // console.log(this.selectedPC, "EvetClick")
  }
  onRestart() {
    let obj = {
      ipaddress: this.ipAddress,
      option: "Reboot",
      message: "Reboot"
    }
    if (this.pcSelected == true) {
      this.toggle = !this.toggle;
      this.toggle1 = false;
      this.request.url = AppConstants.CONTROL_BOT_URL;
      this.request.type = AppConstants.API_POST;
      this.request.reqModule = ApiUrlConstants.RESTART_PC;
      // this.request.params="System"
      this.request.params = ""
      this.request.body = obj;
      // console.log(this.request, "reqqqq")
      this.api.requestObject(this.request).then(data => {
        // console.log(data, "dataLogin")
        // this.posList=data;
        // console.log(JSON.stringify(data))
        // this.router.navigate(['/employeeManagement']);
      }, (err) => {
        // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
        // this.errLogin = err.error;
      });
    }
    else {
      this.alert.stickyAlerShow('Select a PC', 'alert-danger');

    }
  }
  onShutDown() {
    let obj = {
      ipaddress: this.ipAddress,
      option: "Shutdown",
      message: this.shutdownMessage
    }
    if (this.pcSelected == true) {
      this.toggle = !this.toggle;
      this.toggle1 = false;
      this.request.url = AppConstants.CONTROL_BOT_URL;
      this.request.type = AppConstants.API_POST;
      this.request.reqModule = ApiUrlConstants.SHUTDOWN_PC;
      // this.request.params="System"
      this.request.params = ""
      this.request.body = obj;
      // console.log(this.request, "reqqqq")
      this.api.requestObject(this.request).then(data => {
        // console.log(data, "dataLogin")
        // this.posList=data;
        // console.log(JSON.stringify(data))
        // this.router.navigate(['/employeeManagement']);
      }, (err) => {
        // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
        // this.errLogin = err.error;
      });
    }
    else {
      this.alert.stickyAlerShow('Select a PC', 'alert-danger');

    }
  }
  onPing() {
    let obj = {
      ipaddress: this.ipAddress,
      option: "Ping",
      message: "Ping"
    }
    if (this.pcSelected == true) {
      this.toggle = false;
      this.toggle1 = !this.toggle1;
      this.request.url = AppConstants.CONTROL_BOT_URL;
      this.request.type = AppConstants.API_POST;
      this.request.reqModule = ApiUrlConstants.PING_PC;
      // this.request.params="System"
      this.request.params = ""
      this.request.body = obj;
      // console.log(this.request, "reqqqq")
      this.api.requestObject(this.request).then(data => {
        // console.log(data, "dataLogin")
        // this.posList=data;
        // console.log(JSON.stringify(data))
        // this.router.navigate(['/employeeManagement']);
      }, (err) => {
        // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
        // this.errLogin = err.error;
      });
    }
    else {
      this.alert.stickyAlerShow('Select a PC', 'alert-danger');

    }
  }
  onLockChange() {
    let obj = {
      ipaddress: this.ipAddress,
      option: "Logoff",
      message: this.lockMessage
    }
    console.log(obj,'obj');
    this.request.url = AppConstants.CONTROL_BOT_URL;
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.LOCK_PC;
    // this.request.params="System"
    this.request.params = ""
    this.request.body = obj;
    // console.log(this.request, "reqqqq")
    this.api.requestObject(this.request).then(data => {
      // console.log(data, "dataLogin")
      // this.posList=data;
      // console.log(JSON.stringify(data))
      // this.router.navigate(['/employeeManagement']);
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }
  sendMessage() {
    if (this.message == null || this.message == "") {
      this.alert.stickyAlerShow('Enter Text', 'alert-danger');
    }
    else {
      let obj = {
        ipAddress: this.ipAddress,
        message: this.message,
        option: "Send Message"
      }
      // console.log(obj)
      // this.toggle1 = !this.toggle1
      this.request.url = AppConstants.CONTROL_BOT_URL;
      this.request.type = AppConstants.API_POST;
      this.request.reqModule = ApiUrlConstants.SEND_MSG;
      // this.request.params="System"
      this.request.params = ""
      this.request.body = obj;
      // console.log(this.request, "reqqqq")
      this.api.requestObject(this.request).then(data => {
        this.alert.stickyAlerShow("Message Send Successfully", 'alert-danger');

        this.message = "";
      }, (err) => {
        // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
        // this.errLogin = err.error;
        this.message = "";

      });
    }
  }

}
