(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pos-management-pos-management-module"],{

/***/ "./src/app/routes/pos-management/assign-pc/assign-pc.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/routes/pos-management/assign-pc/assign-pc.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade assign-pc\" bsModal #assignPcModel=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\"\r\n  aria-labelledby=\"dialog-static-name\">\r\n  <div class=\"modal-dialog modal-dialog-centered modal-lg\">\r\n    <div class=\"modal-content\">\r\n      <button type=\"button\" class=\"close\" (click)=\"hideModalWindow()\">\r\n        <span aria-hidden=\"true\" class=\"x\">&times;</span>\r\n      </button>\r\n      <div class=\"modal-body\">\r\n        <div class=\"row mb-4\">\r\n          <div class=\"col-md-12 col-xs-12 text-center\">\r\n            <img src=\"./assets/images/logo-colour.svg\" class=\"img-fluid\" alt=\"Responsive image\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12 col-xs-12\">\r\n            <div class=\"form-group\">\r\n              <label>Select PC</label>\r\n              <nav aria-label=\"Page navigation example\">\r\n                <ul class=\"pagination pc-list\">\r\n                  <li class=\"page-item\"><a class=\"page-link\" href=\"#\">1</a></li>\r\n                  <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\r\n                  <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\r\n                  <li class=\"page-item\"><a class=\"page-link\" href=\"#\">5</a></li>\r\n                  <li class=\"page-item\"><a class=\"page-link\" href=\"#\">6</a></li>\r\n                  <li class=\"page-item\"><a class=\"page-link\" href=\"#\">7</a></li>\r\n                  <li class=\"page-item\"><a class=\"page-link\" href=\"#\">8</a></li>\r\n                  <li class=\"page-item\"><a class=\"page-link\" href=\"#\">9</a></li>\r\n                  <li class=\"page-item\"><a class=\"page-link\" href=\"#\">10</a></li>\r\n                  <li class=\"page-item\"><a class=\"page-link\" href=\"#\">11</a></li>\r\n                  <li class=\"page-item\"><a class=\"page-link\" href=\"#\">12</a></li>\r\n                  <li class=\"page-item\"><a class=\"page-link\" href=\"#\">13</a></li>\r\n                  <li class=\"page-item\"><a class=\"page-link\" href=\"#\">14</a></li>\r\n                  <!-- <li class=\"page-item\"><a class=\"page-link\" href=\"#\">15</a></li> -->\r\n                </ul>\r\n              </nav>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6 col-xs-6\">\r\n            <div class=\"form-group\">\r\n              <label>Assign to</label>\r\n              <input type=\"text\" class=\"form-control\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6 col-xs-6\">\r\n            <div class=\"form-group\">\r\n              <label>User ID</label>\r\n              <input type=\"text\" class=\"form-control\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6 col-xs-6\">\r\n            <div class=\"form-group\">\r\n              <label>Type of service</label>\r\n              <select class=\"custom-select form-control\" id=\"inputGroupSelect03\">\r\n                <option selected>Choose...</option>\r\n                <option value=\"1\">One</option>\r\n                <option value=\"2\">Two</option>\r\n                <option value=\"3\">Three</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6 col-xs-6\">\r\n            <div class=\"form-group\">\r\n              <label>Purpose</label>\r\n              <select class=\"custom-select form-control\" id=\"inputGroupSelect03\">\r\n                <option selected>Browsing</option>\r\n                <option value=\"1\">One</option>\r\n                <option value=\"2\">Two</option>\r\n                <option value=\"3\">Three</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6 col-xs-6\">\r\n              <div class=\"form-group\">\r\n                  <label>Duration</label>\r\n                  <select class=\"custom-select form-control\" id=\"inputGroupSelect03\">\r\n                      <option selected>Post paid</option>\r\n                      <option value=\"1\">One</option>\r\n                      <option value=\"2\">Two</option>\r\n                      <option value=\"3\">Three</option>\r\n                  </select>\r\n              </div>\r\n          </div>\r\n         \r\n      </div>\r\n\r\n      <div class=\"row mt-3\">\r\n        <div class=\"col-md-12 col-xs-12 text-right\">\r\n            <a type=\"button\" class=\"btn btn-primary\"\r\n            (click)=\"hideModalWindow()\">save & Create</a>\r\n        </div>\r\n    </div>\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/pos-management/assign-pc/assign-pc.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/routes/pos-management/assign-pc/assign-pc.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9wb3MtbWFuYWdlbWVudC9hc3NpZ24tcGMvYXNzaWduLXBjLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/routes/pos-management/assign-pc/assign-pc.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/routes/pos-management/assign-pc/assign-pc.component.ts ***!
  \************************************************************************/
/*! exports provided: AssignPcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignPcComponent", function() { return AssignPcComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");



var AssignPcComponent = /** @class */ (function () {
    function AssignPcComponent() {
        this.hide = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    AssignPcComponent.prototype.ngOnInit = function () {
    };
    AssignPcComponent.prototype.ngAfterViewInit = function () {
        this.assignPcModel.show();
    };
    AssignPcComponent.prototype.showChildModal = function () {
        this.assignPcModel.show();
    };
    AssignPcComponent.prototype.hideModalWindow = function () {
        this.assignPcModel.hide();
        this.hide.emit('');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('assignPcModel'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], AssignPcComponent.prototype, "assignPcModel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AssignPcComponent.prototype, "hide", void 0);
    AssignPcComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-assign-pc',
            template: __webpack_require__(/*! ./assign-pc.component.html */ "./src/app/routes/pos-management/assign-pc/assign-pc.component.html"),
            styles: [__webpack_require__(/*! ./assign-pc.component.scss */ "./src/app/routes/pos-management/assign-pc/assign-pc.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AssignPcComponent);
    return AssignPcComponent;
}());



/***/ }),

/***/ "./src/app/routes/pos-management/pos-details/pos-details.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/routes/pos-management/pos-details/pos-details.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade  poc-detai\" bsModal #posDetailModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\"\r\n  aria-labelledby=\"dialog-static-name\">\r\n  <div class=\"modal-dialog modal-dialog-centered modal-lg\">\r\n    <div class=\"modal-content\">\r\n      <button type=\"button\" class=\"close\" (click)=\"hideModalWindow()\">\r\n        <span aria-hidden=\"true\" class=\"x\">&times;</span>\r\n      </button>\r\n      <div class=\"modal-body\">\r\n        <div class=\"shadow-sm card border-0 mb-4\">\r\n          <div class=\"card-body\">\r\n              <div class=\"row\">\r\n                  <div class=\"col-md-6 col-xs-12\">\r\n                      <div class=\"media\">\r\n                        <img class=\"mr-3\" src=\"/assets/images/user.jpg\" />\r\n\r\n                          <div class=\"media-body\">\r\n                              <h5 class=\"mt-0\">Carter Dias</h5>\r\n\r\n                              <label class=\"detals\">carter dias@gmail.com</label>\r\n                              <label class=\"detals\">9876522345</label>\r\n                              <label class=\"detals\">Location</label>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"col-md-6 col-xs-12 text-right\">\r\n\r\n                      <h4 class=\"mt-4 mb-0 total-hous \">Total hours</h4>\r\n                      <h5 class=\"mt-0  mb-0 hours text-primary\">1hr</h5>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"shadow-sm card border-0 mb-4\">\r\n        <div class=\"card-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12 col-xs-12\">\r\n                    <table class=\"table table-borderless detail-tabele\">\r\n                        <tbody>\r\n                            <tr>\r\n                                <td class=\"text-muted\">Cafe usage</td>\r\n                                <td class=\"text-muted\">1hr</td>\r\n                                <td>$10</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-muted\">Food and beverage </td>\r\n                                <td class=\"text-muted\">Coke and chips</td>\r\n                                <td>$20</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-muted\">GST</td>\r\n                                <td class=\"text-muted\">18%</td>\r\n                                <td>$20</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-muted\">Service charge</td>\r\n                                <td></td>\r\n                                <td>$2</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td colspan=\"3\">\r\n                                    <hr class=\"m-0\">\r\n                                </td>\r\n\r\n                            </tr>\r\n                            <tr>\r\n                                <td><b>Total amount</b></td>\r\n                                <td></td>\r\n                                <td><b>$52</b></td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td colspan=\"3\">\r\n                                    <hr class=\"m-0\">\r\n                                </td>\r\n\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/routes/pos-management/pos-details/pos-details.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/routes/pos-management/pos-details/pos-details.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9wb3MtbWFuYWdlbWVudC9wb3MtZGV0YWlscy9wb3MtZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/routes/pos-management/pos-details/pos-details.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/routes/pos-management/pos-details/pos-details.component.ts ***!
  \****************************************************************************/
/*! exports provided: PosDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PosDetailsComponent", function() { return PosDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");



var PosDetailsComponent = /** @class */ (function () {
    function PosDetailsComponent() {
        this.hide = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    PosDetailsComponent.prototype.ngOnInit = function () {
    };
    PosDetailsComponent.prototype.ngAfterViewInit = function () {
        this.posDetailModal.show();
    };
    PosDetailsComponent.prototype.showChildModal = function () {
        this.posDetailModal.show();
    };
    PosDetailsComponent.prototype.hideModalWindow = function () {
        this.posDetailModal.hide();
        this.hide.emit('');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('posDetailModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], PosDetailsComponent.prototype, "posDetailModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PosDetailsComponent.prototype, "hide", void 0);
    PosDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pos-details',
            template: __webpack_require__(/*! ./pos-details.component.html */ "./src/app/routes/pos-management/pos-details/pos-details.component.html"),
            styles: [__webpack_require__(/*! ./pos-details.component.scss */ "./src/app/routes/pos-management/pos-details/pos-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PosDetailsComponent);
    return PosDetailsComponent;
}());



/***/ }),

/***/ "./src/app/routes/pos-management/pos-management.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/routes/pos-management/pos-management.module.ts ***!
  \****************************************************************/
/*! exports provided: PosManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PosManagementModule", function() { return PosManagementModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _pos_management_pos_management_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pos-management/pos-management.component */ "./src/app/routes/pos-management/pos-management/pos-management.component.ts");
/* harmony import */ var _assign_pc_assign_pc_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assign-pc/assign-pc.component */ "./src/app/routes/pos-management/assign-pc/assign-pc.component.ts");
/* harmony import */ var _pos_details_pos_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pos-details/pos-details.component */ "./src/app/routes/pos-management/pos-details/pos-details.component.ts");







var routes = [
    { path: '', component: _pos_management_pos_management_component__WEBPACK_IMPORTED_MODULE_4__["PosManagementComponent"] },
];
var PosManagementModule = /** @class */ (function () {
    function PosManagementModule() {
    }
    PosManagementModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_pos_management_pos_management_component__WEBPACK_IMPORTED_MODULE_4__["PosManagementComponent"], _assign_pc_assign_pc_component__WEBPACK_IMPORTED_MODULE_5__["AssignPcComponent"], _pos_details_pos_details_component__WEBPACK_IMPORTED_MODULE_6__["PosDetailsComponent"]],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ]
        })
    ], PosManagementModule);
    return PosManagementModule;
}());



/***/ }),

/***/ "./src/app/routes/pos-management/pos-management/pos-management.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/routes/pos-management/pos-management/pos-management.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-4 form-group\">\r\n  <div class=\"col-md-6 col-sm-12\">\r\n      <h4 class=\" header-titel\">POS Management</h4>\r\n  </div>\r\n  <div class=\"col-md-6 col-sm-12 text-right\">\r\n      <!-- <button type=\"button\" class=\"btn btn-transparent\"> <img src=\"./assets/icon/filter.svg\"\r\n              alt=\"Generic placeholder image\"></button> -->\r\n      <button type=\"button\" class=\"btn btn-primary\"\r\n      (click)=\"assignPcModelOpen()\">Assign PC\r\n          </button>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-12 col-xs-12\">\r\n      <table class=\"table table-borderless app-table table-striped\">\r\n          <thead>\r\n              <tr>\r\n                  <th>S.No</th>\r\n                  <th>System ID</th>\r\n                  <th>Availability</th>\r\n                  <th>Start time</th>\r\n                  <th>End time</th>\r\n                  <th>End section</th>\r\n                  <th></th>\r\n              </tr>\r\n          </thead>\r\n          <tbody>\r\n              <tr (click)=\"posDetailsModelOpen()\">\r\n                  <td>01</td>\r\n                  <td>CF001</td>\r\n                  <td><b>Active</b></td>\r\n                  <td>11:00 AM</td>\r\n                  <td>-</td>\r\n                  <td>\r\n                      <label class=\"switch pos-Toggle\">\r\n                          <input type=\"checkbox\">\r\n                          <span class=\"slider round\"></span>\r\n                      </label>\r\n                  </td>\r\n                  <td>\r\n                      <div class=\"dropdown\">\r\n                          <button\r\n                              class=\"btn dropleft btn-transparent dropdown-toggle edit-dropdown caret-no\"\r\n                              type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\r\n                              aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                              <span class=\"material-icons\">\r\n                                  more_horiz\r\n                              </span>\r\n                          </button>\r\n                          <div class=\"dropdown-menu dropdown-menu-right dropdown-menu-lg-left\"\r\n                              aria-labelledby=\"dropdownMenuButton\">\r\n                              <a class=\"dropdown-item\" href=\"#\">Edit</a>\r\n                              <a class=\"dropdown-item\" href=\"#\">Delete</a>\r\n                              <!-- <a class=\"dropdown-item\" href=\"#\">Something else here</a> -->\r\n                          </div>\r\n                      </div>\r\n                  </td>\r\n              </tr>\r\n\r\n\r\n              <tr data-toggle=\"modal\" data-target=\"#posDetailModal\">\r\n                  <td>02</td>\r\n                  <td>CF002</td>\r\n                  <td class=\"text-danger\"><b>InActive</b></td>\r\n                  <td>11:00 AM</td>\r\n                  <td>-</td>\r\n                  <td>\r\n                      <label class=\"switch pos-Toggle\">\r\n                          <input type=\"checkbox\">\r\n                          <span class=\"slider round\"></span>\r\n                      </label>\r\n                  </td>\r\n                  <td>\r\n                      <div class=\"dropdown\">\r\n                          <button\r\n                              class=\"btn dropleft btn-transparent dropdown-toggle edit-dropdown caret-no\"\r\n                              type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\r\n                              aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                              <span class=\"material-icons\">\r\n                                  more_horiz\r\n                              </span>\r\n                          </button>\r\n                          <div class=\"dropdown-menu dropdown-menu-right dropdown-menu-lg-left\"\r\n                              aria-labelledby=\"dropdownMenuButton\">\r\n                              <a class=\"dropdown-item\" href=\"#\">Edit</a>\r\n                              <a class=\"dropdown-item\" href=\"#\">Delete</a>\r\n                              <!-- <a class=\"dropdown-item\" href=\"#\">Something else here</a> -->\r\n                          </div>\r\n                      </div>\r\n                  </td>\r\n              </tr>\r\n\r\n\r\n              <tr data-toggle=\"modal\" data-target=\"#posDetailModal\">\r\n                  <td>03</td>\r\n                  <td>CF003</td>\r\n                  <td><b>Active</b></td>\r\n                  <td>11:00 AM</td>\r\n                  <td>-</td>\r\n                  <td>\r\n                      <label class=\"switch pos-Toggle\">\r\n                          <input type=\"checkbox\">\r\n                          <span class=\"slider round\"></span>\r\n                      </label>\r\n                  </td>\r\n                  <td>\r\n                      <div class=\"dropdown\">\r\n                          <button\r\n                              class=\"btn dropleft btn-transparent dropdown-toggle edit-dropdown caret-no\"\r\n                              type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\r\n                              aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                              <span class=\"material-icons\">\r\n                                  more_horiz\r\n                              </span>\r\n                          </button>\r\n                          <div class=\"dropdown-menu dropdown-menu-right dropdown-menu-lg-left\"\r\n                              aria-labelledby=\"dropdownMenuButton\">\r\n                              <a class=\"dropdown-item\" href=\"#\">Edit</a>\r\n                              <a class=\"dropdown-item\" href=\"#\">Delete</a>\r\n                              <!-- <a class=\"dropdown-item\" href=\"#\">Something else here</a> -->\r\n                          </div>\r\n                      </div>\r\n                  </td>\r\n              </tr>\r\n\r\n              <tr data-toggle=\"modal\" data-target=\"#posDetailModal\">\r\n                  <td>04</td>\r\n                  <td>CF004</td>\r\n                  <td class=\"text-danger\"><b>InActive</b></td>\r\n                  <td>11:00 AM</td>\r\n                  <td>-</td>\r\n                  <td>\r\n                      <label class=\"switch pos-Toggle\">\r\n                          <input type=\"checkbox\">\r\n                          <span class=\"slider round\"></span>\r\n                      </label>\r\n                  </td>\r\n                  <td>\r\n                      <div class=\"dropdown\">\r\n                          <button\r\n                              class=\"btn dropleft btn-transparent dropdown-toggle edit-dropdown caret-no\"\r\n                              type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\r\n                              aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                              <span class=\"material-icons\">\r\n                                  more_horiz\r\n                              </span>\r\n                          </button>\r\n                          <div class=\"dropdown-menu dropdown-menu-right dropdown-menu-lg-left\"\r\n                              aria-labelledby=\"dropdownMenuButton\">\r\n                              <a class=\"dropdown-item\" href=\"#\">Edit</a>\r\n                              <a class=\"dropdown-item\" href=\"#\">Delete</a>\r\n                              <!-- <a class=\"dropdown-item\" href=\"#\">Something else here</a> -->\r\n                          </div>\r\n                      </div>\r\n                  </td>\r\n              </tr>\r\n\r\n\r\n\r\n              <tr data-toggle=\"modal\" data-target=\"#posDetailModal\">\r\n                  <td>05</td>\r\n                  <td>CF005</td>\r\n                  <td class=\"text-danger\"><b>InActive</b></td>\r\n                  <td>11:00 AM</td>\r\n                  <td>12:30 AM</td>\r\n                  <td>\r\n                      <label class=\"switch pos-Toggle\">\r\n                          <input type=\"checkbox\">\r\n                          <span class=\"slider round\"></span>\r\n                      </label>\r\n                  </td>\r\n                  <td>\r\n                      <div class=\"dropdown\">\r\n                          <button\r\n                              class=\"btn dropleft btn-transparent dropdown-toggle edit-dropdown caret-no\"\r\n                              type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\r\n                              aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                              <span class=\"material-icons\">\r\n                                  more_horiz\r\n                              </span>\r\n                          </button>\r\n                          <div class=\"dropdown-menu dropdown-menu-right dropdown-menu-lg-left\"\r\n                              aria-labelledby=\"dropdownMenuButton\">\r\n                              <a class=\"dropdown-item\" href=\"#\">Edit</a>\r\n                              <a class=\"dropdown-item\" href=\"#\">Delete</a>\r\n                              <!-- <a class=\"dropdown-item\" href=\"#\">Something else here</a> -->\r\n                          </div>\r\n                      </div>\r\n                  </td>\r\n              </tr>\r\n          </tbody>\r\n      </table>\r\n  </div>\r\n  <div class=\"col-md-6 col-xs-12\">\r\n      <label class=\"fs14\">Showing 1 to 10 of 65 entries</label>\r\n  </div>\r\n\r\n  <div class=\"col-md-6 col-xs-12 text-right\">\r\n      <nav aria-label=\"Page navigation example \" class=\"float-right app-pagination\">\r\n          <ul class=\"pagination\">\r\n              <li class=\"page-item\"><a class=\"page-link disabled\" href=\"#\">Previous</a></li>\r\n              <li class=\"page-item\"><a class=\"page-link active\" href=\"#\">1</a></li>\r\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\r\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\r\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\r\n          </ul>\r\n      </nav>\r\n  </div>\r\n</div>\r\n\r\n\r\n<app-assign-pc  *ngIf='isassignPcModel' (hide)='assignPcModelOpen()'></app-assign-pc>\r\n<app-pos-details  *ngIf='isposDetailsModel' (hide)='posDetailsModelOpen()'></app-pos-details>\r\n"

/***/ }),

/***/ "./src/app/routes/pos-management/pos-management/pos-management.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/routes/pos-management/pos-management/pos-management.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9wb3MtbWFuYWdlbWVudC9wb3MtbWFuYWdlbWVudC9wb3MtbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/routes/pos-management/pos-management/pos-management.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/routes/pos-management/pos-management/pos-management.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PosManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PosManagementComponent", function() { return PosManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PosManagementComponent = /** @class */ (function () {
    function PosManagementComponent() {
        this.isassignPcModel = false;
        this.isposDetailsModel = false;
    }
    PosManagementComponent.prototype.ngOnInit = function () {
    };
    PosManagementComponent.prototype.assignPcModelOpen = function () {
        this.isassignPcModel = !this.isassignPcModel;
    };
    PosManagementComponent.prototype.posDetailsModelOpen = function () {
        this.isposDetailsModel = !this.isposDetailsModel;
    };
    PosManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pos-management',
            template: __webpack_require__(/*! ./pos-management.component.html */ "./src/app/routes/pos-management/pos-management/pos-management.component.html"),
            styles: [__webpack_require__(/*! ./pos-management.component.scss */ "./src/app/routes/pos-management/pos-management/pos-management.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PosManagementComponent);
    return PosManagementComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pos-management-pos-management-module.js.map