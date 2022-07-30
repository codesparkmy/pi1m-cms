import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
//import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { remarksConstants, updatedRemarksConstants } from '../constants/remarksConstants';



@Injectable()
export class ApiErrorService {

  constructor() { }


  // HTTP ERROR HANDLING
  handleError(error): Promise<any> {
    let errorMessage = '';
    // if (error.error instanceof ErrorEvent) {
    //   // client-side error
    //   console.log("Client-side error");
    //   errorMessage = "`Error: `" + error.error.message;
    // } else {
    //   // server-side error
    //   console.log("server-side error");
    //   errorMessage = "`Error Code:'" + error.status + '\n' + "Message:" + error.message;
    // }

    // let errorObject = {
    //   code: Number(0),
    //   msg: ""
    // }

    if (error instanceof HttpErrorResponse) {
      return new Promise((resolve, reject) => {
        //console.log("Server Error Status :" + error.status);
        //console.log("Server Error Message :" + error.message);
        switch (error.status) {
          case 0:
            errorMessage = remarksConstants.BAD_REQUEST_MSG;
            resolve(errorMessage);
            break;
          case 303:

            errorMessage = remarksConstants.NO_DATA_AVAILABLE_MSG;
            resolve(errorMessage);
            break;
          case 400:

            errorMessage = remarksConstants.BAD_REQUEST_MSG;
            resolve(errorMessage);
            break;
          case 401:
            errorMessage = remarksConstants.UNAUTHORIZED_REQUEST_MSG;
            resolve(errorMessage);
            break;
          case 404:

            errorMessage = remarksConstants.SERVER_NOT_FOUND_MSG;
            resolve(errorMessage);
            break;
          case 405:

            errorMessage = remarksConstants.BAD_REQUEST_MSG;
            resolve(errorMessage);
            break;
          case 500:

            errorMessage = remarksConstants.SERVER_NOT_FOUND_MSG
            resolve(errorMessage);
            break;

          default:
            errorMessage = remarksConstants.SERVER_NOT_FOUND_MSG
            resolve(errorMessage);
            break;
        }

      });

    }

  }
}
