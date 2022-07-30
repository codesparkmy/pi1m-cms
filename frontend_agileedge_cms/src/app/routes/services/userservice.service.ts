import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { promise } from 'protractor';
//import { Response } from '@angular/http';
//import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient,) { }

  login(data){
    return new Promise((resolve,reject)=>{
    this.http.post('http://180.151.69.138:2108/users/login',data).subscribe(
    response =>resolve(response),
    error => reject(error)
    );
    });
    }
}
