import { Component, OnInit } from '@angular/core';
import {ProductosService} from '../servicios/productos.service';
import { productosCarrito } from '../store-online/productosCarrito';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.css']
})
export class CarritoComprasComponent implements OnInit {

  constructor(private _listaCarrito:ProductosService ) { }


  public listaCarrito:Array<any> = [];
  public totalParcial:number = 0;
  public cantidadInicial:number;  
  public gastosEnvio:number = 200;
  public total:number;
  public totalIndividual:number = 0;
  public cantidad:number = 1;
  public producto: any;

  ngOnInit() {
    console.log("Ejecuta el ngOnInit");
    window.scrollTo({top: 0, behavior: 'smooth'});
    this.listaCarrito = this._listaCarrito.getProductoCarrito();
    this.listaCarrito.forEach(producto => {
      
      producto.totalIndividual = this.sumaProductoIndividual(producto.precio, producto.cantidad);
      console.log("total individual", producto.totalIndividual);
      this.totalParcial = this.totalParcial + producto.totalIndividual;
      console.log("total parcial", this.totalParcial);
    });  
    this.total = this.totalParcial + this.gastosEnvio;
  }


  eliminarProducto(dato, dato2){
    console.log(dato, dato2);
    this.totalParcial = this.totalParcial - dato.totalIndividual;
    this.total = this.totalParcial + this.gastosEnvio;
    this.listaCarrito.splice(dato2, 1);
    
    
  }



  cambios(dato){
    this.producto = dato;
    this.producto.totalIndividual = this.sumaProductoIndividual(this.producto.precio, this.producto.cantidad);
    console.log(this.producto.totalIndividual);
    console.log(this.listaCarrito);
    this.total = 0;
    this.totalParcial = 0;
    this.listaCarrito.forEach(elemento =>{
      console.log("This total individual", elemento.totalIndividual);
      
      this.totalParcial = this.totalParcial + elemento.totalIndividual;
      console.log(this.totalParcial);
    })
    this.total = this.totalParcial + this.gastosEnvio;
    
  }





  sumaProductoIndividual(individual, cantidad){
    this.totalIndividual = (individual * cantidad);
    return this.totalIndividual;
  }




}
