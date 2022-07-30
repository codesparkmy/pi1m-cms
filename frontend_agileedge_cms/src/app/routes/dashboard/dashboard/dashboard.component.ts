import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { SharedModule } from '../../../shared/shared.module';
// import {NgbDropdown, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { RemoteApiService } from '../../../core/services/remote-service/remote-api.service';
import { AppConstants } from '../../../core/constants/AppConstants';
import { ApiUrlConstants } from '../../../core/constants/apiUrlConstants';
import { AppService } from '../../../core/services/app/app.service';
import { Request } from '../../../core/services/remote-service/reqResObj/Request';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  loader: any = false; employeeData: any;
  doughnutChartLabels: any;
  doughnutChartData: any;
  doughnutColor: any;
  doughnutChartType: any;
  doughnutOptions: any;
  donutData: any = [];
  selected: any = "Four Month";
  public chartData: any = [];
  foodUsage: any;
  srvcUsage: any;
  sysUsage: any;
  public chartMonths: any = [];
  userData: any;
  TrainingList: any = "";

  visitorList: any = "";
  barChartOptions: any;
  barChartLegend: any;
  barChartType: any;
  barChartLabels: any;
  barChartColor: any;
  barChartPlugins: any;
  barChartData: any;
  totleIncome: any;
  // doughnutChartLabels = ['Browsing', 'Food & Beverage', 'Service'];
  // doughnutChartData = [
  //   [30, 40, 20,10]
  // ];
  // doughnutColor=[{backgroundColor:['#28C76F','#3B3984','#FF9F43','#EEECF2'],
  //               }]
  // doughnutChartType: ChartType = 'doughnut';
  // doughnutOptions: ChartOptions = {
  //   responsive: true,
  //   legend: {
  //     display: false
  //   },borderWidth:5,

  // };

  constructor(private router: Router,
    public request: Request,
    public api: RemoteApiService) { }

  ngOnInit() {
    this.userData = localStorage.getItem('userId');
    this.getFoodUsage();
    this.getAllVisitor();
    this.getAllTraining();
    this.createChart();
    this.initChart();
    this.createDonut();
    this.getEmployee();
    this.getServiceUsage();
    this.getSysUsage();
  }
  getEmployee() {
    // console.log(data,"FormData")
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.GET_ALL_EMPLOYEE;
    this.request.params = ""
    this.api.requestObject(this.request).then(result => {
      this.employeeData = result.find(empDetails => empDetails.id == localStorage.getItem('userId'));
      console.log('find', this.employeeData)


    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });

  }
  getAllVisitor() {
    this.loader = true;
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.VISITOR;
    this.request.params = ""
    // this.request.body = data;

    this.loader = false;
    this.api.requestObject(this.request).then(data => {
      this.visitorList = data;
      console.log(this.visitorList.length, 'visitor')
      // this.loader=false;

      // this.router.navigate(['/employeeManagement']);
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });

  }
  getAllTraining() {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.TRAINING;
    this.request.params = ""
    // this.request.body = data;

    this.api.requestObject(this.request).then(data => {
      //
      this.TrainingList = data;

      //
      // this.router.navigate(['/trainingManagement']);
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }
  getFoodUsage() {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.GET_FOOD_USAGE;
    this.request.params = this.userData
    // this.request.body = data;

    this.api.requestObject(this.request).then(data => {
      //
      this.foodUsage = data.food;
      this.donutData.push(this.foodUsage);
      console.log(this.foodUsage, 'food')
      this.createDonut()
      // this.router.navigate(['/trainingManagement']);
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });


  }
  getSysUsage() {
    // this.getFoodUsage()
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.GET_SYS_USAGE;
    this.request.params = this.userData
    // this.request.body = data;

    this.api.requestObject(this.request).then(data => {
      //
      this.sysUsage = data.system;
      this.donutData.push(this.sysUsage);
      this.createDonut()
      //
      // this.router.navigate(['/trainingManagement']);
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }
  getServiceUsage() {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.GET_PRINT_USAGE;
    this.request.params = this.userData
    // this.request.body = data;

    this.api.requestObject(this.request).then(data => {
      // data
      this.srvcUsage = data.print;
      this.donutData.push(this.srvcUsage);
      this.createDonut();
      // data
      // this.router.navigate(['/trainingManagement']);
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }
  createChart() {

    ////////BarChartOptions
    this.barChartOptions = {
      responsive: true,

      legend: {
        display: false
      },

      scales: {
        xAxes: [{
          gridLines: {
            drawOnChartArea: false
          }

        }]
      }
    };

    this.barChartLabels = ['April', 'May', 'June', 'July'];
    this.barChartType = 'bar';
    this.barChartLegend = true;
    this.barChartColor = [
      { backgroundColor: ['#328D5F', '#328D5F', '#328D5F', '#328D5F', '#328D5F'] },
    ]
    this.barChartPlugins = [];

    this.barChartData = [
      { data: this.chartData, label: 'Income', barThickness: 18 }
    ];

  }
  createDonut() {

    console.log(this.donutData)
    // console.log("SSS")
    // if (this.donutData.length !== "") {

    // }
    this.doughnutChartLabels = ['Browsing', 'Food & Beverage', 'Service'];
    this.doughnutChartData = [{ data: this.donutData }];
    this.doughnutColor = [{
      backgroundColor: ['#28C76F', '#3B3984', '#FF9F43'],
    }]
    this.doughnutChartType = 'doughnut';
    this.doughnutOptions = {
      responsive: true,
      legend: {
        display: false
      }, borderWidth: 5,

    };
  }
  initChart() {
    let obj = {
      value: this.selected
    }

    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.INCOME_MONTH;
    // this.request.params="System"
    this.request.params = ""
    this.request.body = obj;

    this.api.requestObject(this.request).then(data => {

      this.chartData = Object.values(data)
      this.chartMonths = Object.keys(data)
      this.createChart()

      // this.router.navigate(['/employeeManagement']);
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });


  }
  // random values for demo
  rFactor() {
    return Math.round(Math.random() * 100);
  };
}
