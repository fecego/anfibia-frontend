import { NgModule} from '@angular/core';
import { registerAddressRouting} from './register-address-routing.module'
import { CommonModule} from '@angular/common'
import { RegisterAddressComponent } from './register-address.component'
import { shareModule} from '../share/share.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
    declarations:[
        RegisterAddressComponent
    ],
    imports:[
        CommonModule,
        registerAddressRouting,
        shareModule,
        FormsModule,
        ReactiveFormsModule
    ]
})

export class registerAddressModule{

}