import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-torneos',
  templateUrl: './torneos.component.html',
  styleUrls: ['./torneos.component.css']
})
export class TorneosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
