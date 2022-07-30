(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["income-management-income-management-module"],{

/***/ "./src/app/routes/income-management/income-management.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/routes/income-management/income-management.module.ts ***!
  \**********************************************************************/
/*! exports provided: IncomeManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeManagementModule", function() { return IncomeManagementModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _income_management_income_management_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./income-management/income-management.component */ "./src/app/routes/income-management/income-management/income-management.component.ts");





var routes = [
    { path: '', component: _income_management_income_management_component__WEBPACK_IMPORTED_MODULE_4__["IncomeManagementComponent"] },
];
var IncomeManagementModule = /** @class */ (function () {
    function IncomeManagementModule() {
    }
    IncomeManagementModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_income_management_income_management_component__WEBPACK_IMPORTED_MODULE_4__["IncomeManagementComponent"]],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ]
        })
    ], IncomeManagementModule);
    return IncomeManagementModule;
}());



/***/ }),

/***/ "./src/app/routes/income-management/income-management/income-management.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/routes/income-management/income-management/income-management.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-4 form-group\">\r\n  <div class=\"col-md-12 col-sm-12\">\r\n    <h4 class=\" header-titel\">Income Management</h4>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row mt-4 form-group\">\r\n  <div class=\"col-md-12 col-sm-12\">\r\n    <div class=\"card shadow border-0 \">\r\n      <div class=\"card-header text-center\">\r\n        <!-- <button type=\"button\" class=\"btn float-right btn-primary btn-download\"><img\r\n          class=\"icon\"  src=\"./assets/icon/download-icon.svg\" /></button> -->\r\n        <!-- <div class=\"btn-group incom-tab\" role=\"group\" aria-label=\"Basic example\">\r\n          <button type=\"button\" name=\"btn1\" [class.active]=\"btn=='btn1'\" (click)=\"selected($event)\" class=\"btn \">Revenue</button>\r\n          <button type=\"button\" name=\"btn2\" [class.active]=\"btn=='btn2'\" (click)=\"selected($event)\" class=\"btn\">Income</button>\r\n          <button type=\"button\" name=\"btn3\" [class.active]=\"btn=='btn3'\" (click)=\"selected($event)\" class=\"btn\">Expenses</button>\r\n        </div> -->\r\n\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <div class=\"row filters-list mb-4\">\r\n          <div class=\"col-md-4 col-xs-12\">\r\n            <!-- <div class=\"input-group mb-3\">\r\n              <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\" id=\"basic-addon1\">From</span>\r\n              </div>\r\n              <input type=\"text\" class=\"form-control\" (click)=\"from.open()\" (dateInput)=\"addStartDate('input', $event)\" (dateChange)=\"addStartDate('change', $event)\" matInput [matDatepicker]=\"from\">\r\n              <mat-datepicker  #from></mat-datepicker>\r\n              <div class=\"input-group-append\">\r\n                <span class=\"input-group-text\" id=\"basic-addon2\"><img src=\"./assets/icon/calendar.svg\" /></span>\r\n              </div>\r\n            </div> -->\r\n          </div>\r\n          <div class=\"col-md-4 col-xs-12\">\r\n            <!-- <div class=\"input-group mb-3\">\r\n              <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\" id=\"basic-addon1\">To</span>\r\n              </div>\r\n              <input type=\"text\" class=\"form-control\" (click)=\"to.open()\" (dateInput)=\"addEndDate('input', $event)\" (dateChange)=\"addEndDate('change', $event)\" matInput [matDatepicker]=\"to\">\r\n              <mat-datepicker #to></mat-datepicker>\r\n              <div class=\"input-group-append\">\r\n                <span class=\"input-group-text\" id=\"basic-addon2\"><img src=\"./assets/icon/calendar.svg\" /></span>\r\n              </div>\r\n            </div> -->\r\n          </div>\r\n          <div class=\"col-md-4 col-xs-12\">\r\n            <div class=\"form-group\">\r\n            <select class=\"form-control\" [(ngModel)]=\"selected\" (change)=\"onChangeMonth($event)\">\r\n              <option value='Two Month'>Last 2 months</option>\r\n              <option value='Three Month'>Last 3 months</option>\r\n              <option value='Four Month'>Last 4 months</option>\r\n              <!-- <option selected value='Five Month'>Last 5 months</option> -->\r\n            </select>\r\n            </div>\r\n            <!-- <mat-select [(value)]=\"selected\" (change)=\"onChangeMonth($event)\" class=\"form-control\">\r\n              <mat-option value='Two Month'>\r\n                Last 2 months\r\n              </mat-option>\r\n              <mat-option value='Three Month'>\r\n                Last 3 months\r\n              </mat-option>\r\n              <mat-option value='Four Month'>\r\n                Last 4 months\r\n              </mat-option>\r\n              <mat-option value='Five Month'>\r\n                Last 5 months\r\n              </mat-option>\r\n            </mat-select> -->\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"row mb-3\">\r\n          <div class=\"col-md-12 col-xs-12\">\r\n            <h4 class=\"text-primary\">REVENUE</h4>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"row mb-4\">\r\n          <div class=\"col-md-2 col-xs-12\">\r\n            <div class=\"tiles-widget\">\r\n              <small>Current month</small>\r\n              <h4 class=\"text-primary\">RM{{income}}</h4>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-2 col-xs-12\">\r\n            <div class=\"tiles-widget\">\r\n              <small>Previous month</small>\r\n              <h4 class=\"text-primary\">RM{{previouse}}</h4>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-2 col-xs-12\">\r\n            <div class=\"tiles-widget\">\r\n              <small>Income</small>\r\n              <h4 class=\"text-primary\">RM{{totleIncome}}</h4>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <canvas baseChart [chartType]=\"'line'\" [options]=\"lineOptions\" [datasets]=\"lineData.datasets\" [colors]=\"lineColors\" [labels]=\"lineData.labels\" [legend]=\"false\" height=\"80\"></canvas>\r\n          </div>\r\n\r\n        </div>\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/routes/income-management/income-management/income-management.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/routes/income-management/income-management/income-management.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Poppins&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Merriweather:300,400,500i,700,900&display=swap\");\n.incom-tab {\n  border: none; }\n.incom-tab .btn {\n    color: #000000;\n    border: none;\n    background-color: #F9FAFC;\n    border-radius: 4px;\n    font-size: 16px; }\n.incom-tab .btn + .btn {\n      border-left: 1px solid #EEECF2; }\n.incom-tab .btn.active {\n      color: #3B3984;\n      border: none;\n      background-color: #F9FAFC;\n      font-weight: bold; }\n.btn-download {\n  border-radius: 50%;\n  width: 45px;\n  height: 45px;\n  padding: 0; }\n.btn-download img {\n    vertical-align: baseline; }\n.filters-list .input-group .input-group-prepend .input-group-text {\n  background: transparent;\n  border: none; }\n.filters-list .input-group .form-control {\n  height: 47px;\n  margin: 0;\n  border: 1px solid #d2d2d2;\n  border-right: 0;\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px; }\n.filters-list .input-group .form-control:focus {\n    box-shadow: unset; }\n.filters-list .input-group .input-group-append .input-group-text {\n  background: transparent;\n  border: 1px solid #d2d2d2;\n  border-left: 0; }\n.form-control {\n  height: 47px;\n  border: 1px solid #d2d2d2;\n  border-radius: 4px; }\n.tiles-widget {\n  border-left: 2px solid #3B3984;\n  padding: 10px; }\n.tiles-widget small {\n    color: #948CA1;\n    font-size: 16px; }\n.tiles-widget h4 {\n    margin-top: 5px;\n    font-size: 22px; }\n.icon {\n  border-bottom: 2px solid #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL2luY29tZS1tYW5hZ2VtZW50L2luY29tZS1tYW5hZ2VtZW50L0U6XFxmcm9udGVuZF9hZ2lsZWVkZ2VfaHFfY21zL3NyY1xcYXBwXFxzaGFyZWRcXHN0eWxlc1xcYWJzdHJhY3RzXFxmb250cy5zY3NzIiwic3JjL2FwcC9yb3V0ZXMvaW5jb21lLW1hbmFnZW1lbnQvaW5jb21lLW1hbmFnZW1lbnQvRTpcXGZyb250ZW5kX2FnaWxlZWRnZV9ocV9jbXMvc3JjXFxhcHBcXHJvdXRlc1xcaW5jb21lLW1hbmFnZW1lbnRcXGluY29tZS1tYW5hZ2VtZW50XFxpbmNvbWUtbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcm91dGVzL2luY29tZS1tYW5hZ2VtZW50L2luY29tZS1tYW5hZ2VtZW50L0U6XFxmcm9udGVuZF9hZ2lsZWVkZ2VfaHFfY21zL3NyY1xcYXBwXFxzaGFyZWRcXHN0eWxlc1xcYWJzdHJhY3RzXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSwyRUFBWTtBQUVaLHFHQUFZO0FDRFo7RUFDSSxZQUFZLEVBQUE7QUFEaEI7SUFJUSxjQ0xRO0lETVIsWUFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLGtCQUFxQjtJQUNyQixlQUFzQixFQUFBO0FBUjlCO01BV1ksOEJBQThCLEVBQUE7QUFYMUM7TUFlWSxjQ1hPO01EWVAsWUFBc0I7TUFDdEIseUJBQXlCO01BQ3pCLGlCQUFzQixFQUFBO0FBT2xDO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQW1CO0VBQ25CLFlBQW1CO0VBQ25CLFVBQWdCLEVBQUE7QUFKcEI7SUFPUSx3QkFBd0IsRUFBQTtBQUloQztFQUlnQix1QkFBdUI7RUFDdkIsWUFBZ0IsRUFBQTtBQUxoQztFQVdZLFlBQStCO0VBQy9CLFNBQTRCO0VBQzVCLHlCQUE0QztFQUM1QyxlQUE0QjtFQUU1QiwyQkFBOEI7RUFDOUIsOEJBQThCLEVBQUE7QUFqQjFDO0lBb0JnQixpQkFBaUIsRUFBQTtBQXBCakM7RUEwQmdCLHVCQUF3QjtFQUN4Qix5QkFBOEI7RUFDOUIsY0FBYyxFQUFBO0FBSzlCO0VBRUksWUFBK0I7RUFDL0IseUJBQTRDO0VBRTVDLGtCQUE4QixFQUFBO0FBR2xDO0VBQ0ksOEJDMUVlO0VEMkVmLGFBQWEsRUFBQTtBQUZqQjtJQUlRLGNBQWM7SUFDZCxlQUFlLEVBQUE7QUFMdkI7SUFTUSxlQUFlO0lBQ2YsZUFBZSxFQUFBO0FBR3ZCO0VBQ0ksNkJBQ0osRUFBQSIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9pbmNvbWUtbWFuYWdlbWVudC9pbmNvbWUtbWFuYWdlbWVudC9pbmNvbWUtbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBvcHBpbnMmZGlzcGxheT1zd2FwJyk7XHJcblxyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1lcnJpd2VhdGhlcjozMDAsNDAwLDUwMGksNzAwLDkwMCZkaXNwbGF5PXN3YXAnKTsiLCJAaW1wb3J0Jy4uLy4uLy4uL3NoYXJlZC9zdHlsZXMvYWJzdHJhY3RzL2Fic3RyYWN0cy1kaXIuc2Nzcyc7XHJcblxyXG4uaW5jb20tdGFiIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuXHJcbiAgICAuYnRuIHtcclxuICAgICAgICBjb2xvciAgICAgICAgICAgOiAkYmxhY2s7XHJcbiAgICAgICAgYm9yZGVyICAgICAgICAgIDogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlGQUZDO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXMgICA6IDRweDtcclxuICAgICAgICBmb250LXNpemUgICAgICAgOiAxNnB4O1xyXG5cclxuICAgICAgICArLmJ0biB7XHJcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI0VFRUNGMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgY29sb3IgICAgICAgICAgIDogJHByaW1hcnktYmc7XHJcbiAgICAgICAgICAgIGJvcmRlciAgICAgICAgICA6IG5vbmU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGOUZBRkM7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0ICAgICA6IGJvbGQ7XHJcbiAgICAgICAgICAgIDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4uYnRuLWRvd25sb2FkIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoICAgICAgICA6IDQ1cHg7XHJcbiAgICBoZWlnaHQgICAgICAgOiA0NXB4O1xyXG4gICAgcGFkZGluZyAgICAgIDogMDtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxuICAgIH1cclxufVxyXG5cclxuLmZpbHRlcnMtbGlzdCB7XHJcbiAgICAuaW5wdXQtZ3JvdXAge1xyXG4gICAgICAgIC5pbnB1dC1ncm91cC1wcmVwZW5kIHtcclxuICAgICAgICAgICAgLmlucHV0LWdyb3VwLXRleHQge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXIgICAgOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZm9ybS1jb250cm9sIHtcclxuXHJcbiAgICAgICAgICAgIGhlaWdodCAgICAgICAgICAgICAgICAgICA6IDQ3cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbiAgICAgICAgICAgICAgICAgICA6IDA7XHJcbiAgICAgICAgICAgIGJvcmRlciAgICAgICAgICAgICAgICAgICA6IDFweCBzb2xpZCAjZDJkMmQyO1xyXG4gICAgICAgICAgICBib3JkZXItcmlnaHQgICAgICAgICAgICAgOiAwO1xyXG4gICAgICAgICAgICAvLyBib3JkZXItcmFkaXVzICAgICAgICAgICAgOiA0cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXMgICA6IDRweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xyXG5cclxuICAgICAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiB1bnNldDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmlucHV0LWdyb3VwLWFwcGVuZCB7XHJcbiAgICAgICAgICAgIC5pbnB1dC1ncm91cC10ZXh0IHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQgOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgIGJvcmRlciAgICAgOiAxcHggc29saWQgI2QyZDJkMjtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5mb3JtLWNvbnRyb2x7XHJcblxyXG4gICAgaGVpZ2h0ICAgICAgICAgICAgICAgICAgIDogNDdweDtcclxuICAgIGJvcmRlciAgICAgICAgICAgICAgICAgICA6IDFweCBzb2xpZCAjZDJkMmQyO1xyXG4gICAgLy8gYm9yZGVyLXJpZ2h0ICAgICAgICAgICAgIDogMDtcclxuICAgIGJvcmRlci1yYWRpdXMgICAgICAgICAgICA6IDRweDtcclxufVxyXG5cclxuLnRpbGVzLXdpZGdldHtcclxuICAgIGJvcmRlci1sZWZ0OjJweCBzb2xpZCAkcHJpbWFyeS1iZztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBzbWFsbHtcclxuICAgICAgICBjb2xvcjogIzk0OENBMTtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcblxyXG4gICAgfVxyXG4gICAgaDR7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIH1cclxufVxyXG4uaWNvbntcclxuICAgIGJvcmRlci1ib3R0b206MnB4IHNvbGlkICNmZmZcclxufVxyXG4iLCIkd2hpdGUgOiAjRkZGRkZGO1xyXG4kYmxhY2sgOiAjMDAwMDAwO1xyXG5cclxuXHJcbiRwcmltYXJ5LWJnLWxpZ2h0IDogI2YxZjlmODtcclxuXHJcbiRwcmltYXJ5LWJnOiMzQjM5ODQ7XHJcbi8vICRzZWNvbmRhcnktYmc6IzJmYzJiMjsiXX0= */"

/***/ }),

/***/ "./src/app/routes/income-management/income-management/income-management.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/routes/income-management/income-management/income-management.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: IncomeManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeManagementComponent", function() { return IncomeManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_remote_service_remote_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/remote-service/remote-api.service */ "./src/app/core/services/remote-service/remote-api.service.ts");
/* harmony import */ var _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/constants/AppConstants */ "./src/app/core/constants/AppConstants.ts");
/* harmony import */ var _core_constants_apiUrlConstants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/constants/apiUrlConstants */ "./src/app/core/constants/apiUrlConstants.ts");
/* harmony import */ var _core_services_remote_service_reqResObj_Request__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/services/remote-service/reqResObj/Request */ "./src/app/core/services/remote-service/reqResObj/Request.ts");


// import { NgbDropdown, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';





var IncomeManagementComponent = /** @class */ (function () {
    function IncomeManagementComponent(router, 
    // private toastr: ToastrService,
    request, api) {
        this.router = router;
        this.request = request;
        this.api = api;
        this.selected = "Four Month";
        this.chartMonths = [];
        // public lineChart: Chart;
        this.chartData = [];
        this.startDate = "";
        this.endDate = "";
        this.events = [];
    }
    IncomeManagementComponent.prototype.ngOnInit = function () {
        this.initChart();
        console.log(this.selected);
        // this.onChangeMonth(this.selected)
        // this.createChart();
        this.btn = "btn1";
        this.getIncomeMonth();
        this.getExpenseMonth();
        this.getPreviousMonth();
        this.getTotalMonth();
    };
    IncomeManagementComponent.prototype.createChart = function (chartMonths, chartData) {
        // Line chart
        // -----------------------------------
        console.log(this.chartMonths, this.chartData, "cchart");
        var CM = chartMonths.reverse();
        var CD = chartData.reverse();
        this.lineData = {
            labels: CM,
            datasets: [
                {
                    label: 'My secind dataset',
                    data: chartData
                }
            ]
        };
        this.lineColors = [
            {
                backgroundColor: 'transparent',
                borderColor: '#3B3984',
                // pointBackgroundColor: 'rgb(50, 141, 95)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(35,183,229,1)'
            }
        ];
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
    };
    IncomeManagementComponent.prototype.initChart = function () {
        var _this = this;
        var obj = {
            value: this.selected
        };
        console.log(obj);
        this.request.url = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].SERVER_URI_OBJECT['core'];
        this.request.type = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].API_POST;
        this.request.reqModule = _core_constants_apiUrlConstants__WEBPACK_IMPORTED_MODULE_5__["ApiUrlConstants"].INCOME_MONTH;
        // this.request.params="System"
        this.request.params = "";
        this.request.body = obj;
        console.log(this.request, "reqqqq");
        this.api.requestObject(this.request).then(function (data) {
            console.log(Object.keys(data), "dataLogin");
            _this.chartData = Object.values(data);
            _this.chartMonths = Object.keys(data);
            _this.createChart(_this.chartMonths, _this.chartData);
            // this.router.navigate(['/employeeManagement']);
        }, function (err) {
            // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
            // this.errLogin = err.error;
        });
    };
    IncomeManagementComponent.prototype.onChangeMonth = function (event) {
        var _this = this;
        this.selected = event.target.value;
        console.log(this.selected, "SEKEN");
        var obj = {
            value: this.selected
        };
        console.log(event.target.value, "CHANGE SELECT");
        this.selected = event.target.value;
        this.request.url = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].SERVER_URI_OBJECT['core'];
        this.request.type = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].API_POST;
        this.request.reqModule = _core_constants_apiUrlConstants__WEBPACK_IMPORTED_MODULE_5__["ApiUrlConstants"].INCOME_MONTH;
        // this.request.params="System"
        this.request.params = "";
        this.request.body = obj;
        console.log(this.request, "reqqqq");
        this.api.requestObject(this.request).then(function (data) {
            console.log(Object.keys(data), "dataLogin");
            var Monthdata = data;
            _this.chartMonths = Object.keys(Monthdata);
            _this.chartData = Object.values(Monthdata);
            console.log(_this.chartMonths.reverse(), "OnChange");
            _this.createChart(_this.chartMonths, _this.chartData);
            // this.router.navigate(['/employeeManagement']);
        }, function (err) {
            // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
            // this.errLogin = err.error;
        });
    };
    IncomeManagementComponent.prototype.getIncomeMonth = function () {
        var _this = this;
        var obj = {
            value: "One Month"
        };
        this.request.url = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].SERVER_URI_OBJECT['core'];
        this.request.type = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].API_POST;
        this.request.reqModule = _core_constants_apiUrlConstants__WEBPACK_IMPORTED_MODULE_5__["ApiUrlConstants"].REVENUE_MONTH;
        // this.request.params="System"
        this.request.params = "";
        this.request.body = obj;
        console.log(this.request, "reqqqq");
        this.api.requestObject(this.request).then(function (data) {
            console.log(data, "dataLogin");
            _this.income = Object.values(data);
            console.log(_this.income, "CHARTDATA");
            // this.router.navigate(['/employeeManagement']);
        }, function (err) {
            // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
            // this.errLogin = err.error;
        });
    };
    IncomeManagementComponent.prototype.getExpenseMonth = function () {
        var _this = this;
        var obj = {
            value: "One Month"
        };
        this.request.url = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].SERVER_URI_OBJECT['core'];
        this.request.type = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].API_POST;
        this.request.reqModule = _core_constants_apiUrlConstants__WEBPACK_IMPORTED_MODULE_5__["ApiUrlConstants"].EXPENSE_MONTH;
        // this.request.params="System"
        this.request.params = "";
        this.request.body = obj;
        console.log(this.request, "reqqqq");
        this.api.requestObject(this.request).then(function (data) {
            console.log(data, "dataLogin");
            _this.expense = Object.values(data);
            // console.log(this.income,"CHARTDATA")
            // this.router.navigate(['/employeeManagement']);
        }, function (err) {
            // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
            // this.errLogin = err.error;
        });
    };
    IncomeManagementComponent.prototype.getPreviousMonth = function () {
        var _this = this;
        var obj = {
            value: "Privious Month"
        };
        this.request.url = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].SERVER_URI_OBJECT['core'];
        this.request.type = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].API_POST;
        this.request.reqModule = _core_constants_apiUrlConstants__WEBPACK_IMPORTED_MODULE_5__["ApiUrlConstants"].REVENUE_MONTH;
        this.request.params = "";
        this.request.body = obj;
        console.log(this.request, "reqqqq");
        this.api.requestObject(this.request).then(function (data) {
            console.log(data, "pervious");
            _this.previouse = Object.values(data);
        }, function (err) {
        });
    };
    IncomeManagementComponent.prototype.getTotalMonth = function () {
        var _this = this;
        var obj = {
            value: "Total Month"
        };
        this.request.url = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].SERVER_URI_OBJECT['core'];
        this.request.type = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].API_POST;
        this.request.reqModule = _core_constants_apiUrlConstants__WEBPACK_IMPORTED_MODULE_5__["ApiUrlConstants"].REVENUE_MONTH;
        this.request.params = "";
        this.request.body = obj;
        console.log(this.request, "reqqqq");
        this.api.requestObject(this.request).then(function (data) {
            console.log(data, "dataLogin");
            _this.totleIncome = Object.values(data);
        }, function (err) {
        });
    };
    IncomeManagementComponent.prototype.rFactor = function () {
        console.log(Math.round(Math.random() * 100));
        return Math.round(Math.random() * 100);
    };
    ;
    IncomeManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-income-management',
            template: __webpack_require__(/*! ./income-management.component.html */ "./src/app/routes/income-management/income-management/income-management.component.html"),
            styles: [__webpack_require__(/*! ./income-management.component.scss */ "./src/app/routes/income-management/income-management/income-management.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_services_remote_service_reqResObj_Request__WEBPACK_IMPORTED_MODULE_6__["Request"],
            _core_services_remote_service_remote_api_service__WEBPACK_IMPORTED_MODULE_3__["RemoteApiService"]])
    ], IncomeManagementComponent);
    return IncomeManagementComponent;
}());



/***/ })

}]);
//# sourceMappingURL=income-management-income-management-module.js.map