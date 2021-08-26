import { Component, OnInit } from '@angular/core';
//import * as Granim from 'granim';
import * as AOS from 'aos';
import  {scrollToTop} from '../modulosAnfibia/prueba';
@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    scrollToTop();
    /*var granimInstance = new Granim({
      element: '#canvas-basic',
      direction: 'diagonal',
      isPausedWhenNotInView: true,
      states : {
          "default-state": {
              gradients: [
                  ['#000', '#000'],
                  ['#000', '#000'],
                  ['#000', '#000']
              ]
          }
      }
  });*/
  }

}
