import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiUrlConstants } from 'src/app/core/constants/apiUrlConstants';
import { AppConstants } from 'src/app/core/constants/AppConstants';
import { AlertService } from 'src/app/core/services/alert/alert.service';
import { RemoteApiService } from 'src/app/core/services/remote-service/remote-api.service';
import { Request } from 'src/app/core/services/remote-service/reqResObj/Request';
import * as moment from 'moment';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit {

  public purchaseForm: any;
  public prevId = "";
  public itemList = [];
  public totalAmount = 0;
  public isClicked: any = true;
  public transactionId = "";
  public date = "";
  public prevData = {};

  constructor(private router: Router,
    private activateRoute: ActivatedRoute,
    public request: Request,
    public api: RemoteApiService,
    private alert: AlertService,
    public formBuilder: FormBuilder) {
  }

  getForm() {
    return this.formBuilder.group({
      expenseId: ['', Validators.required],
      amount: ['', Validators.required],
    });
  }

  public addUnit() {
    const control = <FormArray>this.purchaseForm.controls['details'];
    control.push(this.getForm());
    this.purchaseForm.submitted = false;
  }


  public removeUnit(i: number) {
    const control = <FormArray>this.purchaseForm.controls['details'];
    control.removeAt(i);
  }

  formControls = () => this.purchaseForm.controls;

  ngOnInit() {
    this.activateRoute.queryParams.subscribe(params => {
      this.prevId = params["id"];
    });
    this.getItemList();
    this.setForm();
    this.getTransactionId();
    if (this.prevId) this.setDefault()
  }

  setForm() {
    this.purchaseForm = this.formBuilder.group({
      details: this.formBuilder.array([
        this.getForm()  // load first row at start
      ])
    })
    this.purchaseForm.controls["details"].valueChanges.subscribe(val => {
      this.totalAmount = val.map(v => v.amount).reduce((a, b) => a + b, 0);
    });
  }

  getItemList() {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.EXPENSE_GET;
    this.request.params = "";
    this.api.requestObject(this.request).then(data => {
      this.itemList = data;
    }, (err) => {
      console.error(err);
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }

  getTransactionId() {
    if (this.prevId == undefined) {
      this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
      this.request.type = AppConstants.API_GET;
      this.request.reqModule = ApiUrlConstants.MEMBER_CODE;
      this.request.body = {};
      this.request.params = "2";
      this.api.requestObject(this.request).then(data => {
        this.transactionId = data[0]['prefix'] + data[0]['count'];
      }, (err) => {
        console.error(err);
        // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
        // this.errLogin = err.error;
      });
    }
  }

  setDefault() {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.PURCHASE_GET;
    this.request.params = this.prevId
    this.api.requestObject(this.request).then(data => {
      if (data.length) {
        this.prevData = data;
        let tempArr = [];
        let details = data[0].purchaseDetails;
        for (let i = 0; i < details.length; i++) {
          let tempObj = {};
          tempObj['amount'] = details[i]['amount'];
          tempObj['expenseId'] = details[i]['expenseId'];
          tempArr.push(tempObj);
          this.addUnit();
        };
        setTimeout(() => {
          this.purchaseForm.controls['details'].patchValue(tempArr);
        }, 500);
        this.removeUnit(details.length);
      }
    }, (err) => {
      console.error(err);
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }

  addPurchaseItems(value) {
    this.isClicked = false;
    this.date = moment(new Date()).format("YYYY-MM-DD")
    let restObj = {
      "date": this.date,
      "transactionId": this.transactionId,
      "totalamount": this.totalAmount,
      "details": value['details'],
      "createdBy": parseInt(localStorage.getItem('userId'))
    }
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.PURCHASE_CREATE;
    this.request.params = "";
    this.request.body = restObj;
    this.api.requestObject(this.request).then(data => {
      this.router.navigate(['/inventoryManagement']);
    }, (err) => {
      console.error(err);
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }

  updatePurchase(value) {
    let restObj = {
      "date": this.prevData[0]['date'].split('T')[0],
      "transactionId": this.prevData[0]['transactionId'],
      "totalamount": this.totalAmount,
      "details": this.checkValue(value['details'])
    }
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.PURCHASE_UPDATE;
    this.request.params = this.prevId;
    this.request.body = restObj;
    this.api.requestObject(this.request).then(data => {
      this.router.navigate(['/inventoryManagement']);
    }, (err) => {
      console.error(err);
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }

  checkValue(data) {
    for (let i = 0; i < data.length; i++) {
      data[i]['expenseId'] = parseInt(data[i]['expenseId']);
    }
    return data;
  }

}
