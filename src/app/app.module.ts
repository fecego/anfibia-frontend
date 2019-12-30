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
<<<<<<< HEAD
import { PreguntasFrecuentesComponent } from './preguntas-frecuentes/preguntas-frecuentes.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { SurvivalComponent } from './survival/survival.component';
import { AsuntosLegalesComponent } from './asuntos-legales/asuntos-legales.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
=======
import { SurvivalComponent } from './survival/survival.component';
import { AsuntosLegalesComponent } from './asuntos-legales/asuntos-legales.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
<<<<<<< HEAD
import { PreguntasFrecuentesComponent } from './preguntas-frecuentes/preguntas-frecuentes.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
=======
>>>>>>> 97102eff9a7c4b73f354cc13b20b9379ddce7714
import { FormsModule } from '@angular/forms';
import { Blogv1Component } from './blogv1/blogv1.component';
<<<<<<< HEAD

=======
=======
>>>>>>> 59f6c96acc5b7fb3b44c0eeac8e8342b19c3f262
>>>>>>> 5003572e323f6b8303c496d7409ff766faf9f4ae
>>>>>>> 27c218b97576074f4cf9dae107eee72a4801b5bc
>>>>>>> 97102eff9a7c4b73f354cc13b20b9379ddce7714

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
    NosotrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    AngularFontAwesomeModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
