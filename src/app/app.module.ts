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

@NgModule({
  declarations: [
    AppComponent,
    MenuheaderComponent,
    FooterComponent,
    AnfibiaMainComponent,
    MapaSitioComponent,
    FishingComponent,
    HuntingComponent,
    CrearCuentaComponent,
    PreguntasFrecuentesComponent,
    NosotrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
