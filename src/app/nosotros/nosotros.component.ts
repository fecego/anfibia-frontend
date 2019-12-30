import { Component, OnInit } from '@angular/core';
import * as Granim from 'granim';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var granimInstance = new Granim({
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
  });
  }

}
