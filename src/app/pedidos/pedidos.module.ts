import { NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { PedidosComponent } from '../pedidos/pedidos.component'
import { shareModule } from '../share/share.module'
import { pedidosRouting } from './pedidos-routing.module'



import { NgxSpinnerModule } from "ngx-spinner";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
    declarations:[
        PedidosComponent
    ],
    imports:[
        CommonModule,
        shareModule,
        pedidosRouting,
        NgxSpinnerModule,
        FormsModule,
        ReactiveFormsModule,
        CarouselModule,
        HttpClientModule

    ]
})

export class pedidosModule{}