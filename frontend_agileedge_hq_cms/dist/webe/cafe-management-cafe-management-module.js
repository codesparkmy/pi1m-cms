(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cafe-management-cafe-management-module"],{

/***/ "./src/app/routes/cafe-management/cafe-create/cafe-create.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/routes/cafe-management/cafe-create/cafe-create.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-4 form-group\">\r\n  <div class=\"col-md-6 col-sm-12\">\r\n      <h4 class=\" header-titel mx-2 px-3\">New Branch</h4>\r\n  </div>\r\n  <div class=\"col-md-6 col-sm-12 text-right\">\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"row mb-5 mx-2\">\r\n  <div class=\"col-md-12 col-xs-12\">\r\n      <div class=\"shadow card border-0\">\r\n          <div class=\"card-body p-4 py-5    \">\r\n              <form [formGroup]=\"branchForm\" >\r\n              <div class=\"row\">\r\n                  <div class=\"col-md-6 col-xs-6\">\r\n                      <div class=\"form-group\"  >\r\n                          <label>Branch ID</label>\r\n                          <input type=\"text\" class=\"form-control\" formControlName=\"branchId\" (keypress)=\"numberOnly($event)\">\r\n                          <span *ngIf=\"branchForm.get('branchId').hasError('required') && branchForm.get('branchId').touched\" class=\"text-danger text-12\">Branch ID required</span>\r\n\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"col-md-6 col-xs-6\">\r\n                      <div class=\"form-group\">\r\n                          <label>Location</label>\r\n                          <input type=\"text\" class=\"form-control\" formControlName=\"location\" >\r\n                          <span *ngIf=\"branchForm.get('location').hasError('required') && branchForm.get('location').touched\" class=\"text-danger text-12\">Location Field required</span>\r\n\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n\r\n              <div class=\"row\">\r\n                  <div class=\"col-md-6 col-xs-6\">\r\n                      <div class=\"form-group\">\r\n                          <label>Branch</label>\r\n                          <input type=\"email\" class=\"form-control\" formControlName=\"branchName\" >\r\n                          <span *ngIf=\"branchForm.get('branchName').hasError('required') && branchForm.get('branchName').touched\" class=\"text-danger text-12\">Branch Name Field required</span>\r\n\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"col-md-6 col-xs-6\">\r\n                      <div class=\"form-group\">\r\n                          <label>Contact Number</label>\r\n                          <div class=\"input-group mb-3\">\r\n\r\n                            <div class=\"input-group-prepend\">\r\n                              <span class=\"input-group-text\" id=\"basic-addon1\">+60\r\n                              </span>\r\n                            </div>\r\n                            <input type=\"phone\" class=\"form-control\" formControlName=\"contactNumber\" (keypress)=\"numberOnly($event)\" minlength=\"10\" maxlength=\"10\">\r\n\r\n                          </div>\r\n                          <span *ngIf=\"branchForm.get('contactNumber').hasError('required') && branchForm.get('contactNumber').touched\" class=\"text-danger text-12\">Contact Number Field required</span>\r\n\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n\r\n              <div class=\"row\">\r\n                  <div class=\"col-md-6 col-xs-6\">\r\n                      <div class=\"form-group\">\r\n                          <label>Branch Head</label>\r\n                          <input type=\"text\" class=\"form-control\" formControlName=\"branchHead\" >\r\n                          <span *ngIf=\"branchForm.get('branchHead').hasError('required') && branchForm.get('branchHead').touched\" class=\"text-danger text-12\">Branch Head Field required</span>\r\n\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"col-md-6 col-xs-6\">\r\n                      <div class=\"form-group\">\r\n                          <label>Capacity of the branch</label>\r\n                          <input type=\"text\" class=\"form-control\" formControlName=\"capacityOfBranch\" >\r\n                          <span *ngIf=\"branchForm.get('capacityOfBranch').hasError('required') && branchForm.get('capacityOfBranch').touched\" class=\"text-danger text-12\">Capacity Of Branch Field required</span>\r\n\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6 col-xs-6\">\r\n                    <div class=\"form-group\">\r\n                        <label>GST Number</label>\r\n                        <input type=\"number\" value=\"System\" class=\"form-control\" formControlName=\"gstNumber\" min=\"0\" maxlength=\"25\">\r\n                        <span *ngIf=\"branchForm.get('gstNumber').hasError('required') && branchForm.get('gstNumber').touched\" class=\"text-danger text-12\">GST Number Field required</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6 col-xs-6\">\r\n                    <div class=\"form-group\">\r\n                        <label>Assit Branch Head</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"assitbranchHead\" >\r\n                        <span *ngIf=\"branchForm.get('assitbranchHead').hasError('required') && branchForm.get('assitbranchHead').touched\" class=\"text-danger text-12\">Assit Branch Head Branch Field required</span>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n              <div class=\"row mt-3\">\r\n                  <div class=\"col-md-12 col-xs-12 text-right\">\r\n                      <button class=\"btn py-2 px-4 btn-primary\" *ngIf=\"!itemid\" [disabled]=\"!branchForm.valid\" (click)=\"addBranch(branchForm.value)\">Create Branch</button>\r\n                      <button class=\"btn py-2 px-4 btn-primary\" *ngIf=\"itemid\" [disabled]=\"!branchForm.valid\" (click)=\"updateBranch(branchForm.value)\">Save & Continue</button>\r\n\r\n                    </div>\r\n              </div>\r\n\r\n          </form>\r\n          </div>\r\n      </div>\r\n  </div>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/routes/cafe-management/cafe-create/cafe-create.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/routes/cafe-management/cafe-create/cafe-create.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-upload::after {\n  content: \"+\";\n  position: absolute;\n  padding: 4px 8px;\n  margin-top: 2.0rem;\n  background-color: #ddd;\n  border-radius: 100%;\n  font-size: 11px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL2NhZmUtbWFuYWdlbWVudC9jYWZlLWNyZWF0ZS9FOlxcZnJvbnRlbmRfYWdpbGVlZGdlX2hxX2Ntcy9zcmNcXGFwcFxccm91dGVzXFxjYWZlLW1hbmFnZW1lbnRcXGNhZmUtY3JlYXRlXFxjYWZlLWNyZWF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9jYWZlLW1hbmFnZW1lbnQvY2FmZS1jcmVhdGUvY2FmZS1jcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLXVwbG9hZDo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCIrXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMi4wcmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/routes/cafe-management/cafe-create/cafe-create.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/routes/cafe-management/cafe-create/cafe-create.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CafeCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CafeCreateComponent", function() { return CafeCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_remote_service_remote_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/remote-service/remote-api.service */ "./src/app/core/services/remote-service/remote-api.service.ts");
/* harmony import */ var _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/constants/AppConstants */ "./src/app/core/constants/AppConstants.ts");
/* harmony import */ var _core_constants_apiUrlConstants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/constants/apiUrlConstants */ "./src/app/core/constants/apiUrlConstants.ts");
/* harmony import */ var _core_services_remote_service_reqResObj_Request__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/services/remote-service/reqResObj/Request */ "./src/app/core/services/remote-service/reqResObj/Request.ts");
/* harmony import */ var _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/alert/alert.service */ "./src/app/routes/services/alert/alert.service.ts");









var CafeCreateComponent = /** @class */ (function () {
    function CafeCreateComponent(router, request, api, alert, activateRoute) {
        this.router = router;
        this.request = request;
        this.api = api;
        this.alert = alert;
        this.activateRoute = activateRoute;
        this.branchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            branchId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            branchName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            branchHead: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            contactNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            capacityOfBranch: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            assitbranchHead: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            gstNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    }
    CafeCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRoute.queryParams.subscribe(function (params) {
            _this.itemid = params["id"];
        });
        console.log(this.itemid);
        if (this.itemid) {
            this.editBranch();
        }
    };
    CafeCreateComponent.prototype.addBranch = function (data) {
        var _this = this;
        this.request.url = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].SERVER_URI_OBJECT['core'];
        this.request.type = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].API_POST;
        this.request.reqModule = _core_constants_apiUrlConstants__WEBPACK_IMPORTED_MODULE_6__["ApiUrlConstants"].GET_ALL_CAFE;
        this.request.body = data;
        this.request.params = "";
        this.api.requestObject(this.request).then(function (data) {
            console.log(data.status, "dataLogin");
            if (data.data == undefined) {
                console.log(data.data, "dataLogin");
                _this.alert.stickyAlerShow(data.message, 'alert-danger');
                _this.branchForm.reset();
            }
            else {
                _this.alert.stickyAlerShow("Created Successfully", 'alert-success');
                _this.router.navigate(['/cafeManagement']);
            }
            console.log(JSON.stringify(data));
        }, function (err) {
            // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
            // this.errLogin = err.error;
        });
    };
    CafeCreateComponent.prototype.numberOnly = function (event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    };
    CafeCreateComponent.prototype.updateBranch = function (data) {
        var _this = this;
        this.request.url = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].SERVER_URI_OBJECT['core'];
        this.request.type = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].API_POST;
        this.request.reqModule = _core_constants_apiUrlConstants__WEBPACK_IMPORTED_MODULE_6__["ApiUrlConstants"].GET_ALL_CAFE;
        this.request.body = data;
        this.request.params = this.itemid;
        this.api.requestObject(this.request).then(function (data) {
            console.log(data, "updatevisitor");
            console.log(JSON.stringify(data));
            _this.alert.stickyAlerShow('Updated Successful', 'alert-success');
            _this.router.navigate(['/cafeManagement']);
        }, function (err) {
            // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
            // this.errLogin = err.error;
        });
    };
    CafeCreateComponent.prototype.editBranch = function () {
        var _this = this;
        this.request.url = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].SERVER_URI_OBJECT['core'];
        this.request.type = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].API_GET;
        this.request.reqModule = _core_constants_apiUrlConstants__WEBPACK_IMPORTED_MODULE_6__["ApiUrlConstants"].GET_ALL_CAFE;
        this.request.params = this.itemid;
        this.request.body = "";
        console.log(this.request, "reqqqq");
        this.api.requestObject(this.request).then(function (data) {
            _this.branchForm.setValue({
                branchId: data.branchId,
                branchName: data.branchName,
                branchHead: data.branchHead,
                contactNumber: data.contactNumber,
                capacityOfBranch: data.capacityOfBranch,
                location: data.location,
                assitbranchHead: data.assitbranchHead,
                gstNumber: data.gstNumber,
            });
        }, function (err) {
        });
    };
    CafeCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cafe-create',
            template: __webpack_require__(/*! ./cafe-create.component.html */ "./src/app/routes/cafe-management/cafe-create/cafe-create.component.html"),
            styles: [__webpack_require__(/*! ./cafe-create.component.scss */ "./src/app/routes/cafe-management/cafe-create/cafe-create.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _core_services_remote_service_reqResObj_Request__WEBPACK_IMPORTED_MODULE_7__["Request"],
            _core_services_remote_service_remote_api_service__WEBPACK_IMPORTED_MODULE_4__["RemoteApiService"],
            _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CafeCreateComponent);
    return CafeCreateComponent;
}());



/***/ }),

/***/ "./src/app/routes/cafe-management/cafe-management.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/routes/cafe-management/cafe-management.module.ts ***!
  \******************************************************************/
/*! exports provided: CafeManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CafeManagementModule", function() { return CafeManagementModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cafe_management_cafe_management_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cafe-management/cafe-management.component */ "./src/app/routes/cafe-management/cafe-management/cafe-management.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cafe_create_cafe_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cafe-create/cafe-create.component */ "./src/app/routes/cafe-management/cafe-create/cafe-create.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");






var routes = [
    { path: '', component: _cafe_management_cafe_management_component__WEBPACK_IMPORTED_MODULE_2__["CafeManagementComponent"] },
    { path: 'cafe', component: _cafe_create_cafe_create_component__WEBPACK_IMPORTED_MODULE_4__["CafeCreateComponent"] }
];
var CafeManagementModule = /** @class */ (function () {
    function CafeManagementModule() {
    }
    CafeManagementModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_cafe_management_cafe_management_component__WEBPACK_IMPORTED_MODULE_2__["CafeManagementComponent"], _cafe_create_cafe_create_component__WEBPACK_IMPORTED_MODULE_4__["CafeCreateComponent"]],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ]
        })
    ], CafeManagementModule);
    return CafeManagementModule;
}());



/***/ }),

/***/ "./src/app/routes/cafe-management/cafe-management/cafe-management.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/routes/cafe-management/cafe-management/cafe-management.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-4 form-group\">\r\n  <div class=\"col-md-6 col-sm-12\">\r\n    <h4 class=\" header-titel\">Cafe Management</h4>\r\n  </div>\r\n  <div class=\"col-md-6 col-sm-12 text-right\">\r\n    <!-- <button type=\"button\" class=\"btn btn-transparent\"> <img src=\"./assets/icon/filter.svg\"\r\n        alt=\"Generic placeholder image\"></button> -->\r\n        <input type=\"text\" placeholder=\"Search\" class=\"search-field\" name=\"search\" ngModel  (ngModelChange)=\"searchFilter($event)\">\r\n\r\n    <button type=\"button\" routerLink=\"/cafeManagement/cafe\" class=\"btn px-4 py-2 btn-primary\">Create New</button>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-12 col-xs-12 \">\r\n    <table class=\"table table-borderless app-table table-striped\">\r\n      <thead>\r\n        <tr>\r\n          <th>S.No</th>\r\n          <th>Branch ID</th>\r\n          <th>Location</th>\r\n          <th>Branch</th>\r\n          <th>Contact number</th>\r\n          <th>Branch Head</th>\r\n          <th></th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr  *ngFor=\"let item of filterList | paginate: { itemsPerPage: 10, currentPage: p } ; let i =index\">\r\n          <td>{{ 10 * (p - 1) + i +1}}</td>\r\n          <td><a (click)=\"cafeDetailModal.show();openCafeDetail(item.id)\">{{item?.branchId}}</a></td>\r\n          <td>{{item?.location}}</td>\r\n          <td><a (click)=\"cafeDetailModal.show();openCafeDetail(item.id)\">{{item?.branchName}}</a></td>\r\n          <td>{{item?.contactNumber}}</td>\r\n          <td>{{item?.branchHead}}</td>\r\n          <td>\r\n            <div class=\"btn-group edit-button\" dropdown>\r\n              <button id=\"button-basic\" dropdownToggle type=\"button\" class=\" bg-transparent border-0\"\r\n                      aria-controls=\"dropdown-basic\">\r\n                      <span class=\"material-icons\">\r\n                        more_horiz\r\n                      </span>\r\n              </button>\r\n              <ul id=\"dropdown-basic\" *dropdownMenu class=\"dropdown-menu dropdown-menu-right\"\r\n                  role=\"menu\" aria-labelledby=\"button-basic\">\r\n                <li role=\"menuitem\" (click)=\"editCafe(item.id)\">Edit</li>\r\n                <li role=\"menuitem\" (click)=\"deleteCafe(item.id)\">Delete</li>\r\n              </ul>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <div class=\"text-center col-md-12 col-xs-12\">\r\n    <div class=\"row\">\r\n      <div class=\"text-center col-md-12 col-xs-12\" *ngIf=\"!!loader\">\r\n        <div>\r\n          <div class=\"spinner-box my-0 mx-auto\">\r\n            <div class=\"pulse-container\">\r\n              <div class=\"pulse-bubble pulse-bubble-1\"></div>\r\n              <div class=\"pulse-bubble pulse-bubble-2\"></div>\r\n              <div class=\"pulse-bubble pulse-bubble-3\"></div>\r\n            </div>\r\n          </div>\r\n          <p class=\"text-loader text-bold\">Loading</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <h4 *ngIf=\"filterList?.length==0\" class=\"p-5 text-dark text-center\">No data to display</h4>\r\n  </div>\r\n  <div class=\"col-md-6 col-xs-12\">\r\n    <label class=\"fs14\">Showing {{10 * (p - 1) + i }} to {{10 * p}} of {{filterList?.length}} entries</label>\r\n  </div>\r\n\r\n  <div class=\"col-md-6 col-xs-12 text-right\" *ngIf=\"filterList?.length !== 0\">\r\n    <pagination-controls (pageChange)=\"p = $event\" responsive=\"true\"\r\n    previousLabel=\"Previous\"\r\n    nextLabel=\"Next\"></pagination-controls>\r\n  </div>\r\n\r\n\r\n\r\n\r\n<div class=\"modal fade user-detai\" bsModal #cafeDetailModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\"\r\n  role=\"dialog\" aria-labelledby=\"dialog-static-name\">\r\n  <div class=\"modal-dialog modal-dialog-centered modal-lg\">\r\n    <div class=\"modal-content\">\r\n      <button type=\"button\" class=\"close\"(click)=\"cafeDetailModal.hide()\">\r\n        <span aria-hidden=\"true\" class=\"x\">&times;</span>\r\n      </button>\r\n      <div class=\"modal-body\">\r\n        <div class=\"shadow-sm card border-0\">\r\n          <div class=\"card-body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6 col-xs-12\">\r\n                <div class=\"media\">\r\n                  <!-- <img src=\"/assets/images/user.jpg\"\r\n                  alt=\"Generic placeholder image\" *ngIf=\"employeeData?.profilePicture == ''\">\r\n                  <img [src]=\"employeeData?.profilePicture\" class=\"image-size\" *ngIf=\"employeeData.profilePicture != ''\"> -->\r\n\r\n                  <div class=\"media-body\">\r\n                    <h5 class=\"mt-0\">{{cafeListDetail?.branchName}}</h5>\r\n\r\n                    <label class=\"detals\">{{cafeListDetail?.branchId}}</label>\r\n                    <label class=\"detals\">{{cafeListDetail?.location}}</label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-6 col-xs-12 text-right\">\r\n                <h4 class=\"mt-4 mb-0 px-4 edit\" (click)=\"editCafe(cafeListDetail.id)\">Edit</h4>\r\n                <!-- <p>Branch ID: {{cafeListDetail?.branchId}}</p> -->\r\n              </div>\r\n              <div class=\"col-md-12 col-xs-12\">\r\n                <hr>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6 col-xs-6\">\r\n                <table class=\"table table-borderless detail-tabele\">\r\n                  <tbody>\r\n\r\n                    <tr>\r\n                      <td>ID:</td>\r\n                      <td>{{cafeListDetail?.id}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>Branch Head :</td>\r\n                      <td>{{cafeListDetail?.branchHead}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>Contact Number</td>\r\n                      <td>{{cafeListDetail?.contactNumber}}</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n              <div class=\"col-md-6 col-xs-6\">\r\n                <table class=\"table table-borderless detail-tabele\">\r\n                  <tbody>\r\n                    <tr>\r\n                      <td>Capacity Of Branch :</td>\r\n                      <td>{{cafeListDetail?.capacityOfBranch}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>Gst Number:</td>\r\n                      <td>{{cafeListDetail?.gstNumber}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>Assit Branch Head: </td>\r\n                      <td>{{cafeListDetail?.assitbranchHead}}</td>\r\n                    </tr>\r\n\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/routes/cafe-management/cafe-management/cafe-management.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/routes/cafe-management/cafe-management/cafe-management.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9jYWZlLW1hbmFnZW1lbnQvY2FmZS1tYW5hZ2VtZW50L2NhZmUtbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/routes/cafe-management/cafe-management/cafe-management.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/routes/cafe-management/cafe-management/cafe-management.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CafeManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CafeManagementComponent", function() { return CafeManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_remote_service_remote_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/remote-service/remote-api.service */ "./src/app/core/services/remote-service/remote-api.service.ts");
/* harmony import */ var _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/constants/AppConstants */ "./src/app/core/constants/AppConstants.ts");
/* harmony import */ var _core_constants_apiUrlConstants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/constants/apiUrlConstants */ "./src/app/core/constants/apiUrlConstants.ts");
/* harmony import */ var _core_services_remote_service_reqResObj_Request__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/services/remote-service/reqResObj/Request */ "./src/app/core/services/remote-service/reqResObj/Request.ts");
/* harmony import */ var _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/alert/alert.service */ "./src/app/routes/services/alert/alert.service.ts");








var CafeManagementComponent = /** @class */ (function () {
    function CafeManagementComponent(router, request, api, alert) {
        this.router = router;
        this.request = request;
        this.api = api;
        this.alert = alert;
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
    CafeManagementComponent.prototype.ngOnInit = function () {
        this.getCafe();
        this.getEmployee();
    };
    CafeManagementComponent.prototype.getCafe = function () {
        var _this = this;
        this.request.url = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].SERVER_URI_OBJECT['core'];
        this.request.type = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].API_GET;
        this.request.reqModule = _core_constants_apiUrlConstants__WEBPACK_IMPORTED_MODULE_5__["ApiUrlConstants"].GET_ALL_CAFE;
        this.request.params = "";
        this.request.body = "";
        this.api.requestObject(this.request).then(function (data) {
            _this.loader = false;
            console.log(data, "dataCafe");
            _this.cafeData = data;
            _this.filterList = data;
            console.log(_this.cafeData, "cafeData");
            // this.router.navigate(['/employeeManagement']);
        }, function (err) {
        });
    };
    CafeManagementComponent.prototype.searchFilter = function (text) {
        this.filterList = this.cafeData.filter(function (result) {
            return JSON.stringify(result.branchId).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
                JSON.stringify(result.branchName).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
                JSON.stringify(result.location).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
                JSON.stringify(result.contactNumber).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
                JSON.stringify(result.branchHead).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
                JSON.stringify(result).toLocaleLowerCase().includes(text.toLocaleLowerCase());
        });
    };
    CafeManagementComponent.prototype.getEmployee = function () {
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
    CafeManagementComponent.prototype.openCafeDetail = function (itemID) {
        var _this = this;
        this.itemid = itemID;
        console.log(this.itemid, "itemID");
        var id = this.itemid;
        this.request.url = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].SERVER_URI_OBJECT['core'];
        this.request.type = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].API_GET;
        this.request.reqModule = _core_constants_apiUrlConstants__WEBPACK_IMPORTED_MODULE_5__["ApiUrlConstants"].GET_ALL_CAFE;
        this.request.params = itemID;
        this.request.body = "";
        this.api.requestObject(this.request).then(function (data) {
            _this.cafeListDetail = data;
            console.log(JSON.stringify(data));
            // this.router.navigate(['/employeeManagement']);
        }, function (err) {
        });
    };
    CafeManagementComponent.prototype.editCafe = function (itemid) {
        this.itemid = itemid;
        console.log(this.itemid, "itemID");
        var id = this.itemid;
        this.router.navigate(['cafeManagement/cafe'], { queryParams: { id: this.itemid } });
    };
    CafeManagementComponent.prototype.deleteCafe = function (itemid) {
        var _this = this;
        var data = {
            status: 2
        };
        this.itemid = itemid;
        this.request.url = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].SERVER_URI_OBJECT['core'];
        this.request.type = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].API_POST;
        this.request.reqModule = _core_constants_apiUrlConstants__WEBPACK_IMPORTED_MODULE_5__["ApiUrlConstants"].GET_ALL_CAFE;
        this.request.params = this.itemid;
        this.request.body = data;
        console.log(this.request, "reqqqq");
        this.api.requestObject(this.request).then(function (data) {
            _this.alert.stickyAlerShow("Deleted Successfully", 'alert-success');
            _this.getCafe();
        }, function (err) {
        });
        // this.router.navigate(['trainingManagement/create'], {queryParams: {id: this.itemid}});
    };
    CafeManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cafe-management',
            template: __webpack_require__(/*! ./cafe-management.component.html */ "./src/app/routes/cafe-management/cafe-management/cafe-management.component.html"),
            styles: [__webpack_require__(/*! ./cafe-management.component.scss */ "./src/app/routes/cafe-management/cafe-management/cafe-management.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_services_remote_service_reqResObj_Request__WEBPACK_IMPORTED_MODULE_6__["Request"],
            _core_services_remote_service_remote_api_service__WEBPACK_IMPORTED_MODULE_3__["RemoteApiService"], _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"]])
    ], CafeManagementComponent);
    return CafeManagementComponent;
}());



/***/ })

}]);
//# sourceMappingURL=cafe-management-cafe-management-module.js.map