import { NgModule} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { LocalstoreComponent} from './localstore.component'


const routes:Routes = [
    {path:'', component: LocalstoreComponent}
]


@NgModule({
   
    imports:[
        RouterModule.forChild(routes)
    ], exports:[
        RouterModule
    ]
})

export class localStoreRouting{

}