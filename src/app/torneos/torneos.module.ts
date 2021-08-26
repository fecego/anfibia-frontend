import { NgModule} from '@angular/core';
import { TorneosComponent} from './torneos.component'
import {CommonModule} from '@angular/common';
import { shareModule} from '../share/share.module';
import { torneosRouting} from './torneos-routing.module'


@NgModule({
    declarations:[
        TorneosComponent
    ], 
    imports:[   
        CommonModule,
        shareModule,
        torneosRouting
    ]
})

export class torneosModule{

}