import { NgModule } from '@angular/core';
import { ProcesoCompraComponent } from './proceso-compra.component';
import { procesoCompraRouting} from './proceso-compra-routing.module';
import { shareModule} from '../share/share.module';
import { CommonModule} from '@angular/common';
import { NgxSpinnerModule } from "ngx-spinner";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
    declarations:[
        ProcesoCompraComponent
    ],
    imports:[
        CommonModule,
        shareModule,
        procesoCompraRouting,
        NgxSpinnerModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        CarouselModule
    ],
})

export class procesoCompraModule{

}