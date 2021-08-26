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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
//import { ProductosModalComponent } from './modals/productos-modal/productos-modal.component';
import { TerminosYCondicionesComponent } from './terminos-y-condiciones/terminos-y-condiciones.component';
import { EditPerfilComponent } from './modals/edit-perfil/edit-perfil.component';
import { NuevaDireccionComponent } from './modals/nueva-direccion/nueva-direccion.component';
//import { ModalInicioSesionComponent } from './modals/modal-inicio-sesion/modal-inicio-sesion.component';
import { ModalCarritoComponent } from './modals/modal-carrito/modal-carrito.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { NgxSpinnerModule } from "ngx-spinner";
//import { LocalstoreComponent } from './localstore/localstore.component';
import { FilterMenuPipe } from './menuheader/filter-menu.pipe';
/*import { OracionMayusculasPipe } from './pipes/oracion-mayusculas.pipe';*/
//import { LoginAccessComponent } from './login-access/login-access.component';
import { MisPedidosComponent } from './mis-pedidos/mis-pedidos.component';
import { AddressModalComponent } from './modals/address-modal/address-modal.component';
import { interceptorsService } from './servicios/auth_interceptors.service'
import { AuthGuardGuard } from './guards/auth-guard.guard';
/*import { SpinnerSmallComponent } from './spinner-small/spinner-small.component'*/
import { shareModule} from './share/share.module';
import { SpinnerMediumComponent } from './spinner-medium/spinner-medium.component';

//import { ResultActiveComponent } from './result-active/result-active.component';
import { ProcesoCompraGGuard} from './guards/proceso-compra-g.guard';
import { CompraCompletaGGuard } from './guards/compra-completa-g.guard';
import { CuentaActiveGuardGuard } from './guards/cuenta-active-guard.guard'
import { ForgetPasswordGuardGuard } from './guards/forget-password-guard.guard';
//import { PageDirectiveDirective } from './directivas/page-directive.directive'
/*import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';*/

//Imports para redes sociales
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';
//import { ModalFacebookRTCComponent } from './modals/modal-facebook-rtc/modal-facebook-rtc.component';


@NgModule({
  declarations: [
    AppComponent, 
    routingComponents, /*ProductosModalComponent,*/ TerminosYCondicionesComponent, EditPerfilComponent, NuevaDireccionComponent, /*ModalInicioSesionComponent,*/ ModalCarritoComponent, /*LocalstoreComponent,*/ FilterMenuPipe, /*OracionMayusculasPipe,*//* LoginAccessComponent,*/ MisPedidosComponent, AddressModalComponent, SpinnerMediumComponent/*, ModalFacebookRTCComponent,*/ /*PageDirectiveDirective/*, ResultActiveComponent, *//*SpinnerSmallComponent*/
  ],
  entryComponents:[
    //ProductosModalComponent, 
    EditPerfilComponent,
    NuevaDireccionComponent,
    //ModalInicioSesionComponent,
    AddressModalComponent
  ],
  imports: [
    FormsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule, 
    CommonModule ,
    SlickCarouselModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule,
    NgbModule, 
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxSpinnerModule,
    shareModule, 
    SocialLoginModule
    /*FontAwesomeModule*/
  ],
  providers: [ProductosService, 
    UsuarioService, 
    UsuariosService, 
    CarritoInfoService, 
    {provide: HTTP_INTERCEPTORS, useClass: interceptorsService, multi: true}, 
    AuthGuardGuard, 
    ProcesoCompraGGuard, 
    CompraCompletaGGuard, 
    CuentaActiveGuardGuard, 
    ForgetPasswordGuardGuard,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '552786452832-r78jfjbadt0rk7pv0hlpo0qaf4iql39f.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('242576567206971')
          }
        ]
      } as SocialAuthServiceConfig,
    }
    //Provider para login de fb

    
  ],
  bootstrap: [AppComponent],
})

export class AppModule { }


