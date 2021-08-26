import { NgModule } from '@angular/core'
import { PreguntasFrecuentesComponent } from '../preguntas-frecuentes/preguntas-frecuentes.component';
import { CommonModule } from '@angular/common';
import { preguntasFrecuentesRouting } from './preguntas-frecuentes-routing.module'



@NgModule({
    declarations:[
        PreguntasFrecuentesComponent
    ],
    imports:[
        CommonModule,
        preguntasFrecuentesRouting

    ]
})

export class preguntasFrecuentes{

}