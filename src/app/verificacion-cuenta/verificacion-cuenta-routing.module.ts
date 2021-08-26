import { Routes, RouterModule} from '@angular/router';
import { VerificacionCuentaComponent } from './verificacion-cuenta.component';
import { NgModule} from '@angular/core';

const routes:Routes = [
    {path: '', component: VerificacionCuentaComponent},
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })


export class VerificacionCuentaRouting{

}