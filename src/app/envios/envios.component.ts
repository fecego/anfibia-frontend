import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-envios',
  templateUrl: './envios.component.html',
  styleUrls: ['./envios.component.css']
})
export class EnviosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

}
