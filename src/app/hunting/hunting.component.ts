import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-hunting',
  templateUrl: './hunting.component.html',
  styleUrls: ['./hunting.component.css']
})
export class HuntingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $("img").click(function(){
      var x = $(this).width();
      var y = $(this).height();
      console.log("Es es el width " + " " + x  +  " El height de tu imagen" + " "+ y);
    })

  }

}
