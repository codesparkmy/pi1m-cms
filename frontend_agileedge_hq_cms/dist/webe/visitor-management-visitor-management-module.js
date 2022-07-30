(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["visitor-management-visitor-management-module"],{

/***/ "./src/app/routes/visitor-management/visitor-management.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/routes/visitor-management/visitor-management.module.ts ***!
  \************************************************************************/
/*! exports provided: VisitorManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorManagementModule", function() { return VisitorManagementModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _visitor_management_visitor_management_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visitor-management/visitor-management.component */ "./src/app/routes/visitor-management/visitor-management/visitor-management.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");





var routes = [
    { path: '', component: _visitor_management_visitor_management_component__WEBPACK_IMPORTED_MODULE_2__["VisitorManagementComponent"] },
];
var VisitorManagementModule = /** @class */ (function () {
    function VisitorManagementModule() {
    }
    VisitorManagementModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_visitor_management_visitor_management_component__WEBPACK_IMPORTED_MODULE_2__["VisitorManagementComponent"]],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ]
        })
    ], VisitorManagementModule);
    return VisitorManagementModule;
}());



/***/ }),

/***/ "./src/app/routes/visitor-management/visitor-management/visitor-management.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/routes/visitor-management/visitor-management/visitor-management.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-4 form-group\">\r\n  <div class=\"col-md-6 col-sm-12\">\r\n    <h4 class=\" header-titel\">Visitor Management</h4>\r\n  </div>\r\n  <div class=\"col-md-6 col-sm-12 text-right\">\r\n    <input type=\"text\" placeholder=\"Search\" class=\"search-field\" name=\"search\" ngModel  (ngModelChange)=\"searchFilter($event)\">\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-12 col-xs-12\">\r\n\r\n    <table class=\"table table-borderless app-table table-striped\">\r\n      <thead>\r\n        <tr>\r\n          <th>S.No</th>\r\n          <th>Visitor ID</th>\r\n          <th>Name</th>\r\n          <th>Contact number</th>\r\n          <th>Membership since</th>\r\n          <th>Location</th>\r\n          <th></th>\r\n        </tr>\r\n      </thead>\r\n\r\n      <tbody>\r\n        <tr *ngFor=\"let item of filterList  | paginate: { itemsPerPage: 10, currentPage: p };let i = index\"  (click)=\"openDetail(item.id);visitorDetModal.show();\">\r\n          <td>{{ 10 * (p - 1) + i +1}}</td>\r\n          <td>{{item.memeberCode}}</td>\r\n          <td><a>{{item.name}}</a></td>\r\n          <td>{{item.contactNo}}</td>\r\n          <td>{{item.memebershipSince| slice:0:10}}</td>\r\n          <td >{{item.location.name}}</td>\r\n          <td>\r\n            <div class=\"btn-group edit-button\" dropdown>\r\n              <button id=\"button-basic\" dropdownToggle type=\"button\" class=\" bg-tansparent border-0\"\r\n                aria-controls=\"dropdown-basic\">\r\n                <span class=\"material-icons\">\r\n                  more_horiz\r\n                </span>\r\n              </button>\r\n\r\n            </div>\r\n          </td>\r\n        </tr>\r\n\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n\r\n\r\n  <div class=\"text-center col-md-12 col-xs-12\">\r\n    <div class=\"row\">\r\n      <div class=\"text-center col-md-12 col-xs-12\" *ngIf=\"!!loader\">\r\n        <div>\r\n          <div class=\"spinner-box my-0 mx-auto\">\r\n            <div class=\"pulse-container\">\r\n              <div class=\"pulse-bubble pulse-bubble-1\"></div>\r\n              <div class=\"pulse-bubble pulse-bubble-2\"></div>\r\n              <div class=\"pulse-bubble pulse-bubble-3\"></div>\r\n            </div>\r\n          </div>\r\n          <p class=\"text-loader text-bold\">Loading</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <h4 *ngIf=\"filterList?.length==0\" class=\"p-5 text-dark text-center\">No data to display</h4>\r\n  </div>\r\n  <div class=\"col-md-6 col-xs-12\">\r\n    <label class=\"fs14\">Showing {{10 * (p - 1) + i }} to {{10 * p}} of {{filterList?.length}} entries</label>\r\n  </div>\r\n\r\n  <div class=\"col-md-6 col-xs-12 text-right\" *ngIf=\"filterList?.length !== 0\">\r\n    <pagination-controls (pageChange)=\"p = $event\" responsive=\"true\"\r\n    previousLabel=\"Previous\"\r\n    nextLabel=\"Next\"></pagination-controls>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"modal fade user-detai\" bsModal #visitorDetModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\"\r\n  role=\"dialog\" aria-labelledby=\"dialog-static-name\">\r\n  <div class=\"modal-dialog modal-dialog-centered modal-lg\">\r\n    <div class=\"modal-content\">\r\n      <button type=\"button\" class=\"close\"(click)=\"visitorDetModal.hide()\">\r\n        <span aria-hidden=\"true\" class=\"x\">&times;</span>\r\n      </button>\r\n      <div class=\"modal-body\">\r\n        <div class=\"shadow-sm card border-0\">\r\n          <div class=\"card-body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6 col-xs-12\">\r\n                <div class=\"media\">\r\n                  <img src=\"/assets/images/user.jpg\"\r\n                  alt=\"Generic placeholder image\" *ngIf=\"visitorListDetail.profileImage == ''\">\r\n                  <img [src]=\"visitorListDetail?.profileImage\" class=\"image-size\" *ngIf=\"visitorListDetail.profileImage != ''\">\r\n\r\n                  <div class=\"media-body\">\r\n                    <h5 class=\"mt-0\">{{visitorListDetail.name}}</h5>\r\n\r\n                    <label class=\"detals\">{{visitorListDetail.emailId}}</label>\r\n                    <label class=\"detals\">{{visitorListDetail.contactNo}}</label>\r\n                    <label class=\"detals\">{{visitorListDetail.location}}</label>\r\n                  </div>\r\n                 </div>\r\n              </div>\r\n              <div class=\"col-md-6 col-xs-12 text-right\">\r\n                <!-- <p class=\"sub-title mb-0 text-right\">Recent activity</p>\r\n                <h5 class=\"fs24 text-bold\">2 days ago</h5> -->\r\n              </div>\r\n              <div class=\"col-md-12 col-xs-12\">\r\n                <hr>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6 col-xs-6\">\r\n                <table class=\"table table-borderless detail-tabele\">\r\n                  <tbody>\r\n                    <tr>\r\n                      <td>Subscription ID:</td>\r\n                      <td>{{visitorListDetail.subscriptionId}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>Memeber code:</td>\r\n                      <td>{{visitorListDetail.memeberCode}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>NRCI no :</td>\r\n                      <td>{{visitorListDetail.nrciNo}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>DOB:</td>\r\n                      <td>{{visitorListDetail.dob | slice : 0:10}}</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n              <div class=\"col-md-6 col-xs-6\">\r\n                <table class=\"table table-borderless detail-tabele\">\r\n                  <tbody>\r\n                    <tr>\r\n                      <td>Bumi :</td>\r\n                      <td><ng-container *ngIf=\"visitorListDetail.isBumi == true\">yes</ng-container><ng-container *ngIf=\"visitorListDetail.isBumi == false\">No</ng-container></td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>Gender:</td>\r\n                      <td>{{visitorListDetail.gender}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>Income Level: </td>\r\n                      <td>{{visitorListDetail.incomeLevel}}</td>\r\n                    </tr>\r\n\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/routes/visitor-management/visitor-management/visitor-management.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/routes/visitor-management/visitor-management/visitor-management.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Poppins&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Merriweather:300,400,500i,700,900&display=swap\");\n.recent-act {\n  font-size: 18px;\n  font-weight: 600; }\n.days-ago {\n  font-size: 24px;\n  font-weight: 600; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL3Zpc2l0b3ItbWFuYWdlbWVudC92aXNpdG9yLW1hbmFnZW1lbnQvRTpcXGZyb250ZW5kX2FnaWxlZWRnZV9ocV9jbXMvc3JjXFxhcHBcXHNoYXJlZFxcc3R5bGVzXFxhYnN0cmFjdHNcXGZvbnRzLnNjc3MiLCJzcmMvYXBwL3JvdXRlcy92aXNpdG9yLW1hbmFnZW1lbnQvdmlzaXRvci1tYW5hZ2VtZW50L0U6XFxmcm9udGVuZF9hZ2lsZWVkZ2VfaHFfY21zL3NyY1xcYXBwXFxyb3V0ZXNcXHZpc2l0b3ItbWFuYWdlbWVudFxcdmlzaXRvci1tYW5hZ2VtZW50XFx2aXNpdG9yLW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsMkVBQVk7QUFFWixxR0FBWTtBQ0RaO0VBQ0ksZUFBZTtFQUNmLGdCQUNKLEVBQUE7QUFDQTtFQUNJLGVBQWU7RUFDZixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy92aXNpdG9yLW1hbmFnZW1lbnQvdmlzaXRvci1tYW5hZ2VtZW50L3Zpc2l0b3ItbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBvcHBpbnMmZGlzcGxheT1zd2FwJyk7XHJcblxyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1lcnJpd2VhdGhlcjozMDAsNDAwLDUwMGksNzAwLDkwMCZkaXNwbGF5PXN3YXAnKTsiLCJAaW1wb3J0Jy4uLy4uLy4uL3NoYXJlZC9zdHlsZXMvYWJzdHJhY3RzL2Fic3RyYWN0cy1kaXIuc2Nzcyc7XHJcblxyXG4ucmVjZW50LWFjdHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OjYwMFxyXG59XHJcbi5kYXlzLWFnb3tcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/routes/visitor-management/visitor-management/visitor-management.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/routes/visitor-management/visitor-management/visitor-management.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: VisitorManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorManagementComponent", function() { return VisitorManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_remote_service_remote_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/remote-service/remote-api.service */ "./src/app/core/services/remote-service/remote-api.service.ts");
/* harmony import */ var _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/constants/AppConstants */ "./src/app/core/constants/AppConstants.ts");
/* harmony import */ var _core_constants_apiUrlConstants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/constants/apiUrlConstants */ "./src/app/core/constants/apiUrlConstants.ts");
/* harmony import */ var _core_services_remote_service_reqResObj_Request__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/services/remote-service/reqResObj/Request */ "./src/app/core/services/remote-service/reqResObj/Request.ts");
/* harmony import */ var _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/alert/alert.service */ "./src/app/routes/services/alert/alert.service.ts");


// import {NgbDropdown, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';






var VisitorManagementComponent = /** @class */ (function () {
    function VisitorManagementComponent(alert, router, request, api) {
        this.alert = alert;
        this.router = router;
        this.request = request;
        this.api = api;
        this.visitorList = [];
        this.visitorListDetail = [];
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
    }
    VisitorManagementComponent.prototype.ngOnInit = function () {
        this.getAllVisitor();
        this.getEmployee();
    };
    VisitorManagementComponent.prototype.getAllVisitor = function () {
        var _this = this;
        // this.loader=true;
        this.request.url = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].SERVER_URI_OBJECT['core'];
        this.request.type = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].API_GET;
        this.request.reqModule = _core_constants_apiUrlConstants__WEBPACK_IMPORTED_MODULE_5__["ApiUrlConstants"].VISITOR;
        this.request.params = "";
        // this.request.body = data;
        console.log(this.request, "reqqqq");
        this.loader = true;
        this.api.requestObject(this.request).then(function (data) {
            _this.loader = false;
            console.log(data, "dataLogin");
            _this.visitorList = data;
            _this.filterList = data;
            _this.loader = false;
            console.log(JSON.stringify(data));
            // this.router.navigate(['/employeeManagement']);
        }, function (err) {
            // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
            // this.errLogin = err.error;
        });
    };
    VisitorManagementComponent.prototype.openDetail = function (itemID) {
        var _this = this;
        this.itemid = itemID;
        console.log(this.itemid, "itemID");
        var id = this.itemid;
        this.request.url = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].SERVER_URI_OBJECT['core'];
        this.request.type = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].API_GET;
        this.request.reqModule = _core_constants_apiUrlConstants__WEBPACK_IMPORTED_MODULE_5__["ApiUrlConstants"].VISITOR;
        this.request.params = itemID;
        this.request.body = "";
        this.api.requestObject(this.request).then(function (data) {
            _this.visitorListDetail = data;
            console.log(JSON.stringify(data));
            // this.router.navigate(['/employeeManagement']);
        }, function (err) {
        });
    };
    VisitorManagementComponent.prototype.getEmployee = function () {
        var _this = this;
        // console.log(data,"FormData")
        this.request.url = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].SERVER_URI_OBJECT['core'];
        this.request.type = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].API_GET;
        this.request.reqModule = _core_constants_apiUrlConstants__WEBPACK_IMPORTED_MODULE_5__["ApiUrlConstants"].GET_ALL_EMPLOYEE;
        this.request.params = "";
        this.api.requestObject(this.request).then(function (result) {
            _this.employeeData = result.find(function (empDetails) { return empDetails.id == localStorage.getItem('userId'); });
        }, function (err) {
            // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
            // this.errLogin = err.error;
        });
    };
    VisitorManagementComponent.prototype.searchFilter = function (text) {
        this.filterList = this.visitorList.filter(function (result) {
            return JSON.stringify(result.memeberCode).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
                JSON.stringify(result.name).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
                JSON.stringify(result.contactNo).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
                JSON.stringify(result.memebershipSince).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
                JSON.stringify(result.location).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
                JSON.stringify(result).toLocaleLowerCase().includes(text.toLocaleLowerCase());
        });
    };
    VisitorManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-visitor-management',
            template: __webpack_require__(/*! ./visitor-management.component.html */ "./src/app/routes/visitor-management/visitor-management/visitor-management.component.html"),
            styles: [__webpack_require__(/*! ./visitor-management.component.scss */ "./src/app/routes/visitor-management/visitor-management/visitor-management.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_services_remote_service_reqResObj_Request__WEBPACK_IMPORTED_MODULE_6__["Request"],
            _core_services_remote_service_remote_api_service__WEBPACK_IMPORTED_MODULE_3__["RemoteApiService"]])
    ], VisitorManagementComponent);
    return VisitorManagementComponent;
}());



/***/ })

}]);
//# sourceMappingURL=visitor-management-visitor-management-module.js.map