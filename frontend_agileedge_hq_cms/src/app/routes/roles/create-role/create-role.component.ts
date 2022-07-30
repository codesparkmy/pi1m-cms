import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppConstants } from 'src/app/core/constants/AppConstants';
import { RemoteApiService } from 'src/app/core/services/remote-service/remote-api.service';
import { Request } from 'src/app/core/services/remote-service/reqResObj/Request';
import { ApiUrlConstants } from '../../../core/constants/apiUrlConstants';
import { AlertService } from '../../services/alert/alert.service';

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.scss']
})
export class CreateRoleComponent implements OnInit {

  public roleForm: FormGroup;
  public roleList = [];
  public itemid: any = "";
  public reportsData: any = [];
  public changedPermissionObj = {};
  public isReadOnly = false;
  public isUpdate = false;
  public roleId = "";
  public pageId;

  constructor(private activateRoute: ActivatedRoute,
    public request: Request,
    public api: RemoteApiService,
    public router: Router,
    public alert :AlertService) { }

  ngOnInit() {
    this.setRoleForm();
    this.checkPrevId();
  }

  checkPrevId() {
    this.activateRoute.queryParams.subscribe(params => {
      if (params.id) {
        this.isUpdate = true;
        this.roleId = params.id
        this.getPermissionsByRoleId(params.id)
      }
      else this.getReportsList();
    });
  }

  getPermissionsByRoleId(id) {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.GET_ROLE_BY_ID;
    this.request.params = id;
    this.api.requestObject(this.request).then(data => {
      if (data && data != undefined) {
        let dataArray = data[0];
        this.setUpdateData(dataArray);
      }
    }, (err) => {
      console.error(err);
    });
  }

  setRoleForm() {
    this.roleForm = new FormGroup({
      roleName: new FormControl('', [Validators.required])
    });
  }

  setUpdateData(dataArray) {
    this.pageId = dataArray['id']
    this.roleForm.patchValue({
      roleName: dataArray.name
    })
    let tempList = dataArray.subpage;
    for (let i = 0; i < tempList.length; i++) {
      this.reportsData.push({
        "addPermission": tempList[i].permissionList.addPermission,
        "editPermission": tempList[i].permissionList.editPermission,
        "deletePermission": tempList[i].permissionList.deletePermission,
        "viewPermission": tempList[i].permissionList.viewPermission,
        "subpageId": tempList[i].permissionList['subpageId'],
        "name": tempList[i]['name'],
        "pageId": tempList[i].permissionList['pageId']
      })
    }
    this.isReadOnly = true;
  }

  saveData() {
    if (this.isUpdate == false) {
      let tempArr = JSON.parse(JSON.stringify(this.reportsData))
      tempArr.forEach(function (v) { delete v.name });
      let tempObj = {
        "name": this.roleForm.value['roleName'],
        "permissionList": tempArr
      }
      this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
      this.request.type = AppConstants.API_POST;
      this.request.reqModule = ApiUrlConstants.CREATE_ROLE;
      this.request.params = ""
      this.request.body = tempObj;
      this.api.requestObject(this.request).then(data => {
        this.alert.stickyAlerShow( 'Created Successful', 'alert-success');
        this.router.navigate(['/roles'])
      }, (err) => {
        console.error(err);
      });
    } else {
      let updateArr = [];
      for (let key in this.changedPermissionObj) {
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
      this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
      this.request.type = AppConstants.API_POST;
      this.request.reqModule = ApiUrlConstants.UPDATE_PERMISSION_BY_ROLE;
      this.request.params = ""
      this.request.body = updateArr;
      this.api.requestObject(this.request).then(data => {
        if (data.message) {
          this.alert.stickyAlerShow( 'Updated Successful', 'alert-success');
          this.router.navigate(['/roles'])
        }
      }, (err) => {
        console.error(err);
      });
    }

  }

  getReportsList() {
    this.request.url = AppConstants.SERVER_URI_OBJECT['core'];
    this.request.type = AppConstants.API_GET;
    this.request.reqModule = ApiUrlConstants.GET_ALL_REPORTS;
    this.request.params = ""
    this.api.requestObject(this.request).then(data => {
      let testData = data;
      for (let i = 0; i < testData.length; i++) {
        this.reportsData.push({
          "addPermission": false,
          "editPermission": false,
          "deletePermission": false,
          "viewPermission": false,
          "subpageId": testData[i]['id'],
          "name": testData[i]['name'],
          "pageId": testData[i]['pageId']
        })
      }
    }, (err) => {
      console.error(err);
    });
  }

  getEvent = (event, i) => {
    
    if( !event.subpageId ) {
      event.subpageId = i
    }
    if( !event.pageId ) {
      event.pageId = this.pageId
    }
    this.changedPermissionObj[event.subpageId] = event;
  }

}
