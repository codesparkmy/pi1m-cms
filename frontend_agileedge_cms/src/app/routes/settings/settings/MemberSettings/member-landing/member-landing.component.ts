import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiUrlConstants } from 'src/app/core/constants/apiUrlConstants';
import { AppConstants } from 'src/app/core/constants/AppConstants';
import { RemoteApiService } from 'src/app/core/services/remote-service/remote-api.service';
import { Request } from 'src/app/core/services/remote-service/reqResObj/Request';

@Component({
  selector: 'app-member-landing',
  templateUrl: './member-landing.component.html',
  styleUrls: ['./member-landing.component.scss']
})
export class MemberLandingComponent implements OnInit {

  public itemid = "";
  public memeberCode = "";
  public memberDetails = "";

  constructor(private router: Router,
    public request: Request,
    public api: RemoteApiService) { }

  ngOnInit() {
    this.getMemberCode();
    this.getmemberDetails();
  }

  editMember() {
    this.router.navigate(['/settings/editMember'], { queryParams: { id: "1" } });
  }


  getMemberCode() {
    if (this.itemid == undefined || this.itemid == '') {
      this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
      this.request.type = AppConstants.API_GET;
      this.request.reqModule = ApiUrlConstants.MEMBER_CODE;
      this.request.body = {};
      this.request.params = "1";
      this.api.requestObject(this.request).then(data => {
        let temp = data[0];
        this.memeberCode = temp.prefix;
      }, (err) => {
        console.error(err);
      });
    }
  }

  getmemberDetails() {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.GET_MEMBER_SET;
    this.request.params = "1";
    this.api.requestObject(this.request).then(data => {
      this.memberDetails = data;
    }, (err) => {
      console.error(err);
    });
  }

}
