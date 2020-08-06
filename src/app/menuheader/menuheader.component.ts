import { Component, OnInit } from '@angular/core';
import { not } from '@angular/compiler/src/output/output_ast';
import { Router} from '@angular/router'
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { ModalInicioSesionComponent } from '../modals/modal-inicio-sesion/modal-inicio-sesion.component';


@Component({
  selector: 'app-menuheader',
  templateUrl: './menuheader.component.html',
  styleUrls: ['./menuheader.component.css']
})
export class MenuheaderComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private modalInicio: NgbModal) { }

  ngOnInit() {

    $(".dropdown-item").mouseover(function(){
      $(".dropdown-item").addClass("dropdown-item-grey");
      $(this).removeClass("dropdown-item-grey");
    });

    $(".dropdown-item").mouseout(function(){
      $(".dropdown-item").delay(2000).removeClass("dropdown-item-grey");
    
    });


    $("#boton-busqueda").click(function(){
      var ancho_busqueda = $("#div-busqueda").css("width");
      console.log("This is anchogo",ancho_busqueda);
      console.log("Presionaste boton busqueda");
      
      
     if(parseInt(ancho_busqueda) == 0){
      $("#div-busqueda").css("opacity", "1");
      $("#div-busqueda").animate({"width": "119%"});
      $("#div-busqueda").css({"z-index": "1"});
      $("#input-busqueda").css("visibility", "visible");
      $("#button-cerrar").css("visibility", "visible");
      $('.div-busqueda').css("opacity", "1");
     }
     
    });
  

    $("#button-cerrar").click(function(){
      var ancho_busqueda = $("#div-busqueda").css("height");
      console.log("This is anchogo",ancho_busqueda);
      if(parseInt(ancho_busqueda) > 0){
        
        $("#div-busqueda").animate({width: "0%"});
       
        $("#input-busqueda").css("visibility", "hidden");
        $("#button-cerrar").css("visibility", "hidden");
        
        
        $('.div-busqueda').css("opacity", "0");
      }
      
    });


  
   


   

  }

  openModal(){
    console.log('Presionaste abrir modal');
    const modalRef = this.modalInicio.open(ModalInicioSesionComponent,
      {
        scrollable: true,
        windowClass: 'myCustomModalClass',
        size: 'lg'
        // keyboard: false,
        // backdrop: 'static'
      });
  }

 


}
