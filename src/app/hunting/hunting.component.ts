import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import * as AOS from 'aos';
import { ProductosService } from '../servicios/productos.service';
import { UsuariosService } from '../servicios/usuarios.service';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { ProductosModalComponent } from '../modals/productos-modal/productos-modal.component';
import { ModalCarritoComponent } from '../modals/modal-carrito/modal-carrito.component';
import { ModalInicioSesionComponent } from '../modals/modal-inicio-sesion/modal-inicio-sesion.component';
import {productoClass} from '../modelos/productos';
import {productoG} from '../modelos/productosGeneral';

import  {scrollToTop} from '../modulosAnfibia/prueba';
import slideP from '../modulosAnfibia/sliderProductsConfig';
import { Observable, Observer, Subscription, fromEvent, of, from, interval, concat, throwError} from 'rxjs';
import { concatMap, filter, map, shareReplay, switchMap, tap, delay, mergeMap, mapTo, merge, catchError, finalize, exhaustMap} from 'rxjs/operators';
import {addChanProperty} from '../modulosAnfibia/manipulacionImagenes';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-hunting',
  templateUrl: './hunting.component.html',
  styleUrls: ['./hunting.component.css']
})
export class HuntingComponent implements AfterViewInit, OnInit {


 

 
  constructor(private _productoCaceria: ProductosService, private modalProducto: NgbModal, private spinner: NgxSpinnerService, private userStatus: UsuariosService, private modalInicio: NgbModal) { }


  public customOptions = slideP.valuesCustomOptions(16, true,2500, true, true, true, true, false, false, 30, 2500, ['ANTERIOR', 'SIGUIENTE'],{
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
      items: 6
    }
  },
  false
  
);

  public productosCaza_nuevos:Observable<productoG[]>;
  public productosCaza_destacados:Observable<productoG[]>;
  public productosCaza_masVendidos:Observable<productoG[]>;

  
  public productosCaceria = [];
  public productosCaceriaNuevos:productoClass[] = [];
  public productosCaceriaDestacados:productoClass[] =[];
  public productosCarrito:productoClass[] = [];



  public isAutheticated = false;
  private userSubs:Subscription;
  @ViewChildren('referButton', {read: ElementRef}) botonesWish: QueryList<ElementRef>
  @ViewChildren('referButtonCompra', {read: ElementRef}) botonesAddCart: QueryList<ElementRef>
  
  

  ngOnInit() {
    scrollToTop();
    this.spinner.show();
    /*this.suma(1, 5, (resultado) =>{
      if(resultado == 4){
        console.log("El resultado es igual a 4");
      }else{
        console.log("El resultado no es 4");
      }
    })*/
    this.productosCaza_nuevos = this._productoCaceria.getProductosCaceria_API_Nuevos().pipe(map(x => x['rows']));
    this.productosCaza_destacados = this._productoCaceria.getProductosCaceria_API_Destacados().pipe(map(x => x['rows']));
    this.productosCaza_masVendidos = this._productoCaceria.getProductosCaceria_API_MasVendidos().pipe(map(x => x['rows'])); 

    this.spinner.hide();

    /*this.productosCaceria = this._productoCaceria.getProductos();
    this.productosCaceria = this.productosCaceria.filter(producto =>{
      return producto.clasificacion == 'Caceria';
    });*/
    this.getImage(this.productosCaceria);
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

    this.userSubs = this.userStatus.isLoggedIn.subscribe(user => {
      console.log(user)
      this.isAutheticated = !!user,
      console.log('This is the value of this.isAu', this.isAutheticated);
     
  })


  }




  ngOnDestroy() {
    //this._productosLista.behaviorS.unsubscribe()
    this.userSubs.unsubscribe();
  }



  ngAfterViewInit(){
    /*setTimeout(() => {
      this.botonesWish.forEach(elemento => fromEvent(elemento.nativeElement, 'click').pipe(exhaustMap(x => 
          this.addWishList(x['target']['parentElement']['value'])
        )).subscribe(x => console.log('This is x', x)));
  
     }, 4000)
  
  
     setTimeout(() => {
       this.botonesAddCart.forEach(elemento => fromEvent(elemento.nativeElement, 'click').pipe(exhaustMap(x => 
            this.addCartElement(x['target']['value'])
          )).subscribe(x => console.log('this is x ', x)));
     }, 4000)*/
  }
   /*ssuma(num1, num2, callback){
    var resultado = num1 + num2;
    callback(resultado);
  }*/


 /*Realizamos las operaciones que son necesarias para la inserción del producto en la tabla de user_has_favorites*/
 public addWishList(dato, e){

  
  if(this.isAutheticated){
    dato.isLoading = true;
    console.log('Hey Im in addWishList, you are going to send', dato, e.target);
    const usuarioIdentificador = 1;
    console.log('Este es el identificador del dato', dato);
 
      Observable.create(observer => {
        observer.next(e.target)
      }).pipe(exhaustMap(x => 
          this._productoCaceria.postProducto_wishList(dato, usuarioIdentificador)
        )).subscribe(x => {
          if(x.statusCode == 200){
            dato.fullHeart = true;
            dato.isLoading = false;
          }else if(x.statusCode == 409){
            dato.fullHeart = false;
            dato.isLoading = false;

          }
        }, error => {
          console.log(error);
          dato.fullHeart = false;
          dato.isLoading = false;
        })
    
    //return this._productosLista.postProducto_wishList(dato, usuarioIdentificador);
  }else{
    console.log('Se desplegara el modal de Inicio de Sesión');
    const modalRef = this.modalInicio.open(ModalInicioSesionComponent,
    {
      scrollable: true,
      windowClass: 'myCustomModalClass',
      size: 'md'
      // keyboard: false,
      // backdrop: 'static'
    });
  }
  
}

addCartElement(dato, event){
  if(this.isAutheticated){
    dato.isLoadingCart = true;
    console.log('This is the dato that I want to add to the cart', dato, event.target);
    const usuarioIdentificador = 1;
    
      Observable.create(observer => {
        observer.next(event.target)
      }).pipe(exhaustMap(x => 
        this._productoCaceria.postProducto_cartList(dato, usuarioIdentificador) 
      )).subscribe(x => {
        console.log(x);
        dato.isLoadingCart = false;
      }, error => {
        console.log(error);
        dato.isLoadingCart = false;
      });
 
  
    //return this._productosLista.postProducto_cartList(dato, usuarioIdentificador);
    //this.openModalCarrito(usuarioIdentificador);
  }else{
    console.log('Se desplegara el modal de Inicio de Sesión');
    const modalRef = this.modalInicio.open(ModalInicioSesionComponent,
    {
      scrollable: true,
      windowClass: 'myCustomModalClass',
      size: 'md'
      // keyboard: false,
      // backdrop: 'static'
    });
  }
}



  

  getImage(listaArreglo:any){
    listaArreglo.forEach(productoCaceria =>{
      productoCaceria.imagenPrincipal = productoCaceria.image[0].url;
      if(productoCaceria.image[1]){
        productoCaceria.imagenCambio = productoCaceria.image[1].url;
      }else if(!productoCaceria.image[1]){
        productoCaceria.imagenCambio = productoCaceria.imagenPrincipal;
      }
    });

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

 

}
