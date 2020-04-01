import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import Typed from 'typed.js';
import * as $ from 'jquery';
import { ProductosService } from "../servicios/productos.service";
import { productosCarrito } from "./productosCarrito";

@Component({
  selector: 'app-store-online',
  templateUrl: './store-online.component.html',
  styleUrls: ['./store-online.component.css']
})
export class StoreOnlineComponent implements OnInit {

  constructor(private _productosTienda: ProductosService) { }

  public productosTienda:Array<any> = [];
  public productosCarrito:Array<any> = [];


  crearProducto(producto){
    let productoCarrito = new productosCarrito(producto.idProducto, producto.sku);
    productoCarrito.addCarrito(productoCarrito);

  }







  ngOnInit(){
    AOS.init();

    this.productosTienda = this._productosTienda.getProductos();
    /*var typed = new Typed(".typed", {
      strings: ['Compra $1000 en productos de nuestra tienda y lleva un descuento del 20%', 'Llevate una caña de pescar Tatsumaki en la compra de 2 carretes Takawasaki'],
      fadeOut: false,
      backSpeed: 30,
      loop: true,
      showCursor: false,
      typeSpeed: 20
    });*/


    $("img").click(function(){
      /*Obtengo la ruta de la imagen que es clickeada y la de la imagen Principal, 
      la reasigno a la imagenPrincipal y la cambia.
      */
      var imagenPrincipal = $("#imagen-principal").attr('src');
      console.log('imagenPrincipal '+ imagenPrincipal);
      var clickedImage = $(this).attr('src');
      console.log("This is img" + clickedImage);
      var c = $("#imagen-principal").attr('src', clickedImage);

    });
    
  }

  


}
