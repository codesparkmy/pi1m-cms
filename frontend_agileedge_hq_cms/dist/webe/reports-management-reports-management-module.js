(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reports-management-reports-management-module"],{

/***/ "./src/app/routes/reports-management/reports-management.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/routes/reports-management/reports-management.module.ts ***!
  \************************************************************************/
/*! exports provided: ReportsManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsManagementModule", function() { return ReportsManagementModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _reports_management_reports_management_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reports-management/reports-management.component */ "./src/app/routes/reports-management/reports-management/reports-management.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");



// import { LeaveCreatComponent } from './leave-creat/leave-creat.component';


var routes = [
    { path: '', component: _reports_management_reports_management_component__WEBPACK_IMPORTED_MODULE_2__["ReportsManagementComponent"] },
];
var ReportsManagementModule = /** @class */ (function () {
    function ReportsManagementModule() {
    }
    ReportsManagementModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_reports_management_reports_management_component__WEBPACK_IMPORTED_MODULE_2__["ReportsManagementComponent"]],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ]
        })
    ], ReportsManagementModule);
    return ReportsManagementModule;
}());



/***/ }),

/***/ "./src/app/routes/reports-management/reports-management/reports-management.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/routes/reports-management/reports-management/reports-management.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"reportForm\" #f=\"ngForm\">\r\n  <div class=\"row mt-4 form-group\">\r\n    <div class=\"col-md-12 col-sm-12\">\r\n      <h4 class=\" header-titel\">Reports</h4>\r\n    </div>\r\n    <div [ngClass]=\"getClass()\">\r\n      <div class=\"form-group\">\r\n        <label>Select Report Type</label>\r\n        <select class=\" form-control\" formControlName=\"summaryType\" (change)=\"getEvent($event.target.value)\">\r\n          <option selected value=\"\">Choose Summary</option>\r\n          <option *ngFor=\"let item of reportsArray\" [value]=\"item?.id\">\r\n            {{item?.name}}\r\n          </option>\r\n        </select>\r\n        <span *ngIf=\"reportForm.get('summaryType').hasError('required') && reportForm.get('summaryType').touched\"\r\n          class=\"text-danger text-12\">Report Type Field required</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6\" *ngIf=\"f.form.value.summaryType == '4'\">\r\n      <div class=\"form-group\">\r\n        <label>Course</label>\r\n        <select class=\"form-control\" formControlName=\"courseId\">\r\n          <option selected value=\"\">Choose Training</option>\r\n          <option *ngFor=\"let item of trainingList\" [value]=\"item?.id\">\r\n            {{item?.course}}\r\n          </option>\r\n        </select>\r\n        <span *ngIf=\"reportForm.get('courseId').hasError('required') && reportForm.get('courseId').touched\"\r\n          class=\"text-danger text-12\">Course is Required</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-12\">\r\n    <div class=\"row align-items-end\">\r\n      <div class=\"col-md-3 col-xs-6\" *ngIf=\"!(f.form.value.summaryType == '4' || f.form.value.summaryType == '5' )\">\r\n        <div class=\"form-group\">\r\n          <label>Period</label>\r\n          <select formControlName=\"period\" class=\"form-control\">\r\n            <option value=\"\" selected>Choose type</option>\r\n            <option value=\"daily\">Daily</option>\r\n            <option value=\"monthly\">Monthly</option>\r\n            <option value=\"yearly\">Yearly</option>\r\n          </select>\r\n          <span *ngIf=\"reportForm.get('period').hasError('required') && reportForm.get('period').touched\"\r\n            class=\"text-danger text-12\">Select Type\r\n          </span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3 col-xs-12\" *ngIf=\"f.form.value.summaryType == '5'\">\r\n        <div class=\"form-group\">\r\n          <label>Type</label>\r\n          <select formControlName=\"incomeType\" class=\"form-control\">\r\n            <option value=\"\" selected>Choose type</option>\r\n            <option value=\"all\">All</option>\r\n            <option value=\"income\">Income</option>\r\n            <option value=\"expense\">Expense</option>\r\n          </select>\r\n          <span *ngIf=\"reportForm.get('incomeType').hasError('required') && reportForm.get('incomeType').touched\"\r\n            class=\"text-danger text-12\">Select Type\r\n          </span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3 col-xs-6\" *ngIf=\"f.form.value.summaryType != '4'\">\r\n        <div class=\"form-group\">\r\n          <label>From date</label>\r\n          <input type=\"date\" formControlName=\"fromdate\" class=\"form-control\">\r\n          <span *ngIf=\"reportForm.get('fromdate').hasError('required') && reportForm.get('fromdate').touched\"\r\n            class=\"text-danger text-12\">From date required</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3 col-xs-6\" *ngIf=\"f.form.value.summaryType != '4'\">\r\n        <div class=\"form-group\">\r\n          <label>To date</label>\r\n          <input type=\"date\" formControlName=\"todate\" class=\"form-control\">\r\n          <span *ngIf=\"reportForm.get('todate').hasError('required') && reportForm.get('todate').touched\"\r\n            class=\"text-danger text-12\">To date required</span>\r\n        </div>\r\n        <span *ngIf=\"error.isError\" class=\"text-danger text-12\">{{ error.errorMessage }}</span>\r\n      </div>\r\n      <div class=\"col-md-3 col-xs-6\">\r\n        <div class=\"form-group\">\r\n          <label>Location</label>\r\n          <select class=\" form-control\" formControlName=\"location\" (click)=\"clearDiv()\">\r\n            <option selected value=\"\">Choose Location</option>\r\n            <option *ngFor=\"let item of locationList index as i\" value={{item.id}}>{{item?.branchName}}</option>\r\n          </select>\r\n          <span *ngIf=\"reportForm.get('summaryType').hasError('required') && reportForm.get('summaryType').touched\"\r\n            class=\"text-danger text-12\">Location required</span>\r\n        </div>\r\n      </div>\r\n      <!-- <div class=\"col\">\r\n          <div class=\"form-group input-group\">\r\n            <div class=\"input-group mb-3\">\r\n              <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\" id=\"basic-addon1\">From</span>\r\n              </div>\r\n              <input type=\"text\" class=\"form-control\" (click)=\"from.open()\" #fromInput\r\n                (dateInput)=\"addStartDate('input', $event)\" (dateChange)=\"addStartDate('change', $event)\" matInput\r\n                [matDatepicker]=\"from\">\r\n              <mat-datepicker #from></mat-datepicker>\r\n              <div class=\"input-group-append\">\r\n                <span class=\"input-group-text\" id=\"basic-addon2\" (click)=\"from.open()\"><img\r\n                    src=\"./assets/icon/calendar.svg\" /></span>\r\n              </div>\r\n            </div>\r\n            <span *ngIf=\"showError\" class=\"text-danger text-12\">Start Date Field required</span>\r\n\r\n            <span *ngIf=\"error.isError\" class=\"text-danger text-12\">{{ error.errorMessage }}</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"col\">\r\n          <div class=\"form-group input-group\">\r\n            <div class=\"input-group mb-3\">\r\n              <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\" id=\"basic-addon1\">To</span>\r\n              </div>\r\n              <input type=\"text\" class=\"form-control\" #toInput (click)=\"to.open()\"\r\n                (dateInput)=\"addStartDate('input', $event)\" (dateChange)=\"addStartDate('change', $event)\" matInput\r\n                [matDatepicker]=\"to\">\r\n              <mat-datepicker #to></mat-datepicker>\r\n              <div class=\"input-group-append\">\r\n                <span class=\"input-group-text\" id=\"basic-addon2\" (click)=\"to.open()\"><img\r\n                    src=\"./assets/icon/calendar.svg\" /></span>\r\n              </div>\r\n\r\n            </div>\r\n            <span *ngIf=\"showError\" class=\"text-danger text-12\">To Date Field required</span>\r\n\r\n            </div>\r\n        </div> -->\r\n    </div>\r\n  </div>\r\n  <div class=\"float-right\">\r\n    <button type=\"button\" class=\"btn px-4 form-group btn-primary\" [disabled]=\"!reportForm.valid\"\r\n      (click)=\"searchReport(reportForm.value)\">Search\r\n    </button>\r\n  </div>\r\n</form>\r\n\r\n<div class=\"marg\">\r\n  <div class=\"row\" *ngIf=\"reportsArray[0]['show'] == true\">\r\n    <div class=\"col-md-12 col-xs-12\" *ngIf=\"activeUserCafe.length\">\r\n      <div class=\"row\">\r\n        <div class=\"col-6\">\r\n          <h5>Summary of Active Users at Cafe</h5>\r\n        </div>\r\n        <div class=\"col-6\">\r\n          <button type=\"button\" class=\"btn btn-sm btn-primary m-2 sec\"\r\n            (click)=\"downloadActiveMemberReport(activeUserCafe,'Summary of Active Users at Cafe')\">Download</button>\r\n        </div>\r\n      </div>\r\n\r\n      <table class=\"table rounded table-borderless bg-light app-table\">\r\n        <thead>\r\n          <tr>\r\n            <th>S.No</th>\r\n            <th>Period</th>\r\n            <th>Member frequency</th>\r\n            <th>Non-Member frequency</th>\r\n            <th>Total usage frquency</th>\r\n            <th>Total Login frequency</th>\r\n            <th>Total usage</th>\r\n          </tr>\r\n        </thead>\r\n\r\n        <tbody>\r\n          <tr *ngFor=\"let user of activeUserCafe; index as i\">\r\n            <td>{{i+1}}</td>\r\n            <td>{{user.period}}</td>\r\n            <td>{{user.memberFrequency}}</td>\r\n            <td>{{user.memberNonfrequency}}</td>\r\n            <td>{{user.totalUsageFrequency}}</td>\r\n            <td>{{user.totalLoginFrequency}}</td>\r\n            <td>{{user.totalUsage}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <div *ngIf=\"activeUserCafe.length == 0\">\r\n      <h4>No records found for the search criteria</h4>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\" *ngIf=\"reportsArray[1]['show'] == true\">\r\n    <div class=\"col-md-12 col-xs-12\" *ngIf=\"cafeDetails?.length\">\r\n      <div class=\"row\">\r\n        <div class=\"col-6\">\r\n          <h5>Summary Of Cafe Usage Details</h5>\r\n        </div>\r\n        <div class=\"col-6\">\r\n          <button type=\"button\" class=\"btn btn-sm btn-primary m-2 sec\"\r\n            (click)=\"downloadActiveMemberReport(cafeDetails,'Summary Of Cafe Usage Details')\">Download</button>\r\n        </div>\r\n      </div>\r\n      <table class=\"table rounded table-borderless bg-light app-table\">\r\n        <thead>\r\n          <tr>\r\n            <th>S.No</th>\r\n            <th>Date</th>\r\n            <th>Start time</th>\r\n            <th>Work station</th>\r\n            <th>Name</th>\r\n            <th>Nric</th>\r\n            <th>Member</th>\r\n            <th>Usage(Hrs)</th>\r\n            <th>Amount(RM)</th>\r\n          </tr>\r\n        </thead>\r\n\r\n        <tbody>\r\n          <tr *ngFor=\"let user of cafeDetails; index as i\">\r\n            <td>{{i+1}}</td>\r\n            <td>{{user.date}}</td>\r\n            <td>{{user.startTime}}</td>\r\n            <td>{{user.workstation}}</td>\r\n            <td>{{user.name}}</td>\r\n            <td>{{user.nric}}</td>\r\n            <td>{{user.isMember == true?'Yes':'No'}}</td>\r\n            <td>{{user.usage}}</td>\r\n            <td>{{user.amount}}</td>\r\n          </tr>\r\n\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <div *ngIf=\"cafeDetails?.length == 0\">\r\n      <h4>No records found for the search criteria</h4>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\" *ngIf=\"reportsArray[2]['show'] == true\">\r\n    <div class=\"col-md-12 col-xs-12\" *ngIf=\"courseDetails.length\">\r\n      <div class=\"row\">\r\n        <div class=\"col-6\">\r\n          <h5>Summary Of Training Course Details</h5>\r\n        </div>\r\n        <div class=\"col-6\">\r\n          <button type=\"button\" class=\"btn btn-sm btn-primary m-2 sec\"\r\n            (click)=\"downloadActiveMemberReport(courseDetails,'Summary Of Training Course Details')\">Download</button>\r\n        </div>\r\n      </div>\r\n      <table class=\"table rounded table-borderless bg-light app-table\">\r\n        <thead>\r\n          <tr>\r\n            <th>S.No</th>\r\n            <th>Course date</th>\r\n            <th>Category</th>\r\n            <th>Course name</th>\r\n            <th>Duration</th>\r\n            <th>Target group</th>\r\n            <th>Trainer</th>\r\n            <th>Location</th>\r\n          </tr>\r\n        </thead>\r\n\r\n        <tbody>\r\n          <tr *ngFor=\"let user of courseDetails; index as i\">\r\n            <td>{{i+1}}</td>\r\n            <td>{{user.courseDate}}</td>\r\n            <td>{{user.category}}</td>\r\n            <td>{{user.courseName}}</td>\r\n            <td>{{user.duration}}</td>\r\n            <td>{{user.targetGroup}}</td>\r\n            <td>{{user.trainer}}</td>\r\n            <td>{{user.location}}</td>\r\n          </tr>\r\n\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <div *ngIf=\"courseDetails.length == 0\">\r\n      <h4>No records found for the search criteria</h4>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\" *ngIf=\"reportsArray[3]['show'] == true\">\r\n    <div class=\"col-md-12 col-xs-12\" *ngIf=\"attendanceList.length\">\r\n      <div class=\"row\">\r\n        <div class=\"col-6\">\r\n          <h5>Summary Of Total Attendance</h5>\r\n        </div>\r\n        <div class=\"col-6\">\r\n          <button type=\"button\" class=\"btn btn-sm btn-primary m-2 sec\"\r\n            (click)=\"downloadActiveMemberReport(attendanceList,'Summary Of Total Attendance')\">Download</button>\r\n        </div>\r\n      </div>\r\n      <table class=\"table rounded table-borderless bg-light app-table\">\r\n        <thead>\r\n          <tr>\r\n            <th>S.No</th>\r\n            <th>Name</th>\r\n            <th>Nric</th>\r\n            <th>Age</th>\r\n            <th>Bumi Status</th>\r\n            <th>Occupation</th>\r\n            <th>Member</th>\r\n          </tr>\r\n        </thead>\r\n\r\n        <tbody>\r\n          <tr *ngFor=\"let user of attendanceList; index as i\">\r\n            <td>{{i+1}}</td>\r\n            <td>{{user.name}}</td>\r\n            <td>{{user.nric}}</td>\r\n            <td>{{user.age}}</td>\r\n            <td>{{user.bumiStatus == true?'Yes':'No'}}</td>\r\n            <td>{{user.occupation}}</td>\r\n            <td>{{user.member == true?'Yes':'No'}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <div *ngIf=\"attendanceList.length == 0\">\r\n      <h4>No records found for the search criteria</h4>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\" *ngIf=\"reportsArray[4]['show'] == true\">\r\n    <ng-container *ngIf=\"incomeListReport.length\">\r\n      <div class=\"col-md-12 col-xs-12\">\r\n        <div class=\"row\">\r\n          <div class=\"col-6\">\r\n            <h5>Summary Of Income Report</h5>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <button type=\"button\" class=\"btn btn-sm btn-primary m-2 sec\"\r\n              (click)=\"downloadActiveMemberReport(incomeListReport,'Summary Of Income Report')\">Download</button>\r\n          </div>\r\n        </div>\r\n        <table class=\"table rounded table-borderless bg-light app-table\">\r\n          <thead>\r\n            <tr>\r\n              <th>S.No</th>\r\n              <th>Item</th>\r\n              <th>Amount</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let user of incomeListReport; index as i\">\r\n              <td>{{i+1}}</td>\r\n              <td>{{user.name}}</td>\r\n              <td>{{user.amount}}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <div *ngIf=\"incomeListReport.length == 0\">\r\n        <h4>No records found for the search criteria</h4>\r\n      </div>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"expenseList.length\">\r\n      <div class=\"col-md-12 col-xs-12\">\r\n        <div class=\"row\">\r\n          <div class=\"col-6\">\r\n            <h5>Summary Of Expense Report</h5>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <button type=\"button\" class=\"btn btn-sm btn-primary m-2 sec\"\r\n              (click)=\"downloadActiveMemberReport(expenseList,'Summary Of Expense Report')\">Download</button>\r\n          </div>\r\n        </div>\r\n        <table class=\"table rounded table-borderless bg-light app-table\">\r\n          <thead>\r\n            <tr>\r\n              <th>S.No</th>\r\n              <th>Item</th>\r\n              <th>Amount</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let item of expenseList; index as i\">\r\n              <td>{{i+1}}</td>\r\n              <td>{{item.name}}</td>\r\n              <td>{{item.amount}}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <div *ngIf=\"expenseList.length == 0\">\r\n        <h4>No records found for the search criteria</h4>\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n\r\n  <div class=\"row\" *ngIf=\"reportsArray[5]['show'] == true\">\r\n    <div class=\"col-md-12 col-xs-12\" *ngIf=\"activeMemberReport.length\">\r\n      <div class=\"row\">\r\n        <div class=\"col-6\">\r\n          <h5> Summary Of Active Member</h5>\r\n        </div>\r\n        <div class=\"col-6\">\r\n          <button type=\"button\" class=\"btn btn-sm btn-primary m-2 sec\"\r\n            (click)=\"downloadActiveMemberReport(activeMemberReport,'Summary Of Active Member')\">Download</button>\r\n        </div>\r\n      </div>\r\n\r\n      <table class=\"table rounded table-borderless bg-light app-table\">\r\n        <thead>\r\n          <tr>\r\n            <th>S.No</th>\r\n            <th>Period</th>\r\n            <th>Member</th>\r\n            <th>Expired</th>\r\n            <th>Active Member</th>\r\n            <th>Active NonMember</th>\r\n            <th>Total Active Users</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let user of activeMemberReport; index as i\">\r\n            <td>{{i+1}}</td>\r\n            <td>{{user.period}}</td>\r\n            <td>{{user.registeredMember}}</td>\r\n            <td>{{user.memberExpired}}</td>\r\n            <td>{{user.activeMember}}</td>\r\n            <td>{{user.activeNonMember}}</td>\r\n            <td>{{user.totalActiveUser}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <div *ngIf=\"activeMemberReport.length == 0\">\r\n      <h4>No records found for the search criteria</h4>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\" *ngIf=\"reportsArray[6]['show'] == true\">\r\n    <div class=\"col-md-12 col-xs-12\" *ngIf=\"activeMemberGenderList.length\">\r\n      <div class=\"row\">\r\n        <div class=\"col-6\">\r\n          <h5>Summary Of Active Member By Gender</h5>\r\n        </div>\r\n        <div class=\"col-6\">\r\n          <button type=\"button\" class=\"btn btn-sm btn-primary m-2 sec\"\r\n            (click)=\"downloadActiveMemberReport(activeMemberGenderList,'Summary Of Active Member By Gender')\">Download</button>\r\n        </div>\r\n      </div>\r\n      <table class=\"table rounded table-borderless bg-light app-table\">\r\n        <thead>\r\n          <tr>\r\n            <th>Period</th>\r\n            <th colspan=\"2\">Active Member</th>\r\n            <th colspan=\"2\">NonActive Member</th>\r\n            <th colspan=\"2\">Total Active Users</th>\r\n            <th colspan=\"2\">Total Trained</th>\r\n          </tr>\r\n          <tr>\r\n            <th></th>\r\n            <th>Male</th>\r\n            <th>Female</th>\r\n            <th>Male</th>\r\n            <th>Female</th>\r\n            <th>Male</th>\r\n            <th>Female</th>\r\n            <th>Male</th>\r\n            <th>Female</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let user of activeMemberGenderList; index as i\">\r\n            <td style=\"text-align: left !important;\">{{user?.period}}</td>\r\n            <td>{{user?.activeMale}}</td>\r\n            <td>{{user?.activeFemale}}</td>\r\n            <td>{{user?.NonactiveMale}}</td>\r\n            <td>{{user?.NonactiveFemale}}</td>\r\n            <td>{{user?.totalActiveUserMale}}</td>\r\n            <td>{{user?.totalActiveUserFemale}}</td>\r\n            <td>{{user?.totalTrainedMale}}</td>\r\n            <td>{{user?.totalTrainedFemale}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <div *ngIf=\"activeMemberGenderList.length == 0\">\r\n      <h4>No records found for the search criteria</h4>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\" *ngIf=\"reportsArray[7]['show'] == true\">\r\n    <div class=\"col-md-12 col-xs-12\" *ngIf=\"activeMemberBumiList.length\">\r\n      <div class=\"row\">\r\n        <div class=\"col-6\">\r\n          <h5>Summary Of Active Member By Bumi</h5>\r\n        </div>\r\n        <div class=\"col-6\">\r\n          <button type=\"button\" class=\"btn btn-sm btn-primary m-2 sec\"\r\n            (click)=\"downloadActiveMemberReport(activeMemberBumiList,'Summary Of Active Member By Bumi')\">Download</button>\r\n        </div>\r\n      </div>\r\n      <table class=\"table rounded table-borderless bg-light app-table\">\r\n        <thead>\r\n          <tr>\r\n            <th>Period</th>\r\n            <th colspan=\"2\">Active Member</th>\r\n            <th colspan=\"2\">NonActive Member</th>\r\n            <th colspan=\"2\">Total Active Users</th>\r\n            <th colspan=\"2\">Total Trained</th>\r\n          </tr>\r\n          <tr>\r\n            <th></th>\r\n            <th>Bumi</th>\r\n            <th>Non Bumi</th>\r\n            <th>Bumi</th>\r\n            <th>Non Bumi</th>\r\n            <th>Bumi</th>\r\n            <th>Non Bumi</th>\r\n            <th>Bumi</th>\r\n            <th>Non Bumi</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let user of activeMemberBumiList; index as i\">\r\n            <td style=\"text-align: left !important;\">{{user?.period}}</td>\r\n            <td>{{user?.memberBumi}}</td>\r\n            <td>{{user?.memberNonBumi}}</td>\r\n            <td>{{user?.nonMemberBumi}}</td>\r\n            <td>{{user?.nonMemberNonBumi}}</td>\r\n            <td>{{user?.totalActiveUserBumi}}</td>\r\n            <td>{{user?.totalActiveUserNonBumi}}</td>\r\n            <td>{{user?.totalTrainedBumi}}</td>\r\n            <td>{{user?.totalTrainedNonBumi}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <div *ngIf=\"activeMemberBumiList.length == 0\">\r\n      <h4>No records found for the search criteria</h4>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\" *ngIf=\"reportsArray[8]['show'] == true\">\r\n    <div class=\"col-md-12 col-xs-12\" *ngIf=\"activeMemberAgeList.length\">\r\n      <div class=\"row\">\r\n        <div class=\"col-6\">\r\n          <h5>Summary Of Active Member By Age Group</h5>\r\n        </div>\r\n        <div class=\"col-6\">\r\n          <button type=\"button\" class=\"btn btn-sm btn-primary m-2 sec\"\r\n            (click)=\"downloadActiveMemberReport(activeMemberAgeList,'Summary Of Active Member By Age Group')\">Download</button>\r\n        </div>\r\n      </div>\r\n      <table class=\"table rounded table-borderless bg-light app-table\">\r\n        <thead>\r\n          <tr>\r\n            <th>Period</th>\r\n            <th colspan=\"4\">Active Member</th>\r\n            <th colspan=\"4\">NonActive Member</th>\r\n            <th colspan=\"4\">Total Active Users</th>\r\n          </tr>\r\n          <tr>\r\n            <th></th>\r\n            <th>less than 18 years old </th>\r\n            <th>18-35 years old</th>\r\n            <th>36-55 years old</th>\r\n            <th>>55 years old</th>\r\n            <th>less than 18 years old </th>\r\n            <th>18-35 years old</th>\r\n            <th>36-55 years old</th>\r\n            <th>>55 years old</th>\r\n            <th>less than 18 years old </th>\r\n            <th>18-35 years old</th>\r\n            <th>36-55 years old</th>\r\n            <th>>55 years old</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let user of activeMemberAgeList; index as i\">\r\n            <td style=\"text-align: left !important;\">{{user?.period}}</td>\r\n            <td>{{user?.activeeighteen}}</td>\r\n            <td>{{user?.activethirtyFive}}</td>\r\n            <td>{{user?.activefiftyFive}}</td>\r\n            <td>{{user?.activeaboveFiftyFive}}</td>\r\n            <td>{{user?.nonactiveeighteen}}</td>\r\n            <td>{{user?.nonactivethirtyFive}}</td>\r\n            <td>{{user?.nonactivefiftyFive}}</td>\r\n            <td>{{user?.nonactiveaboveFiftyFive}}</td>\r\n            <td>{{user?.totalusereighteen}}</td>\r\n            <td>{{user?.totaluserthirtyFive}}</td>\r\n            <td>{{user?.totaluserfiftyFive}}</td>\r\n            <td>{{user?.totaluseraboveFiftyFive}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <div *ngIf=\"activeMemberAgeList.length == 0\">\r\n      <h4>No records found for the search criteria</h4>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\" *ngIf=\"reportsArray[9]['show'] == true\">\r\n    <div class=\"col-md-12 col-xs-12\" *ngIf=\"activeMemberOccupation.length\">\r\n      <div class=\"row\">\r\n        <div class=\"col-6\">\r\n          <h5>Summary Of Occupation</h5>\r\n        </div>\r\n        <div class=\"col-6\">\r\n          <button type=\"button\" class=\"btn btn-sm btn-primary m-2 sec\"\r\n            (click)=\"downloadActiveMemberReport(activeMemberOccupation,'Summary Of Active Member By Occupation')\">Download</button>\r\n        </div>\r\n      </div>\r\n      table\r\n    </div>\r\n    <div *ngIf=\"activeMemberOccupation.length == 0\">\r\n      <h4>No records found for the search criteria</h4>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- <div class=\"container\">\r\n  <div class=\"row \">\r\n    <div class=\"col-md-12 col-xs-12\">\r\n\r\n      <table class=\"table rounded table-borderless bg-light app-table\" *ngIf=\"EmplyeeDiv\">\r\n        <thead>\r\n          <tr>\r\n            <th>S.No</th>\r\n            <th>Email</th>\r\n            <th>Employee ID</th>\r\n            <th>Full Name</th>\r\n            <th>Phone Number</th>\r\n            <th>Role</th>\r\n            <th>Subscription ID</th>\r\n          </tr>\r\n        </thead>\r\n\r\n        <tbody>\r\n          <tr *ngFor=\"let user of reportList; index as i\">\r\n            <td>{{i+1}}</td>\r\n            <td>{{user.email}}</td>\r\n            <td>{{user.employeeId}}</td>\r\n            <td>{{user.fullName}}</td>\r\n            <td>{{user.phoneNumber}}</td>\r\n            <td>{{user.role}}</td>\r\n            <td>{{user.subscriptionId}}</td>\r\n          </tr>\r\n\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"row \">\r\n    <div class=\"col-md-12 col-xs-12\">\r\n\r\n      <table class=\"table rounded table-borderless bg-light app-table\" *ngIf=\"CafeDiv\">\r\n        <thead>\r\n          <tr>\r\n            <th>S.No</th>\r\n            <th>Member ID</th>\r\n            <th>Location</th>\r\n            <th>Name</th>\r\n            <th>Contact Number</th>\r\n            <th>Email</th>\r\n          </tr>\r\n        </thead>\r\n\r\n        <tbody>\r\n          <tr *ngFor=\"let user of cafeList; index as i\">\r\n            <td>{{i+1}}</td>\r\n            <td>{{user.memeberCode}}</td>\r\n            <td>{{user.location.branchName}}</td>\r\n            <td>{{user.name}}</td>\r\n            <td>{{user.contactNo}}</td>\r\n            <td>{{user.emailId}}</td>\r\n          </tr>\r\n\r\n        </tbody>\r\n      </table>\r\n\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"row \">\r\n    <div class=\"col-md-12 col-xs-12\">\r\n\r\n      <table class=\"table rounded table-borderless bg-light app-table\" *ngIf=\"TainingDiv\">\r\n        <thead>\r\n          <tr>\r\n            <th>S.No</th>\r\n            <th>Course</th>\r\n            <th>CourseCode</th>\r\n            <th>CourseType</th>\r\n            <th>Duration</th>\r\n            <th>Fee</th>\r\n            <th>Enrolled</th>\r\n            <th>Maximum Subscription</th>\r\n            <th>Status</th>\r\n          </tr>\r\n        </thead>\r\n\r\n        <tbody>\r\n          <tr *ngFor=\"let user of tainingList; index as i\">\r\n            <td>{{i+1}}</td>\r\n            <td>{{user.course}}</td>\r\n            <td>{{user.courseCode}}</td>\r\n            <td>\r\n              <ng-container *ngIf=\"user?.courseType == '1'\">Daily</ng-container>\r\n              <ng-container *ngIf=\"user?.courseType == '2'\">Weekly</ng-container>\r\n            </td>\r\n            <td>{{user.courseDuration}}</td>\r\n            <td>RM {{user.fee}}</td>\r\n            <td>{{user.enrolled}}</td>\r\n            <td>{{user.maximumSubscription}}</td>\r\n            <td><span class=\"text-success\" *ngIf=\"user.status=='1'\">Active</span><span class=\"text-danger\"\r\n                *ngIf=\"user.status!='1'\">Inactive</span></td>\r\n          </tr>\r\n\r\n        </tbody>\r\n      </table>\r\n\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"row \">\r\n    <div class=\"col-md-12 col-xs-12\">\r\n\r\n      <div *ngIf=\"incomeDiv\">\r\n\r\n        <table class=\"table rounded table-borderless bg-light app-table\">\r\n          <thead>\r\n            <tr>\r\n              <th>S.No</th>\r\n              <th>User ID</th>\r\n              <th>Total Income</th>\r\n            </tr>\r\n          </thead>\r\n\r\n          <tbody>\r\n            <tr *ngFor=\"let income of incomeList; index as i\">\r\n              <td>{{i+1}}</td>\r\n              <td>{{income.id}}</td>\r\n              <td *ngIf=\"income.totalAmount!=0\">{{income.totalAmount}}</td>\r\n              <td *ngIf=\"income.totalAmount==0\">\r\n                {{income.browesUsage + income.gst+income.serviceCharge+income.printUsage+income.foodUsage}}</td>\r\n\r\n            </tr>\r\n\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div> -->"

/***/ }),

/***/ "./src/app/routes/reports-management/reports-management/reports-management.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/routes/reports-management/reports-management/reports-management.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Poppins&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Merriweather:300,400,500i,700,900&display=swap\");\n.role-select {\n  border-radius: 25px;\n  width: 50%;\n  color: #3B3984;\n  border: 1px solid #3B3984; }\ntd {\n  text-align: center;\n  border: 1px solid #c4c4c4; }\nth {\n  text-align: center;\n  background-color: #eeecf2;\n  color: #000 !important;\n  border: 1px solid #c4c4c4 !important;\n  border-radius: 4px; }\n.sec {\n  justify-content: right !important;\n  float: right !important; }\n.marg {\n  margin-top: 4em !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL3JlcG9ydHMtbWFuYWdlbWVudC9yZXBvcnRzLW1hbmFnZW1lbnQvRTpcXGZyb250ZW5kX2FnaWxlZWRnZV9ocV9jbXMvc3JjXFxhcHBcXHNoYXJlZFxcc3R5bGVzXFxhYnN0cmFjdHNcXGZvbnRzLnNjc3MiLCJzcmMvYXBwL3JvdXRlcy9yZXBvcnRzLW1hbmFnZW1lbnQvcmVwb3J0cy1tYW5hZ2VtZW50L0U6XFxmcm9udGVuZF9hZ2lsZWVkZ2VfaHFfY21zL3NyY1xcYXBwXFxyb3V0ZXNcXHJlcG9ydHMtbWFuYWdlbWVudFxccmVwb3J0cy1tYW5hZ2VtZW50XFxyZXBvcnRzLW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3JvdXRlcy9yZXBvcnRzLW1hbmFnZW1lbnQvcmVwb3J0cy1tYW5hZ2VtZW50L0U6XFxmcm9udGVuZF9hZ2lsZWVkZ2VfaHFfY21zL3NyY1xcYXBwXFxzaGFyZWRcXHN0eWxlc1xcYWJzdHJhY3RzXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSwyRUFBWTtBQUVaLHFHQUFZO0FDRFo7RUFDSSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGNDQ2U7RURBZix5QkNBZSxFQUFBO0FERW5CO0VBQ0ksa0JBQWtCO0VBQ2xCLHlCQUF5QixFQUFBO0FBRTdCO0VBQ0ksa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsb0NBQW9DO0VBQ3BDLGtCQUFrQixFQUFBO0FBRXRCO0VBQ0ksaUNBQWlDO0VBQ2pDLHVCQUF1QixFQUFBO0FBRzNCO0VBQ0ksMEJBQTBCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9yb3V0ZXMvcmVwb3J0cy1tYW5hZ2VtZW50L3JlcG9ydHMtbWFuYWdlbWVudC9yZXBvcnRzLW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1NZXJyaXdlYXRoZXI6MzAwLDQwMCw1MDBpLDcwMCw5MDAmZGlzcGxheT1zd2FwJyk7IiwiQGltcG9ydCBcIi4uLy4uLy4uL3NoYXJlZC9zdHlsZXMvYWJzdHJhY3RzL2Fic3RyYWN0cy1kaXIuc2Nzc1wiO1xyXG5cclxuLnJvbGUtc2VsZWN0IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgY29sb3I6ICRwcmltYXJ5LWJnO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJHByaW1hcnktYmc7XHJcbn1cclxudGQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M0YzRjNDtcclxufVxyXG50aCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlY2YyO1xyXG4gICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjNGM0YzQgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uc2VjIHtcclxuICAgIGp1c3RpZnktY29udGVudDogcmlnaHQgIWltcG9ydGFudDtcclxuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWFyZyB7XHJcbiAgICBtYXJnaW4tdG9wOiA0ZW0gIWltcG9ydGFudDtcclxufVxyXG4iLCIkd2hpdGUgOiAjRkZGRkZGO1xyXG4kYmxhY2sgOiAjMDAwMDAwO1xyXG5cclxuXHJcbiRwcmltYXJ5LWJnLWxpZ2h0IDogI2YxZjlmODtcclxuXHJcbiRwcmltYXJ5LWJnOiMzQjM5ODQ7XHJcbi8vICRzZWNvbmRhcnktYmc6IzJmYzJiMjsiXX0= */"

/***/ }),

/***/ "./src/app/routes/reports-management/reports-management/reports-management.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/routes/reports-management/reports-management/reports-management.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ReportsManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsManagementComponent", function() { return ReportsManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_remote_service_remote_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/remote-service/remote-api.service */ "./src/app/core/services/remote-service/remote-api.service.ts");
/* harmony import */ var _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/constants/AppConstants */ "./src/app/core/constants/AppConstants.ts");
/* harmony import */ var _core_constants_apiUrlConstants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/constants/apiUrlConstants */ "./src/app/core/constants/apiUrlConstants.ts");
/* harmony import */ var _core_services_remote_service_reqResObj_Request__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/services/remote-service/reqResObj/Request */ "./src/app/core/services/remote-service/reqResObj/Request.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");









var ReportsManagementComponent = /** @class */ (function () {
    function ReportsManagementComponent(request, api, route) {
        var _this = this;
        this.request = request;
        this.api = api;
        this.route = route;
        this.userData = localStorage.getItem('userId');
        this.courseList = [];
        this.loader = true;
        this.TainingDiv = false;
        this.CafeDiv = false;
        this.EmplyeeDiv = false;
        this.incomeDiv = false;
        this.expenseDiv = false;
        this.showError = false;
        this.error = { isError: false, errorMessage: '' };
        this.reportsArray = [
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
                name: 'Summary of Leave',
                show: false,
                function: "getLeaveReport"
            }
        ];
        this.activeMemberReport = [];
        this.activeUserCafe = [];
        this.cafeDetails = [];
        this.courseDetails = [];
        this.attendanceList = [];
        this.incomeListReport = [];
        this.activeMemberGenderList = [];
        this.activeMemberBumiList = [];
        this.activeMemberAgeList = [];
        this.activeMemberOccupation = [];
        this.expenseList = [];
        this.leaveReport = [];
        this.trainingList = [];
        this.getClass = function () {
            if (_this.reportForm.value.summaryType == '4')
                return "col-md-6";
            return "col-md-12";
        };
        this.reportForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            summaryType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            fromdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            todate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            period: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            incomeType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            courseId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    ReportsManagementComponent.prototype.ngOnInit = function () {
        this.clearDiv();
        // this.user=localStorage.getItem('user');
        this.userData = localStorage.getItem('userId');
        this.getLocation();
        this.getAllTraining();
        // console.log(this.user,"USERDATA")
    };
    ReportsManagementComponent.prototype.getToday = function () {
        return new Date().toISOString().split('T')[0];
    };
    ReportsManagementComponent.prototype.compareTwoDates = function () {
        // if (new Date(this.reportForm.controls['fromdate'].value) < new Date(this.reportForm.controls['fromdate'].value)) {
        //   this.error = { isError: true, errorMessage: 'From Date Should be greater than To Date' };
        // } else {
        //   this.error = { isError: false }
        // }
    };
    ReportsManagementComponent.prototype.clearDiv = function () {
        this.reportsArray.forEach(function (element) {
            element['show'] = false;
        });
    };
    ReportsManagementComponent.prototype.searchReport = function (data) {
        var _this = this;
        console.log(data, "CheckData");
        this.data = data;
        this.fromdate = data.fromdate;
        this.todate = data.todate;
        this.location = parseInt(data.location);
        this.reportsArray.forEach(function (element) {
            if (element['id'] == data.summaryType) {
                _this[element['function']](data);
                element['show'] = true;
            }
            else
                element['show'] = false;
        });
        // this.data = data;
        // this.compareTwoDates();
        // this.fromdate = data.fromdate;
        // this.todate = data.todate
        // this.location = parseInt(data.location)
        // if (data.summaryType == 1) {
        //   this.getAllUserReport()
        // }
        // else if (data.summaryType == 2) {
        //   this.getcafeReport();
        //   // this.APILIST=ApiUrlConstants.GET_TRAINING_REPORT
        // }
        // else if (data.summaryType == 3) {
        //   this.getTainingReport();
        // }
        // else if (data.summaryType == 4) {
        // } else if (data.summaryType == 5) {
        //   this.getIncomeReport();
        // } else if (data.summaryType == 6) {
        //   // this.getExpenseReport()
        // } else {
        //   return null
        // }
        // this.reportForm.reset();
    };
    ReportsManagementComponent.prototype.getLocation = function () {
        var _this = this;
        this.location = this.userData;
        this.request.url = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].SERVER_URI_OBJECT['core'];
        this.request.type = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].API_GET;
        this.request.reqModule = _core_constants_apiUrlConstants__WEBPACK_IMPORTED_MODULE_6__["ApiUrlConstants"].GET_LOCATION;
        this.request.params = "";
        this.request.body = "";
        this.api.requestObject(this.request).then(function (data) {
            // this.locationid = data.branchAllocation;
            _this.locationList = data;
        }, function (err) {
            // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
            // this.errLogin = err.error;
        });
    };
    ReportsManagementComponent.prototype.getActiveMemberReport = function (data) {
        var _this = this;
        var restObj = this.modifyRestObj(data);
        this.request.url = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].SERVER_URI_OBJECT['core'];
        this.request.type = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].API_POST;
        this.request.reqModule = _core_constants_apiUrlConstants__WEBPACK_IMPORTED_MODULE_6__["ApiUrlConstants"].GET_ACTIVE_MEMBER_REPORT;
        this.request.params = "";
        this.request.body = restObj;
        this.api.requestObject(this.request).then(function (data) {
            _this.activeMemberReport = data;
        }, function (err) {
            // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
            // this.errLogin = err.error;
        });
    };
    ReportsManagementComponent.prototype.modifyRestObj = function (data, val) {
        var from = "";
        var to = "";
        if (data.period == "yearly") {
            from = data.fromdate.slice(0, 4);
            to = data.todate.slice(0, 4);
        }
        else if (data.period == "monthly") {
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
        };
    };
    ReportsManagementComponent.prototype.getActiveusersAtCafe = function (data) {
        var _this = this;
        var restObj = this.modifyRestObj(data);
        this.request.url = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].SERVER_URI_OBJECT['core'];
        this.request.type = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].API_POST;
        this.request.reqModule = _core_constants_apiUrlConstants__WEBPACK_IMPORTED_MODULE_6__["ApiUrlConstants"].GET_BY_ACTIVE_CAFE_USAGE;
        this.request.params = "";
        this.request.body = restObj;
        this.api.requestObject(this.request).then(function (data) {
            _this.activeUserCafe = data;
        }, function (err) {
            // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
            // this.errLogin = err.error;
        });
    };
    ReportsManagementComponent.prototype.getCafeDetailsReport = function (data) {
        var _this = this;
        var restObj = this.modifyRestObj(data);
        this.request.url = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].SERVER_URI_OBJECT['core'];
        this.request.type = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].API_POST;
        this.request.reqModule = _core_constants_apiUrlConstants__WEBPACK_IMPORTED_MODULE_6__["ApiUrlConstants"].GET_BY_CAFE_USAGE;
        this.request.params = "";
        this.request.body = restObj;
        this.api.requestObject(this.request).then(function (data) {
            _this.cafeDetails = data[0]['cafeUsage'];
        }, function (err) {
            // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
            // this.errLogin = err.error;
        });
    };
    ReportsManagementComponent.prototype.getCourseReport = function (data) {
        var _this = this;
        var restObj = this.modifyRestObj(data);
        this.request.url = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].SERVER_URI_OBJECT['core'];
        this.request.type = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].API_POST;
        this.request.reqModule = _core_constants_apiUrlConstants__WEBPACK_IMPORTED_MODULE_6__["ApiUrlConstants"].GET_BY_TRAINING_COURSE;
        this.request.params = "";
        this.request.body = restObj;
        this.api.requestObject(this.request).then(function (data) {
            _this.courseDetails = data;
        }, function (err) {
            // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
            // this.errLogin = err.error;
        });
    };
    ReportsManagementComponent.prototype.getincomeExpenseReport = function (data) {
        var _this = this;
        var restObj = {
            "type": data.incomeType,
            "fromdate": data.fromdate,
            "todate": data.todate,
            "location": this.location
        };
        this.request.url = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].SERVER_URI_OBJECT['core'];
        this.request.type = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].API_POST;
        this.request.reqModule = _core_constants_apiUrlConstants__WEBPACK_IMPORTED_MODULE_6__["ApiUrlConstants"].GET_EXPENSE;
        this.request.params = "";
        this.request.body = restObj;
        this.api.requestObject(this.request).then(function (data) {
            if (restObj.type == "income") {
                _this.incomeListReport = data[0]['income']['printOut'];
            }
            else if (restObj.type == "expense")
                _this.expenseList = data[0]['expense'];
            else {
                _this.incomeListReport = data[0]['income']['printOut'];
                _this.expenseList = data[0]['expense'];
            }
        }, function (err) {
            // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
            // this.errLogin = err.error;
        });
    };
    ReportsManagementComponent.prototype.getAttendanceReport = function (data) {
        var _this = this;
        var restObj = {
            "courseId": data.courseId,
            "location": this.locationid
        };
        this.request.url = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].SERVER_URI_OBJECT['core'];
        this.request.type = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].API_POST;
        this.request.reqModule = _core_constants_apiUrlConstants__WEBPACK_IMPORTED_MODULE_6__["ApiUrlConstants"].GET_BY_TRAINING_ATTENDANCE;
        this.request.params = "";
        this.request.body = restObj;
        this.api.requestObject(this.request).then(function (data) {
            _this.attendanceList = data;
        }, function (err) {
            // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
            // this.errLogin = err.error;
        });
    };
    ReportsManagementComponent.prototype.getActiveMemberByGenderReport = function (data) {
        var _this = this;
        var restObj = this.modifyRestObj(data);
        this.request.url = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].SERVER_URI_OBJECT['core'];
        this.request.type = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].API_POST;
        this.request.reqModule = _core_constants_apiUrlConstants__WEBPACK_IMPORTED_MODULE_6__["ApiUrlConstants"].GET_ACTIVE_BY_GENDER;
        this.request.params = "";
        this.request.body = restObj;
        this.api.requestObject(this.request).then(function (data) {
            _this.activeMemberGenderList = data;
        }, function (err) {
            // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
            // this.errLogin = err.error;
        });
    };
    ReportsManagementComponent.prototype.getActiveMemberByBumi = function (data) {
        var _this = this;
        var restObj = this.modifyRestObj(data);
        this.request.url = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].SERVER_URI_OBJECT['core'];
        this.request.type = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].API_POST;
        this.request.reqModule = _core_constants_apiUrlConstants__WEBPACK_IMPORTED_MODULE_6__["ApiUrlConstants"].GET_ACTIVE_BY_BUMI;
        this.request.params = "";
        this.request.body = restObj;
        this.api.requestObject(this.request).then(function (data) {
            _this.activeMemberBumiList = data;
        }, function (err) {
            // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
            // this.errLogin = err.error;
        });
    };
    ReportsManagementComponent.prototype.getActiveAgeReport = function (data) {
        var _this = this;
        var restObj = this.modifyRestObj(data);
        this.request.url = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].SERVER_URI_OBJECT['core'];
        this.request.type = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].API_POST;
        this.request.reqModule = _core_constants_apiUrlConstants__WEBPACK_IMPORTED_MODULE_6__["ApiUrlConstants"].GET_ACTIVE_BY_AGE;
        this.request.params = "";
        this.request.body = restObj;
        this.api.requestObject(this.request).then(function (data) {
            _this.activeMemberAgeList = data;
        }, function (err) {
            // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
            // this.errLogin = err.error;
        });
    };
    ReportsManagementComponent.prototype.getActiveMemberByOccupation = function (data) {
        var _this = this;
        var restObj = this.modifyRestObj(data);
        this.request.url = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].SERVER_URI_OBJECT['core'];
        this.request.type = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].API_POST;
        this.request.reqModule = _core_constants_apiUrlConstants__WEBPACK_IMPORTED_MODULE_6__["ApiUrlConstants"].GET_ACTIVE_BY_OCCUPATION;
        this.request.params = "";
        this.request.body = restObj;
        this.api.requestObject(this.request).then(function (data) {
            _this.activeMemberOccupation = [];
        }, function (err) {
            // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
            // this.errLogin = err.error;
        });
    };
    ReportsManagementComponent.prototype.getLeaveReport = function (data) {
        console.log(data);
    };
    ReportsManagementComponent.prototype.getAllTraining = function () {
        var _this = this;
        this.loader = true;
        this.request.url = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].SERVER_URI_OBJECT['core'];
        this.request.type = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].API_GET;
        this.request.reqModule = _core_constants_apiUrlConstants__WEBPACK_IMPORTED_MODULE_6__["ApiUrlConstants"].TRAINING;
        this.request.params = "";
        this.api.requestObject(this.request).then(function (data) {
            _this.trainingList = data;
        }, function (err) {
            // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
            // this.errLogin = err.error;
        });
    };
    // getIncomeReport() {
    //   this.incomeDiv = true;
    //   let obj = {
    //     fromdate: this.fromdate + ":20",
    //     todate: this.todate + ":20",
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
    ReportsManagementComponent.prototype.checkDate = function (event) {
        console.log(event, "EVENT");
    };
    // getcafeReport() {
    //   // this.getLocation()
    //   let obj = {
    //     fromdate: this.fromdate + ":20",
    //     todate: this.todate + ":20",
    //     location: this.location
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
    //     fromdate: this.fromdate + ":20",
    //     todate: this.todate + ":20",
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
    //   let obj = {
    //     fromdate: this.fromdate + ":20",
    //     todate: this.todate + ":20",
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
    //     this.reportList = data;
    //     console.log(this.reportList, "Locationb")
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
    ReportsManagementComponent.prototype.downloadActiveMemberReport = function (dataList, title) {
        var _this = this;
        if (dataList.length) {
            var reportData = JSON.parse(JSON.stringify(dataList));
            var toPrintArray = reportData.map(function (item) {
                return Object.keys(item).reduce(function (accumulator, key) {
                    // accumulator is the new object we are creating
                    accumulator[_this.modifyKeys(key)] = item[key];
                    return accumulator;
                }, {});
            });
            var data, filename, link;
            var csv = this.convertArrayOfObjectsToCSV({
                data: toPrintArray
            });
            if (csv == null)
                return;
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
    };
    ReportsManagementComponent.prototype.modifyKeys = function (value) {
        var result = value.replace(/([A-Z])/g, " $1");
        return result.charAt(0).toUpperCase() + result.slice(1);
    };
    ReportsManagementComponent.prototype.convertArrayOfObjectsToCSV = function (args) {
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
                if (ctr > 0)
                    result += columnDelimiter;
                result += item[key];
                ctr++;
            });
            result += lineDelimiter;
        });
        return result;
    };
    ReportsManagementComponent.prototype.getEvent = function (event) {
        console.log(event);
        var from = this.reportForm.get('fromdate');
        var to = this.reportForm.get('todate');
        var period = this.reportForm.get('period');
        if (event == '4') {
            this.reportsArray.forEach(function (element) {
                element['show'] = false;
            });
            from.clearValidators();
            from.updateValueAndValidity();
            to.clearValidators();
            to.updateValueAndValidity();
            period.clearValidators();
            period.updateValueAndValidity();
        }
        else if (event == '5') {
            period.clearValidators();
            period.updateValueAndValidity();
        }
        else {
            this.reportsArray.forEach(function (element) {
                element['show'] = false;
            });
            from.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            from.updateValueAndValidity();
            to.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            to.updateValueAndValidity();
            period.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            period.updateValueAndValidity();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fromInput', { read: _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInput"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInput"])
    ], ReportsManagementComponent.prototype, "fromInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('toInput', { read: _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInput"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInput"])
    ], ReportsManagementComponent.prototype, "toInput", void 0);
    ReportsManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reports-management',
            template: __webpack_require__(/*! ./reports-management.component.html */ "./src/app/routes/reports-management/reports-management/reports-management.component.html"),
            styles: [__webpack_require__(/*! ./reports-management.component.scss */ "./src/app/routes/reports-management/reports-management/reports-management.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_remote_service_reqResObj_Request__WEBPACK_IMPORTED_MODULE_7__["Request"],
            _core_services_remote_service_remote_api_service__WEBPACK_IMPORTED_MODULE_4__["RemoteApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ReportsManagementComponent);
    return ReportsManagementComponent;
}());



/***/ })

}]);
//# sourceMappingURL=reports-management-reports-management-module.js.map