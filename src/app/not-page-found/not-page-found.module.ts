import { NgModule } from '@angular/core';
import { NotPageFoundComponent } from '../not-page-found/not-page-found.component'
import { CommonModule } from '@angular/common';
import {notPageRouting } from './not-page-routing.module'


@NgModule({
    declarations:[
        NotPageFoundComponent
    ],
    imports:[
        CommonModule,
        notPageRouting

    ],


})

export class notPageModule{}