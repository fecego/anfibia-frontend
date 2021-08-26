import { NgModule } from '@angular/core';
import { ProcesoCompraComponent } from './proceso-compra.component';
import { RouterModule, Routes} from '@angular/router';


const routes:Routes = [
    {path:'', component: ProcesoCompraComponent,
    children:[
        {path: 'express/:cartId', component: ProcesoCompraComponent}    
    ]},
    
]


@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class procesoCompraRouting{

}