import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import Typed from 'typed.js';
@Component({
  selector: 'app-store-online',
  templateUrl: './store-online.component.html',
  styleUrls: ['./store-online.component.css']
})
export class StoreOnlineComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    AOS.init();
    var typed = new Typed(".typed", {
      strings: ['Compra $1000 en productos de nuestra tienda y lleva un descuento del 20%', 'Llevate una caña de pescar Tatsumaki en la compra de 2 carretes Takawasaki'],
      fadeOut: false,
      backSpeed: 30,
      loop: true,
      showCursor: false,
      typeSpeed: 20
    });
  }

}
