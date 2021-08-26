import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductosService } from '../servicios/productos.service'
import { ActivatedRoute, Route, Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class CompraCompletaGGuard implements CanActivate {

  public extractV:boolean;

  constructor(private productS: ProductosService, private router: Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const data = localStorage.getItem('valorCompra');
        if(data =='true'){
          return true;
        }else{
          this.router.navigateByUrl('/anfibia-i');
          return false;
        }

  }
  
}
