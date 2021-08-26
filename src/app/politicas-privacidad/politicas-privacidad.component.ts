import { Component, OnInit } from '@angular/core';
import  {scrollToTop} from '../modulosAnfibia/prueba';

@Component({
  selector: 'app-politicas-privacidad',
  templateUrl: './politicas-privacidad.component.html',
  styleUrls: ['./politicas-privacidad.component.css']
})
export class PoliticasPrivacidadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    scrollToTop();
  }

}
