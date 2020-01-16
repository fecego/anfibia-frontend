import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'anfibiaFecego';
  slides = [
    {img: "../assets/imagenes/1.png", data: "This is some data numero 0"},
    {img: "../assets/imagenes/2.png", data: "This is some data numero 1"},
    {img: "../assets/imagenes/3.png", data: "This is some data numero 2"},
    {img: "../assets/imagenes/4.jpg", data: "This is some data numero 3"},
    {img: "../assets/imagenes/5.jpg", data: "This is some data numero 4"},
    {img: "../assets/imagenes/6.jpg", data: "This is some data numero 5"},
    {img: "../assets/imagenes/7.png", data: "This is some data numero 6"},
    {img: "../assets/imagenes/8.jpg", data: "This is some data numero 7"},
 
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
  
}
