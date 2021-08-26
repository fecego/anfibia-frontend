import { NgModule } from '@angular/core';
import { MapaSitioComponent } from '../mapa-sitio/mapa-sitio.component'
import { CommonModule } from '@angular/common';
import { mapaSitioRouting } from '../mapa-sitio/mapa-sitio-routing.module'


@NgModule({
    declarations:[MapaSitioComponent],
    imports:[
        CommonModule,
        mapaSitioRouting
    ]
})

export class mapaSitioModule{

}