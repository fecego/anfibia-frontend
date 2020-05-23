import { Component, OnInit } from '@angular/core';
/*import * as Granim from 'granim';
import * as AOS from 'aos';*/

import { ProductosService } from '../servicios/productos.service';
<<<<<<< HEAD
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { ProductosModalComponent } from '../modals/productos-modal/productos-modal.component';
import { Router } from '@angular/router';
=======


>>>>>>> 2fd557425190126c071472d018de2e47fa1fb799
@Component({
  selector: 'app-anfibia-main',
  templateUrl: './anfibia-main.component.html',
  styleUrls: ['./anfibia-main.component.css']
})
export class AnfibiaMainComponent implements OnInit {
<<<<<<< HEAD


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

  /*Constructor genera un objeto de tipo ProductosService*/
  constructor(private _productosS: ProductosService, private modalProducto: NgbModal, private router: Router) { }
=======
  constructor(private _productosS: ProductosService) { }
>>>>>>> 2fd557425190126c071472d018de2e47fa1fb799

  public productos = [];
  public productosNuevos = [];
  public productosDestacados = [];
  public productosCarrito = [];
  public productosWishList = [];

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
    
<<<<<<< HEAD
    let productoModal = datos;
    
  
 
    modalRef.componentInstance.fromParent = datos;
    modalRef.result.then((result) => {
      console.log(result);
    }, (reason) => {
    });
=======
>>>>>>> 2fd557425190126c071472d018de2e47fa1fb799
  }



  
  ngOnInit(){
    /*Creamos una nueva lista de productos, solo para productos nuevos, en base a la consulta recibida
    Cabe recalcar que lo podemos hacer desde la base de datos, pero no lo haremos, porque no hay base de datos.
    */
    this.productosNuevos = this._productosS.getProductos();
    this.productosNuevos = this.productosNuevos.filter((producto)=>{
       return producto.nuevo === true
    });
    console.log("Estos son los productos nuevos", this.productosNuevos);
    this.productosNuevos.forEach((producto) =>{
      console.log(producto.image[0].url);
    });
    
    this.productosDestacados = this._productosS.getProductos().filter((producto) =>{
      return producto.destacado === true;
    }); 
    console.log("Estos son los productos destacados", this.productosDestacados);
   
  }

 

}
