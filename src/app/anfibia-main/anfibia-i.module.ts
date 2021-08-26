import { NgModule} from '@angular/core'
import { CommonModule } from '@angular/common';
/*================================================ */

import { AnfibiaMainComponent } from './anfibia-main.component';
import { AnfibiaIRoutingModule } from './anfibiaI-routing.module';
import { shareModule}  from '../share/share.module';
/*====================================================================*/
import { NgxSpinnerModule } from "ngx-spinner";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';



/*Importación de los modales de la pagína de inicio*/




@NgModule({
    declarations:[
        AnfibiaMainComponent,
        
       
    ],
    imports: [
        
        AnfibiaIRoutingModule, 
        CommonModule,
        shareModule,
        NgxSpinnerModule,
        FormsModule,
        ReactiveFormsModule,
        CarouselModule,
        HttpClientModule
        /*SlickCarouselModule,
        BrowserAnimationsModule,
        CarouselModule,
        HttpClientModule,
        NgbModule, 
        ReactiveFormsModule,
        NgxPaginationModule,
        NgxSpinnerModule*/
      ],
      entryComponents:[
        
        //AddressModalComponent
      ]
})

export class anfibiaI{

}