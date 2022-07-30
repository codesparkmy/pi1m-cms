import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pos-management',
  templateUrl: './pos-management.component.html',
  styleUrls: ['./pos-management.component.scss']
})
export class PosManagementComponent implements OnInit {

  public isassignPcModel:boolean= false;
  public isposDetailsModel:boolean=false

  constructor() { }

  ngOnInit() {
  }


  assignPcModelOpen() {
    this.isassignPcModel = !this.isassignPcModel;
  }

  posDetailsModelOpen() {
    this.isposDetailsModel = !this.isposDetailsModel;
  }


}
