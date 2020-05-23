import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ProductosService } from './servicios/productos.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HttpClientModule } from '@angular/common/http';
import { ProductosModalComponent } from './modals/productos-modal/productos-modal.component';
import { TerminosYCondicionesComponent } from './terminos-y-condiciones/terminos-y-condiciones.component';

/*import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';*/



@NgModule({
  declarations: [
    AppComponent, 
    routingComponents, ProductosModalComponent, TerminosYCondicionesComponent
  ],
  entryComponents:[
    ProductosModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    SlickCarouselModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule,
    NgbModule
    /*FontAwesomeModule*/
  ],
  providers: [ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
