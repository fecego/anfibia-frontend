import { Routes, RouterModule, Router} from '@angular/router';
import { NgModule } from "@angular/core";
import { Blogv1Component} from './blogv1.component'


const rutas:Routes = [{
    path: '', component: Blogv1Component
}]


@NgModule({
    imports: [RouterModule.forChild(rutas)],
    exports: [RouterModule]
})

export class blogv1RoutingModule{

}