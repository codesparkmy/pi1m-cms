(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["training-management-training-management-module"],{

/***/ "./src/app/routes/training-management/creat-training/creat-training.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/routes/training-management/creat-training/creat-training.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-4 form-group\">\r\n  <div class=\"col-md-6 col-sm-12\">\r\n      <h4 class=\" header-titel\">New Course training</h4>\r\n  </div>\r\n  <div class=\"col-md-6 col-sm-12 text-right\">\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"row mb-5\">\r\n  <div class=\"col-md-12 col-xs-12\">\r\n      <div class=\"shadow card border-0\">\r\n          <div class=\"card-body\">\r\n              <form>\r\n                  <div class=\"row\">\r\n                      <div class=\"col-md-6 col-xs-6\">\r\n                          <div class=\"form-group\">\r\n                              <label>Course name</label>\r\n                              <input type=\"email\" class=\"form-control\">\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"col-md-6 col-xs-6\">\r\n                          <div class=\"form-group\">\r\n                              <label>Course Code</label>\r\n                              <input type=\"email\" class=\"form-control\">\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n\r\n                  <div class=\"row\">\r\n                      <div class=\"col-md-6 col-xs-6\">\r\n                          <div class=\"form-group\">\r\n                              <label>Training duration</label>\r\n                              <input type=\"email\" class=\"form-control\">\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"col-md-6 col-xs-6\">\r\n                          <div class=\"form-group\">\r\n                              <label>Fee</label>\r\n                              <input type=\"email\" class=\"form-control\">\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n\r\n                  <div class=\"row\">\r\n                      <div class=\"col-md-6 col-xs-6\">\r\n                          <div class=\"form-group\">\r\n                              <label>Enrolled</label>\r\n                              <input type=\"email\" class=\"form-control\">\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"col-md-6 col-xs-6\">\r\n                          <div class=\"form-group\">\r\n                              <label>Maxixmum subscription</label>\r\n                              <input type=\"email\" class=\"form-control\">\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n\r\n\r\n                  <div class=\"row\">\r\n                      <div class=\"col-md-6 col-xs-6\">\r\n                          <div class=\"form-group\">\r\n                              <label>Training Type</label>\r\n                              <input type=\"email\" class=\"form-control\" placeholder=\"Email\">\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"col-md-6 col-xs-6\">\r\n                          <div class=\"form-group\">\r\n                              <label>Trainer</label>\r\n                              <input type=\"email\" class=\"form-control\" placeholder=\"Email\">\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n\r\n\r\n\r\n\r\n                  <div class=\"row mt-3\">\r\n                      <div class=\"col-md-12 col-xs-12 text-right\">\r\n                          <a type=\"button\" class=\"btn btn-primary\"\r\n                              href=\"../trainingManagement/index.html\">save & Create</a>\r\n                      </div>\r\n                  </div>\r\n\r\n              </form>\r\n          </div>\r\n      </div>\r\n  </div>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/routes/training-management/creat-training/creat-training.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/routes/training-management/creat-training/creat-training.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy90cmFpbmluZy1tYW5hZ2VtZW50L2NyZWF0LXRyYWluaW5nL2NyZWF0LXRyYWluaW5nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/routes/training-management/creat-training/creat-training.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/routes/training-management/creat-training/creat-training.component.ts ***!
  \***************************************************************************************/
/*! exports provided: CreatTrainingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatTrainingComponent", function() { return CreatTrainingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CreatTrainingComponent = /** @class */ (function () {
    function CreatTrainingComponent() {
    }
    CreatTrainingComponent.prototype.ngOnInit = function () {
    };
    CreatTrainingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-creat-training',
            template: __webpack_require__(/*! ./creat-training.component.html */ "./src/app/routes/training-management/creat-training/creat-training.component.html"),
            styles: [__webpack_require__(/*! ./creat-training.component.scss */ "./src/app/routes/training-management/creat-training/creat-training.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CreatTrainingComponent);
    return CreatTrainingComponent;
}());



/***/ }),

/***/ "./src/app/routes/training-management/training-details/training-details.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/routes/training-management/training-details/training-details.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-4 form-group\">\r\n  <div class=\"col-md-6 col-sm-12\">\r\n    <h4 routerLink=\"/trainingManagement\"  class=\"header-titel\"><img src=\"./assets/icon/arrow-left.svg\"/>Training detail</h4>\r\n  </div>\r\n  <div class=\"col-md-6 col-sm-12 text-right\">\r\n\r\n  </div>\r\n</div>\r\n<div class=\"row mt-4 form-group\">\r\n  <div class=\"col-md-8 col-sm-12\">\r\n    <div class=\"shadow rounded border-0\">\r\n      <div class=\"card-body py-4\">\r\n        <div class=\"media d-flex\">\r\n          <!-- <img src=\"/assets/images/user.jpg\"\r\n          alt=\"Generic placeholder image\" *ngIf=\"employeeData.profilePicture == ''\">\r\n          <img [src]=\"employeeData?.profilePicture\" class=\"image-size\" *ngIf=\"employeeData.profilePicture != ''\"> -->\r\n\r\n          <div class=\"media-body\">\r\n            <h5 class=\"mt-0\">{{trainingList?.fullName}}</h5>\r\n            <p class=\"detals mb-0\">{{trainingList?.email}}</p>\r\n            <p class=\"detals mb-0\">{{trainingList?.phoneNumber}}</p>\r\n            <!-- <p class=\"detals mb-0\">Location</p> -->\r\n          </div>\r\n          <div class=\"ml-auto\">\r\n            <button class=\"btn btn-primary px-4 py-2\">{{trainingDetails?.course}} Trainer</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  </div>\r\n  </div>\r\n  <div class=\"col-md-4 col-sm-12  \">\r\n    <div class=\"shadow rounded bg-primary px-4 py-3 \">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 col-xs-6\">\r\n          <div class=\"d-flex  py-2 align-items-start\">\r\n            <div class=\"rounded-circle icon-bg text-center\"><img class=\"icon-img\" src=\"./assets/icon/presentation.svg\"/></div>\r\n            <div class=\"ml-2\">\r\n              <p class=\"dtail-head mb-0\">{{trainingDetails?.enrolled}}</p>\r\n              <p class=\"dtail-sub mb-0\">Enrolled</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 col-xs-6\">\r\n          <div class=\"d-flex  py-2 align-items-start\">\r\n            <div class=\"rounded-circle icon-bg text-center\"><img class=\"icon-img\" src=\"./assets/icon/presentation.svg\"/></div>\r\n            <div class=\"ml-2\">\r\n              <p class=\"dtail-head mb-0\"><ng-container *ngIf=\"trainingDetails?.courseType == '1'\">Daily</ng-container><ng-container *ngIf=\"trainingDetails?.courseType == '2'\">Weekly</ng-container></p>\r\n              <p class=\"dtail-sub mb-0\">Course type</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 col-xs-6\">\r\n          <div class=\"d-flex  py-2 align-items-start\">\r\n            <div class=\"rounded-circle icon-bg text-center\"><img class=\"icon-img\" src=\"./assets/icon/presentation.svg\"/></div>\r\n            <div class=\"ml-2\">\r\n              <p class=\"dtail-head text-white mb-0\">{{trainingDetails?.courseDuration}}</p>\r\n              <p class=\"dtail-sub mb-0\">Course duration</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 col-xs-6\">\r\n          <div class=\"d-flex  py-2 align-items-start\">\r\n            <div class=\"rounded-circle icon-bg text-center\"><img class=\"icon-img\" src=\"./assets/icon/presentation.svg\"/></div>\r\n            <div class=\"ml-2\">\r\n              <p class=\"dtail-head mb-0\">{{trainingDetails?.courseCode}}</p>\r\n              <p class=\"dtail-sub mb-0\">Course ID</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row mb-5\">\r\n  <div class=\"col-md-12 col-xs-12\">\r\n      <div class=\"shadow card border-0\">\r\n          <div class=\"card-body\">\r\n            <table class=\"table table-borderless \">\r\n              <thead>\r\n                  <tr>\r\n                      <th>S.No</th>\r\n                      <th>Course</th>\r\n                      <th>Registered Date </th>\r\n                      <th class=\"text-center\">Subcription ID</th>\r\n                      <th class=\"text-center\">Enrolled</th>\r\n                      <th>Price</th>\r\n                  </tr>\r\n              </thead>\r\n              <tbody>\r\n                  <tr>\r\n                    <td>{{trainingDetails?.id}}</td>\r\n                    <td>{{trainingDetails?.course}}</td>\r\n                    <td>{{trainingDetails?.createdAt | slice:0:10}}</td>\r\n                    <td  class=\"text-center\">{{trainingDetails?.maximumSubscription}}</td>\r\n                    <td class=\"text-center\">{{trainingDetails?.enrolled}}</td>\r\n                    <td>RM {{trainingDetails?.fee}}</td>\r\n                  </tr>\r\n\r\n\r\n              </tbody>\r\n          </table>\r\n          </div>\r\n      </div>\r\n  </div>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/routes/training-management/training-details/training-details.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/routes/training-management/training-details/training-details.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".media img {\n  width: 66px;\n  height: 66px;\n  border-radius: 50%;\n  -o-object-fit: cover;\n  object-fit: cover; }\n\n.media-body h5 {\n  font-size: 24px; }\n\n.media-body .detals {\n  font-weight: 500;\n  font-size: 16px; }\n\n.icon-bg {\n  background-color: rgba(255, 255, 255, 0.23);\n  padding: 4px 9px; }\n\n.icon-img {\n  width: 14px;\n  height: auto; }\n\np.dtail-head {\n  color: #fff;\n  font-weight: bold;\n  font-size: 18px; }\n\np.dtail-sub {\n  color: #fff;\n  font-size: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL3RyYWluaW5nLW1hbmFnZW1lbnQvdHJhaW5pbmctZGV0YWlscy9FOlxcZnJvbnRlbmRfYWdpbGVlZGdlX2hxX2Ntcy9zcmNcXGFwcFxccm91dGVzXFx0cmFpbmluZy1tYW5hZ2VtZW50XFx0cmFpbmluZy1kZXRhaWxzXFx0cmFpbmluZy1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGlCQUFpQixFQUFBOztBQUVqQjtFQUVRLGVBQWUsRUFBQTs7QUFGdkI7RUFLUSxnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBOztBQUczQjtFQUNJLDJDQUEyQztFQUMzQyxnQkFBZSxFQUFBOztBQUduQjtFQUNJLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksV0FBVTtFQUNWLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksV0FBVTtFQUNWLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy90cmFpbmluZy1tYW5hZ2VtZW50L3RyYWluaW5nLWRldGFpbHMvdHJhaW5pbmctZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZWRpYSBpbWd7XHJcbiAgICB3aWR0aDogNjZweDtcclxuICAgIGhlaWdodDogNjZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB9XHJcbiAgICAubWVkaWEtYm9keXtcclxuICAgICAgICBoNXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZGV0YWxze1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4uaWNvbi1iZ3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yMyk7XHJcbiAgICBwYWRkaW5nOjRweCA5cHg7XHJcbiAgICBcclxuICAgIH1cclxuLmljb24taW1ne1xyXG4gICAgd2lkdGg6IDE0cHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn0gXHJcbnAuZHRhaWwtaGVhZHtcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5wLmR0YWlsLXN1YntcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/routes/training-management/training-details/training-details.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/routes/training-management/training-details/training-details.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: TrainingDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingDetailsComponent", function() { return TrainingDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_remote_service_remote_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/remote-service/remote-api.service */ "./src/app/core/services/remote-service/remote-api.service.ts");
/* harmony import */ var _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/constants/AppConstants */ "./src/app/core/constants/AppConstants.ts");
/* harmony import */ var _core_constants_apiUrlConstants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/constants/apiUrlConstants */ "./src/app/core/constants/apiUrlConstants.ts");
/* harmony import */ var _core_services_remote_service_reqResObj_Request__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/services/remote-service/reqResObj/Request */ "./src/app/core/services/remote-service/reqResObj/Request.ts");







var TrainingDetailsComponent = /** @class */ (function () {
    function TrainingDetailsComponent(router, activateRoute, request, api, route) {
        this.router = router;
        this.activateRoute = activateRoute;
        this.request = request;
        this.api = api;
        this.route = route;
        this.trainingDetails = [];
    }
    TrainingDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRoute.queryParams.subscribe(function (params) {
            _this.itemid = params["id"];
        });
        console.log(this.itemid);
        this.getEmployee();
        if (this.itemid) {
            this.getTrainingDetail();
        }
    };
    TrainingDetailsComponent.prototype.getTrainingDetail = function () {
        var _this = this;
        this.request.url = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].SERVER_URI_OBJECT['core'];
        this.request.type = _core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].API_GET;
        this.request.reqModule = _core_constants_apiUrlConstants__WEBPACK_IMPORTED_MODULE_5__["ApiUrlConstants"].TRAINING;
        this.request.params = this.itemid;
        this.request.body = "";
        console.log(this.request, "reqqqq");
        this.api.requestObject(this.request).then(function (data) {
            _this.trainingDetails = data;
            // this.trainingList = new TraingDetail();
            _this.trainingList = data.trainer;
            console.log(_this.trainingDetails, "visisi");
        }, function (err) {
            // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
            // this.errLogin = err.error;
        });
    };
    TrainingDetailsComponent.prototype.getEmployee = function () {
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
    TrainingDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-training-details',
            template: __webpack_require__(/*! ./training-details.component.html */ "./src/app/routes/training-management/training-details/training-details.component.html"),
            styles: [__webpack_require__(/*! ./training-details.component.scss */ "./src/app/routes/training-management/training-details/training-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _core_services_remote_service_reqResObj_Request__WEBPACK_IMPORTED_MODULE_6__["Request"],
            _core_services_remote_service_remote_api_service__WEBPACK_IMPORTED_MODULE_3__["RemoteApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], TrainingDetailsComponent);
    return TrainingDetailsComponent;
}());



/***/ }),

/***/ "./src/app/routes/training-management/training-management.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/routes/training-management/training-management.module.ts ***!
  \**************************************************************************/
/*! exports provided: TrainingManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingManagementModule", function() { return TrainingManagementModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _training_management_training_management_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./training-management/training-management.component */ "./src/app/routes/training-management/training-management/training-management.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _creat_training_creat_training_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./creat-training/creat-training.component */ "./src/app/routes/training-management/creat-training/creat-training.component.ts");
/* harmony import */ var _training_details_training_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./training-details/training-details.component */ "./src/app/routes/training-management/training-details/training-details.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");







var routes = [
    { path: '', component: _training_management_training_management_component__WEBPACK_IMPORTED_MODULE_2__["TrainingManagementComponent"] },
    { path: 'creat', component: _creat_training_creat_training_component__WEBPACK_IMPORTED_MODULE_4__["CreatTrainingComponent"] },
    { path: 'trainingdetail', component: _training_details_training_details_component__WEBPACK_IMPORTED_MODULE_5__["TrainingDetailsComponent"] },
];
var TrainingManagementModule = /** @class */ (function () {
    function TrainingManagementModule() {
    }
    TrainingManagementModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_training_management_training_management_component__WEBPACK_IMPORTED_MODULE_2__["TrainingManagementComponent"], _creat_training_creat_training_component__WEBPACK_IMPORTED_MODULE_4__["CreatTrainingComponent"], _training_details_training_details_component__WEBPACK_IMPORTED_MODULE_5__["TrainingDetailsComponent"]],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ]
        })
    ], TrainingManagementModule);
    return TrainingManagementModule;
}());



/***/ }),

/***/ "./src/app/routes/training-management/training-management/training-management.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/routes/training-management/training-management/training-management.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-4 form-group\">\r\n  <div class=\"col-md-6 col-sm-12\">\r\n    <h4 class=\" header-titel\">Training Management</h4>\r\n  </div>\r\n  <div class=\"col-md-6 col-sm-12 text-right\">\r\n    <input type=\"text\" placeholder=\"Search\" class=\"search-field\" name=\"search\" ngModel  (ngModelChange)=\"searchFilter($event)\">\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-12 col-xs-12\">\r\n    <table class=\"table table-borderless app-table table-striped\">\r\n      <thead>\r\n        <tr class=\"\">\r\n          <th>S.No</th>\r\n          <th>Course Name</th>\r\n          <th class=\"text-center\">Training Duration</th>\r\n          <th>Fee</th>\r\n          <th class=\"text-center\">Enrolled</th>\r\n          <th class=\"text-center\">Maximum Subscription</th>\r\n          <th>Training Type</th>\r\n          <th>Trainer</th>\r\n          <th>Location</th>\r\n          <th></th>\r\n\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor =\"let item of filterList  | paginate: { itemsPerPage: 10, currentPage: p };let i = index\" (click)=\"openDetail(item.id)\">\r\n         <td>{{ 10 * (p - 1) + i +1}}</td>\r\n          <td>{{item?.course}}</td>\r\n          <td class=\"text-center\">{{item?.courseDuration}}</td>\r\n          <td>RM {{item?.fee}}</td>\r\n          <td class=\"text-center\">{{item?.enrolled}}</td>\r\n          <td class=\"text-center\">{{item?.maximumSubscription}}</td>\r\n          <td><ng-container *ngIf=\"item?.courseType == '1'\">Daily</ng-container><ng-container *ngIf=\"item?.courseType == '2'\">Weekly</ng-container></td>\r\n          <td>{{item?.trainer.fullName}}</td>\r\n          <td>{{item?.location?.location}}</td>\r\n          <td>\r\n            <div class=\"btn-group edit-button\" dropdown>\r\n              <button id=\"button-basic\" dropdownToggle type=\"button\" class=\" bg-transparent border-0\"\r\n                      aria-controls=\"dropdown-basic\">\r\n                      <span class=\"material-icons\">\r\n                        more_horiz\r\n                      </span>\r\n              </button>\r\n              <!-- <ul id=\"dropdown-basic\" *dropdownMenu class=\"dropdown-menu dropdown-menu-right\"\r\n                  role=\"menu\" aria-labelledby=\"button-basic\">\r\n                <li role=\"menuitem\" (click)=\"editTraining(item.id)\">Edit</li>\r\n                <li role=\"menuitem\" (click)=\"deleteTraining(item.id)\">Delete</li>\r\n              </ul> -->\r\n            </div>\r\n          </td>\r\n        </tr>\r\n\r\n      </tbody>\r\n    </table>\r\n    <div class=\"text-center col-md-12 col-xs-12\" >\r\n      <div *ngIf=\"!!loader\">\r\n         <div  class=\"spinner-box my-0 mx-auto\">\r\n           <div class=\"pulse-container\">\r\n             <div class=\"pulse-bubble pulse-bubble-1\"></div>\r\n             <div class=\"pulse-bubble pulse-bubble-2\"></div>\r\n             <div class=\"pulse-bubble pulse-bubble-3\"></div>\r\n           </div>\r\n         </div>\r\n         <p class=\"text-loader text-bold\">Loading</p>\r\n       </div>\r\n     <h4 *ngIf=\"filterList?.length==0\" class=\"p-5 text-dark text-center\">No data to display</h4>\r\n   </div>\r\n<div class=\"row\">\r\n<div class=\"col-md-6 col-xs-12\">\r\n  <label class=\"fs14\">Showing {{10 * (p - 1) + i }} to {{10 * p}} of {{filterList?.length}} entries</label>\r\n</div>\r\n\r\n<div class=\"col-md-6 col-xs-12 text-right\" *ngIf=\"filterList?.length !== 0\">\r\n  <pagination-controls (pageChange)=\"p = $event\" responsive=\"true\"\r\n    previousLabel=\"Previous\"\r\n    nextLabel=\"Next\"></pagination-controls>\r\n</div>\r\n</div>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/routes/training-management/training-management/training-management.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/routes/training-management/training-management/training-management.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy90cmFpbmluZy1tYW5hZ2VtZW50L3RyYWluaW5nLW1hbmFnZW1lbnQvdHJhaW5pbmctbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/routes/training-management/training-management/training-management.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/routes/training-management/training-management/training-management.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: TrainingManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingManagementComponent", function() { return TrainingManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_core_services_remote_service_remote_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/remote-service/remote-api.service */ "./src/app/core/services/remote-service/remote-api.service.ts");
/* harmony import */ var _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/alert/alert.service */ "./src/app/routes/services/alert/alert.service.ts");
/* harmony import */ var src_app_core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/constants/AppConstants */ "./src/app/core/constants/AppConstants.ts");
/* harmony import */ var src_app_core_constants_apiUrlConstants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/constants/apiUrlConstants */ "./src/app/core/constants/apiUrlConstants.ts");
/* harmony import */ var src_app_core_services_remote_service_reqResObj_Request__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/remote-service/reqResObj/Request */ "./src/app/core/services/remote-service/reqResObj/Request.ts");








var TrainingManagementComponent = /** @class */ (function () {
    function TrainingManagementComponent(router, request, api, alert) {
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
    TrainingManagementComponent.prototype.ngOnInit = function () {
        this.getAllTraining();
    };
    TrainingManagementComponent.prototype.getAllTraining = function () {
        var _this = this;
        this.loader = true;
        this.request.url = src_app_core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].SERVER_URI_OBJECT['core'];
        this.request.type = src_app_core_constants_AppConstants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].API_GET;
        this.request.reqModule = src_app_core_constants_apiUrlConstants__WEBPACK_IMPORTED_MODULE_6__["ApiUrlConstants"].TRAINING;
        this.request.params = "";
        // this.request.body = data;
        console.log(this.request, "reqqqq");
        this.api.requestObject(this.request).then(function (data) {
            _this.loader = false;
            // console.log(data,"Training")
            _this.TrainingList = data;
            _this.filterList = data;
            console.log(_this.TrainingList, "TrainingData");
            // console.log(JSON.stringify(data))
            _this.router.navigate(['/trainingManagement']);
        }, function (err) {
            // this.alert.stickyAlerShow(AppConstants.SERVER_ERR, 'alert-danger');
            // this.errLogin = err.error;
        });
    };
    TrainingManagementComponent.prototype.viewTraining = function (itemid) {
        this.itemid = itemid;
        console.log(this.itemid, "itemID");
        var id = this.itemid;
        this.router.navigate(['trainingManagement/trainingdetail'], { queryParams: { id: this.itemid } });
    };
    TrainingManagementComponent.prototype.openDetail = function (itemID) {
        this.itemid = itemID;
        console.log(this.itemid, "itemID");
        var id = this.itemid;
        this.router.navigate(['trainingManagement/trainingdetail'], { queryParams: { id: this.itemid } });
    };
    // addMember(itemid){
    //   this.itemid=itemid;
    //   console.log(this.itemid,"itemID")
    //   let id=this.itemid
    //   this.router.navigate(['/trainingManagement/createMember'], {queryParams: {id: this.itemid}});
    // }
    TrainingManagementComponent.prototype.searchFilter = function (text) {
        this.filterList = this.TrainingList.filter(function (result) {
            return JSON.stringify(result.course).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
                JSON.stringify(result.courseDuration).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
                JSON.stringify(result.fee).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
                JSON.stringify(result.enrolled).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
                JSON.stringify(result.maximumSubscription).toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
                JSON.stringify(result).toLocaleLowerCase().includes(text.toLocaleLowerCase());
        });
    };
    TrainingManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-training-management',
            template: __webpack_require__(/*! ./training-management.component.html */ "./src/app/routes/training-management/training-management/training-management.component.html"),
            styles: [__webpack_require__(/*! ./training-management.component.scss */ "./src/app/routes/training-management/training-management/training-management.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_core_services_remote_service_reqResObj_Request__WEBPACK_IMPORTED_MODULE_7__["Request"],
            src_app_core_services_remote_service_remote_api_service__WEBPACK_IMPORTED_MODULE_3__["RemoteApiService"],
            _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]])
    ], TrainingManagementComponent);
    return TrainingManagementComponent;
}());



/***/ })

}]);
//# sourceMappingURL=training-management-training-management-module.js.map