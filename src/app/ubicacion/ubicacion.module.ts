import { NgModule} from '@angular/core';
import  {ubicacionRouting } from './ubicacion-routing.module';
import { UbicacionComponent} from './ubicacion.component';
import { shareModule} from '../share/share.module';


@NgModule({
    declarations:[
        UbicacionComponent
    ],
    imports:[
        ubicacionRouting,
        shareModule
    ]
})

export class ubicacionModule{

}