import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
<<<<<<< HEAD


=======
import {IndividualProductComponent} from './individual-product/individual-product.component';
import { Entrada1Component } from './blogv1/entrada1/entrada1.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CarritoComprasComponent } from './carrito-compras/carrito-compras.component';
import { ProcesoCompraComponent } from './proceso-compra/proceso-compra.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { PerfilComponent } from './perfil/perfil.component';
>>>>>>> 457ea870f3bf3123de545155a4c098ca20fb0cdd



@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    routingComponents
=======
    MenuheaderComponent,
    FooterComponent,
    AnfibiaMainComponent,
    MapaSitioComponent,
    FishingComponent,
    HuntingComponent,
    SurvivalComponent,
    AsuntosLegalesComponent,
    UbicacionComponent,
    CrearCuentaComponent,
    PreguntasFrecuentesComponent,
    Blogv1Component,
    NosotrosComponent,
    ProveedoresComponent,
    Entrada1Component,
    WishListComponent,
    StoreOnlineComponent,
    ContactoComponent,
    CarritoComprasComponent,
    ProcesoCompraComponent,
    PedidosComponent,
    PerfilComponent,

>>>>>>> 457ea870f3bf3123de545155a4c098ca20fb0cdd
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    AngularFontAwesomeModule,
    FormsModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
