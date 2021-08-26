import { NgModule } from '@angular/core';
import { MapaSitioComponent } from '../mapa-sitio/mapa-sitio.component';
import { RouterModule, Routes} from '@angular/router';


const routes:Routes = [
    {path: '', component: MapaSitioComponent}
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class mapaSitioRouting{}