import { Component, OnInit } from '@angular/core';
import  {scrollToTop} from '../modulosAnfibia/prueba';
@Component({
  selector: 'app-envios',
  templateUrl: './envios.component.html',
  styleUrls: ['./envios.component.css']
})
export class EnviosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   scrollToTop();
  }

}
