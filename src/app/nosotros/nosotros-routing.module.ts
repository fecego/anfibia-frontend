import { NgModule } from '@angular/core';
import { NosotrosComponent} from '../nosotros/nosotros.component';
import { RouterModule, Routes} from '@angular/router';


const routes:Routes = [
    {path:'', component: NosotrosComponent}

]

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class nosotrosRoutingModule{

}
