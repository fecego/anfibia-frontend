import { Component, OnInit } from '@angular/core';
import * as Granim from 'granim';
import * as AOS from 'aos';
import { ProductosService } from '../servicios/productos.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-anfibia-main',
  templateUrl: './anfibia-main.component.html',
  styleUrls: ['./anfibia-main.component.css']
})
export class AnfibiaMainComponent implements OnInit {


  public customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['Previous', 'Next'],
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

  constructor(private _productosS: ProductosService) { }

  public productos = [];


  ngOnInit(){

    this.productos = this._productosS.getProductos();
    console.log(this.productos);
    
   
    
  }

}
