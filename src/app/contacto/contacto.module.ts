import { NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
import { ContactoComponent } from '../contacto/contacto.component';
import { contactoRouting} from '../contacto/contacto-routing.module';
import { shareModule} from '../share/share.module';
import { NgxSpinnerModule } from "ngx-spinner";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
    declarations:[
        ContactoComponent
    ],
    imports:[
        CommonModule,
        contactoRouting,
        NgxSpinnerModule,
        FormsModule,
        ReactiveFormsModule,
        CarouselModule,
        HttpClientModule

    ]



})

export class contactoModule{}