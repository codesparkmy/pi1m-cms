import { Injectable,EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  $updateProfile=new EventEmitter
  menuItems: Array<any>;
  
  constructor() {
    this.menuItems = [];
}

upload(profileImg){
this.$updateProfile.emit(profileImg)
      }

}
