import { NgModule } from '@angular/core';
import { ProveedoresComponent } from './proveedores.component'
import { CommonModule} from '@angular/common';
import { shareModule} from '../share/share.module';
import { proveedoresRounting } from '../proveedores/proveedores-routing.module';

@NgModule({
    declarations:[
        ProveedoresComponent
    ],
    imports:[
        CommonModule,
        proveedoresRounting,
        shareModule
    ]
})

export class proveedoresModule{

}