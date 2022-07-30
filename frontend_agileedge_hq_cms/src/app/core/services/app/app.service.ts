import { Injectable, ViewChild } from '@angular/core';
import { PlatformLocation, Location } from '@angular/common';
import { properties } from '../../../../assets/properties/properties';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppService {
 
  public sectionToken: any;
  public productionConsoleBlock: boolean = false;
  public mediaCategory: any = [];
  public defaultImage = 'assets/images/orionthemes-placeholder-image.jpg'
  public moduleLoding: boolean = false;
  public date = new Date();
  public apiUrlLink:any;
  public user: any = {
    createdby: 'admin'
  }
  constructor(public location: PlatformLocation, public https: HttpClient) {
   
   
  }






  //back to last page
  back() {
    this.location.back();
  }


  //app trowout console.log
  console(log?) {
    this.https.get(properties.URL_FILE_PATH).subscribe(data => {
      let envResponse: any
      envResponse = data;
      if (envResponse.environment === 'dev') {
        console.log(log);
      } else {
        if (this.productionConsoleBlock === false) {
          this.productionConsoleBlock = true;
          // console.log("%cStop!", "color: red; font-family: sans-serif; font-size: 4.5em; font-weight: bolder; text-shadow: #000 1px 1px;")
          // console.log("%cThis is a browser feature intended for developers. If someone told you to copy and paste something here to enable a Logface feature or 'hack' someone's account, it is a scam and will give them access to your Logface account.", "color: rgba(85, 85, 85, 0.8);font-family: sans-serif; font-size: 1.8em; font-weight: bolder;")

        } else {

        };

      };

    }, error => {
      console.log("LoadProperties Error :" + error);

      //console.log("************* Load The Server Setup End *******");
    });

  }

  //Correct way to convert size in bytes to KB, MB, GB in JavaScript
  formatSizeUnits(bytes) {
    if (bytes >= 1073741824) { bytes = (bytes / 1073741824).toFixed(2) + " GB"; }
    else if (bytes >= 1048576) { bytes = (bytes / 1048576).toFixed(2) + " MB"; }
    else if (bytes >= 1024) { bytes = (bytes / 1024).toFixed(2) + " KB"; }
    else if (bytes > 1) { bytes = bytes + " bytes"; }
    else if (bytes == 1) { bytes = bytes + " byte"; }
    else { bytes = "0 bytes"; }
    return bytes;
  }

  fileSizeValidation(file,size){
    if(file.size > size){
       return true
    }else{
      this.console("imge size leset hen 8mb");
      return false
  
    }
  }


}
