import { NgModule} from '@angular/core';
import { CuentaActiveComponent } from '../cuenta-active/cuenta-active.component';
import { shareModule } from '../share/share.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { cuentaActiveRouting } from './cuenta-active-routing.module'
import { CommonModule} from '@angular/common';
//import { ResultActiveComponent } from '../result-active/result-active.component'

@NgModule({
    declarations: [
        CuentaActiveComponent
        //ResultActiveComponent
        
    ],
    imports: [
        shareModule,
        FormsModule, 
        ReactiveFormsModule,
        cuentaActiveRouting,
        CommonModule
    ],
    providers: [

    ],  
    exports: [

    ]
})

export class CuentaActiveModule{
}