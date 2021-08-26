import { NgModule} from '@angular/core';
import { AsuntosLegalesComponent } from './asuntos-legales.component';
import { asuntosLegalesRouting} from './asuntos-legales-routing.module';

@NgModule({
    declarations: [
        AsuntosLegalesComponent
    ],
    imports: [
        asuntosLegalesRouting
    ]
})

export class asuntosLegales{}