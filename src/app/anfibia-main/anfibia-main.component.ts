import { Component, OnInit,  AfterViewInit, ViewChild, ElementRef, ViewChildren, QueryList, OnDestroy} from '@angular/core';
/*import * as Granim from 'granim';
import * as AOS from 'aos';*/

import { ProductosService } from '../servicios/productos.service';
import slideP from '../modulosAnfibia/sliderProductsConfig'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { ProductosModalComponent } from '../modals/productos-modal/productos-modal.component';
import { ModalCarritoComponent } from '../modals/modal-carrito/modal-carrito.component';
import { ModalInicioSesionComponent } from '../modals/modal-inicio-sesion/modal-inicio-sesion.component';
import { Router } from '@angular/router';
import {productoClass} from '../modelos/productos';
import { productoG, productoGeneral, image} from '../modelos/productosGeneral';
import  {scrollToTop} from '../modulosAnfibia/prueba';
import { NgxSpinnerService } from "ngx-spinner";
import { UsuariosService } from '../servicios/usuarios.service';


import { Observable, Observer, Subscription, fromEvent, of, from, interval, concat, throwError} from 'rxjs';
import { concatMap, filter, map, shareReplay, switchMap, tap, delay, mergeMap, mapTo, merge, catchError, finalize, exhaustMap} from 'rxjs/operators';
import {addChanProperty} from '../modulosAnfibia/manipulacionImagenes';
@Component({
  selector: 'app-anfibia-main',
  templateUrl: './anfibia-main.component.html',
  styleUrls: ['./anfibia-main.component.css']
})
export class AnfibiaMainComponent implements AfterViewInit, OnInit {




  
  public customOptions = slideP.valuesCustomOptions(16, true,2500, true, true, true, true, false, false, 30, 2500, ['ANTERIOR', 'SIGUIENTE'],{
    0: {
      items: 1.3 
    },
    320: {
      items: 1.7
    },
    640:{
      items: 2.5
    },
    740: {
      items: 3.3
    },
    940: {
      items: 5  
    }, 
    1024: {
     items: 6 
    }
  },
  false
  
);
  public productos = [];
  
  public identificadorUsuario:number;
  public productosNuevos:productoG[];
  

  public productosDestacados:Observable<productoG[]>;
  public productosMasVendidos:Observable<productoG[]>;
  public productosYellowTail:Observable<productoG[]>;
  public prueba:Observable<productoG[]>;
  public productosCarrito = [];
  public productosWishList = [];
  public showButton = false;
  public imagenCambio:string = "/assets/imagenes/paginaInicial/Arashy-cover-pop2.jpg";
  public variable:string  = "";
 

  public isLoading = false;
  public isAutheticated = false;
  private userSubs:Subscription;


  @ViewChildren('referButton', {read: ElementRef}) botonesWish: QueryList<ElementRef>
  @ViewChildren('referButtonCompra', {read: ElementRef}) botonesAddCart: QueryList<ElementRef>
  @ViewChild('puebaBoton') pruebaB:ElementRef;
 
f


   /*Constructor genera un objeto de tipo ProductosService*/
   constructor(private _productosS: ProductosService, private modalProducto: NgbModal, private router: Router, private spinner: NgxSpinnerService, private userStatus: UsuariosService, private modalInicio: NgbModal) { }

   


 
  
  ngOnInit(){

    const seccionPesca = document.getElementById('screen-pesca');
    const seccionCaceria = document.getElementById('screen-caceria');
    const contentPesca = document.getElementById('contentPesca');
    const contentCaceria = document.getElementById('contentCaceria');


  

    seccionPesca.addEventListener("click", () => {
      seccionPesca.style.opacity = '1';
      seccionPesca.style.flexGrow = '4';
      seccionCaceria.style.flex = '2';
      seccionCaceria.style.opacity = '0.3';
      contentPesca.style.transform = 'translateX(0)';
      contentPesca.style.transitionDelay = '9.3s ease-in-out';
      contentCaceria.style.transform = 'translateX(100%)';
      contentCaceria.style.transitionDelay = '9.3s ease-in-out'
    });

    seccionCaceria.addEventListener("click", () => {
      seccionCaceria.style.opacity = '1';
      seccionCaceria.style.flexGrow = '4';
      seccionPesca.style.flex = '2';
      seccionPesca.style.opacity = '0.3';
      contentCaceria.style.transform = 'translateX(0)';
      contentCaceria.style.transitionDelay = '9.3s ease-in-out';
      contentPesca.style.transform = 'translateX(100%)';
      contentPesca.style.transitionDelay = '9.3s ease-in-out';
    })
   
    /*Creamos una nueva lista de productos, solo para productos nuevos, en base a la consulta recibida
    Cabe recalcar que lo podemos hacer desde la base de datos, pero no lo haremos, porque no hay base de datos.
    */
  
   
    
   scrollToTop();
   this.spinner.show();
   /*Esta seccción va a quedar definida por el localStorage del usuario que se va a usar.*/
   
    /* 
    Accedemos a la información de la respuesta del servicio y accedemos a sus datos por medio de pipe que nos permite realizar multiples
    operaciones con los operadores de RXJS, la subscribción se realiza con asyn pipe del lado del navegador.
    */


    this.productosNuevos  = this._productosS.getProductos();
    this.productosNuevos.forEach(elemento => {
      this.imagenesAssign(elemento);
    });



  
    /*this.productosNuevos.forEach(producto => {
      producto.imagenesFuncion(producto.image);
    })*/
    /*this.productosNuevos.forEach(producto =>{*/
      /*if(this.productosWishList.some(prod => prod.idProducto === producto.idProducto)){

        producto.checkedWish = true
      }else{
        producto.checkedWish = false;
      }*/
      /*producto.imagenPrincipal = producto.image[0].url;
      if(producto.image[1]){
        producto.imagenCambio = producto.image[1].url;
      }else{
        producto.image[1] = producto.imagenPrincipal;
        producto.imagenCambio = producto.image[1];
      }
    });*/

      /*this.productosNuevos  = this._productosS.getProductos_API_Nuevos().pipe(
        map(x => x['rows']));*/

      this.productosDestacados= this._productosS.getProductos_API_Destacados().pipe(
        map(x => x['rows']));
        console.log('This productos destacados', this.productosDestacados);

      this.productosMasVendidos = this._productosS.getProductos_API_Mas_vendidos().pipe(
        map(x => x['rows']));

      this.productosYellowTail = this._productosS.getProductos_API_YellowTail().pipe(
        map(x => x['rows']));
        
      this.spinner.hide();
   
     
      



      this.userSubs = this.userStatus.isLoggedIn.subscribe(user => {
        console.log(user)
        this.isAutheticated = !!user;
        //console.log('This is the value of this.isAu', this.isAutheticated);
       
    })

   

 
   /*this._productosS.getProductos().subscribe(res =>{
    console.log(res);
    /*this.productosNuevos = res;
  },err => console.log(err)
);*/
 
   


   /*console.log("Este es el dato que quieres ver", this.productosNuevos);
   console.log('Estes es el dato que quieres ver', this.productosDestacados);
   console.log('Estes es el dato que quieres ver', this.productosMasVendidos);
   console.log('Estes es el dato que quieres ver', this.productosYellowTail);*/
   /*this.productosNuevos.forEach(producto =>{
      if(this.productosWishList.some(prod => prod.idProducto === producto.idProducto)){

        producto.checkedWish = true
      }else{
        producto.checkedWish = false;
      }
      producto.imagenPrincipal = producto.image[0].url;
      if(producto.image[1]){
        producto.imagenCambio = producto.image[1].url;
      }else{
        producto.image[1] = producto.imagenPrincipal;
        producto.imagenCambio = producto.image[1];
      }
    });
    
    
    
    
    
   */
    
  
  }

  

 

  ngAfterViewInit(){
    console.log('Sets after begins the ngOnInit');
    //fromEvent(this.pruebaB.nativeElement, 'click').subscribe(console.log);
    /*this.botonesWish.forEach(x => 
      fromEvent(x.nativeElement.focus(), 'click').subscribe(res => {
        console.log(res);
      })
    )*/
    //this.botonesWish.changes.subscribe(x => console.log('This is something you want', x));
    //this.botonesWish.changes.pipe(map(x => fromEvent(x.nativeElement, 'click').subscribe(console.log)));
   /*setTimeout(() => {*/




    /*this.botonesWish.forEach(elemento => fromEvent(elemento.nativeElement,'click').pipe(map(x => 
        this.pushBuWish(x['target']['parentElement']['value'])
      )).subscribe(console.log))


    
   }, 5000)*/


   /*this.botonesWish.forEach(elemento => fromEvent(elemento.nativeElement, 'click').pipe(concatMap(x => 
        this.addWishList(x['target']['parentElement']['value'])
      )).subscribe(console.log)

   )}, 3000);*/
    

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


  imagenesAssign(objeto){
    objeto.imagenPrincipal = objeto.image[0].url
    if(objeto.image[1]){
      objeto.imagenCambio = objeto.image[1].url;
    }else{
      objeto.image[1].url = objeto.imagenPrincipal;
      objeto.imagenCambio = objeto.image[1].url
    }
  }


  pushBuWish(dato){
    console.log('Lets see if get called', dato)
    //console.log('This is the data', dato, dato2);
    //fromEvent(dato, 'click').subscribe(res => console.log('This is the respuesta', res));
  }



 





  ngOnDestroy() {
    //this._productosLista.behaviorS.unsubscribe()
    this.userSubs.unsubscribe();
  }




  

  /*========================= METODOS PARA VIAJAR A DIFERENTES SECCIONES PESCA Y CACERÍA=================================================*/
  public fishingPage(){
    /*this.router.navigate(['/tienda'], {queryParams: {clasificacion: 'pesca'}});*/
    this.router.navigate(['/anfibia-pesca'])


  }

  /*Realizamos las operaciones que son necesarias para la inserción del producto en la tabla de user_has_favorites*/
  public addWishList(dato, e){
    if(this.isAutheticated){
      console.log('Hey Im in addWishList, you are going to send', dato, e.target.parentElement.id);
      dato.isLoading = true;
      const usuarioIdentificador = 1;
      console.log('Este es el identificador del dato', dato);
     
        Observable.create(observer => {
          observer.next(e.target)
        }).pipe(
        exhaustMap(x => 
            this._productosS.postProducto_wishList(dato, usuarioIdentificador)
           
          ), tap(x => console.log('This is the other response', x))).subscribe(x => {
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

/*======================================================================================================================================*/


  
  addCartElement(dato, event){
    console.log('This is the dato that I want to add to the cart', dato, event.target);
    if(this.isAutheticated){
      dato.isLoadingCart = true;
      const usuarioIdentificador = 1;
      
        Observable.create(observer => {
          observer.next(event.target)
        }).pipe(exhaustMap(x => 
          this._productosS.postProducto_cartList(dato, usuarioIdentificador) 
        )).subscribe(x => {
          console.log(x),
          dato.isLoadingCart = false
        },error => {
            console.log(error);
            dato.isLoadingCart = false;
          }
        );
  
     
    }else{
      dato.isLoadingCart = false;
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
  
    //return this._productosLista.postProducto_cartList(dato, usuarioIdentificador);
    //this.openModalCarrito(usuarioIdentificador);
  }

  


  public huntingPage(){
    /*this.router.navigate(['/tienda'], {queryParams: {clasificacion: 'Caceria'}});*/
    this.router.navigate(['/anfibia-caceria']);
  }
  
/*================================================================================================================================== */
 


 
 

  public informacionModal(objeto){
    console.log("Presionaste información producto", objeto.nombre, objeto.sku);
  }


  /*Se tiene que verificar que el mismo producto no se pueda insertar en la base de datos dos veces.*/


  /*Hará una petición post a la API a travez del servicio, despues llamaremos el metodo openModalCarrito*/



        
  /*Hará una petición post a la API a travez del servicio, despues llamaremos el metodo openModalCarrito*/
 



  /*Enviara al COMPONENTE producto Individual la información para ser recibida por el route params.*/
  public productoSeleccionado(dato){
    this.router.navigate(['/tienda', dato.id, dato.nombre])
    console.log('Presionaste producto seleccionado', dato);

  }



  /*Abrira el modal de carrito de compras, mandadno la información del producto como padre al hijo.*/
  public openModalCarrito(){
     const modalRef = this.modalProducto.open(ModalCarritoComponent,
      {
        scrollable: true,
        windowClass: 'myCustomModalClass',
        size: 'lg',
        
        // keyboard: false,
        // backdrop: 'static'
      });
    
    //let productoModalCarrito = idUsuario;
    
  
 
    //modalRef.componentInstance.fromParent = idUsuario;
    modalRef.result.then((result) => {
      console.log(result);
    }, (reason) => {
    });
  }

  

  
  /*Abrira el modal de carrito de compras, mandadno la información del producto como padre al hijo.*/
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


 
 

}
