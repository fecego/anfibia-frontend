import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuariosService } from '../servicios/usuarios.service';
import { Router} from '@angular/router';
import { filter} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  public previousUrl:string;
  public currentUrl:string;


  constructor(private router: Router, private userService: UsuariosService){

  }


  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.userService.getToken() == null || this.userService.getToken() == undefined){
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
  
}
