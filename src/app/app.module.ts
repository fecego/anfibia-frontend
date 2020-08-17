import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ProductosService } from './servicios/productos.service';
import { CarritoInfoService } from './servicios/carrito-info.service';
import { UsuarioService } from './servicios/usuario.service';
import { UsuariosService } from './servicios/usuarios.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HttpClientModule } from '@angular/common/http';
import { ProductosModalComponent } from './modals/productos-modal/productos-modal.component';
import { TerminosYCondicionesComponent } from './terminos-y-condiciones/terminos-y-condiciones.component';
import { EditPerfilComponent } from './modals/edit-perfil/edit-perfil.component';
import { NuevaDireccionComponent } from './modals/nueva-direccion/nueva-direccion.component';
import { ModalInicioSesionComponent } from './modals/modal-inicio-sesion/modal-inicio-sesion.component';
import { ModalCarritoComponent } from './modals/modal-carrito/modal-carrito.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { NgxSpinnerModule } from "ngx-spinner";
import { LocalstoreComponent } from './localstore/localstore.component';
import { FilterMenuPipe } from './menuheader/filter-menu.pipe';
import { OracionMayusculasPipe } from './pipes/oracion-mayusculas.pipe';

/*import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';*/



@NgModule({
  declarations: [
    AppComponent, 
    routingComponents, ProductosModalComponent, TerminosYCondicionesComponent, EditPerfilComponent, NuevaDireccionComponent, ModalInicioSesionComponent, ModalCarritoComponent, LocalstoreComponent, FilterMenuPipe, OracionMayusculasPipe
  ],
  entryComponents:[
    ProductosModalComponent, 
    EditPerfilComponent,
    NuevaDireccionComponent,
    ModalInicioSesionComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule, 
    CommonModule ,
    SlickCarouselModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule,
    NgbModule, 
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxSpinnerModule
    /*FontAwesomeModule*/
  ],
  providers: [ProductosService, UsuarioService, UsuariosService, CarritoInfoService],
  bootstrap: [AppComponent],
})

export class AppModule { }


