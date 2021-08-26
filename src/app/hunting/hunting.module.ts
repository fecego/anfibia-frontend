import { NgModule } from '@angular/core';
import { HuntingComponent } from './hunting.component';
import { shareModule} from '../share/share.module'
import { huntingRouting } from '../hunting/hunting-routing.module';


import { CommonModule} from '@angular/common';
import { NgxSpinnerModule } from "ngx-spinner";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
    declarations:[
        HuntingComponent
    ], 
    imports:[
        huntingRouting,
        CommonModule,
        shareModule, 
        NgxSpinnerModule,
        FormsModule, 
        HttpClientModule, 
        CarouselModule
    ],
    exports:[

    ]
})

export class huntingModule {}