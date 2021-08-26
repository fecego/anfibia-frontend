import { Component, OnInit } from '@angular/core';
import  {scrollToTop} from '../modulosAnfibia/prueba';

@Component({
  selector: 'app-torneos',
  templateUrl: './torneos.component.html',
  styleUrls: ['./torneos.component.css']
})
export class TorneosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    scrollToTop();
    $("#pesca").hide();
    $("#caceria").hide();
    $("#content").hide();

    $("#presionar").click(function(){
      $("#content").show();
    });


    $("#Tpesca").click(function(){
      $("#pesca").show();
      $("#caceria").hide();
    });
  
    $("#Tcaceria").click(function(){
      $("#caceria").show();
      $("#pesca").hide();
    });
  
    $("#caceria").hide();

    
  }

  zoomImage(){
   console.log('Zooooooom');
  }

 
  

}
