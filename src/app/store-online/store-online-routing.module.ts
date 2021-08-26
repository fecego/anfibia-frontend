import { NgModule} from '@angular/core';
import { StoreOnlineComponent } from './store-online.component'
import { RouterModule, Routes} from '@angular/router'

const routes:Routes = [
    {path: '', component: StoreOnlineComponent}
]


@NgModule({
 
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[   
        RouterModule
    ]
})

export class storeOnlineRouting{}