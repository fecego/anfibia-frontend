import { Component, OnInit,  AfterViewInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import * as AOS from 'aos';
//import Typed from 'typed.js';
//import * as $ from 'jquery';
import { ProductosService } from "../servicios/productos.service";
import { ActivatedRoute,Router, Params, Data } from '@angular/router';
import { productosCarrito } from "./productosCarrito";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { ProductosModalComponent } from '../modals/productos-modal/productos-modal.component';
import { ModalInicioSesionComponent } from '../modals/modal-inicio-sesion/modal-inicio-sesion.component';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { query } from '@angular/animations';
import { NgxSpinnerService } from "ngx-spinner";
//import { element } from 'protractor';
import { ModalCarritoComponent } from '../modals/modal-carrito/modal-carrito.component';
import {productoClass} from '../modelos/productos';
import  {scrollToTop} from '../modulosAnfibia/prueba';
import { Observable, Observer, Subscription, fromEvent, of, from, interval, concat, throwError} from 'rxjs';
import { concatMap, filter, map, shareReplay, switchMap, tap, delay, mergeMap, mapTo, merge, catchError, finalize, exhaustMap} from 'rxjs/operators';
import { UsuariosService } from '../servicios/usuarios.service';


@Component({
  selector: 'app-store-online',
  templateUrl: './store-online.component.html',
  styleUrls: ['./store-online.component.css']
})
export class StoreOnlineComponent implements AfterViewInit, OnInit {

  /*Variables para almacenar los datos que se pintan en la plantilla de Store*/
  public productosTienda:any = [];
  public pages:number;
  public cantidadProductos:number;
  public productosCarrito:Array<any> = [];
  public productosClasificacion:Array<any> = [];
  public pClasificacion:string;
  public multipleLista:Array<any> = [];
  public pCategoria:string;
  public clasificacionShow;
  public totalPaginas;
  @ViewChildren('referButton', {read: ElementRef}) botonesWish: QueryList<ElementRef>
  @ViewChildren('referButtonCompra', {read: ElementRef}) botonesAddCart: QueryList<ElementRef>

  /*Cambio de color*/

  public cambioImagen = {
    value: 'false'
  };
  
  /*Variables para pintar elementos del HTML, los radiosButtons*/
  public categoriasCaceria:boolean;
  public categoriasPesca: boolean;
  public data:any;
  public isChecked:boolean;
  /*Agua Dulce*/
  public subaguadulce:boolean = false;
  public subaguadulceCanhas:boolean = false;
  public subAguaDulceCarretes: boolean = false;
  public subAguaDulceCombos:boolean = false;
  public subAguaDulceSenhuelos:boolean = false;
  public subAguaDulceAccesorios:boolean = false;
  public marcasPescaDIV:boolean;

  /*Agua Salada*/
  public subaguasalada:boolean = false;
  public subaguaSaladaCanhas:boolean = false;
  public subaguaSaladaCarretes:boolean = false;
  public subaguaSaladaCombos:boolean = false;
  public subaguaSaladaSenhuelos:boolean = false;
  public subaguaSaladaAccesorios:boolean = false;
  public filter1:Array<any> = [];
  /*Accesorios*/
  public subAccesorios:boolean = false;
  public subAccesoriosAlmacenamiento: boolean = false;


  /*Navegación*/
  public catNavegacion:boolean = false;
  public navElectrico:boolean = false;
  public navAccesorios:boolean = false;

  /*Ropa Pesca*/
  public ropaPesca:boolean = false;
  public ropaPescaAccesorios:boolean = false;


  /*Lineas de Pesca*/
  public lineasPesca:boolean = false;

  /*Snorkel de Pesca*/
  public snorkelPesca:boolean = false;

  /*Buceo Pesca*/
  public buceoPesca:boolean = false;

  /*Kayak Pesca*/
  public kayaksPesca:boolean = false;
  public kayaksCatPesca:boolean = false;


  /*CACERIA*/

  public subRifles:boolean = false;
  public subPistolas:boolean = false;
  public subRiflesAccesorios:boolean = false;
  public subArqueria:boolean = false;
  public subCuchilleria:boolean = false;
  public subAccesoriosCaceria:boolean = false;
  public subRopaCaceria:boolean = false;
  public subAccesoriosPistolas:boolean = false;


  /*Variables para pintar los valores de los filtros en el HTML, el arreglo que se va a iterar*/
  public clasificaciones = [];
  public categoriasPescaFiltro: Array<any> = [];
  public subcategoriasAguaDulce: Array<any> = [];

  public categoriasCaceriaFiltro: Array<any> = [];

 
  public subcategoriasAguaDulceCanhas: Array<any> = [];
  public subcategoriasAguaDulceCarretes: Array<any> = [];
  public subcategoriasAguaDulceCombos:Array<any> = [];
  public subcategoriasAguaDulceSenhuelos:Array<any> = [];
  public subcategoriasAguaDulceAccesorios:Array<any> = [];
  public marcasPesca:Array<any> = [];

  public subcategoriasAguasalada: Array<any> = [];
  public subcategoriaAguaSaladaCanhas:Array<any> =[];
  public subcategoriaAguaSaladaCarretes:Array<any> = [];
  public subcategoriaAguaSaladaCombos:Array<any> = [];
  public subcategoriaAguaSaladaSenhuelos:Array<any> = [];
  public subcategoriaAguaSaladaAccesorios:Array<any> = [];


  public subcategoriasAccesorios:Array<any> = [];
  public subcategorias2Accesorios:Array<any> = [];

  public navegacionCategorias:Array<any> = [];
  public electricosCategoria:Array<any>=[];
  public navAccesoriosCategoria:Array<any> = [];

  public catRopaPesca:Array<any> = [];
  public catRopaAccesoriosPesca:Array<any> = [];

  public lineasPescaSub:Array<any> = []; 

  public snorkelPescaSub:Array<any> = [];

  public buceoPescaSub:Array<any> = [];

  public kayakPescaSub:Array<any> = [];
  public kayakCatPescaSub:Array<any> = [];


  public subcategoriaRifles:Array<any> = [];
  public subcategoria2RiflesAccesorios:Array<any> = [];
  public subcategoriaPistolas:Array<any> = [];
  public subcategoriaArqueria:Array<any> = [];
  public subcategoriaCuchilleria:Array<any> = [];
  public subcategoriaAccesoriosCaceria:Array<any> = [];
  public subcategoriaRopaCaceria1:Array<any> = [];
  public subAccesorioscategoriaPistolas:Array<any> = [];
  

  /*Variables para manejar los filtros, asignar los queryParams, se le asigna el valor a los formControlls*/
  public categoria: any = "";
  public clasificacion;
  public busqueda:string;
  public filtroMarcasPesca;

  /*Agua dulce*/
  public subcategoriaAguaDulceFiltros;
  public subcategoriaFiltrosCanhas;
  public subcategoriaFiltrosCarretes;
  public subcategoriaFiltrosCombos;
  public subcategoriaFiltrosSenhuelos;
  public subcategoriaFiltrosAccesorios;
  

  /*Agua Salada*/
  public subcategoriaAguaSaladaFiltros;


  /*Accesorios*/

  public accesoriosFiltros;

  /*Navegación*/

  public navegacionFiltros;
  public electricosFiltros;
  public navAccesoriosFiltros;
  
 
  /*Ropa Pesca*/
  public ropaPescaFiltro;
  public ropaPescaAccesoriosFiltros;

  /*Lineas*/
  public lineasFiltro;
  /*Snorkel*/
  public snorkelFiltro;

  /*Buceo*/
  public buceoFiltro;
  /*Kayaks*/
  public kayakFiltro;
  public kayakCatFiltro;


  public categoriasCaceria1;
  public riflesFiltro;
  public subRiflesAccesoriosFiltro;
  public subcategoriaPistolasFiltros;
  public subcategoriaArqueriaFiltros;
  public subcategoriaCuchilleriaFiltros;
  public subcategoriaAccesoriosFiltros;
  public subcategoriaRopaCaceriaFiltros;
  public subcategoriaAccesoriosPistolasFiltros;


  /*Variables para manejar los formGroups, asignar los controladores*/
  form: FormGroup;
  formCaceria: FormGroup;
  formPesca:FormGroup;
  formRadioClasificacion:FormGroup;
  formRadioCategoriaPesca:FormGroup;
  formRadioMarcasPesca:FormGroup;
 

  /*Agua Dulce*/
  formRadioSubAguadulce:FormGroup;
  formRadioSubAguadulceCanhas: FormGroup;
  formRadioSubAguasalada: FormGroup;
  formRadioSubAguadulceCarretes:FormGroup;
  formRadioAguaDulceCombos:FormGroup;
  formRadioAguaDulceSenhuelos:FormGroup;
  formRadioAguaDulceAccesorios:FormGroup;

  /*Agua salada*/

  formRadioSubAguaSalada:FormGroup;
  formRadioSubSaladaCanhas:FormGroup;
  formRadioSubSaladaCarretes:FormGroup;
  formRadioSubSaladaCombos:FormGroup;
  formRadioSubSaladaSenhuelos:FormGroup;
  formRadioSubSaladaAccesorios:FormGroup;

  /*Accesorios*/

  formRadioSubAccesorios:FormGroup;
  formRadioSub2Accesorios:FormGroup;


  /*Navegación*/

  formRadioCatbNavegacion:FormGroup;
  formRadioElectricosNavegacion:FormGroup;
  formRadioNavegacionAccesorios:FormGroup;

  /*Ropa Pesca*/
  formRadioRopaPesca:FormGroup;
  formRadioAccesoriosRopaPesca:FormGroup;

  /*Lineas Pesca */
  formRadioLineasPesca:FormGroup;

  /*Snorkel Pesca*/
  formRadioSnorkelPesca:FormGroup;

  /*Buceo Pesca*/
  formRadioBuceoPesca:FormGroup;

  /*Kayak Pesca */
  formRadioKayaksPesca:FormGroup;
  formRadioKayaksCatPesca:FormGroup;




  /*CACERIA FORMULARIOS*/
  formRadioCategoriaCaceria:FormGroup;
  formRadioSubRifles: FormGroup;
  formRadioSubRiflesAccesorios:FormGroup;
  formRadioSubPistolas:FormGroup;
  formRadioSubAccesoriosPistolas:FormGroup;
  formRadioSubArqueria:FormGroup;
  formRadioSubCuchilleria:FormGroup;
  formRadioSubAccesoriosCaceria:FormGroup;
  formRadioSubRopaCaceria:FormGroup;
  /*Valores para la URL*/
  public datoEtiqueta;
  public paginaActual = 1;
  public totalProductos:number;
  public currentSizeItemsPerPage:number = 15;
  public paginacionQuery:number;



  public isAutheticated = false;
  private userSubs:Subscription;
  public arrayNumberPages = [];



  /*Información para llenar los radioButton de los filtros*/
  DataMarcasPesca:Array<any> = [
    {name: 'Abu Garcia', value: 'abugarcia'}, 
    {name: 'Ande Monofilament', value: 'andemonofilament'},
    {name: 'Berkley', value: 'berkley'},
    {name: 'Bomber Lures', value: 'bomberlures'},
    {name: 'Cuda', value: 'cuda'},
    {name: 'Daiwa', value: 'daiwa'},
    {name: 'DOA', value: 'Fathom Off Shore'},
    {name: 'Imperium', value: 'Imperium'}, 
    {name: 'Magbay Lures', value: 'magbay'},
    {name: 'Mustad', value: 'mustad'},
    {name: 'Pelagic', value: 'pelagic'},
    {name: 'PENN', value: 'penn'},
    {name: 'Shakespeare', value: 'shakespeare'},
    {name: 'Yo-zuri', value: 'yozuri'},
    {name: 'Yellow Tail', value: 'yellowtail'},
    {name: 'Cush it', value: 'cushit'},
    {name: 'Plano', value: 'plano'}, 
    {name: 'Magtrack', value: 'magtrack'}
  ];

  DataMarcasCaceria:Array<any> = [
    {name: 'Buff', value: 'buff'},
    {name: 'Camillus', value: 'camillus'}, 
    {name: 'Crosman', value: 'crosman'},
    {name: 'Flambeau', value: 'flambeau'},
    {name: 'Gamo', value: 'Gamo'},
    {name: 'Mendoza', value: 'mendoza'},
    {name: 'Mozzy Oak', value: 'Outdoor Cap'},
    {name: 'Penn', value: 'Penn'},
    {name: 'Red Head', value: 'redhead'}, 
    {name: 'Yukon Gear', value: 'yukongear'},
    {name: 'S&W', value: 'S&W'},
    {name: 'UMAREX', value: 'umarex'}, 
    {name: 'H&K', value: 'h&k'},
    {name: 'Pietro Baretta', value: 'pietrobaretta'},
    {name: 'Black Moose', value: 'blackmoose'}
    
  ]


  Data: Array<any> = [
    { name: 'Pesca', value: 'pesca', isChecked: false},
    { name: 'Cacería', value: 'caceria', isChecked:false}, 
  ];


  DataPesca:Array<any> = [
    {name: 'Agua Dulce', value:'adulce', isChecked: false},
    {name: 'Agua Salada', value: 'asalad', isChecked: false},
    {name: 'Accesorios', value: 'acceso', isChecked: false},
    {name: 'Navegación', value: 'navega', isChecked: false},
    {name: 'Ropa', value: 'ropaxx', isChecked: false},
    {name: 'Lineas', value: 'lineas', isChecked: false},
    {name: 'Snorkel', value: 'snorke', isChecked: false},
    {name: 'Buceo', value: 'buceox', isChecked: false}, 
    {name: 'Kayaks', value: 'kayaks', isChecked: false}
  ];
  /*Subcategorias Pesca filtro 2 */
  DataSubAguadulce:Array<any> = [
    {name: 'Cañas', value: 'canasd'},
    {name: 'Carretes', value: 'carred'},
    {name: 'Combos', value: 'combod'},
    {name: 'Señuelos', value: 'senued'},
    {name: 'Accesorios', value: 'accesd'}
  ];

  /*Subcategorias PEsca filtro 2*/
  DataSub2CanhasAguaDulce:Array<any> = [
    {name: 'Casting', value: 'casting'},
    {name: 'Spinning', value: 'spinning'},
    {name: 'Accesorios', value: 'Accesorios'}
  ]

  Data2SubCarretesAguaDulce:Array<any> = [
    {name: 'Casting', value: 'casting'},
    {name: 'Spinning', value: 'spinning'},
    {name: 'Mantenimiento', value: 'mantenimiento'}
  ];

  Data2SubCombosAguaDulce:Array<any> = [
    {name: 'Casting', value: 'casting'},
    {name: 'Spinning', value: 'spinning'}
  ];

  Data2SubSueñuelosAguaDulce:Array<any> = [
    {name: 'Blandos', value: 'blandos'}, 
    {name: 'Duros', value: 'duros'}
  ];

  Data2AccesoriosAguaDulce:Array<any> = [
    {name: 'Anzuelos', value: 'anzuelos'},
    {name: 'Granpines', value: 'granpines'},
    {name: 'Destorcedores', value: 'destorcedores'},
    {name: 'Calcomanias', value: 'calcomanias'}
  ];
/*=============================================================================== */



/*========================Sub categoria Agua Salada=======================*/
  DataSubAguasalada:Array<any> = [
    {name: 'Cañas', value: 'cañas'},
    {name: 'Carretes', value: 'carretes'},
    {name: 'Combos', value: 'combos'},
    {name: 'Señuelos', value: 'señuelos'},
    {name: 'Accesorios', value: 'accesorios'}
  ];

  /*Sub categorias filtro 1 Agua Salada*/

  Data2CañasAguaSalada:Array<any> = [
    {name: 'Trolling', value: 'trolling'},
    {name: 'Surft', value: 'surft'},
    {name: 'Jigging', value: 'jigging'},
    {name: 'Popping', value: 'popping'},
    {name: 'Accesorios', value: 'accesorios'}
  ];

  Data2CarretesAguaSalada:Array<any> = [
    {name: 'Convencionales', value: 'convencionales'},
    {name: 'Spinning', value: 'spinning'},
    {name: 'Jigging', value: 'jigging'},
    {name: 'Trolling', value: 'trolling'},
    {name: 'Mantenimiento', value: 'mantenimiento'},
    {name: 'Refacciones', value: 'refacciones'}
  ];

  Data2CombosAguaSalada:Array<any> = [
    {name: 'Surft', value: 'surft'}, 
    {name: 'Trolling', value: 'trolling'}
  ];

  Data2SeñuelosAguaSalada:Array<any> = [
    {name: 'Off Shore', value: 'offshore'},
    {name: 'Duros', value: 'duros'},
    {name: 'Blandos', value: 'blandos'},
    {name: 'Jigging', value: 'jigging'}
  ];

  Data2AccesoriosAguaSalada:Array<any> = [
    {name: 'Faldas', value: 'faldas'},
    {name: 'Llamadores', value: 'llamadores'},
    {name: 'Argollas', value: 'argollas'},
    {name: 'Ocho', value: 'ocho'},
    {name: 'Anzuelos', value: 'anzuelos'},
    {name: 'Red recolectora', value: 'redRecolectora'},
    {name: 'Calcomanías', value: 'calcomanias'}
  ];

  /*================================================================================================= */


  /*Accesorios*/
  DataAccesorios:Array<any> = [
    {name: 'Almacenamiento', value: 'almacenamiento'},
    {name: 'Arneses de lucha', value: 'arneslucha'},
    {name: 'Guantes', value: 'guantes'},
    {name: 'Ganchos', value: 'ganchos'},
    {name: 'Cuchillería', value: 'cuchilleria'},
    {name: 'Pinzas', value: 'pinzas'},
    {name: 'Mantenimiento', value: 'mantenimiento'},
    {name: 'Basculas', value: 'basculas'},
    {name: 'Termos-vasos', value: 'termosvasos'},
    {name: 'Hieleras', value: 'hieleras'}
  ];

  Data2AccesoriosAlmacenamiento:Array<any> = [
    {name: 'Cajas', value: 'cajas'},
    {name: 'Maletas', value: 'maletas'}
  ]

  /*=================================================================================== */

  /*Filtro Navegacion 1*/
  DataNavegacion:Array<any> = [
    {name:'GPS', value: 'gps'},
    {name: 'Brujúlas', value: 'brujulas'},
    {name: 'Audio', value: 'audio'},
    {name: 'Electricos', value: 'electricos'},
    {name: 'Plomería', value: 'plomeria'},
    {name: 'Bombas', value: 'bombas'},
    {name: 'Iluminación', value: 'iluminacion'},
    {name: 'Motor', value: 'motor'},
    {name: 'Accesorios', value: 'accesorios'}
  ];


    Data2NavegacionElectricos:Array<any> = [
      {name: 'Switches', value: 'switches'},
      {name: 'Conectores', value: 'conectores'}
    ];

    Data2NavegacionAccesorios:Array<any> = [
      {name: 'Fender', value: 'fender'},
      {name: 'Anclas', value: 'anclas'},
      {name: 'Cuerdas', value: 'cuerdas'},
      {name: 'Cornetas', value: 'cornetas'},
      {name: 'Silvatos', value: 'silvatos'},
      {name: 'Aireador Portatil', value: 'aireadorPortatil'},
      {name: 'Volantes', value: 'volantes'},
      {name: 'Cepillos', value: 'cepillos'},
      {name: 'Cornamusas', value: 'cornamusas'},
      {name: 'Tapones', value: 'tapones'},
      {name: 'Remolque', value: 'remolque'},
      {name: 'Mantenimiento', value: 'mantenimiento'}
    ];



  /* ===========================================================================================*/
    /*filtro1 Ropa pesca */
  DataRopaPesca:Array<any> = [
    {name: 'Jersey', value: 'jersey'},
    {name: 'Short', value: 'short'},
    {name: 'Traje de Baño', value: 'trajedebaño'},
    {name: 'Toallas', value: 'toallas'},
    {name: 'Gorras', value: 'gorras'},
    {name: 'Sombreros', value: 'sombreros'},
    {name: 'Lentes', value: 'lentes'},
    {name: 'Guantes', value: 'guantes'},
    {name: 'Buff', value: 'buff'},
    {name: 'Accesorios', value: 'accesorios'},
    {name: 'Almohadas', value: 'almohadas'}
  ];

  Dato2RopaPescaAccesorios = [
    {name: 'Cinturones', value: 'cinturones'},
    {name: 'Correas', value: 'correas'},
    {name: 'Estuches', value: 'estuches'},
    {name: 'Bolsos', value: 'bolsos'},
    {name: 'Carteras', value: 'carteras'},
    {name: 'Llaveros', value: 'llaveros'},
    {name: 'Cangureros', value: 'cangureros'}

  ]

  /*====================================================================== */

  /*Lineas*/
  DataLineas:Array<any> = [
    {name: 'Monofilamento', value: 'monofilamento'},
    {name: 'trenzadas', value: 'trenzadas'},
    {name: 'Leaders', value: 'leaders'},
    {name: 'Fluorocarbono', value: 'fluorocarbono'},
    {name: 'Reinales', value: 'reinales'}
  ];

  /*Snorkel */

  DataSnorkel:Array<any> = [
    {name: 'Aletas', value: 'aletas'},
    {name: 'Tubo snorkel', value: 'tubosnorkel'},
    {name: 'Gogles', value: 'gogles'},
    {name: 'Visores', value: 'visores'},
    {name: 'Chalecos', value: 'chalecos'},
  ];

  /*Buceo */

  DataBuceo:Array<any> = [
    {name: 'Aletas', value: 'aletas'}, 
    {name: 'Arpones', value: 'arpones'},
    {name: 'Visores', value: 'visores'},
    {name: 'Accesorios', value: 'accesorios'}
  ];


  /*Kayaks */
  DataKayaks:Array<any> = [
    {name: 'Remos', value: 'remos'}, 
    {name: 'Asientos', value: 'asientos'},
    {name: 'Kayaks', value: 'kayaks'},
    {name: 'Accesorios', value: 'accesorios'},
    {name: 'Portacañas', value: 'portacañas'}
  ];

  Data2Kayaks:Array<any> = [
    {name: 'Mini', value: 'mini'},
    {name: 'Pesca', value: 'pesca'},
    {name: 'Tandem', value: 'tandem'}
  ]


  /*Clasificacion categorías*/
  DataCaceria: Array<any> = [
    {name: 'Rifles', value:'rifles', isChecked: false},
    {name: 'Pistolas', value: 'pistolas', isChecked: false},
    {name: 'Arquería', value: 'arqueria', isChecked:false},
    {name: 'Cuchillería', value: 'cuchilleria', isChecked: false},
    {name: 'Accesorios', value: 'accesorios', isChecked: false}, 
    {name: 'Ropa', value: 'ropa', isChecked: false}
  ];


  /*Categorías cacería*/
  DataCaceriaRifles:Array<any> = [
    {name: 'Diabolos', value: 'diabolos'},
    {name:'Salva', value: 'salva'}, 
    {name : 'CO2', value: 'co2'},
    {name: 'Resorte', value: 'resorte'},
    {name: 'Nitropiston', value: 'nitropiston'},
    {name: 'PCP', value: 'pcp'}, 
    {name: 'Accesorios', value: 'accesorios'}
  ];

  DataRiflesAccesorios:Array<any> = [
    {name: 'Salva y diabolos', value: 'salvaydiabolos'},
    {name: 'Munición de acero', value: 'municionacero'},
    {name: 'Diabolos', value: 'diabolos'},
    {name: 'Tanques CO2', value: 'tanquesco2'},
    {name: 'Bombas de alta presión', value: 'bombasaltapresion'},
    {name: 'Siluetas', value: 'siluetas'},
    {name: 'Mantenimiento', value: 'mantenimiento'},
    {name: 'Estuches', value: 'estuches'},
    {name: 'Porta Fusiles', value: 'portafusiles'},
    {name: 'Cartucheras', value: 'cartucheras'},
    {name: 'Fundas', value: 'fundas'},
    {name: 'Bastones de tiro', value: 'bastonestiro'},
    {name: 'Miras', value: 'miras'},


  ];

  DataCaceriaPistolas: Array<any> = [
    {name: 'Diabolos', value: 'diabolos'},
    {name: 'Salva', value: 'salva'}, 
    {name: 'CO2', value: 'co2'},
    {name: 'Accesorios', value: 'accesorios'}
  ];

  DataPistolasAccesorios:Array<any> = [
    {name: 'Diabolos', value: 'diabolos'},
    {name: 'Salvas', value: 'salvas'}, 
    {name: 'Mantenimiento', value: 'mantenimiento'},
    {name: 'Estuches', value: 'estuches'},
    {name: 'Fundas', value: 'fundas'},
    {name: 'Practica de Tiro', value: 'practicaTiro'}
  ];

    DataCaceriaArqueria:Array<any> = [
      {name: 'Arcos', value: 'arcos'},
      {name: 'Bayestas', value: 'bayestas'},
      {name: 'Flechas', value: 'flechas'}
     
    ];

    DataCaceriaCuchilleria: Array<any> = [
      {name: 'Cuchillos', value: 'cuchillo'},
      {name: 'Navajas', value: 'navajas'},
      {name: 'Hachas', value: 'hachas'},
      {name: 'Machetes', value: 'machetes'},
      {name: 'Accesorios', value: 'accesorios'}
    ];

    DataCaceriaAccesorios: Array<any> = [
      {name: 'Mochilas', value: 'mochilas'},
      {name: 'Hieleras', value: 'hieleras'},
      {name: 'Termos', value: 'termos'},
      {name: 'Bolsas para señuelos', value: 'bolsasSeñuelos'},
      {name: 'Señuelos', value: 'señuelos'},
      {name: 'Mallas', value: 'mallas'},
      {name: 'Llamadores', value: 'llamadores'},
      {name: 'Sillas', value: 'sillas'},
      {name: 'Cuerdas', value: 'cuerdas'},
      {name: 'Bancos', value: 'bancos'},
      {name: 'Calcomanias', value: 'calcomanias'},
      {name: 'Espiadero', value: 'espiadero'}
    ];

    DataCaceriaRopa:Array<any> = [
      {name: 'Jersey', value: 'jersey'},
      {name: 'Playeras', value: 'playeras'},
      {name: 'Pantalones', value: 'pantalones'},
      {name: 'Gorras', value: 'gorras'},
      {name: 'Lentes', value: 'lentes'},
      {name: 'Buff', value: 'buff'},
      {name: 'Guantes', value: 'guantes'},
      {name: 'Mascaras', value: 'mascaras'},
      {name: 'Accesorios', value: 'accesorios'}
    ];


  
  constructor(private _productosTienda: ProductosService,  private modal: NgbModal, private route: ActivatedRoute, private router:Router, private fb: FormBuilder, private spinner: NgxSpinnerService, private userStatus: UsuariosService, private modalInicio: NgbModal) { 
 
    
    
    this.form = this.fb.group({
      checkArray: this.fb.array([])
    })

    this.formCaceria = this.fb.group({
      checkArray: this.fb.array([])
    })

    this.formPesca = this.fb.group({
      checkArray: this.fb.array([])
    })

    this.formRadioClasificacion = this.fb.group({
      clasificaciones: this.clasificacion
    });
    
    /*Initialize the FormControlName of the FormGrup element */
    this.formRadioCategoriaPesca = this.fb.group({
      categoriasPesca: this.categoria
    });
    
    this.formRadioSubAguadulce = this.fb.group({
      aguadulceSub: this.subcategoriaAguaDulceFiltros
    });

    this.formRadioSubAguadulceCanhas = this.fb.group({
      aguadulceSub2Canhas: this.subcategoriasAguaDulceCanhas
    });

    this.formRadioSubAguadulceCarretes = this.fb.group({
      aguadulce2SubCarretes : this.subcategoriaFiltrosCarretes
    });

    this.formRadioAguaDulceCombos = this.fb.group({
      aguadulce2SubCombos : this.subcategoriaFiltrosCombos
    });

    this.formRadioAguaDulceSenhuelos = this.fb.group({
      aguadulce2SubSenhuelos: this.subcategoriaFiltrosSenhuelos
    });

    this.formRadioAguaDulceAccesorios = this.fb.group({
      aguadulce2SubAccesorios: this.subcategoriaFiltrosAccesorios
    });

    this.formRadioMarcasPesca = this.fb.group({
      fishBrand: this.filtroMarcasPesca
    });


    /*Agua salada*/
    this.formRadioSubAguasalada = this.fb.group({
      aguasaladaSub: this.subcategoriaAguaSaladaFiltros
    });

    this.formRadioSubSaladaCanhas = this.fb.group({
      aguasaladaCanhas: this.subcategoriaAguaSaladaCanhas
    });

    this.formRadioSubSaladaCarretes = this.fb.group({
      aguasaladaCarretes: this.subcategoriaAguaSaladaCarretes
    });

    this.formRadioSubSaladaCombos = this.fb.group({
      aguasaladaCombos: this.subcategoriaAguaSaladaCombos
    });

    this.formRadioSubSaladaSenhuelos = this.fb.group({
      aguasaladaSenhuelos: this.subcategoriaAguaSaladaSenhuelos
    });

    this.formRadioSubSaladaAccesorios = this.fb.group({
      aguasaladaAccesorios: this.subcategoriaAguaSaladaAccesorios
    });

    /*Accesorios*/

    this.formRadioSubAccesorios = this.fb.group({
      accesoriosSub: this.subcategoriasAccesorios
    });

    this.formRadioSub2Accesorios = this.fb.group({
      accesoriosSub2: this.subcategorias2Accesorios
    });

    /*Navegación*/

    this.formRadioCatbNavegacion = this.fb.group({
      categorias1: this.accesoriosFiltros
    });
    
    this.formRadioElectricosNavegacion = this.fb.group({
      elecC1: this.electricosFiltros
    });

    this.formRadioNavegacionAccesorios = this.fb.group({
      accNavegacion: this.navAccesoriosFiltros
    });



    /*ROPA PESCA*/
    this.formRadioRopaPesca = this.fb.group({
      ropaFishing: this.ropaPescaFiltro
    });

    this.formRadioAccesoriosRopaPesca = this.fb.group({
      ropaAccesoriosFishing: this.ropaPescaAccesoriosFiltros

    });

    /*Lineas*/

    this.formRadioLineasPesca = this.fb.group({
      lineasFishing: this.lineasFiltro
    });

    /*Snorkel*/
    this.formRadioSnorkelPesca = this.fb.group({
      snorkelFishing: this.snorkelFiltro
    });

    /*Buceo*/
    this.formRadioBuceoPesca = this.fb.group({
      buceoFishing: this.buceoFiltro
    });

    /*Kayaks*/
    this.formRadioKayaksPesca = this.fb.group({
      kayakFishing: this.kayakFiltro
    });

    this.formRadioKayaksCatPesca = this.fb.group({
      kayakCatFishing: this.kayakCatFiltro
    });




    /*Cacería*/

    this.formRadioSubRifles = this.fb.group({
      caceriaRifles: this.riflesFiltro
    });


    this.formRadioCategoriaCaceria = this.fb.group({
      categoriasCaceria: this.categoriasCaceria1
    });

    this.formRadioSubRiflesAccesorios = this.fb.group({
      caceriaRiflesAccesorios: this.subRiflesAccesoriosFiltro
    })


    this.formRadioSubPistolas = this.fb.group({
      caceriaPistolas: this.subcategoriaPistolasFiltros
    });


    this.formRadioSubArqueria = this.fb.group({
      caceriaArqueria: this.subcategoriaArqueriaFiltros
    });

    this.formRadioSubCuchilleria = this.fb.group({
      caceriaCuchilleria: this.subcategoriaCuchilleriaFiltros
    });


    this.formRadioSubAccesoriosCaceria = this.fb.group({
      caceriaAccesorios: this.subcategoriaAccesoriosFiltros
    });

    this.formRadioSubRopaCaceria = this.fb.group({
      caceriaRopa: this.subcategoriaRopaCaceriaFiltros
    });

  
  this.formRadioSubAccesoriosPistolas = this.fb.group({
    caceriaAccesoriosPistolas:  this.subcategoriaAccesoriosPistolasFiltros
  });
    


  }

  /*RadioButton click send parameter by URL*/ 

  /*Metodos para enviar parametros por url y navegar a la ruta definida*/
  sendData(dato, dato2){
      dato2.isChecked = true;
      var elementos = [];
      console.log("Presionaste el radioButton", dato);
      elementos.push(dato);
      this.clasificacion = elementos;
      console.log("ESte es el dato que estas mandando", this.clasificacion);
      this.router.navigate(['tienda'], {queryParams:{clasificacion: this.clasificacion}});

  }


  clasificacionManager(dato){
    console.log(dato);
    this.clasificacion = dato;
    this._productosTienda.subjectUrlN.next(1);
    this.router.navigate([],{relativeTo: this.route, queryParams: {clasificacion: this.clasificacion}});
  }

  marcasPManager(dato){
    console.log('Esta es la Marca',dato);
    this.router.navigate([], {relativeTo: this.route, queryParams: {marcasPesca: dato, subcategoriaAguadulce: null, tipodeCanhas: null, tipodeCarretes: null, tipodeCombos:null, tipodeSenhuelo: null}, queryParamsHandling: 'merge'});
  }


  catFishManager(dato){
    console.log("Esta es al precionar categoria", dato);
    this.categoria = dato;
    this.router.navigate([], {relativeTo: this.route, queryParams: {categoria: this.categoria, subcategoriaAguadulce: null, subcategoriaAguasalada: null,  tipodeCanhas: null, tipodeCarretes: null, tipodeCombos:null, tipodeSenhuelo: null, tipodeAccesorios: null, tipoSubAccesorios: null, navSub: null, accesoriosSub: null, electricoSub: null, tipoRopaPesca: null, tipoRopaPescaAccesorios: null, tipoLineas: null, tiposSnorkel: null, tipoBuceo: null, tipoKayaks: null, subKayaks:null}, queryParamsHandling: 'merge'});
  }


  /*Empieza a manejar los filtros de agua dulce*/
  subAguadulceManager(dato){
    console.log("categoria a ver ", dato);
    this.router.navigate([],{relativeTo: this.route, queryParams: {subcategoriaAguadulce: dato, tipodeCanhas: null, tipodeCarretes: null}, queryParamsHandling:'merge'});

  }

  subAguadulceCanhasManager(dato){
    console.log(dato);
    this.router.navigate([], {relativeTo: this.route, queryParams: { tipodeCanhas: dato}, queryParamsHandling: 'merge'});
  }


  subAguaDulceCarrtesManager(dato){
    console.log(dato);
    this.router.navigate([], {relativeTo: this.route, queryParams: {tipodeCarretes: dato}, queryParamsHandling: 'merge'});

  }

  subAguadulceCombosManager(dato){
    console.log(dato);
    this.router.navigate([], {relativeTo: this.route, queryParams: {tipodeCombos: dato}, queryParamsHandling: 'merge'});
  }

  subAguadulceSenhuelosManager(dato){
    console.log(dato);
    this.router.navigate([], {relativeTo: this.route, queryParams: {tipodeSenhuelos: dato}, queryParamsHandling: 'merge'});
  }

  subAguadulceAccesoriosManager(dato){
    console.log(dato);
    this.router.navigate([], {relativeTo: this.route, queryParams: {tipodeAccesorios: dato}, queryParamsHandling: 'merge'})
  }

  /*=============================================================================================*/
  /*Empieza a manejar los filtros de agua SALADA*/

  subAguasaladaManager(dato){
    console.log(dato);
    this.router.navigate([], {relativeTo: this.route, queryParams: {subcategoriaAguasalada: dato, tipodeCarretes: null, tipodeCanhas: null, tipodeCombos: null, tipodeSenhuelo: null, tipodeAccesorios: null}, queryParamsHandling:'merge'});
  }

  subAguaSaladaCanhasManager(dato){

    console.log('Presionaste el correcto');
    this.router.navigate([], {relativeTo: this.route, queryParams: {tipodeCanhas: dato, tipodeCarretes: null}, queryParamsHandling: 'merge'});
  }

  subAguaSaladaCarretesManager(dato){
    console.log('Presionaste el segundo correcto');
    this.router.navigate([], {relativeTo: this.route, queryParams: {tipodeCarretes: dato, tipodeCanhas: null}, queryParamsHandling: 'merge'});
  }

  subAguaSaladaCombosManager(dato){
    console.log(dato);
    this.router.navigate([], {relativeTo: this.route, queryParams: {tipodeCombos: dato}, queryParamsHandling: 'merge'});
  }

  subAguaSaladaSenhueloManager(dato){
    console.log(dato);
    this.router.navigate([], {relativeTo: this.route, queryParams: { tipodeSenhuelo: dato}, queryParamsHandling: 'merge'});
  }

  subAguaSaladaAccesoriosManager(dato){
    console.log(dato);
    this.router.navigate([], {relativeTo: this.route, queryParams:{ tipodeAccesorios: dato, tipoSubAccesorios: null}, queryParamsHandling: 'merge'});
  }

  subAccesorios2Manager(dato){
    console.log(dato);
    this.router.navigate([], {relativeTo: this.route, queryParams: { tipoSubAccesorios: dato}, queryParamsHandling: 'merge'});
  }



  /*Navegación*/

  navegacionManager(dato){
    console.log(dato);
    this.router.navigate([], {relativeTo: this.route, queryParams: {navSub: dato, electricoSub: null, accesoriosSub: null}, queryParamsHandling: 'merge'});
  }

  electricoManager(dato){
    console.log(dato);
    this.router.navigate([], {relativeTo: this.route, queryParams :{electricoSub: dato}, queryParamsHandling: 'merge'});
  }

  accesoriosNavManager(dato){
    console.log(dato);
    this.router.navigate([], {relativeTo: this.route, queryParams: {accesoriosSub: dato}, queryParamsHandling: 'merge'});
  }

  /*Ropa Pesca */

  ropaPescaManager(dato){
    console.log(dato);
    this.router.navigate([], {relativeTo: this.route, queryParams: {tipoRopaPesca: dato, tipoRopaPescaAccesorios: null}, queryParamsHandling: 'merge'});
  }


  ropaAccesoriosPescaManager(dato){
    console.log(dato);
    this.router.navigate([], {relativeTo: this.route, queryParams: {tipoRopaPescaAccesorios: dato}, queryParamsHandling: 'merge'});
  }

  /*Lineas Pesca*/
  lineasManager(dato){
    console.log(dato);
    this.router.navigate([], {relativeTo: this.route, queryParams: {tipoLineas: dato}, queryParamsHandling: 'merge'});
  }


  /*Snorkel*/
  snorkelManager(dato){
    console.log(dato);
    this.router.navigate([], {relativeTo: this.route, queryParams: {tiposSnorkel: dato}, queryParamsHandling: 'merge'});
  }


  /*Buceo*/
  buceoManager(dato){
    console.log(dato);
    this.router.navigate([], {relativeTo: this.route, queryParams: {tipoBuceo: dato}, queryParamsHandling: 'merge'});
  }


  /*Kayaks*/
  kayakManager(dato){
    console.log(dato);
    this.router.navigate([], {relativeTo: this.route, queryParams: {tipoKayaks: dato}, queryParamsHandling:'merge'})
  }
  

  kayakCatManager(dato){
    console.log(dato);
    this.router.navigate([], {relativeTo: this.route, queryParams: {subKayaks: dato}, queryParamsHandling: 'merge'});
  }



  /*Clasificacion Cacería*/

  catHuntingManager(dato){
    console.log(dato);
    this.router.navigate([], {relativeTo: this.route, queryParams: {categoriasCaceria: dato, subRifles: null, subRiflesAccesorios: null, subRopaCaceria: null, subAccesoriosPistolas: null, subPistolas: null, subArqueria:null, subAccesoriosCaceria: null, subCuchilleria: null}, queryParamsHandling:'merge'});
  }



  subRifleManager(dato){
    console.log(dato);
    this.router.navigate([], {relativeTo: this.route, queryParams: { subRifles: dato, subRiflesAccesorios: null}, queryParamsHandling: 'merge'});
  }


  subRifleAccesoriosManager(dato){
    console.log(dato);
    this.router.navigate([], {relativeTo: this.route, queryParams: {subRiflesAccesorios: dato}, queryParamsHandling: 'merge'});

  }

  subPistolaManager(dato){
    console.log(dato);
    this.router.navigate([], {relativeTo: this.route, queryParams: {subPistolas: dato, subAccesoriosPistolas: null}, queryParamsHandling: 'merge'});
  }


  subArqueriaManager(dato){
    console.log(dato);
    this.router.navigate([], {relativeTo: this.route, queryParams: {subArqueria: dato}, queryParamsHandling: 'merge'});
  }

  subCuchilleriaManager(dato){
    console.log(dato);
    this.router.navigate([], {relativeTo: this.route, queryParams: {subCuchilleria: dato}, queryParamsHandling: 'merge'});

  }


  subAccesoriosCaceriaManager(dato){
    console.log(dato);
    this.router.navigate([], {relativeTo: this.route, queryParams: {subAccesoriosCaceria: dato}, queryParamsHandling: 'merge'});

  }

  subRopaCaceriaManager(dato){
    console.log(dato);
    this.router.navigate([], {relativeTo: this.route, queryParams: {subRopaCaceria: dato}, queryParamsHandling: 'merge'});

  }

  subAccesoriosPistolaManager(dato){
    console.log(dato);
    this.router.navigate([], {relativeTo: this.route, queryParams: {subAccesoriosPistolas: dato}, queryParamsHandling: 'merge'});
  }

  /*subAguadulceCanhasManager(dato){
    console.log(dato);
    this.cañasAguaDulce = dato;
    this.router.navigate([],{relativeTo: this.route, queryParams: {tipoCañaAguaDulce: this.cañasAguaDulce}, queryParamsHandling:'merge'});
    
  }*/

/*Verifica cuando el checkbox recibe datos y cuando el checkbox deja de estar checado*/
  onCheckboxChange(e, dato) {
    const checkArray: FormArray = this.form.get('checkArray') as FormArray;
    if (e.target.checked) {
      dato.isChecked = true;
      checkArray.push(new FormControl(e.target.value));
      
      this.clasificacion = checkArray.value;
      
      localStorage.setItem('datosGuardados', this.clasificacion);
      console.log(this.clasificacion);
      this.router.navigate(['tienda'], {queryParams:{clasificacion: this.clasificacion}});     
    } 
    else {
      console.log("Estoy en el else de cuando presionas disselect en el checkbox");
      dato.isChecked = false;
      if(checkArray.length == 0){
        var c = this.Data.filter(elemento =>{
          return elemento.isChecked;
        });
        c.forEach(elemento =>{
          checkArray.push(new FormControl(elemento.value))
          
        })
        if(checkArray.length > 0){
          this.clasificacion = checkArray.value;
          this.router.navigate(['tienda'], {queryParams: {clasificacion: this.clasificacion}});
        }else{
          this.clasificacion = checkArray.value;
          this.router.navigate(['anfibia-pesca'], {queryParams: {clasificacion: this.clasificacion}});
        }

      }
      
        let i: number = 0;
        checkArray.controls.forEach((item: FormControl) => {
          if (item.value == e.target.value) {
            checkArray.removeAt(i);
            this.clasificacion = checkArray.value;
            console.log("Este es el valor de clasificacion cuando es checado y tiene parametros", this.clasificacion);
            if(this.clasificacion.length == 0){
              this.router.navigate(['tienda'], {queryParams: {clasificacion: this.clasificacion}}) 
            }else{
              console.log("entre al caso en el que no tiene mas que un dato")
              console.log(checkArray.value);
              this.router.navigate(['tienda'], {queryParams:{clasificacion: this.clasificacion}})
            }
            return;
          }
          i++;
        });
    }
  }

 

  onCheckboxChangePesca(e, dato){
    const checkArrayPesca: FormArray = this.formPesca.get('checkArray') as FormArray;
    if (e.target.checked) {
      dato.isChecked = true;
      checkArrayPesca.push(new FormControl(e.target.value));
      
      this.categoria = checkArrayPesca.value;
      
     
      console.log(this.categoria);
      this.router.navigate([], {relativeTo: this.route, queryParams: {categoria: this.categoria}, queryParamsHandling: 'merge'});  

    }
    else{
      let i: number = 0;
      checkArrayPesca.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArrayPesca.removeAt(i);
          this.categoria = checkArrayPesca.value;
          console.log("Este es el valor de clasificacion cuando es checado y tiene parametros", this.categoria);
          if(this.categoria.length == 0){
            this.router.navigate(['tienda'], {queryParams: {clasificacion: this.clasificacion}});
          }else if(this.categoria.length > 0){
            this.router.navigate([], {relativeTo: this.route, queryParams: { categoria: this.categoria}});
          }
          /*if(this.clasificacion.length == 0){
            this.router.navigate(['tienda'], {queryParams: {clasificacion: this.clasificacion}}) 
          }else{
            console.log("entre al caso en el que no tiene mas que un dato")
            console.log(checkArray.value);
            this.router.navigate(['tienda'], {queryParams:{clasificacion: this.clasificacion}})
          }*/
          return;
        }
        i++;
      });

      
    }

  }


  
  
  ngOnInit(){
    /*Animación de AOS*/

    AOS.init();
    this.spinner.show()
    $(".filtros-Menu").css("width","0%");
    /*Carga los productos en la vista y asigna las imagenes*/

    /*Carga las clasificaciones del RadioButton*/
    scrollToTop();
    this.subcategoriasAguasalada = this.DataSubAguasalada;
    this.clasificaciones = this.Data;
    this.categoriasPescaFiltro = this.DataPesca;
    this.categoriasCaceriaFiltro = this.DataCaceria;
    this.subcategoriasAguaDulce = this.DataSubAguadulce;
    this.subcategoriasAguaDulceCanhas = this.DataSub2CanhasAguaDulce;
    this.subcategoriasAguaDulceCarretes = this.Data2SubCarretesAguaDulce;
    this.subcategoriasAguaDulceCombos = this.Data2SubCombosAguaDulce;
    this.subcategoriasAguaDulceSenhuelos = this.Data2SubSueñuelosAguaDulce;
    this.subcategoriasAguaDulceAccesorios = this.Data2AccesoriosAguaDulce;
    this.marcasPesca = this.DataMarcasPesca;

    /*Agua Salada*/
    this.subcategoriaAguaSaladaCanhas = this.Data2CañasAguaSalada;
    this.subcategoriaAguaSaladaCarretes = this.Data2CarretesAguaSalada;
    this.subcategoriaAguaSaladaCombos = this.Data2CombosAguaSalada;
    this.subcategoriaAguaSaladaSenhuelos = this.Data2SeñuelosAguaSalada;
    this.subcategoriaAguaSaladaAccesorios = this.Data2AccesoriosAguaSalada;
    this.subcategorias2Accesorios = this.Data2AccesoriosAlmacenamiento;
    
    
    /*Accesorios*/

    this.subcategoriasAccesorios = this.DataAccesorios;

    /*Navegación*/
    this.navegacionCategorias = this.DataNavegacion;
    this.electricosCategoria = this.Data2NavegacionElectricos;
    this.navAccesoriosCategoria = this.Data2NavegacionAccesorios;


    /*Ropa*/
    this.catRopaPesca = this.DataRopaPesca;
    this.catRopaAccesoriosPesca = this.Dato2RopaPescaAccesorios;

    /*Lineas*/
    this.lineasPescaSub = this.DataLineas;

    /*Snorkel*/
    this.snorkelPescaSub = this.DataSnorkel;

    /*Buceo*/
    this.buceoPescaSub = this.DataBuceo;
    /*Kayaks*/
    this.kayakPescaSub = this.DataKayaks;
    this.kayakCatPescaSub = this.Data2Kayaks;

    /*RIFLES*/
    this.subcategoriaRifles = this.DataCaceriaRifles;
    this.subcategoria2RiflesAccesorios = this.DataRiflesAccesorios;
    this.subcategoriaPistolas = this.DataCaceriaPistolas;
    this.subcategoriaArqueria = this.DataCaceriaArqueria;
    this.subcategoriaCuchilleria = this.DataCaceriaCuchilleria;
    this.subcategoriaAccesoriosCaceria = this.DataCaceriaAccesorios;
    this.subcategoriaRopaCaceria1 = this.DataCaceriaRopa;
    this.subAccesorioscategoriaPistolas = this.DataPistolasAccesorios;
    console.log("Son las clasifiaciones", this.clasificaciones);

    this.userSubs = this.userStatus.isLoggedIn.subscribe(user => {
      console.log(user)
      this.isAutheticated = !!user,
      console.log('This is the value of this.isAu', this.isAutheticated);
     
  })


    /*Cada que se inicia el Componente, atrapa los queryParams para usarlos para los filtros */
    this.route.queryParams.subscribe(
      (queryParams: Params) =>{
        console.log('Estos son los queryParams', queryParams);

        this.filter1 = Object.values(queryParams)[2];

        console.log('value filter 1', this.filter1);


        this.categoria = queryParams['categoria'];
        this.clasificacion = queryParams['clasificacion'];
        this.busqueda = queryParams['busqueda'];
        this.filtroMarcasPesca = queryParams['marcasPesca'];
        console.log('Estos son los filtros de la marca', this.filtroMarcasPesca);
        /*Filtros de agua Dulce*/
        this.subcategoriaAguaDulceFiltros = queryParams['subcategoriaAguadulce'];
        this.subcategoriaFiltrosCanhas = queryParams['tipodeCanhas'];
        this.subcategoriaFiltrosCarretes = queryParams['tipodeCarretes'];
        this.subcategoriaFiltrosCombos = queryParams['tipodeCombos'];
        this.subcategoriaFiltrosSenhuelos = queryParams['tipodeSenhuelo'];
        this.subcategoriaFiltrosAccesorios = queryParams['tipodeAccesorios'];



        /*Filtros de agua Salada*/
        this.subcategoriaAguaSaladaFiltros = queryParams['subcategoriaAguasalada'];




        /*Filtros ACCESORIOS */
        this.accesoriosFiltros = queryParams['tipoSubAccesorios'];
        

        /*Filtros Navegación*/  
        this.navegacionFiltros = queryParams['navSub'];
        this.electricosFiltros = queryParams['electricoSub'];
        this.navAccesoriosFiltros = queryParams['accesoriosSub'];
        
        /*Ropa Pesca*/
        this.ropaPescaFiltro = queryParams['tipoRopaPesca'];
        this.ropaPescaAccesoriosFiltros = queryParams['tipoRopaPescaAccesorios'];

        /*Lineas PEsca*/
        this.lineasFiltro = queryParams['tipoLineas'];

        /*Snorkel Pesca*/
        this.snorkelFiltro = queryParams['tiposSnorkel'];

        /*Buceo Pesca*/
        this.buceoFiltro = queryParams['tipoBuceo'];

        this.kayakFiltro = queryParams['tipoKayaks'];
        this.kayakCatFiltro = queryParams['subKayaks'];
        /*CACERÍA*/
        this.categoriasCaceria1 = queryParams['categoriasCaceria'];
        this.riflesFiltro = queryParams['subRifles'];
        this.subRiflesAccesoriosFiltro = queryParams['subRiflesAccesorios'];
        this.subcategoriaPistolasFiltros = queryParams['subPistolas'];
        this.subcategoriaArqueriaFiltros = queryParams['subArqueria'];
        this.subcategoriaCuchilleriaFiltros = queryParams['subCuchilleria'];
        this.subcategoriaAccesoriosFiltros = queryParams['subAccesoriosCaceria'];
        this.subcategoriaRopaCaceriaFiltros = queryParams['subRopaCaceria'];
        this.subcategoriaAccesoriosPistolasFiltros = queryParams['subAccesoriosPistolas'];

        /*Here begins everything*/
        //this.paginacionQuery = queryParams['pagina'];


        this.categoria = queryParams['categoria'];
        this.clasificacion = queryParams['clasificacion'];

        const queryParamsR = queryParams;
        console.log('This are the  query params params', queryParamsR);
        if(queryParams['pagina']){
          this.paginacionQuery = queryParams['pagina'];
        }else{
          this.paginacionQuery = 1;
        }

    

        /*Si no existe clasificación ni categoria,  y solo existe la paginación*/
    if(this.paginacionQuery && !this.clasificacion && !this.categoria && !this.filter1){
         
          
        scrollToTop();
         //when there is pagination number in existence you must add that number to the paginacion Subject which takes the control of the pagination button next and Prev
         this._productosTienda.subjectUrlN.next(this.paginacionQuery);



         const elementosInfo = this._productosTienda.getProductos_tiendaPages(this.paginacionQuery).subscribe(respuesta => {
           this.cantidadProductos = respuesta.cantidadProductos.count;
           this.totalPaginas = respuesta.pages;
           this.arrayNumberPages = respuesta.paginasToPrint;
           this.productosTienda = respuesta.productos.map(x => x.json_build_object);


           console.log(this.cantidadProductos, this.totalPaginas, this.arrayNumberPages, this.productosTienda);
           this.spinner.hide(); 
         });

         this.formRadioClasificacion.patchValue({
          clasificaciones: ''
         });
         this.categoriasPesca = false;
         /*const prod = elementosInfo.pipe(map(x => x.productos))
         const productos = prod.pipe(map(x => Object.values(x).map(x => x['json_build_object']))).subscribe(
          respuesta => {
            this.productosTienda = respuesta;
            console.log('This is thisproductos', respuesta) 
            this.spinner.hide();

          });

         const cantidadProductos = elementosInfo.pipe(map(x => x.cantidadProductos)).subscribe(
          respuesta => {
            this.cantidadProductos = respuesta.count;
            console.log(this.cantidadProductos);
          });

          const ObservablePages = elementosInfo.pipe(map(x => x.pages)).subscribe(
            respuesta => {
              this.pages = respuesta;
              this.arrayNumberPages = [];
              console.log(this.pages);
              for(let i = 1; i <= this.pages; i++){
                this.arrayNumberPages.push(i);
                //console.log('This is the number of pages', this.arrayNumberPages);
              }

            });

            const ObservablePagesToPrint = elementosInfo.pipe(map(x => x.paginasToPrint)).subscribe(
              respuesta => {
                this.arrayNumberPages = respuesta;
                console.log('=====================Me ejecuto cuando tiene paginacion============5 elements array', respuesta);
  
              });*/




    }/*Si no existe la categoría  pero si existe la clasificacion y la paginación*/
    else if(this.paginacionQuery && this.clasificacion && !this.categoria && !this.filter1){
      scrollToTop();
      console.log('Hay paginacion query y clasificacion we debes hacer algo, algo nuevo xD', this.paginacionQuery, this.clasificacion);
      const observableByClasificacion = this._productosTienda.getProductosBy_clasificacion(this.clasificacion, this.paginacionQuery);
      /*const observableProductos = observableByClasificacion.pipe(map(x => x['productos'].map(x => x['json_build_object']))).subscribe(x => 
        {
          this.productosTienda = x
          this.spinner.hide();
        });*/

      /*const observableCantidadProductos = observableByClasificacion.pipe(map(x => x['totalProductos'][0].count)).subscribe(x => {
        this.cantidadProductos = x
        console.log('this is the cantidadProductos', this.cantidadProductos)
      });*/

      const observablePaginasToRender = observableByClasificacion.pipe(map(x => x)).subscribe(x => {
        //Asignaciòn de valores


        this.clasificacionShow = x.clasificacion;
        this.totalPaginas = x.totalPaginas;
        this.cantidadProductos = x.totalProductos[0].count;
        this.productosTienda = x.productos.map(x => x.json_build_object)
        console.log('This is productosTienda', this.productosTienda);
        this.arrayNumberPages = x.paginasToRender;
        

        //Asigna el valor obteniedo al formulario
        this.formRadioClasificacion.patchValue({
          clasificaciones: this.clasificacion
        });
        if(this.clasificacionShow == 'pesca'){
          this.categoriasPesca = true;
          this.categoriasCaceria = false;
        }else if(this.clasificacionShow == 'caceria'){
          this.categoriasCaceria = true;
          this.categoriasPesca = false;
        }
        //Esconde el spinner de carga
        this.spinner.hide();
      });
      this.categoriasPesca = false;
      this.formRadioCategoriaPesca.patchValue({
        categoria: ''
      });
  


      /*si existe la paginación, la clasificación y la categoria*/
    }else if(this.paginacionQuery && this.clasificacion && this.categoria && !this.filter1){
      scrollToTop();
      console.log('hay paginacion query, clasificacion y categoria');
      this._productosTienda.getProductosBy_clasificacionAndCategoria(this.clasificacion, this.categoria, this.paginacionQuery).subscribe(
        respuesta => {
          console.log(respuesta);


          this.cantidadProductos = respuesta.totalProductos;
          this.totalPaginas = respuesta.totalPaginas;
          this.arrayNumberPages = respuesta.paginasToRender;
          this.productosTienda = respuesta.productos.map(x => x.json_build_object);
          this.spinner.hide();
          







        });

        if(this.categoria == 'adulce'){
          this.subaguadulce = true;
          this.subaguasalada = false;
          this.catNavegacion = false;
          this.snorkelPesca = false;
          this.kayaksPesca = false;
          this.ropaPesca = false;
          this.ropaPescaAccesorios = false;
          this.buceoPesca = false;
          this.lineasPesca = false;
        }else if(this.categoria == 'asalad'){
          this.subaguadulce = false;
          this.subaguasalada = true;
          this.catNavegacion = false;
          this.snorkelPesca = false;
          this.kayaksPesca = false;
          this.ropaPesca = false;
          this.ropaPescaAccesorios = false;
          this.buceoPesca = false;
          this.lineasPesca = false;

        }else if(this.categoria == 'navega'){
          this.subaguadulce = false;
          this.subaguasalada = false;
          this.catNavegacion = true;
          this.snorkelPesca = false;
          this.kayaksPesca = false;
          this.ropaPesca = false;
          this.ropaPescaAccesorios = false;
          this.buceoPesca = false;
          this.lineasPesca = false;

        }else if(this.categoria == 'snorke'){
          this.subaguadulce = false;
          this.subaguasalada = false;
          this.catNavegacion = false;
          this.snorkelPesca = true;
          this.kayaksPesca = false;
          this.ropaPesca = false;
          this.ropaPescaAccesorios = false;
          this.buceoPesca = false;
          this.lineasPesca = false;

        }else if(this.categoria == 'kayaks'){
          this.subaguadulce = false;
          this.subaguasalada = false;
          this.catNavegacion = false;
          this.snorkelPesca = false;
          this.kayaksPesca = true;
          this.ropaPesca = false;
          this.ropaPescaAccesorios = false;
          this.buceoPesca = false;
          this.lineasPesca = false;

        }else if(this.categoria == 'ropaxx'){
          this.subaguadulce = false;
          this.subaguasalada = false;
          this.catNavegacion = false;
          this.snorkelPesca = false;
          this.kayaksPesca = false;
          this.ropaPesca = true;
          this.ropaPescaAccesorios = false;
          this.buceoPesca = false;
          this.lineasPesca = false;

        }else if(this.categoria == 'acceso'){
          this.subaguadulce = false;
          this.subaguasalada = false;
          this.catNavegacion = false;
          this.snorkelPesca = false;
          this.kayaksPesca = false;
          this.ropaPesca = false;
          this.ropaPescaAccesorios = true;
          this.buceoPesca = false;
          this.lineasPesca = false;

        }else if(this.categoria == 'buceox'){
          this.subaguadulce = false;
          this.subaguasalada = false;
          this.catNavegacion = false;
          this.snorkelPesca = false;
          this.kayaksPesca = false;
          this.ropaPesca = false;
          this.ropaPescaAccesorios = false;
          this.buceoPesca = true;
          this.lineasPesca = false;
        }else if(this.categoria == 'lineas'){
          this.subaguadulce = false;
          this.subaguasalada = false;
          this.catNavegacion = false;
          this.snorkelPesca = false;
          this.kayaksPesca = false;
          this.ropaPesca = false;
          this.ropaPescaAccesorios = false;
          this.buceoPesca = false;
          this.lineasPesca = true;
        }

        this.categoriasPesca = true;

        this.formRadioClasificacion.patchValue({
          clasificaciones: this.clasificacion
        })

        this.formRadioCategoriaPesca.patchValue({
          categoriasPesca: this.categoria
        });






      /*Si se rcibe el parametro de busqueda*/
    }else if(this.paginacionQuery && this.clasificacion && this.categoria && this.filter1){
      console.log('supp existe el filtro 1 so aqui tienes que hacer lo que se hace cuando existe un filtro 1========================')
      this._productosTienda.getProductosBy_filter1(this.clasificacion, this.categoria, this.filter1, this.paginacionQuery).subscribe(respuesta =>
        {
          console.log(respuesta);


          this.cantidadProductos = respuesta.cantidadProductos;
          this.totalPaginas = respuesta.totalPaginas;
          this.arrayNumberPages = respuesta.paginasToPrint;
          this.productosTienda = respuesta.productos.map(x => x.json_build_object);
          this.spinner.hide();

        })

        this.formRadioClasificacion.patchValue({
          clasificaiones: this.clasificacion
        })

    }
    
    else if(this.busqueda){ 
      scrollToTop();
      this.datoEtiqueta = this.busqueda;
      this.cambioImagen.value = "busqueda";
      console.log(this.busqueda);
      
      const f = this._productosTienda.getProductosBySearch(this.busqueda).pipe(map(x => x))
      const c = f.pipe(map(x => Object.values(x)));
      this.productosTienda = c.pipe(map(x => x.map(x => x['json_build_object'])));
      this.spinner.hide();

  
      
      //this.getImage(this.productosTienda);
      

      /**/
    }else if(queryParams = {}){
      scrollToTop();
      //When there is not info you must execute the subject to be in 1
      console.log('Es ejecutado cuando no existe ningun queryParam en la URL');

     
      //this._productosTienda.subjectUrlN.subscribe(x => console.log('this is something you need to run', x));
      /*Here is the beginning of the store*/
    
      this.datoEtiqueta = '';
      /*this._productosTienda.getProductos().subscribe(res =>{
        console.log(res['rows']);
        /*this.productosTienda = res['rows']
      },err => console.log(err)
    );*/
          this.paginacionQuery = 1;
          
          this._productosTienda.subjectUrlN.next(this.paginacionQuery);
          /*Same observable with shareReplay comparten la misma solicitud*/
          const ObservableProductosT= this._productosTienda.getProductos_tienda().pipe(map(x => x.productos));

          const ObservableFinalPT = ObservableProductosT.pipe(map(x => Object.values(x).map(x => x['json_build_object']))).subscribe(
            respuesta => {
              this.productosTienda = respuesta;
              console.log('This is thisproductos', this.productosTienda) 
              this.spinner.hide();
            });


          const ObservableCantidadProductos = this._productosTienda.getProductos_tienda().pipe(map(x => x.cantidadProductos)).subscribe(
            respuesta => {
              this.cantidadProductos = respuesta.count;
              console.log(this.cantidadProductos);
            });


          /*const ObservablePages = this._productosTienda.getProductos_tienda().pipe(map(x => x.pages)).subscribe(
            respuesta => {
              this.pages = respuesta;
              this.arrayNumberPages = [];
              console.log(this.pages);
              for(let i = 1; i <= this.pages; i++){
                this.arrayNumberPages.push(i);
                console.log('This is the number of pages', this.arrayNumberPages);
              }

            });*/



            
            const ObservablePagesToPrint = this._productosTienda.getProductos_tienda().pipe(map(x => x.paginasToPrint)).subscribe(
              respuesta => {
                this.arrayNumberPages = respuesta;
                console.log('=================================5 elements array', this.arrayNumberPages);
  
              });





              
            
              //const d = f.pipe(x => x.map(x => x['json_build_object'])).subscribe(respuesta => console.log('This is the respuesta', respuesta));
              //const c = this.productosTienda.pipe(map(x =>Object.values(x).map(x => x['json_build_object'])));
               
              
              //this.productosTienda.pipe(map(x => x.map(x => x['json_build_object'])));
            
              

             /*this._productosTienda.getProductos_tienda().subscribe(respuesta => {
              this.productosTienda = respuesta.productos;
              this.productosTienda.pipe(map(x => Object.values(x)));
              this.productosTienda.pipe(map(x => x.map(x => x['json_build_object'])))
              this.cantidadProductos = respuesta.cantidadProductos;
              this.pages = respuesta.pages;

              console.log('this is the fucking respuesta', respuesta.cantidadProductos, respuesta.pages, respuesta.productos);
              this.spinner.hide();

            });*/
         
            //const f = this._productosTienda.getProductos_tienda().pipe(map(x => x))
            //const c = f.pipe(map(x => Object.values(x)));
            //this.productosTienda = c.pipe(map(x => x.map(x => x['json_build_object'])));
            //this.spinner.hide();
      
         
          
        
         
        
          this.paginaActual = 1;
          this.currentSizeItemsPerPage = 30;
          //this.totalProductos = this.productosTienda.length;
          this.cambioImagen.value = 'vacio';
          //this.getImage(this.productosTienda);
          this.categoriasCaceria = false;
          this.categoriasPesca = false;
          this.subaguadulce = false;
          this.subaguadulceCanhas = false;
          this.subAguaDulceCarretes = false;
          this.marcasPescaDIV = false;
          this.subaguaSaladaCanhas = false;
          this.catNavegacion = false;
          this.navElectrico = false;
          this.navAccesorios = false;
          this.ropaPescaAccesorios = false;
          this.ropaPesca = false;
          this.lineasPesca = false;
          this.snorkelPesca = false;
          this.buceoPesca = false;
          this.kayaksCatPesca = false;
          this.kayaksPesca = false;
          this.subaguasalada = false;
          this.subaguaSaladaCarretes = false;
          this.subaguaSaladaSenhuelos = false;
          this.subaguaSaladaAccesorios = false;
          this.subAguaDulceCombos = false;
          this.subAguaDulceSenhuelos = false;
          this.subAguaDulceAccesorios = false;
           /*Let the modification of some values in the formGrup */
           this.formRadioClasificacion.patchValue({
            clasificaciones: null, 
            // formControlName2: myValue2 (can be omitted)
          });
        
        }
      });
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
    


  /*Obtiene las imagenes de los arreglos de productos*/
  getImage(listaArreglo:any){
    listaArreglo.forEach(producto =>{
      producto.imagenPrincipal = producto.image[0].url;
      if(producto.image[1]){
        producto.imagenCambio = producto.image[1].url;
      }else if(!producto.image[1]){
        producto.imagenCambio = producto.imagenPrincipal;
      }
    });

  }



  prevPage(){
    console.log('Here is prevPage imprime la pagina');
    let value;
    this._productosTienda.subjectUrlN.subscribe(x => 
      value = x  
    ); 
    let prevPage;
    if(value == 1){
      prevPage = 1;
    }else{
      prevPage = value - 1;
    }
    this._productosTienda.subjectUrlN.next(prevPage);
    this.router.navigate(["/tienda"], {queryParams: {pagina: prevPage}, queryParamsHandling: 'merge'});
    /*this._productosTienda.subjectUrlN.subscribe(urlValue => {
      const changeValueLess = urlValue - 1;
      this._productosTienda.subjectUrlN.next(changeValueLess);
      console.log('this is the value of the url', changeValueLess);
      this.router.navigate(['/tienda', {pagina: changeValueLess}]);
    });*/
    

  }


  nextPage(){
    /*Validar que la siguiente pagina sea menor a la cantidad de paginas que el usuario mando*/
    console.log('Here is nextPage, imprime la');
    let nextVal;
    this._productosTienda.subjectUrlN.subscribe(x =>{
      console.log('this is something new value for nextPage', x); 
      nextVal = x
      //console.log('this is the nextVal', nextVal);
    });



   
    //const nextPage = parseInt(nextVal) + 1;
    if(nextVal == this.totalPaginas){
      this._productosTienda.subjectUrlN.next(this.totalPaginas);
      this.router.navigate(['/tienda'], {relativeTo: this.route, queryParams: {pagina: this.totalPaginas}, queryParamsHandling: 'merge'});
    }else{
      const nextPage = parseInt(nextVal) + 1;
      this._productosTienda.subjectUrlN.next(nextPage);
      this.router.navigate(['/tienda'], {relativeTo: this.route, queryParams: {pagina: nextPage}, queryParamsHandling: 'merge'});
    }


    /*console.log('New value', nextPage);
    console.log('This is paginas value', this.totalPaginas)
    this._productosTienda.subjectUrlN.next(nextPage);
    if(nextPage == this.totalPaginas){
      this.router.navigate(['/tienda'], {queryParams: {pagina: this.totalPaginas}});
    }else{
      this.router.navigate(['/tienda'], {queryParams: {pagina: nextPage}});
    }*/
    /*this._productosTienda.subjectUrlN.subscribe(urlValue => 
      {
        const changeValue = urlValue + 1;
        console.log('this is the value next page', changeValue);
        this._productosTienda.subjectUrlN.next(changeValue);
        this.router.navigate(['/tienda', {pagina: changeValue}]);
      });*/
     

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
            this._productosTienda.postProducto_wishList(dato, usuarioIdentificador)
          )).subscribe(x => {
            if(x.statusCode == 200){
              dato.fullHeart = true;
              setTimeout(() => {
                dato.isLoading = false;
              }, 4000)
            }else if(x.statusCode == 409){
              dato.fullHeart = false;
              setTimeout(() => {
                dato.isLoading = false;

              }, 4000);
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
      console.log('This is the dato that I want to add to the cart', dato, event.target);
      const usuarioIdentificador = 1;
      dato.isLoadingCart = true;
     
        Observable.create(observer => {
          observer.next(event.target)
        }).pipe(exhaustMap(x => 
          this._productosTienda.postProducto_cartList(dato, usuarioIdentificador) 
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


  despliegueMenu(){
    console.log('Presionaste despliegue menu');
    $(".filtros-Menu").animate({"width": "100%"},"fast");
    $(".filtros-Menu").css("display", "block");
  }


  closeSmallMenu(){
    console.log('Presionaste closeSmallMenu');
    $(".filtros-Menu").animate({"width": "0%"},"fast");
    $(".filtros-Menu").css("display", "none");

  }

  crearProducto(producto){
    let productoCarrito = new productosCarrito(producto.idProducto, producto.sku);
    productoCarrito.addCarrito(productoCarrito);

  }

  onPageChange(event):void{
 this.spinner.show();
    this.paginaActual = event
    window.scrollTo({top: 0, behavior: 'smooth'});
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
  }


 
 /* showButtons(param){
    if(param >= 0){
      console.log("Entraste con el siguiente parametro", param)
      $('#prueba' + param).css('visibility', 'visible');
    }
 
  }

  hideButtons(param){
    console.log("Salimos con el siguiente parametro", param);
    $('#prueba' + param).css('visibility', 'hidden');
  }*/
  
 


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




  public openModalCarrito(datos){
    const modalRef = this.modal.open(ModalCarritoComponent,
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



