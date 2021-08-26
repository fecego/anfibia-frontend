import { Routes, RouterModule} from '@angular/router'
import { NgModule} from '@angular/core';

import { AsuntosLegalesComponent } from './asuntos-legales.component';
import { PoliticasPrivacidadComponent} from '../politicas-privacidad/politicas-privacidad.component';
import { PoliticasComprasComponent } from '../politicas-compras/politicas-compras.component';
import { PoliticasDevolucionesComponent } from '../politicas-devoluciones/politicas-devoluciones.component';
import { EnviosComponent } from '../envios/envios.component';
import { TerminosYCondicionesComponent} from '../terminos-y-condiciones/terminos-y-condiciones.component';


const routes: Routes = [
    {
      path: '', component: AsuntosLegalesComponent,
      children: [
        {path: '', component: PoliticasPrivacidadComponent},
        {path: 'politicas-privacidad', component: PoliticasPrivacidadComponent },
        {path: 'politicas-compras', component: PoliticasComprasComponent},
        {path: 'politicas-devoluciones', component: PoliticasDevolucionesComponent},
        {path: 'politicas-envios', component: EnviosComponent},
        {path: 'terminos_y_condiciones', component:TerminosYCondicionesComponent}
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class asuntosLegalesRouting{

}