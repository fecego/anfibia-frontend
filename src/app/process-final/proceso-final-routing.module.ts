import { NgModule} from '@angular/core'
import { Routes, RouterModule} from '@angular/router';
import { ProcessFinalComponent } from './process-final.component'


const routes: Routes = [{
    path: '', component: ProcessFinalComponent
}]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class processFinalRouting{

}