import { Component, OnInit, OnDestroy ,ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import { not } from '@angular/compiler/src/output/output_ast';
import { Event, Router} from '@angular/router'
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { ModalInicioSesionComponent } from '../modals/modal-inicio-sesion/modal-inicio-sesion.component';
import { Width } from 'ngx-owl-carousel-o/lib/services/carousel.service';
import { speed, type } from 'jquery';
import { ProductosService } from '../servicios/productos.service'
import { UsuariosService } from '../servicios/usuarios.service';
import { Observable, Observer, Subscription, fromEvent, of, from, interval, concat, throwError} from 'rxjs';
import { concatMap, filter, map, shareReplay, switchMap, tap, delay, mergeMap, mapTo, merge, catchError, finalize, exhaustMap, debounceTime, distinctUntilChanged, take} from 'rxjs/operators';
import { NgxSpinnerService } from "ngx-spinner";
import { WINDOW_PROVIDERS } from 'ngx-owl-carousel-o/lib/services/window-ref.service';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";


@Component({
  selector: 'app-menuheader',
  templateUrl: './menuheader.component.html',
  styleUrls: ['./menuheader.component.css']
})
export class MenuheaderComponent implements AfterViewInit, OnInit {

  constructor(private auth: SocialAuthService, private router: Router, private route: ActivatedRoute, private modalInicio: NgbModal, private _productoS: ProductosService, private spinner: NgxSpinnerService, private userStatus: UsuariosService ) { }
  public pescaNombre:string = 'pesca';
  public caceriaNombre:string = 'caceria';
  public pescaValor:boolean = false;
  public caceriaValor:boolean = false;
  public otherSections:boolean = false;
  public pescaBandra:boolean = false;
  public caceriaBandera:boolean = false;
  public othersBandera:boolean = false;
  public busquedaT:boolean = false;
  public allProducts:any;
  public filtroProductos = '';
  public isAutheticated = false;
  private userSubs:Subscription;
  public productoWishPreview;
  public productosCarritoView;
  public mensajeError:string;
  public mensajeErrorCarritoE:string;
  public searchLoading:boolean;
  public errorCodeExist:boolean;

  public isLoadingWishProducts:boolean;
  public isLoadingCartProducts:boolean;
  public totalCompra;



  public usuarioPruebaR;

  @ViewChild('buscadorProductos') inputBuscador: ElementRef;
  @ViewChild('buscadorProductosResponsive') inputBuscadorResponsive: ElementRef;

  public pesca = {
    nombre: 'muestra pesca',
    categoria: 'zapatos pesca'
  }

  public caceria = {
    nombre: 'muestra caceria', 
    categoria: 'zapatos caceria'
  }




  ngOnInit() {


   
    
  //this.allProducts = this._productoS.getProductos();
    /*this.userStatus.subjectInfoClient.subscribe(x => {
      this.userStatus.getInfoBasicClient().subscribe(x => {
        console.log('This is the userInfo', x);
        this.usuarioPruebaR = x;
        /*Obtener los 3 primeros valores del nombre del usuario, solo mayusculas*/
  
  
     /*   console.log(this.usuarioPruebaR);
      }, error => {
        console.log('Here is the error', error)
      })
    });*/


    
  //This is going to be the execution of the behaviorSubject for cartProducts.
  /*this._productoS.subjectRefreshCartList.subscribe(x => {
    console.log('Gets executed everytime you add a product to cartList');
    this._productoS.getProductos_carrito().pipe(
      take(1)
      ).subscribe(x => {
      console.log('This is the response from the server', x);
      this.productosCarritoView = x.productos;
      console.log(this.productosCarritoView);
      this.mensajeError = null;
    }, error => {
      console.log('Got the error when got ', error);
      this.mensajeErrorCarritoE = 'supp this is the error that i need'

    });
  }, error => {
    console.log(error);
  });*/

  this._productoS.subjectRefreshCartList.subscribe(x => {
    console.log('=====================> !!!!!!!!This is what brings x in cart', x)
    if(x != null){
      this._productoS.getProductos_carrito2().subscribe(respuesta => {
        console.log('This is the respuesta from the subject', respuesta);
        if(respuesta.productos.length > 0){
          this.productosCarritoView = respuesta.productos[0].json_build_object.productos.filter(x => x.existencia > 0);
          this.totalCompra = respuesta.productos[0].json_build_object.total
        }else{
          this.productosCarritoView = [];
        }

        /*console.log('Again this is the respuesta i need', respuesta[0].productos)
        if(respuesta[0].productos.length > 0){
          this.productosCarritoView = respuesta[0].productos.filter(respuesta => respuesta.existencia > 0);
        }else{
          this.productosCarritoView = respuesta[0].productos;
        }*/
        
      })
      
    }else{
      console.log('No re encuentras loggeado');
      return;
    }
  });


  


  /*this._productoS.subjectRefreshCartList.subscribe(
    x => {
     
      this._productoS.getProductos_carrito2().subscribe(respuesta => {
        console.log('This is the respuesta from the subject', respuesta);
        if(respuesta.productos.length > 0){
          this.productosCarritoView = respuesta.productos[0].json_build_object.productos.filter(x => x.existencia > 0);
          this.totalCompra = respuesta.productos[0].json_build_object.total
        }else{
          this.productosCarritoView = [];
        }

        /*console.log('Again this is the respuesta i need', respuesta[0].productos)
        if(respuesta[0].productos.length > 0){
          this.productosCarritoView = respuesta[0].productos.filter(respuesta => respuesta.existencia > 0);
        }else{
          this.productosCarritoView = respuesta[0].productos;
        }*/
        
     // })
    //})



  //This is the behaviorSubject for Wish productos

  this._productoS.subjectRefreshWish.subscribe(x => {
    if(x != null){
      this._productoS.subjectRefreshWish.subscribe(x => {
        console.log('Gets executed every time you add a product to wishList');
        this._productoS.getProductosLista_deseos(1).pipe(
    
          take(1), 
          map(x => Object.values(x))).subscribe(x => {
              this.productoWishPreview  = x.filter(x => x.existencia > 0);
              
          console.log(this.productoWishPreview);
        }, error => {
          this.mensajeError  = error.error.message
          console.log(this.mensajeError)
        })
    
      })

    }else{
      console.log('No te encuentras loggeado');
      return;
    }
  });
  /*this._productoS.subjectRefreshWish.subscribe(x => {
    console.log('Gets executed every time you add a product to wishList');
    this._productoS.getProductosLista_deseos(1).pipe(

      take(1), 
      map(x => Object.values(x))).subscribe(x => {
          this.productoWishPreview  = x.filter(x => x.existencia > 0);
          
      console.log(this.productoWishPreview);
    }, error => {
      this.mensajeError  = error.error.message
      console.log(this.mensajeError)
    })

  })*/
  
  

  this.isAutheticated = false;
  this.userSubs = this.userStatus.isLoggedIn.subscribe(user => {
      this.isAutheticated = !!user
      console.log('Este es el estado de this is autheticated', this.isAutheticated);
      //this.menuExecution(this.isAutheticated)
      //console.log('Esta auth?', this.isAutheticated);
      //console.log('Me ejecuto para obtener un valor del loggeo, cuando si y cuadno no');
      //this.menuExecution();

      //=====================================================================================
      if(this.isAutheticated){
        this._productoS.getProductosLista_deseos(1).pipe(
          take(1), 
          map(x => Object.values(x))).subscribe(x => {
            console.log('Me e ejecuto cuando esta autenticado el usuari Lista DE DESEOS ===================================>')
              this.productoWishPreview  = x.filter(x => x.existencia > 0);
              
          console.log(this.productoWishPreview);
        }, error => {
          this.mensajeError  = error.error.message
          console.log('Este es el mensaje de error de la wishList', this.mensajeError);
          
        });


        this.userStatus.getInfoBasicClient().subscribe(x => {
          console.log('Me e ejecuto cuando esta autenticado el usuario  GET INFO CLIENT===================================>')
          this.usuarioPruebaR = x;
          /*Obtener los 3 primeros valores del nombre del usuario, solo mayusculas*/
         console.log(this.usuarioPruebaR);
        }, error => {
          console.log('Este es el mensaje de error en el infoClient', error)
        });


        this._productoS.getProductos_carrito2().pipe(
          take(1)
          ).subscribe(x => {
            console.log('this is x from carrito', x.productos);
            if(x.productos.length > 0){
              this.productosCarritoView = x.productos.map(x => x.json_build_object);
              this.productosCarritoView = this.productosCarritoView[0].productos.filter(x => x.existencia > 0);
              //this.totalCompra = x.productos[0].json_build_object.total
            }else{
              this.productosCarritoView = x.productos
            }
            /*console.log('Me e ejecuto cuando esta autenticado el usuario  CARRITO DE COMPRAS===================================>')
          this.productosCarritoView = x.productos;
          console.log(this.productosCarritoView);*/
          //this.mensajeError = null;
        }, error => {
          console.log('this is the error from carrito',error);
          //console.log('Este es el mensaje de error en el carrito de compras', this.mensajeError);
        });


        //=====================================================================================


        

      }else{
        console.log('No te encuentas loggeado, hdp, loggeate');
      }
     
  });



  if(this.isAutheticated){
    console.log('Me e ejecuto cuando esta autenticado el usuario ===================================>')
    /*=================================================================================================*/
    
    //this.menuExecution();



    /*=================================================================================================*/
    /*this._productoS.getProductosLista_deseos(1).pipe(

      take(1), 
      map(x => Object.values(x))).subscribe(x => {
        console.log('Me e ejecuto cuando esta autenticado el usuari Lista DE DESEOS ===================================>')
          this.productoWishPreview  = x.filter(x => x.existencia > 0);
          
      console.log(this.productoWishPreview);
    }, error => {
      this.mensajeError  = error.error.message
      console.log('Este es el mensaje de error de la wishList', this.mensajeError);
      
    })*/

    /*this._productoS.getProductos_carrito().pipe(
      take(1)
      ).subscribe(x => {
        console.log('Me e ejecuto cuando esta autenticado el usuario  CARRITO DE COMPRAS===================================>')
      this.productosCarritoView = x.productos;
      console.log(this.productosCarritoView);
      //this.mensajeError = null;
    }, error => {
      console.log(error);
      //console.log('Este es el mensaje de error en el carrito de compras', this.mensajeError);
    });*/

    console.log('Me voy a ejecutar en el menu');

    /*this.userStatus.getInfoBasicClient().subscribe(x => {
      console.log('Me e ejecuto cuando esta autenticado el usuario  GET INFO CLIENT===================================>')
      this.usuarioPruebaR = x;
      /*Obtener los 3 primeros valores del nombre del usuario, solo mayusculas*/


    /*  console.log(this.usuarioPruebaR);
    }, error => {
      console.log('Este es el mensaje de error en el infoClient', error)
    });*/

  }else{
    console.log('No te encuentras loggeado')
  }


  /*=================================================================================================*/
  console.log('Me voy a ejectar index.js')

const menuWish = document.getElementById("menu-wish");
const menuCart = document.getElementById("menu-cart");
const menuPesca = document.getElementById("menu-pesca");
const menuCaceria = document.getElementById("menu-caceria");
const menuProfile = document.getElementById("menu-profile");
const menuSearch = document.getElementById("menu-search");
const menuMoreSections = document.getElementById("menu-secciones");
const menuLocated = document.getElementById("menu-located");


/*======================================================================*/

const wishDivContainerE = document.getElementById("wishDivContainer");
const carritoDivContainerE = document.getElementById("carritoDivContainer");
const pescaDivContainerE = document.getElementById("pescaDivContainer");
const perfilDivContainerE = document.getElementById("perfilDivContainer");
const caceriaDivContainerE = document.getElementById("caceriaDivContainer");
const searchDivContainerE = document.getElementById("searchDivContainer");
const moreSectionsDivContainerE = document.getElementById("moreSectionsDivContainer");
const searchInput = document.getElementById("search");

const buttonExpandResponsive = document.getElementById("menuR-bars");
const containerResponsiveMenuE = document.getElementById("containerResponsiveMenu");


const expandPesca = document.getElementById("expandSeccionPesca");
const expandCaceria = document.getElementById("expandSeccionCaceria")


const seccionesPesca = document.getElementById("containerPescaSecciones");
const seccionesCaceria = document.getElementById("containerCaceriaSecciones");
const seccionVolver = document.getElementById("backArrow");
const seccionCaceriaVolver = document.getElementById("backArrowCaceria");
const close = document.getElementById("closeMenu");



const closeMenuSearch = document.getElementById("closeMenuSearchResponsive");




const searchResponsiveP = document.getElementById("responsiveSearch");
const menuSearchResponsive = document.getElementById("menu-searchRes");



/*======================================================================================*/


console.log('This is the windows width and height', window.innerWidth, window.innerHeight);
if(window.innerWidth >= 1280){
  console.log('El dispositivo de la ventana es mayor o igual a 1200px, puede usar mouseover');
  menuWish.addEventListener('mouseover', () => {
    console.log('Me ejecute el wishList');
    wishDivContainerE.style.height = "500px";
    wishDivContainerE.style.background = "#fff";
    carritoDivContainerE.style.height = "0px";
    perfilDivContainerE.style.height = "0px";
    moreSectionsDivContainerE.style.height = "0px";
    pescaDivContainerE.style.height = "0px";
    caceriaDivContainerE.style.height = "0px";
    searchDivContainerE.style.height = "0px";
    searchInput.style.width = "0px";
   
   
    /*carritoDivContainerE.setAttribute("class", "democlassLeave");
    perfilDivContainerE.setAttribute("class", "democlassLeave");*/
    //pescaDivContainerE.setAttribute("class", "democlassLeave");
    
    //moreSectionsDivContainerE.setAttribute("class", "democlassLeave");
  });

  wishDivContainerE.addEventListener('mouseleave', () =>{
    wishDivContainerE.style.height = "0px";
    perfilDivContainerE.style.height = "0px";
    carritoDivContainerE.style.height = "0px";
    moreSectionsDivContainerE.style.height = "0px";
    pescaDivContainerE.style.height = "0px";
    caceriaDivContainerE.style.height = "0px"
    searchDivContainerE.style.height = "0px";
  });
  
  
  
  menuCart.addEventListener('mouseover', () => {
    //console.log('Supp soy el carrito');
    carritoDivContainerE.style.height = "500px";
    carritoDivContainerE.style.background = "#fff";
    wishDivContainerE.style.height = "0px";
    perfilDivContainerE.style.height = "0px";
    moreSectionsDivContainerE.style.height = "0px";
    pescaDivContainerE.style.height = "0px";
    searchDivContainerE.style.height = "0px";
   
  
  });
  
  
  carritoDivContainerE.addEventListener('mouseleave', () =>{
    wishDivContainerE.style.height = "0px";
    carritoDivContainerE.style.height = "0px";
    perfilDivContainerE.style.height = "0px";
    moreSectionsDivContainerE.style.height = "0px";
    pescaDivContainerE.style.height = "0px";
    caceriaDivContainerE.style.height = "0px";
    searchDivContainerE.style.height = "0px";
  });
  
  
  
  menuProfile.addEventListener('mouseover', () => {
    perfilDivContainerE.style.height = "450px";
    wishDivContainerE.style.height = "0px";
    carritoDivContainerE.style.height = "0px";
    moreSectionsDivContainerE.style.height = "0px";
    pescaDivContainerE.style.height = "0px";
    searchDivContainerE.style.height = "0px";
   
  
  });
  
  perfilDivContainerE.addEventListener('mouseleave', () => {
    wishDivContainerE.style.height = "0px";
    perfilDivContainerE.style.height = "0px";
    carritoDivContainerE.style.height = "0px";
    moreSectionsDivContainerE.style.height = "0px";
    pescaDivContainerE.style.height = "0px";
    caceriaDivContainerE.style.height = "0px"
    searchDivContainerE.style.height = "0px";
  
  });
  
  
  menuPesca.addEventListener('mouseover', () => {
  
    console.log('Me voy a ejecutar pesca');
    pescaDivContainerE.style.height = "500px";
    menuCaceria.style.color = "#424242"
    menuMoreSections.style.color = "#424242"
    wishDivContainerE.style.height = "0px";
    carritoDivContainerE.style.height = "0px";
    moreSectionsDivContainerE.style.height = "0px";
    caceriaDivContainerE.style.height = "0px"
    searchDivContainerE.style.height = "0px";
    //moreSectionsDivContainerE.setAttribute("class", "democlassLeave");
  
  });
  
  
  pescaDivContainerE.addEventListener('mouseleave', () => {
    menuCaceria.style.color = "#000";	
    menuMoreSections.style.color = "#000"
    menuPesca.style.color = "#000";
  
    wishDivContainerE.style.height = "0px";
    perfilDivContainerE.style.height = "0px";
    carritoDivContainerE.style.height = "0px";
    moreSectionsDivContainerE.style.height = "0px";
    pescaDivContainerE.style.height = "0px";
    caceriaDivContainerE.style.height = "0px"
    searchDivContainerE.style.height = "0px";
  });
  
  
  menuCaceria.addEventListener('mouseover', () => {
    console.log('Me voya ejecutar cacería');
    caceriaDivContainerE.style.height = "500px";
    menuPesca.style.color = "#424242";
    menuMoreSections.style.color = "#424242"
    perfilDivContainerE.style.height = "0px";
    wishDivContainerE.style.height = "0px";
    carritoDivContainerE.style.height = "0px";
    moreSectionsDivContainerE.style.height = "0px";
    pescaDivContainerE.style.height = "0px"
    searchDivContainerE.style.height = "0px";
  
  });
  
  
  caceriaDivContainerE.addEventListener('mouseleave', () => {
    menuMoreSections.style.color = "#000"
    menuCaceria.style.color = "#000";
    menuPesca.style.color = "#000";
    perfilDivContainerE.style.height = "0px";
    wishDivContainerE.style.height = "0px";
    carritoDivContainerE.style.height = "0px";
    moreSectionsDivContainerE.style.height = "0px";
    pescaDivContainerE.style.height = "0px";
    caceriaDivContainerE.style.height = "0px";
    searchDivContainerE.style.height = "0px";
  });


  
  
  
  menuSearch.addEventListener("mouseover", () => {
    searchDivContainerE.style.height = "600px";
    searchInput.style.width = "90%";
    perfilDivContainerE.style.height = "0px";
    wishDivContainerE.style.height = "0px";
    carritoDivContainerE.style.height = "0px";
    moreSectionsDivContainerE.style.height = "0px";
    perfilDivContainerE.style.height = "0px";
    pescaDivContainerE.style.height = "0px";
  
  
  });
  
  
  
  searchDivContainerE.addEventListener("mouseleave", () => {
    perfilDivContainerE.style.height = "0px";
    wishDivContainerE.style.height = "0px";
    carritoDivContainerE.style.height = "0px";
    moreSectionsDivContainerE.style.height = "0px";
    perfilDivContainerE.style.height = "0px";
    pescaDivContainerE.style.height = "0px";
    searchDivContainerE.style.height = "0px";
  });
  
  menuMoreSections.addEventListener("mouseover", () => {
    console.log('Me voy a ejecutar más secciones');
    moreSectionsDivContainerE.style.height = "500px";
    
    menuCaceria.style.color = "#424242";
    menuPesca.style.color = "#424242"
    perfilDivContainerE.style.height = "0px";
    wishDivContainerE.style.height = "0px";
    carritoDivContainerE.style.height = "0px";
    pescaDivContainerE.style.height = "0px";
    caceriaDivContainerE.style.height = "0px";
    searchDivContainerE.style.height = "0px";
  
  });
  
  
  
  moreSectionsDivContainerE.addEventListener("mouseleave", () => {
    menuMoreSections.style.color = "#000"
    menuCaceria.style.color = "#000";
    menuPesca.style.color = "#000";
    perfilDivContainerE.style.height = "0px"
    moreSectionsDivContainerE.style.height = "0px";
    wishDivContainerE.style.height = "0px";
    carritoDivContainerE.style.height = "0px";
    pescaDivContainerE.style.height = "0px";
    caceriaDivContainerE.style.height = "0px";
    searchDivContainerE.style.height = "0px";
  });
  
  buttonExpandResponsive.addEventListener("click", () => {
    console.log('Me presionaste');
    containerResponsiveMenuE.style.width = "100%";
    searchResponsiveP.style.width = "0px";
    close.style.position = "fixed";
    closeMenuSearch.style.position = "absolute";
  
  });
  
  
  expandPesca.addEventListener("click", () => {
    seccionesPesca.style.width = "100%";
    expandPesca.style.border = "none";
  
  });
  
  
  seccionVolver.addEventListener("click", () => {
    seccionesPesca.style.width = "0px";
    containerResponsiveMenuE.style.width = "100%";
  });
  
  
  
  seccionCaceriaVolver.addEventListener("click", () => {
    seccionesCaceria.style.width = "0px";
    containerResponsiveMenuE.style.width = "100%";
  })
  
  expandCaceria.addEventListener("click", () =>{
    seccionesCaceria.style.width = "100%";
  });
  
  
  close.addEventListener("click", () => {
    containerResponsiveMenuE.style.width = "0px";
    seccionesPesca.style.width = "0px";
    seccionesCaceria.style.width = "0px";
    close.style.position = "absolute";
    
  })
  
  
  menuSearchResponsive.addEventListener("click", () => {
    console.log('Supp bitches soy el que expande searchResponsive');
    searchResponsiveP.style.width = "100%";
    containerResponsiveMenuE.style.width = "0px";
    closeMenuSearch.style.position = "fixed";
    close.style.position = "absolute";
  });
  
  
  closeMenuSearch.addEventListener("click", () => {
    console.log('Me presionaste');
    searchResponsiveP.style.width = "0px";
    closeMenuSearch.style.position = "absolute";
    
  });
  
  


}else if(window.innerWidth >= 641  && window.innerWidth <= 1279){  
  /*Aqui chambeo ahorita El menú deberá cambiar de acuerdo al tamaño del dispositio, dado que los dispositivos mobiles no manejan el mouseover o cualquier efecto de hover*/
  console.log('El dispositivo es menor a 1200 por lo cuale es responsivo, debes añadir los metodos de click y no mouseover aquí');
  menuPesca.addEventListener('click', () => {
  
    console.log('Me voy a ejecutar pesca', pescaDivContainerE.clientHeight);

    /*Menu pesca*/
    if(pescaDivContainerE.clientHeight == 0){
      pescaDivContainerE.style.height = "550px";
      menuCaceria.style.color = "#424242"
      menuMoreSections.style.color = "#424242"
      wishDivContainerE.style.height = "0px";
      carritoDivContainerE.style.height = "0px";
      moreSectionsDivContainerE.style.height = "0px";
      caceriaDivContainerE.style.height = "0px"
      searchDivContainerE.style.height = "0px";
    }else{
      pescaDivContainerE.style.height = "0px";
      menuCaceria.style.color = "#424242"
      menuMoreSections.style.color = "#424242"
      wishDivContainerE.style.height = "0px";
      carritoDivContainerE.style.height = "0px";
      moreSectionsDivContainerE.style.height = "0px";
      caceriaDivContainerE.style.height = "0px"
      searchDivContainerE.style.height = "0px";
    }
  });

  

  /*Menú cacería*/
  menuCaceria.addEventListener('click', () => {
    if(caceriaDivContainerE.clientHeight == 0){
      console.log('Me voya ejecutar cacería');
      caceriaDivContainerE.style.height = "550px";
      menuPesca.style.color = "#424242";
      menuMoreSections.style.color = "#424242"
      perfilDivContainerE.style.height = "0px";
      wishDivContainerE.style.height = "0px";
      carritoDivContainerE.style.height = "0px";
      moreSectionsDivContainerE.style.height = "0px";
      pescaDivContainerE.style.height = "0px"
      searchDivContainerE.style.height = "0px";
    }else{
      console.log('Me voya ejecutar cacería');
      caceriaDivContainerE.style.height = "0px";
      menuPesca.style.color = "#424242";
      menuMoreSections.style.color = "#424242"
      perfilDivContainerE.style.height = "0px";
      wishDivContainerE.style.height = "0px";
      carritoDivContainerE.style.height = "0px";
      moreSectionsDivContainerE.style.height = "0px";
      pescaDivContainerE.style.height = "0px"
      searchDivContainerE.style.height = "0px";

    }
  
  });


  /*Más secciones*/
  menuMoreSections.addEventListener("click", () => {
    console.log('Me voy a ejecutar más secciones');
    if(moreSectionsDivContainerE.clientHeight == 0){
      moreSectionsDivContainerE.style.height = "550px";
      menuCaceria.style.color = "#424242";
      menuPesca.style.color = "#424242"
      perfilDivContainerE.style.height = "0px";
      wishDivContainerE.style.height = "0px";
      carritoDivContainerE.style.height = "0px";
      pescaDivContainerE.style.height = "0px";
      caceriaDivContainerE.style.height = "0px";
      searchDivContainerE.style.height = "0px";
    }else{
      moreSectionsDivContainerE.style.height = "0";
      menuCaceria.style.color = "#424242";
      menuPesca.style.color = "#424242"
      perfilDivContainerE.style.height = "0px";
      wishDivContainerE.style.height = "0px";
      carritoDivContainerE.style.height = "0px";
      pescaDivContainerE.style.height = "0px";
      caceriaDivContainerE.style.height = "0px";
      searchDivContainerE.style.height = "0px";

    }
  
  });


  /*Menu de busqueda*/

  menuSearch.addEventListener("click", () => {
    if(searchDivContainerE.clientHeight == 0){
      searchDivContainerE.style.height = "600px";
      searchInput.style.width = "90%";
      perfilDivContainerE.style.height = "0px";
      wishDivContainerE.style.height = "0px";
      carritoDivContainerE.style.height = "0px";
      moreSectionsDivContainerE.style.height = "0px";
      perfilDivContainerE.style.height = "0px";
      pescaDivContainerE.style.height = "0px";
    }else{
      searchDivContainerE.style.height = "0px";
      searchInput.style.width = "90%";
      perfilDivContainerE.style.height = "0px";
      wishDivContainerE.style.height = "0px";
      carritoDivContainerE.style.height = "0px";
      moreSectionsDivContainerE.style.height = "0px";
      perfilDivContainerE.style.height = "0px";
      pescaDivContainerE.style.height = "0px";
    }
  
  
  });
  



}else{

  buttonExpandResponsive.addEventListener("click", () => {
   if(containerResponsiveMenuE.clientWidth == 0){
    console.log('Me presionaste');
    containerResponsiveMenuE.style.width = "100%";
    searchResponsiveP.style.width = "0px";
    close.style.position = "fixed";
    closeMenuSearch.style.position = "absolute";
   }else{
    console.log('Me presionaste');
    containerResponsiveMenuE.style.width = "0%";
    searchResponsiveP.style.width = "0px";
    close.style.position = "absolute";
    closeMenuSearch.style.position = "absolute";

   }
  
  });

  seccionVolver.addEventListener("click", () => {
    seccionesPesca.style.width = "0px";
    containerResponsiveMenuE.style.width = "100%";
  });
  
  
  
  seccionCaceriaVolver.addEventListener("click", () => {
    seccionesCaceria.style.width = "0px";
    containerResponsiveMenuE.style.width = "100%";
  });

  close.addEventListener("click", () => {
    containerResponsiveMenuE.style.width = "0px";
    seccionesPesca.style.width = "0px";
    seccionesCaceria.style.width = "0px";
    close.style.position = "absolute";
    
  })
  
  
  menuSearchResponsive.addEventListener("click", () => {
    if(searchResponsiveP.clientWidth == 0){
      console.log('Supp bitches soy el que expande searchResponsive');
      searchResponsiveP.style.width = "100%";
      containerResponsiveMenuE.style.width = "0px";
      closeMenuSearch.style.position = "fixed";
      close.style.position = "absolute";
    }else{
      console.log('Supp bitches soy el que expande searchResponsive');
      searchResponsiveP.style.width = "0%";
      containerResponsiveMenuE.style.width = "0px";
      closeMenuSearch.style.position = "absolute";
      close.style.position = "absolute";
    }
  });
  
  
  closeMenuSearch.addEventListener("click", () => {
    console.log('Me presionaste');
    searchResponsiveP.style.width = "0px";
    closeMenuSearch.style.position = "absolute";
    
  });

  expandPesca.addEventListener("click", () => {
    seccionesPesca.style.width = "100%";
    expandPesca.style.border = "none";
  
  });
  
  
  seccionVolver.addEventListener("click", () => {
    seccionesPesca.style.width = "0px";
    containerResponsiveMenuE.style.width = "100%";
  });
  
  
  
  seccionCaceriaVolver.addEventListener("click", () => {
    seccionesCaceria.style.width = "0px";
    containerResponsiveMenuE.style.width = "100%";
  });

  expandCaceria.addEventListener("click", () =>{
    seccionesCaceria.style.width = "100%";
  });



}







  /*==================================================================================================*/

    
    
  

  
   


   

  }

  /*menuExecution(dato){
    if(dato){
      this._productoS.subjectRefreshPrueba.subscribe(x => {
        console.log('Me voy a ejecutar cada que tenga un nuevo valor deseos', x);
        this._productoS.getProductosLista_deseos(1).pipe(
          map(x => Object.values(x))).subscribe(x => {
              this.productoWishPreview  = x.filter(x => x.existencia > 0);
              
          console.log('Estos son los nuevos valores de la lista de productos PREVIOS',this.productoWishPreview);
        }, error => {
          this.mensajeError  = error.error.message
          
        });
    
        this._productoS.getProductos_carrito().subscribe(x => {
          console.log('Me voy a ejecutar cada que tenga un nuevo valor carrito', x)
          
          this.productosCarritoView = x.productos;
          this.mensajeError = null;
          console.log('Est es el productosCarritoView', this.productosCarritoView);
        }, error => {
          console.log(error);
          this.mensajeError = error.error.message;
    
        });  
    
        this.userStatus.getInfoBasicClient().subscribe(x => {
          console.log('This is the userInfo', x);
          this.usuarioPruebaR = x;
          /*Obtener los 3 primeros valores del nombre del usuario, solo mayusculas*/
          /*console.log(this.usuarioPruebaR);
        }, error => {
          console.log('Here is the error', error)
        });
    
      })
    }

  }*/
  goToCart(){
    this.router.navigateByUrl("/carrito");
  }


  pescaRouting(){
    this.router.navigateByUrl("/anfibia-pesca");
  }

  caceriaRouting(){
    this.router.navigateByUrl("/anfibia-caceria");
  }


  deseosRouting(){
    this.router.navigateByUrl("/lista-deseos");
  }

  carritoRouting(){
    this.router.navigateByUrl("/carrito");

  }

  ubicacionRouting(){
    this.router.navigateByUrl("/ubicaciones")
  }


  perfilRouting(){
    if(this.isAutheticated == true){
      this.router.navigateByUrl("/perfil");
    }else{
      this.router.navigateByUrl("/login");
    }
  }


  ngAfterViewInit(){

    fromEvent(this.inputBuscador.nativeElement, 'keyup').pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((e:any) => this.getElementsBySearch(e.target.value).pipe(map(resp => Object.values(resp).map(x => x['json_build_object'])))),
      ).subscribe(x => {
        
          this.allProducts = x;
          this.searchLoading = false;
          if(x[0].errorCode){
            this.errorCodeExist = true;
          }else{
            this.errorCodeExist = false;
          }
        
        //this.spinner.hide();
        //this.spinner.hide();
      }, error => {
        console.log(error);
        //this.spinner.hide();
        this.searchLoading = false;
      });


      fromEvent(this.inputBuscadorResponsive.nativeElement, 'keyup').pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap((e:any) => this.getElementsBySearch(e.target.value).pipe(map(resp => Object.values(resp).map(x => x['json_build_object'])))),
        ).subscribe(x => {
          
            this.allProducts = x;
            this.searchLoading = false;
            if(x[0].errorCode){
              this.errorCodeExist = true;
            }else{
              this.errorCodeExist = false;
            }
          
          //this.spinner.hide();
          //this.spinner.hide();
        }, error => {
          console.log(error);
          //this.spinner.hide();
          this.searchLoading = false;
        });
   

    /*setTimeout(() => {
      const keyEvent = fromEvent(this.inputBuscador.nativeElement, 'keyup').pipe(map(
        event => (<HTMLInputElement>(<Event>event).i0o).value),
        debounceTime(400), 
        distinctUntilChanged(),
         switchMap(x => this.getElementsBySearch(x).pipe(map(x => Object.values(x).map(x => x['json_build_object']))))
        
        ).subscribe(x => {this.allProducts = x,
                  console.log(x);
                  this.spinner.hide()
        })





    }, 5000)*/
  }
 

 ngOnDestroy(){
   this.userSubs.unsubscribe();
 }


 addCartElement(dato, event){
  if(this.isAutheticated){
   console.log('This is the dato that I want to add to the cart', dato, event.target);
   const usuarioIdentificador = 1;
   dato.isLoadingCart = true;
  
     Observable.create(observer => {
       observer.next(event.target)
     }).pipe(exhaustMap(x => 
       this._productoS.postProducto_cartList(dato, usuarioIdentificador) 
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




 


  


  goPesca(){
    this.router.navigate(['/anfibia-pesca']);
    this.pescaValor = false;
    var anchoDiv = $("#divRojo").css('width');
    if(parseInt(anchoDiv) > 0){
      $('#divRojo').animate({"width": "0%"}, "fast");
    }
  
 
  }

  goCaceria(){
    this.router.navigate(['/anfibia-caceria'])
    this.caceriaValor = false;
    var anchoDiv = $("#divAzul").css('width');
    if(parseInt(anchoDiv) > 0){
      $('#divAzul').animate({"width": "0%"}, "fast");
    }

  }

  previewProduct(dato){
    console.log('Presionaste esta wea');
    this.router.navigate(['/tienda', dato.id_producto, dato.nombre_producto]);
  }



  /*Retorna un observable que usaremos para sejecutar el otro observable*/
  getElementsBySearch(dato){
    //this.spinner.show();
    this.searchLoading = true;
    //this.spinner.show();
    return this._productoS.getProductosBySearch(dato).pipe(catchError(error => 
      throwError(error)
    ));
    
  }


  navigateMenu(dato){
    this.router.navigate(['/tienda', dato.id, dato.nombre]);
    this.cerrarSearchBar();

  }

  seeMoreProducts(){
    console.log('que pasa')

    let searchInput = (document.getElementById("search") as HTMLInputElement).value;

    console.log(searchInput);
    this.router.navigate(['tienda'], {queryParams:{busqueda: searchInput}});
    this.cerrarSearchBar();
  }



  showMenuRojo(){
   
   var anchoDiv = $("#divRojo").css('width');
  
 
   this.pescaBandra = true;
   this.caceriaBandera = false;
   this.othersBandera = false;
   this.busquedaT = false;
   console.log(this.pesca)
   if(parseInt(anchoDiv) == 0){
    this.pescaValor = true;
    this.caceriaValor = false;
    this.otherSections = false;
   
    $('#divGreen').animate({"width": "0%"}, "fast");
 
     $('#divRojo').animate({"width": "80%"}, "fast");
    
     $('#divAzul').animate({'width': '0%'}, "fast");

     $(".busqueda").animate({"width":"0%"}, "fast");
     $("#busquedaButton").css("background", "#000");
     $("#boton-busqueda").css("color", "#A4A4A4");
     
     
   }else if(parseInt(anchoDiv) > 0){
    this.pescaValor = false;
    this.caceriaValor = false;
    this.otherSections = false;
    $('#divGreen').animate({"width": "0%"}, "fast");
    $('#divRojo').animate({"width": "0%"}, "fast");
    $('#divAzul').animate({'width': '0%'}, "fast");
    $(".busqueda").animate({"width":"0%"}, "fast");
   }
  }

  showMenuAzul(){
    var anchoDiv = $("#divAzul").css('width');
   
    this.caceriaBandera = true;
    this.pescaBandra = false;
    this.othersBandera = false;
    this.busquedaT = false;
    console.log(this.pesca)
    if(parseInt(anchoDiv) == 0){
      this.caceriaValor = true;
      this.pescaValor = false;
      this.otherSections = false;
      $('#divGreen').animate({"width": "0%"}, "fast");
      $('#divAzul').animate({"width": "80%"}, "fast");
      $('#divRojo').animate({"width": "0%"}, "fast");
      $(".busqueda").animate({"width":"0%"}, "fast");
      $("#busquedaButton").css("background", "#000");
      $("#boton-busqueda").css("color", "#A4A4A4");
     
    }else if(parseInt(anchoDiv) >0){
      this.caceriaValor = false;
      this.pescaValor = false;
      this.otherSections = false;
      $('#divGreen').animate({"width": "0%"}, "fast");
     $('#divAzul').animate({'width': '0%'}, "fast");
     $('#divRojo').animate({"width": "0%"}, "fast");
     $(".busqueda").animate({"width":"0%"}, "fast");
    }
   }


   showMenuOtrasSecciones(){
    var anchoDiv = $("#divGreen").css('width');
    this.othersBandera = true;
    this.caceriaBandera = false;
    this.pescaBandra = false;
    this.busquedaT = false;
    
    if(parseInt(anchoDiv) == 0){
      this.caceriaValor = false;
      this.pescaValor = false;
      this.otherSections = true;
     
      $('#divGreen').animate({"width": "40%"}, "fast");
      $('#divRojo').animate({"width": "0%"}, "fast");
      $('#divAzul').animate({"width": "0%"}, "fast");
      $(".busqueda").animate({"width":"0%"}, "fast");
      $("#busquedaButton").css("background", "#000");
      $("#boton-busqueda").css("color", "#A4A4A4");
   
     
    }else if(parseInt(anchoDiv) >0){
      this.caceriaValor = false;
      this.pescaValor = false;
      this.otherSections = false;
     $('#divGreen').animate({'width': '0%'}, "fast") 
     $('#divAzul').animate({'width': '0%'}, "fast");
     $('#divRojo').animate({"width": "0%"}, "fast");
     $(".busqueda").animate({"width":"0%"}, "fast");
    }

   }



   openSearchBar(){
    
   
    console.log('presionaste opensearchBar');
    this.busquedaT = true;
    this.pescaBandra = false;
    this.caceriaBandera = false;
    this.othersBandera = false;


    this.pescaValor = false;
    this.caceriaValor = false;
    this.otherSections = false;
    var anchoBusqueda = $(".busqueda").css("width");
    if(parseInt(anchoBusqueda) == 0){
     
     $(".busqueda").animate({'height': '800'}, "fast");
     $(".busqueda").animate({"width":"100%"}, "fast");
     $("#busquedaButton").css("background", "#fff");
     $("#boton-busqueda").css("color", "#000");
     
    }else if(parseInt(anchoBusqueda) > 0){
      $('.busqueda').animate({'width': '0%'}, "fast");
      $("#boton-busqueda").css("color", "#A4A4A4");
      $("#busquedaButton").css("background", "#000");
      this.filtroProductos = "";
     
    }

   }


   cerrarSearchBar(){
     console.log('Presionaste cerrarSearchBar');
    $('.busqueda').animate({'width': '0%'}, "fast");
    
    $("#boton-busqueda").css("color", "#A4A4A4");
    $("#busquedaButton").css("background", "#000");
    (document.getElementById("searchInput") as HTMLInputElement).value = '';
    this.allProducts = ''
    
   }


   logOut(){
     console.log('Presionaste signout <============================!!!!!!!!!!!!!!!!!!!======================================>');
     this.userStatus.isLoggedIn.next(null);
     localStorage.removeItem('jwtToken');
     localStorage.removeItem('refreshToken');
     this.auth.signOut();
     this.router.navigate(['/anfibia-i']);
   }
   

   closeMenu(){
     this.pescaValor = false;
     this.caceriaValor = false;
     this.otherSections = false;
    var anchoDiv = $("#divRojo").css('width');
    var anchoDivAzul = $('#divAzul').css('width');
    var anchoDivGreen = $('#divGreen').css('width');
    if(parseInt(anchoDiv) > 0){
      $('#divRojo').animate({"width": "0%"}, "fast");
    }

    if(parseInt(anchoDivAzul) > 0){
      $('#divAzul').animate({"width": "0%"}, "fast");
    }

    if(parseInt(anchoDivGreen) > 0){
      $('#divGreen').animate({"width": "0%"}, "fast");
    }

   }

 

  openModal(){
    console.log('Presionaste abrir modal');
    const modalRef = this.modalInicio.open(ModalInicioSesionComponent,
      {
        scrollable: true,
        windowClass: 'myCustomModalClass',
        size: 'lg'
        // keyboard: false,
        // backdrop: 'static'
      });
  }

 


}
