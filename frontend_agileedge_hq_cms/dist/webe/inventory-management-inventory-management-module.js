(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inventory-management-inventory-management-module"],{

/***/ "./src/app/routes/inventory-management/inventory-creat/inventory-creat.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/routes/inventory-management/inventory-creat/inventory-creat.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-4 form-group\">\r\n  <div class=\"col-md-6 col-sm-12\">\r\n      <h4 class=\" header-titel\">New Visitor</h4>\r\n  </div>\r\n  <div class=\"col-md-6 col-sm-12 text-right\">\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"row mb-5\">\r\n  <div class=\"col-md-12 col-xs-12\">\r\n      <div class=\"shadow card border-0\">\r\n          <div class=\"card-body\">\r\n              <form>\r\n            <div class=\"row\">\r\n                  <div class=\"col-md-6 col-xs-6\">\r\n                      <div class=\"form-group\">\r\n                          <label>Inventory name</label>\r\n                          <input type=\"text\" class=\"form-control\" >\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"col-md-6 col-xs-6\">\r\n                      <div class=\"form-group\">\r\n                          <label>Device name</label>\r\n                          <input type=\"text\" class=\"form-control\" >\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n\r\n            <div class=\"row\">\r\n                  <div class=\"col-md-6 col-xs-6\">\r\n                      <div class=\"form-group\">\r\n                          <label>Inventory type</label>\r\n                          <input type=\"text\" class=\"form-control\" >\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"col-md-6 col-xs-6\">\r\n                      <div class=\"form-group\">\r\n                          <label>Type  of system</label>\r\n                          <input type=\"text\" class=\"form-control\" >\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n\r\n               <div class=\"row\">\r\n                  <div class=\"col-md-6 col-xs-6\">\r\n                      <div class=\"form-group\">\r\n                          <label>Processor</label>\r\n                          <input type=\"text\" class=\"form-control\" >\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"col-md-6 col-xs-6\">\r\n                      <div class=\"form-group\">\r\n                          <label>Memory</label>\r\n                          <input type=\"text\" class=\"form-control\" >\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n\r\n\r\n               <div class=\"row\">\r\n                  <div class=\"col-md-6 col-xs-6\">\r\n                      <div class=\"form-group\">\r\n                          <label>Serial number</label>\r\n                          <input type=\"text\" class=\"form-control\" >\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"col-md-6 col-xs-6\">\r\n                      <div class=\"form-group\">\r\n                          <label>Version</label>\r\n                          <input type=\"text\" class=\"form-control\" />\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n\r\n             \r\n\r\n\r\n              <div class=\"row mt-3\">\r\n                  <div class=\"col-md-12 col-xs-12 text-right\">\r\n                      <a type=\"button\" class=\"btn btn-primary text-white\">save & Create</a>\r\n                  </div>\r\n              </div>\r\n\r\n          </form>\r\n          </div>\r\n      </div>\r\n  </div>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/routes/inventory-management/inventory-creat/inventory-creat.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/routes/inventory-management/inventory-creat/inventory-creat.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9pbnZlbnRvcnktbWFuYWdlbWVudC9pbnZlbnRvcnktY3JlYXQvaW52ZW50b3J5LWNyZWF0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/routes/inventory-management/inventory-creat/inventory-creat.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/routes/inventory-management/inventory-creat/inventory-creat.component.ts ***!
  \******************************************************************************************/
/*! exports provided: InventoryCreatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryCreatComponent", function() { return InventoryCreatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InventoryCreatComponent = /** @class */ (function () {
    function InventoryCreatComponent() {
    }
    InventoryCreatComponent.prototype.ngOnInit = function () {
    };
    InventoryCreatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inventory-creat',
            template: __webpack_require__(/*! ./inventory-creat.component.html */ "./src/app/routes/inventory-management/inventory-creat/inventory-creat.component.html"),
            styles: [__webpack_require__(/*! ./inventory-creat.component.scss */ "./src/app/routes/inventory-management/inventory-creat/inventory-creat.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InventoryCreatComponent);
    return InventoryCreatComponent;
}());



/***/ }),

/***/ "./src/app/routes/inventory-management/inventory-management.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/routes/inventory-management/inventory-management.module.ts ***!
  \****************************************************************************/
/*! exports provided: InventoryManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryManagementModule", function() { return InventoryManagementModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _inventory_management_inventory_management_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inventory-management/inventory-management.component */ "./src/app/routes/inventory-management/inventory-management/inventory-management.component.ts");
/* harmony import */ var _inventory_creat_inventory_creat_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inventory-creat/inventory-creat.component */ "./src/app/routes/inventory-management/inventory-creat/inventory-creat.component.ts");






var routes = [
    { path: '', component: _inventory_management_inventory_management_component__WEBPACK_IMPORTED_MODULE_4__["InventoryManagementComponent"] },
    { path: 'creat', component: _inventory_creat_inventory_creat_component__WEBPACK_IMPORTED_MODULE_5__["InventoryCreatComponent"] }
];
var InventoryManagementModule = /** @class */ (function () {
    function InventoryManagementModule() {
    }
    InventoryManagementModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_inventory_management_inventory_management_component__WEBPACK_IMPORTED_MODULE_4__["InventoryManagementComponent"], _inventory_creat_inventory_creat_component__WEBPACK_IMPORTED_MODULE_5__["InventoryCreatComponent"]],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ]
        })
    ], InventoryManagementModule);
    return InventoryManagementModule;
}());



/***/ }),

/***/ "./src/app/routes/inventory-management/inventory-management/inventory-management.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/routes/inventory-management/inventory-management/inventory-management.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-4 form-group\">\r\n  <div class=\"col-md-6 col-sm-12\">\r\n    <h4 class=\" header-titel\">Inventory Management</h4>\r\n  </div>\r\n  <div class=\"col-md-6 col-sm-12 text-right\">\r\n    <!-- <button type=\"button\" class=\"btn btn-transparent\"> <img src=\"./assets/icon/filter.svg\"\r\n        alt=\"Generic placeholder image\"></button> -->\r\n    <!-- <button type=\"button\" class=\"btn btn-primary\" routerLink=\"/inventoryManagement/creat\">Add New\r\n    </button> -->\r\n    <input type=\"text\" placeholder=\"Search\" class=\"search-field\" name=\"search\" ngModel  (ngModelChange)=\"searchFilter($event)\">\r\n\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-12 col-xs-12\">\r\n\r\n    <table class=\"table table-borderless app-table table-striped inventry-table\">\r\n      <thead>\r\n        <tr>\r\n          <th>S.No</th>\r\n          <th>System ID</th>\r\n          <th>Specification</th>\r\n          <th>Device name</th>\r\n          <th>Service IpAddress</th>\r\n          <th>Inventory type</th>\r\n          <th>Branch</th>\r\n          <th>Location</th>\r\n          <th></th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let item of filterList | paginate: { itemsPerPage: 10, currentPage: p } ; let i = index\">\r\n          <td>{{ 10 * (p - 1) + i +1}}</td>\r\n          <td>{{item?.systemId}}</td>\r\n          <td>{{item?.processor}} {{item.memory}}</td>\r\n          <td>{{item?.deviceName}}</td>\r\n          <td>{{item?.ipAddress}}</td>\r\n          <td>{{item?.inventoryType}}</td>\r\n          <td><ng-container *ngIf=\"item.locationId != ''\">{{item.locationId?.branchName}}</ng-container></td>\r\n          <td><ng-container *ngIf=\"item.locationId != ''\">{{item.locationId?.location}}</ng-container></td>\r\n          <td>\r\n            <div class=\"btn-group edit-button\" dropdown>\r\n              <button id=\"button-basic\" dropdownToggle type=\"button\" class=\" bg-transparent border-0\"\r\n                      aria-controls=\"dropdown-basic\">\r\n                      <span class=\"material-icons\">\r\n                        more_horiz\r\n                      </span>\r\n              </button>\r\n\r\n            </div>\r\n          </td>\r\n         </tr>\r\n        </tbody>\r\n      </table>\r\n  </div>\r\n\r\n  <div class=\"text-center col-md-12 col-xs-12\">\r\n    <div class=\"row\">\r\n      <div class=\"text-center col-md-12 col-xs-12\" *ngIf=\"!!loader\">\r\n        <div>\r\n          <div class=\"spinner-box my-0 mx-auto\">\r\n            <div class=\"pulse-container\">\r\n              <div class=\"pulse-bubble pulse-bubble-1\"></div>\r\n              <div class=\"pulse-bubble pulse-bubble-2\"></div>\r\n              <div class=\"pulse-bubble pulse-bubble-3\"></div>\r\n            </div>\r\n          </div>\r\n          <p class=\"text-loader text-bold\">Loading</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <h4 *ngIf=\"filterList?.length==0\" class=\"p-5 text-dark text-center\">No data to display</h4>\r\n  </div>\r\n  <div class=\"col-md-6 col-xs-12\">\r\n    <label class=\"fs14\">Showing {{10 * (p - 1) + i }} to {{10 * p}} of {{filterList?.length}} entries</label>\r\n  </div>\r\n\r\n  <div class=\"col-md-6 col-xs-12 text-right\" *ngIf=\"filterList?.length !==0\">\r\n    <pagination-controls (pageChange)=\"p = $event\" responsive=\"true\"\r\n    previousLabel=\"Previous\"\r\n    nextLabel=\"Next\"></pagination-controls>\r\n  </div>\r\n\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/routes/inventory-management/inventory-management/inventory-management.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/routes/inventory-management/inventory-management/inventory-management.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inventry-table tr:hover {\n  cursor: default; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL2ludmVudG9yeS1tYW5hZ2VtZW50L2ludmVudG9yeS1tYW5hZ2VtZW50L0U6XFxmcm9udGVuZF9hZ2lsZWVkZ2VfaHFfY21zL3NyY1xcYXBwXFxyb3V0ZXNcXGludmVudG9yeS1tYW5hZ2VtZW50XFxpbnZlbnRvcnktbWFuYWdlbWVudFxcaW52ZW50b3J5LW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9yb3V0ZXMvaW52ZW50b3J5LW1hbmFnZW1lbnQvaW52ZW50b3J5LW1hbmFnZW1lbnQvaW52ZW50b3J5LW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW52ZW50cnktdGFibGUgdHI6aG92ZXIge1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/routes/inventory-management/inventory-management/inventory-management.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/routes/inventory-management/inventory-management/inventory-management.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: InventoryManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryManagementComponent", function() { return InventoryManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_remote_service_remote_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/remote-service/remote-api.service */ "./src/app/core/services/remote-service/remote-api.service.ts");
/* harmony import */ var _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/constants/AppConstants */ "./src/app/core/constants/AppConstants.ts");
/* harmony import */ var _core_constants_apiUrlConstants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/constants/apiUrlConstants */ "./src/app/core/constants/apiUrlConstants.ts");
/* harmony import */ var _core_services_remote_service_reqResObj_Request__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/services/remote-service/reqResObj/Request */ "./src/app/core/services/remote-service/reqResObj/Request.ts");



// import {NgbDropdown, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';





var InventoryManagementComponent = /** @class */ (function () {
    function InventoryManagementComponent(router, activateRoute, request, api) {
        this.router = router;
        this.activateRoute = activateRoute;
        this.request = request;
        this.api = api;
        this.viewMode = "customer";
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
        this.posForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            printOutType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            inventoryType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            printOutSize: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
    }
    InventoryManagementComponent.prototype.ngOnInit = function () {
        this.getAllInventory();
    };
    InventoryManagementComponent.prototype.ngOnChanges = function (viewMode) {
        this.getAllInventory();
    };
    InventoryManagementComponent.prototype.getAllInventory = function () {
        var _this = this;
        this.request.url = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].SERVER_URI_OBJECT['core'];
        this.request.type = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].API_GET;
        this.request.reqModule = _core_constants_apiUrlConstants__WEBPACK_IMPORTED_MODULE_6__["ApiUrlConstants"].INVENTORY;
        // if (this.viewMode == 'customer') {
        //   this.request.params = "System"
        // }
        // else if (this.viewMode == 'costing') {
        //   this.request.params = "Food"
        // }
        // else {
        //   this.request.params = "Print"
        // }
        this.request.params = "System";
        this.request.body = "";
        console.log(this.request, "reqqqq");
        this.api.requestObject(this.request).then(function (data) {
            _this.loader = false;
            console.log(data, "dataLogin");
            _this.inventoryList = data;
            _this.filterList = data;
            console.log(JSON.stringify(data));
            _this.loader = false;
            // this.router.navigate(['/employeeManagement']);
        }, function (err) {
            // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
            // this.errLogin = err.error;
        });
    };
    InventoryManagementComponent.prototype.searchFilter = function (text) {
        this.filterList = this.inventoryList.filter(function (result) {
            return JSON.stringify(result.systemId).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
                JSON.stringify(result.processor).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
                JSON.stringify(result.deviceName).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
                JSON.stringify(result.ipAddress).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
                JSON.stringify(result.inventoryType).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
                JSON.stringify(result).toLocaleLowerCase().includes(text.toLocaleLowerCase());
        });
    };
    InventoryManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inventory-management',
            template: __webpack_require__(/*! ./inventory-management.component.html */ "./src/app/routes/inventory-management/inventory-management/inventory-management.component.html"),
            styles: [__webpack_require__(/*! ./inventory-management.component.scss */ "./src/app/routes/inventory-management/inventory-management/inventory-management.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _core_services_remote_service_reqResObj_Request__WEBPACK_IMPORTED_MODULE_7__["Request"],
            _core_services_remote_service_remote_api_service__WEBPACK_IMPORTED_MODULE_4__["RemoteApiService"]])
    ], InventoryManagementComponent);
    return InventoryManagementComponent;
}());



/***/ })

}]);
//# sourceMappingURL=inventory-management-inventory-management-module.js.map