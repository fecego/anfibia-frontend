import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, ViewChildren, QueryList, OnDestroy } from '@angular/core';
import {ProductosService} from '../servicios/productos.service';
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
import { UsuariosService } from '../servicios/usuarios.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {


  public cartProducts:Observable<any>;
  public productsPrueba:Observable<productoClass[]>;


  public isAutheticated = false;
  private userSubs:Subscription


  @ViewChildren('referButton', {read: ElementRef}) botonesWish: QueryList<ElementRef>
  @ViewChildren('referButtonCompra', {read: ElementRef}) botonesAddCart: QueryList<ElementRef>
  

  constructor(private prudS:ProductosService, private modalProducto: NgbModal, private userStatus: UsuariosService, private modalInicio: NgbModal, private spinner: NgxSpinnerService) { }
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

  ngOnInit() {
   scrollToTop();
   this.spinner.show();
   const f = this.prudS.getProductosPedidos().pipe(map(x => x));
   const g = f.pipe(map(x => Object.values(x)));
   this.cartProducts = g.pipe(map(x => x.map(x => x['json_build_object'])));
   



   
   

    



   this.userSubs = this.userStatus.isLoggedIn.subscribe(user =>{
     this.isAutheticated = !!user,
     console.log('Pedidos', this.isAutheticated)
   })


   if(this.isAutheticated){
    this.productsPrueba = this.prudS.getProductos_API_Destacados().pipe(map(x => x['rows']));
    this.spinner.hide();
   }else{
     console.log('No te encuentras loggeado');
    this.spinner.hide();
   }
   

  }


  ngOnDestroy(){
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
            this.addCartElement(x['target']['parentElement']['value'])
          )).subscribe(x => console.log('this is x ', x)));
     }, 4000)*/
  }


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
        this.prudS.postProducto_wishList(dato, usuarioIdentificador)
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
        this.prudS.postProducto_cartList(dato, usuarioIdentificador) 
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
