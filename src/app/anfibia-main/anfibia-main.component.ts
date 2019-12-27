import { Component, OnInit } from '@angular/core';
import * as Granim from 'granim';


@Component({
  selector: 'app-anfibia-main',
  templateUrl: './anfibia-main.component.html',
  styleUrls: ['./anfibia-main.component.css']
})
export class AnfibiaMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var granimInstance = new Granim({
    element: '#canvas-basic',
    direction: 'top-bottom',
    isPausedWhenNotInView: true,
    image : {
        source: '../assets/imagenes/paginaInicial/surivival4.jpg',
        blendingMode: 'multiply'
    },
    states : {
        "default-state": {
            gradients: [
                ['#FFBF00', '#FFFF00'],
                ['#FF0000', '#FFFF00'],
                ['#FF00BF', '#FF0040'],
                ['#0101DF', '#DF013A']
            ],
            transitionSpeed: 7000
        }
    }
});
    
   
  }

}
