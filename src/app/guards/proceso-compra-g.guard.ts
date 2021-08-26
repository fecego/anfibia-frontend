import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductosService } from '../servicios/productos.service'
import { ActivatedRoute, Route, Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class ProcesoCompraGGuard implements CanActivate {
  public extractV:boolean;
  constructor(private productS: ProductosService, private router: Router){

  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const localSP = this.productS.getPurchase() === "true";  
    this.productS.BehaviorsubjectRefresCarritoCompras.subscribe(resultado => {
      this.extractV = resultado;
    });

    if(this.extractV == true || localSP === true){
      return true;
    }else{
      console.log('Me estoy yendo al false');
      this.router.navigateByUrl('/anfibia-i');
      return false;

    }

    
  }
  
}
