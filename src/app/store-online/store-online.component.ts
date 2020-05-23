import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import Typed from 'typed.js';
import * as $ from 'jquery';
import { ProductosService } from "../servicios/productos.service";
import { Router} from "@angular/router"
import { ActivatedRoute } from '@angular/router';
import { productosCarrito } from "./productosCarrito";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { ProductosModalComponent } from '../modals/productos-modal/productos-modal.component';

@Component({
  selector: 'app-store-online',
  templateUrl: './store-online.component.html',
  styleUrls: ['./store-online.component.css']
})
export class StoreOnlineComponent implements OnInit {

  constructor(private _productosTienda: ProductosService,  private modal: NgbModal, private route: ActivatedRoute, private router:Router) { }

  public productosTienda:Array<any> = [];
  public productosCarrito:Array<any> = [];
  public pClasificacion:string;
  public productosClasificacion:Array<any> = [];
  public pCategoria:string;
  public pesca:boolean;
  public caceria: boolean;

  crearProducto(producto){
    let productoCarrito = new productosCarrito(producto.idProducto, producto.sku);
    productoCarrito.addCarrito(productoCarrito);

  }


  /*Abre una ventana modal pasandole la información obtenida desde el padre, que en este caso es este 
  componente*/
  public openModal(datos) {
    const modalRef = this.modal.open(ProductosModalComponent,
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

  pescaCambio(dato: boolean){
    if(dato == true){
      this.router.navigateByUrl(`/tienda/pesca`);
    }
  }

  caceriaCambio(dato:boolean){
    if(dato == true){

    }
  }
  




  ngOnInit(){
    AOS.init();
    this.pesca = false;
    this.caceria = false;
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


    this.route.paramMap.subscribe(params => { 
      
      this.pClasificacion = params.get('clasificacion')
      this.pCategoria = params.get('categoria');
      console.log(this.pClasificacion);
      
      if(this.pClasificacion && this.pCategoria === null){
        console.log("Estoy aqui xd", this.pCategoria);
        this.productosTienda = this._productosTienda.getProductos().filter((producto) =>{
          return producto.clasificacion == this.pClasificacion ;
        });
      
      }
      if(this.pClasificacion && this.pCategoria ){
        console.log('Estoy en el de categoria y clasificacion');
        this.productosTienda = this._productosTienda.getProductos().filter((producto) =>{
          return producto.clasificacion === this.pClasificacion && producto.categoria === this.pCategoria;
        });

      }


      if(this.pCategoria == null && this.pClasificacion == null)
      {
        this.productosTienda = this._productosTienda.getProductos();
        console.log('Entre al else xd', this.pCategoria, this.pClasificacion);
      }
      /*console.log(this.productosTienda);
      this.productosClasificacion = this.productosTienda.filter((producto)=>{
        return producto.clasificacion === this.pClasificacion;
      });
      if(this.pClasificacion){
        this.productosTienda = this.productosClasificacion;
      }else{
        this.productosTienda = this._productosTienda.getProductos();
      }*/

     
    
    });
    
  }

  


}
