import { Component, OnInit } from '@angular/core';
import  {scrollToTop} from '../modulosAnfibia/prueba';

@Component({
  selector: 'app-terminos-y-condiciones',
  templateUrl: './terminos-y-condiciones.component.html',
  styleUrls: ['./terminos-y-condiciones.component.css']
})
export class TerminosYCondicionesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    scrollToTop();
  }


}
