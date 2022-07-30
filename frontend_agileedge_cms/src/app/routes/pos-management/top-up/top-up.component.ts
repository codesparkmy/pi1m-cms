import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ApiUrlConstants } from 'src/app/core/constants/apiUrlConstants';
import { AppConstants } from 'src/app/core/constants/AppConstants';
import { AlertService } from 'src/app/core/services/alert/alert.service';
import { RemoteApiService } from 'src/app/core/services/remote-service/remote-api.service';
import { Request } from 'src/app/core/services/remote-service/reqResObj/Request';

@Component({
  selector: 'app-top-up',
  templateUrl: './top-up.component.html',
  styleUrls: ['./top-up.component.scss']
})
export class TopUpComponent implements OnInit {

  @ViewChild('topUpModal') topUpModal: ModalDirective;
  @Output() hide = new EventEmitter();
  @ViewChild('encasUnPwModal')
  public modal: ModalDirective;
  public hoursList = [];
  public minutesList = [];
  public durationForm: any;
  public itemid = "";

  constructor(private router: Router,
    private activateRoute: ActivatedRoute,
    public request: Request,
    public api: RemoteApiService,
    private alert: AlertService,
    private formbuilder: FormBuilder) {
    this.setHoursList();
    this.setMinuteslist();
  }

  setHoursList() {
    let result = [];
    for (let i = 0; i < 24; i++) {
      let val = i.toString().length == 1 ? '0' + i : i.toString();
      result.push({ id: val, value: val });
    }
    this.hoursList = result;
  }

  setMinuteslist() {
    let result = [];
    for (let i = 0; i < 60; i++) {
      let val = i.toString().length == 1 ? '0' + i : i.toString();
      result.push({ id: val, value: val });
    }
    this.minutesList = result;
  }

  ngOnInit() {
    this.activateRoute.queryParams.subscribe(params => {
      this.itemid = params["id"];
      console.log(this.itemid);
    });
    this.setForm();
  }


  setForm() {
    this.durationForm = new FormGroup({
      hours: new FormControl('', [Validators.required]),
      minutes: new FormControl('', [Validators.required]),
    });
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

  updateDuration(value) {
    let restObj = {
      hours: value.hours,
      minutes: value.minutes,
      recordId: this.itemid,
    }
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.TOP_UP;
    this.request.params = this.itemid;
    this.request.body = restObj
    this.api.requestObject(this.request).then(data => {
      this.topUpModal.hide();
      this.hide.emit('');
    }, (err) => {
      console.error(err);
    });
  }

}
