import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ForgetPasswordService } from '../forget-password/forget-password.service';





@Injectable({
  providedIn: 'root'
})


export class ForgetPasswordGuardGuard implements CanActivate {
  public checkStatusFS:boolean;
  constructor(private router:Router, private forgetPassS: ForgetPasswordService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.forgetPassS.getTokenForgetPassword() == 'true'){
      return true;
    }else{
      this.router.navigateByUrl('/anfibia-i');
      return false;
    }

  }
  
}
