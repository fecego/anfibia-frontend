import { NgModule} from '@angular/core';
import { StoreOnlineComponent } from './store-online.component'
import { storeOnlineRouting } from './store-online-routing.module';
import { CommonModule} from '@angular/common';
import { shareModule} from '../share/share.module';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PageDirectiveDirective} from '../directivas/page-directive.directive'

@NgModule({
    declarations:[  
        StoreOnlineComponent,
        PageDirectiveDirective
    ],
    imports:[
        shareModule,
        CommonModule,
        storeOnlineRouting,
        NgxPaginationModule,
        FormsModule,
        ReactiveFormsModule,
        
    ]
})

export class storeOnlineModule{}