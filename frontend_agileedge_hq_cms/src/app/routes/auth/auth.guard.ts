import { Injectable } from '@angular/core';
//import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
//import { Observable } from 'rxjs';
import { Router, CanActivate,  ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute , UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {UserserviceService} from '../../routes/services/userservice.service'; 
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {

  constructor(private router: Router,  private activatedRoute: ActivatedRoute, private userservice: UserserviceService) {

    
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    
   
    
    // return true;
    if (localStorage.getItem('currentUser')) {
        return true
    }else{
    this.router.navigate(['/login'] );
    return false;
    }
    
    
    
    // not logged in so redirect to login page with the return url
    
    }
  
}
