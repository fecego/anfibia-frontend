import { NgModule } from '@angular/core';
import { PerfilComponent } from '../perfil/perfil.component';
import { CommonModule } from '@angular/common';
import { shareModule} from '../share/share.module';
import { perfilRouting } from './perfil-routing.module'


import { NgxSpinnerModule } from "ngx-spinner";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
    declarations:[
        PerfilComponent
    ],
    imports:[
        CommonModule,
        shareModule,
        perfilRouting,
        NgxSpinnerModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        CarouselModule
    ]
})

export class perfilModule{}