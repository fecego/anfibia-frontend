import { NgModule } from '@angular/core';
import { WishListComponent } from './wish-list.component';
import { WishListRouting } from './wish-list-routing.module'
import { shareModule} from '../share/share.module'
import { CommonModule} from '@angular/common'


import { NgxSpinnerModule } from "ngx-spinner";
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
    declarations:[
        WishListComponent
    ], 
    imports:[
        CommonModule,
        shareModule,
        WishListRouting,
        NgxSpinnerModule,
        CarouselModule

    ]
})

export class wishListModule{}