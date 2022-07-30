import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiUrlConstants } from 'src/app/core/constants/apiUrlConstants';
import { AppConstants } from 'src/app/core/constants/AppConstants';
import { AlertService } from 'src/app/core/services/alert/alert.service';
import { AppService } from 'src/app/core/services/app/app.service';
import { RemoteApiService } from 'src/app/core/services/remote-service/remote-api.service';
import { Request } from 'src/app/core/services/remote-service/reqResObj/Request';

@Component({
  selector: 'app-expense-inventory',
  templateUrl: './expense-inventory.component.html',
  styleUrls: ['./expense-inventory.component.scss']
})
export class ExpenseInventoryComponent implements OnInit {

  public expenseList = [];
  public viewMode = "expense"

  public loader: any = true;
  public i1state: any = true;
  public i2state: any = false;
  public i3state: any = false;
  public i = 1;
  public i1: any = this.i;
  public i2: any = this.i1 + 1;
  public i3: any = this.i2 + 1;
  p: number = 1;
  public purchaseList = [];
  public filterExpenseList = [];
  public filterPurchaseList = [];

  constructor(
    private router: Router,
    public request: Request,
    public api: RemoteApiService,
    private alert: AlertService,
    public appService: AppService
  ) { }

  ngOnInit() {
    const value = this.appService.getExpenseView();
    if (value) this.viewMode = value;
    else this.viewMode = "expense";
    this.getData();
  }

  searchFilter(text: any) {
    if (this.viewMode == "expense") {
      this.filterExpenseList = this.expenseList.filter(result =>
        JSON.stringify(result.id).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
        JSON.stringify(result.name).toLocaleLowerCase().includes(text.toLocaleLowerCase())
      );
    } else {
      this.filterPurchaseList = this.purchaseList.filter(result =>
        JSON.stringify(result.transactionId).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
        JSON.stringify(result.totalamount).toLocaleLowerCase().includes(text.toLocaleLowerCase())
      );
    }
  }

  ngOnDestroy() {
    this.appService.setExpenseView(this.viewMode);
  }

  getData() {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    if (this.viewMode == "expense") this.request.reqModule = ApiUrlConstants.EXPENSE_GET;
    else this.request.reqModule = ApiUrlConstants.PURCHASE_GET;
    this.request.params = "";
    this.api.requestObject(this.request).then(data => {
      if (this.viewMode == "expense") {
        this.expenseList = data;
        this.filterExpenseList = data;
      }
      else {
        this.purchaseList = data;
        this.filterPurchaseList = data;
      }
      this.loader = false;
    }, (err) => {
      console.error(err);
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }

  editExpense(id) {
    this.router.navigate(['/inventoryManagement/createExpense'], { queryParams: { id: id } })
  }

  deleteExpense(id) {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.EXPENSE_DELETE;
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
  viewTraining(id) {
  }

  editPurchase(id) {
    this.router.navigate(['/inventoryManagement/createPurchase'], { queryParams: { id: id } })
  }

  deletePurchase(id) {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_DELETE;
    this.request.reqModule = ApiUrlConstants.PURCHASE_DELETE;
    this.request.params = id;
    this.request.body = {};
    this.api.requestObject(this.request).then(data => {
      this.getData();
    }, (err) => {
      console.error(err);
      this.alert.stickyAlerShow(err, 'alert-danger');
    });
  }

}


