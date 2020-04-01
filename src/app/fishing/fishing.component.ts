import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import $ from 'jquery';
import { ProductosService } from "../servicios/productos.service";
@Component({
  selector: 'app-fishing',
  templateUrl: './fishing.component.html',
  styleUrls: ['./fishing.component.css']
})
export class FishingComponent implements OnInit {


  public productosPesca: Array<any> = [];

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

  constructor(private _productosPesca: ProductosService) {
      this.productosPesca = this._productosPesca.getProductosPesca();
      console.log(this.productosPesca);
   }



  ngOnInit() {
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

}
