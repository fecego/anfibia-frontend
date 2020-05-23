import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { ProductosService } from '../servicios/productos.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { ProductosModalComponent } from '../modals/productos-modal/productos-modal.component';



@Component({
  selector: 'app-hunting',
  templateUrl: './hunting.component.html',
  styleUrls: ['./hunting.component.css']
})
export class HuntingComponent implements OnInit {


  public customOptions: OwlOptions = {
    items: 8,
    autoplay: true,
    autoplayTimeout: 2500,
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
  
  slides = [
    {
      img: "/assets/imagenes/hunting/guns1.jpg"
    },
    {
      img: "/assets/imagenes/hunting/camuflaje.jpg"
      
    },
    {
      img: "/assets/imagenes/hunting/rifle.jpg"
     
    },
    {
      img: "/assets/imagenes/hunting/Cazador.jpg"
    }
  ];
 
  slideConfig = {
    infinite: true,
    slidesToShow: 2,
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

  constructor(private _productoCaceria: ProductosService, private modalProducto: NgbModal) { }

  public productosCaceria:Array<any> = [];
  public productosCaceriaNuevos: Array<any> = [];
  public productosCaceriaDestacados: Array<any> =[];


  

  ngOnInit() {

    
    this.productosCaceria = this._productoCaceria.getProductos();
    /*this.productosCaceriaNuevos = this.productosCaceria.filter((producto) =>{
      return producto.nuevo = true;
    })

    this.productosCaceriaDestacados = this.productosCaceria.filter((producto) =>{
      return producto.destacado = true;
    })*/
    
    $("img").click(function(){
      var x = $(this).width();
      var y = $(this).height();
      console.log("Es es el width " + " " + x  +  " El height de tu imagen" + " "+ y);
    });


  }

  public openModal(datos) {
    const modalRef = this.modalProducto.open(ProductosModalComponent,
      {
        scrollable: true,
        windowClass: 'myCustomModalClass',
        size: 'lg'
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

}
