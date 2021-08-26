import { Component, OnInit, AfterViewInit, ViewChildren, ElementRef, QueryList, OnDestroy } from '@angular/core';
/*import * as AOS from 'aos';*/
/*import * as $ from 'jquery';*/
import { ProductosService } from "../servicios/productos.service";
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { ProductosModalComponent } from '../modals/productos-modal/productos-modal.component';
import { ModalCarritoComponent } from '../modals/modal-carrito/modal-carrito.component';
import { ModalInicioSesionComponent } from '../modals/modal-inicio-sesion/modal-inicio-sesion.component';
import {productoClass} from '../modelos/productos';
import  {scrollToTop} from '../modulosAnfibia/prueba';
import slideP from '../modulosAnfibia/sliderProductsConfig';
import { Observable, Observer, Subscription, fromEvent, of, from, interval, concat, throwError} from 'rxjs';
import { concatMap, filter, map, shareReplay, switchMap, tap, delay, mergeMap, mapTo, merge, catchError, finalize, exhaustMap} from 'rxjs/operators';
import {addChanProperty} from '../modulosAnfibia/manipulacionImagenes';
import {productoG} from '../modelos/productosGeneral';
import { NgxSpinnerService } from "ngx-spinner";
import { UsuariosService } from '../servicios/usuarios.service';


@Component({
  selector: 'app-fishing',
  templateUrl: './fishing.component.html',
  styleUrls: ['./fishing.component.css']
})
export class FishingComponent implements AfterViewInit, OnInit {


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
  public productosPesca = [];

  public productosPesca_Nuevos: Observable<productoG[]>;
  public productosPesca_Destacados:Observable<productoG[]>;
  public productosPesca_masVendidos:Observable<productoG[]>;
  public productosPesca_yellowTail:Observable<productoG[]>;

  
  public isAutheticated = false;
  private userSubs:Subscription;



  @ViewChildren('referButton', {read: ElementRef}) botonesWish: QueryList<ElementRef>
  @ViewChildren('referButtonCompra', {read: ElementRef}) botonesAddCart: QueryList<ElementRef>
  

  public productosCarrito:productoClass[]= [];

  slides = [
    {
      img: "/assets/imagenes/paginaInicial/blackfriday.jpg"
     
     
    },
    {
      img: "/assets/imagenes/paginaInicial/blackfriday.jpg"
     
      
    },
    {
      img: "/assets/imagenes/paginaInicial/blackfriday.jpg"
     
      
    },
    {
      img: "/assets/imagenes/paginaInicial/blackfriday.jpg"
     
    }
  ];
 
  slideConfig = {
    infinite: true,
    slidesToShow: 2.2,
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

  constructor(private _productosPesca: ProductosService, private route: Router, private modalProducto: NgbModal, private spinner: NgxSpinnerService, private userStatus: UsuariosService, private modalInicio: NgbModal) {
     
   }



  ngOnInit() {


    scrollToTop();
    this.spinner.show();
      this.productosPesca_Nuevos = this._productosPesca.getProductosPesca_API_Nuevos().pipe(map(x => x['rows']));
      this.productosPesca_Destacados = this._productosPesca.getProductosPesca_API_Destacados().pipe(map(x => x['rows']));
      this.productosPesca_masVendidos = this._productosPesca.getProductosPesca_API_MasVendidos().pipe(map(x => x['rows']));
      this.productosPesca_yellowTail = this._productosPesca.getProductosPesca_API_YellowTail().pipe(map(x => x['rows']));
      this.spinner.hide();
    /*this.productosPesca = this._productosPesca.getProductos();*/
    this.getImage(this.productosPesca);
    /*this.productosPesca_Nuevos = this._productosPesca.getProductos_API_Nuevos().pipe(map(x => x['rows']));
    this.productosPesca_Destacados = this._productosPesca.getProductos_API_Destacados().pipe(map(x => x['rows']));
    this.productosPesca_masVendidos = this._productosPesca.getProductos_API_Mas_vendidos().pipe(map(x => x['rows']));
    this.productosPesca_yellowTail = this._productosPesca.getProductos_API_YellowTail().pipe(map(x => x['rows']));*/



    /*this.productosPesca = this._productosPesca.getProductos();
    this.productosPesca = this.productosPesca.filter(producto =>{
      return (producto.clasificacion == 'pesca');
    })
    this.getImage(this.productosPesca);



    this.productosPescaNuevos = this.productosPesca.filter((producto) =>{
      return producto.nuevo = true;
    });

    this.productosPescaDestacados = this.productosPesca.filter((producto)=>{
      return producto.destacado = true;
    });*/

    
    

    $(".item-1").mouseenter(function(){
       $(".item-2").css("filter", "brightness(50%)");
       $(".item-3").css("filter", "brightness(50%)");
       $(".item-4").css("filter", "brightness(50%)");
       $(".item-5").css("filter", "brightness(50%)");
       
    });

    $(".item-1").mouseleave(function(){
      $(".item-2").css("filter", "brightness(100%)");
      $(".item-3").css("filter", "brightness(100%)");
      $(".item-4").css("filter", "brightness(100%)");
      $(".item-5").css("filter", "brightness(100%)");
      
   });

   $(".item-2").mouseenter(function(){
    $(".item-1").css("filter", "brightness(50%)");
    $(".item-3").css("filter", "brightness(50%)");
    $(".item-4").css("filter", "brightness(50%)");
    $(".item-5").css("filter", "brightness(50%)");
    
 });

 $(".item-2").mouseleave(function(){
   $(".item-1").css("filter", "brightness(100%)");
   $(".item-3").css("filter", "brightness(100%)");
   $(".item-4").css("filter", "brightness(100%)");
   $(".item-5").css("filter", "brightness(100%)");
   
});

$(".item-3").mouseenter(function(){
  $(".item-1").css("filter", "brightness(50%)");
  $(".item-2").css("filter", "brightness(50%)");
  $(".item-4").css("filter", "brightness(50%)");
  $(".item-5").css("filter", "brightness(50%)");
  
});

$(".item-3").mouseleave(function(){
 $(".item-1").css("filter", "brightness(100%)");
 $(".item-2").css("filter", "brightness(100%)");
 $(".item-4").css("filter", "brightness(100%)");
 $(".item-5").css("filter", "brightness(100%)");
 
});

$(".item-4").mouseenter(function(){
  $(".item-1").css("filter", "brightness(50%)");
  $(".item-2").css("filter", "brightness(50%)");
  $(".item-3").css("filter", "brightness(50%)");
  $(".item-5").css("filter", "brightness(50%)");
  
});

$(".item-4").mouseleave(function(){
 $(".item-1").css("filter", "brightness(100%)");
 $(".item-2").css("filter", "brightness(100%)");
 $(".item-3").css("filter", "brightness(100%)");
 $(".item-5").css("filter", "brightness(100%)");
 
});

$(".item-5").mouseenter(function(){
  $(".item-1").css("filter", "brightness(50%)");
  $(".item-2").css("filter", "brightness(50%)");
  $(".item-3").css("filter", "brightness(50%)");
  $(".item-4").css("filter", "brightness(50%)");
  
});

$(".item-5").mouseleave(function(){
 $(".item-1").css("filter", "brightness(100%)");
 $(".item-2").css("filter", "brightness(100%)");
 $(".item-3").css("filter", "brightness(100%)");
 $(".item-4").css("filter", "brightness(100%)");
 
});


this.userSubs = this.userStatus.isLoggedIn.subscribe(user => {
  console.log(user)
  this.isAutheticated = !!user,
  console.log('This is the value of this.isAu', this.isAutheticated);
 
})
    

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


  ngOnDestroy() {
    //this._productosLista.behaviorS.unsubscribe()
    this.userSubs.unsubscribe();
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


  public addWishList(dato, e){
    
    console.log(dato);
    if(this.isAutheticated){
      dato.isLoading = true;
      console.log('Hey Im in addWishList, you are going to send', dato, e.target);
      const usuarioIdentificador = 1;
      console.log('Este es el identificador del dato', dato);
     
        Observable.create(observer => {
          observer.next(e.target)
        }).pipe(exhaustMap(x => 
          this._productosPesca.postProducto_wishList(dato, usuarioIdentificador)
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
          dato.isLoading = false;
          dato.fullHeart = false;
        });
  
    //return this._productosLista.postProducto_wishList(dato, usuarioIdentificador);
    }else{
      dato.fullHeart = false;
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
          this._productosPesca.postProducto_cartList(dato, usuarioIdentificador) 
        )).subscribe(x => {
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
    listaArreglo.forEach(productoPesca =>{
      productoPesca.imagenPrincipal = productoPesca.image[0].url;
      if(productoPesca.image[1]){
        productoPesca.imagenCambio = productoPesca.image[1].url;
      }else if(!productoPesca.image[1]){
        productoPesca.imagenCambio = productoPesca.imagenPrincipal;
      }
    });

  }


  public openModalCarrito(datos){
    const modalRef = this.modalProducto.open(ModalCarritoComponent,
     {
       scrollable: true,
       windowClass: 'myCustomModalClass',
       size: 'xl',
       
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
