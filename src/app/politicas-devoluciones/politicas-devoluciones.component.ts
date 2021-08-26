import { Component, OnInit } from '@angular/core';
import  {scrollToTop} from '../modulosAnfibia/prueba';

@Component({
  selector: 'app-politicas-devoluciones',
  templateUrl: './politicas-devoluciones.component.html',
  styleUrls: ['./politicas-devoluciones.component.css']
})
export class PoliticasDevolucionesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    scrollToTop();
  }

}
