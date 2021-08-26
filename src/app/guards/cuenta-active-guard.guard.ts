import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { cuentaActiveService } from '../cuenta-active/cuenta-active.service'
import { Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CuentaActiveGuardGuard implements CanActivate {
  public result;
  constructor(private cActiveS: cuentaActiveService, private router: Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const c = localStorage.getItem('cuentaActive');
    console.log('This is the c value', c);
    if(localStorage.getItem('valorPrueba') == 'true'){
      return true;
    }else{
      this.router.navigateByUrl('/anfibia-i');
      return false;
    }

  }
  
}
