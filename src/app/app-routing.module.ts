import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
/*import { SlickCarouselModule } from 'ngx-slick-carousel';*/
/*Importamos todos nuestros componentes en el routing, además del ModuleWithProviders, si el no se podría realizar el routing*/
import { MenuheaderComponent } from './menuheader/menuheader.component';
import { FooterComponent } from './footer/footer.component';
/*import { AnfibiaMainComponent } from './anfibia-main/anfibia-main.component';*/
//import { MapaSitioComponent } from './mapa-sitio/mapa-sitio.component';
//import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
//import { FishingComponent } from './fishing/fishing.component';
//import { HuntingComponent } from './hunting/hunting.component';
//import { PreguntasFrecuentesComponent } from './preguntas-frecuentes/preguntas-frecuentes.component';
/*import { NosotrosComponent } from './nosotros/nosotros.component';*/
//import { AsuntosLegalesComponent } from './asuntos-legales/asuntos-legales.component';
import { SurvivalComponent } from './survival/survival.component';
//import { UbicacionComponent } from './ubicacion/ubicacion.component';
//import { Blogv1Component } from './blogv1/blogv1.component';
//import { ProveedoresComponent } from './proveedores/proveedores.component';
//import { StoreOnlineComponent } from './store-online/store-online.component';
//import { ContactoComponent } from './contacto/contacto.component'
//import { IndividualProductComponent} from './individual-product/individual-product.component';
import { Entrada1Component } from './blogv1/entrada1/entrada1.component';
//import { WishListComponent } from './wish-list/wish-list.component';
//import { CarritoComprasComponent } from './carrito-compras/carrito-compras.component';
//import { ProcesoCompraComponent } from './proceso-compra/proceso-compra.component';
//import { NotPageFoundComponent } from './not-page-found/not-page-found.component';
//import { PoliticasPrivacidadComponent } from './politicas-privacidad/politicas-privacidad.component';
//import { PoliticasComprasComponent } from './politicas-compras/politicas-compras.component';
//import { PoliticasDevolucionesComponent } from './politicas-devoluciones/politicas-devoluciones.component';
//import { EnviosComponent } from './envios/envios.component';
//import { TerminosYCondicionesComponent } from './terminos-y-condiciones/terminos-y-condiciones.component';
//import { PerfilComponent } from './perfil/perfil.component';
//import { PedidosComponent } from './pedidos/pedidos.component';
//import { LocalstoreComponent } from './localstore/localstore.component';
//import { TorneosComponent} from './torneos/torneos.component'
//import { LoginAccessComponent } from './login-access/login-access.component'
//import { ProcessFinalComponent } from './process-final/process-final.component';

//import { VerificacionCuentaComponent } from './verificacion-cuenta/verificacion-cuenta.component';
//import { CuentaActiveComponent } from './cuenta-active/cuenta-active.component';
//import { RegisterAddressComponent } from './register-address/register-address.component';
//import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { ProcesoCompraGGuard } from './guards/proceso-compra-g.guard'
//import { GeneratePasswordComponent } from './generate-password/generate-password.component';
import { CompraCompletaGGuard } from './guards/compra-completa-g.guard';
import { CuentaActiveGuardGuard } from './guards/cuenta-active-guard.guard';
import { ForgetPasswordGuardGuard } from './guards/forget-password-guard.guard';

const routes: Routes = [
  {path: '', redirectTo: '/anfibia-i', pathMatch: 'full'},
  /*{path: 'anfibia-i', component: AnfibiaMainComponent},*/ 
  {path: 'anfibia-i', loadChildren: () =>
  import('./anfibia-main/anfibia-i.module').then(m => m.anfibiaI)},

  {path: 'mapa-sitio', loadChildren: () =>
  import('./mapa-sitio/mapa-sitio.module').then(m => m.mapaSitioModule)}, 

  {path: 'crear-cuenta',loadChildren: () =>
  import('./crear-cuenta/crear-cuenta.module').then(m => m.crearCuentaModule), canActivate: [AuthGuardGuard]},

  {path: 'anfibia-pesca', loadChildren: () =>
  import('./fishing/fishing.module').then(m => m.fishingModule)}, 

  {path: 'anfibia-caceria',  loadChildren: () =>
  import('./hunting/hunting.module').then(m => m.huntingModule)},

  {path: 'preguntas-frecuentes', loadChildren: () =>
  import('./preguntas-frecuentes/preguntas-frecuentes.module').then(m => m.preguntasFrecuentes)},

  {path: 'sobre-nosotros',loadChildren: () =>
  import('./nosotros/nosotros.module').then(m => m.nosotrosModule)},

  {path: 'login',  loadChildren: () =>
  import('./login-access/login.module').then(m => m.loginModule), canActivate: [AuthGuardGuard]}, 


  {path: 'asuntos-legales', loadChildren: () =>
  import('./asuntos-legales/asuntos-legales.module').then(m => m.asuntosLegales)
    /*path: 'asuntos-legales', 
    component: AsuntosLegalesComponent, 
    children: [
      {path: '', component: PoliticasPrivacidadComponent},
      {path: 'politicas-privacidad', component: PoliticasPrivacidadComponent },
      {path: 'politicas-compras', component: PoliticasComprasComponent},
      {path: 'politicas-devoluciones', component: PoliticasDevolucionesComponent},
      {path: 'politicas-envios', component: EnviosComponent},
      {path: 'terminos_y_condiciones', component:TerminosYCondicionesComponent}
    ]*/
  },
  {path: 'anfibia-supervivencia', component: SurvivalComponent}, 

  {path: 'verificacion-cuenta', loadChildren: () => 
  import('./verificacion-cuenta/verificacion-cuenta-module').then(m => m.VerificacionCuentaModule), canActivate:[CuentaActiveGuardGuard, AuthGuardGuard]},

  {path: 'cuenta-active', loadChildren: () => 
    import('./cuenta-active/cuenta-active-module').then(m => m.CuentaActiveModule), canActivate: [AuthGuardGuard]
  },

  {path: 'ubicaciones', loadChildren: () =>
  import('./localstore/localstore.module').then(m => m.localStoreModule)},



  {path: 'blog', loadChildren: () => 
  import('./blogv1/blogv1-module').then(m => m.blogv1Module)}, 

  {path: 'proveedores', loadChildren: () =>
  import('./proveedores/proveedores.module').then(m => m.proveedoresModule)}, 

  {path: 'contactanos', loadChildren: () =>
  import('./contacto/contacto.module').then(m => m.contactoModule)},
 
  /*{path: 'tienda', component: StoreOnlineComponent, children:[
   
    {path: 'tienda/:clasificacion/:categoria', component: StoreOnlineComponent, },
    {path: ':clasificacion', component: StoreOnlineComponent},
  ]},*/
  {path: 'tienda',loadChildren: () =>
  import('./store-online/store-online.module').then(m => m.storeOnlineModule)},
  
  {path: 'tienda/:id/:nombre', loadChildren: () =>
  import('./individual-product/individualProduct.module').then(m => m.individualProductModule)},

  
  {path: 'entrada', component: Entrada1Component}, 

  {path: 'recuperar-contraseña', loadChildren: () =>
  import('./forget-password/forget-password-module').then(m => m.forgetPasswordModule), canActivate: [AuthGuardGuard]}, 
  
  
  {path: 'generar-contraseña', loadChildren: () => 
  import ('./generate-password/generate-password-module').then(m => m.generatePasswordModule), canActivate: [ForgetPasswordGuardGuard, AuthGuardGuard]},


  {path: 'lista-deseos',loadChildren: () =>
  import('./wish-list/wish-list.module').then(m => m.wishListModule)}, 

  {path: 'carrito', loadChildren: () =>
  import('./carrito-compras/carrito-compras.module').then(m => m.carritoComprasModule)}, 


  {path: 'compra', loadChildren: () =>
  import('./proceso-compra/proceso-compra.module').then(m => m.procesoCompraModule), canActivate: [ProcesoCompraGGuard]},


  {path: 'compra-completada', loadChildren: () => 
  import('./process-final/proceso-final-module').then(m => m.processFinalModule), canActivate: [CompraCompletaGGuard]},

  /*Children de compra proceso compra*/
  //{path: 'compra/express/:cartId', component: ProcesoCompraComponent},

  {path: 'pedidos', loadChildren: () =>
  import('./pedidos/pedidos.module').then(m => m.pedidosModule)},

  {path: 'perfil', loadChildren: () =>
  import('./perfil/perfil.module').then(m => m.perfilModule)},

  {path: 'torneos', loadChildren: () =>
  import('./torneos/torneos.module').then(m => m.torneosModule)},

  {path: 'register-address', loadChildren: () =>
  import('./register-address/register-address.module').then(m => m.registerAddressModule)},


  {path: '**', loadChildren: () =>
  import('./not-page-found/not-page-found.module').then(m => m.notPageModule)} 
];


@NgModule({
  imports: [RouterModule.forRoot(routes
/*,{
scrollPositionRestoration: 'enabled',
anchorScrolling: 'enabled',
scrollOffset: [100, 100],
}*/ , {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  MenuheaderComponent,
   FooterComponent,
   //CuentaActiveComponent,
   //VerificacionCuentaComponent,
   //GeneratePasswordComponent,
   /* AnfibiaMainComponent,*/ 
   /*MapaSitioComponent,*/
    //CrearCuentaComponent, 
    //FishingComponent,
    //HuntingComponent, 
    //PreguntasFrecuentesComponent, 
    //NosotrosComponent, 
    //AsuntosLegalesComponent, 
    SurvivalComponent, 
    //UbicacionComponent, 
    //Blogv1Component, 
    //ProveedoresComponent,
    //StoreOnlineComponent, 
    //ContactoComponent, 
    //IndividualProductComponent, 
    Entrada1Component, 
    //WishListComponent, 
    //CarritoComprasComponent, 
    //ProcesoCompraComponent, 
    //NotPageFoundComponent, 
    //PoliticasPrivacidadComponent,
    //PoliticasComprasComponent, 
    //PoliticasDevolucionesComponent, 
    //EnviosComponent, 
    //TerminosYCondicionesComponent, 
    //PerfilComponent, 
    //PedidosComponent, 
    //LocalstoreComponent, 
    //TorneosComponent, 
    //ProcessFinalComponent, 
    //ForgetPasswordComponent
    //RegisterAddressComponent


]
