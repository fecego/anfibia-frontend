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
<<<<<<< HEAD
=======
=======
import { Entrada1Component } from './blogv1/entrada1/entrada1.component';
<<<<<<< HEAD
import { WishListComponent } from './wish-list/wish-list.component';
=======
>>>>>>> 6853347259eb7aad966e24d0e3ea7b829d165a34
>>>>>>> 06dbb2296af1fc4d761aaf150c3550d0e825c406
>>>>>>> 72fe44238f3c5ad6b9646b420abfc97e1b04180f



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
<<<<<<< HEAD
    StoreOnlineComponent,
    
=======
<<<<<<< HEAD
    Entrada1Component,
    WishListComponent
=======
<<<<<<< HEAD
    StoreOnlineComponent,
    
=======
    Entrada1Component
>>>>>>> 6853347259eb7aad966e24d0e3ea7b829d165a34
>>>>>>> 06dbb2296af1fc4d761aaf150c3550d0e825c406
>>>>>>> 72fe44238f3c5ad6b9646b420abfc97e1b04180f
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
