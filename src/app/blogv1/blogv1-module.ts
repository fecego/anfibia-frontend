import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { Blogv1Component } from './blogv1.component';
import { blogv1RoutingModule } from './blogv1-routing.module';





@NgModule({
    declarations: [
        Blogv1Component
    ],
    imports: [
        blogv1RoutingModule,
        CommonModule
    ],
    exports: []
})

export class blogv1Module{

}