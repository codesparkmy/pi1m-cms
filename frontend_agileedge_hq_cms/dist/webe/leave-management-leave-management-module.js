(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["leave-management-leave-management-module"],{

/***/ "./src/app/routes/leave-management/leave-management.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/routes/leave-management/leave-management.module.ts ***!
  \********************************************************************/
/*! exports provided: LeaveManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveManagementModule", function() { return LeaveManagementModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _leave_management_leave_management_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leave-management/leave-management.component */ "./src/app/routes/leave-management/leave-management/leave-management.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");





var routes = [
    { path: '', component: _leave_management_leave_management_component__WEBPACK_IMPORTED_MODULE_2__["LeaveManagementComponent"] },
];
var LeaveManagementModule = /** @class */ (function () {
    function LeaveManagementModule() {
    }
    LeaveManagementModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_leave_management_leave_management_component__WEBPACK_IMPORTED_MODULE_2__["LeaveManagementComponent"]],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ]
        })
    ], LeaveManagementModule);
    return LeaveManagementModule;
}());



/***/ }),

/***/ "./src/app/routes/leave-management/leave-management/leave-management.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/routes/leave-management/leave-management/leave-management.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-4 form-group\">\r\n  <div class=\"col-md-6 col-sm-12\">\r\n    <h4 class=\" header-titel\">Leave Management</h4>\r\n  </div>\r\n  <div class=\"col-md-6 col-sm-12 text-right\">\r\n    <input type=\"text\" placeholder=\"Search\" class=\"search-field\" name=\"search\" ngModel\r\n      (ngModelChange)=\"searchFilter($event)\">\r\n\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-md-12 col-xs-12\">\r\n\r\n    <table class=\"table table-borderless app-table table-striped\">\r\n      <thead>\r\n        <tr>\r\n          <th>S.No</th>\r\n          <th>Employee</th>\r\n          <th>Location</th>\r\n          <th>Contact number</th>\r\n          <th>Branch</th>\r\n          <th class=\"text-center\">Allocated leave</th>\r\n          <th class=\"text-center\">Leave taken</th>\r\n          <th>Appove leave</th>\r\n          <th></th>\r\n          <th></th>\r\n        </tr>\r\n      </thead>\r\n\r\n      <tbody>\r\n        <tr *ngFor=\"let item of filterList | paginate: { itemsPerPage: 10, currentPage: p }; let i = index\"\r\n          (click)=\"openLeaveDetail(item.id);LeaveDetModal.show()\">\r\n          <td>{{ 10 * (p - 1) + i +1}}</td>\r\n          <td>\r\n            <ng-container *ngIf=\"leaveListDetail.userId != 'null'\">{{item.userId?.fullName}}</ng-container>\r\n          </td>\r\n          <td>{{item.location?.location}}</td>\r\n          <td>\r\n            <ng-container *ngIf=\"leaveListDetail.userId != 'null'\">{{item.userId?.phoneNumber}}</ng-container>\r\n          </td>\r\n\r\n          <td>{{item.location?.branchName}}</td>\r\n          <td class=\"text-center\">{{item?.remainingLeave}}</td>\r\n          <td class=\"text-center\">{{item?.takenLeave}}</td>\r\n\r\n          <td class=\"text-bold\"><span *ngIf=\"item.leaveStatus=='Pending'\"\r\n              class=\"text-warning\">{{item?.leaveStatus}}</span><span *ngIf=\"item.leaveStatus=='Accepted'\"\r\n              class=\"text-success\">{{item?.leaveStatus}}</span>\r\n              <span *ngIf=\"item.leaveStatus=='Rejected'\"\r\n              style=\"color: #dc3545;\">{{item?.leaveStatus}}</span></td>\r\n\r\n          <td>\r\n            <div class=\"btn-group edit-button\" dropdown>\r\n              <button id=\"button-basic\" dropdownToggle type=\"button\" class=\" bg-transparent border-0\"\r\n                aria-controls=\"dropdown-basic\">\r\n                <span class=\"material-icons\">\r\n                  more_horiz\r\n                </span>\r\n              </button>\r\n              <!-- <ul id=\"dropdown-basic\" *dropdownMenu class=\"dropdown-menu dropdown-menu-right\"\r\n                      role=\"menu\" aria-labelledby=\"button-basic\">\r\n                    <li role=\"menuitem\" (click)=\"editTraining(item.id)\">Edit</li>\r\n                    <li role=\"menuitem\" (click)=\"deleteTraining(item.id)\">Delete</li>\r\n                  </ul> -->\r\n            </div>\r\n          </td>\r\n        </tr>\r\n\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n\r\n  <div class=\"text-center col-md-12 col-xs-12\">\r\n    <div class=\"row\">\r\n      <div class=\"text-center col-md-12 col-xs-12\">\r\n        <div *ngIf=\"!!loader\">\r\n          <div class=\"spinner-box my-0 mx-auto\">\r\n            <div class=\"pulse-container\">\r\n              <div class=\"pulse-bubble pulse-bubble-1\"></div>\r\n              <div class=\"pulse-bubble pulse-bubble-2\"></div>\r\n              <div class=\"pulse-bubble pulse-bubble-3\"></div>\r\n            </div>\r\n          </div>\r\n          <p class=\"text-loader text-bold\">Loading</p>\r\n        </div>\r\n        <h4 *ngIf=\"filterList?.length==0\" class=\"p-5 text-dark text-center\">No data to display</h4>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-6 col-xs-12\">\r\n    <label class=\"fs14\">Showing {{10 * (p - 1) + i }} to {{10 * p}} of {{filterList?.length}} entries</label>\r\n  </div>\r\n\r\n  <div class=\"col-md-6 col-xs-12 text-right\" *ngIf=\"filterList?.length !==0\">\r\n    <pagination-controls (pageChange)=\"p = $event\" responsive=\"true\" previousLabel=\"Previous\" nextLabel=\"Next\">\r\n    </pagination-controls>\r\n  </div>\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n<div class=\"modal fade user-detai\" bsModal #LeaveDetModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\"\r\n  role=\"dialog\" aria-labelledby=\"dialog-static-name\" id=\"myModal\">\r\n  <div class=\"modal-dialog modal-dialog-centered modal-lg\">\r\n    <div class=\"modal-content\">\r\n      <button type=\"button\" class=\"close\" (click)=\"LeaveDetModal.hide()\">\r\n        <span aria-hidden=\"true\" class=\"x\">&times;</span>\r\n      </button>\r\n      <div class=\"modal-body\">\r\n        <div class=\"shadow-sm card border-0\">\r\n          <div class=\"card-body\">\r\n            <div class=\"imng-size\">\r\n              <div *ngIf=\"leaveListDetail.userId != 'null'\"><img src=\"/assets/images/user.jpg\"\r\n                  alt=\"Generic placeholder image\" *ngIf=\"leaveListDetail.userId?.profilePicture == '' || leaveListDetail.userId?.profilePicture == null\">\r\n                <img [src]=\"leaveListDetail.userId?.profilePicture\" class=\"image-size\"\r\n                  *ngIf=\"leaveListDetail.userId?.profilePicture != ''\"></div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"media-body\">\r\n                    <h5 class=\"mt-0\" *ngIf=\"leaveListDetail.userId != 'null'\">{{leaveListDetail.userId?.fullName}}</h5>\r\n                    <p class=\"detals mb-0\" *ngIf=\"leaveListDetail.userId != 'null'\">{{leaveListDetail.userId?.email}}\r\n                    </p>\r\n                    <p class=\"detals mb-0\" *ngIf=\"leaveListDetail.userId != 'null'\">\r\n                      {{leaveListDetail.userId?.phoneNumber}}</p>\r\n                    <!-- <p class=\"detals mb-0\">Location</p> -->\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-6 col-xs-6 text-right \">\r\n                  <p class=\"sub-title mb-0 text-right\">Requested for Leave</p>\r\n                  <p class=\"text-bold\">{{leaveListDetail.fromDate |slice:0:10}} to\r\n                    {{leaveListDetail.toDate | slice:0:10}}</p>\r\n                 \r\n                      <button type=\"button\" class=\"btn px-3 py-2 btn-primary \" \r\n                        (click)=\"leaveStatus(leaveListDetail.id, 'Accepted');LeaveDetModal.hide()\" style=\"margin-right:10px\" >Approve Leave</button>\r\n                        <button type=\"button\" class=\"btn px-4 py-2 btn-primary\"\r\n                        (click)=\"leaveStatus(leaveListDetail.id, 'Rejected');LeaveDetModal.hide()\" style=\"background-color: #dc3545;border-color:#dc3545\">Reject Leave</button>\r\n                  \r\n\r\n                </div>\r\n                <div class=\"col-md-12 col-xs-12\">\r\n                  <hr>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6 col-xs-6\">\r\n                <p>Login ID: {{leaveListDetail.userId?.id}}</p>\r\n                <div class=\"d-flex\">\r\n                  <p>Subscription ID:</p><span class=\"px-2\">{{leaveListDetail.userId?.subscriptionId}}</span>\r\n                </div>\r\n                <div class=\"d-flex\">\r\n                  <p>Employee ID:</p><span class=\"px-2\">{{leaveListDetail.userId?.employeeId}}</span>\r\n                </div>\r\n\r\n                <div class=\"d-flex\">\r\n                  <p>DOB :</p><span class=\"px-2\">{{leaveListDetail.userId?.dob | slice:0:10}}</span>\r\n                </div>\r\n\r\n              </div>\r\n              <div class=\"col-md-6 col-xs-6\">\r\n                <div class=\"d-flex\">\r\n                  <p>Gender</p><span class=\"px-2\">\r\n                    <ng-container *ngIf=\"leaveListDetail.userId?.gender == '1'\">Male</ng-container>\r\n                    <ng-container *ngIf=\"leaveListDetail.userId?.gender == '2'\">Female</ng-container>\r\n                  </span>\r\n                </div>\r\n\r\n                <div class=\"d-flex\">\r\n                  <p>Branch:</p><span class=\"px-2\"\r\n                    *ngIf=\"leaveListDetail.location != '' || leaveListDetail.location != 'null'\">{{leaveListDetail.location?.branchName}}</span>\r\n                </div>\r\n                <div class=\"d-flex\">\r\n                  <p>Role of the employee:</p><span class=\"px-2\">{{leaveListDetail.userId?.positionId}}</span>\r\n                </div>\r\n                <div class=\"d-flex\">\r\n                  <p>Location:</p><span class=\"px-2\"\r\n                    *ngIf=\"leaveListDetail.location != '' || leaveListDetail.location != 'null'\">{{leaveListDetail.location?.location}}</span>\r\n                </div>\r\n\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/routes/leave-management/leave-management/leave-management.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/routes/leave-management/leave-management/leave-management.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Poppins&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Merriweather:300,400,500i,700,900&display=swap\");\n.role-select {\n  border-radius: 25px;\n  width: 50%;\n  color: #3B3984;\n  border: 1px solid #3B3984; }\n.imng-size img {\n  width: 60px;\n  height: 60px;\n  float: left;\n  border-radius: 50%; }\n.b1 {\n  margin-left: -1cm; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL2xlYXZlLW1hbmFnZW1lbnQvbGVhdmUtbWFuYWdlbWVudC9FOlxcZnJvbnRlbmRfYWdpbGVlZGdlX2hxX2Ntcy9zcmNcXGFwcFxcc2hhcmVkXFxzdHlsZXNcXGFic3RyYWN0c1xcZm9udHMuc2NzcyIsInNyYy9hcHAvcm91dGVzL2xlYXZlLW1hbmFnZW1lbnQvbGVhdmUtbWFuYWdlbWVudC9FOlxcZnJvbnRlbmRfYWdpbGVlZGdlX2hxX2Ntcy9zcmNcXGFwcFxccm91dGVzXFxsZWF2ZS1tYW5hZ2VtZW50XFxsZWF2ZS1tYW5hZ2VtZW50XFxsZWF2ZS1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yb3V0ZXMvbGVhdmUtbWFuYWdlbWVudC9sZWF2ZS1tYW5hZ2VtZW50L0U6XFxmcm9udGVuZF9hZ2lsZWVkZ2VfaHFfY21zL3NyY1xcYXBwXFxzaGFyZWRcXHN0eWxlc1xcYWJzdHJhY3RzXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSwyRUFBWTtBQUVaLHFHQUFZO0FDRFo7RUFDSSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGNDQ2U7RURBZix5QkNBZSxFQUFBO0FERW5CO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7QUFFcEI7RUFFRSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9sZWF2ZS1tYW5hZ2VtZW50L2xlYXZlLW1hbmFnZW1lbnQvbGVhdmUtbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBvcHBpbnMmZGlzcGxheT1zd2FwJyk7XHJcblxyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1lcnJpd2VhdGhlcjozMDAsNDAwLDUwMGksNzAwLDkwMCZkaXNwbGF5PXN3YXAnKTsiLCJAaW1wb3J0Jy4uLy4uLy4uL3NoYXJlZC9zdHlsZXMvYWJzdHJhY3RzL2Fic3RyYWN0cy1kaXIuc2Nzcyc7XHJcblxyXG4ucm9sZS1zZWxlY3R7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGNvbG9yOiRwcmltYXJ5LWJnO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJHByaW1hcnktYmc7XHJcbn1cclxuLmltbmctc2l6ZSBpbWd7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4uYjFcclxue1xyXG4gIG1hcmdpbi1sZWZ0OiAtMWNtO1xyXG59IiwiJHdoaXRlIDogI0ZGRkZGRjtcclxuJGJsYWNrIDogIzAwMDAwMDtcclxuXHJcblxyXG4kcHJpbWFyeS1iZy1saWdodCA6ICNmMWY5Zjg7XHJcblxyXG4kcHJpbWFyeS1iZzojM0IzOTg0O1xyXG4vLyAkc2Vjb25kYXJ5LWJnOiMyZmMyYjI7Il19 */"

/***/ }),

/***/ "./src/app/routes/leave-management/leave-management/leave-management.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/routes/leave-management/leave-management/leave-management.component.ts ***!
  \****************************************************************************************/
/*! exports provided: LeaveManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveManagementComponent", function() { return LeaveManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_remote_service_remote_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/remote-service/remote-api.service */ "./src/app/core/services/remote-service/remote-api.service.ts");
/* harmony import */ var _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/constants/AppConstants */ "./src/app/core/constants/AppConstants.ts");
/* harmony import */ var _core_constants_apiUrlConstants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/constants/apiUrlConstants */ "./src/app/core/constants/apiUrlConstants.ts");
/* harmony import */ var _core_services_remote_service_reqResObj_Request__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/services/remote-service/reqResObj/Request */ "./src/app/core/services/remote-service/reqResObj/Request.ts");
/* harmony import */ var _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/alert/alert.service */ "./src/app/routes/services/alert/alert.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");







// import { AlertService } from '../../../core/services/alert/alert.service';



var LeaveManagementComponent = /** @class */ (function () {
    function LeaveManagementComponent(router, alert, activateRoute, request, api, route) {
        this.router = router;
        this.alert = alert;
        this.activateRoute = activateRoute;
        this.request = request;
        this.api = api;
        this.route = route;
        this.userData = localStorage.getItem('userId');
        this.leaveListDetail = [];
        this.loader = true;
        this.i1state = true;
        this.i2state = false;
        this.i3state = false;
        this.i = 1;
        this.i1 = this.i;
        this.i2 = this.i1 + 1;
        this.i3 = this.i2 + 1;
        this.p = 1;
        this.pageSize = 10;
        this.leaveForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            reasonforLeave: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            fromDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            toDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
    }
    LeaveManagementComponent.prototype.ngOnInit = function () {
        this.getAllLeave();
        // this.user=localStorage.getItem('user');
        this.userData = localStorage.getItem('userId');
        console.log(this.userData, "USERDATA");
        // console.log(this.user,"USERDATA")
    };
    LeaveManagementComponent.prototype.getAllLeave = function () {
        var _this = this;
        this.loader = true;
        console.log(this.data, "leaveFormData");
        this.request.url = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].SERVER_URI_OBJECT['core'];
        this.request.type = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].API_GET;
        this.request.reqModule = _core_constants_apiUrlConstants__WEBPACK_IMPORTED_MODULE_6__["ApiUrlConstants"].LEAVE;
        this.request.params = '';
        this.request.body = "";
        this.api.requestObject(this.request).then(function (data) {
            _this.loader = false;
            _this.leaveList = data;
            _this.userdetails = data.userId;
            console.log(_this.userdetails, 'user');
            _this.filterList = data;
            console.log('hi', _this.leaveList);
            // this.router.navigate(['/leaveManagement']);
            _this.leaveForm.reset();
        }, function (err) {
            // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
            // this.errLogin = err.error;
        });
    };
    LeaveManagementComponent.prototype.openLeaveDetail = function (itemID) {
        var _this = this;
        this.itemid = itemID;
        console.log(this.itemid, "itemID");
        var id = this.itemid;
        this.request.url = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].SERVER_URI_OBJECT['core'];
        this.request.type = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].API_GET;
        this.request.reqModule = _core_constants_apiUrlConstants__WEBPACK_IMPORTED_MODULE_6__["ApiUrlConstants"].LEAVE;
        this.request.params = itemID;
        this.request.body = "";
        this.api.requestObject(this.request).then(function (data) {
            _this.leaveListDetail = data;
            console.log(_this.leaveListDetail);
            // this.router.navigate(['/employeeManagement']);
        }, function (err) {
        });
    };
    LeaveManagementComponent.prototype.leaveStatus = function (id, status) {
        var _this = this;
        var obj = {
            leaveStatus: status
        };
        this.request.url = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].SERVER_URI_OBJECT['core'];
        this.request.type = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].API_POST;
        this.request.reqModule = _core_constants_apiUrlConstants__WEBPACK_IMPORTED_MODULE_6__["ApiUrlConstants"].LEAVE;
        this.request.params = id;
        this.request.body = obj;
        this.api.requestObject(this.request).then(function (data) {
            _this.leaveListDetail = data;
            _this.LeaveDetModal.hide();
            _this.alert.stickyAlerShow(data['message'], 'alert-success');
            _this.getAllLeave();
            console.log('success');
            // this.router.navigate(['/employeeManagement']);
        }, function (err) {
        });
    };
    LeaveManagementComponent.prototype.searchFilter = function (text) {
        this.filterList = this.leaveList.filter(function (result) {
            return JSON.stringify(result).toLocaleLowerCase().includes(text.toLocaleLowerCase());
        });
    };
    LeaveManagementComponent.prototype.onClick = function () {
        var message = "Help!!!";
        // this.alert.stickyAlerShow(message, 'alert-danger');
        this.alert.show("Confirmation", "Are you Sure to delete this?", 'confirm').then(function (value) {
            if (value == true) {
            }
            else {
            }
        }, function (err) {
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('LeaveDetModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["ModalDirective"])
    ], LeaveManagementComponent.prototype, "LeaveDetModal", void 0);
    LeaveManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-leave-management',
            template: __webpack_require__(/*! ./leave-management.component.html */ "./src/app/routes/leave-management/leave-management/leave-management.component.html"),
            styles: [__webpack_require__(/*! ./leave-management.component.scss */ "./src/app/routes/leave-management/leave-management/leave-management.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _core_services_remote_service_reqResObj_Request__WEBPACK_IMPORTED_MODULE_7__["Request"],
            _core_services_remote_service_remote_api_service__WEBPACK_IMPORTED_MODULE_4__["RemoteApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], LeaveManagementComponent);
    return LeaveManagementComponent;
}());



/***/ })

}]);
//# sourceMappingURL=leave-management-leave-management-module.js.map