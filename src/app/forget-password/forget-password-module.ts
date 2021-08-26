import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { ForgetPasswordComponent } from '../forget-password/forget-password.component';
import { forgetPasswordRouting} from './forget-password-routing.module';
import { shareModule } from '../share/share.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'

@NgModule({
    declarations: [
        ForgetPasswordComponent
    ],
    imports: [
        forgetPasswordRouting,
        shareModule,
        CommonModule,
        FormsModule, ReactiveFormsModule
    ],
    exports: []
})

export class forgetPasswordModule{

}


