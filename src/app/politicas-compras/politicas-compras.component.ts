import { Component, OnInit } from '@angular/core';
import  {scrollToTop} from '../modulosAnfibia/prueba';
@Component({
  selector: 'app-politicas-compras',
  templateUrl: './politicas-compras.component.html',
  styleUrls: ['./politicas-compras.component.css']
})
export class PoliticasComprasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    scrollToTop();
  }

}
