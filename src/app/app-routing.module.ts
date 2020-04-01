import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
/*import { SlickCarouselModule } from 'ngx-slick-carousel';*/
/*Importamos todos nuestros componentes en el routing, además del ModuleWithProviders, si el no se podría realizar el routing*/
import { MenuheaderComponent } from './menuheader/menuheader.component';
import { FooterComponent } from './footer/footer.component';
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
import { Blogv1Component } from './blogv1/blogv1.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { StoreOnlineComponent } from './store-online/store-online.component';
import { ContactoComponent } from './contacto/contacto.component'
import {IndividualProductComponent} from './individual-product/individual-product.component';
import { Entrada1Component } from './blogv1/entrada1/entrada1.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { CarritoComprasComponent } from './carrito-compras/carrito-compras.component';
import { ProcesoCompraComponent } from './proceso-compra/proceso-compra.component';
import { NotPageFoundComponent } from './not-page-found/not-page-found.component';
import { PoliticasPrivacidadComponent } from './politicas-privacidad/politicas-privacidad.component';
import { PoliticasComprasComponent } from './politicas-compras/politicas-compras.component';
import { PoliticasDevolucionesComponent } from './politicas-devoluciones/politicas-devoluciones.component';
import { EnviosComponent } from './envios/envios.component';
import { PedidosComponent } from './pedidos/pedidos.component';


const routes: Routes = [
  {path: '', redirectTo: '/anfibia-i', pathMatch: 'full'},
  {path: 'anfibia-i', component: AnfibiaMainComponent }, 
  {path: 'mapa-sitio', component: MapaSitioComponent}, 
  {path: 'crear-cuenta', component: CrearCuentaComponent},
  {path: 'anfibia-pesca', component: FishingComponent}, 
  {path: 'anfibia-caceria', component: HuntingComponent},
  {path: 'preguntas-frecuentes', component: PreguntasFrecuentesComponent},
  {path: 'sobre-nosotros', component: NosotrosComponent}, 
  {
    path: 'asuntos-legales', 
    component: AsuntosLegalesComponent,
    children: [
      {path: '', component: PoliticasPrivacidadComponent},
      {path: 'politicas-privacidad', component: PoliticasPrivacidadComponent },
      {path: 'politicas-compras', component: PoliticasComprasComponent},
      {path: 'politicas-devoluciones', component: PoliticasDevolucionesComponent},
      {path: 'politicas-envios', component: EnviosComponent}
    ]
  },
  {path: 'anfibia-supervivencia', component: SurvivalComponent}, 
  {path: 'ubicaciones', component: UbicacionComponent},
  {path: 'blog', component: Blogv1Component}, 
  {path: 'proveedores', component: ProveedoresComponent}, 
  {path: 'tienda-online', component: StoreOnlineComponent}, 
  {path: 'contactanos', component: ContactoComponent}, 
  {path: 'producto', component: IndividualProductComponent}, 
  {path: 'entrada', component: Entrada1Component}, 
  {path: 'lista-deseos', component: WishListComponent }, 
  {path: 'carrito-compras', component: CarritoComprasComponent}, 
  {path: 'proceso-compra', component: ProcesoCompraComponent},
  {path: '**', component: NotPageFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MenuheaderComponent, FooterComponent, AnfibiaMainComponent, MapaSitioComponent, CrearCuentaComponent, FishingComponent,
  HuntingComponent, PreguntasFrecuentesComponent, NosotrosComponent, AsuntosLegalesComponent, SurvivalComponent, UbicacionComponent, Blogv1Component, ProveedoresComponent,
  StoreOnlineComponent, ContactoComponent, IndividualProductComponent, Entrada1Component, WishListComponent, CarritoComprasComponent, ProcesoCompraComponent, NotPageFoundComponent, PoliticasPrivacidadComponent,
  PoliticasComprasComponent, PoliticasDevolucionesComponent, EnviosComponent, PedidosComponent]