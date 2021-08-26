import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';

import { NosotrosComponent } from '../nosotros/nosotros.component'
import { shareModule } from '../share/share.module';
import { nosotrosRoutingModule } from './nosotros-routing.module'

@NgModule({

    declarations:[
        NosotrosComponent
    ],
    imports:[
        CommonModule,
        shareModule,
        nosotrosRoutingModule
    ]

})

export class nosotrosModule{}