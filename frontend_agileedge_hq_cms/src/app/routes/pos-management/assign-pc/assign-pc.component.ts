import { Component, OnInit, ViewChild, AfterViewInit,Output,EventEmitter } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-assign-pc',
  templateUrl: './assign-pc.component.html',
  styleUrls: ['./assign-pc.component.scss']
})
export class AssignPcComponent implements OnInit, AfterViewInit {
  @ViewChild('assignPcModel') assignPcModel: ModalDirective;
  @Output() hide = new EventEmitter();
  constructor() { }

  ngOnInit() {
   
   
  }
  ngAfterViewInit() {
    this.assignPcModel.show();
  }
  showChildModal() {
    this.assignPcModel.show();
  }

  hideModalWindow() {
    this.assignPcModel.hide();
    this.hide.emit('');
  }
}
