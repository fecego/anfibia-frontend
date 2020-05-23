import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { ProductosService } from "../servicios/productos.service";
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-survival',
  templateUrl: './survival.component.html',
  styleUrls: ['./survival.component.css']
})
export class SurvivalComponent implements OnInit {

  public customOptions: OwlOptions = {
    items: 8,
    autoplay: true,
    autoplayTimeout: 1500,
    autoplayHoverPause: true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    margin: 30,
    
    navSpeed: 700,
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

  slides = [
    {
      img: "/assets/imagenes/survival/supervivencia4.jpg",
      
     
    },
    {
      img: "/assets/imagenes/survival/knife2.jpg",
      
      
    },
    {
      img: "/assets/imagenes/survival/knife1.jpg",
     
      
    },
    {
      img: "/assets/imagenes/survival/knife5.jpg",
    
      
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

  constructor(private _productSupervivencia:ProductosService) { }

  public productosSupervivencia:Array<any> = [];

  ngOnInit() {
    this.productosSupervivencia = this._productSupervivencia.getProductosSupervivencia();
  }

}
