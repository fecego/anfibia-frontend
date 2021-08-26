import { Component, OnInit } from '@angular/core';
import { AotSummaryResolver } from '@angular/compiler';
import * as AOS from 'aos';
import  {scrollToTop} from '../modulosAnfibia/prueba';

@Component({
  selector: 'app-mapa-sitio',
  templateUrl: './mapa-sitio.component.html',
  styleUrls: ['./mapa-sitio.component.css']
})
export class MapaSitioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init();
    scrollToTop();
  }

}
