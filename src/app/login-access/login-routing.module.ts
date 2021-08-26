import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { LoginAccessComponent } from '../login-access/login-access.component';


const routes:Routes = [
    {path: '', component: LoginAccessComponent,}
]

@NgModule({
    declarations:[],
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})


export class loginRouting{}