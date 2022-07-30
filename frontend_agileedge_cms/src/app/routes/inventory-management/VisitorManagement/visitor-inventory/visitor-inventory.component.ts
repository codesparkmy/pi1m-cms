import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiUrlConstants } from 'src/app/core/constants/apiUrlConstants';
import { AppConstants } from 'src/app/core/constants/AppConstants';
import { AlertService } from 'src/app/core/services/alert/alert.service';
import { AppService } from 'src/app/core/services/app/app.service';
import { RemoteApiService } from 'src/app/core/services/remote-service/remote-api.service';
import { Request } from 'src/app/core/services/remote-service/reqResObj/Request';

@Component({
  selector: 'app-visitor-inventory',
  templateUrl: './visitor-inventory.component.html',
  styleUrls: ['./visitor-inventory.component.scss']
})
export class VisitorInventoryComponent implements OnInit {

  public viewMode = "income";
  public incomeList = [];
  public genderList = [];
  public maritalList = [];
  public nationalityList = [];
  public occupationList = [];

  public loader: any = true;
  public i1state: any = true;
  public i2state: any = false;
  public i3state: any = false;
  public i = 1;
  public i1: any = this.i;
  public i2: any = this.i1 + 1;
  public i3: any = this.i2 + 1;
  p: number = 1;

  public filterIncomeList = [];
  public filterMaritalList = [];
  public filterNationalityList = [];
  public filterGenderList = [];
  public filterOccupationList = [];

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    public request: Request,
    public api: RemoteApiService,
    private alert: AlertService,
    public appService: AppService
  ) { }

  ngOnInit() {
    const value = this.appService.getMiniViewData();
    if (value) this.viewMode = value;
    else this.viewMode = "income";
    this.getData();
  }

  searchFilter(text: any) {
    if (this.viewMode == 'income') {
      this.filterIncomeList = this.incomeList.filter(result =>
        JSON.stringify(result.id).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
        JSON.stringify(result.name).toLocaleLowerCase().includes(text.toLocaleLowerCase())
      );
    } else if (this.viewMode == 'marital') {
      this.filterMaritalList = this.maritalList.filter(result =>
        JSON.stringify(result.id).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
        JSON.stringify(result.name).toLocaleLowerCase().includes(text.toLocaleLowerCase())
      );
    } else if (this.viewMode == 'nationality') {
      this.filterNationalityList = this.nationalityList.filter(result =>
        JSON.stringify(result.id).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
        JSON.stringify(result.nationality).toLocaleLowerCase().includes(text.toLocaleLowerCase())
      );
    } else if (this.viewMode == 'gender') {
      this.filterGenderList = this.genderList.filter(result =>
        JSON.stringify(result.id).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
        JSON.stringify(result.name).toLocaleLowerCase().includes(text.toLocaleLowerCase())
      );
    } else {
      this.filterOccupationList = this.occupationList.filter(result =>
        JSON.stringify(result.id).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
        JSON.stringify(result.name).toLocaleLowerCase().includes(text.toLocaleLowerCase())
      );
    }
  }

  ngOnDestroy() {
    this.appService.setMiniViewData(this.viewMode);
  }

  getData() {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.VISITOR_GET;
    if (this.viewMode == 'income') {
      this.request.params = "incomelevel"
    }
    else if (this.viewMode == 'marital') {
      this.request.params = "maritalstatus"
    }
    else if (this.viewMode == 'nationality') {
      this.request.params = "nationality"
    } else if (this.viewMode == 'occupation') {
      this.request.params = 'occupation'
    } else this.request.params = "gender"
    this.api.requestObject(this.request).then(data => {
      if (this.viewMode == 'income') {
        this.filterIncomeList = data;
        this.incomeList = data;
      }
      else if (this.viewMode == 'marital') {
        this.filterMaritalList = data;
        this.maritalList = data;
      }
      else if (this.viewMode == 'nationality') {
        this.filterNationalityList = data;
        this.nationalityList = data;
      } else if (this.viewMode == 'occupation') {
        this.filterOccupationList = data;
        this.occupationList = data;
      } else {
        this.filterGenderList = data;
        this.genderList = data;
      }
      this.loader = false;
    }, (err) => {
      console.error(err);
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }

  editIncome(id) {
    this.router.navigate(['/inventoryManagement/incomeCreate'], { queryParams: { id: id } })
  }
  deleteIncome(id) {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.INCOME_TYPE_DELETE;
    this.request.params = id;
    this.request.body = {status : 0};
    this.api.requestObject(this.request).then(data => {
      this.alert.stickyAlerShow("Deleted Successfully", 'alert-success');
      this.getData();
    }, (err) => {
      console.error(err);
      this.alert.stickyAlerShow(err, 'alert-danger');
    });
  }

  editGender(id) {
    this.router.navigate(['/inventoryManagement/genderCreate'], { queryParams: { id: id } })
  }
  deleteGender(id) {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.GENDER_TYPE_DELETE;
    this.request.params = id;
    this.request.body = {status:0};
    this.api.requestObject(this.request).then(data => {
      this.alert.stickyAlerShow("Deleted Successfully", 'alert-success');
      this.getData();
    }, (err) => {
      console.error(err);
      this.alert.stickyAlerShow(err, 'alert-danger');
    });
  }

  editNation(id) {
    this.router.navigate(['/inventoryManagement/nationCreate'], { queryParams: { id: id } })
  }
  deleteNation(id) {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.NATIONALITY_TYPE_DELETE;
    this.request.params = '';
    this.request.body = { id: id };
    console.log(this.request);
    this.api.requestObject(this.request).then(data => {
      this.alert.stickyAlerShow("Deleted Successfuly", 'alert-success');
      this.getData();
    }, (err) => {
      console.error(err);
      this.alert.stickyAlerShow(err, 'alert-danger');
    });
  }
  
  editMarital(id) {
    this.router.navigate(['/inventoryManagement/maritalCreate'], { queryParams: { id: id } })
  }
  deleteMarital(id) {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.MARITAL_TYPE_DELETE;
    this.request.params = id;
    this.request.body = {status:0};
    this.api.requestObject(this.request).then(data => {
      this.alert.stickyAlerShow("Deleted", 'alert-success');
      this.getData();
    }, (err) => {
      console.error(err);
      this.alert.stickyAlerShow(err, 'alert-danger');
    });
  }


  editOccupation(id) {
    this.router.navigate(['/inventoryManagement/createOccupation'], { queryParams: { id: id } })
  }
  deleteOccupation(id) {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.OCCUPATION_DELETE;
    this.request.params = '';
    this.request.body = { id: id };
    this.api.requestObject(this.request).then(data => {
      this.getData();
    }, (err) => {
      console.error(err);
      this.alert.stickyAlerShow(err, 'alert-danger');
    });
  }

}
