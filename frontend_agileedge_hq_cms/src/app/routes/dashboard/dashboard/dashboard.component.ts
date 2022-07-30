import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RemoteApiService } from 'src/app/core/services/remote-service/remote-api.service';
import { AlertService } from '../../services/alert/alert.service';
import { AppConstants } from 'src/app/core/constants/AppConstants';
import { ApiUrlConstants } from 'src/app/core/constants/apiUrlConstants';
import { AppService } from '../../../core/services/app/app.service';
import { Request } from '../../../core/services/remote-service/reqResObj/Request';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  employeeData:any;
  employeeuser:any;
  previouse:any;
  income:any;
  cafeData:any;

  lineData: any;
  lineOptions: any;
  lineColors: any;
  public chartMonths: any = [];
  // public lineChart: Chart;
  public chartData: any = [];
    constructor(
      private router: Router,
      private activateRoute: ActivatedRoute,
      public request: Request,
      public api: RemoteApiService,
      private alert: AlertService) { }

    ngOnInit() {
      this.getEmployee();
      this.getPreviousMonth();
      this.getIncomeMonth();
      this.getCafe();
      this.initChart();
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
          // {
          //     label: 'My First dataset',
          //     data:[this.rFactor(),this.rFactor(),this.rFactor(),this.rFactor(),this.rFactor()]
          // },
          {
            label: 'INCOME',
            data: chartData
          }]
      };
      this.lineColors = [
        // {
        //     backgroundColor: 'transparent',
        //     borderColor: 'rgb(237,237,237)',
        //     // pointBackgroundColor: 'rgba(114,102,186,1)',
        //     pointBorderColor: '#fff',
        //     pointHoverBackgroundColor: '#fff',
        //     pointHoverBorderColor: 'rgba(114,102,186,1)',
        //     borderDash: [5,2]
        // },
        {
          backgroundColor: 'transparent',
          borderColor: '#3B3984',
          // pointBackgroundColor: 'rgb(50, 141, 95)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#3B3984'
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
        value: "Four Month"
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
    // onChangeMonth(event) {
    //   this.selected = event.target.value
    //   console.log(this.selected, "SEKEN")
    //   let obj = {
    //     value: this.selected
    //   }
    //   console.log(event.target.value, "CHANGE SELECT")
    //   this.selected = event.target.value;
    //   this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    //   this.request.type = AppConstants.API_POST;
    //   this.request.reqModule = ApiUrlConstants.INCOME_MONTH;
    //   // this.request.params="System"
    //   this.request.params = ""
    //   this.request.body = obj;
    //   console.log(this.request, "reqqqq")
    //   this.api.requestObject(this.request).then(data => {
    //     console.log(Object.keys(data), "dataLogin")
    //     let Monthdata = data
    //     this.chartMonths = Object.keys(Monthdata)
    //     this.chartData = Object.values(Monthdata)
    //     console.log(this.chartMonths.reverse(), "OnChange")
    //     this.createChart(this.chartMonths, this.chartData)
    //     // this.router.navigate(['/employeeManagement']);
    //   }, (err) => {
    //     // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
    //     // this.errLogin = err.error;
    //   });
    // }

    // random values for demo
    rFactor() {
      return Math.round(Math.random() * 100);
  };
  getEmployee() {
    // console.log(data,"FormData")
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.GET_ALL_EMPLOYEE;
    this.request.params = ""
    this.api.requestObject(this.request).then(result => {
      this.employeeData = result;
      this.employeeuser = result.find(empDetails => empDetails.id == localStorage.getItem('userId'));
      console.log('find', this.employeeData)


    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });

  }
  getCafe() {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.GET_ALL_CAFE;
    this.request.params = "";
    this.request.body = ""
    this.api.requestObject(this.request).then(data => {
      // this.loader = false;
      console.log(data, "dataCafe")
      this.cafeData = data;
      // this.filterList = data;
      console.log(this.cafeData, "cafeData")
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
  }
