import { Component, OnInit, OnDestroy, AfterViewInit,ViewChild, ElementRef, ViewChildren, QueryList, } from '@angular/core';
/*import * as slick from 'slick-carousel';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import * as ezPlus from 'ez-plus';*/
import { ProductosService } from '../servicios/productos.service';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap'
import { ProductosModalComponent } from '../modals/productos-modal/productos-modal.component';
import { ModalCarritoComponent } from '../modals/modal-carrito/modal-carrito.component';
import { ModalInicioSesionComponent } from '../modals/modal-inicio-sesion/modal-inicio-sesion.component';
import { data } from 'jquery';
import  {scrollToTop} from '../modulosAnfibia/prueba';
import slideP from '../modulosAnfibia/sliderProductsConfig';
import {productoClass} from '../modelos/productos'
import {productoG} from '../modelos/productosGeneral'
import { Observable, Observer, Subscription, fromEvent, of, from, interval, concat, throwError} from 'rxjs';
import { concatMap, filter, map, shareReplay, switchMap, tap, delay, mergeMap, mapTo, merge, catchError, finalize, exhaustMap} from 'rxjs/operators';
import {addChanProperty} from '../modulosAnfibia/manipulacionImagenes';
import { NgxSpinnerService } from "ngx-spinner";
import { UsuariosService } from '../servicios/usuarios.service';



declare let $:any;


@Component({
  selector: 'app-individual-product',
  templateUrl: './individual-product.component.html',
  styleUrls: ['./individual-product.component.css']
})
export class IndividualProductComponent implements AfterViewInit, OnInit {

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

  

  constructor(private _productos:ProductosService, private route: ActivatedRoute, private modal: NgbModal,  private modalProducto: NgbModal, private router: Router, private spinner: NgxSpinnerService, private userStatus: UsuariosService, private modalInicio: NgbModal) { 
    
  }
  
  public listCart:Array<any> = [];
  public productosInteres:Array<any> = [];
  public productosPescaList:Array<any> = [];
  public productosCaceriaList:Array<any> = [];
  

  public productoIndividual:Observable<productoG>;
  public productsPrueba:Observable<productoG>;

  public mensajeError:HttpErrorResponse;
  public pId;
  public pClasificacion;
  public pdNombre;
  public subcategoriasPesca = {
    subcategoria1Name: '',
    subcategoria1Value: '',
    subcategoria2Name: '',
    subcategoria2Value: ''
  }

  public tipodeCanhas;
  public tipodeCarretes;
  public productosCarrito:Array<any> = [];
  

  public products_also_interested:Observable<productoG[]>;
  public products_related:Observable<productoG[]>;
  
  @ViewChildren('referButton', {read: ElementRef}) botonesWish: QueryList<ElementRef>;
  @ViewChildren('referButtonCompra', {read: ElementRef}) botonesAddCart: QueryList<ElementRef>;
  @ViewChild('prodQuantity') cantidadProd:ElementRef;


  public isAutheticated = false;
  private userSubs:Subscription;
  

  /*Abre una ventana modal pasandole la información obtenida desde el padre, que en este caso es este 
  componente*/
  public openModal(datos) {
    const modalRef = this.modal.open(ProductosModalComponent,
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


  /*Realiza la creación del Objeto carrito, el cual deberá guardar el idProducto, idCliente, fecha, etc, por definirse la info*/


 

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
  

  



 
   /*El Metodo ngOnInit solo se desplegara cuando el componente es desplegado por primera vez*/
  ngOnInit() {
   
    scrollToTop();
    this.spinner.show();
    console.log("Se cargo el ngOnInit de IndividualProductComponent, a ver cuantas veces se recarga. ");
    /*Carga la lista del Servicio, es una instancia de la clase ProductosServices*/
    //this.productosInteres = this._productos.getProductos();
    //addChanProperty(this.productosInteres);


   
    $('.product-card').css("visibility", "hidden");
    
     /*Funcion para cambio de imagenes en la vista de productos*/
      /*Existen dos metodos para poder hacer la carga de información dentro del componente, 
      el ActivatedRoute.snapshot.paramMap.get(elemento) que solo sucede cuando se carga una vez el elemento,
      y el paramMap.subscribe, que se usa cuando se estarán mandado diferentes elementos en la misma URL.

      this.route.snapshot.paramMap.get('id');
      this.pId = this.route.snapshot.paramMap.get('id');
      console.log(this.pId);
      */
      /*El segundo metodo que usaremos es el paramMap con el subscribe, el cual detecta cada caso en el que se realiza un cambio en la 
      url del mismo componente, se debe realizar una acción nueva, todo dentro del mismo metodo.*/

    

      /*errorHandler retorna el throwError, si no funcioan es por eso, verificar. */
      this.route.paramMap.pipe(switchMap(x => 
        this._productos.getProductos_Individual(x['params']['id']).pipe(
          catchError((error) => this.errorHandler(error)),
          map(x => x[0]))
        
        
        
      )).subscribe(x => { 
        
        this.productoIndividual = x;
        this.mensajeError = null;
        console.log('This is the value of x', x)
      });


   

      
     
  


  
      


     /*this.route.paramMap.subscribe(params => { 
        
        this.pId = parseInt(params.get('id'));
        console.log(this.pId);
        const pIndividual = this._productos.getProductos_Individual(this.pId).pipe(map(x => x[0])).subscribe(x => this.productoIndividual = x);
       */

        /*this.productoIndividual = this.productosInteres.filter((producto)=>{
          return producto.idProducto === this.pId;
        });
        this.productoIndividual = this.productoIndividual[0];
        console.log("Este es el objeto que llego", this.productoIndividual);

        /*En caso de que la categoría sea agua dulce*/
        /*if(this.productoIndividual.categoria == 'aguadulce'){
    
          if(this.productoIndividual.subcategoria1 == 'cañas'){
            console.log("Soy una caña", this.productoIndividual.subcategoria2);
            this.tipodeCanhas = this.productoIndividual.subcategoria2;
          
          }else if(this.productoIndividual.subcategoria1 == 'carretes'){
            console.log('Soy un sdasdasd we');
            this.tipodeCarretes = this.productoIndividual.subcategoria2;
         
          }else if(this.productoIndividual.subcategoria1 == 'combos'){
            console.log("Somos unos combos");
          }else if(this.productoIndividual.subcategoria1 =='señuelos'){
            console.log("Somos unos señuelos");
          }else if(this.productoIndividual.subcategoria1 == 'accesorios'){
            console.log("Somos unos accesorios");
          }

        /*En caso de la categoría sea Agua Salada*/
        /*}else if(this.productoIndividual.categoria == 'aguasalada'){
          if(this.productoIndividual.subcategoria1 == 'cañas'){
            console.log("Soy el producto individual cañas");
          }else if(this.productoIndividual.subcategoria1 == 'carretes'){
            console.log("Soy el producto individual carretes");
            this.tipodeCarretes = this.productoIndividual.subcategoria2;
          }
          
          
        }else if(this.productoIndividual.categoria == 'accesorios'){
          

        }else if(this.productoIndividual.categoria == 'navegacion'){

        }else if(this.productoIndividual.categoria == 'ropa'){

        }else if(this.productoIndividual.categoria == 'snorkel'){

        }else if(this.productoIndividual.categoria == 'buceo'){

        }else if(this.productoIndividual.categoria == 'kayaks'){

        }*/

        /*Tomamos el valor con el que se inicializo y lo asignamos a la función hoverZoom, cada que inice un nuevo componente 
        el valor asignado a la url inicial será el que obtiene del primer elemento.
        */
        /*this.hoverZoom(this.productoIndividual.image[0].url);*/
      /*});*/
  
      

        this.products_related = this._productos.getProductos_API_Destacados().pipe(map(x => x['rows']));
        this.products_also_interested = this._productos.getProductos_API_Nuevos().pipe(map(x => x['rows']));
      
      this.spinner.hide();  

     
      this.userSubs = this.userStatus.isLoggedIn.subscribe(user => {
        console.log(user)
        this.isAutheticated = !!user,
        console.log('This is the value of this.isAu', this.isAutheticated);
       
    })
  
  
    
     
      
  }     




  private errorHandler(error: HttpErrorResponse){
    console.log('This is the error', error);
    return throwError(this.mensajeError = error.error.message)

  }

  pruebaD(producto){
    this.router.navigate([`tienda/${producto.id}/${producto.nombre}`])
    scrollToTop();
    
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
          this.addCartElement(x['target']['value'])
        )).subscribe(x => console.log('this is x ', x)));
   }, 4000)


   setTimeout(() => {
     fromEvent(this.buttonBuy.nativeElement, 'click').pipe(exhaustMap(x => 
        this.buyNow(x['srcElement']['value'])
      )).subscribe(x => {
        const id = x[0]._id
        this.router.navigate([`compra/express/`, id]);
      })
   }, 4000)*/


  }



  


  /*Nuestras funciones de cambio de Imagen, obtenemos el atributo src, lo asignamos como cambio con el image-container2 que es el contenedor
  de la imagen y finalmente llamamos la función hover, la cual efectuará el zoom a la imagen seleccionada.
  */

  /*Realizamos las operaciones que son necesarias para la inserción del producto en la tabla de user_has_favorites*/
  public addWishList(dato, e){
    
    if(this.isAutheticated){
      console.log('Hey Im in addWishList, you are going to send', dato, e.target);
    const usuarioIdentificador = 1;
    dato.isLoading  = true;
    
      Observable.create(observer => {
        observer.next(e.target)
      }).pipe(exhaustMap(x => 
          this._productos.postProducto_wishList(dato, usuarioIdentificador)
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
    /*console.log('This is the dato', dato);
    console.log('This is the event', event);
    console.log('Thie is the value Cantidad', this.cantidadProd.nativeElement.value);
    dato.cantidad_prod = this.cantidadProd.nativeElement.value;
    console.log('This is the dato alterado', dato);
    console.log('This is the dato that I want to add to the cart', dato, event.target);*/
    const usuarioIdentificador = 1;
    dato.isLoadingCart = true;

  
      Observable.create(observer => {
        observer.next(event.target)
      }).pipe(exhaustMap(x => 
        this._productos.postProducto_cartList(dato, usuarioIdentificador) 
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




buyNow(dato, e){
  console.log('Presionste buy now')
 if(this.isAutheticated){
  console.log('This is the dato from buyNow', dato);
  //const usuarioIdentificador = 1;
  console.log('Thie is the value Cantidad', this.cantidadProd.nativeElement.value);
  dato.cantidad = this.cantidadProd.nativeElement.value;
  Observable.create(observer => {
    observer.next(e.target)
  }).pipe(exhaustMap(x => 
    this._productos.postProductoNow(dato)
  )).subscribe(x => {
    const id = x[0]._id;
    localStorage.setItem('purchaseP', 'true');
    this._productos.BehaviorsubjectRefresCarritoCompras.next(true);
    this.router.navigate([`compra/express/`, id]);

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



  public chamgeImage(dato){
    console.log('This is the clickeada imagen',dato);
    var imagenClickeada = dato;
    var imagenPrincipal = $("#image-container2").attr('src');
    console.log('This is the mainImage', imagenPrincipal);
    var c = $("#image-container2").attr('src', imagenClickeada);
    this.hoverZoom(imagenClickeada);
  }


  /*Nuestra función de zoom en las imagenes*/
  hoverZoom(dato){
    console.log('Llamamos la función hoverZoom');
    $("#image-container2").data("zoom-image", dato).ezPlus({
      zoomWindowFadeIn: 300,
      zoomWindowFadeOut: 300,
      lensFadeIn: 500,
      lensFadeOut: 500,
      scrollZoom: true,
      lensZoom: false,
      responsive:true  });  

      
  }

  scrollTop(){
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  }


 


      
  


  

 


}
