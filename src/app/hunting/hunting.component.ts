import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { ProductosService } from '../servicios/productos.service';

@Component({
  selector: 'app-hunting',
  templateUrl: './hunting.component.html',
  styleUrls: ['./hunting.component.css']
})
export class HuntingComponent implements OnInit {
  slides = [
    {
      img: "/assets/imagenes/paginaInicial/blackfriday.jpg",
      titulo: 'hola',
      texto: 'Este es un texto relacionado a la imagen 1'
    },
    {
      img: "/assets/imagenes/paginaInicial/blackfriday.jpg",
      titulo: 'hola',
      texto: "Este es un texto relacionado a la imagen2"
    },
    {
      img: "/assets/imagenes/paginaInicial/blackfriday.jpg",
      titulo: 'hola',
      texto: "Este es un texto relacionado a la imagen3"
    },
    {
      img: "/assets/imagenes/paginaInicial/blackfriday.jpg",
      titulo: 'hola',
      texto: "Este es un texto relacionado a la imagen4"
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

  constructor(private _productoCaceria: ProductosService) { }

  public productosCaceria:Array<any> = [];

  ngOnInit() {
    $("img").click(function(){
      var x = $(this).width();
      var y = $(this).height();
      console.log("Es es el width " + " " + x  +  " El height de tu imagen" + " "+ y);
    });

    this.productosCaceria = this._productoCaceria.getProductosCaceria();
    console.log(this.productosCaceria);

  }

}
