import { NgModule } from '@angular/core';
import { IndividualProductComponent } from '../individual-product/individual-product.component';
import { shareModule} from '../share/share.module';


import { CommonModule} from '@angular/common';
import { NgxSpinnerModule } from "ngx-spinner";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { individualProductRouting} from '../individual-product/individualProduct-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
    declarations:[
        IndividualProductComponent
    ],
    imports:[
        CommonModule,
        shareModule,
        NgxSpinnerModule,
        FormsModule,
        HttpClientModule,
        CarouselModule,
        individualProductRouting,
        NgbModule
    ]

})

export class individualProductModule{

}