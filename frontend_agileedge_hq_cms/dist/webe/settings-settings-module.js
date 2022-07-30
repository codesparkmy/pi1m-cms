(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"],{

/***/ "./src/app/routes/settings/settings.module.ts":
/*!****************************************************!*\
  !*** ./src/app/routes/settings/settings.module.ts ***!
  \****************************************************/
/*! exports provided: SettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/routes/settings/settings/settings.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");





var routes = [
    { path: '', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_2__["SettingsComponent"] },
];
var SettingsModule = /** @class */ (function () {
    function SettingsModule() {
    }
    SettingsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_settings_settings_component__WEBPACK_IMPORTED_MODULE_2__["SettingsComponent"]],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ]
        })
    ], SettingsModule);
    return SettingsModule;
}());



/***/ }),

/***/ "./src/app/routes/settings/settings/settings.component.html":
/*!******************************************************************!*\
  !*** ./src/app/routes/settings/settings/settings.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-4 form-group\">\r\n  <div class=\"col-md-6 col-sm-12\">\r\n    <h4 class=\" header-titel\">Settings</h4>\r\n  </div>\r\n  <div class=\"col-md-6 col-sm-12 text-right\">\r\n\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row mb-5\">\r\n  <div class=\"col-md-12 col-xs-12\">\r\n    <div class=\"shadow card border-0\">\r\n      <div class=\"card-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6 col-xs-6\">\r\n            <div class=\"form-group\">\r\n              <label>Account</label>\r\n              <div class=\"acount-details\">\r\n                <div class=\"media\">\r\n                  <img class=\"mr-3\" src=\"/assets/images/user.jpg\"\r\n                    alt=\"Generic placeholder image\">\r\n                  <div class=\"media-body\">\r\n                    <h5 class=\"mb-0 mt-2\">John doe</h5>\r\n                    <span>Head of the branch</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6 col-xs-6\">\r\n            <div class=\"form-group\">\r\n              <label>Drinks </label>\r\n              <input type=\"text\" class=\"form-control\">\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6 col-xs-6\">\r\n            <div class=\"form-group\">\r\n              <label>Billing Settings </label>\r\n              <!-- <input type=\"text\" class=\"form-control\"> -->\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6 col-xs-6\">\r\n            <div class=\"form-group\">\r\n              <label>Print out and xerox </label>\r\n              <input type=\"text\" class=\"form-control\">\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6 col-xs-6\">\r\n            <div class=\"form-group\">\r\n              <label>Charges per hour </label>\r\n              <input type=\"text\" class=\"form-control\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6 col-xs-6\">\r\n            <div class=\"form-group\">\r\n              <label>Rental/hr</label>\r\n              <input type=\"text\" class=\"form-control\">\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6 col-xs-6\">\r\n            <div class=\"form-group\">\r\n              <label>Type of Service </label>\r\n              <input type=\"text\" class=\"form-control\">\r\n              <!-- <mat-form-field class=\"form-control\">\r\n                <mat-chip-list #chipList aria-label=\"Fruit selection\">\r\n                  <mat-chip *ngFor=\"let fruit of fruits\" [selectable]=\"selectable\" [removable]=\"removable\"\r\n                    (removed)=\"remove(fruit)\">\r\n                    {{fruit.name}}\r\n                    <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n                  </mat-chip>\r\n                  <input placeholder=\"New fruit...\" [matChipInputFor]=\"chipList\"\r\n                    [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\" [matChipInputAddOnBlur]=\"addOnBlur\"\r\n                    (matChipInputTokenEnd)=\"add($event)\">\r\n                </mat-chip-list>\r\n              </mat-form-field> -->\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label>Chips</label>\r\n              <input type=\"text\" class=\"form-control\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6 col-xs-6\">\r\n            <div class=\"form-group\">\r\n              <label>Preferences</label>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"switch\">\r\n                <input type=\"checkbox\">\r\n                <span class=\"slider round\"></span>\r\n              </label>\r\n              <label class=\"ml-3\">Send me desktop notification</label>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"switch\">\r\n                <input type=\"checkbox\">\r\n                <span class=\"slider round\"></span>\r\n              </label>\r\n              <label class=\"ml-3\">In App notification</label>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"switch\">\r\n                <input type=\"checkbox\">\r\n                <span class=\"slider round\"></span>\r\n              </label>\r\n              <label class=\"ml-3\">Notify when user logs out</label>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/routes/settings/settings/settings.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/routes/settings/settings/settings.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Poppins&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Merriweather:300,400,500i,700,900&display=swap\");\n.acount-details {\n  background: #EEEEEE;\n  padding: 1.25rem; }\n.acount-details .media img {\n    width: 66px;\n    height: 66px;\n    border-radius: 50%; }\n.acount-details .media .media-body h5 {\n    font-size: 20px;\n    color: #000000; }\n.acount-details .media .media-body span {\n    font-size: 18px;\n    color: #000000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL3NldHRpbmdzL3NldHRpbmdzL0U6XFxmcm9udGVuZF9hZ2lsZWVkZ2VfaHFfY21zL3NyY1xcYXBwXFxzaGFyZWRcXHN0eWxlc1xcYWJzdHJhY3RzXFxmb250cy5zY3NzIiwic3JjL2FwcC9yb3V0ZXMvc2V0dGluZ3Mvc2V0dGluZ3MvRTpcXGZyb250ZW5kX2FnaWxlZWRnZV9ocV9jbXMvc3JjXFxhcHBcXHJvdXRlc1xcc2V0dGluZ3NcXHNldHRpbmdzXFxzZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcm91dGVzL3NldHRpbmdzL3NldHRpbmdzL0U6XFxmcm9udGVuZF9hZ2lsZWVkZ2VfaHFfY21zL3NyY1xcYXBwXFxzaGFyZWRcXHN0eWxlc1xcYWJzdHJhY3RzXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSwyRUFBWTtBQUVaLHFHQUFZO0FDRFo7RUFDSSxtQkFBbUI7RUFDbkIsZ0JBQWdCLEVBQUE7QUFGcEI7SUFLWSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQixFQUFBO0FBUDlCO0lBV2dCLGVBQWU7SUFDZixjQ2JBLEVBQUE7QURDaEI7SUFlZ0IsZUFBZTtJQUNmLGNDakJBLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9yb3V0ZXMvc2V0dGluZ3Mvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1NZXJyaXdlYXRoZXI6MzAwLDQwMCw1MDBpLDcwMCw5MDAmZGlzcGxheT1zd2FwJyk7IiwiQGltcG9ydCcuLi8uLi8uLi9zaGFyZWQvc3R5bGVzL2Fic3RyYWN0cy9hYnN0cmFjdHMtZGlyLnNjc3MnO1xyXG5cclxuLmFjb3VudC1kZXRhaWxze1xyXG4gICAgYmFja2dyb3VuZDogI0VFRUVFRTtcclxuICAgIHBhZGRpbmc6IDEuMjVyZW07XHJcbiAgICAubWVkaWF7XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICB3aWR0aDogNjZweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA2NnB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tZWRpYS1ib2R5e1xyXG4gICAgICAgICAgICBoNXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkYmxhY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkYmxhY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIkd2hpdGUgOiAjRkZGRkZGO1xyXG4kYmxhY2sgOiAjMDAwMDAwO1xyXG5cclxuXHJcbiRwcmltYXJ5LWJnLWxpZ2h0IDogI2YxZjlmODtcclxuXHJcbiRwcmltYXJ5LWJnOiMzQjM5ODQ7XHJcbi8vICRzZWNvbmRhcnktYmc6IzJmYzJiMjsiXX0= */"

/***/ }),

/***/ "./src/app/routes/settings/settings/settings.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/routes/settings/settings/settings.component.ts ***!
  \****************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");



var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["COMMA"]];
        this.fruits = [
            { name: 'Lemon' },
            { name: 'Lime' },
            { name: 'Apple' },
        ];
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent.prototype.add = function (event) {
        var input = event.input;
        var value = event.value;
        // Add our fruit
        if ((value || '').trim()) {
            this.fruits.push({ name: value.trim() });
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    };
    SettingsComponent.prototype.remove = function (fruit) {
        var index = this.fruits.indexOf(fruit);
        if (index >= 0) {
            this.fruits.splice(index, 1);
        }
    };
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/routes/settings/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.scss */ "./src/app/routes/settings/settings/settings.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=settings-settings-module.js.map