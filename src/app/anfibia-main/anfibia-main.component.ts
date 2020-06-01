import { Component, OnInit,  AfterViewInit } from '@angular/core';
/*import * as Granim from 'granim';
import * as AOS from 'aos';*/

import { ProductosService } from '../servicios/productos.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { ProductosModalComponent } from '../modals/productos-modal/productos-modal.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-anfibia-main',
  templateUrl: './anfibia-main.component.html',
  styleUrls: ['./anfibia-main.component.css']
})
export class AnfibiaMainComponent implements OnInit {
  public productos = [];
  
  public productosNuevos = [];
  public productosDestacados = [];
  public productosCarrito = [];
  public productosWishList = [];
  public imagenCambio:string = "/assets/imagenes/paginaInicial/Arashy-cover-pop2.jpg";
  
  public variable:string  = "";
   /*Constructor genera un objeto de tipo ProductosService*/
   constructor(private _productosS: ProductosService, private modalProducto: NgbModal, private router: Router) { }

   



  
  ngOnInit(){
    /*Creamos una nueva lista de productos, solo para productos nuevos, en base a la consulta recibida
    Cabe recalcar que lo podemos hacer desde la base de datos, pero no lo haremos, porque no hay base de datos.
    */
    this.productosNuevos = this._productosS.getProductos();
    this.productosNuevos.forEach(producto =>{
      producto.imagenPrincipal = producto.image[0].url;
      if(producto.image[1]){
        producto.imagenCambio = producto.image[1].url;
      }else{
        producto.image[1] = producto.imagenPrincipal;
        producto.imagenCambio = producto.image[1];
      }
    });
    
    
   
  }

  

 
  public customOptions: OwlOptions = {
    items: 8,
    autoplay: true,
    autoplayTimeout:2500,
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

 

  public informacionModal(objeto){
    console.log("Presionaste información producto", objeto.nombre, objeto.sku);
  }


  /*Se tiene que verificar que el mismo producto no se pueda insertar en la base de datos dos veces.*/
  public addCart(dato){
    console.log(this.productosCarrito);
    let datoInsertar = dato;
    if(this.productosCarrito.includes(datoInsertar)){
      console.log('El dato ya se encuentra dentro del array de productos, no se puede insertar, dado que ya esta guardado, seleccione otro producto.');
    }else{
      this.productosCarrito.push(datoInsertar);
      console.log(this.productosCarrito);
    }
  }





  public addWishList(dato){
    console.log(this.productosWishList);
    let datoInsertar = dato;
    if(this.productosWishList.includes(datoInsertar)){
      console.log('El dato ya se encuentra dentro del array de productos, no se puede insertar, dado que ya esta guardado, seleccione otro producto.');
    }else{
      this.productosWishList.push(datoInsertar);
      console.log(this.productosWishList);
    }
  }

  public productoSeleccionado(dato){
    this.router.navigate(['/tienda', dato.id, dato.nombre])
    console.log('Presionaste producto seleccionado', dato);

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


  hoverImage(){
    
  }
 

}
