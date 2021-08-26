import { NgModule } from '@angular/core';
import {shareModule} from '../share/share.module';
import { CommonModule } from '@angular/common';
import { FishingComponent } from './fishing.component'
import { fishingRouting } from './fishing-routing.module'
import { NgxSpinnerModule } from "ngx-spinner";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
    declarations:[
        FishingComponent
    ],
    imports:[
        CommonModule,
        shareModule,
        fishingRouting,
        shareModule,
        NgxSpinnerModule,
        FormsModule,
        ReactiveFormsModule,
        CarouselModule,
        HttpClientModule
    ]
})


export class fishingModule{ }



