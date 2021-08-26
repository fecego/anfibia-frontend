import { NgModule } from '@angular/core';
import { ProveedoresComponent } from './proveedores.component';
import { RouterModule, Routes} from '@angular/router';


const routes:Routes = [
    {path: '', component:ProveedoresComponent}
]

@NgModule({
  
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class proveedoresRounting{

}