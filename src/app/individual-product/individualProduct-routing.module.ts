import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { IndividualProductComponent } from '../individual-product/individual-product.component'


const routes:Routes = [
    {path: '', component: IndividualProductComponent}
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class individualProductRouting{}
