import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { ProductosService } from '../servicios/productos.service';
import {productoClass} from '../modelos/productos';
import {productoG} from '../modelos/productosGeneral';
import { wishedProducts } from '../modelos/wish_product';
import { NgxSpinnerService } from "ngx-spinner";
import  {scrollToTop} from '../modulosAnfibia/prueba';
import { Observable, Observer, Subscription, fromEvent, of, from, interval, concat, throwError, BehaviorSubject, } from 'rxjs';
import { concatMap, filter, map, shareReplay, switchMap, tap, delay, mergeMap, mapTo, merge, catchError, finalize, exhaustMap, take} from 'rxjs/operators';

import slideP from '../modulosAnfibia/sliderProductsConfig';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { ProductosModalComponent } from '../modals/productos-modal/productos-modal.component';
import { ModalCarritoComponent } from '../modals/modal-carrito/modal-carrito.component';
import {addChanProperty} from '../modulosAnfibia/manipulacionImagenes';
import { UsuariosService } from '../servicios/usuarios.service';
import { ModalInicioSesionComponent } from '../modals/modal-inicio-sesion/modal-inicio-sesion.component';
import { Router, NavigationEnd, Event} from '@angular/router'
import { NavigationEvent } from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-view-model';


type dataPrueba= {
  id:number,
  urlAfterRedirect:string,
  url:string
}


@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})



export class WishListComponent implements AfterViewInit {


  //public listaDeseos:Observable<productoG[]> = new Observable<productoG[]>();
  @ViewChildren('referButton', {read: ElementRef}) botonesWish: QueryList<ElementRef>
  @ViewChildren('referButtonCompra', {read: ElementRef}) botonesAddCart: QueryList<ElementRef>;
  @ViewChildren('pruebaA', {read: ElementRef}) botonAddPrueba: QueryList<ElementRef>;

  public lista_existen;
  public lista_no_existen;
  public longLista:number;

  public productosInteresantes: Observable<productoClass[]>;
  public masVendidos: Observable<productoClass[]>;


 
  public productsPrueba = [];
  public productosCarrito = [];
  
  
  
  private datoPrueba = new BehaviorSubject(undefined);
  public listaDeseos:Subscription
  public isAutheticated = false;
  private userSubs:Subscription;
  public mensajeError:any;
  public sourceUrl:any;



  public subs:Subscription;
  

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
  
  constructor(private _productosLista: ProductosService,  private modalProducto: NgbModal, private spinner: NgxSpinnerService, private userStatus: UsuariosService, private modalInicio: NgbModal, private router: Router) {}

  ngOnInit() {



    /*this._productosLista.getLasRoute().subscribe(
      x =>{
        console.log('This is x', x)
        if("url" in x[0]){
         this.sourceUrl = x[0].url
         console.log(x[0].url);

        }else{
          console.log('No existe ninguna propiedad');
        }

      });*/
    this.spinner.show();
   scrollToTop();
    /*Obtendremos el valor del localstorage de la sesion, el id del usuario, en este caso por DEFAULT será 1 */
    const id = 1;
   //Observable de la lista de productos del usuario
    /*const listaDeseos = this._productosLista.getProductosLista_deseos(id).pipe(map(
     x => Object.values(x)),
     shareReplay()
    
     );*/


     /*this._productosLista.refreshNeeds.subscribe(() => {
       
     });*/





     this._productosLista.behaviorS.subscribe(() =>{
       this.getProductosWishList(id);
     })



     this.sourceUrl = this.router.url;
     console.log('This is the url', this.sourceUrl);
     
    
     

     /*CARGAMOS LOS PRODUCTOS DEL METODO IR AL METODO*/
     
    



     /*this.lista_existen = listaDeseos.pipe(map(x => x.filter(x => x.existencia > 0)));
     this.lista_no_existen = listaDeseos.pipe(map(x => x.filter(x => x.existencia == 0)));*/
     
      this.productosInteresantes = this._productosLista.getProductos_API_Destacados().pipe(map(x => x['rows']));
      this.masVendidos = this._productosLista.getProductos_API_Mas_vendidos().pipe(map(x => x['rows']));




     this.userSubs = this.userStatus.isLoggedIn.subscribe(user => {
         console.log('Este es el token que maneja con el cambio', user)
         this.isAutheticated = !!user,
         console.log('This is the value of this.isAu', this.isAutheticated);
        
     })


     /*Primero verifica si estas loggeado para cargar la lista de deseos, en caso de que lo estes te los carga
     El interceptor captura las respuestas una vez que estamos loggeados, si perdemos el status, se verá reflejado en la peticion, 
     el interceptor verificara si refresca, si no, se perdio la conexión y tirara el error.
     */
     if(this.isAutheticated){
      this.getProductosWishList(id);

     }else{
       console.log('No te encuentas loggeado');
       this.spinner.hide();
     }



     


   //this.productsPrueba = this._productosLista.getProductos();
   //addChanProperty(this.productsPrueba);
    /*this.listaDeseos = this._productosLista.getProductosWishList();
    this.listaProductosCarrito = this._productosLista.getProductoCarrito();*/
    //console.log(this.listaDeseos);


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

       /*setTimeout(() => {
        this.botonAddPrueba.forEach(elemento => fromEvent(elemento.nativeElement, 'click').pipe(exhaustMap(x => 
            this.addCartElement(x['target']['parentElement']['value'])
          )).subscribe(x => {console.log(x),
              this.ngAfterViewInit()}
          ))
       }, 4000)*/


    }


 



  /*ESTE METODO REALIZA LA LLAMADA AL SERVICIO Y NOS SUBSCRIBE A LA RESPUESTA DANDONOS EL RESULTADO DE LAS PROPIEDADDES CON SUS VALORES 
  ES COLOCADO ENE EL NGONINIT.

  IGUAL FORMA REALIZA UN shareReplay por lo que cada observable al subscribirse, compartira el valor de este al ser subscrito.

  */
  getProductosWishList(dato){
   return this._productosLista.getProductosLista_deseos(dato).pipe(
     
    map(
      x => Object.values(x)),
      shareReplay(), 
      

      ).subscribe(respuesta => 
        {

          console.log(respuesta)
          this.lista_existen = respuesta.filter(x => x.existencia != 0);
          this.lista_no_existen = respuesta.filter(x => x.existencia == 0);
          this.spinner.hide();

        }, 
        error => {
          
            //this.mensajeError = error.error.message;
            this.mensajeError = error
            console.log('this is the error from wishlist ', error);
            this.spinner.hide();
          
        }
      );


      /*const deseos = this._productosLista.getProductosLista_deseos(dato).pipe(map(
        x => Object.values(x)),
        shareReplay()
        );

        this.lista_existen = deseos.pipe(map(x => x.filter(x => x.existencia > 0)));
        this.lista_no_existen = deseos.pipe(map(x => x.filter(x => x.existencia == 0)));

        return this.lista_no_existen, this.lista_existen;*/

  }




  removeElemento(dato, event){
 
    dato.isDeleting = true;
    console.log('This is the info I got to be deleted', dato, event.target);
    const usuarioIdentificador = 1;
    /*this._productosLista.removeElementoLista_deseos(dato, usuarioIdentificador).subscribe(console.log);*/
      const ObsRemove = Observable.create(observer => {
        observer.next(event.target);
      }).pipe(
        take(1),
        tap(x => console.log(x)),
        exhaustMap(x => 
          this._productosLista.removeElementoLista_deseos(dato, usuarioIdentificador)
        )).subscribe(
          x => {
            console.log(x)
            dato.isDeleting = false;
          },
          err => {
            dato.isDeleting = false;
            console.log(err);
          });

   



    //this.listaDeseos.splice(indice, 1);
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

  /*public addCart(dato){
    console.log(this.productosCarrito);
    let datoInsertar = dato;
    if(this.productosCarrito.includes(datoInsertar)){

    }else{
      this.productosCarrito.push(datoInsertar);
      this.openModalCarrito(this.productosCarrito);
      console.log(this.productosCarrito);
    }
  }*/


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

 public addWishList(dato, e){
  
  if(this.isAutheticated){
    console.log('Hey Im in addWishList, you are going to send', dato, e.target);
    const usuarioIdentificador = 1;
    console.log('Este es el identificador del dato', dato);
    dato.isLoading = true;
   
      Observable.create(observer => {
        observer.next(e.target)
      }).pipe(exhaustMap(x => 
          this._productosLista.postProducto_wishList(dato, usuarioIdentificador)
        )).subscribe(x => {
          if(x.statusCode == 200){
            dato.fullHeart = true;
            dato.isLoading = false;
          }else if(x.statusCode == 409){
            dato.fullHeart = false;
            dato.isLoading = false;

          }
  
        }, error => {
          console.log('This is the fucking error', error);
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
  console.log('This is the dato that I want to add to the cart', dato, event.target);
  const usuarioIdentificador = 1;
  dato.isLoadingCart = true;
 
    Observable.create(observer => {
      observer.next(event.target)
    }).pipe(exhaustMap(x => 
      this._productosLista.postProducto_cartList(dato, usuarioIdentificador) 
    )).subscribe(x => {
      console.log(x);
      dato.isLoadingCart = false;
    }, error => {
      console.log(error),
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





}
