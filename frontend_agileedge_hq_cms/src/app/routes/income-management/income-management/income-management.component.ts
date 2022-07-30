import { Component, OnInit, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, FormArray, Validators, NgForm } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
// import { NgbDropdown, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { RemoteApiService } from '../../../core/services/remote-service/remote-api.service';
import { AppConstants } from '../../../core/constants/AppConstants';
import { ApiUrlConstants } from '../../../core/constants/apiUrlConstants';
import { AppService } from '../../../core/services/app/app.service';
import { Request } from '../../../core/services/remote-service/reqResObj/Request';
import * as moment from 'moment';
import { from } from 'rxjs';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { runInThisContext } from 'vm';
@Component({
  selector: 'app-income-management',
  templateUrl: './income-management.component.html',
  styleUrls: ['./income-management.component.scss']
})
export class IncomeManagementComponent implements OnInit {
  btn: any;
  income: any;
  selected: any = "Four Month";
  expense: any;
  public chartMonths: any = [];
  // public lineChart: Chart;
  public chartData: any = [];
  startDate: any = "";
  endDate: any = "";
  lineData: any;
  lineOptions: any;
  lineColors: any;
  events: string[] = [];
  totleIncome:any;
  previouse:any;
  constructor(private router: Router,
    // private toastr: ToastrService,
    public request: Request,
    public api: RemoteApiService) { }

  ngOnInit() {
    this.initChart()
    console.log(this.selected)
    // this.onChangeMonth(this.selected)
    // this.createChart();
    this.btn = "btn1";
    this.getIncomeMonth();
    this.getExpenseMonth();
    this.getPreviousMonth();
    this.getTotalMonth();
  }

  createChart(chartMonths, chartData) {
    // Line chart
    // -----------------------------------
    console.log(this.chartMonths, this.chartData, "cchart")
    let CM = chartMonths.reverse()
    let CD = chartData.reverse()
    this.lineData = {
      labels: CM,
      datasets: [

        {
          label: 'My secind dataset',
          data: chartData
        }]
    };
    this.lineColors = [

      {
        backgroundColor: 'transparent',
                borderColor: '#3B3984',
                // pointBackgroundColor: 'rgb(50, 141, 95)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(35,183,229,1)'
      }];

    this.lineOptions = {
      animation: false,
      responsive: true,
      scales: {
        xAxes: [{
          gridLines: {
            drawOnChartArea: false
          }

        }],
        yAxes: [{
          gridLines: {
            drawOnChartArea: false
          }
        }]
      }
    };
  }


  initChart() {
    let obj = {
      value: this.selected
    }
    console.log(obj)
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.INCOME_MONTH;
    // this.request.params="System"
    this.request.params = ""
    this.request.body = obj;
    console.log(this.request, "reqqqq")
    this.api.requestObject(this.request).then(data => {
      console.log(Object.keys(data), "dataLogin")
      this.chartData = Object.values(data)

      this.chartMonths = Object.keys(data)
      this.createChart(this.chartMonths, this.chartData)
      // this.router.navigate(['/employeeManagement']);
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });

  }
  onChangeMonth(event) {
    this.selected = event.target.value
    console.log(this.selected, "SEKEN")
    let obj = {
      value: this.selected
    }
    console.log(event.target.value, "CHANGE SELECT")
    this.selected = event.target.value;
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.INCOME_MONTH;
    // this.request.params="System"
    this.request.params = ""
    this.request.body = obj;
    console.log(this.request, "reqqqq")
    this.api.requestObject(this.request).then(data => {
      console.log(Object.keys(data), "dataLogin")
      let Monthdata = data
      this.chartMonths = Object.keys(Monthdata)
      this.chartData = Object.values(Monthdata)
      console.log(this.chartMonths.reverse(), "OnChange")
      this.createChart(this.chartMonths, this.chartData)
      // this.router.navigate(['/employeeManagement']);
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }

  getIncomeMonth() {
    let obj = {
      value: "One Month"
    }
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.REVENUE_MONTH;
    // this.request.params="System"
    this.request.params = ""
    this.request.body = obj;
    console.log(this.request, "reqqqq")
    this.api.requestObject(this.request).then(data => {
      console.log(data, "dataLogin")
      this.income = Object.values(data);
      console.log(this.income, "CHARTDATA")
      // this.router.navigate(['/employeeManagement']);
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }
  getExpenseMonth() {
    let obj = {
      value: "One Month"
    }
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.EXPENSE_MONTH;
    // this.request.params="System"
    this.request.params = ""
    this.request.body = obj;
    console.log(this.request, "reqqqq")
    this.api.requestObject(this.request).then(data => {
      console.log(data, "dataLogin")
      this.expense = Object.values(data);
      // console.log(this.income,"CHARTDATA")
      // this.router.navigate(['/employeeManagement']);
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }
  getPreviousMonth(){
    let obj = {
      value: "Privious Month"
    }
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.REVENUE_MONTH;
    this.request.params = ""
    this.request.body = obj;
    console.log(this.request, "reqqqq")
    this.api.requestObject(this.request).then(data => {
      console.log(data, "pervious")
      this.previouse = Object.values(data);

    }, (err) => {

    });
  }
  getTotalMonth(){
    let obj = {
      value: "Total Month"
    }
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.REVENUE_MONTH;
    this.request.params = ""
    this.request.body = obj;
    console.log(this.request, "reqqqq")
    this.api.requestObject(this.request).then(data => {
      console.log(data, "dataLogin")
      this.totleIncome = Object.values(data);

    }, (err) => {

    });
  }
  rFactor() {
    console.log(Math.round(Math.random() * 100))
    return Math.round(Math.random() * 100);
  };
}
