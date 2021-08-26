import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FishingComponent } from './fishing.component';

const routes:Routes = [
    {path: '', component: FishingComponent}, 
]



@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]

})


export class fishingRouting{

}