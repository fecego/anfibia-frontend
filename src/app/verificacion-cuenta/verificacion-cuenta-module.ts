import { NgModule } from '@angular/core';
import { VerificacionCuentaComponent } from './verificacion-cuenta.component';
import { CommonModule} from '@angular/common';
import { VerificacionCuentaRouting } from './verificacion-cuenta-routing.module';
import { shareModule} from '../share/share.module';

@NgModule({
    declarations: [
        VerificacionCuentaComponent
    ], 
    imports: [
        CommonModule,
        VerificacionCuentaRouting,
        shareModule
    ],
    exports: [

    ]
})

export class VerificacionCuentaModule{

}