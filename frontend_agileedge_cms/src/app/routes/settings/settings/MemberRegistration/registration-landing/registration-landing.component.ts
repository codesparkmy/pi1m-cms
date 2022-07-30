import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiUrlConstants } from 'src/app/core/constants/apiUrlConstants';
import { AppConstants } from 'src/app/core/constants/AppConstants';
import { RemoteApiService } from 'src/app/core/services/remote-service/remote-api.service';
import { Request } from 'src/app/core/services/remote-service/reqResObj/Request';

@Component({
  selector: 'app-registration-landing',
  templateUrl: './registration-landing.component.html',
  styleUrls: ['./registration-landing.component.scss']
})
export class RegistrationLandingComponent implements OnInit {

  public itemid = "";
  public memberList = [];

  public i1state: any = true;
  public i2state: any = false;
  public i3state: any = false;
  public i = 1;
  public i1: any = this.i;
  public i2: any = this.i1 + 1;
  public i3: any = this.i2 + 1;
  p: number = 1;
  public filterList: any;
  public loader: any = true;

  constructor(private router: Router,
    public request: Request,
    public api: RemoteApiService) { }

  ngOnInit() {
    this.getMemberDetails();
  }

  getMemberDetails() {
    console.log(this.itemid);
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.MEMBER_DETAILS;
    this.request.body = {};
    this.request.params = "";
    this.api.requestObject(this.request).then(data => {
      this.loader = false;
      this.memberList = this.modifyData(data);
    }, (err) => {
      console.error(err);
    });
  }

  modifyData(data) {
    data.forEach(element => {
      element['membership_from'] = element['membership_from'].split('T')[0];
      element['membership_to'] = element['membership_to'].split('T')[0];
      element['received_date'] = element['received_date'].split('T')[0];
    });
    return data;
  }


  manage() {
    this.router.navigate(['/settings/manageReg'])
  }

}
