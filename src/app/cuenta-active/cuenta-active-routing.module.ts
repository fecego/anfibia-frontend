import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { CuentaActiveComponent } from './cuenta-active.component'

const routes:Routes = [
    {path: '', component: CuentaActiveComponent},
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })



export class cuentaActiveRouting{

}