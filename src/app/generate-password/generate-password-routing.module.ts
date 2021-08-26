import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneratePasswordComponent } from './generate-password.component';

const rutas:Routes = [ {
    path: '', component: GeneratePasswordComponent 
}]


@NgModule({
    imports: [RouterModule.forChild(rutas)],
    exports: [RouterModule]

})

export class generatePasswordRouting{

}