import { NgModule } from '@angular/core';
import { processFinalRouting } from './proceso-final-routing.module';
import { ProcessFinalComponent } from './process-final.component';
import { shareModule } from '../share/share.module';
import { CommonModule} from '@angular/common';


@NgModule({
    declarations: [
        ProcessFinalComponent
    ], 
    imports: [
        processFinalRouting, 
        CommonModule,
        shareModule
    ],
    exports: []
})

export class processFinalModule{

}