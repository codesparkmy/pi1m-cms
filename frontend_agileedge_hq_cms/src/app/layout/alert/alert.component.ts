import { Component, OnInit,AfterViewInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { AlertService } from 'src/app/routes/services/alert/alert.service';
@Component({
  selector: 'cin-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, AfterViewInit {
  @ViewChild('alert') alert: ModalDirective;
  constructor(public model: AlertService) {

  }
  ngOnInit() {

    // this.model.modelWindow = this.alert;
  }
  ngAfterViewInit() {
    this.model.modelWindow = this.alert;
  }
show(){
  console.log("show")
}
}
