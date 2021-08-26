
import  { NgModule} from '@angular/core';
import { Routes, RouterModule} from '@angular/router'
import { CarritoComprasComponent} from './carrito-compras.component'

const routes:Routes = [
    {path: '', component: CarritoComprasComponent},
]



@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]

})
export class routingCarritoCompras{

}