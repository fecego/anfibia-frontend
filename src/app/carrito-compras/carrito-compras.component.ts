import { Component, OnInit, OnDestroy ,AfterViewInit, ViewChildren, ElementRef, QueryList } from '@angular/core';
import {ProductosService} from '../servicios/productos.service';
import { productosCarrito } from '../store-online/productosCarrito';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { ProductosModalComponent } from '../modals/productos-modal/productos-modal.component';
import { ModalCarritoComponent } from '../modals/modal-carrito/modal-carrito.component';
import { ModalInicioSesionComponent } from '../modals/modal-inicio-sesion/modal-inicio-sesion.component';
import {productoClass} from '../modelos/productos';
import  {scrollToTop} from '../modulosAnfibia/prueba';
import slideP from '../modulosAnfibia/sliderProductsConfig';
import { Observable, Observer, Subscription, fromEvent, of, from, interval, concat, throwError, Subject, } from 'rxjs';
import { concatMap, filter, debounceTime, map, shareReplay, switchMap, tap, take, delay, mergeMap, mapTo, merge, catchError, finalize, exhaustMap, distinctUntilChanged} from 'rxjs/operators';
import {addChanProperty} from '../modulosAnfibia/manipulacionImagenes';
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from '@angular/router';
import { UsuariosService } from '../servicios/usuarios.service';



@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.css']
})
export class CarritoComprasComponent implements AfterViewInit, OnInit {

  constructor(private _listaCarrito:ProductosService, private _productos:ProductosService, private modalProducto: NgbModal, private spinner: NgxSpinnerService, private router: Router, private userStatus: UsuariosService, private modalInicio: NgbModal) { }

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
  public listaCarrito:Observable<productoClass[]>;
  public listaCarrito_existencia;
  public listaCarrito_no_existencia;  
  public gastosEnvio:number = 200;
  public productsPrueba:Observable<productoClass[]>;
  public totalCarrito;
  public idCarrito;
  public isAutheticated = false;
  private userSub:Subscription;
  public carritoInfo = new Subject;
  public mensajeError:any;
  @ViewChildren('referButton', {read: ElementRef}) botonesWish: QueryList<ElementRef>
  @ViewChildren('referButtonCompra', {read: ElementRef}) botonesAddCart: QueryList<ElementRef>

  ngOnInit() {
    //scrollToTop();
    
    
    /*const c = this._listaCarrito.getProductos_carrito(id).pipe(
      map(x => x['rows'],
      shareReplay()
     
      ));*/


      //Inicializamos el metodo que inicializará la propiedad con el valor definido en estaa.
      this._listaCarrito.behaviorS.subscribe(() =>{
        this.getProductosCarrito();
      });
 
     
      
 
      /*CARGAMOS LOS PRODUCTOS DEL METODO IR AL METODO*/


     

    

    /*this.listaCarrito_existencia = listaCarrito.pipe(map(x => x.filter(x => x.existencia > 0))); 
    this.listaCarrito_no_existencia = listaCarrito.pipe(map(x => x.filter(x => x.existencia == 0)));*/

    
      this.productsPrueba = this._listaCarrito.getProductos_API_Destacados().pipe(map(x => x['rows']));

   


    this.userSub = this.userStatus.isLoggedIn.subscribe(user => {
      this.isAutheticated = !!user;
      console.log(this.isAutheticated);
     


    })

    if(this.isAutheticated){
      const listaCarrito = this.getProductosCarrito();
    
    }else{
      console.log('No te encuentras loggeado');
    }



   


      
    /*addChanProperty(this.productsPrueba);*/

    /*console.log("Ejecuta el ngOnInit");
    
    this.productosInteres = this._productos.getProductos();
    




    this.listaCarrito = this._listaCarrito.getProductoCarrito();
    this.listaCarrito.forEach(producto => {
      
      producto.totalIndividual = this.sumaProductoIndividual(producto.precio, producto.cantidad);
      console.log("total individual", producto.totalIndividual);
      this.totalParcial = this.totalParcial + producto.totalIndividual;
      console.log("total parcial", this.totalParcial);
    });  
    this.total = this.totalParcial + this.gastosEnvio;*/
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


  ngOnDestroy(){
    this.userSub.unsubscribe();
    this.getProductosCarrito().unsubscribe();
    this.spinner.hide();
  }


  continue_purchase(e, v1, v2){
    if(this.isAutheticated){
      /*Vamos a cambiar el estado para poder entrar a proceso compra*/
      this._listaCarrito.BehaviorsubjectRefresCarritoCompras.next(true);
      localStorage.setItem('purchaseP', 'true');
      console.log()
      console.log(e, v1, v2);
      
      Observable.create(observer => {
        observer.next(e);
      }).pipe(exhaustMap(() => 
        this.postTotalCarrito(v1, v2)
      )).subscribe(x => {
       console.log(x)
      });
      this.router.navigate(['/compra']);

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



  postTotalCarrito(dato1, dato2){
    return this._listaCarrito.insertTotalCart(dato1, dato2)
  }


  getProductosCarrito(){
    this.spinner.show();
     /*const carrito = this._listaCarrito.getProductos_carrito(id).pipe(map(
      x => x['rows']),
      shareReplay()
      );*/


      
      //this.listaCarrito_existencia = carrito.filter(x => x.existencia > 0)
      //this.listaCarrito_no_existencia = x.filter(x => x.existencia == 0)
      /*this.listaCarrito_existencia = carrito.pipe(map(x => x.filter(x => x.existencia > 0)));
      this.listaCarrito_no_existencia = carrito.pipe(map(x => x.filter(x => x.existencia == 0)));
      
      return [this.listaCarrito_existencia, this.listaCarrito_no_existencia];*/
      return this._listaCarrito.getProductos_carrito().pipe(map(x => x.productos)).subscribe(x => {
        console.log('This is x ===========length=========producto======>', x.length, x);
        if(x.length > 0){
          
          this.listaCarrito_existencia = x[0].json_build_object.productos.filter(x => x.existencia > 0);
          this.listaCarrito_no_existencia = x[0].json_build_object.productos.filter(x => x.existencia == 0);
          this.totalCarrito = x[0].json_build_object.total;
          this.idCarrito = x[0].json_build_object.id;
          


          
          console.log('Me ejecuto en el x.length del arreglo mayor a 0', this.listaCarrito_existencia, this.totalCarrito, this.idCarrito);
          this.spinner.hide();
        }else{
          this.listaCarrito_existencia = x;
            console.log('Me ejecuto afuera del if practicament eel else', this.listaCarrito_existencia);
            this.spinner.hide();
        }
        
        
      })
      /*.pipe(map(x => x[0]))
      .subscribe(respuesta => {
        console.log('This is the respuesta i want from productos', respuesta); 
        if(respuesta.productos.length > 0){
          console.log('Es mayor a 0 si hay productos');
          this.totalCarrito = respuesta.total;
          this.idCarrito = respuesta.id;
          this.listaCarrito_existencia = respuesta.productos.filter(x => x.existencia > 0);
          this.listaCarrito_no_existencia = respuesta.productos.filter(x => x.existencia == 0);
          
        }else{
          console.log('Es de 0 no hay productos');
          this.listaCarrito_existencia = respuesta.productos
        }
        this.spinner.hide(); 
      });*/
      
      
      /*
      .pipe(map(x => x))
      .subscribe(x => {
        console.log('Me quede en el subscribe');
        console.log('===============================================>', x)
        this.totalCarrito = x.total,
        this.idCarrito = x.id
        this.listaCarrito_existencia = x.productos.filter(x => x.existencia > 0);
        this.listaCarrito_no_existencia = x.productos.filter(x => x.existencia == 0);
        this.spinner.hide();
      }, error => {
        console.log('============================================================')
        console.log("Heres is the error", error);
        this.mensajeError = error
        this.spinner.hide();
      });;*/





      /*const s = this.carritoInfo.pipe(map(x => x[0]['json_build_object']),
        shareReplay());

      const productsEN = s.pipe(map(x => x.productos)).subscribe(x => {
        this.listaCarrito_existencia = x.filter(x => x.existencia > 0);
        this.listaCarrito_no_existencia = x.filter(x => x.existencia == 0);

        console.log(this.listaCarrito_existencia);
        console.log(this.listaCarrito_no_existencia);
        this.spinner.hide();
      });


      const infoCartExist = s.subscribe(x => {
        this.idCarrito = x.id
        this.totalCarrito = x.total
        this.spinner.hide();
      })*/

     
      

      /*const f = d.pipe(map(x => x[0]['json_build_object']['productos'])).pipe(map(x => Object.values(x))).subscribe(x =>{
        if(x == null || x == undefined || typeof(x) == null || typeof(x) == undefined){
          x = []
        }else{
          this.listaCarrito_existencia = x.filter(x => x.existencia > 0),
          this.listaCarrito_no_existencia = x.filter(x => x.existencia == 0)
          console.log(this.listaCarrito_existencia);
          console.log(this.listaCarrito_no_existencia);
        }
      

      });

      const userInfo = d.pipe(map(x => x[0]['json_build_object'])).subscribe(x =>{
        this.idCarrito = x['id'];
        this.totalCarrito = x['total'];
        console.log(this.idCarrito, this.totalCarrito)
      });*/
     
    




    
      



      /*=================================ESTE ES EL BUENO============================================== */

      /*return this._listaCarrito.getProductos_carrito(id).pipe(
        shareReplay(),
        map(x => x[0]['json_build_object']
        )).subscribe(x => {
          this.listaCarrito_existencia = x['productos'].filter(x => x.existencia > 0);
          this.listaCarrito_no_existencia = x['productos'].filter(x => x.existencia == 0);
          this.totalCarrito = x.total
          this.idCarrito = x.id
          console.log(this.idCarrito);
        });*/

        /*=============================================================================================== */



        /*this.listaCarrito_existencia = cartPrueba.pipe(map(x => x['productos'].filter(x => x.existencia > 0)));
        this.listaCarrito_no_existencia = cartPrueba.pipe(map(x => x['productos'].filter(x => x.existencia == 0)));

        return this.listaCarrito_existencia, this.listaCarrito_no_existencia;*/

      /*.pipe(map(
      x => x['rows']),
      shareReplay()
      ).subscribe(x => {
        this.listaCarrito_existencia = x.filter(x => x.existencia > 0)
        this.listaCarrito_no_existencia = x.filter(x => x.existencia == 0)
        console.log(this.listaCarrito_existencia)
        console.log(this.listaCarrito_no_existencia)
      });*/
        
   
      





    
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

  /*addCartElement(dato){
    console.log('This is the dato that I want to add to the cart', dato);
    const usuarioIdentificador = 1;
    this._listaCarrito.postProducto_cartList(dato, usuarioIdentificador).subscribe(console.log);
    this.openModalCarrito(usuarioIdentificador);
  }*/
  



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


  /*Realizamos las operaciones que son necesarias para la inserción del producto en la tabla de user_has_favorites*/
  public addWishList(dato, e){
   
    if(this.isAutheticated){
      console.log('Hey Im in addWishList, you are going to send', dato, e.target);
      const usuarioIdentificador = 1;
      console.log('Este es el identificador del dato', dato);
      dato.isLoading = true;
     
        Observable.create(observer => {
          observer.next(e.target)
        }).pipe(exhaustMap(x => 
            this._listaCarrito.postProducto_wishList(dato, usuarioIdentificador)
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
          this._listaCarrito.postProducto_cartList(dato, usuarioIdentificador) 
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


  eliminarProducto(dato){
    dato.isDeleting = true
    if(this.isAutheticated){
      console.log('This is the producto you want to delete', dato);
     
        this._listaCarrito.removeElemento_carritoCompras(dato).pipe(
          tap(x => console.log(x), 
          take(1))
        ).subscribe(
          () => {
            console.log()
            dato.isDeleting = false
          },
          error =>{
            dato.isDeleting = false
            console.log('there is an error', error)
          });
     
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


  moveWishList(dato){
    if(this.isAutheticated){
      dato.isDeleting = true;
      console.log('this is the producto that Im going to delete from mi carrito y añadir al wishList', dato);
      
        this._listaCarrito.move_from_cart_to_wish(dato).pipe(
          tap(x => { console.log(x)}),
          take(1)
        ).subscribe(
          resultado => {
            console.log(resultado),
            dato.isLoading = false
          }, 
          error => {
            console.log(error)
            dato.isLoading = false
          }
        );
  
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


  cambios(e, dato){
    //console.log('This is the evento', e);
    Observable.create(observer => {
      observer.next(e)
    }).pipe(
      debounceTime(1500),
      distinctUntilChanged(),
      mergeMap((e) => 
      this.updatePricePer_quantity(e, dato)
    )).subscribe(x => console.log(x));

  }


  updatePricePer_quantity(valor, producto){
   
    //console.log('This is the valor', valor, producto);
    return this._listaCarrito.updatePrecioCarrito(valor, producto);
  }
  



  /*cambios(dato){
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
    
  }*/





  /*sumaProductoIndividual(individual, cantidad){
    this.totalIndividual = (individual * cantidad);
    return this.totalIndividual;
  }*/




}
