import { Component, OnInit } from '@angular/core';
import { not } from '@angular/compiler/src/output/output_ast';
import { Router} from '@angular/router'
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { ModalInicioSesionComponent } from '../modals/modal-inicio-sesion/modal-inicio-sesion.component';
import { Width } from 'ngx-owl-carousel-o/lib/services/carousel.service';
import { speed } from 'jquery';
import { ProductosService } from '../servicios/productos.service'


@Component({
  selector: 'app-menuheader',
  templateUrl: './menuheader.component.html',
  styleUrls: ['./menuheader.component.css']
})
export class MenuheaderComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private modalInicio: NgbModal, private _productoS: ProductosService) { }
  public pescaNombre:string = 'pesca';
  public caceriaNombre:string = 'caceria';
  public pescaValor:boolean = false;
  public caceriaValor:boolean = false;
  public otherSections:boolean = false;
  public pescaBandra:boolean = false;
  public caceriaBandera:boolean = false;
  public othersBandera:boolean = false;
  public busquedaT:boolean = false;
  public allProducts:Array<any> = [];
  public filtroProductos = '';

  public pesca = {
    nombre: 'muestra pesca',
    categoria: 'zapatos pesca'
  }

  public caceria = {
    nombre: 'muestra caceria', 
    categoria: 'zapatos caceria'
  }




  ngOnInit() {
  this.allProducts = this._productoS.getProductos();
    
  $('#divRojo').css('width', 0);
 
  $('#divAzul').css('width', 0);
  $('#divGreen').css('width', 0);
  $('.busqueda').css('width', 0);
  $('.busqueda').css('height', 0);

  
    
    /*$(".dropdown-item").mouseover(function(){
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
      
    });*/


  
   


   

  }


  goPesca(){
    this.router.navigate(['/anfibia-pesca']);
    this.pescaValor = false;
    var anchoDiv = $("#divRojo").css('width');
    if(parseInt(anchoDiv) > 0){
      $('#divRojo').animate({"width": "0%"}, "fast");
    }
  
 
  }

  goCaceria(){
    this.router.navigate(['/anfibia-caceria'])
    this.caceriaValor = false;
    var anchoDiv = $("#divAzul").css('width');
    if(parseInt(anchoDiv) > 0){
      $('#divAzul').animate({"width": "0%"}, "fast");
    }

  }


  navigateMenu(dato){
    this.router.navigate(['/tienda', dato.idProducto, dato.nombre]);
    this.cerrarSearchBar();
  }

  seeMoreProducts(dato){
    this.router.navigate(['tienda'], {queryParams:{busqueda: dato}});
    
    this.cerrarSearchBar();
  }



  showMenuRojo(){
   
   var anchoDiv = $("#divRojo").css('width');
  
 
   this.pescaBandra = true;
   this.caceriaBandera = false;
   this.othersBandera = false;
   this.busquedaT = false;
   console.log(this.pesca)
   if(parseInt(anchoDiv) == 0){
    this.pescaValor = true;
    this.caceriaValor = false;
    this.otherSections = false;
   
    $('#divGreen').animate({"width": "0%"}, "fast");
 
     $('#divRojo').animate({"width": "80%"}, "fast");
    
     $('#divAzul').animate({'width': '0%'}, "fast");

     $(".busqueda").animate({"width":"0%"}, "fast");
     $("#busquedaButton").css("background", "#000");
     $("#boton-busqueda").css("color", "#A4A4A4");
     
     
   }else if(parseInt(anchoDiv) > 0){
    this.pescaValor = false;
    this.caceriaValor = false;
    this.otherSections = false;
    $('#divGreen').animate({"width": "0%"}, "fast");
    $('#divRojo').animate({"width": "0%"}, "fast");
    $('#divAzul').animate({'width': '0%'}, "fast");
    $(".busqueda").animate({"width":"0%"}, "fast");
   }
  }

  showMenuAzul(){
    var anchoDiv = $("#divAzul").css('width');
   
    this.caceriaBandera = true;
    this.pescaBandra = false;
    this.othersBandera = false;
    this.busquedaT = false;
    console.log(this.pesca)
    if(parseInt(anchoDiv) == 0){
      this.caceriaValor = true;
      this.pescaValor = false;
      this.otherSections = false;
      $('#divGreen').animate({"width": "0%"}, "fast");
      $('#divAzul').animate({"width": "80%"}, "fast");
      $('#divRojo').animate({"width": "0%"}, "fast");
      $(".busqueda").animate({"width":"0%"}, "fast");
      $("#busquedaButton").css("background", "#000");
      $("#boton-busqueda").css("color", "#A4A4A4");
     
    }else if(parseInt(anchoDiv) >0){
      this.caceriaValor = false;
      this.pescaValor = false;
      this.otherSections = false;
      $('#divGreen').animate({"width": "0%"}, "fast");
     $('#divAzul').animate({'width': '0%'}, "fast");
     $('#divRojo').animate({"width": "0%"}, "fast");
     $(".busqueda").animate({"width":"0%"}, "fast");
    }
   }


   showMenuOtrasSecciones(){
    var anchoDiv = $("#divGreen").css('width');
    this.othersBandera = true;
    this.caceriaBandera = false;
    this.pescaBandra = false;
    this.busquedaT = false;
    
    if(parseInt(anchoDiv) == 0){
      this.caceriaValor = false;
      this.pescaValor = false;
      this.otherSections = true;
     
      $('#divGreen').animate({"width": "40%"}, "fast");
      $('#divRojo').animate({"width": "0%"}, "fast");
      $('#divAzul').animate({"width": "0%"}, "fast");
      $(".busqueda").animate({"width":"0%"}, "fast");
      $("#busquedaButton").css("background", "#000");
      $("#boton-busqueda").css("color", "#A4A4A4");
   
     
    }else if(parseInt(anchoDiv) >0){
      this.caceriaValor = false;
      this.pescaValor = false;
      this.otherSections = false;
     $('#divGreen').animate({'width': '0%'}, "fast") 
     $('#divAzul').animate({'width': '0%'}, "fast");
     $('#divRojo').animate({"width": "0%"}, "fast");
     $(".busqueda").animate({"width":"0%"}, "fast");
    }

   }



   openSearchBar(){
    
   
    console.log('presionaste opensearchBar');
    this.busquedaT = true;
    this.pescaBandra = false;
    this.caceriaBandera = false;
    this.othersBandera = false;


    this.pescaValor = false;
    this.caceriaValor = false;
    this.otherSections = false;
    var anchoBusqueda = $(".busqueda").css("width");
    if(parseInt(anchoBusqueda) == 0){
     
     $(".busqueda").animate({'height': '800'}, "fast");
     $(".busqueda").animate({"width":"100%"}, "fast");
     $("#busquedaButton").css("background", "#fff");
     $("#boton-busqueda").css("color", "#000");
     
    }else if(parseInt(anchoBusqueda) > 0){
      $('.busqueda').animate({'width': '0%'}, "fast");
      $("#boton-busqueda").css("color", "#A4A4A4");
      $("#busquedaButton").css("background", "#000");
      this.filtroProductos = "";
     
    }

   }


   cerrarSearchBar(){
    $('.busqueda').animate({'width': '0%'}, "fast");
    
    $("#boton-busqueda").css("color", "#A4A4A4");
    $("#busquedaButton").css("background", "#000");
    
    this.filtroProductos = "";
   }
   

   closeMenu(){
     this.pescaValor = false;
     this.caceriaValor = false;
     this.otherSections = false;
    var anchoDiv = $("#divRojo").css('width');
    var anchoDivAzul = $('#divAzul').css('width');
    var anchoDivGreen = $('#divGreen').css('width');
    if(parseInt(anchoDiv) > 0){
      $('#divRojo').animate({"width": "0%"}, "fast");
    }

    if(parseInt(anchoDivAzul) > 0){
      $('#divAzul').animate({"width": "0%"}, "fast");
    }

    if(parseInt(anchoDivGreen) > 0){
      $('#divGreen').animate({"width": "0%"}, "fast");
    }

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
