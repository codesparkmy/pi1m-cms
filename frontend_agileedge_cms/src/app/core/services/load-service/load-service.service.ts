import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import 'rxjs/add/operator/map';
import { properties } from '../../../../assets/properties/properties';
import { AppService } from '../../../core/services/app/app.service';
import {AppConstants} from '../../constants/AppConstants'
@Injectable({
  providedIn: 'root'
})
export class LoadServiceService {


  constructor(protected https: HttpClient, public app: AppService) { }

  public loadProperties() {
    // console.log("************* Load The Server Setup Start *******");
    //console.log("Environment Path 0:" + properties.URL_FILE_PATH);
    return new Promise((resolve, reject) => {
      this.https.get(properties.URL_FILE_PATH).subscribe(data => {
        let envResponse: any
        envResponse = data;
        //  console.log("Environment Check :" + JSON.stringify(envResponse));
        switch (envResponse.environment) {
          case properties.PRODUCTION: {
            this.assigningServerUri(properties.PRODUCTION_FILE_PATH).then(response => {
              console.log("************* your path runing in  *******");
              resolve(true);
            });
          } break;
          case properties.DEVELOPMENT: {
            this.assigningServerUri(properties.DEVELOPMENT_FILE_PATH).then(response => {
              console.log("************* Load The Server Setup End *******");
              resolve(true);
            });
          } break;


        }

      }, error => {
        console.log("LoadProperties Error :" + error);
        reject(false);
        //console.log("************* Load The Server Setup End *******");
      });
    });
  }




  assigningServerUri(filepath) {
    //console.log("Server Setup file path :" + filepath);
    return new Promise((resolve, reject) => {
      resolve(true);
      this.https.get(filepath).subscribe(serverResponse => {
      
        // this.app.apiUrlLink = serverResponse;
        // this.app.console(JSON.stringify(this.app.apiUrlLink))
        AppConstants.SERVER_URI_OBJECT =serverResponse;
        console.log("Server setup response Object :" + JSON.stringify(AppConstants.SERVER_URI_OBJECT));
        resolve(true);
      }, (err) => {
        reject(false);
        console.log("ObjList-err----" + JSON.stringify(err))
      });
    });

  }



}