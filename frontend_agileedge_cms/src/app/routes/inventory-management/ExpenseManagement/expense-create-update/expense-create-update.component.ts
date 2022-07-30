import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiUrlConstants } from 'src/app/core/constants/apiUrlConstants';
import { AppConstants } from 'src/app/core/constants/AppConstants';
import { AlertService } from 'src/app/core/services/alert/alert.service';
import { RemoteApiService } from 'src/app/core/services/remote-service/remote-api.service';
import { Request } from 'src/app/core/services/remote-service/reqResObj/Request';

@Component({
  selector: 'app-expense-create-update',
  templateUrl: './expense-create-update.component.html',
  styleUrls: ['./expense-create-update.component.scss']
})
export class ExpenseCreateUpdateComponent implements OnInit {

  public expenseForm: any;
  public prevId = "";

  constructor(private router: Router,
    private activateRoute: ActivatedRoute,
    public request: Request,
    public api: RemoteApiService,
    private alert: AlertService) {
    this.expenseForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
    this.activateRoute.queryParams.subscribe(params => {
      this.prevId = params["id"];
    });
    if (this.prevId) this.setDefault()
  }

  setDefault() {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.EXPENSE_GET;
    this.request.params = this.prevId
    this.api.requestObject(this.request).then(data => {
      if (data.length) {
        this.expenseForm.patchValue({
          name: data[0]['name']
        })
      }
    }, (err) => {
      console.error(err);
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }

  addInventory(data) {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.EXPENSE_CREATE;
    this.request.body = data;
    this.request.params = ""
    this.api.requestObject(this.request).then(data => {
      this.router.navigate(['/inventoryManagement']);
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }

  updateSystem(data) {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.EXPENSE_UPDATE;
    this.request.body = data;
    this.request.params = this.prevId
    this.api.requestObject(this.request).then(data => {
      this.alert.stickyAlerShow('Updated Successful', 'alert-success');
      this.router.navigate(['/inventoryManagement']);
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }


}
