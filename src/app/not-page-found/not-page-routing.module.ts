import { NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { NotPageFoundComponent } from '../not-page-found/not-page-found.component'

const routes:Routes = [
    {path: '', component: NotPageFoundComponent}
]


@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]


})

export class notPageRouting{

}