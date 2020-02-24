import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuheaderComponent } from './menuheader/menuheader.component';
import { FooterComponent } from './footer/footer.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AnfibiaMainComponent } from './anfibia-main/anfibia-main.component';
import { MapaSitioComponent } from './mapa-sitio/mapa-sitio.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { FishingComponent } from './fishing/fishing.component';
import { HuntingComponent } from './hunting/hunting.component';
import { PreguntasFrecuentesComponent } from './preguntas-frecuentes/preguntas-frecuentes.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { AsuntosLegalesComponent } from './asuntos-legales/asuntos-legales.component';
import { SurvivalComponent } from './survival/survival.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { FormsModule } from '@angular/forms';
import { Blogv1Component } from './blogv1/blogv1.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { StoreOnlineComponent } from './store-online/store-online.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import {IndividualProductComponent} from './individual-product/individual-product.component';
import { Entrada1Component } from './blogv1/entrada1/entrada1.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CarritoComprasComponent } from './carrito-compras/carrito-compras.component';
import { ProcesoCompraComponent } from './proceso-compra/proceso-compra.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { PerfilComponent } from './perfil/perfil.component';



@NgModule({
  declarations: [
    AppComponent,
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
