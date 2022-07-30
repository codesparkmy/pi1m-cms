import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { AlertService } from 'src/app/routes/services/alert/alert.service';
@Component({
  selector: 'cin-stickyAlert',
  templateUrl: './stickyAlert.component.html',
  styleUrls: ['./stickyAlert.component.scss']
})
export class stickyAlertComponent implements OnInit {

  constructor(public model: AlertService) {

  }
  ngOnInit() {

  }

}
