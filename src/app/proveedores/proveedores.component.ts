import { Component, OnInit } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { JsonPipe } from '@angular/common';

declare const $: any;


@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})


export class ProveedoresComponent implements OnInit {
  slides = [
    {img: "../assets/imagenes/proveedores/1.png", data: "This is some data numero 0"},
    {img: "../assets/imagenes/proveedores/2.png", data: "This is some data numero 1"},
    {img: "../assets/imagenes/proveedores/3.png", data: "This is some data numero 2"},
    {img: "../assets/imagenes/proveedores/4.jpg", data: "This is some data numero 3"},
    {img: "../assets/imagenes/proveedores/5.jpg", data: "This is some data numero 4"},
    {img: "../assets/imagenes/proveedores/6.jpg", data: "This is some data numero 5"},
    {img: "../assets/imagenes/proveedores/7.png", data: "This is some data numero 6"},
    {img: "../assets/imagenes/proveedores/8.jpg", data: "This is some data numero 7"},
 
  ];
 
  center = ({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.carouse2',
	  autoplay: true
   
  });

  center2 = ({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.carousel',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    arrows: true,
  });
  
  /*
  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }*/
  
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
