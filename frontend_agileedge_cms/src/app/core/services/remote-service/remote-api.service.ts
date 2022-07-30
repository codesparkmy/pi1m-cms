import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AppService } from '../app/app.service';
import { AppConstants } from '../../constants/AppConstants';
import { ApiUrlConstants } from '../../constants/apiUrlConstants';
import { Request } from './reqResObj/Request';
import { Router, ActivatedRoute } from '@angular/router'
@Injectable({
  providedIn: 'root'
})

export class RemoteApiService {
  public headers_object = new HttpHeaders();
  public httpOptions: any;
  public refreshToken
  constructor(private router: Router, public http: HttpClient, public app: AppService, public request: Request) {

  }


  //api call post
  postApi(url, requestObj): Promise<any> {
    // debugger
    // console.log(url)
    return new Promise((resolve, reject) => {
      // if (this.isTokenAvailable(requestObj)) {
      // this.http.post<any>(url, requestObj).subscribe(data => {
      //   console.log(data,"Data")
      //   // this.app.console(JSON.stringify(data))
      //   resolve(data);
      // }, (err) => {
      //   reject(err);
      //   this.app.console(err)
      // });
      // }
      if (requestObj == "") {
        this.http.get<any>(url).subscribe(data => {
          resolve(data);
        }, (err) => {
          this.app.console(err)
          reject(err);
        });
      }
      else {
        this.http.post<any>(url, requestObj).subscribe(data => {
          // console.log(data, "Data")
          // this.app.console(JSON.stringify(data))
          resolve(data);
        }, (err) => {
          reject(err);
          this.app.console(err)
        });
      }
    });
  }

  //api call get
  getApi(url, requestObj): Promise<any> {
    // let reqModule = requestObj.reqModule;
    return new Promise((resolve, reject) => {

      if (requestObj == "") {
        this.http.get<any>(url).subscribe(data => {
          resolve(data);
        }, (err) => {
          this.app.console(err)
          reject(err);
        });
      }
      else {
        this.http.get<any>(url, requestObj).subscribe(data => {
          resolve(data);
        }, (err) => {
          this.app.console(err)
          reject(err);
        });
      }
      // this.setToken()
      // this.httpOptions.params = requestObj;

    }


    );

  }

  //api call put
  putApi(url, requestObj): Promise<any> {
    // let reqModule = requestObj.reqModule;
    return new Promise((resolve, reject) => {
      if (this.isTokenAvailable(requestObj)) {
        this.setToken()
        // this.httpOptions.params = requestObj;
        // this.http.put<any>()
        this.http.put<any>(url, requestObj, this.httpOptions).subscribe(data => {
          resolve(data['data']);
        }, (err) => {
          this.app.console(err)
          reject(err);
        });
      }
    });

  }

  //api call put
  deleteApi(url, requestObj, reqparams): Promise<any> {
    // let reqModule = requestObj.reqModule;
    return new Promise((resolve, reject) => {
      if (this.isTokenAvailable(requestObj)) {
        this.setToken()
        this.httpOptions.params = reqparams;
        this.httpOptions.body = requestObj;
        this.http.delete<any>(url, this.httpOptions).subscribe(data => {
          resolve(data['data']);
        }, (err) => {
          this.app.console(err)
          reject(err);
        });
      }
      else {
        this.http.get<any>(url, requestObj).subscribe(data => {
          resolve(data);
        }, (err) => {
          this.app.console(err)
          reject(err);
        });
      }

    });

  }

  //asianpaints img save


  imgApi(url, requestObj): Promise<any> {
    // console.log('url and req',url,requestObj)
    return new Promise((resolve, reject) => {
      this.http.post<any>(url, requestObj).subscribe(data => {
        resolve(data);
      }, (err) => {
        reject(err);
        this.app.console(err)
      });
      // }
    });


  }

  // REQUEST DATA
  requestObject(request) {
    // debugger
    this.app.console("url requestObject----->" + JSON.stringify(request))
    if (AppConstants.API_GET == request.type) {
      this.app.console(AppConstants.API_GET)
      return this.getApi(request.url + request.reqModule + request.params, request.params);
    } else if (AppConstants.API_POST == request.type) {
      this.app.console(AppConstants.API_POST)
      return this.postApi(request.url + request.reqModule + request.params, request.body);
    } else if (AppConstants.API_PUT == request.type) {
      this.app.console(AppConstants.API_PUT)
      return this.putApi(request.url + request.reqModule, request.body);
    } else if (AppConstants.API_DELETE == request.type) {
      this.app.console(AppConstants.API_DELETE)
      return this.deleteApi(request.url + request.reqModule + request.params, request.body, request.params);
    } else if (AppConstants.API_MULIPATH == request.type) {
      // this.app.console(ApiUrlConstants.API_MULIPATH)
      // return this.imgApi(request.url + request.reqModule + request.params, request.body, request.params);
      return this.imgApi(request.url + request.reqModule + request.params, request.body);

    }

    else {
      this.app.console("ther is no request.type")
    }
  }



  setToken() {
    if (!!localStorage.getItem('auth_token')) {
      const headers = new HttpHeaders({
        authorization: localStorage.getItem('auth_token'),
        // 'Content-type': 'application/json'
      });
      this.httpOptions = {
        headers: headers
      };
    }

    return this.httpOptions;
  }


  isTokenAvailable(request) {
    let tokenData = localStorage.getItem('auth_token');
    let reqModuleValue = request['reqModule'];
    let reqTypeValue = request['reqType'];
    let resStatus = true;
    // console.log("abg22@gm.com-----------"+JSON.stringify(request))
    if (reqModuleValue == ApiUrlConstants.LOGIN) {
      resStatus = true;
    } else {
      if (!!(tokenData)) {
        resStatus = true;
      }
      else {
        resStatus = false;
      }
    }
    // this.app.console("resStatus  " + resStatus);
    // console.log("isTokenAvailable ="+resStatus);
    return resStatus;
  }




}
