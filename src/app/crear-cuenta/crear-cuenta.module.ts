import {  NgModule } from '@angular/core';
import { CrearCuentaComponent } from '../crear-cuenta/crear-cuenta.component';
import { CommonModule } from '@angular/common';
import { crearCuentaRouting} from '../crear-cuenta/crear-cuenta-routing.module';
import { shareModule} from '../share/share.module';
import { NgxSpinnerModule } from "ngx-spinner";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';


/*import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';*/


@NgModule({
    declarations:[
        CrearCuentaComponent
    ],
    imports:[
        crearCuentaRouting,
        shareModule,
        CommonModule,
        NgxSpinnerModule,
        FormsModule,
        ReactiveFormsModule,
        CarouselModule,
        HttpClientModule,
        //SocialLoginModule

    ], 
    /*providers:[
        {
            provide: 'SocialAuthServiceConfig',
            useValue: {
              autoLogin: false,
              providers: [
                /*{
                  id: GoogleLoginProvider.PROVIDER_ID,
                  provider: new GoogleLoginProvider(
                    'clientId'
                  )
                },*/
                /*{
                  id: FacebookLoginProvider.PROVIDER_ID,
                  provider: new FacebookLoginProvider('242576567206971')
                }
              ]
            } as SocialAuthServiceConfig,
          }
    ]  */
})

export class crearCuentaModule{}