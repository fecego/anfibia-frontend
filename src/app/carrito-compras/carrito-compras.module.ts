import { NgModule} from '@angular/core'
import { CarritoComprasComponent } from './carrito-compras.component'
import { routingCarritoCompras} from './carrito-compras-routing.module'
import { CommonModule} from '@angular/common'



import { NgxSpinnerModule } from "ngx-spinner";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { shareModule}  from '../share/share.module';
//import { OracionMayusculasPipe } from '../pipes/oracion-mayusculas.pipe';


//import { ProductosModalComponent } from '../modals/productos-modal/productos-modal.component';
//import { ModalInicioSesionComponent } from '../modals/modal-inicio-sesion/modal-inicio-sesion.component';


@NgModule({
    imports: [
        shareModule,
        routingCarritoCompras,
        CommonModule ,
        NgxSpinnerModule,
        CarouselModule, 
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule


    ],
    declarations: [
        CarritoComprasComponent,
        //OracionMayusculasPipe,
        //ProductosModalComponent, 
        //EditPerfilComponent,
        //NuevaDireccionComponent,
        //ModalInicioSesionComponent
    ],
    entryComponents:[
        //ProductosModalComponent, 
        //EditPerfilComponent,
        //NuevaDireccionComponent,
        //ModalInicioSesionComponent
        //AddressModalComponent
      ]
})
export class carritoComprasModule{

}