import { Component, OnInit } from '@angular/core';
/*import * as AOS from 'aos';*/
/*import * as $ from 'jquery';*/
import { ProductosService } from "../servicios/productos.service";
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { ProductosModalComponent } from '../modals/productos-modal/productos-modal.component';
import { ModalCarritoComponent } from '../modals/modal-carrito/modal-carrito.component';
@Component({
  selector: 'app-fishing',
  templateUrl: './fishing.component.html',
  styleUrls: ['./fishing.component.css']
})
export class FishingComponent implements OnInit {

  public customOptions: OwlOptions = {
    items: 16,
    autoplay: true,
    autoplayTimeout:2500,
    autoplayHoverPause: true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    margin: 30,
    navSpeed: 2500,
    navText: ['ANTERIOR', 'SIGUIENTE'],
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }


  public productosPesca: Array<any> = [];
  public productosPescaDestacados: Array<any> = [];
  public productosPescaNuevos:Array<any> = [];
  public productosCarrito:Array<any> = [];

  slides = [
    {
      img: "/assets/imagenes/paginaInicial/blackfriday.jpg"
     
     
    },
    {
      img: "/assets/imagenes/paginaInicial/blackfriday.jpg"
     
      
    },
    {
      img: "/assets/imagenes/paginaInicial/blackfriday.jpg"
     
      
    },
    {
      img: "/assets/imagenes/paginaInicial/blackfriday.jpg"
     
    }
  ];
 
  slideConfig = {
    infinite: true,
    slidesToShow: 2.2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    mobileFirst: true

  };
  


  
  
  
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  
  slickInit(e) {
    console.log('slick initialized');
  }
  
  breakpoint(e) {
    console.log('breakpoint');
  }
  
  afterChange(e) {
    console.log('afterChange');
  }
  
  beforeChange(e) {
    console.log('beforeChange');
  }

  constructor(private _productosPesca: ProductosService, private route: Router, private modalProducto: NgbModal) {
     
   }



  ngOnInit() {
    window.scrollTo({top: 0, behavior: 'smooth'});
    this.productosPesca = this._productosPesca.getProductos();
    this.productosPesca = this.productosPesca.filter(producto =>{
      return (producto.clasificacion == 'pesca');
    })
    this.getImage(this.productosPesca);



    this.productosPescaNuevos = this.productosPesca.filter((producto) =>{
      return producto.nuevo = true;
    });

    this.productosPescaDestacados = this.productosPesca.filter((producto)=>{
      return producto.destacado = true;
    });

    
    

    $(".item-1").mouseenter(function(){
       $(".item-2").css("filter", "brightness(50%)");
       $(".item-3").css("filter", "brightness(50%)");
       $(".item-4").css("filter", "brightness(50%)");
       $(".item-5").css("filter", "brightness(50%)");
       
    });

    $(".item-1").mouseleave(function(){
      $(".item-2").css("filter", "brightness(100%)");
      $(".item-3").css("filter", "brightness(100%)");
      $(".item-4").css("filter", "brightness(100%)");
      $(".item-5").css("filter", "brightness(100%)");
      
   });

   $(".item-2").mouseenter(function(){
    $(".item-1").css("filter", "brightness(50%)");
    $(".item-3").css("filter", "brightness(50%)");
    $(".item-4").css("filter", "brightness(50%)");
    $(".item-5").css("filter", "brightness(50%)");
    
 });

 $(".item-2").mouseleave(function(){
   $(".item-1").css("filter", "brightness(100%)");
   $(".item-3").css("filter", "brightness(100%)");
   $(".item-4").css("filter", "brightness(100%)");
   $(".item-5").css("filter", "brightness(100%)");
   
});

$(".item-3").mouseenter(function(){
  $(".item-1").css("filter", "brightness(50%)");
  $(".item-2").css("filter", "brightness(50%)");
  $(".item-4").css("filter", "brightness(50%)");
  $(".item-5").css("filter", "brightness(50%)");
  
});

$(".item-3").mouseleave(function(){
 $(".item-1").css("filter", "brightness(100%)");
 $(".item-2").css("filter", "brightness(100%)");
 $(".item-4").css("filter", "brightness(100%)");
 $(".item-5").css("filter", "brightness(100%)");
 
});

$(".item-4").mouseenter(function(){
  $(".item-1").css("filter", "brightness(50%)");
  $(".item-2").css("filter", "brightness(50%)");
  $(".item-3").css("filter", "brightness(50%)");
  $(".item-5").css("filter", "brightness(50%)");
  
});

$(".item-4").mouseleave(function(){
 $(".item-1").css("filter", "brightness(100%)");
 $(".item-2").css("filter", "brightness(100%)");
 $(".item-3").css("filter", "brightness(100%)");
 $(".item-5").css("filter", "brightness(100%)");
 
});

$(".item-5").mouseenter(function(){
  $(".item-1").css("filter", "brightness(50%)");
  $(".item-2").css("filter", "brightness(50%)");
  $(".item-3").css("filter", "brightness(50%)");
  $(".item-4").css("filter", "brightness(50%)");
  
});

$(".item-5").mouseleave(function(){
 $(".item-1").css("filter", "brightness(100%)");
 $(".item-2").css("filter", "brightness(100%)");
 $(".item-3").css("filter", "brightness(100%)");
 $(".item-4").css("filter", "brightness(100%)");
 
});
    

  }

  public openModal(datos) {
    const modalRef = this.modalProducto.open(ProductosModalComponent,
      {
        scrollable: true,
        windowClass: 'myCustomModalClass',
        size: 'xl'
        // keyboard: false,
        // backdrop: 'static'
      });
    
    let productoModal = datos;
    
  
 
    modalRef.componentInstance.fromParent = datos;
    modalRef.result.then((result) => {
      console.log(result);
    }, (reason) => {
    });
  }


  public addCart(dato){
    console.log(this.productosCarrito);
    let datoInsertar = dato;
    if(this.productosCarrito.includes(datoInsertar)){

    }else{
      this.productosCarrito.push(datoInsertar);
      this.openModalCarrito(this.productosCarrito);
      console.log(this.productosCarrito);
    }
  }

  getImage(listaArreglo:any){
    listaArreglo.forEach(productoPesca =>{
      productoPesca.imagenPrincipal = productoPesca.image[0].url;
      if(productoPesca.image[1]){
        productoPesca.imagenCambio = productoPesca.image[1].url;
      }else if(!productoPesca.image[1]){
        productoPesca.imagenCambio = productoPesca.imagenPrincipal;
      }
    });

  }


  public openModalCarrito(datos){
    const modalRef = this.modalProducto.open(ModalCarritoComponent,
     {
       scrollable: true,
       windowClass: 'myCustomModalClass',
       size: 'lg',
       
       // keyboard: false,
       // backdrop: 'static'
     });
   
   let productoModalCarrito = datos;
   
 

   modalRef.componentInstance.fromParent = datos;
   modalRef.result.then((result) => {
     console.log(result);
   }, (reason) => {
   });
 }


}
