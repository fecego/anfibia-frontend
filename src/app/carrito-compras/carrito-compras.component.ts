import { Component, OnInit } from '@angular/core';
import {ProductosService} from '../servicios/productos.service';
import { productosCarrito } from '../store-online/productosCarrito';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { ProductosModalComponent } from '../modals/productos-modal/productos-modal.component';
import { ModalCarritoComponent } from '../modals/modal-carrito/modal-carrito.component';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.css']
})
export class CarritoComprasComponent implements OnInit {

  constructor(private _listaCarrito:ProductosService, private _productos:ProductosService, private modalProducto: NgbModal) { }

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


  public listaCarrito:Array<any> = [];
  public productosInteres:Array<any> = [];
  public totalParcial:number = 0;
  public cantidadInicial:number;  
  public gastosEnvio:number = 200;
  public total:number;
  public totalIndividual:number = 0;
  public cantidad:number = 1;
  public producto: any;

  public productosCarrito = [];

  ngOnInit() {
    console.log("Ejecuta el ngOnInit");
    window.scrollTo({top: 0, behavior: 'smooth'});
    this.productosInteres = this._productos.getProductos();
    this.productosInteres.forEach(producto =>{
      producto.imagenPrincipal = producto.image[0].url;
      if(producto.image[1]){
        producto.imagenCambio = producto.image[1].url;
      }else{
        producto.image[1] = producto.imagenPrincipal;
        producto.imagenCambio = producto.image[1];
      }
    });




    this.listaCarrito = this._listaCarrito.getProductoCarrito();
    this.listaCarrito.forEach(producto => {
      
      producto.totalIndividual = this.sumaProductoIndividual(producto.precio, producto.cantidad);
      console.log("total individual", producto.totalIndividual);
      this.totalParcial = this.totalParcial + producto.totalIndividual;
      console.log("total parcial", this.totalParcial);
    });  
    this.total = this.totalParcial + this.gastosEnvio;
  }


  public addCart(dato){
    console.log(this.productosCarrito);
    let datoInsertar = dato;
    if(this.productosCarrito.includes(datoInsertar)){

    }else{
      this.productosCarrito.push(datoInsertar);
      this.openModalCarrito(this.productosCarrito);
      console.log(this.productosCarrito);
    }
  }



  public openModal(datos) {
    const modalRef = this.modalProducto.open(ProductosModalComponent,
      {
        scrollable: true,
        windowClass: 'myCustomModalClass',
        size: 'xl'
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


  public openModalCarrito(datos){
    const modalRef = this.modalProducto.open(ModalCarritoComponent,
     {
       scrollable: true,
       windowClass: 'myCustomModalClass',
       size: 'lg',
       
       // keyboard: false,
       // backdrop: 'static'
     });
   
   let productoModalCarrito = datos;
   
 

   modalRef.componentInstance.fromParent = datos;
   modalRef.result.then((result) => {
     console.log(result);
   }, (reason) => {
   });
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
