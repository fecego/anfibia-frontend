import { NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
import {  GeneratePasswordComponent } from './generate-password.component'
import { shareModule } from '../share/share.module';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { generatePasswordRouting } from './generate-password-routing.module'

@NgModule({
  declarations: [ 
      GeneratePasswordComponent
    ],
  imports: [
    ReactiveFormsModule,
     FormsModule,
     CommonModule,
     shareModule,
     generatePasswordRouting
  ],
  exports: []  
})

export class generatePasswordModule{

}