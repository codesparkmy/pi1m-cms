(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["roles-roles-module"],{

/***/ "./src/app/routes/roles/create-role/create-role.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/routes/roles/create-role/create-role.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-3\">\r\n    <label for=\"inputPassword\" class=\"col-form-label\">Role Name</label>\r\n  </div>\r\n  <div class=\"col-4\">\r\n    <form [formGroup]=\"roleForm\">\r\n      <div class=\"form-group row\">\r\n        <input type=\"text\" class=\"form-control\" id=\"inputPassword\" formControlName=\"roleName\" placeholder=\"role name\"\r\n          [readonly]=\"isReadOnly\">\r\n        <span *ngIf=\"roleForm.get('roleName').hasError('required') && roleForm.get('roleName').touched\"\r\n          class=\"text-danger text-12\">Name required</span>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div class=\"col-5 text-right\">\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"saveData()\">\r\n      {{isUpdate == false ?'Save':'Update'}}</button>\r\n  </div>\r\n</div>\r\n<hr>\r\n<div class=\"row\">\r\n  <div class=\"col-md-12 col-xs-12 \">\r\n    <table class=\"table rounded-top table-borderless app-table table-striped\">\r\n      <thead>\r\n        <tr>\r\n          <th class=\"txtAln\">Report</th>\r\n          <th class=\"txtAln\">View</th>\r\n          <th class=\"txtAln\">Add</th>\r\n          <th class=\"txtAln\">Edit</th>\r\n          <th class=\"txtAln\">Delete</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let item of reportsData;index as i\">\r\n          <td>{{item?.name}}</td>\r\n          <td>\r\n            <div class=\"form-check\">\r\n              <mat-checkbox class=\"example-margin\" [(ngModel)]=\"item.viewPermission\" id=\"invalidView_{{i}}\" (click)=\"getEvent(item, i+1)\">\r\n              </mat-checkbox>\r\n            </div>\r\n          </td>\r\n          <td>\r\n            <div class=\"form-check\">\r\n              <mat-checkbox class=\"example-margin\" [(ngModel)]=\"item.addPermission\" id=\"invalidAdd_{{i}}\" (click)=\"getEvent(item, i+1)\">\r\n              </mat-checkbox>\r\n            </div>\r\n          </td>\r\n          <td>\r\n            <div class=\"form-check\">\r\n              <mat-checkbox class=\"example-margin\" [(ngModel)]=\"item.editPermission\" id=\"invalidEdit_{{i}}\" (click)=\"getEvent(item, i+1)\">\r\n              </mat-checkbox>\r\n            </div>\r\n          </td>\r\n          <td>\r\n            <div class=\"form-check\">\r\n              <mat-checkbox class=\"example-margin\" [(ngModel)]=\"item.deletePermission\" id=\"invalidDelete_{{i}}\" (click)=\"getEvent(item, i+1)\">\r\n              </mat-checkbox>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/roles/create-role/create-role.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/routes/roles/create-role/create-role.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9yb2xlcy9jcmVhdGUtcm9sZS9jcmVhdGUtcm9sZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/routes/roles/create-role/create-role.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/routes/roles/create-role/create-role.component.ts ***!
  \*******************************************************************/
/*! exports provided: CreateRoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateRoleComponent", function() { return CreateRoleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/constants/AppConstants */ "./src/app/core/constants/AppConstants.ts");
/* harmony import */ var src_app_core_services_remote_service_remote_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/remote-service/remote-api.service */ "./src/app/core/services/remote-service/remote-api.service.ts");
/* harmony import */ var src_app_core_services_remote_service_reqResObj_Request__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/remote-service/reqResObj/Request */ "./src/app/core/services/remote-service/reqResObj/Request.ts");
/* harmony import */ var _core_constants_apiUrlConstants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/constants/apiUrlConstants */ "./src/app/core/constants/apiUrlConstants.ts");
/* harmony import */ var _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/alert/alert.service */ "./src/app/routes/services/alert/alert.service.ts");









var CreateRoleComponent = /** @class */ (function () {
    function CreateRoleComponent(activateRoute, request, api, router, alert) {
        var _this = this;
        this.activateRoute = activateRoute;
        this.request = request;
        this.api = api;
        this.router = router;
        this.alert = alert;
        this.roleList = [];
        this.itemid = "";
        this.reportsData = [];
        this.changedPermissionObj = {};
        this.isReadOnly = false;
        this.isUpdate = false;
        this.roleId = "";
        this.getEvent = function (event, i) {
            if (!event.subpageId) {
                event.subpageId = i;
            }
            if (!event.pageId) {
                event.pageId = _this.pageId;
            }
            _this.changedPermissionObj[event.subpageId] = event;
        };
    }
    CreateRoleComponent.prototype.ngOnInit = function () {
        this.setRoleForm();
        this.checkPrevId();
    };
    CreateRoleComponent.prototype.checkPrevId = function () {
        var _this = this;
        this.activateRoute.queryParams.subscribe(function (params) {
            if (params.id) {
                _this.isUpdate = true;
                _this.roleId = params.id;
                _this.getPermissionsByRoleId(params.id);
            }
            else
                _this.getReportsList();
        });
    };
    CreateRoleComponent.prototype.getPermissionsByRoleId = function (id) {
        var _this = this;
        this.request.url = src_app_core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].SERVER_URI_OBJECT['core'];
        this.request.type = src_app_core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].API_GET;
        this.request.reqModule = _core_constants_apiUrlConstants__WEBPACK_IMPORTED_MODULE_7__["ApiUrlConstants"].GET_ROLE_BY_ID;
        this.request.params = id;
        this.api.requestObject(this.request).then(function (data) {
            if (data && data != undefined) {
                var dataArray = data[0];
                _this.setUpdateData(dataArray);
            }
        }, function (err) {
            console.error(err);
        });
    };
    CreateRoleComponent.prototype.setRoleForm = function () {
        this.roleForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            roleName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    };
    CreateRoleComponent.prototype.setUpdateData = function (dataArray) {
        this.pageId = dataArray['id'];
        this.roleForm.patchValue({
            roleName: dataArray.name
        });
        var tempList = dataArray.subpage;
        for (var i = 0; i < tempList.length; i++) {
            this.reportsData.push({
                "addPermission": tempList[i].permissionList.addPermission,
                "editPermission": tempList[i].permissionList.editPermission,
                "deletePermission": tempList[i].permissionList.deletePermission,
                "viewPermission": tempList[i].permissionList.viewPermission,
                "subpageId": tempList[i].permissionList['subpageId'],
                "name": tempList[i]['name'],
                "pageId": tempList[i].permissionList['pageId']
            });
        }
        this.isReadOnly = true;
    };
    CreateRoleComponent.prototype.saveData = function () {
        var _this = this;
        if (this.isUpdate == false) {
            var tempArr = JSON.parse(JSON.stringify(this.reportsData));
            tempArr.forEach(function (v) { delete v.name; });
            var tempObj = {
                "name": this.roleForm.value['roleName'],
                "permissionList": tempArr
            };
            this.request.url = src_app_core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].SERVER_URI_OBJECT['core'];
            this.request.type = src_app_core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].API_POST;
            this.request.reqModule = _core_constants_apiUrlConstants__WEBPACK_IMPORTED_MODULE_7__["ApiUrlConstants"].CREATE_ROLE;
            this.request.params = "";
            this.request.body = tempObj;
            this.api.requestObject(this.request).then(function (data) {
                _this.alert.stickyAlerShow('Created Successful', 'alert-success');
                _this.router.navigate(['/roles']);
            }, function (err) {
                console.error(err);
            });
        }
        else {
            var updateArr = [];
            for (var key in this.changedPermissionObj) {
                updateArr.push({
                    "pageId": this.changedPermissionObj[key]['pageId'],
                    "roleId": this.roleId,
                    "subpageId": this.changedPermissionObj[key]['subpageId'],
                    "permission": {
                        "addPermission": this.changedPermissionObj[key]['addPermission'],
                        "editPermission": this.changedPermissionObj[key]['editPermission'],
                        "deletePermission": this.changedPermissionObj[key]['deletePermission'],
                        "viewPermission": this.changedPermissionObj[key]['viewPermission']
                    }
                });
            }
            this.request.url = src_app_core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].SERVER_URI_OBJECT['core'];
            this.request.type = src_app_core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].API_POST;
            this.request.reqModule = _core_constants_apiUrlConstants__WEBPACK_IMPORTED_MODULE_7__["ApiUrlConstants"].UPDATE_PERMISSION_BY_ROLE;
            this.request.params = "";
            this.request.body = updateArr;
            this.api.requestObject(this.request).then(function (data) {
                if (data.message) {
                    _this.alert.stickyAlerShow('Updated Successful', 'alert-success');
                    _this.router.navigate(['/roles']);
                }
            }, function (err) {
                console.error(err);
            });
        }
    };
    CreateRoleComponent.prototype.getReportsList = function () {
        var _this = this;
        this.request.url = src_app_core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].SERVER_URI_OBJECT['core'];
        this.request.type = src_app_core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].API_GET;
        this.request.reqModule = _core_constants_apiUrlConstants__WEBPACK_IMPORTED_MODULE_7__["ApiUrlConstants"].GET_ALL_REPORTS;
        this.request.params = "";
        this.api.requestObject(this.request).then(function (data) {
            var testData = data;
            for (var i = 0; i < testData.length; i++) {
                _this.reportsData.push({
                    "addPermission": false,
                    "editPermission": false,
                    "deletePermission": false,
                    "viewPermission": false,
                    "subpageId": testData[i]['id'],
                    "name": testData[i]['name'],
                    "pageId": testData[i]['pageId']
                });
            }
        }, function (err) {
            console.error(err);
        });
    };
    CreateRoleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-role',
            template: __webpack_require__(/*! ./create-role.component.html */ "./src/app/routes/roles/create-role/create-role.component.html"),
            styles: [__webpack_require__(/*! ./create-role.component.scss */ "./src/app/routes/roles/create-role/create-role.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_core_services_remote_service_reqResObj_Request__WEBPACK_IMPORTED_MODULE_6__["Request"],
            src_app_core_services_remote_service_remote_api_service__WEBPACK_IMPORTED_MODULE_5__["RemoteApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"]])
    ], CreateRoleComponent);
    return CreateRoleComponent;
}());



/***/ }),

/***/ "./src/app/routes/roles/roles.module.ts":
/*!**********************************************!*\
  !*** ./src/app/routes/roles/roles.module.ts ***!
  \**********************************************/
/*! exports provided: RolesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesModule", function() { return RolesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _roles_roles_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./roles/roles.component */ "./src/app/routes/roles/roles/roles.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _create_role_create_role_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-role/create-role.component */ "./src/app/routes/roles/create-role/create-role.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");








var routes = [
    { path: '', component: _roles_roles_component__WEBPACK_IMPORTED_MODULE_2__["RolesComponent"] },
    { path: 'createRole', component: _create_role_create_role_component__WEBPACK_IMPORTED_MODULE_5__["CreateRoleComponent"] }
];
var RolesModule = /** @class */ (function () {
    function RolesModule() {
    }
    RolesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_roles_roles_component__WEBPACK_IMPORTED_MODULE_2__["RolesComponent"], _create_role_create_role_component__WEBPACK_IMPORTED_MODULE_5__["CreateRoleComponent"]],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"]
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ]
        })
    ], RolesModule);
    return RolesModule;
}());



/***/ }),

/***/ "./src/app/routes/roles/roles/roles.component.html":
/*!*********************************************************!*\
  !*** ./src/app/routes/roles/roles/roles.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-4 form-group\">\r\n  <div class=\"col-md-6 col-sm-12\">\r\n    <h4 class=\" header-titel\">Roles and Permission</h4>\r\n  </div>\r\n  <div class=\"col-md-6 col-sm-12 text-right\">\r\n    <!-- <input type=\"text\" placeholder=\"Search\" class=\"search-field\" name=\"search\" ngModel\r\n      (ngModelChange)=\"searchFilter($event)\"> -->\r\n    <button type=\"button\" routerLink=\"/roles/createRole\" class=\"btn btn-primary\">Create Role</button>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-12 col-xs-12 \">\r\n    <table class=\"table rounded-top table-borderless app-table table-striped\">\r\n      <thead>\r\n        <tr>\r\n          <th>S.No</th>\r\n          <th>Name</th>\r\n          <th>Role Id</th>\r\n          <th>Actions</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let item of roleData  | paginate: { itemsPerPage: 10, currentPage: p } ;  let i = index\">\r\n          <td>{{ 10 * (p - 1) + i +1}}</td>\r\n          <td>{{item?.name}}</td>\r\n          <td>{{item?.id}}</td>\r\n          <td>\r\n            <div class=\"btn-group edit-button\" dropdown>\r\n              <button id=\"button-basic\" dropdownToggle type=\"button\" class=\" bg-transparent border-0\"\r\n                aria-controls=\"dropdown-basic\">\r\n                <span class=\"material-icons\">\r\n                  more_horiz\r\n                </span>\r\n              </button>\r\n              <ul id=\"dropdown-basic\" *dropdownMenu class=\"dropdown-menu dropdown-menu-right\" role=\"menu\"\r\n                aria-labelledby=\"button-basic\">\r\n                <li role=\" px-2 cursor\" (click)=\"editRole(item.id)\">\r\n                  <button class=\"bg-transparent border-0\">Edit</button>\r\n                </li>\r\n                <!-- <li class=\"divider\"></li>\r\n                <li role=\" px-2 cursor\" (click)=\"deleteEmployee(item.id)\">\r\n                  <button class=\"bg-transparent border-0\">Delete</button>\r\n                </li> -->\r\n              </ul>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <div class=\"text-center col-md-12 col-xs-12\">\r\n    <div class=\"row\">\r\n      <div class=\"text-center col-md-12 col-xs-12\">\r\n        <div *ngIf=\"!!loader\">\r\n          <div class=\"spinner-box my-0 mx-auto\">\r\n            <div class=\"pulse-container\">\r\n              <div class=\"pulse-bubble pulse-bubble-1\"></div>\r\n              <div class=\"pulse-bubble pulse-bubble-2\"></div>\r\n              <div class=\"pulse-bubble pulse-bubble-3\"></div>\r\n            </div>\r\n          </div>\r\n          <p class=\"text-loader text-bold\">Loading</p>\r\n        </div>\r\n        <h4 *ngIf=\"filterList?.length==0\" class=\"p-5 text-dark text-center\">No data to display</h4>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-6 col-xs-12\">\r\n    <label class=\"fs14\">Showing {{10 * (p - 1) + i }} to {{10 * p}} of {{filterList?.length}} entries</label>\r\n  </div>\r\n\r\n  <div class=\"col-md-6 col-xs-12 text-right\" *ngIf=\"filterList?.length !== 0\">\r\n    <pagination-controls (pageChange)=\"p = $event\" responsive=\"true\" previousLabel=\"Previous\" nextLabel=\"Next\">\r\n    </pagination-controls>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/roles/roles/roles.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/routes/roles/roles/roles.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Poppins&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Merriweather:300,400,500i,700,900&display=swap\");\n.role-select {\n  border-radius: 25px;\n  width: 50%;\n  -moz-text-align-last: center;\n       text-align-last: center;\n  color: #3B3984;\n  border: 1px solid #3B3984; }\n.mt-16 {\n  margin-top: 16px; }\n.clr-text {\n  color: #3b3984;\n  font-weight: 500; }\n.custom_select {\n  color: #3b3984;\n  border: 2px solid #3b3984;\n  background-position-x: 92%;\n  border-radius: 40px;\n  padding: 6px 15px;\n  height: 46px;\n  font-weight: 600; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL3JvbGVzL3JvbGVzL0U6XFxmcm9udGVuZF9hZ2lsZWVkZ2VfaHFfY21zL3NyY1xcYXBwXFxzaGFyZWRcXHN0eWxlc1xcYWJzdHJhY3RzXFxmb250cy5zY3NzIiwic3JjL2FwcC9yb3V0ZXMvcm9sZXMvcm9sZXMvRTpcXGZyb250ZW5kX2FnaWxlZWRnZV9ocV9jbXMvc3JjXFxhcHBcXHJvdXRlc1xccm9sZXNcXHJvbGVzXFxyb2xlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcm91dGVzL3JvbGVzL3JvbGVzL0U6XFxmcm9udGVuZF9hZ2lsZWVkZ2VfaHFfY21zL3NyY1xcYXBwXFxzaGFyZWRcXHN0eWxlc1xcYWJzdHJhY3RzXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSwyRUFBWTtBQUVaLHFHQUFZO0FDRFo7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLDRCQUF1QjtPQUF2Qix1QkFBdUI7RUFDdkIsY0NBaUI7RURDakIseUJDRGlCLEVBQUE7QURHbkI7RUFDRSxnQkFBZ0IsRUFBQTtBQUVsQjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0IsRUFBQTtBQUVsQjtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcm91dGVzL3JvbGVzL3JvbGVzL3JvbGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGlucyZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TWVycml3ZWF0aGVyOjMwMCw0MDAsNTAwaSw3MDAsOTAwJmRpc3BsYXk9c3dhcCcpOyIsIkBpbXBvcnQgXCIuLi8uLi8uLi9zaGFyZWQvc3R5bGVzL2Fic3RyYWN0cy9hYnN0cmFjdHMtZGlyLnNjc3NcIjtcclxuXHJcbi5yb2xlLXNlbGVjdCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICB3aWR0aDogNTAlO1xyXG4gIHRleHQtYWxpZ24tbGFzdDogY2VudGVyO1xyXG4gIGNvbG9yOiAkcHJpbWFyeS1iZztcclxuICBib3JkZXI6IDFweCBzb2xpZCAkcHJpbWFyeS1iZztcclxufVxyXG4ubXQtMTYge1xyXG4gIG1hcmdpbi10b3A6IDE2cHg7XHJcbn1cclxuLmNsci10ZXh0IHtcclxuICBjb2xvcjogIzNiMzk4NDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5jdXN0b21fc2VsZWN0IHtcclxuICBjb2xvcjogIzNiMzk4NDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjM2IzOTg0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogOTIlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgcGFkZGluZzogNnB4IDE1cHg7XHJcbiAgaGVpZ2h0OiA0NnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuIiwiJHdoaXRlIDogI0ZGRkZGRjtcclxuJGJsYWNrIDogIzAwMDAwMDtcclxuXHJcblxyXG4kcHJpbWFyeS1iZy1saWdodCA6ICNmMWY5Zjg7XHJcblxyXG4kcHJpbWFyeS1iZzojM0IzOTg0O1xyXG4vLyAkc2Vjb25kYXJ5LWJnOiMyZmMyYjI7Il19 */"

/***/ }),

/***/ "./src/app/routes/roles/roles/roles.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/routes/roles/roles/roles.component.ts ***!
  \*******************************************************/
/*! exports provided: RolesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesComponent", function() { return RolesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_remote_service_remote_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/remote-service/remote-api.service */ "./src/app/core/services/remote-service/remote-api.service.ts");
/* harmony import */ var _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/constants/AppConstants */ "./src/app/core/constants/AppConstants.ts");
/* harmony import */ var _core_constants_apiUrlConstants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/constants/apiUrlConstants */ "./src/app/core/constants/apiUrlConstants.ts");
/* harmony import */ var _core_services_remote_service_reqResObj_Request__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/services/remote-service/reqResObj/Request */ "./src/app/core/services/remote-service/reqResObj/Request.ts");
/* harmony import */ var _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/alert/alert.service */ "./src/app/routes/services/alert/alert.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");









var RolesComponent = /** @class */ (function () {
    function RolesComponent(router, activateRoute, request, alert, api) {
        this.router = router;
        this.activateRoute = activateRoute;
        this.request = request;
        this.alert = alert;
        this.api = api;
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
    RolesComponent.prototype.ngOnInit = function () {
        // this.activateRoute.queryParams.subscribe(params => {
        //   this.itemid = params["id"];
        // });
        // console.log('id', this.itemid);
        // if (this.itemid) {
        //   // this.viewEmployee()
        // }
        this.getRoleList();
        // this.employeeForm = new FormGroup({
        //   positionId: new FormControl(this.positionId, [Validators.required]),
        // });
    };
    RolesComponent.prototype.getRoleList = function () {
        var _this = this;
        this.request.url = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].SERVER_URI_OBJECT['core'];
        this.request.type = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].API_GET;
        this.request.reqModule = _core_constants_apiUrlConstants__WEBPACK_IMPORTED_MODULE_5__["ApiUrlConstants"].GET_ALL_ROLES;
        this.request.params = "";
        this.api.requestObject(this.request).then(function (data) {
            console.log(data);
            _this.loader = false;
            _this.roleData = data;
            // this.router.navigate(['/employeeManagement']);
        }, function (err) {
            // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
            // this.errLogin = err.error;
        });
    };
    RolesComponent.prototype.viewEmployee = function (id) {
        // this.getEmployee()
        // this.itemid = id;
        // console.log(this.itemid, "SElectedID")
        // this.employeeData.map((data) => {
        //   console.log(data['id'], "employeeDATA")
        //   if (id == data['id']) {
        //     this.viewEmployeeData = data;
        //     console.log(this.viewEmployeeData, "ViewEmployee")
        //   }
        // });
        // this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
        // this.request.type = AppConstants.API_GET;
        // this.request.reqModule = ApiUrlConstants.USER;
        // this.request.params = this.itemid
        // this.request.body = "";
        // console.log(this.request, "reqqqq")
        // this.api.requestObject(this.request).then(data => {
        //   this.employeeForm.setValue({
        //     positionId: data.positionId,
        //   })
        //   console.log(this.employeeForm, "emp id")
        // }, (err) => {
        // });
    };
    RolesComponent.prototype.searchFilter = function (text) {
        // this.filterList = this.employeeData.filter(result =>
        //   JSON.stringify(result.fullName).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
        //   JSON.stringify(result.employeeId).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
        //   JSON.stringify(result.phoneNumber).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
        //   JSON.stringify(result.positionId).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
        //   JSON.stringify(result).toLocaleLowerCase().includes(text.toLocaleLowerCase())
        //   );
    };
    RolesComponent.prototype.updateEmployee = function (data) {
        // let obj = {
        //   positionId: data.positionId,
        // }
        // console.log(data, "FormData")
        // this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
        // this.request.type = AppConstants.API_POST;
        // this.request.reqModule = ApiUrlConstants.Update_EMPLOYEE;
        // this.request.body = obj;
        // this.request.params = this.itemid;
        // this.api.requestObject(this.request).then(data => {
        //   console.log(data, "updatevisitor");
        //   this.visitorDetailModal.hide();
        //   this.getEmployee();
        //   this.alert.stickyAlerShow('Updated Successful', 'alert-success');
        //   // this.router.navigate(['/employeeManagement']);
        // }, (err) => {
        //   // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
        //   // this.errLogin = err.error;
        // });
    };
    RolesComponent.prototype.editRole = function (id) {
        this.router.navigate(['/roles/createRole'], { queryParams: { id: id } });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('visitorDetailModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalDirective"])
    ], RolesComponent.prototype, "visitorDetailModal", void 0);
    RolesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-roles',
            template: __webpack_require__(/*! ./roles.component.html */ "./src/app/routes/roles/roles/roles.component.html"),
            styles: [__webpack_require__(/*! ./roles.component.scss */ "./src/app/routes/roles/roles/roles.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _core_services_remote_service_reqResObj_Request__WEBPACK_IMPORTED_MODULE_6__["Request"], _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"],
            _core_services_remote_service_remote_api_service__WEBPACK_IMPORTED_MODULE_3__["RemoteApiService"]])
    ], RolesComponent);
    return RolesComponent;
}());



/***/ })

}]);
//# sourceMappingURL=roles-roles-module.js.map