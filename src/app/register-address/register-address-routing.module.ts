import { NgModule} from '@angular/core';
import { RegisterAddressComponent} from './register-address.component';
import { RouterModule, Routes} from '@angular/router';


const routes:Routes = [
    {path: '', component: RegisterAddressComponent}
]

@NgModule({
   imports:[
        RouterModule.forChild(routes)
   ],
   exports:[
    RouterModule
   ]
})

export class registerAddressRouting{

}