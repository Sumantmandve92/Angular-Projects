import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServicesService } from './services.service';

@Injectable({
  providedIn: 'root'
})
export class MySecurityGuardGuard implements CanActivate {
  constructor(private serve:ServicesService){}
 
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.serve.isLoggedIn==1||this.serve.isLoggedIn==2){
      return true;
    }
    else
    {
      return false;
    }
     
  }
 
  
}
