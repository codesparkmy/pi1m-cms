
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, NgForm } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { Router, ActivatedRoute } from '@angular/router';
import { RemoteApiService } from '../../../core/services/remote-service/remote-api.service';
import { AppConstants } from '../../../core/constants/AppConstants';
import { ApiUrlConstants } from '../../../core/constants/apiUrlConstants';
import { AppService } from '../../../core/services/app/app.service';
import { Request } from '../../../core/services/remote-service/reqResObj/Request';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import * as moment from 'moment';
import { MatInput } from '@angular/material';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-reports-management',
  templateUrl: './reports-management.component.html',
  styleUrls: ['./reports-management.component.scss']
})
export class ReportsManagementComponent implements OnInit {
  public reportForm: any;
  public APILIST: any;
  public userData = localStorage.getItem('userId');
  public data: any;
  @ViewChild('fromInput', { read: MatInput }) fromInput: MatInput;

  @ViewChild('toInput', { read: MatInput }) toInput: MatInput;

  courseList = [];
  location: any;
  reportList: any;
  loader: any = true;
  cafeList: any;
  TainingDiv: boolean = false;
  CafeDiv: boolean = false;
  tainingList: any;
  incomeList: any;
  clockInClockOutReportList = [];
  ExpenseList: any;
  public fromdate: any;
  public todate: any;
  EmplyeeDiv: boolean = false;
  incomeDiv: boolean = false;
  expenseDiv: boolean = false;
  showError: boolean = false;
  error: any = { isError: false, errorMessage: '' };
  locationid: any;
  public trainingList = [];
  public enableTrainingList = false;
  public enableTrainingType = false;

  public occupationList = [];

  public reportsArray = [
    {
      id: "1",
      name: 'Summary of Active Users at Cafe',
      show: false,
      function: "getActiveusersAtCafe"
    },
    {
      id: "2",
      name: 'Summary of Cafe Usage Details',
      show: false,
      function: "getCafeDetailsReport"
    },
    {
      id: "3",
      name: 'Summary of Training Course List',
      show: false,
      function: "getCourseReport"
    },
    {
      id: "4",
      name: 'Summary of Training Attendance List',
      show: false,
      function: "getAttendanceReport"
    },
    {
      id: "5",
      name: 'Income & Expense Summary',
      show: false,
      function: "getincomeExpenseReport"
    },
    {
      id: "6",
      name: 'Summary of Active Member',
      show: false,
      function: "getActiveMemberReport"
    },
    {
      id: "7",
      name: 'Summary of Active Member by Gender',
      show: false,
      function: "getActiveMemberByGenderReport"
    },
    {
      id: "8",
      name: 'Summary of Active Member by Bumi Status',
      show: false,
      function: "getActiveMemberByBumi"
    },
    {
      id: "9",
      name: 'Summary of active Member by Age Group',
      show: false,
      function: "getActiveAgeReport"
    },
    {
      id: "10",
      name: 'Summary of active Member by Occupation',
      show: false,
      function: "getActiveMemberByOccupation"
    },
    {
      id: "11",
      name: 'Summary of Clock In Clock Out',
      show: false,
      function: "getReportByClockInClockOut"
    },
    {
      id: "12",
      name: 'Income & Expense Detail',
      show: false,
      function: "getincomeExpenseDetailReport"
    }
  ]

  public activeMemberReport = [];

  public activeUserCafe = [];

  public cafeDetails = [];

  public courseDetails = [];

  public attendanceList = [];

  public incomeListReport = [];

  public activeMemberGenderList = [];

  public activeMemberBumiList = [];

  public activeMemberAgeList = [];

  public activeMemberOccupation = [];

  public expenseList = [];

  public incomeDetailReport = [];

  public summaryDetailReport = [];

  public expenseDetailReport = [];

  constructor(
    public request: Request,
    public api: RemoteApiService,
    private route: ActivatedRoute) {
    this.reportForm = new FormGroup({
      summaryType: new FormControl('', [Validators.required]),
      fromdate: new FormControl('', [Validators.required]),
      // location: new FormControl('', [Validators.required]),
      todate: new FormControl('', [Validators.required]),
      period: new FormControl('', [Validators.required]),
      courseId: new FormControl(''),
      incomeType: new FormControl('')
    });
  }

  ngOnInit() {
    this.clearDiv()
    // this.user=localStorage.getItem('user');
    this.userData = localStorage.getItem('userId');
    this.getLocation();
  }
  getToday(): string {
    return new Date().toISOString().split('T')[0]
  }
  // compareTwoDates() {
  //   if (new Date(this.reportForm.controls['fromdate'].value) < new Date(this.reportForm.controls['fromdate'].value)) {
  //     this.error = { isError: true, errorMessage: 'From Date Should be greater than To Date' };
  //   } else {
  //     this.error = { isError: false }
  //   }
  // }
  clearDiv() {
    this.reportsArray.forEach(element => {
      element['show'] = false
    })
    // this.incomeDiv = false;
    // this.TainingDiv = false;
    // this.expenseDiv = false;
    // this.EmplyeeDiv = false;
    // this.CafeDiv = false;
    // this.fromdate = '';
    // this.todate = '';
  }
  searchReport(data) {
    this.data = data;
    // this.compareTwoDates();
    this.fromdate = data.fromdate;
    this.todate = data.todate;
    this.reportsArray.forEach(element => {
      if (element['id'] == data.summaryType) {
        this[element['function']](data)
        element['show'] = true;
      }
      else element['show'] = false;
    })
    // this.reportForm.reset();
  }
  getLocation() {
    this.location = this.userData;
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.USER;
    this.request.params = this.location;
    this.request.body = "";
    this.api.requestObject(this.request).then(data => {
      this.locationid = data.branchAllocation;
      this.location = this.locationid;
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }

  getActiveMemberReport(data) {
    let restObj = this.modifyRestObj(data);
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.GET_ACTIVE_MEMBER_REPORT;
    this.request.params = "";
    this.request.body = restObj;
    this.api.requestObject(this.request).then(data => {
      this.activeMemberReport = data;
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }

  modifyRestObj(data, val?) {
    let from = "";
    let to = "";
    if (data.period == "yearly") {
      from = data.fromdate.slice(0, 4);
      to = data.todate.slice(0, 4);
    } else if (data.period == "monthly") {
      from = data.fromdate.slice(0, 7);
      to = data.todate.slice(0, 7);
    }
    else {
      from = data.fromdate;
      to = data.todate;
    }
    return {
      "period": data.period,
      "fromdate": from,
      "todate": to,
      "location": this.location
    }
  }

  getActiveusersAtCafe(data) {
    let restObj = this.modifyRestObj(data);
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.GET_BY_ACTIVE_CAFE_USAGE;
    this.request.params = "";
    this.request.body = restObj;
    this.api.requestObject(this.request).then(data => {
      this.activeUserCafe = data;
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }

  getCafeDetailsReport(data) {
    let restObj = this.modifyRestObj(data);
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.GET_BY_CAFE_USAGE;
    this.request.params = "";
    this.request.body = restObj;
    this.api.requestObject(this.request).then(data => {
      this.cafeDetails = data[0]['cafeUsage'];
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }

  getCourseReport(data) {
    // let restObj = this.modifyRestObj(data);
    let restObj = data;
    restObj.location = this.location
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.GET_BY_TRAINING_COURSE;
    this.request.params = "";
    this.request.body = restObj;
    this.api.requestObject(this.request).then(data => {
      this.courseDetails = data;
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }

  getincomeExpenseDetailReport(data){
    let restObj = {
      "type": data.incomeType,
      "fromdate": data.fromdate,
      "todate": data.todate,
      "location": this.location
    }
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    // this.request.url = "http://localhost:2108";
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.GET_INCOME_DET;
    this.request.params = "";
    this.request.body = restObj;
    this.api.requestObject(this.request).then(data => {
      this.summaryDetailReport = data['summary'];
      if (restObj.type == "income") {
        this.incomeDetailReport = data['income'];        
      } else if (restObj.type == "expense") this.expenseDetailReport = data['expense']
      else {
        this.incomeDetailReport = data['income'];
        this.expenseDetailReport = data['expense']
      }
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }

  getincomeExpenseReport(data) {
    let restObj = {
      "type": data.incomeType,
      "fromdate": data.fromdate,
      "todate": data.todate,
      "location": this.location
    }
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.GET_EXPENSE;
    this.request.params = "";
    this.request.body = restObj;
    this.api.requestObject(this.request).then(data => {
      if (restObj.type == "income") {
        this.incomeListReport = data['income'];
      } else if (restObj.type == "expense") this.expenseList = data['expense']
      else {
        this.incomeListReport = data['income'];
        this.expenseList = data['expense']
      }
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }

  getAttendanceReport(data) {
    let restObj = {
      "courseId": data.courseId,
      "location": this.locationid
    }
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.GET_BY_TRAINING_ATTENDANCE;
    this.request.params = "";
    this.request.body = restObj;
    this.api.requestObject(this.request).then(data => {
      this.attendanceList = data
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }


  getActiveMemberByGenderReport(data) {
    let restObj = this.modifyRestObj(data);
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.GET_ACTIVE_BY_GENDER;
    this.request.params = "";
    this.request.body = restObj;
    this.api.requestObject(this.request).then(data => {
      this.activeMemberGenderList = data;
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }

  getActiveMemberByBumi(data) {
    let restObj = this.modifyRestObj(data);
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.GET_ACTIVE_BY_BUMI;
    this.request.params = "";
    this.request.body = restObj;
    this.api.requestObject(this.request).then(data => {
      this.activeMemberBumiList = data;
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }

  getActiveAgeReport(data) {
    let restObj = this.modifyRestObj(data);
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.GET_ACTIVE_BY_AGE;
    this.request.params = "";
    this.request.body = restObj;
    this.api.requestObject(this.request).then(data => {
      this.activeMemberAgeList = data;
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }

  getActiveMemberByOccupation(data) {
    let restObj = this.modifyRestObj(data);
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.GET_ACTIVE_BY_OCCUPATION;
    this.request.params = "";
    this.request.body = restObj;
    this.api.requestObject(this.request).then(data => {
      this.occupationList = data[0].activeUser.name
      this.activeMemberOccupation = data;
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }

  getReportByClockInClockOut(data) {
    console.log(data,'data');
    let restObj = {
      "period": data.period,
      "fromdate": data.fromdate,
      "todate": data.todate,
      "location": this.location
    }
    
    // let restObj = this.modifyRestObj(data);
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_POST;
    this.request.reqModule = ApiUrlConstants.GET_CLOCK_DET;
    this.request.params = "";
    this.request.body = restObj;
    this.api.requestObject(this.request).then(data => {
      this.clockInClockOutReportList = data.map(element => {
       return { date: element.clockin,
                clockin: element.clockin,
                clockout: element.clockout,
                data: element.fullName };
      });
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }

  downloadActiveMemberReport(dataList, title) {
    if (dataList.length) {
      let reportData = JSON.parse(JSON.stringify(dataList));
      const toPrintArray = reportData.map(item =>
        Object.keys(item).reduce((accumulator, key) => {
          // accumulator is the new object we are creating
          accumulator[this.modifyKeys(key)] = item[key];
          return accumulator;
        }, {})
      );
      var data, filename, link;
      var csv = this.convertArrayOfObjectsToCSV({
        data: toPrintArray
      });
      if (csv == null) return;

      filename = title + '.csv';

      if (!csv.match(/^data:text\/csv/i)) {
        csv = 'data:text/csv;charset=utf-8,' + csv;
      }
      data = encodeURI(csv);

      link = document.createElement('a');
      link.setAttribute('href', data);
      link.setAttribute('download', filename);
      link.click();
    }
  }

  modifyKeys(value) {
    var result = value.replace(/([A-Z])/g, " $1");
    return result.charAt(0).toUpperCase() + result.slice(1);
  }

  convertArrayOfObjectsToCSV(args) {
    var result, ctr, keys, columnDelimiter, lineDelimiter, data;

    data = args.data || null;
    if (data == null || !data.length) {
      return null;
    }

    columnDelimiter = args.columnDelimiter || ',';
    lineDelimiter = args.lineDelimiter || '\n';

    keys = Object.keys(data[0]);

    result = '';
    result += keys.join(columnDelimiter);
    result += lineDelimiter;

    data.forEach(function (item) {
      ctr = 0;
      keys.forEach(function (key) {
        if (ctr > 0) result += columnDelimiter;

        result += item[key];
        ctr++;
      });
      result += lineDelimiter;
    });

    return result;
  }

  // getIncomeReport() {
  //   this.incomeDiv = true;
  //   let obj = {
  //     fromdate: this.fromdate + ":00.000Z",
  //     todate: this.todate + ":57.000Z",
  //     location: this.location
  //   }
  //   this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
  //   this.request.type = AppConstants.API_POST;
  //   this.request.reqModule = ApiUrlConstants.GET_INCOME_REPORT;
  //   this.request.params = "";
  //   this.request.body = obj;
  //   this.api.requestObject(this.request).then(data => {
  //     this.incomeList = data;
  //     console.log('income', this.incomeList)
  //   }, (err) => {
  //     this.incomeDiv = false;
  //     // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
  //     // this.errLogin = err.error;
  //   });
  // }
  // checkDate(event) {
  //   console.log(event, "EVENT")
  // }

  // getcafeReport() {
  //   this.getLocation()
  //   let obj = {
  //     fromdate: this.fromdate + ":00.000Z",
  //     todate: this.todate + ":00.000Z",
  //     location: this.locationid
  //   }
  //   this.CafeDiv = true;
  //   this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
  //   this.request.type = AppConstants.API_POST;
  //   this.request.reqModule = ApiUrlConstants.GET_ALL_VISITOR;
  //   this.request.params = "";
  //   this.request.body = obj;
  //   this.api.requestObject(this.request).then(data => {
  //     this.cafeList = data;

  //   }, (err) => {
  //     this.CafeDiv = false;
  //     // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
  //     // this.errLogin = err.error;
  //   });
  // }
  // getTainingReport() {
  //   let obj = {
  //     fromdate: this.fromdate + ":00.000Z",
  //     todate: this.todate + ":00.000Z",
  //     location: this.location
  //   }
  //   this.TainingDiv = true;
  //   this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
  //   this.request.type = AppConstants.API_POST;
  //   this.request.reqModule = ApiUrlConstants.GET_TRAINING_REPORT;
  //   this.request.params = "";
  //   this.request.body = obj;
  //   this.api.requestObject(this.request).then(data => {
  //     this.tainingList = data;

  //   }, (err) => {
  //     this.TainingDiv = false;
  //     // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
  //     // this.errLogin = err.error;
  //   });
  // }
  // getAllUserReport() {
  //   this.EmplyeeDiv = true;

  //   console.log(this.data, "leaveFormData")
  //   let obj = {
  //     fromdate: this.fromdate + ":00.000Z",
  //     todate: this.todate + ":00.000Z",
  //     location: this.location

  //     // location: parseInt(this.data.location)
  //   }
  //   console.log(obj)
  //   this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
  //   this.request.type = AppConstants.API_POST;
  //   this.request.reqModule = ApiUrlConstants.GET_USER_REPORT;
  //   this.request.params = "";
  //   this.request.body = obj;
  //   this.api.requestObject(this.request).then(data => {
  //     console.log(data, "dataLogin")
  //     this.reportList = data;
  //     console.log(this.reportList, "Locationb")
  //     // this.router.navigate(['/leaveManagement']);
  //     // this.reportForm.reset();
  //   }, (err) => {
  //     this.EmplyeeDiv = false;

  //     // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
  //     // this.errLogin = err.error;
  //   });
  // }
  // addStartDate(type: string, event: MatDatepickerInputEvent<Date>) {
  //   // this.events.push(`${type}: ${event.value}`);
  //   this.startDate = event.value
  //   this.startDate = moment(this.startDate._d).format("YYYY-MM-DD")
  //   console.log(this.startDate);
  //   if(this.startDate == ''){
  //     this.showError = true;
  //   }
  // }
  // addEndDate(type: string, event: MatDatepickerInputEvent<Date>) {
  //   // this.events.push(`${type}: ${event.value}`);
  //   this.endDate = event.value
  //   this.endDate = moment(this.endDate._d).format("YYYY-MM-DD");
  //   if(this.endDate == ''){
  //     this.showError = true;
  //   }
  //   console.log(this.endDate);

  // }

  getEvent(event) {
    let from = this.reportForm.get('fromdate');
    let to = this.reportForm.get('todate');
    let period = this.reportForm.get('period');
    let summaryType = this.reportForm.get('summaryType');
    if (event == '4') {
      this.reportsArray.forEach(element => {
        element['show'] = false
      })
      from.clearValidators();
      from.updateValueAndValidity();
      to.clearValidators();
      to.updateValueAndValidity();
      period.clearValidators();
      period.updateValueAndValidity();
      this.getAllTraining();
    }
    else if (event == '5' || event == '12') {
      period.clearValidators();
      period.updateValueAndValidity();
    }
    else {
      this.reportsArray.forEach(element => {
        element['show'] = false
      })
      from.setValidators([Validators.required]);
      from.updateValueAndValidity();
      to.setValidators([Validators.required]);
      to.updateValueAndValidity();
      period.setValidators([Validators.required]);
      period.updateValueAndValidity();
    }
  }

  getClass = () => {
    if (this.reportForm.value.summaryType == '4') return "col-md-6";
    return "col-md-11";
  }

  getAllTraining() {
    this.loader = true;
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.TRAINING;
    this.request.params = ""
    this.api.requestObject(this.request).then(data => {
      this.trainingList = data;
    }, (err) => {
      // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
      // this.errLogin = err.error;
    });
  }

  getSelectedType(event) {
    this.expenseList = [];
    this.incomeListReport = [];
    this.incomeDetailReport = [];
    this.summaryDetailReport = [];
    this.expenseDetailReport = [];
  }

  exportReportasCsv(value1: string, value2: string): void {
    /* table id is passed over here */
    let element = document.getElementById(value2);
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, value1 + '.csv');

  }
}






