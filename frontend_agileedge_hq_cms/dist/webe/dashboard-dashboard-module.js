(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./src/app/routes/dashboard/dashboard.module.ts":
/*!******************************************************!*\
  !*** ./src/app/routes/dashboard/dashboard.module.ts ***!
  \******************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/routes/dashboard/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");





var routes = [
    { path: '', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] },
];
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/routes/dashboard/dashboard/dashboard.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/routes/dashboard/dashboard/dashboard.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-4 form-group\">\r\n  <div class=\"col-md-12 col-sm-12\">\r\n    <h4 class=\"px-2 header-titel\">Welcome back {{employeeuser?.fullName}}!!</h4>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row mt-4 form-group\">\r\n  <div class=\"col-md-12 col-sm-12\">\r\n    <div class=\"card shadow border-0 \">\r\n      <div class=\"card-body\">\r\n        <div class=\"row mb-3 pt-3 px-3\">\r\n          <div class=\"col-md-10 col-xs-12\">\r\n            <h4 class=\"text-primary title\">REVENUE</h4>\r\n          </div>\r\n          <div class=\"col-md-2 text-center col-xs-12\">\r\n            <!-- <button class=\"border-0 btn-shadow py-2 px-4 transparent text-black\">SEE MORE</button> -->\r\n          </div>\r\n        </div>\r\n        <div class=\"row mb-4 px-3\">\r\n          <div class=\"col-md-3 col-xs-12\">\r\n            <div class=\"tiles-widget active\">\r\n              <small>Current month</small>\r\n              <h4 class=\"text-primary\">RM {{income}}</h4>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3 col-xs-12\">\r\n            <div class=\"tiles-widget\">\r\n              <small>Previous month</small>\r\n              <h4 class=\"text-primary\">RM {{previouse}}</h4>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"row px-3 py-2\">\r\n          <div class=\"col-md-12\">\r\n            <!-- <canvas baseChart [chartType]=\"'line'\" [options]=\"lineOptions\" [datasets]=\"lineData.datasets\" [colors]=\"lineColors\" [labels]=\"lineData.labels\" [legend]=\"false\" height=\"80\"></canvas> -->\r\n\r\n            <!-- <canvas baseChart [chartType]=\"'line'\" [options]=\"lineOptions\" [datasets]=\"lineData.datasets\" [colors]=\"lineColors\" [labels]=\"lineData.labels\" [legend]=\"false\" height=\"80\"></canvas> -->\r\n          </div>\r\n\r\n        </div>\r\n\r\n\r\n\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"row my-3\">\r\n      <div class=\"col-md-5\">\r\n          <div class=\"border-0 rounded card text-center py-4\">\r\n            <img class=\"p-0\" src=\"./assets/icon/users-color.svg\"/>\r\n            <h4 class=\"card-header pb-0\">Employees</h4>\r\n            <p class=\"card-count mb-0\">{{employeeData.length}}</p>\r\n          </div>\r\n      </div>\r\n      <div class=\"col-md-5\">\r\n        <div class=\"border-0 rounded card text-center py-4\">\r\n          <img class=\"p-0\" src=\"./assets/icon/building.svg\"/>\r\n          <h4 class=\"card-header pb-0\">Branches</h4>\r\n          <p class=\"card-count mb-0\">{{cafeData.length}}</p>\r\n        </div>\r\n      </div>\r\n      <!-- <div class=\"col-md-6\">\r\n        <div class=\"pb-1 border-0 rounded card p-3\">\r\n          <div class=\"d-flex py-1 align-items-center\">\r\n            <div class=\"text-center rounded-circle bg-primary p-4\"><img class=\"p-0\" src=\"./assets/icon/user-check-color.svg\"/></div>\r\n            <div class=\"p-3 px-4\">\r\n              <p class=\"card-count active mb-0\">100</p>\r\n              <p class=\"sub-text\">Total Active members</p>\r\n            </div>\r\n        </div>\r\n        </div> -->\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/routes/dashboard/dashboard/dashboard.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/routes/dashboard/dashboard/dashboard.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Poppins&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Merriweather:300,400,500i,700,900&display=swap\");\n.incom-tab {\n  border: none; }\n.incom-tab .btn {\n    color: #000000;\n    border: none;\n    background-color: #F9FAFC;\n    border-radius: 4px;\n    font-size: 16px; }\n.incom-tab .btn + .btn {\n      border-left: 1px solid #EEECF2; }\n.incom-tab .btn.active {\n      color: #3B3984;\n      border: none;\n      background-color: #F9FAFC;\n      font-weight: bold; }\n.title {\n  font-weight: bold;\n  opacity: 0.8; }\n.btn-download {\n  border-radius: 50%;\n  width: 45px;\n  height: 45px;\n  padding: 0; }\n.btn-download img {\n    vertical-align: baseline; }\n.filters-list .input-group .input-group-prepend .input-group-text {\n  background: transparent;\n  border: none; }\n.filters-list .input-group .form-control {\n  background: transparent;\n  height: 47px;\n  border: 1px solid #d2d2d2;\n  border-right: 0;\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px; }\n.filters-list .input-group .form-control:focus {\n    box-shadow: unset; }\n.filters-list .input-group .input-group-append .input-group-text {\n  background: transparent;\n  border: 1px solid #d2d2d2;\n  border-left: 0; }\n.form-control {\n  background: transparent;\n  height: 47px;\n  border: 1px solid #d2d2d2;\n  border-radius: 4px; }\n.card {\n  border-radius: 20px !important; }\n.card .card-header {\n    text-transform: uppercase;\n    color: #3B3984;\n    opacity: 0.8;\n    font-size: 18px; }\n.card .card-count {\n    font-size: 36px;\n    color: #3B3984;\n    opacity: 0.8; }\n.card .card-count + p {\n      font-size: 18px;\n      color: #3B3984;\n      font-weight: 500; }\n.card .card-count.active {\n      font-weight: bold;\n      opacity: 1; }\n.icon {\n  width: 38px;\n  height: 38px; }\n.btn-shadow {\n  background: #FFFFFF;\n  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.06);\n  border-radius: 10px; }\n.tiles-widget {\n  border-left: 2px solid #E7E3EF;\n  padding: 10px;\n  background-color: #F9FAFC;\n  opacity: 0.8; }\n.tiles-widget small {\n    color: #948CA1;\n    font-size: 16px; }\n.tiles-widget h4 {\n    margin-top: 5px;\n    font-size: 22px;\n    font-weight: bold; }\n.tiles-widget.active {\n    color: #3B3984;\n    border-left: 2px solid #3B3984;\n    background-color: #F9FAFC;\n    opacity: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL2Rhc2hib2FyZC9kYXNoYm9hcmQvRTpcXGZyb250ZW5kX2FnaWxlZWRnZV9ocV9jbXMvc3JjXFxhcHBcXHNoYXJlZFxcc3R5bGVzXFxhYnN0cmFjdHNcXGZvbnRzLnNjc3MiLCJzcmMvYXBwL3JvdXRlcy9kYXNoYm9hcmQvZGFzaGJvYXJkL0U6XFxmcm9udGVuZF9hZ2lsZWVkZ2VfaHFfY21zL3NyY1xcYXBwXFxyb3V0ZXNcXGRhc2hib2FyZFxcZGFzaGJvYXJkXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3JvdXRlcy9kYXNoYm9hcmQvZGFzaGJvYXJkL0U6XFxmcm9udGVuZF9hZ2lsZWVkZ2VfaHFfY21zL3NyY1xcYXBwXFxzaGFyZWRcXHN0eWxlc1xcYWJzdHJhY3RzXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSwyRUFBWTtBQUVaLHFHQUFZO0FDRFo7RUFDSSxZQUFZLEVBQUE7QUFEaEI7SUFJUSxjQ0xRO0lETVIsWUFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLGtCQUFxQjtJQUNyQixlQUFzQixFQUFBO0FBUjlCO01BV1ksOEJBQThCLEVBQUE7QUFYMUM7TUFlWSxjQ1hPO01EWVAsWUFBc0I7TUFDdEIseUJBQXlCO01BQ3pCLGlCQUFzQixFQUFBO0FBS2xDO0VBQ0ksaUJBQWlCO0VBQ2pCLFlBQVksRUFBQTtBQUVoQjtFQUNJLGtCQUFrQjtFQUNsQixXQUFtQjtFQUNuQixZQUFtQjtFQUNuQixVQUFnQixFQUFBO0FBSnBCO0lBT1Esd0JBQXdCLEVBQUE7QUFJaEM7RUFJZ0IsdUJBQXVCO0VBQ3ZCLFlBQWdCLEVBQUE7QUFMaEM7RUFVWSx1QkFBc0M7RUFDdEMsWUFBK0I7RUFDL0IseUJBQTRDO0VBQzVDLGVBQTRCO0VBRTVCLDJCQUE4QjtFQUM5Qiw4QkFBOEIsRUFBQTtBQWhCMUM7SUFtQmdCLGlCQUFpQixFQUFBO0FBbkJqQztFQXlCZ0IsdUJBQXdCO0VBQ3hCLHlCQUE4QjtFQUM5QixjQUFjLEVBQUE7QUFLOUI7RUFDSSx1QkFBc0M7RUFDdEMsWUFBK0I7RUFDL0IseUJBQTRDO0VBRTVDLGtCQUE4QixFQUFBO0FBRWxDO0VBQ0ksOEJBQThCLEVBQUE7QUFEbEM7SUFHUSx5QkFBd0I7SUFDeEIsY0M3RVc7SUQ4RVgsWUFBWTtJQUNaLGVBQWUsRUFBQTtBQU52QjtJQVNRLGVBQWU7SUFDZixjQ25GVztJRG9GWCxZQUFZLEVBQUE7QUFYcEI7TUFhWSxlQUFjO01BQ2QsY0N2Rk87TUR3RlAsZ0JBQWdCLEVBQUE7QUFmNUI7TUFrQlksaUJBQWlCO01BQ2pCLFVBQVUsRUFBQTtBQUt0QjtFQUNJLFdBQVU7RUFDVixZQUNKLEVBQUE7QUFFQTtFQUNJLG1CQUFtQjtFQUNuQiw0Q0FBNEM7RUFDNUMsbUJBQW1CLEVBQUE7QUFFdkI7RUFDSSw4QkFBNkI7RUFDN0IsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixZQUFZLEVBQUE7QUFKaEI7SUFNUSxjQUFjO0lBQ2QsZUFBZSxFQUFBO0FBUHZCO0lBV1EsZUFBZTtJQUNmLGVBQWU7SUFDZixpQkFBaUIsRUFBQTtBQWJ6QjtJQWlCUSxjQzVIVztJRDZIWCw4QkM3SFc7SUQ4SFgseUJBQXlCO0lBQ3pCLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9kYXNoYm9hcmQvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBvcHBpbnMmZGlzcGxheT1zd2FwJyk7XHJcblxyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1lcnJpd2VhdGhlcjozMDAsNDAwLDUwMGksNzAwLDkwMCZkaXNwbGF5PXN3YXAnKTsiLCJAaW1wb3J0Jy4uLy4uLy4uL3NoYXJlZC9zdHlsZXMvYWJzdHJhY3RzL2Fic3RyYWN0cy1kaXIuc2Nzcyc7XHJcblxyXG4uaW5jb20tdGFiIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuXHJcbiAgICAuYnRuIHtcclxuICAgICAgICBjb2xvciAgICAgICAgICAgOiAkYmxhY2s7XHJcbiAgICAgICAgYm9yZGVyICAgICAgICAgIDogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlGQUZDO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXMgICA6IDRweDtcclxuICAgICAgICBmb250LXNpemUgICAgICAgOiAxNnB4O1xyXG5cclxuICAgICAgICArLmJ0biB7XHJcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI0VFRUNGMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgY29sb3IgICAgICAgICAgIDogJHByaW1hcnktYmc7XHJcbiAgICAgICAgICAgIGJvcmRlciAgICAgICAgICA6IG5vbmU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGOUZBRkM7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0ICAgICA6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4udGl0bGV7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG9wYWNpdHk6IDAuODtcclxufVxyXG4uYnRuLWRvd25sb2FkIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoICAgICAgICA6IDQ1cHg7XHJcbiAgICBoZWlnaHQgICAgICAgOiA0NXB4O1xyXG4gICAgcGFkZGluZyAgICAgIDogMDtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxuICAgIH1cclxufVxyXG5cclxuLmZpbHRlcnMtbGlzdCB7XHJcbiAgICAuaW5wdXQtZ3JvdXAge1xyXG4gICAgICAgIC5pbnB1dC1ncm91cC1wcmVwZW5kIHtcclxuICAgICAgICAgICAgLmlucHV0LWdyb3VwLXRleHQge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXIgICAgOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZm9ybS1jb250cm9sIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZCAgICAgICAgICAgICAgIDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGhlaWdodCAgICAgICAgICAgICAgICAgICA6IDQ3cHg7XHJcbiAgICAgICAgICAgIGJvcmRlciAgICAgICAgICAgICAgICAgICA6IDFweCBzb2xpZCAjZDJkMmQyO1xyXG4gICAgICAgICAgICBib3JkZXItcmlnaHQgICAgICAgICAgICAgOiAwO1xyXG4gICAgICAgICAgICAvLyBib3JkZXItcmFkaXVzICAgICAgICAgICAgOiA0cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXMgICA6IDRweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xyXG5cclxuICAgICAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiB1bnNldDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmlucHV0LWdyb3VwLWFwcGVuZCB7XHJcbiAgICAgICAgICAgIC5pbnB1dC1ncm91cC10ZXh0IHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQgOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgIGJvcmRlciAgICAgOiAxcHggc29saWQgI2QyZDJkMjtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5mb3JtLWNvbnRyb2x7XHJcbiAgICBiYWNrZ3JvdW5kICAgICAgICAgICAgICAgOiB0cmFuc3BhcmVudDtcclxuICAgIGhlaWdodCAgICAgICAgICAgICAgICAgICA6IDQ3cHg7XHJcbiAgICBib3JkZXIgICAgICAgICAgICAgICAgICAgOiAxcHggc29saWQgI2QyZDJkMjtcclxuICAgIC8vIGJvcmRlci1yaWdodCAgICAgICAgICAgICA6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzICAgICAgICAgICAgOiA0cHg7XHJcbn1cclxuLmNhcmR7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAuY2FyZC1oZWFkZXJ7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeS1iZztcclxuICAgICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG4gICAgLmNhcmQtY291bnR7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeS1iZztcclxuICAgICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICAgICAgK3B7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxOHB4O1xyXG4gICAgICAgICAgICBjb2xvcjokcHJpbWFyeS1iZztcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5hY3RpdmV7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG59XHJcbi5pY29ue1xyXG4gICAgd2lkdGg6MzhweDtcclxuICAgIGhlaWdodDozOHB4XHJcbn1cclxuXHJcbi5idG4tc2hhZG93e1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4udGlsZXMtd2lkZ2V0e1xyXG4gICAgYm9yZGVyLWxlZnQ6MnB4IHNvbGlkICNFN0UzRUY7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y5RkFGQztcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICAgIHNtYWxse1xyXG4gICAgICAgIGNvbG9yOiAjOTQ4Q0ExO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgIFxyXG4gICAgfVxyXG4gICAgaDR7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgICYuYWN0aXZlIHtcclxuICAgICAgICBjb2xvciAgICAgICAgICAgOiAkcHJpbWFyeS1iZztcclxuICAgICAgICBib3JkZXItbGVmdCAgICAgICAgICA6MnB4IHNvbGlkICRwcmltYXJ5LWJnO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGOUZBRkM7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxufSIsIiR3aGl0ZSA6ICNGRkZGRkY7XHJcbiRibGFjayA6ICMwMDAwMDA7XHJcblxyXG5cclxuJHByaW1hcnktYmctbGlnaHQgOiAjZjFmOWY4O1xyXG5cclxuJHByaW1hcnktYmc6IzNCMzk4NDtcclxuLy8gJHNlY29uZGFyeS1iZzojMmZjMmIyOyJdfQ== */"

/***/ }),

/***/ "./src/app/routes/dashboard/dashboard/dashboard.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/routes/dashboard/dashboard/dashboard.component.ts ***!
  \*******************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_core_services_remote_service_remote_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/remote-service/remote-api.service */ "./src/app/core/services/remote-service/remote-api.service.ts");
/* harmony import */ var _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/alert/alert.service */ "./src/app/routes/services/alert/alert.service.ts");
/* harmony import */ var src_app_core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/constants/AppConstants */ "./src/app/core/constants/AppConstants.ts");
/* harmony import */ var src_app_core_constants_apiUrlConstants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/constants/apiUrlConstants */ "./src/app/core/constants/apiUrlConstants.ts");
/* harmony import */ var _core_services_remote_service_reqResObj_Request__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/services/remote-service/reqResObj/Request */ "./src/app/core/services/remote-service/reqResObj/Request.ts");








var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router, activateRoute, request, api, alert) {
        this.router = router;
        this.activateRoute = activateRoute;
        this.request = request;
        this.api = api;
        this.alert = alert;
        this.chartMonths = [];
        // public lineChart: Chart;
        this.chartData = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getEmployee();
        this.getPreviousMonth();
        this.getIncomeMonth();
        this.getCafe();
        this.initChart();
    };
    DashboardComponent.prototype.createChart = function (chartMonths, chartData) {
        // Line chart
        // -----------------------------------
        console.log(this.chartMonths, this.chartData, "cchart");
        var CM = chartMonths.reverse();
        var CD = chartData.reverse();
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
                }
            ]
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
    DashboardComponent.prototype.initChart = function () {
        var _this = this;
        var obj = {
            value: "Four Month"
        };
        console.log(obj);
        this.request.url = src_app_core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].SERVER_URI_OBJECT['core'];
        this.request.type = src_app_core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].API_POST;
        this.request.reqModule = src_app_core_constants_apiUrlConstants__WEBPACK_IMPORTED_MODULE_6__["ApiUrlConstants"].INCOME_MONTH;
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
    DashboardComponent.prototype.rFactor = function () {
        return Math.round(Math.random() * 100);
    };
    ;
    DashboardComponent.prototype.getEmployee = function () {
        var _this = this;
        // console.log(data,"FormData")
        this.request.url = src_app_core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].SERVER_URI_OBJECT['core'];
        this.request.type = src_app_core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].API_GET;
        this.request.reqModule = src_app_core_constants_apiUrlConstants__WEBPACK_IMPORTED_MODULE_6__["ApiUrlConstants"].GET_ALL_EMPLOYEE;
        this.request.params = "";
        this.api.requestObject(this.request).then(function (result) {
            _this.employeeData = result;
            _this.employeeuser = result.find(function (empDetails) { return empDetails.id == localStorage.getItem('userId'); });
            console.log('find', _this.employeeData);
        }, function (err) {
            // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
            // this.errLogin = err.error;
        });
    };
    DashboardComponent.prototype.getCafe = function () {
        var _this = this;
        this.request.url = src_app_core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].SERVER_URI_OBJECT['core'];
        this.request.type = src_app_core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].API_GET;
        this.request.reqModule = src_app_core_constants_apiUrlConstants__WEBPACK_IMPORTED_MODULE_6__["ApiUrlConstants"].GET_ALL_CAFE;
        this.request.params = "";
        this.request.body = "";
        this.api.requestObject(this.request).then(function (data) {
            // this.loader = false;
            console.log(data, "dataCafe");
            _this.cafeData = data;
            // this.filterList = data;
            console.log(_this.cafeData, "cafeData");
            // this.router.navigate(['/employeeManagement']);
        }, function (err) {
            // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
            // this.errLogin = err.error;
        });
    };
    DashboardComponent.prototype.getPreviousMonth = function () {
        var _this = this;
        var obj = {
            value: "Privious Month"
        };
        this.request.url = src_app_core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].SERVER_URI_OBJECT['core'];
        this.request.type = src_app_core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].API_POST;
        this.request.reqModule = src_app_core_constants_apiUrlConstants__WEBPACK_IMPORTED_MODULE_6__["ApiUrlConstants"].REVENUE_MONTH;
        this.request.params = "";
        this.request.body = obj;
        console.log(this.request, "reqqqq");
        this.api.requestObject(this.request).then(function (data) {
            console.log(data, "pervious");
            _this.previouse = Object.values(data);
        }, function (err) {
        });
    };
    DashboardComponent.prototype.getIncomeMonth = function () {
        var _this = this;
        var obj = {
            value: "One Month"
        };
        this.request.url = src_app_core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].SERVER_URI_OBJECT['core'];
        this.request.type = src_app_core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].API_POST;
        this.request.reqModule = src_app_core_constants_apiUrlConstants__WEBPACK_IMPORTED_MODULE_6__["ApiUrlConstants"].REVENUE_MONTH;
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
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/routes/dashboard/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/routes/dashboard/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _core_services_remote_service_reqResObj_Request__WEBPACK_IMPORTED_MODULE_7__["Request"],
            src_app_core_services_remote_service_remote_api_service__WEBPACK_IMPORTED_MODULE_3__["RemoteApiService"],
            _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map