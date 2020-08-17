import { Component, OnInit } from '@angular/core';
import { AotSummaryResolver } from '@angular/compiler';
import * as AOS from 'aos';

@Component({
  selector: 'app-mapa-sitio',
  templateUrl: './mapa-sitio.component.html',
  styleUrls: ['./mapa-sitio.component.css']
})
export class MapaSitioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init();
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

}
