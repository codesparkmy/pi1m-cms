(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employee-management-employee-management-module"],{

/***/ "./src/app/routes/employee-management/employee-create/employee-create.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/routes/employee-management/employee-create/employee-create.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-4 form-group\">\r\n    <div class=\"col-md-6 col-sm-12\">\r\n        <h4 class=\" header-titel mx-2 px-3\">{{itemid ? 'Update Employee' : 'Create Employee'}} </h4>\r\n    </div>\r\n    <div class=\"col-md-6 col-sm-12 text-right\">\r\n\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"row mb-5 mx-2\">\r\n    <div class=\"col-md-12 col-xs-12\">\r\n        <div class=\"shadow card border-0\">\r\n            <div class=\"card-body\">\r\n                <form [formGroup]=\"employeeForm\">\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6 col-xs-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Full Name</label>\r\n                                <input formControlName=\"fullName\" type=\"text\" class=\"form-control\">\r\n                                <span\r\n                                    *ngIf=\"employeeForm.get('fullName').hasError('required') && employeeForm.get('fullName').touched\"\r\n                                    class=\"text-danger text-12\">Full name required</span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6 col-xs-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Employee ID</label>\r\n                                <input type=\"text\" formControlName=\"employeeId\" class=\"form-control\">\r\n                                <span\r\n                                    *ngIf=\"employeeForm.get('employeeId').hasError('required') && employeeForm.get('employeeId').touched\"\r\n                                    class=\"text-danger text-12\">Employee ID required</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6 col-xs-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>NRIC no</label>\r\n                                <!-- <input type=\"text\" class=\"form-control\" formControlName=\"subscriptionId\"\r\n                                    (keypress)=\"numberOnly($event)\"> -->\r\n                                <input type=\"text\" formControlName=\"subscriptionId\" class=\"form-control\" placeholder=\"xxxxxx-xx-xxxx\">    \r\n                                <span\r\n                                    *ngIf=\"employeeForm.get('subscriptionId').hasError('required') && employeeForm.get('subscriptionId').touched\"\r\n                                    class=\"text-danger text-12\">NRIC no required</span>\r\n                                <span *ngIf=\"employeeForm.get('subscriptionId').hasError('pattern')\" class=\"text-danger text-12\">Not a valid NRIC\r\n                                    number</span>    \r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6 col-xs-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Race</label>\r\n                                <!-- <input type=\"text\" class=\"form-control\" formControlName=\"RaceId\"\r\n                                    (keypress)=\"numberOnly($event)\"> -->\r\n                                <select class=\"form-control\" formControlName=\"RaceId\">\r\n                                    <option value=\"\" selected>Select Race</option>\r\n                                    <option value=\"Malay\">Malay</option>\r\n                                    <option value=\"Chinese\">Chinese</option>\r\n                                    <option value=\"Indian\">Indian</option>\r\n                                    <option value=\"Bumiputera\">Bumiputera</option>\r\n                                    <option value=\"Others\">Others</option>\r\n                                    <!-- <option value=false>Female</option> -->\r\n\r\n                                </select>\r\n                                <span\r\n                                    *ngIf=\"employeeForm.get('RaceId').hasError('required') && employeeForm.get('RaceId').touched\"\r\n                                    class=\"text-danger text-12\">Race required</span>\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6 col-xs-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>DOB</label>\r\n                                <input type=\"date\" class=\"form-control\" formControlName=\"dob\" [max]=\"getToday()\">\r\n                                <span\r\n                                    *ngIf=\"employeeForm.get('dob').hasError('required') && employeeForm.get('dob').touched\"\r\n                                    class=\"text-danger text-12\">DOB required</span>\r\n\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6 col-xs-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Gender</label>\r\n                                <select class=\"form-control\" formControlName=\"gender\">\r\n                                    <option value=\"\" selected>Select Gender</option>\r\n                                    <option value=\"true\">Male</option>\r\n                                    <option value=\"false\">Female</option>\r\n                                    <!-- <option value=false>Female</option> -->\r\n\r\n                                </select>\r\n                                <span\r\n                                    *ngIf=\"employeeForm.get('gender').hasError('required') && employeeForm.get('gender').touched\"\r\n                                    class=\"text-danger text-12\">Gender required</span>\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"row\">\r\n                        <!-- <div class=\"col-md-6 col-xs-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Religion CID</label>\r\n                                <input type=\"text\" class=\"form-control\" formControlName=\"ReligionCId\"\r\n                                    (keypress)=\"numberOnly($event)\">\r\n                                <span\r\n                                    *ngIf=\"employeeForm.get('ReligionCId').hasError('required') && employeeForm.get('ReligionCId').touched\"\r\n                                    class=\"text-danger text-12\">Religion CID required</span>\r\n\r\n                            </div>\r\n                        </div> -->\r\n                        <div class=\"col-md-6 col-xs-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Contact No</label>\r\n                                <div class=\"input-group mb-3\">\r\n\r\n                                    <div class=\"input-group-prepend\">\r\n                                        <span class=\"input-group-text\" id=\"basic-addon1\">+60\r\n                                        </span>\r\n                                    </div>\r\n                                    <input type=\"phonenumber\" class=\"form-control\" formControlName=\"phoneNumber\"\r\n                                        (keypress)=\"numberOnly($event)\" minlength=\"10\" maxlength=\"12\">\r\n\r\n                                </div>\r\n                                <span\r\n                                    *ngIf=\"employeeForm.get('phoneNumber').hasError('required') && employeeForm.get('phoneNumber').touched\"\r\n                                    class=\"text-danger text-12\">Contact Number required</span>\r\n                                <span *ngIf=\"employeeForm.get('phoneNumber').hasError('minLength')\"\r\n                                    class=\"text-danger text-12\">Contact Number must be at lease 10 to 12 numbers</span>\r\n\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6 col-xs-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Job Category </label>\r\n                                <input type=\"text\" class=\"form-control\" formControlName=\"jobCategory\">\r\n                                <span\r\n                                    *ngIf=\"employeeForm.get('jobCategory').hasError('required') && employeeForm.get('jobCategory').touched\"\r\n                                    class=\"text-danger text-12\">Job Category required</span>\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n\r\n                        <div class=\"col-md-6 col-xs-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Position</label>\r\n                                <select formControlName=\"positionId\" class=\"form-control\">\r\n                                    <option value=\"\" selected>Choose Role</option>\r\n                                    <option *ngFor=\"let item of roleList\" [value]=\"item?.id\"\r\n                                        [selected]=\"positionId == item.id?item:null\">\r\n                                        {{item?.name}}\r\n                                    </option>\r\n                                </select>\r\n                                <!-- <select formControlName=\"positionId\" class=\"form-control\">\r\n                                    <option value=\"0\">None</option>\r\n                                    <option value=\"Admin\">Admin</option>\r\n                                    <option value=\"Manager\">Manager</option>\r\n                                    <option value=\"Employee\">Employee</option>\r\n                                </select> -->\r\n                                <span\r\n                                    *ngIf=\"employeeForm.get('positionId').hasError('required') && employeeForm.get('positionId').touched\"\r\n                                    class=\"text-danger text-12\">Position required</span>\r\n\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6 col-xs-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Joining Date</label>\r\n                                <input type=\"date\" class=\"form-control\" formControlName=\"joiningDate\"\r\n                                    [min]=\"getToday()\">\r\n                                <span\r\n                                    *ngIf=\"employeeForm.get('joiningDate').hasError('required') && employeeForm.get('joiningDate').touched\"\r\n                                    class=\"text-danger text-12\">Joining Date required</span>\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6 col-xs-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Branch allocation</label>\r\n                                <select formControlName=\"branchAllocation\" class=\"form-control\">\r\n                                    <option value=\"0\">None</option>\r\n                                    <option *ngFor=\"let item of cafeData index as i\" value={{item.id}}>\r\n                                        {{item?.branchName}}</option>\r\n                                </select>\r\n\r\n                                <span\r\n                                    *ngIf=\"employeeForm.get('branchAllocation').hasError('required') && employeeForm.get('branchAllocation').touched\"\r\n                                    class=\"text-danger text-12\">Branch allocation required</span>\r\n\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6 col-xs-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Nationality</label>\r\n                                <input type=\"text\" class=\"form-control\" formControlName=\"nationality\">\r\n                                <span\r\n                                    *ngIf=\"employeeForm.get('nationality').hasError('required') && employeeForm.get('nationality').touched\"\r\n                                    class=\"text-danger text-12\">Nationality required</span>\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6 col-xs-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Total obtain leave</label>\r\n                                <input type=\"number\" class=\"form-control\" formControlName=\"totalObtain\"\r\n                                    ng-pattern=\"/^[0-9]+(\\.[0-9]{1,2})?$/\" step=\"0.01\">\r\n                                <span\r\n                                    *ngIf=\"employeeForm.get('totalObtain').hasError('required') && employeeForm.get('totalObtain').touched\"\r\n                                    class=\"text-danger text-12\">Total obtain required</span>\r\n                                <span\r\n                                    *ngIf=\"employeeForm.get('totalObtain').hasError('pattern') && employeeForm.get('totalObtain').touched\"\r\n                                    class=\"text-danger text-12\">Total obtain must be number or decimal value.</span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6 col-xs-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Email ID</label>\r\n                                <input type=\"email\" class=\"form-control\" formControlName=\"email\">\r\n                                <span\r\n                                    *ngIf=\"employeeForm.get('email').hasError('required') && employeeForm.get('email').touched\"\r\n                                    class=\"text-danger text-12\">Email ID required</span>\r\n                                <span\r\n                                    *ngIf=\"employeeForm.get('email').hasError('pattern') && employeeForm.get('email').touched\"\r\n                                    class=\"text-danger text-12\">Email must be a valid email address</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6 col-xs-6\" *ngIf=\"!itemid\">\r\n                            <div class=\"form-group\">\r\n                                <label>Password</label>\r\n                                <input type=\"password\" class=\"form-control\" formControlName=\"password\"\r\n                                    id=\"passwordInput\">\r\n                                <div class=\"show-password\">\r\n                                    <input type=\"checkbox\" (click)=\"showPassword()\"> Show Password\r\n                                </div>\r\n                                <span\r\n                                    *ngIf=\"employeeForm.get('password').hasError('required') && employeeForm.get('password').touched\"\r\n                                    class=\"text-danger text-12\">Password required</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row mt-3\">\r\n                        <div class=\"col-md-12 col-xs-12 text-right\">\r\n                            <!-- <a type=\"button\" class=\"btn btn-primary\" href=\"../empoyeeManagement/index.html\">Create New</a> -->\r\n                            <button *ngIf=\"!itemid\" class=\"btn btn-primary px-5 py-2\" [disabled]=\"!employeeForm.valid\"\r\n                                (click)=\"addEmployee(employeeForm.value)\">Create New</button>\r\n                            <button *ngIf=\"itemid\" class=\"btn btn-primary\"\r\n                                (click)=\"updateEmployee(employeeForm.value);\">Save & Continue</button>\r\n\r\n                        </div>\r\n                    </div>\r\n\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/routes/employee-management/employee-create/employee-create.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/routes/employee-management/employee-create/employee-create.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-upload::after {\n  content: \"+\";\n  position: absolute;\n  padding: 4px 8px;\n  margin-top: 1.0rem;\n  background-color: #ddd;\n  border-radius: 100%;\n  font-size: 11px; }\n\n.hideFile {\n  opacity: 0;\n  width: 30px;\n  height: 30px;\n  position: absolute;\n  left: 0; }\n\n.show-password {\n  margin-top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL2VtcGxveWVlLW1hbmFnZW1lbnQvZW1wbG95ZWUtY3JlYXRlL0U6XFxmcm9udGVuZF9hZ2lsZWVkZ2VfaHFfY21zL3NyY1xcYXBwXFxyb3V0ZXNcXGVtcGxveWVlLW1hbmFnZW1lbnRcXGVtcGxveWVlLWNyZWF0ZVxcZW1wbG95ZWUtY3JlYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZUFBZSxFQUFBOztBQUVuQjtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixPQUFPLEVBQUE7O0FBRVQ7RUFDRSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9lbXBsb3llZS1tYW5hZ2VtZW50L2VtcGxveWVlLWNyZWF0ZS9lbXBsb3llZS1jcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLXVwbG9hZDo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCIrXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMS4wcmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgfVxyXG4uaGlkZUZpbGV7XHJcbiAgb3BhY2l0eTogMDtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuLnNob3ctcGFzc3dvcmQge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/routes/employee-management/employee-create/employee-create.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/routes/employee-management/employee-create/employee-create.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: EmployeeCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeCreateComponent", function() { return EmployeeCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_remote_service_remote_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/remote-service/remote-api.service */ "./src/app/core/services/remote-service/remote-api.service.ts");
/* harmony import */ var _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/constants/AppConstants */ "./src/app/core/constants/AppConstants.ts");
/* harmony import */ var _core_constants_apiUrlConstants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/constants/apiUrlConstants */ "./src/app/core/constants/apiUrlConstants.ts");
/* harmony import */ var _core_services_remote_service_reqResObj_Request__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/services/remote-service/reqResObj/Request */ "./src/app/core/services/remote-service/reqResObj/Request.ts");
/* harmony import */ var _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/alert/alert.service */ "./src/app/routes/services/alert/alert.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");











var ImageSnippet = /** @class */ (function () {
    function ImageSnippet(src, file) {
        this.src = src;
        this.file = file;
    }
    return ImageSnippet;
}());
var EmployeeCreateComponent = /** @class */ (function () {
    function EmployeeCreateComponent(router, activateRoute, request, api, alert, http, cd) {
        this.router = router;
        this.activateRoute = activateRoute;
        this.request = request;
        this.api = api;
        this.alert = alert;
        this.http = http;
        this.cd = cd;
        this.isImgUploaded = false;
        this.dob = null;
        this.gender = false;
        this.joiningDate = null;
        this.storeData = {};
        this.totalObtain = '';
        // public businessFax: any;
        this.password = '';
        this.roleList = [];
        var emailPattern = '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,63}';
        this.fileUploadForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            profilePicture: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.profilePicture, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
        this.employeeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            fullName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            employeeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            subscriptionId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("\\d{6}\\-\\d{2}\\-\\d{4}")]),
            RaceId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            // ReligionCId: new FormControl('', [Validators.required]),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]),
            jobCategory: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            positionId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            joiningDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(emailPattern)])),
            // citizenShip: new FormControl('', [Validators.required]),
            nationality: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            totalObtain: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            // businessFax: new FormControl('', [Validators.required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            branchAllocation: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
    }
    EmployeeCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRoute.queryParams.subscribe(function (params) {
            _this.itemid = params["id"];
        });
        this.getCafe();
        if (this.itemid) {
            this.editEmployee();
        }
        this.getRoleList();
    };
    EmployeeCreateComponent.prototype.getToday = function () {
        return new Date().toISOString().split('T')[0];
    };
    EmployeeCreateComponent.prototype.getRoleList = function () {
        var _this = this;
        this.request.url = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].SERVER_URI_OBJECT['core'];
        this.request.type = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].API_GET;
        this.request.reqModule = _core_constants_apiUrlConstants__WEBPACK_IMPORTED_MODULE_6__["ApiUrlConstants"].GET_ALL_ROLES;
        this.request.params = "";
        this.api.requestObject(this.request).then(function (data) {
            _this.roleList = data;
            // this.router.navigate(['/employeeManagement']);
        }, function (err) {
            // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
            // this.errLogin = err.error;
        });
    };
    EmployeeCreateComponent.prototype.numberOnly = function (event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    };
    EmployeeCreateComponent.prototype.getCafe = function () {
        var _this = this;
        this.request.url = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].SERVER_URI_OBJECT['core'];
        this.request.type = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].API_GET;
        this.request.reqModule = _core_constants_apiUrlConstants__WEBPACK_IMPORTED_MODULE_6__["ApiUrlConstants"].GET_ALL_CAFE;
        this.request.params = "";
        this.request.body = "";
        this.api.requestObject(this.request).then(function (data) {
            _this.cafeData = data;
            console.log(_this.cafeData, "cafeData");
            // this.router.navigate(['/employeeManagement']);
        }, function (err) {
            // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
            // this.errLogin = err.error;
        });
    };
    EmployeeCreateComponent.prototype.addEmployee = function (data) {
        var _this = this;
        // const formData = new FormData();
        // formData.append('file', this.fileData);
        var obj = {
            email: data.email,
            phoneNumber: data.phoneNumber,
            fullName: data.fullName,
            employeeId: data.employeeId,
            subscriptionId: data.subscriptionId,
            branchAllocation: data.branchAllocation,
            role: data.positionId,
        };
        this.data = Object.assign(obj, data);
        this.request.url = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].SERVER_URI_OBJECT['core'];
        this.request.type = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].API_POST;
        this.request.reqModule = _core_constants_apiUrlConstants__WEBPACK_IMPORTED_MODULE_6__["ApiUrlConstants"].CREATE_EMPLOYEE;
        this.request.body = obj;
        this.request.params = "";
        this.api.requestObject(this.request).then(function (data) {
            _this.alert.stickyAlerShow('Created Successful', 'alert-success');
            console.log(data, "create Emp");
            console.log(JSON.stringify(data));
            _this.router.navigate(['/employeeManagement']);
        }, function (err) {
            // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
            // this.errLogin = err.error;
        });
    };
    EmployeeCreateComponent.prototype.updateEmployee = function (data) {
        var _this = this;
        var obj = {
            email: data.email,
            phoneNumber: data.phoneNumber,
            fullName: data.fullName,
            employeeId: data.employeeId,
            subscriptionId: data.subscriptionId,
            branchAllocation: data.branchAllocation,
            role: data.positionId,
        };
        console.log(data, "FormData");
        this.request.url = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].SERVER_URI_OBJECT['core'];
        this.request.type = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].API_POST;
        this.request.reqModule = _core_constants_apiUrlConstants__WEBPACK_IMPORTED_MODULE_6__["ApiUrlConstants"].Update_EMPLOYEE;
        this.request.body = obj;
        this.request.params = this.itemid;
        this.api.requestObject(this.request).then(function (data) {
            console.log(data, "updatevisitor");
            console.log(JSON.stringify(data));
            _this.alert.stickyAlerShow('Updated Successful', 'alert-success');
            _this.router.navigate(['/employeeManagement']);
        }, function (err) {
            // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
            // this.errLogin = err.error;
        });
    };
    EmployeeCreateComponent.prototype.editEmployee = function () {
        var _this = this;
        this.request.url = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].SERVER_URI_OBJECT['core'];
        this.request.type = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].API_GET;
        this.request.reqModule = _core_constants_apiUrlConstants__WEBPACK_IMPORTED_MODULE_6__["ApiUrlConstants"].USER;
        this.request.params = this.itemid;
        this.request.body = "";
        console.log(this.request, "reqqqq");
        this.api.requestObject(this.request).then(function (data) {
            _this.profilePicture = data.profilePicture;
            _this.employeeForm.setValue({
                fullName: data.fullName,
                employeeId: data.employeeId,
                subscriptionId: data.subscriptionId,
                RaceId: data.RaceId,
                dob: moment__WEBPACK_IMPORTED_MODULE_9__(data.dob).format("YYYY-MM-DD"),
                gender: data.gender,
                // ReligionCId: data.ReligionCId,
                phoneNumber: data.phoneNumber,
                jobCategory: data.jobCategory,
                positionId: data.positionId,
                joiningDate: moment__WEBPACK_IMPORTED_MODULE_9__(data.joiningDate).format("YYYY-MM-DD"),
                email: data.email,
                // citizenShip: data.citizenShip,
                nationality: data.nationality,
                totalObtain: data.totalObtain,
                // businessFax: data.businessFax,
                password: '',
                branchAllocation: data.branchAllocation
            });
        }, function (err) {
        });
    };
    EmployeeCreateComponent.prototype.showPassword = function () {
        var x = document.getElementById("passwordInput");
        if (x['type'] === "password") {
            x['type'] = "text";
        }
        else {
            x['type'] = "password";
        }
    };
    EmployeeCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee-create',
            template: __webpack_require__(/*! ./employee-create.component.html */ "./src/app/routes/employee-management/employee-create/employee-create.component.html"),
            styles: [__webpack_require__(/*! ./employee-create.component.scss */ "./src/app/routes/employee-management/employee-create/employee-create.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _core_services_remote_service_reqResObj_Request__WEBPACK_IMPORTED_MODULE_7__["Request"],
            _core_services_remote_service_remote_api_service__WEBPACK_IMPORTED_MODULE_4__["RemoteApiService"],
            _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], EmployeeCreateComponent);
    return EmployeeCreateComponent;
}());



/***/ }),

/***/ "./src/app/routes/employee-management/employee-management.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/routes/employee-management/employee-management.module.ts ***!
  \**************************************************************************/
/*! exports provided: EmployeeManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeManagementModule", function() { return EmployeeManagementModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _employee_management_employee_management_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee-management/employee-management.component */ "./src/app/routes/employee-management/employee-management/employee-management.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _employee_create_employee_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employee-create/employee-create.component */ "./src/app/routes/employee-management/employee-create/employee-create.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");






var routes = [
    { path: '', component: _employee_management_employee_management_component__WEBPACK_IMPORTED_MODULE_2__["EmployeeManagementComponent"] },
    { path: 'employee', component: _employee_create_employee_create_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeCreateComponent"] }
];
var EmployeeManagementModule = /** @class */ (function () {
    function EmployeeManagementModule() {
    }
    EmployeeManagementModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_employee_management_employee_management_component__WEBPACK_IMPORTED_MODULE_2__["EmployeeManagementComponent"], _employee_create_employee_create_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeCreateComponent"]],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ]
        })
    ], EmployeeManagementModule);
    return EmployeeManagementModule;
}());



/***/ }),

/***/ "./src/app/routes/employee-management/employee-management/employee-management.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/routes/employee-management/employee-management/employee-management.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-4 form-group\">\r\n  <div class=\"col-md-6 col-sm-12\">\r\n    <h4 class=\" header-titel\">Employee Management</h4>\r\n  </div>\r\n  <div class=\"col-md-6 col-sm-12 text-right\">\r\n    <!-- <button type=\"button\" class=\"btn btn-transparent\"> <img src=\"./assets/icon/filter.svg\"\r\n        alt=\"Generic placeholder image\"></button> -->\r\n    <input type=\"text\" placeholder=\"Search\" class=\"search-field\" name=\"search\" ngModel\r\n      (ngModelChange)=\"searchFilter($event)\">\r\n\r\n    <button type=\"button\" routerLink=\"/employeeManagement/employee\" class=\"btn btn-primary\">New Employee</button>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-12 col-xs-12 \">\r\n    <table class=\"table table-borderless app-table table-striped\">\r\n      <thead>\r\n        <tr>\r\n          <th>S.No</th>\r\n          <th>Name</th>\r\n          <th>Employee ID</th>\r\n          <th>Email</th>\r\n          <th>Position</th>\r\n          <th>Contact number</th>\r\n          <th>Branch</th>\r\n          <th>Location</th>\r\n          <th></th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let item of filterList | paginate: { itemsPerPage: 10, currentPage: p } ; let i = index\">\r\n          <!-- <tr *ngFor=\"let item of courseList; index as i\"> -->\r\n          <td>{{ 10 * (p - 1) + i +1}}</td>\r\n          <td (click)=\"viewEmployee(item.id);visitorDetailModal.show()\"><a>{{item.fullName}}</a></td>\r\n\r\n          <td>{{item.employeeId}}</td>\r\n          <td>{{item?.email}}</td>\r\n          <td>{{item?.positionId.name}}</td>\r\n          <td>{{item?.phoneNumber}}</td>\r\n          <td>\r\n            <ng-container *ngIf=\"item?.branchAllocation != '' && item?.branchAllocation != null\">\r\n              {{item?.branchAllocation.branchName}}</ng-container>\r\n          </td>\r\n          <td>\r\n            <ng-container *ngIf=\"item?.branchAllocation != '' && item?.branchAllocation != null\">\r\n              {{item?.branchAllocation.location}}</ng-container>\r\n          </td>\r\n          <td>\r\n            <div class=\"btn-group edit-button\" dropdown>\r\n              <button id=\"button-basic\" dropdownToggle type=\"button\" class=\" bg-transparent border-0\"\r\n                aria-controls=\"dropdown-basic\">\r\n                <span class=\"material-icons\">\r\n                  more_horiz\r\n                </span>\r\n              </button>\r\n              <ul id=\"dropdown-basic\" *dropdownMenu class=\"dropdown-menu dropdown-menu-right\" role=\"menu\"\r\n                aria-labelledby=\"button-basic\">\r\n                <li role=\" px-2 cursor\" (click)=\"editEmployee(item.id)\">\r\n                  <button class=\"bg-transparent border-0\">Edit</button>\r\n                </li>\r\n                <li class=\"divider\"></li>\r\n                <li role=\" px-2 cursor\" (click)=\"deleteEmployee(item.id)\">\r\n                  <button class=\"bg-transparent border-0\">Delete</button>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n\r\n\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <div class=\"text-center col-md-12 col-xs-12\">\r\n    <div class=\"row\">\r\n      <div class=\"text-center col-md-12 col-xs-12\">\r\n        <div *ngIf=\"!!loader\">\r\n          <div class=\"spinner-box my-0 mx-auto\">\r\n            <div class=\"pulse-container\">\r\n              <div class=\"pulse-bubble pulse-bubble-1\"></div>\r\n              <div class=\"pulse-bubble pulse-bubble-2\"></div>\r\n              <div class=\"pulse-bubble pulse-bubble-3\"></div>\r\n            </div>\r\n          </div>\r\n          <p class=\"text-loader text-bold\">Loading</p>\r\n        </div>\r\n        <h4 *ngIf=\"filterList?.length==0\" class=\"p-5 text-dark text-center\">No data to display</h4>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-6 col-xs-12\">\r\n    <label class=\"fs14\">Showing {{10 * (p - 1) + i }} to {{10 * p}} of {{filterList?.length}} entries</label>\r\n  </div>\r\n\r\n  <div class=\"col-md-6 col-xs-12 text-right\" *ngIf=\"filterList?.length !==0\">\r\n    <pagination-controls (pageChange)=\"p = $event\" responsive=\"true\" previousLabel=\"Previous\" nextLabel=\"Next\">\r\n    </pagination-controls>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"modal fade user-detai\" bsModal #visitorDetailModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\"\r\n  role=\"dialog\" aria-labelledby=\"dialog-static-name\">\r\n  <div class=\"modal-dialog modal-dialog-centered modal-lg\">\r\n    <div class=\"modal-content\">\r\n      <button type=\"button\" class=\"close\" (click)=\"visitorDetailModal.hide()\">\r\n        <span aria-hidden=\"true\" class=\"x\">&times;</span>\r\n      </button>\r\n      <div class=\"modal-body\">\r\n        <div class=\"shadow-sm card border-0\">\r\n          <div class=\"card-body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6 col-xs-12\">\r\n                <div class=\"media\">\r\n                  <!-- <img src=\"/assets/images/user.jpg\"\r\n                  alt=\"Generic placeholder image\" *ngIf=\"employeeloginData?.profilePicture == ''\" />\r\n                  <img [src]=\"employeeloginData?.profilePicture\" class=\"image-size\" *ngIf=\"employeeloginData.profilePicture != ''\" /> -->\r\n\r\n                  <!-- <div class=\"media-body\">\r\n                    <h5 class=\"mt-0\">{{viewEmployeeData?.fullName}}</h5>\r\n\r\n                    <label class=\"detals\">{{viewEmployeeData?.email}}</label>\r\n                    <label class=\"detals\">{{viewEmployeeData?.phoneNumber}}</label>\r\n                    <label class=\"detals\">{{viewEmployeeData?.citizenShip}}</label>\r\n                  </div> -->\r\n                </div>\r\n                <h5>View User</h5>\r\n              </div>\r\n              <div class=\"col-md-6 col-xs-12 text-right\">\r\n                <button class=\"btn btn-sm btn-primary\" type=\"button\" (click)=\"resetPassword(viewEmployeeData?.id)\">Reset Password</button>\r\n                <h4 class=\"mt-4 mb-0 px-4 edit\" (click)=\"editEmployee(viewEmployeeData.id)\">Edit</h4>\r\n                <!-- <h5 class=\"mt-0  mb-0 days-ago\">{{viewEmployeeData.lastActivityDate}} days ago</h5> -->\r\n              </div>\r\n              <div class=\"col-md-12 col-xs-12\">\r\n                <hr>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6 col-xs-6\">\r\n                <!-- <p>Login ID: {{viewEmployeeData?.id}}</p>\r\n                <div class=\"d-flex\">\r\n                  <p>Subscription ID:</p><span class=\"px-2\">{{viewEmployeeData?.subscriptionId}}</span>\r\n                </div>\r\n                <div class=\"d-flex\">\r\n                  <p>Employee ID:</p><span class=\"px-2\">{{viewEmployeeData?.employeeId}}</span>\r\n                </div>\r\n                <div class=\"d-flex\">\r\n                  <p>Race ID:</p><span class=\"px-2\">{{viewEmployeeData?.RaceId}}</span>\r\n                </div>\r\n                <div class=\"d-flex\">\r\n                  <p>DOB :</p><span class=\"px-2\">{{viewEmployeeData?.dob | slice:0:10}}</span>\r\n                </div> -->\r\n                <p>User Name: {{viewEmployeeData?.fullName}}</p>\r\n                <div class=\"d-flex\">\r\n                  <p>Last Name:</p><span class=\"px-2\">{{viewEmployeeData?.lastName}}</span>\r\n                </div>\r\n                <div class=\"d-flex\">\r\n                  <p>First Name :</p><span class=\"px-2\">{{viewEmployeeData?.firstName}}</span>\r\n                </div>\r\n                <!-- <div class=\"d-flex\"><p>IsBumi :</p><span class=\"px-2\">Lorem Ipsum</span></div> -->\r\n              </div>\r\n              <div class=\"col-md-6 col-xs-6\">\r\n                <div class=\"d-flex\">\r\n                  <p>Status:</p><span class=\"px-2\">{{viewEmployeeData?.userstatus == true?'Active':'Inactive'}}</span>\r\n                </div>\r\n                <div class=\"d-flex\">\r\n                  <p>Role:</p><span class=\"px-2\">{{viewEmployeeData?.role}}</span>\r\n                </div>\r\n                <div class=\"d-flex\">\r\n                  <p>Email:</p><span class=\"px-2\">{{viewEmployeeData?.email}}</span>\r\n                </div>\r\n                <!-- <p>Password: {{viewEmployeeData.id}}</p> -->\r\n                <!-- <div class=\"d-flex\">\r\n                  <p>Gender</p><span class=\"px-2\">\r\n                    <ng-container *ngIf=\"viewEmployeeData?.gender == '1'\">Male</ng-container>\r\n                    <ng-container *ngIf=\"viewEmployeeData?.gender == '2'\">Female</ng-container>\r\n                  </span>\r\n                </div>\r\n                <div class=\"d-flex\">\r\n                  <p>Religion CId:</p><span class=\"px-2\">{{viewEmployeeData?.ReligionCId}}</span>\r\n                </div>\r\n                <div class=\"d-flex\">\r\n                  <p>Branch:</p><span class=\"px-2\"\r\n                    *ngIf=\"viewEmployeeData?.branchAllocation != '' || viewEmployeeData?.branchAllocation != 'null'\">{{viewEmployeeData?.branchAllocation.branchName}}</span>\r\n                </div>\r\n                <div class=\"d-flex\">\r\n                  <p>Role of the employee:</p><span class=\"px-2\">{{viewEmployeeData?.role}}</span>\r\n                </div>\r\n                <div class=\"d-flex\">\r\n                  <p>Location:</p><span class=\"px-2\"\r\n                    *ngIf=\"viewEmployeeData?.branchAllocation != '' || viewEmployeeData?.branchAllocation != 'null'\">{{viewEmployeeData?.branchAllocation.location}}</span>\r\n                </div> -->\r\n\r\n                <!-- <div class=\"form-group\">\r\n                  <label class=\"\">Lock user</label>\r\n                  <label class=\"switch\">\r\n                    <input type=\"checkbox\">\r\n                    <span class=\"slider round\"></span>\r\n                  </label>\r\n\r\n                </div> -->\r\n              </div>\r\n            </div>\r\n            <hr>\r\n            <fieldset>\r\n              <h6>Data Information</h6>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6 col-xs-6\">\r\n                  <p>Created By: {{viewEmployeeData?.createdBy}} {{viewEmployeeData?.createdAt | date:'short'}}</p>\r\n                </div>\r\n                <div class=\"col-md-6 col-xs-6\">\r\n                  <p>Updated By: {{viewEmployeeData?.modifiedBy}} {{viewEmployeeData?.updatedAt | date:'short'}}</p>\r\n                </div>\r\n              </div>\r\n            </fieldset>\r\n          </div>\r\n        </div>\r\n        <div class=\"text-right py-3 \">\r\n          <!-- <button class=\"btn btn-primary px-4 py-2\">Save the Changes</button> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/employee-management/employee-management/employee-management.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/routes/employee-management/employee-management/employee-management.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Poppins&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Merriweather:300,400,500i,700,900&display=swap\");\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 51px;\n  height: 32px; }\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 30px;\n  width: 30px;\n  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.135216);\n  left: 0px;\n  bottom: 0px;\n  background-color: white;\n  transition: .4s; }\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  box-shadow: inset 5px -1px 5px rgba(0, 0, 0, 0.135216);\n  border: 1px solid #f3e4e447;\n  background-color: #fff;\n  transition: .4s; }\n.switch input:checked + .slider {\n  background-color: #3B3984; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL2VtcGxveWVlLW1hbmFnZW1lbnQvZW1wbG95ZWUtbWFuYWdlbWVudC9FOlxcZnJvbnRlbmRfYWdpbGVlZGdlX2hxX2Ntcy9zcmNcXGFwcFxcc2hhcmVkXFxzdHlsZXNcXGFic3RyYWN0c1xcZm9udHMuc2NzcyIsInNyYy9hcHAvcm91dGVzL2VtcGxveWVlLW1hbmFnZW1lbnQvZW1wbG95ZWUtbWFuYWdlbWVudC9FOlxcZnJvbnRlbmRfYWdpbGVlZGdlX2hxX2Ntcy9zcmNcXGFwcFxccm91dGVzXFxlbXBsb3llZS1tYW5hZ2VtZW50XFxlbXBsb3llZS1tYW5hZ2VtZW50XFxlbXBsb3llZS1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLDJFQUFZO0FBRVoscUdBQVk7QUNDWjtFQUNJLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVksRUFBQTtBQUVoQjtFQUNJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCwrQ0FBK0M7RUFDL0MsU0FBUztFQUNULFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsZUFBZSxFQUFBO0FBRW5CO0VBQ0ksa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1Qsc0RBQXNEO0VBQ3RELDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsZUFBZSxFQUFBO0FBRW5CO0VBQ0kseUJBQXdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9yb3V0ZXMvZW1wbG95ZWUtbWFuYWdlbWVudC9lbXBsb3llZS1tYW5hZ2VtZW50L2VtcGxveWVlLW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1NZXJyaXdlYXRoZXI6MzAwLDQwMCw1MDBpLDcwMCw5MDAmZGlzcGxheT1zd2FwJyk7IiwiQGltcG9ydCcuLi8uLi8uLi9zaGFyZWQvc3R5bGVzL2Fic3RyYWN0cy9hYnN0cmFjdHMtZGlyLnNjc3MnO1xyXG5cclxuXHJcblxyXG4uc3dpdGNoIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA1MXB4O1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG59XHJcbi5zbGlkZXI6YmVmb3JlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCA1cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xMzUyMTYpO1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHRyYW5zaXRpb246IC40cztcclxufVxyXG4uc2xpZGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDVweCAtMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTM1MjE2KTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmM2U0ZTQ0NztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB0cmFuc2l0aW9uOiAuNHM7XHJcbn1cclxuLnN3aXRjaCBpbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzQjM5ODQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/routes/employee-management/employee-management/employee-management.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/routes/employee-management/employee-management/employee-management.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: EmployeeManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeManagementComponent", function() { return EmployeeManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_remote_service_remote_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/remote-service/remote-api.service */ "./src/app/core/services/remote-service/remote-api.service.ts");
/* harmony import */ var _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/constants/AppConstants */ "./src/app/core/constants/AppConstants.ts");
/* harmony import */ var _core_constants_apiUrlConstants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/constants/apiUrlConstants */ "./src/app/core/constants/apiUrlConstants.ts");
/* harmony import */ var _core_services_remote_service_reqResObj_Request__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/services/remote-service/reqResObj/Request */ "./src/app/core/services/remote-service/reqResObj/Request.ts");







var EmployeeManagementComponent = /** @class */ (function () {
    function EmployeeManagementComponent(router, request, api) {
        this.router = router;
        this.request = request;
        this.api = api;
        this.p = 1;
        this.loader = true;
        this.i1state = true;
        this.i2state = false;
        this.i3state = false;
        this.i = 1;
        this.i1 = this.i;
        this.i2 = this.i1 + 1;
        this.i3 = this.i2 + 1;
        this.pageSize = 10;
    }
    EmployeeManagementComponent.prototype.ngOnInit = function () {
        this.getloginEmployee();
        this.getEmployee();
    };
    EmployeeManagementComponent.prototype.getEmployee = function () {
        var _this = this;
        // console.log(data,"FormData")
        this.request.url = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].SERVER_URI_OBJECT['core'];
        this.request.type = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].API_GET;
        this.request.reqModule = _core_constants_apiUrlConstants__WEBPACK_IMPORTED_MODULE_5__["ApiUrlConstants"].GET_ALL_EMPLOYEE;
        this.request.params = "";
        this.api.requestObject(this.request).then(function (data) {
            _this.loader = false;
            _this.employeeData = data;
            _this.filterList = _this.employeeData;
            _this.employeeloginData = data.find(function (empDetails) { return empDetails.id == localStorage.getItem('userId'); });
            console.log(_this.employeeData, "DATAEMPLOYEE");
            // this.router.navigate(['/employeeManagement']);
        }, function (err) {
            // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
            // this.errLogin = err.error;
        });
    };
    EmployeeManagementComponent.prototype.getToday = function () {
        return new Date().toISOString().split('T')[0];
    };
    EmployeeManagementComponent.prototype.numberOnly = function (event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    };
    EmployeeManagementComponent.prototype.getloginEmployee = function () {
        var _this = this;
        // console.log(data,"FormData")
        this.request.url = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].SERVER_URI_OBJECT['core'];
        this.request.type = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].API_GET;
        this.request.reqModule = _core_constants_apiUrlConstants__WEBPACK_IMPORTED_MODULE_5__["ApiUrlConstants"].GET_ALL_EMPLOYEE;
        this.request.params = "";
        this.api.requestObject(this.request).then(function (result) {
            _this.loader = false;
            _this.employeeData = result;
            _this.filterList = result;
            _this.employeeloginData = result.find(function (empDetails) { return empDetails.id == localStorage.getItem('userId'); });
            console.log(_this.employeeData, "DATAEMPLOYEE");
            // this.router.navigate(['/employeeManagement']);
        }, function (err) {
            // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
            // this.errLogin = err.error;
        });
    };
    EmployeeManagementComponent.prototype.viewEmployee = function (id) {
        var _this = this;
        this.getEmployee();
        this.itemid = id;
        this.employeeData.map(function (data) {
            if (id == data['id']) {
                // data['profilePicture'] = './assert/' + data['profilePicture'];
                _this.viewEmployeeData = data;
                // this.viewEmployeeData.profilePicture = './assets/images/' + data['profilePicture'];
                console.log(_this.viewEmployeeData, "ViewEmployee");
            }
        });
    };
    EmployeeManagementComponent.prototype.editEmployee = function (itemid) {
        this.itemid = itemid;
        console.log(this.itemid, "EditID");
        var id = this.itemid;
        this.router.navigate(['/employeeManagement/employee'], { queryParams: { id: this.itemid } });
    };
    EmployeeManagementComponent.prototype.searchFilter = function (text) {
        this.filterList = this.employeeData.filter(function (result) {
            return JSON.stringify(result.fullName).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
                JSON.stringify(result.employeeId).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
                JSON.stringify(result.email).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
                JSON.stringify(result.positionId).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
                JSON.stringify(result.phoneNumber).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
                JSON.stringify(result).toLocaleLowerCase().includes(text.toLocaleLowerCase());
        });
    };
    EmployeeManagementComponent.prototype.deleteEmployee = function (itemid) {
        var _this = this;
        var data = {
            userstatus: false
        };
        this.request.url = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].SERVER_URI_OBJECT['core'];
        this.request.type = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].API_POST;
        this.request.reqModule = _core_constants_apiUrlConstants__WEBPACK_IMPORTED_MODULE_5__["ApiUrlConstants"].Update_EMPLOYEE;
        this.request.params = itemid;
        this.request.body = data;
        this.api.requestObject(this.request).then(function (data) {
            console.log(data, "dataLogin");
            _this.getEmployee();
            // this.router.navigate(['/employeeManagement']);
        }, function (err) {
            // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
            // this.errLogin = err.error;
        });
    };
    EmployeeManagementComponent.prototype.resetPassword = function (data) {
        this.router.navigate(['login/resetPassword/' + data]);
    };
    EmployeeManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee-management',
            template: __webpack_require__(/*! ./employee-management.component.html */ "./src/app/routes/employee-management/employee-management/employee-management.component.html"),
            styles: [__webpack_require__(/*! ./employee-management.component.scss */ "./src/app/routes/employee-management/employee-management/employee-management.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_services_remote_service_reqResObj_Request__WEBPACK_IMPORTED_MODULE_6__["Request"],
            _core_services_remote_service_remote_api_service__WEBPACK_IMPORTED_MODULE_3__["RemoteApiService"]])
    ], EmployeeManagementComponent);
    return EmployeeManagementComponent;
}());



/***/ })

}]);
//# sourceMappingURL=employee-management-employee-management-module.js.map