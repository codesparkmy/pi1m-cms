import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiUrlConstants } from 'src/app/core/constants/apiUrlConstants';
import { AppConstants } from 'src/app/core/constants/AppConstants';
import { RemoteApiService } from 'src/app/core/services/remote-service/remote-api.service';
import { Request } from 'src/app/core/services/remote-service/reqResObj/Request';

@Component({
  selector: 'app-nonmember-landing',
  templateUrl: './nonmember-landing.component.html',
  styleUrls: ['./nonmember-landing.component.scss']
})
export class NonmemberLandingComponent implements OnInit {

  public itemid = "";
  public nonmemberDetails = "";

  constructor(private router: Router,
    public request: Request,
    public api: RemoteApiService) { }

  ngOnInit() {
    this.getNonmemberDetails();
  }

  editNonMember() {
    this.router.navigate(['/settings/editNonmember'], { queryParams: { id: "2" } })
  }

  getNonmemberDetails() {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.GET_NON_MEMBER_SET;
    this.request.params = "2"
    this.api.requestObject(this.request).then(data => {
      this.nonmemberDetails = data;
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }

}
