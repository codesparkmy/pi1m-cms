import { Component, OnInit, ViewChild, AfterViewInit,Output,EventEmitter } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-pos-details',
  templateUrl: './pos-details.component.html',
  styleUrls: ['./pos-details.component.scss']
})
export class PosDetailsComponent implements OnInit {

  @ViewChild('posDetailModal') posDetailModal: ModalDirective;
  @Output() hide = new EventEmitter();
  constructor() { }

  ngOnInit() {
   
   
  }
  ngAfterViewInit() {
    this.posDetailModal.show();
  }
  showChildModal() {
    this.posDetailModal.show();
  }

  hideModalWindow() {
    this.posDetailModal.hide();
    this.hide.emit('');
  }
}
