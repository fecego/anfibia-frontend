import { NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
import { ProductosModalComponent } from '../modals/productos-modal/productos-modal.component';
import { ModalInicioSesionComponent } from '../modals/modal-inicio-sesion/modal-inicio-sesion.component';
import { OracionMayusculasPipe } from '../pipes/oracion-mayusculas.pipe';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { RouterModule } from '@angular/router';
import { SpinnerSmallComponent } from '../spinner-small/spinner-small.component';
import { ResultActiveComponent } from '../result-active/result-active.component';
import { ModalFacebookRTCComponent } from '../modals/modal-facebook-rtc/modal-facebook-rtc.component';


@NgModule({
    declarations: [
        ProductosModalComponent,
        ModalInicioSesionComponent,
        OracionMayusculasPipe,
        SpinnerSmallComponent,
        ResultActiveComponent,
        ModalFacebookRTCComponent
        
    ],
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule

    ],
    exports: [
        ProductosModalComponent,
        ModalInicioSesionComponent,
        OracionMayusculasPipe,
        SpinnerSmallComponent,
        ResultActiveComponent,
        ModalFacebookRTCComponent
    ]

})

export class shareModule{}