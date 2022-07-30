import { Injectable,EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  $isUploadProfile=new EventEmitter();
  constructor() { }
  upload(){
      console.log("UploadService")
  }
}

