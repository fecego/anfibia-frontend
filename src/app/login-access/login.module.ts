import { NgModule } from '@angular/core';
import { LoginAccessComponent } from '../login-access/login-access.component';
import { loginRouting } from '../login-access/login-routing.module'

import {shareModule} from '../share/share.module';
import { CommonModule} from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations:[
        LoginAccessComponent
    ],
    imports:[
        shareModule,
        CommonModule,
        loginRouting,
        FormsModule,
        ReactiveFormsModule
    ],
   
})

export class loginModule{

}
