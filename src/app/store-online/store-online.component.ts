import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import Typed from 'typed.js';
import * as $ from 'jquery';
import { ProductosService } from "../servicios/productos.service";
import { ActivatedRoute,Router, Params, Data } from '@angular/router';
import { productosCarrito } from "./productosCarrito";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { ProductosModalComponent } from '../modals/productos-modal/productos-modal.component';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { query } from '@angular/animations';
import { NgxSpinnerService } from "ngx-spinner";
import { element } from 'protractor';
import { ModalCarritoComponent } from '../modals/modal-carrito/modal-carrito.component';


@Component({
  selector: 'app-store-online',
  templateUrl: './store-online.component.html',
  styleUrls: ['./store-online.component.css']
})
export class StoreOnlineComponent implements OnInit {

  /*Variables para almacenar los datos que se pintan en la plantilla de Store*/
  public productosTienda:Array<any> = [];
  public productosCarrito:Array<any> = [];
  public productosClasificacion:Array<any> = [];
  public pClasificacion:string;
  public multipleLista:Array<any> = [];
  public pCategoria:string;
 

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
    { name: 'Cacería', value: 'Caceria', isChecked:false}, 
  ];


  DataPesca:Array<any> = [
    {name: 'Agua Dulce', value:'aguadulce', isChecked: false},
    {name: 'Agua Salada', value: 'aguasalada', isChecked: false},
    {name: 'Accesorios', value: 'accesorios', isChecked: false},
    {name: 'Navegación', value: 'navegacion', isChecked: false},
    {name: 'Ropa', value: 'ropa', isChecked: false},
    {name: 'Lineas', value: 'lineas', isChecked: false},
    {name: 'Snorkel', value: 'snorkel', isChecked: false},
    {name: 'Buceo', value: 'buceo', isChecked: false}, 
    {name: 'Kayaks', value: 'kayaks', isChecked: false}
  ];
  /*Subcategorias Pesca filtro 2 */
  DataSubAguadulce:Array<any> = [
    {name: 'Cañas', value: 'cañas'},
    {name: 'Carretes', value: 'carretes'},
    {name: 'Combos', value: 'combos'},
    {name: 'Señuelos', value: 'señuelos'},
    {name: 'Accesorios', value: 'accesorios'}
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


  
  constructor(private _productosTienda: ProductosService,  private modal: NgbModal, private route: ActivatedRoute, private router:Router, private fb: FormBuilder, private spinner: NgxSpinnerService) { 
 
    
    
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
    this.clasificacion = dato
    this.router.navigate(['tienda'],{queryParams: {clasificacion: this.clasificacion}});
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
    
    /*Carga los productos en la vista y asigna las imagenes*/

    /*Carga las clasificaciones del RadioButton*/
    window.scrollTo({top: 0, behavior: 'smooth'});
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
    /*Cada que se inicia el Componente, atrapa los queryParams para usarlos para los filtros */
    this.route.queryParams.subscribe(
      (queryParams: Params) =>{
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
        console.log('Este es el valor que me llega de la URL', this.subcategoriaFiltrosCarretes);
        /*this.subcategoriaAguasaladaFiltros = queryParams['subcategoriaAguasalada']*/
        if(this.clasificacion){
          window.scrollTo({top: 0, behavior: 'smooth'});
          this.productosTienda = this._productosTienda.getProductos();


          this.paginaActual = 1;
          this.currentSizeItemsPerPage = 15;
          this.totalProductos = this.productosTienda.length;
          
          this.productosTienda = this.productosTienda.filter(producto =>{
            return producto.clasificacion == this.clasificacion;
          });
          this.getImage(this.productosTienda);
          this.datoEtiqueta = this.clasificacion;
          var arrayPesca = [];
          this.cambioImagen.value = 'pesca';
          this.categoriasPesca = true;
          this.marcasPescaDIV = true;
          this.categoriasCaceria = false;
          this.subAguaDulceCarretes = false;
          this.subaguadulce = false;
          this.subaguasalada = false;
          this.subaguadulceCanhas = false;
          this.subAguaDulceCarretes = false;
          this.subaguasalada = false;
          this.subAguaDulceCombos = false;
          this.subAguaDulceSenhuelos = false;
          this.subAguaDulceAccesorios = false;
          this.subaguaSaladaCanhas = false;
          this.subaguaSaladaCarretes = false;
          this.subAguaDulceCombos = false;
          this.subaguaSaladaCombos = false;
          this.subaguaSaladaSenhuelos = false;
          this.navAccesorios = false;
          this.subaguaSaladaAccesorios = false;
          this.subAccesoriosAlmacenamiento = false;
          this.subAccesorios = false;
          this.catNavegacion = false; 
          this.navElectrico = false;
          this.subAccesorios = false; 
          this.ropaPesca = false;
          this.ropaPescaAccesorios = false;
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
          this.subRifles = false;
          this.subRiflesAccesorios = false;
          this.subAccesoriosPistolas = false;
          this.subRifles = false;
          this.subPistolas = false;
          this.subRiflesAccesorios = false;
          this.subArqueria = false;
          this.subCuchilleria = false;
          this.subAccesoriosCaceria = false;
          this.subRopaCaceria = false;
          if(this.clasificacion == 'pesca'){
            

            this.paginaActual = 1;
            this.currentSizeItemsPerPage = 9;
            this.totalProductos = this.productosTienda.length;
        
            /*Let the modification of some values in the formGrup */
            this.formRadioClasificacion.patchValue({
              clasificaciones: this.clasificacion, 
              // formControlName2: myValue2 (can be omitted)
            });
            this.formRadioCategoriaPesca.patchValue({
              categoriasPesca: ''
            });

            this.formRadioSubAguadulce.patchValue({
              aguadulceSub:''
            });

            this.formRadioMarcasPesca.patchValue({
              fishBrand: ''
            });

          
  
            /*if(this.filtroMarcasPesca){
  
              this.productosTienda = this.productosTienda.filter(producto =>{
                return producto.marca == this.filtroMarcasPesca;
              });
  
              this.formRadioMarcasPesca.patchValue({
                fishBrand: this.filtroMarcasPesca 
                // formControlName2: myValue2 (can be omitted)
              });
  
            }*/
  
            /*Si la ruta se le anexa un queryParam de categoria, se empieza a ejecutar esta sección*/
            
            /* FILTRO DE CATEGORÍA */
  
            if(this.categoria){
              
              this.datoEtiqueta = this.categoria;
              this.productosTienda = this.productosTienda.filter(producto =>{
                return producto.categoria == this.categoria;
              });
              this.paginaActual = 1;
              this.currentSizeItemsPerPage = 9;
              this.totalProductos = this.productosTienda.length;
  
              /*Filtro de categoria de agua dulce*/
              if(this.categoria == 'aguadulce'){
             
                this.cambioImagen.value = 'aguadulce';
                this.subaguadulce = true;
                
                this.formRadioCategoriaPesca.patchValue({
                  categoriasPesca: this.categoria 
                  // formControlName2: myValue2 (can be omitted)
                });
                if(this.subcategoriaAguaDulceFiltros){
                  this.datoEtiqueta = this.subcategoriaAguaDulceFiltros;
                  console.log('Este es el subcategoria1', this.subcategoriaAguaDulceFiltros);
                  this.productosTienda = this.productosTienda.filter(producto =>{
                    return producto.subcategoria1 == this.subcategoriaAguaDulceFiltros;
                  });
                  this.paginaActual = 1;
                  this.currentSizeItemsPerPage = 9;
                  this.totalProductos = this.productosTienda.length;
                 
                  this.formRadioSubAguadulce.patchValue({
                    aguadulceSub: this.subcategoriaAguaDulceFiltros
                  });
  
                  /*this.formRadioSubAguadulceCanhas.patchValue({
                    aguadulceSub2Canhas: ''
                  });*/
  
                  this.formRadioSubAguadulceCarretes.patchValue({
                    aguadulce2SubCarretes: ''
                  });
  
                  this.formRadioAguaDulceAccesorios.patchValue({
                    aguadulce2SubAccesorios: ''
                  });
  
                  this.formRadioSubAccesorios.patchValue({
                    accesoriosSub: ''
                  });
  
  
                  /*FILTRO DE SUBCATEGORIA 1 AGUA DULCE-CAÑAS, CARRETES, COMBOS, SEÑUELOS, ACCESORIOS*/
                  if(this.subcategoriaAguaDulceFiltros == 'cañas'){
                    this.cambioImagen.value = this.subcategoriaAguaDulceFiltros;
                    this.subaguadulceCanhas = true;
                    this.subAguaDulceCarretes = false;
                    this.subAguaDulceCombos = false;
                    this.subAguaDulceSenhuelos = false;
                    this.subAguaDulceAccesorios = false;
                    if(this.subcategoriaFiltrosCanhas){
                      this.productosTienda = this.productosTienda.filter(producto =>{
                        return producto.subcategoria2 == this.subcategoriaFiltrosCanhas;
                      });
                      this.formRadioSubAguadulceCanhas.patchValue({
                        aguadulceSub2Canhas: this.subcategoriaFiltrosCanhas
                      });
  
                  
                    }
  
                  }else if(this.subcategoriaAguaDulceFiltros == 'carretes'){
                    this.cambioImagen.value = 'carretes';
                    this.subaguadulceCanhas = false;
                    this.subAguaDulceCarretes = true;
                    this.subAguaDulceCombos = false;
                    this.subAguaDulceSenhuelos = false;
                    this.subAguaDulceAccesorios = false;
                    console.log('Entre al filtro de carretes');
                    if(this.subcategoriaFiltrosCarretes){
                      this.productosTienda = this.productosTienda.filter(producto =>{
                        return producto.subcategoria2 == this.subcategoriaFiltrosCarretes;
                      });
                      this.formRadioSubAguadulceCarretes.patchValue({
                        aguadulce2SubCarretes: this.subcategoriaFiltrosCarretes
                      });
                    }
  
                  }else if(this.subcategoriaAguaDulceFiltros == 'señuelos'){
                    this.cambioImagen.value = 'señuelos';
                    this.subaguadulceCanhas = false;
                    this.subAguaDulceCarretes = false;
                    this.subAguaDulceCombos = false;
                    this.subAguaDulceSenhuelos = true;
                    this.subAguaDulceAccesorios = false;
                    console.log('Entre al filtro de señuelos');
                    if(this.subcategoriaFiltrosSenhuelos){
                      this.productosTienda = this.productosTienda.filter(producto => {
                        return producto.subcategoria2 == this.subcategoriaFiltrosSenhuelos;
                      });
                    }
                  } 
                  else if(this.subcategoriaAguaDulceFiltros == 'combos'){
                    this.cambioImagen.value = 'combos';
                    this.subAguaDulceCombos = true;
                    this.subaguadulceCanhas = false;
                    this.subAguaDulceCarretes = false;
                    this.subAguaDulceSenhuelos = false;
                    this.subAguaDulceAccesorios = false;
                    console.log('Entre al filtro de combos');
                    if(this.subcategoriaFiltrosCombos){
                      this.productosTienda = this.productosTienda.filter(producto =>{
                        return producto.subcategoria2 = this.subcategoriaFiltrosCombos;
                      });
                      this.formRadioAguaDulceCombos.patchValue({
                        aguadulce2SubCombos: this.subcategoriaFiltrosCombos
                      });
                    } 
                  }else if(this.subcategoriaAguaDulceFiltros == 'accesorios'){
                    this.cambioImagen.value = 'accesorios';
                    this.subAguaDulceCombos = false;
                    this.subaguadulceCanhas = false;
                    this.subAguaDulceCarretes = false;
                    this.subAguaDulceSenhuelos = false;
                    this.subAguaDulceAccesorios = true;
                    console.log('Entre al filtro de accesorios');
                    if(this.subcategoriaFiltrosAccesorios){
                      console.log('Este valor', this.subcategoriaFiltrosAccesorios);
                      this.productosTienda = this.productosTienda.filter(producto =>{
                        return producto.subcategoria2 == this.subcategoriaFiltrosAccesorios
                      });
                      console.log(this.productosTienda);
                      this.formRadioAguaDulceAccesorios.patchValue({
                        aguadulce2SubAccesorios: this.subcategoriaFiltrosAccesorios
                      });
  
                    }
                }
                  
                  
                  
                  
                  /*else if(this.subcategoriaAguaDulceFiltros == 'señuelos'){
                    this.subAguaDulceCombos = false;
                    this.subaguadulceCanhas = false;
                    this.subAguaDulceCarretes = false;
                    this.subAguaDulceSenhuelos = true;
                    this.subAguaDulceAccesorios = false;
                    console.log('Entre al filtro de señuelos');
                    if(this.subcategoriaFiltrosSenhuelos){
                      this.productosTienda = this.productosTienda.filter(producto =>{
                        return producto.subcategoria2 = this.subcategoriaFiltrosSenhuelos;
                      });
                      this.formRadioAguaDulceSenhuelos.patchValue({
                        aguadulce2SubSenhuelos: this.subcategoriaFiltrosSenhuelos
                      });
                    }
  
                    }*/
                 
               
  
                  /*console.log('Si existe una subcategoria', this.subcategoriaAguadulce);
                  this.productosTienda = this.productosTienda.filter(producto =>{
                    return producto.subcategoria1 == this.subcategoriaAguadulce; 
                  });
                  console.log(this.productosTienda);
                  if(this.subcategoriaAguadulce == 'cañas'){
                    this.subaguadulceCanhas = true;
                    console.log('La subcategoria 1 es cañas');
                
                  }*/
                }else{
                  console.log('No existe ningun valor de subcategoria1');
                }
  
                /*Filtro de categoría de Agua Salada*/
  
              }else if(this.categoria == 'aguasalada'){
                
                console.log("Estamos en el agua salada we");
                this.cambioImagen.value = 'aguasalada';
                this.subaguasalada = true;
                this.subaguadulce = false;
                this.subaguaSaladaCanhas = false;
                this.subaguaSaladaCarretes = false;
                this.subaguaSaladaCombos = false;
                this.subaguaSaladaSenhuelos = false;
                this.subaguaSaladaAccesorios = false;
                this.subAccesoriosAlmacenamiento = false;
                this.subAccesorios = false;
  
                this.formRadioCategoriaPesca.patchValue({
                  categoriasPesca: this.categoria
                });
  
                this.formRadioSubAguasalada.patchValue({
                  aguasaladaSub: ''
                });
  
                this.formRadioSubSaladaCanhas.patchValue({
                  aguasaladaCanhas: ''
                });
  
                this.formRadioSubSaladaCarretes.patchValue({
                  aguasaladaCarretes: ''
                });
  
                this.formRadioSubSaladaCombos.patchValue({
                  aguasaladaCombos: ''
                });
  
                this.formRadioSubSaladaSenhuelos.patchValue({
                  aguasaladaSenhuelos: ''
                });
  
                this.formRadioSubSaladaAccesorios.patchValue({
                  aguasaladaAccesorios: ''
                });
  
  
                if(this.subcategoriaAguaSaladaFiltros){
                  this.productosTienda = this.productosTienda.filter(producto =>{
                    return producto.subcategoria1 == this.subcategoriaAguaSaladaFiltros;
                  });

                  this.paginaActual = 1;
                  this.currentSizeItemsPerPage = 9;
                  this.totalProductos = this.productosTienda.length;
  
                  this.formRadioSubAguasalada.patchValue({
                    aguasaladaSub: this.subcategoriaAguaSaladaFiltros
                  });
  
               
                  if(this.subcategoriaAguaSaladaFiltros == 'cañas'){
                    this.cambioImagen.value = "cañasAguaSalada";
                    this.datoEtiqueta = this.subcategoriaAguaSaladaFiltros;
                    this.subaguaSaladaCanhas = true;
                    this.subaguaSaladaCarretes = false;
                    this.subaguaSaladaCombos = false;
                    this.subaguaSaladaSenhuelos = false;
                    this.subaguaSaladaAccesorios = false;
  
                    if(this.subcategoriaFiltrosCanhas){
                      this.productosTienda = this.productosTienda.filter(producto =>{
                        return producto.subcategoria2 == this.subcategoriaFiltrosCanhas;
                      });
  
                      this.formRadioSubSaladaCanhas.patchValue({
                        aguasaladaCanhas: this.subcategoriaFiltrosCanhas
                      });
                    }
  
                  }
                  
                  else if(this.subcategoriaAguaSaladaFiltros == 'carretes'){
                
                   this.cambioImagen.value = "carretesAguaSalada"
                   this.datoEtiqueta = this.subcategoriaAguaSaladaFiltros;
                   this.subaguaSaladaCarretes = true;
                   this.subaguaSaladaCanhas = false;
                   this.subaguaSaladaCombos = false;
                   this.subaguaSaladaSenhuelos = false;
                   this.subaguaSaladaAccesorios = false;
  
  
                   if(this.subcategoriaFiltrosCarretes){
                    console.log("Aqui estoy en el filtro de carretes salada");
                    this.productosTienda = this.productosTienda.filter(producto =>{
                      return producto.subcategoria2 == this.subcategoriaFiltrosCarretes
                    });
  
                    this.formRadioSubSaladaCarretes.patchValue({
                      aguasaladaCarretes: this.subcategoriaFiltrosCarretes
                    });
                  }
                   
                  }else if(this.subcategoriaAguaSaladaFiltros == 'combos'){
                    console.log('Soy un combo de agua salada');
                    this.cambioImagen.value = "combosAguaSalada"
                    this.datoEtiqueta = this.subcategoriaAguaSaladaFiltros;
                    this.subaguaSaladaCarretes = false;
                    this.subaguaSaladaCanhas = false;
                    this.subaguaSaladaCombos = true;
                    this.subaguaSaladaSenhuelos = false;
                    this.subaguaSaladaAccesorios = false;
                    if(this.subcategoriaFiltrosCombos){
                      this.productosTienda = this.productosTienda.filter(producto =>{
                        return producto.subcategoria2 == this.subcategoriaFiltrosCombos
                      });
                      
                      this.formRadioSubSaladaCombos.patchValue({
                        aguasaladaCombos: this.subcategoriaFiltrosCombos
                      });
                   
                    }
  
                  }else if(this.subcategoriaAguaSaladaFiltros == 'señuelos'){
                    console.log('Soy un señuelo de agua salada');
                    this.cambioImagen.value = "senhuelosAguaSalada"
                    this.datoEtiqueta = this.subcategoriaAguaSaladaFiltros;
                    this.subaguaSaladaCarretes = false;
                    this.subaguaSaladaCanhas = false;
                    this.subaguaSaladaCombos = false;
                    this.subaguaSaladaSenhuelos = true;
                    this.subaguaSaladaAccesorios = false;
                    if(this.subcategoriaFiltrosSenhuelos){
                      this.productosTienda = this.productosTienda.filter(producto =>{
                        return producto.subcategoria2 == this.subcategoriaFiltrosSenhuelos
                      });
                      this.formRadioSubSaladaSenhuelos.patchValue({
                        aguasaladaSenhuelos: this.subcategoriaFiltrosSenhuelos
                      });
  
                    }
  
  
                  }else if(this.subcategoriaAguaSaladaFiltros == 'accesorios'){
                    console.log('Soy un accesorio de agua salada');
                    this.cambioImagen.value = "senhuelosAguaSalada"
                    this.datoEtiqueta = this.subcategoriaAguaSaladaFiltros;
                    this.subaguaSaladaCarretes = false;
                    this.subaguaSaladaCanhas = false;
                    this.subaguaSaladaCombos = false;
                    this.subaguaSaladaSenhuelos = false;
                    this.subaguaSaladaAccesorios = true;
                    if(this.subcategoriaFiltrosAccesorios){
                      this.productosTienda = this.productosTienda.filter(producto =>{
                        return producto.subcategoria2 == this.subcategoriaFiltrosAccesorios
                      });
  
                      this.formRadioSubSaladaAccesorios.patchValue({
                        aguasaladaAccesorios: this.subcategoriaFiltrosAccesorios
                      });
  
                    }
                  }
  
  
  
                }
  
  
  
  
  
  
  
              }/*Filtro de Accesorios Pesca*/
              else if(this.categoria == 'accesorios'){
                console.log('Es la categoría accesorios ');
                this.subAccesorios = true;
                this.subAccesoriosAlmacenamiento = false;
                this.formRadioCategoriaPesca.patchValue({
                  categoriasPesca: this.categoria
                });
                this.formRadioSubAccesorios.patchValue({
                  accesoriosSub: ''
                });
  
              
  
                if(this.subcategoriaFiltrosAccesorios){
  
                  this.productosTienda = this.productosTienda.filter(producto =>{
                    return producto.subcategoria1 == this.subcategoriaFiltrosAccesorios
                  });
                  this.paginaActual = 1;
                  this.currentSizeItemsPerPage = 9;
                  this.totalProductos = this.productosTienda.length;
  
                  this.formRadioSubAccesorios.patchValue({
                    accesoriosSub: this.subcategoriaFiltrosAccesorios
                  });
  
                  this.formRadioSub2Accesorios.patchValue({
                    accesoriosSub2: ''
                  });
  
  
  
                  if(this.subcategoriaFiltrosAccesorios == 'almacenamiento'){
                    this.subAccesoriosAlmacenamiento = true;
  
                    if(this.accesoriosFiltros){
                      this.productosTienda = this.productosTienda.filter(producto => {
                        return producto.subcategoria2 == this.accesoriosFiltros
                      });
                      this.paginaActual = 1;
                      this.currentSizeItemsPerPage = 9;
                      this.totalProductos = this.productosTienda.length;
  
                      this.formRadioSub2Accesorios.patchValue({
                        accesoriosSub2: this.accesoriosFiltros
                      });
                    }
  
  
                  }
                  
  
                  
  
  
                }
  
              
              }
              /*Filtro de Navegación Pesca*/
              else if(this.categoria == 'navegacion'){
                this.cambioImagen.value = 'navegacion';
                console.log('Es la categoría navegación');
                this.catNavegacion = true;
                this.subAccesorios = false;
                this.formRadioCategoriaPesca.patchValue({
                  categoriasPesca: this.categoria
                });
            
            
                this.formRadioCatbNavegacion.patchValue({
                  categorias1: ''
                });
  
                if(this.navegacionFiltros){
       
                  console.log('Aqui estamos en navegacion');
                  this.datoEtiqueta = this.navegacionFiltros;
                  this.cambioImagen.value = this.navegacionFiltros;
                  console.log(this.navegacionFiltros);
                  this.productosTienda = this.productosTienda.filter(producto =>{
                    return producto.subcategoria1 == this.navegacionFiltros
                  });
                  this.paginaActual = 1;
                  this.currentSizeItemsPerPage = 9;
                  this.totalProductos = this.productosTienda.length;
                  this.formRadioCatbNavegacion.patchValue({
                    categorias1: this.navegacionFiltros
                  });
            
                  this.formRadioElectricosNavegacion.patchValue({
                    elecC1: ''
                  });
            
                  this.formRadioNavegacionAccesorios.patchValue({
                    accNavegacion: ''
                  });
            
                  if(this.navegacionFiltros == 'gps'){
                    console.log('Estamos en: ', this.navegacionFiltros);
                    this.datoEtiqueta = this.navegacionFiltros;
                    this.cambioImagen.value = this.navegacionFiltros;
            
            
            
            
                  }else if(this.navegacionFiltros == 'brujulas'){
                    console.log('Estamos en: ', this.navegacionFiltros);
                    this.datoEtiqueta = this.navegacionFiltros;
                    this.cambioImagen.value = this.navegacionFiltros;
            
            
            
            
                  }else if(this.navegacionFiltros == 'audio'){
                    console.log('Estamos en: ', this.navegacionFiltros);
                    this.datoEtiqueta = this.navegacionFiltros;
                    this.cambioImagen.value = this.navegacionFiltros;
            
            
            
                  }else if(this.navegacionFiltros == 'electricos'){
                    console.log('Estamos en: ', this.navegacionFiltros);
                    this.navElectrico = true;
                    if(this.electricosFiltros){
                      this.productosTienda = this.productosTienda.filter(producto =>{
                        return producto.subcategoria2 == this.electricosFiltros;
                      });
                
                      this.formRadioElectricosNavegacion.patchValue({
                        elecC1: this.electricosFiltros
                      });
            
                  }
                }else if(this.navegacionFiltros == 'plomeria'){
                    console.log('Estamos en: ', this.navegacionFiltros);
                    this.datoEtiqueta = this.navegacionFiltros;
                    this.cambioImagen.value = this.navegacionFiltros;
            
            
            
                  }else if(this.navegacionFiltros == 'bombas'){
                    console.log('Estamos en: ', this.navegacionFiltros);
                    this.datoEtiqueta = this.navegacionFiltros;
                    this.cambioImagen.value = this.navegacionFiltros;
            
            
            
                  }else if(this.navegacionFiltros == 'iluminacion'){
                    console.log('Estamos en: ', this.navegacionFiltros);
                    this.datoEtiqueta = this.navegacionFiltros;
                    this.cambioImagen.value = this.navegacionFiltros;
            
            
            
                  }else if(this.navegacionFiltros == 'motor'){
                    console.log('Estamos en: ', this.navegacionFiltros);
                    this.datoEtiqueta = this.navegacionFiltros;
                    this.cambioImagen.value = this.navegacionFiltros;
            
            
            
                  }else if(this.navegacionFiltros == 'accesorios'){
                    console.log('Entre aqui en accesorios puta madreee');
                    this.cambioImagen.value = 'navegacionAccesorios';
                    this.datoEtiqueta = this.navegacionFiltros;
                    
                    this.navAccesorios = true;
                    if(this.navAccesoriosFiltros){
                      this.productosTienda = this.productosTienda.filter(producto =>{
                        return producto.subcategoria2 == this.navAccesoriosFiltros
                      });
                      this.paginaActual = 1;
                      this.currentSizeItemsPerPage = 9;
                      this.totalProductos = this.productosTienda.length;
                
                      this.formRadioNavegacionAccesorios.patchValue({
                        accNavegacion: this.navAccesoriosFiltros
                      });
                
                    }
            
                  }
            
                }
              }
  
  
  
  
  
  
              
             
              
         
              /*Filtro de ropa Pesca*/
              else if(this.categoria == 'ropa'){
                this.cambioImagen.value = 'ropa';
                this.datoEtiqueta = this.categoria;
                console.log('Es la categoría de ropa we');
                this.ropaPesca = true;
                this.formRadioCategoriaPesca.patchValue({
                  categoriasPesca: this.categoria
                });
  
                this.formRadioRopaPesca.patchValue({
                  ropaFishing: ''
                });
  
                if(this.ropaPescaFiltro){
                  this.datoEtiqueta = this.ropaPescaFiltro;
                  this.productosTienda = this.productosTienda.filter(producto =>{
                    return producto.subcategoria1 == this.ropaPescaFiltro
                  });

                  this.paginaActual = 1;
                  this.currentSizeItemsPerPage = 9;
                  this.totalProductos = this.productosTienda.length;
  
                  this.formRadioRopaPesca.patchValue({
                    ropaFishing: this.ropaPescaFiltro
                  });
                  if(this.ropaPescaFiltro == 'accesorios'){
                    
                    this.ropaPescaAccesorios = true;
                    
                    this.formRadioAccesoriosRopaPesca.patchValue({
                      ropaAccesoriosFishing: ''
                    });
  
                    if(this.ropaPescaAccesoriosFiltros){
                      this.datoEtiqueta = this.ropaPescaAccesoriosFiltros;
                      this.productosTienda = this.productosTienda.filter(producto =>{
                        return producto.subcategoria2 == this.ropaPescaAccesoriosFiltros
                      });

                      this.paginaActual = 1;
                      this.currentSizeItemsPerPage = 9;
                      this.totalProductos = this.productosTienda.length;
  
                      this.formRadioAccesoriosRopaPesca.patchValue({
                        ropaAccesoriosFishing: this.ropaPescaAccesoriosFiltros
                      });
  
                    }
  
                  }
                }
  
              }
              
              
              
              
              
              
              
              /*Filtro de Lineas*/
              else if(this.categoria =='lineas'){
                this.cambioImagen.value  = this.categoria;
                this.datoEtiqueta = this.categoria;
                this.lineasPesca = true;
                console.log('Es la categoría lineas');
                this.formRadioCategoriaPesca.patchValue({
                  categoriasPesca: this.categoria
                });
                
                this.formRadioLineasPesca.patchValue({
                  lineasFishing: ''
                });
  
                if(this.lineasFiltro){
                  this.datoEtiqueta = this.lineasFiltro;
                  this.lineasPesca = true;
                  this.productosTienda = this.productosTienda.filter(producto =>{
                    return producto.subcategoria1 == this.lineasFiltro
                  });

                  this.paginaActual = 1;
                  this.currentSizeItemsPerPage = 9;
                  this.totalProductos = this.productosTienda.length;
  
                  this.formRadioLineasPesca.patchValue({
                    lineasFishing:this.lineasFiltro
                  });
  
                }
  
              }
              
              
              
              
              
              
              /*Filtro de Snorkel Pesca*/
              else if(this.categoria == 'snorkel'){
                console.log('Es la cateoría snorkel');
                this.datoEtiqueta = this.categoria;
                this.cambioImagen.value = this.categoria;
  
                
                this.snorkelPesca = true;
                this.formRadioCategoriaPesca.patchValue({
                  categoriasPesca: this.categoria
                });
  
                this.formRadioSnorkelPesca.patchValue({
                  snorkelFishing: ''
                });
  
                if(this.snorkelFiltro){
                  this.datoEtiqueta = this.snorkelFiltro;
                 
             
                  this.productosTienda = this.productosTienda.filter(producto => {
                    return producto.subcategoria1 == this.snorkelFiltro
                  });

                  this.paginaActual = 1;
                  this.currentSizeItemsPerPage = 9;
                  this.totalProductos = this.productosTienda.length;
  
                  this.formRadioSnorkelPesca.patchValue({
                    snorkelFishing: this.snorkelFiltro
                  });
  
                }
              }
              
              
              
              
              /*Filtro de Buceo Pesca*/
              else if(this.categoria == 'buceo'){
                this.cambioImagen.value = this.categoria;
                this.buceoPesca = true;
                console.log('Es la categoria buceo');
                this.formRadioCategoriaPesca.patchValue({
                  categoriasPesca: this.categoria
                });
  
                this.formRadioBuceoPesca.patchValue({
                  buceoFishing: ''
                });
  
                if(this.buceoFiltro){
                  this.datoEtiqueta = this.buceoFiltro;
                
                  this.formRadioBuceoPesca.patchValue({
                    buceoFishing: this.buceoFiltro
                  });
                }
               
              }
              
               /*Filtro de Kayaks*/
              else if(this.categoria == 'kayaks'){
                this.kayaksPesca = true;
                this.cambioImagen.value = this.categoria;
                console.log('Estas son los kayaks');
                this.formRadioCategoriaPesca.patchValue({
                  categoriasPesca: this.categoria
                });
  
                this.formRadioKayaksPesca.patchValue({
                  kayakFishing: ''
                });
  
                if(this.kayakFiltro){
                  this.datoEtiqueta = this.kayakFiltro;
                  this.productosTienda = this.productosTienda.filter(producto =>{
                    return producto.subcategoria1 == this.kayakFiltro
                  });
                  this.paginaActual = 1;
                  this.currentSizeItemsPerPage = 9;
                  this.totalProductos = this.productosTienda.length;
  
                  this.formRadioKayaksPesca.patchValue({
                    kayakFishing: this.kayakFiltro
                  });
  
                  this.formRadioKayaksCatPesca.patchValue({
                    kayakCatFishing: ''
                  });
  
                  if(this.kayakFiltro == 'kayaks'){
                    
                    this.kayaksCatPesca = true;
                    if(this.kayakCatFiltro){
                      this.datoEtiqueta = this.kayakCatFiltro;
                      this.productosTienda = this.productosTienda.filter(producto =>{
                        return producto.subcategoria2 == this.kayakCatFiltro
                      });
                      this.paginaActual = 1;
                      this.currentSizeItemsPerPage = 9;
                      this.totalProductos = this.productosTienda.length;
  
                      this.formRadioKayaksCatPesca.patchValue({
                        kayakCatFishing: this.kayakCatFiltro
                      });
                    }
  
  
                  }
  
                }
              }
  
              /*Esta sección se ejecuta cuando no se tiene ninguna categoria*/
            }else{
              this.formRadioCategoriaPesca.patchValue({
                categoriasPesca:null, 
                // formControlName2: myValue2 (can be omitted)
              });
  
              console.log('There is not category selected');
            }




          }else if(this.clasificacion == 'Caceria'){
            
            
            /*Elementos que se bloquean de PESCA al entrar a Cacería*/
            this.categoriasPesca = false;
            this.marcasPescaDIV = false;
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
            this.subPistolas = false;
            this.subRiflesAccesorios = false;
            this.subArqueria = false;
            this.subAccesoriosCaceria = false;
            this.subRopaCaceria = false;
            this.paginaActual = 1;
            this.currentSizeItemsPerPage = 9;
            this.totalProductos = this.productosTienda.length;
            /*=============================================================================0*/
            
            this.categoriasCaceria = true;
            this.cambioImagen.value = 'caceria'
             /*Permite la modificación del controlador de elementos en el FormGroup */
            this.formRadioClasificacion.patchValue({
              clasificaciones: this.clasificacion, 
              // formControlName2: myValue2 (can be omitted)
            });

            this.formRadioCategoriaCaceria.patchValue({
              categoriasCaceria: ''
            });

            if(this.categoriasCaceria1){
              this.datoEtiqueta = this.categoriasCaceria1;
              this.cambioImagen.value = this.categoriasCaceria1;
              
              this.productosTienda = this.productosTienda.filter(producto =>{
                return producto.categoria == this.categoriasCaceria1
              });
              this.paginaActual = 1;
              this.currentSizeItemsPerPage = 9;
              this.totalProductos = this.productosTienda.length;
             

              this.formRadioCategoriaCaceria.patchValue({
                categoriasCaceria: this.categoriasCaceria1
              });


              this.formRadioSubRifles.patchValue({
                caceriaRifles: ''
              });

              this.formRadioSubPistolas.patchValue({
                caceriaPistolas: ''
              });

              if(this.categoriasCaceria1 == 'rifles'){
                
                this.subRifles = true;
                this.subPistolas = false;
                this.subRiflesAccesorios = false;
                this.subArqueria = false;
                this.subCuchilleria = false;
                this.subAccesoriosCaceria = false;
                this.subRopaCaceria = false;
                if(this.riflesFiltro){
                  this.datoEtiqueta = this.riflesFiltro;
                  this.cambioImagen.value = this.riflesFiltro;
                  this.formRadioSubRifles.patchValue({
                    caceriaRifles: this.riflesFiltro
                  });

                  this.formRadioSubRiflesAccesorios.patchValue({
                    caceriaRiflesAccesorios : ''
                  });

                  console.log('Me llega este valor we', this.riflesFiltro);
                  this.productosTienda = this.productosTienda.filter(producto =>{
                    return producto.subcategoria1 == this.riflesFiltro
                  });
                  this.paginaActual = 1;
                  this.currentSizeItemsPerPage = 9;
                  this.totalProductos = this.productosTienda.length;

                  if(this.riflesFiltro =='accesorios'){
                    this.cambioImagen.value = 'accesoriosCaceria'
                    this.subRiflesAccesorios = true;
                    if(this.subRiflesAccesoriosFiltro){
                      this.datoEtiqueta = this.subRiflesAccesoriosFiltro;
                      this.productosTienda = this.productosTienda.filter(producto =>{
                        return producto.subcategoria2 == this.subRiflesAccesoriosFiltro
                      });

                      this.paginaActual = 1;
                      this.currentSizeItemsPerPage = 9;
                      this.totalProductos = this.productosTienda.length;
                      this.formRadioSubRiflesAccesorios.patchValue({
                        caceriaRiflesAccesorios :this. subRiflesAccesoriosFiltro
                      })

                    }
                  }
                }



              }else if(this.categoriasCaceria1 == 'pistolas'){
                this.subRifles = false;
                this.subPistolas = true;
                this.subRiflesAccesorios = false;
                this.subArqueria = false;
                this.subCuchilleria = false;
                this.subAccesoriosCaceria = false;
                this.subRopaCaceria = false;
                if(this.subcategoriaPistolasFiltros){
                  this.datoEtiqueta = this.subcategoriaPistolasFiltros;
                  this.productosTienda = this.productosTienda.filter(producto =>{
                    return producto.subcategoria1 == this.subcategoriaPistolasFiltros
                  });

                  this.paginaActual = 1;
                  this.currentSizeItemsPerPage = 9;
                  this.totalProductos = this.productosTienda.length;
                  this.formRadioSubPistolas.patchValue({
                    caceriaPistolas: this.subcategoriaPistolasFiltros
                  });
                  console.log('Si ando en pistolas');
                  if(this.subcategoriaPistolasFiltros == 'accesorios'){
                    this.subAccesoriosPistolas = true;
                    this.formRadioSubAccesoriosPistolas.patchValue({
                      caceriaAccesoriosPistolas: ''
                    });

                    if(this.subcategoriaAccesoriosPistolasFiltros){
                      this.datoEtiqueta = this.subcategoriaAccesoriosPistolasFiltros;
                      this.productosTienda = this.productosTienda.filter(producto =>{
                        return producto.subcategoria2 == this.subcategoriaAccesoriosFiltros
                      });
                      this.formRadioSubAccesoriosPistolas.patchValue({
                        caceriaAccesoriosPistolas: this.subcategoriaAccesoriosPistolasFiltros
                      });

                    }
                  }

                }

              }else if(this.categoriasCaceria1 == 'arqueria'){
                this.subRifles = false;
                this.subPistolas = false;
                this.subRiflesAccesorios = false;
                this.subArqueria = true;
                this.subCuchilleria = false;
                this.subAccesoriosCaceria = false;
                this.subRopaCaceria = false;
                this.formRadioSubArqueria.patchValue({
                  caceriaArqueria: ''
                });
                if(this.subcategoriaArqueriaFiltros){
                  this.datoEtiqueta = this.subcategoriaArqueriaFiltros;
                  this.cambioImagen.value = this.subcategoriaArqueriaFiltros;
                  this.productosTienda = this.productosTienda.filter(producto =>{
                    return producto.subcategoria1 == this.subcategoriaArqueriaFiltros
                  });

                  this.paginaActual = 1;
                  this.currentSizeItemsPerPage = 9;
                  this.totalProductos = this.productosTienda.length;

                  this.formRadioSubArqueria.patchValue({
                    caceriaArqueria: this.subcategoriaArqueriaFiltros
                  });
                }


              }else if(this.categoriasCaceria1 == 'cuchilleria'){
                
                this.subRifles = false;
                this.subPistolas = false;
                this.subRiflesAccesorios = false;
                this.subArqueria = false;
                this.subCuchilleria = true;
                this.subAccesoriosCaceria = false;
                this.subRopaCaceria = false;

                this.formRadioSubCuchilleria.patchValue({
                  caceriaCuchilleria: ''
                });
                if(this.subcategoriaCuchilleriaFiltros){
                  this.datoEtiqueta = this.subcategoriaCuchilleriaFiltros;
                  this.productosTienda = this.productosTienda.filter( producto =>{
                    return producto.subcategoria1 == this.subcategoriaCuchilleriaFiltros
                  });

                  this.paginaActual = 1;
                  this.currentSizeItemsPerPage = 9;
                  this.totalProductos = this.productosTienda.length;

                  this.formRadioSubCuchilleria.patchValue({
                    caceriaCuchilleria: this.subcategoriaCuchilleriaFiltros
                  });
                }
                


              }else if(this.categoriasCaceria1 == 'accesorios'){
                this.cambioImagen.value = 'accesoriosCaceria';
                this.subRifles = false;
                this.subPistolas = false;
                this.subRiflesAccesorios = false;
                this.subArqueria = false;
                this.subCuchilleria = false;
                this.subAccesoriosCaceria = true;
                this.subRopaCaceria = false;

                this.formRadioSubAccesoriosCaceria.patchValue({
                  caceriaAccesorios: ''
                });
                if(this.subcategoriaAccesoriosFiltros){
                  this.datoEtiqueta = this.subcategoriaAccesoriosFiltros;
                  this.productosTienda = this.productosTienda.filter( producto =>{
                    return producto.subcategoria1 == this.subcategoriaAccesoriosFiltros
                  });

                  this.paginaActual = 1;
                  this.currentSizeItemsPerPage = 9;
                  this.totalProductos = this.productosTienda.length;
                  this.formRadioSubAccesoriosCaceria.patchValue({
                    caceriaAccesorios: this.subcategoriaAccesoriosFiltros
                  });

                }
                

              }else if(this.categoriasCaceria1 == 'ropa'){
                this.subRifles = false;
                this.subPistolas = false;
                this.subRiflesAccesorios = false;
                this.subArqueria = false;
                this.subCuchilleria = false;
                this.subAccesoriosCaceria = false;
                this.subRopaCaceria = true;
                this.formRadioSubRopaCaceria.patchValue({
                  caceriaRopa: ''
                });
                if(this.subcategoriaRopaCaceriaFiltros){
                  this.datoEtiqueta = this.subcategoriaRopaCaceriaFiltros;
                  this.productosTienda = this.productosTienda.filter(producto =>{
                    return producto.subcategoria1 == this.subcategoriaRopaCaceriaFiltros
                  });

                  this.paginaActual = 1;
                  this.currentSizeItemsPerPage = 9;
                  this.totalProductos = this.productosTienda.length;
                  this.formRadioSubRopaCaceria.patchValue({
                    caceriaRopa: this.subcategoriaRopaCaceriaFiltros
                  });

                }


              }

            }
            
          }

        

          /*Esta seccción se ejecuta cuando no se tiene ninguna clasificación ni ninguna otra información*/

        }else if(this.busqueda){
          this.datoEtiqueta = this.busqueda;
          this.cambioImagen.value = "busqueda";
          console.log(this.busqueda);
          let productosCoincidencia = [];
          this.productosTienda = this._productosTienda.getProductos();
          this.productosTienda.forEach(elemento =>{
              console.log(elemento.nombre.toLowerCase().indexOf(this.busqueda) > -1);
              if(elemento.clasificacion.toLowerCase().indexOf(this.busqueda) > -1 || elemento.nombre.toLowerCase().indexOf(this.busqueda) > -1 || elemento.categoria.toLowerCase().indexOf(this.busqueda) > -1
              || elemento.subcategoria1.toLowerCase().indexOf(this.busqueda) > -1 || elemento.subcategoria2.toLowerCase().indexOf(this.busqueda) > -1 ){
                productosCoincidencia.push(elemento);
              }
              
              /*if(elemento.nombre.toLowerCase().indexOf(this.busqueda.toLowerCase()) > -1){
                console.log(elemento);
              }*/
              
          })
          console.log("=============================ESTOS SON LOS PRODUCTOS QUE QUERIAS====================================");
          console.log(productosCoincidencia);
          this.productosTienda = productosCoincidencia;
          this.getImage(this.productosTienda);
        
        }
        
        else{
        
       
          this.datoEtiqueta = '';
          this.productosTienda = this._productosTienda.getProductos();
          this.paginaActual = 1;
          this.currentSizeItemsPerPage = 15;
          this.totalProductos = this.productosTienda.length;
          this.cambioImagen.value = 'vacio';
          this.getImage(this.productosTienda);
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

  public addCart(dato){
    console.log(this.productosCarrito);
    let datoInsertar = dato;
    if(this.productosCarrito.includes(datoInsertar)){

    }else{
      this.productosCarrito.push(datoInsertar);
      this.openModalCarrito(this.productosCarrito);
      console.log(this.productosCarrito);
    }
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



