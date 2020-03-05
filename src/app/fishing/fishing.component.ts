import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-fishing',
  templateUrl: './fishing.component.html',
  styleUrls: ['./fishing.component.css']
})
export class FishingComponent implements OnInit {

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
    slidesToScroll: 2
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

  constructor() { }

  ngOnInit() {
    

  }

}
