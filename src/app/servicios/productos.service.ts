import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Observer, Subscription, fromEvent, of, from, interval, concat, throwError, BehaviorSubject, Subject} from 'rxjs';
import { concatMap, filter, map, shareReplay, switchMap, tap, delay, mergeMap, mapTo, merge, catchError, finalize, pairwise} from 'rxjs/operators';
import { Router, RoutesRecognized, NavigationEnd, NavigationStart} from '@angular/router'



@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  public api = "https://localhost:4000";



  public subjectRefresh = new Subject<void>();
  public subjectRefreshPrueba = new BehaviorSubject<boolean>(null);
  public subjectRefreshWishList = new BehaviorSubject<boolean>(null);
  public subjectRefreshCartList = new BehaviorSubject<boolean>(null);
  public subjectUrlNumber = new BehaviorSubject<number>(null);





  public urlPrevious:any;
  public urlAfter:any;
  public behaviorRoute = new BehaviorSubject<any>(null);
  public behaviorRouteCurrent = new BehaviorSubject<any>(null);

  /*Creamos un behavior Subject que guardara el estado para generar la compra, empezara con valor null.*/
  public BehaviorsubjectRefresCarritoCompras = new BehaviorSubject<boolean>(null);
  public behSubCompraCompletada = new BehaviorSubject<boolean>(null);

  constructor(private http:HttpClient, private router: Router) { 


  }



  get subjectUrlN(){
    return this.subjectUrlNumber;
  }


  get subjectRefreshWish(){
    return this.subjectRefreshWishList;
  }


  get subjectRefreshCartListS(){
    return this.subjectRefreshCartList;
  }


  getLasRoute(){
    return this.router.events.pipe(filter(e => e instanceof NavigationEnd), pairwise());
  }

  /*Llamadas para la sección de Inicio Productos*/

  getValorCompra(){
    return localStorage.getItem('valorCompra');
  }


  getPurchase(){
    return localStorage.getItem('purchaseP');
  }



  getProductos_API_Nuevos(){
    return this.http.get(`${this.api}/nuevos`)
  }

  getProductos_API_Destacados(){
    return this.http.get(`${this.api}/destacados`)
  }

  getProductos_API_Mas_vendidos(){
    return this.http.get(`${this.api}/masVendidos`)
  }


  getProductos_API_YellowTail(){
    return this.http.get(`${this.api}/yellowTail`)
  }


  /*Llamadas para la sección de pesca*/

  getProductosPesca_API_Nuevos(){
    return this.http.get(`${this.api}/pesca/nuevos`).pipe(
      catchError(error => throwError(error))
    );
  }

  getProductosPesca_API_Destacados(){
    return this.http.get(`${this.api}/pesca/destacados`).pipe(
      catchError(error => throwError(error))
    );
  }

  getProductosPesca_API_MasVendidos(){
    return this.http.get(`${this.api}/pesca/masVendidos`).pipe(
      catchError(error => throwError(error))
    );
  }

  getProductosPesca_API_YellowTail(){
    return this.http.get(`${this.api}/pesca/yellowTail`).pipe(
      catchError(error => throwError(error))
    );
  }

  /*Llamadas para la sección de Cacería*/


  getProductosCaceria_API_Nuevos(){
    return this.http.get(`${this.api}/caceria/nuevos`).pipe(
      catchError(error => throwError(error))
    );
  }

  getProductosCaceria_API_Destacados(){
    return this.http.get(`${this.api}/caceria/destacados`).pipe(
      catchError(error => throwError(error))
    );
  }

  getProductosCaceria_API_MasVendidos(){
    return this.http.get(`${this.api}/caceria/masVendidos`).pipe(
      catchError(error => throwError(error))
    );
  }


  /*Llamadas para las acciones de la tienda*/
  
  getProductos_tienda():Observable<any>{
    console.log('Entramos a tienda raro')
    return this.http.get(`${this.api}/tiendaPrueba/dataTienda`).pipe(
      shareReplay(),
      catchError(error => throwError(error))
    );
  } 


  getProductos_tiendaPages(pagina):Observable<any>{
    console.log('This is getProductos_tiendaPages', pagina)
    return this.http.get(`${this.api}/tiendaPrueba/dataTienda/${pagina}`).pipe(
      shareReplay(),
      catchError(error => throwError(error))
    )
  }

  /*Llamada para producto Individual*/

  getProductos_Individual(id){
    console.log('This is the ID', id);
    return this.http.get(`${this.api}/productoIndividual/${id}`);
  }


  /*Llamada para lista de deseos, estas peticiones deberán contener el usuarioId para poder realizar las peticiones Individules*/

  getProductosBySearch(dato){
    console.log('This is the dato', dato)
    return this.http.get(`${this.api}/searchProduct/${dato}`);
  }


  getProductosBy_clasificacion(clasificacion, paginacion):Observable<any>{
    console.log('this is some data i get', clasificacion, paginacion);
    return this.http.get(`${this.api}/pruebatienda/${clasificacion}/${paginacion}`);
    
  }



  getProductosBy_filter1(clasificacion, categoria, filter1, paginacion):Observable<any>{
    return this.http.get(`${this.api}/filter1F/${clasificacion}/${categoria}/${filter1}/${paginacion}`).pipe(
      catchError(error => throwError(error))
    );
  }


  getProductosBy_clasificacionAndCategoria(clasificacion, categoria, paginacion):Observable<any>{
    console.log('this is some data i get', clasificacion, categoria, paginacion);
    return this.http.get(`${this.api}/categoriaFiltro/${clasificacion}/${categoria}/${paginacion}`).pipe(
      catchError(error => throwError(error))
    )}





  getProductosLista_deseos(dato){
    return this.http.get(`${this.api}/wishList/getDeseos/${dato}`).pipe(
      catchError(error => throwError(error))
    );
  }


  removeElementoLista_deseos(datoP, usuarioIdentificador){
    console.log('Recibi', datoP, usuarioIdentificador);
    console
    const dato = {
      usuario_id: usuarioIdentificador,
      id: datoP.id
    }
    console.log(dato.usuario_id, dato.id)
    return this.http.delete(`${this.api}/wishList/eliminarProducto/${dato.usuario_id}/${dato.id}`).pipe(
      tap(() => {
        this.subjectRefresh.next();
        this.subjectRefreshPrueba.next(true);
        this.subjectRefreshWishList.next(true);
      })
    )
  }


  /*Llamadas del carrito de compras*/

    getProductos_carrito():Observable<any>{
      return this.http.get<any>(`${this.api}/carrito/getCarrito`).pipe(
        //map(x => x.productos.map(x => x.json_build_object)),
        catchError(error => throwError(error)),
        //map(x => x[0]['json_build_object']),
        shareReplay(),
        //catchError(this.handleError)
      );
    }

    getProductos_carrito2():Observable<any>{
      return this.http.get(`${this.api}/carrito/getCarrito`).pipe(
        catchError(error => throwError(error)),
        shareReplay()
        //catchError(this.handleError)
      );
    }



   


   
    
    /*BOTONES DE ADD WISHLIST*/

    



    /*EL METODO POST PRODUCTO_WISHLIST 
    Realiza la petición post al servidor, inserta el dato, pero también ejecuta un tap, 
    tap (que sirve para ejecutar acciones colaterales) para emitir valores gracias al método next del Subject.
    EL SUBJECT lo que hará será almacenar el ultimo valor emitido que se le pase a este mismo, eso se hará asignandole un valor a travez del 
    behaviorS

    */
    postProducto_wishList(dato, id){

      return this.http.post(`${this.api}/addWishtList/prueba`, {'_id': dato.id, 'idUser': id}).pipe(
        tap(() => {
          this.subjectRefresh.next();
          this.subjectRefreshPrueba.next(true);
          this.subjectRefreshWishList.next(true);
      }),
        catchError(error => throwError(error => {
          console.log(error);
        })),
       

      );
    }

    get behaviorS(){
      return this.subjectRefresh;
    }

    /*BOTONES DE ADD TO CART_LIST*/
    postProducto_cartList(dato, dato2){
      console.log('This is the dato and the dato2', dato, dato2);
      return this.http.post(`${this.api}/addCart/prueba2`, {'clientId':dato2, 'id_producto': dato.id, 'precio': dato.precio, 'cantidad_prod': dato.cantidad_prod}).pipe(
        catchError(error => throwError(error)),
        tap(() => {
          this.subjectRefresh.next();
          this.subjectRefreshPrueba.next(true);
          this.subjectRefreshWishList.next(true);
          this.subjectRefreshCartList.next(true);
        })
      );
    }


    updatePrecioCarrito(valor, producto){
      console.log('This is the dato', valor);
      return this.http.put(`${this.api}/updateProducto/productPerprice`, {'cantidad': valor, 'idProduct': producto.id_producto, 'precio': producto.precio_producto})
      .pipe(
        tap(() => {
          this.subjectRefresh.next();
        })      
      );
    }


    postProductoNow(datoProducto){
      console.log('Llego al postProductoNow', datoProducto);
      const cantidad = parseInt(datoProducto.cantidad)
      console.log('This is cantidad', typeof(cantidad), cantidad);
      return this.http.post(`${this.api}/addCartNow/buyNow/`, {'id_producto': datoProducto.id, 'cantidad_producto': cantidad, 'precio': datoProducto.precio});
    }




    postProductoPrueba(dato){
      console.log('Acabo de recibir este dato', dato);
      return this.http.post(`${this.api}/addCartPrueba/pruebaI`,{'id_producto': dato, 'clientId': 1, 'cartId': 2});
    }


    insertTotalCart(total, carrito){
      console.log(total, carrito);
      return this.http.put(`${this.api}/carrito/insertTotales`, {'total': total, 'idCarrito': carrito});
    }



    removeElemento_carritoCompras(dato){
      return this.http.delete(`${this.api}/carrito/deleteElemento/${dato.id_carrito}/${dato.id_producto}`).pipe(
        tap(() => { 
          this.subjectRefresh.next();
          this.subjectRefreshPrueba.next(true);
          this.subjectRefreshCartList.next(true);
      })
      );
    }

    move_from_cart_to_wish(dato){
      console.log('Got this información', dato);
      return this.http.delete(`${this.api}/carrito/moveWishList/${dato.id_carrito}/${dato.id_producto}`).pipe(
        tap(() => {
          this.subjectRefresh.next();
          this.subjectRefreshPrueba.next(true);
          this.subjectRefreshWishList.next(true);
          this.subjectRefreshCartList.next(true);
      })
      );
    }


    

    getProductosPedidos(){
      //console.log('This is the ID', id);
      return this.http.get(`${this.api}/pedidos/carritos/`);

    }

  getProductosWishList(){
    return [
      {
        sku: 12821,
        idProducto: 6597787788,
        nombre: "Ropa Jersey Caceria",
        modelo: "SENS662M",
        clasificacion: "Caceria",
        cantidad: 1,
        categoria: "ropa",
        subcategoria1: "jersey",
        subcategoria2: "",
        marca: "Yellow Tail",
        precio: 500.00,
        precio_antiguo: 1000.00,
        image: [{
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/productos/029319_1.png"
        },
        {
          idProducto: 132,
          secuencial: 2,
          url: "/assets/imagenes/paginaInicial/productos/029319_2.png"
        },
        {
          idProducto: 132,
          secuencial: 3,
          url: "/assets/imagenes/paginaInicial/productos/029319_3.png"
        },
        {
          idProducto: 132,
          secuencial: 4,
          url: "/assets/imagenes/paginaInicial/productos/029319_4.png"
        },
        {
          idProducto: 132,
          secuencial: 5,
          url: "/assets/imagenes/paginaInicial/productos/029319_5.png"
        },
       ],
        descuento: 0,
        nuevo: true,
        destacado: true,
        descripcion: "Caña de spinning para pesca en agua dulce, ideal para lances con señuelos de peso mediano, fabricada en TC24T que le brinda una característica para lograr grandes capturas. "

    },
      {
        sku: 12821,
        idProducto: 6577878988,
        nombre: "Ropa Caceria playeras",
        modelo: "SENS662M",
        clasificacion: "Caceria",
        cantidad: 1,
        categoria: "ropa",
        subcategoria1: "playeras",
        subcategoria2: "",
        marca: "Yellow Tail",
        precio: 500.00,
        precio_antiguo: 1000.00,
        image: [{
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/productos/029319_1.png"
        },
        {
          idProducto: 132,
          secuencial: 2,
          url: "/assets/imagenes/paginaInicial/productos/029319_2.png"
        },
        {
          idProducto: 132,
          secuencial: 3,
          url: "/assets/imagenes/paginaInicial/productos/029319_3.png"
        },
        {
          idProducto: 132,
          secuencial: 4,
          url: "/assets/imagenes/paginaInicial/productos/029319_4.png"
        },
        {
          idProducto: 132,
          secuencial: 5,
          url: "/assets/imagenes/paginaInicial/productos/029319_5.png"
        },
       ],
        descuento: 0,
        nuevo: true,
        destacado: true,
        descripcion: "Caña de spinning para pesca en agua dulce, ideal para lances con señuelos de peso mediano, fabricada en TC24T que le brinda una característica para lograr grandes capturas. "

    },
      {
        sku: 12821,
        idProducto: 65712212788,
        nombre: "accesorios mallas",
        modelo: "SENS662M",
        clasificacion: "Caceria",
        cantidad: 1,
        categoria: "accesorios",
        subcategoria1: "mallas",
        subcategoria2: "",
        marca: "Yellow Tail",
        precio: 500.00,
        precio_antiguo: 1000.00,
        image: [{
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/productos/029319_1.png"
        },
        {
          idProducto: 132,
          secuencial: 2,
          url: "/assets/imagenes/paginaInicial/productos/029319_2.png"
        },
        {
          idProducto: 132,
          secuencial: 3,
          url: "/assets/imagenes/paginaInicial/productos/029319_3.png"
        },
        {
          idProducto: 132,
          secuencial: 4,
          url: "/assets/imagenes/paginaInicial/productos/029319_4.png"
        },
        {
          idProducto: 132,
          secuencial: 5,
          url: "/assets/imagenes/paginaInicial/productos/029319_5.png"
        },
       ],
        descuento: 0,
        nuevo: true,
        destacado: true,
        descripcion: "Caña de spinning para pesca en agua dulce, ideal para lances con señuelos de peso mediano, fabricada en TC24T que le brinda una característica para lograr grandes capturas. "

    },
    {
      sku: 12821,
      idProducto: 87655,
      nombre: "Cuchilleria  machetes",
      modelo: "SENS662M",
      clasificacion: "Caceria",
      cantidad: 1,
      categoria: "cuchilleria",
      subcategoria1: "machetes",
      subcategoria2: "",
      marca: "Yellow Tail",
      precio: 500.00,
      precio_antiguo: 1000.00,
      image: [{
        idProducto: 762,
        secuencial: 1,
        url: "/assets/imagenes/paginaInicial/productos/029319_1.png"
      },
      {
        idProducto: 132,
        secuencial: 2,
        url: "/assets/imagenes/paginaInicial/productos/029319_2.png"
      },
      {
        idProducto: 132,
        secuencial: 3,
        url: "/assets/imagenes/paginaInicial/productos/029319_3.png"
      },
      {
        idProducto: 132,
        secuencial: 4,
        url: "/assets/imagenes/paginaInicial/productos/029319_4.png"
      },
      {
        idProducto: 132,
        secuencial: 5,
        url: "/assets/imagenes/paginaInicial/productos/029319_5.png"
      },
     ],
      descuento: 0,
      nuevo: true,
      destacado: true,
      descripcion: "Caña de spinning para pesca en agua dulce, ideal para lances con señuelos de peso mediano, fabricada en TC24T que le brinda una característica para lograr grandes capturas. "

  }

    ]
  }


  /*getProductos(){
    return this.http.get(`${this.api}/nuevos`);
  }*/


  getProductos(){
     return [
      {
        sku: 1051892,
        id: 1051892,
        nombre: "Kraken bait 300lx800lv",
        categoria: "aguasalada",
        clasificacion: "pesca",
        subcategoria1: 'señuelos',
        cantidad:1,
        modelo: "SENS662M",
        subcategoria2: 'jigging',
        marca: "magtrack",
        precio: 2252.00,
        precio_antiguo: 145000.30,
        image: [{
          idProducto:2,
          secuencial: 1,
          url: "/assets/imagenes/JPGconfondo/pruebas/037503_01.jpg",
         
        },
        {
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/JPGconfondo/pruebas/037504_01.jpg"
        },
        {
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/JPGconfondo/pruebas/033911_01.jpg"
        },
        {
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/JPGconfondo/052732_04.jpg"
        }
      ],
        descuento: 30,
        nuevo: true,
        destacado: false,
        descripcion: "El MagTrak presenta un diseño que permite que el señuelo nade recto y debajo de la superficie a velocidades de hasta 20 nudos.Señuelo Wahoo MagTrak ™ de alta velocidad:Cuerpo dinámico de 10 pulgadas con diseño para nadar de una manera que reproduce pequeños wahooTecnología HookMag con anzuelos de acero inoxidable serie 10/0 Sin problemas a altas velocidades, no se requiere plomo troleador o profundizador.",
        existencia: 10
      },
      {
        sku: 12821,
        id: 6597787788,
        nombre: "Visor silicon Ltv -004",
        modelo: "SENS662M",
        clasificacion: "Caceria",
        cantidad: 1,
        categoria: "aguadulce",
        subcategoria1: "jersey",
        subcategoria2: "",
        marca: "Yellow Tail",
        precio: 500.00,
        precio_antiguo: 1000.00,
        image: [{
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/JPGconfondo/pruebas/033930_01.jpg"
        },
        {
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/JPGconfondo/pruebas/033931_01.jpg"
        }
       ],
        descuento: 40,
        nuevo: true,
        destacado: false,
        existencia: 10,
        descripcion: "Caña de spinning para pesca en agua dulce, ideal para lances con señuelos de peso mediano, fabricada en TC24T que le brinda una característica para lograr grandes capturas. "

    },
      {
        sku: 12821,
        id: 6577878988,
        nombre: "Caña hilo trolling 5-6ft",  
        modelo: "SENS662M",
        clasificacion: "Caceria",
        cantidad: 1,
        categoria: "lineas",
        subcategoria1: "playeras",
        subcategoria2: "",
        marca: "Yellow Tail",
        precio: 500.00,
        precio_antiguo: 1000.00,
        image: [{
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/JPGconfondo/pruebas/036638_01.jpg"
        },
        {
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/JPGconfondo/pruebas/037063_01.jpg"
        }
       ],
        descuento: 0,
        nuevo: false,
        destacado: true,
        existencia: 10,
        descripcion: "Caña de spinning para pesca en agua dulce, ideal para lances con señuelos de peso mediano, fabricada en TC24T que le brinda una característica para lograr grandes capturas. "

    },
      {
        sku: 12821,
        id: 65712212788,
        nombre: "Jersey Escamas dama XL",
        modelo: "SENS662M",
        clasificacion: "Caceria",
        cantidad: 1,
        categoria: "embarcaciones",
        subcategoria1: "mallas",
        subcategoria2: "",
        marca: "Yellow Tail",
        precio: 500.00,
        precio_antiguo: 1000.00,
        image: [{
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/JPGconfondo/pruebas/032155_01 copia 3.jpg"
        },
        {
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/JPGconfondo/pruebas/038745_01 copia 3.jpg"
        
        },
        {
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/JPGconfondo/052927_03.jpg"
       
        },
        {
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/JPGconfondo/052927_04.jpg"
       
        }
       ],
        descuento: 0,
        nuevo: false,
        destacado: false,
        existencia: 10,
        descripcion: "Caña de spinning para pesca en agua dulce, ideal para lances con señuelos de peso mediano, fabricada en TC24T que le brinda una característica para lograr grandes capturas. "

    },
       
      {
        sku: 12821,
        id: 9776,
        nombre: "Google fat nat300",
        modelo: "SENS662M",
        clasificacion: "Caceria",
        cantidad: 1,
        categoria: "buceorec",
        subcategoria1: "termos",
        subcategoria2: "",
        marca: "Yellow Tail",
        precio: 500.00,
        precio_antiguo: 1000.00,
        image: [{
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/JPGconfondo/pruebas/043005_02.jpg"
        },
        {
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/JPGconfondo/pruebas/043005_01.jpg"
        },
        {
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/JPGconfondo/045332_03.jpg"
        }
        
       ],
        descuento: 70,
        nuevo: false,
        destacado: true,
        descripcion: "Caña de spinning para pesca en agua dulce, ideal para lances con señuelos de peso mediano, fabricada en TC24T que le brinda una característica para lograr grandes capturas. ",
        existencia: 10
        
      },
      {
        sku: 12821,
        id: 88899,
        nombre: "Descorc Crane 3/0 225lb",
        modelo: "SENS662M",
        clasificacion: "Caceria",
        cantidad: 1,
        categoria: "ropa",
        subcategoria1: "hieleras",
        subcategoria2: "",
        marca: "Yellow Tail",
        precio: 500.00,
        precio_antiguo: 1000.00,
        image: [{
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/JPGconfondo/pruebas/038755_01 copia 3.jpg"
        },
        {
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/JPGconfondo/pruebas/038755_02 copia 3.jpg"
        },
        {
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/JPGconfondo/048795_03.jpg"
        },
        {
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/JPGconfondo/048795_04.jpg"
        }
      
       ],
        descuento: 0,
        nuevo: true,
        destacado: true,
        existencia: 10,
        descripcion: "Caña de spinning para pesca en agua dulce, ideal para lances con señuelos de peso mediano, fabricada en TC24T que le brinda una característica para lograr grandes capturas. "

    },
      {
        sku: 12821,
        id: 766,
        nombre: "Kayak mini rojo, negro/gris",
        modelo: "SENS662M",
        clasificacion: "Caceria",
        cantidad: 1,
        categoria: "accesorios",
        subcategoria1: "mochilas",
        subcategoria2: "",
        marca: "Yellow Tail",
        precio: 500.00,
        precio_antiguo: 1000.00,
        image: [{
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/JPGconfondo/pruebas/043395_01 copia.jpg"
        },
        {
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/JPGconfondo/pruebas/043396_01 copia.jpg"
        }
        
       ],
        descuento: 0,
        nuevo: false,
        destacado: true,
        existencia: 10,
        descripcion: "Caña de spinning para pesca en agua dulce, ideal para lances con señuelos de peso mediano, fabricada en TC24T que le brinda una característica para lograr grandes capturas. "

    },
      {
        sku: 12821,
        id: 87655,
        nombre: "Jersey Marlin Cab",
        modelo: "SENS662M",
        clasificacion: "Caceria",
        cantidad: 1,
        categoria: "aguadulce",
        subcategoria1: "machetes",
        subcategoria2: "",
        marca: "Yellow Tail",
        precio: 500.00,
        precio_antiguo: 1000.00,
        image: [{
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/JPGconfondo/pruebas/051406_01.jpg"
        },
        {
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/JPGconfondo/pruebas/051407_01.jpg"
        },
        {
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/JPGconfondo/052976_03.jpg"
        },
        {
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/JPGconfondo/052976_04.jpg"
        }
       ],
        descuento: 10,
        nuevo: false,
        destacado: true,
        existencia: 10,
        descripcion: "Caña de spinning para pesca en agua dulce, ideal para lances con señuelos de peso mediano, fabricada en TC24T que le brinda una característica para lograr grandes capturas. "

    },
      {
        sku: 12821,
        id: 2368,
        nombre: "Kayak mini Cab verde/rojo/negro",
        modelo: "SENS662M",
        clasificacion: "Caceria",
        cantidad: 1,
        categoria: "aguasalada",
        subcategoria1: "navajas",
        subcategoria2: "",
        marca: "Yellow Tail",
        precio: 500.00,
        precio_antiguo: 1000.00,
        image: [
        {
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/JPGconfondo/053430_01.jpg"
        },
        {
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/JPGconfondo/053430_03.jpg"
        },
        {
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/JPGconfondo/053430_04.jpg"
        },
        {
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/JPGconfondo/053430_05.jpg"
        }
     
       ],
        descuento: 5,
        nuevo: true,
        destacado: true,
        existencia: 10,
        descripcion: "Caña de spinning para pesca en agua dulce, ideal para lances con señuelos de peso mediano, fabricada en TC24T que le brinda una característica para lograr grandes capturas. "

    },
     
  ]
  }



  getProductosNoB(){
    return [
     {
       sku: 1051892,
       id: 1051892,
       nombre: "Señuelo Mag Trak",
       categoria: "aguasalada",
       clasificacion: "pesca",
       subcategoria1: 'señuelos',
       subcategoria2: 'jigging',
       marca: "magtrack",
       precio: 2252.00,
       precio_antiguo: 124500.00,
       image: [{
        idProducto: 762,
        secuencial: 1,
        url: "/assets/imagenes/PNGsinfondo/043398_01.png"
      },
      {
        idProducto: 762,
        secuencial: 1,
        url: "/assets/imagenes/PNGsinfondo/043398_01.png"
      }
     ],
       descuento: 30,
       nuevo: true,
       destacado: true,
       descripcion: "El MagTrak presenta un diseño que permite que el señuelo nade recto y debajo de la superficie a velocidades de hasta 20 nudos.Señuelo Wahoo MagTrak ™ de alta velocidad:Cuerpo dinámico de 10 pulgadas con diseño para nadar de una manera que reproduce pequeños wahooTecnología HookMag con anzuelos de acero inoxidable serie 10/0 Sin problemas a altas velocidades, no se requiere plomo troleador o profundizador.",
       existencia: 10
     },
     {
       sku: 12821,
       id: 6597787788,
       nombre: "Ropa Jersey Caceria",
       modelo: "SENS662M",
       clasificacion: "Caceria",
       cantidad: 1,
       categoria: "aguadulce",
       subcategoria1: "jersey",
       subcategoria2: "",
       marca: "Yellow Tail",
       precio: 500.00,
       precio_antiguo: 1000.00,
       image: [{
         idProducto: 762,
         secuencial: 1,
         url: "/assets/imagenes/PNGsinfondo/051039_01.jpg"
       },
       {
         idProducto: 762,
         secuencial: 1,
         url: "/assets/imagenes/PNGsinfondo/042556_01.jpg"
       }
      ],
       descuento: 0,
       nuevo: true,
       destacado: true,
       existencia: 10,
       descripcion: "Caña de spinning para pesca en agua dulce, ideal para lances con señuelos de peso mediano, fabricada en TC24T que le brinda una característica para lograr grandes capturas. "

   },
     {
       sku: 12821,
       id: 6577878988,
       nombre: "Ropa Caceria playeras",  
       modelo: "SENS662M",
       clasificacion: "Caceria",
       cantidad: 1,
       categoria: "lineas",
       subcategoria1: "playeras",
       subcategoria2: "",
       marca: "Yellow Tail",
       precio: 500.00,
       precio_antiguo: 1000.00,
       image: [{
         idProducto: 762,
         secuencial: 1,
         url: "/assets/imagenes/PNGsinfondo/049812_01.jpg"
       },
       {
         idProducto: 762,
         secuencial: 1,
         url: "/assets/imagenes/PNGsinfondo/042556_01.jpg"
       }
      ],
       descuento: 0,
       nuevo: true,
       destacado: true,
       existencia: 10,
       descripcion: "Caña de spinning para pesca en agua dulce, ideal para lances con señuelos de peso mediano, fabricada en TC24T que le brinda una característica para lograr grandes capturas. "

   },
     {
       sku: 12821,
       id: 65712212788,
       nombre: "accesorios mallas",
       modelo: "SENS662M",
       clasificacion: "Caceria",
       cantidad: 1,
       categoria: "embarcaciones",
       subcategoria1: "mallas",
       subcategoria2: "",
       marca: "Yellow Tail",
       precio: 500.00,
       precio_antiguo: 1000.00,
       image: [{
         idProducto: 762,
         secuencial: 1,
         url: "/assets/imagenes/PNGsinfondo/046894_01.jpg"
       },
       {
         idProducto: 762,
         secuencial: 1,
         url: "/assets/imagenes/PNGsinfondo/042556_01.jpg"
       }
      ],
       descuento: 0,
       nuevo: true,
       destacado: true,
       existencia: 10,
       descripcion: "Caña de spinning para pesca en agua dulce, ideal para lances con señuelos de peso mediano, fabricada en TC24T que le brinda una característica para lograr grandes capturas. "

   },
      
     {
       sku: 12821,
       id: 9776,
       nombre: "accesorios   termos",
       modelo: "SENS662M",
       clasificacion: "Caceria",
       cantidad: 1,
       categoria: "buceorec",
       subcategoria1: "termos",
       subcategoria2: "",
       marca: "Yellow Tail",
       precio: 500.00,
       precio_antiguo: 1000.00,
       image: [{
         idProducto: 762,
         secuencial: 1,
         url: "/assets/imagenes/PNGsinfondo/044611_01.jpg"
       },
       {
         idProducto: 762,
         secuencial: 1,
         url: "/assets/imagenes/PNGsinfondo/042556_01.jpg"
       }
       
      ],
       descuento: 0,
       nuevo: true,
       destacado: true,
       descripcion: "Caña de spinning para pesca en agua dulce, ideal para lances con señuelos de peso mediano, fabricada en TC24T que le brinda una característica para lograr grandes capturas. ",
       existencia: 10
       
     },
     {
       sku: 12821,
       id: 88899,
       nombre: "accesorios  caceria hieleras",
       modelo: "SENS662M",
       clasificacion: "Caceria",
       cantidad: 1,
       categoria: "ropa",
       subcategoria1: "hieleras",
       subcategoria2: "",
       marca: "Yellow Tail",
       precio: 500.00,
       precio_antiguo: 1000.00,
       image: [{
         idProducto: 762,
         secuencial: 1,
         url: "/assets/imagenes/PNGsinfondo/043410_01.jpg"
       },
       {
         idProducto: 762,
         secuencial: 1,
         url: "/assets/imagenes/PNGsinfondo/042556_01.jpg"
       }
     
      ],
       descuento: 0,
       nuevo: true,
       destacado: true,
       existencia: 10,
       descripcion: "Caña de spinning para pesca en agua dulce, ideal para lances con señuelos de peso mediano, fabricada en TC24T que le brinda una característica para lograr grandes capturas. "

   },
     {
       sku: 12821,
       id: 766,
       nombre: "accesorios caceria  mochilas",
       modelo: "SENS662M",
       clasificacion: "Caceria",
       cantidad: 1,
       categoria: "accesorios",
       subcategoria1: "mochilas",
       subcategoria2: "",
       marca: "Yellow Tail",
       precio: 500.00,
       precio_antiguo: 1000.00,
       image: [{
         idProducto: 762,
         secuencial: 1,
         url: "/assets/imagenes/PNGsinfondo/042555_01.jpg"
       },
       {
         idProducto: 762,
         secuencial: 1,
         url: "/assets/imagenes/PNGsinfondo/042556_01.jpg"
       }
       
      ],
       descuento: 0,
       nuevo: true,
       destacado: true,
       existencia: 10,
       descripcion: "Caña de spinning para pesca en agua dulce, ideal para lances con señuelos de peso mediano, fabricada en TC24T que le brinda una característica para lograr grandes capturas. "

   },
     {
       sku: 12821,
       id: 87655,
       nombre: "Cuchilleria  machetes",
       modelo: "SENS662M",
       clasificacion: "Caceria",
       cantidad: 1,
       categoria: "aguadulce",
       subcategoria1: "machetes",
       subcategoria2: "",
       marca: "Yellow Tail",
       precio: 500.00,
       precio_antiguo: 1000.00,
       image: [{
         idProducto: 762,
         secuencial: 1,
         url: "/assets/imagenes/PNGsinfondo/043406_01.jpg"
       },
       {
         idProducto: 762,
         secuencial: 1,
         url: "/assets/imagenes/PNGsinfondo/042556_01.jpg"
       }
      ],
       descuento: 0,
       nuevo: true,
       destacado: true,
       existencia: 10,
       descripcion: "Caña de spinning para pesca en agua dulce, ideal para lances con señuelos de peso mediano, fabricada en TC24T que le brinda una característica para lograr grandes capturas. "

   },
     {
       sku: 12821,
       id: 2368,
       nombre: "Cuchilleria  navajas",
       modelo: "SENS662M",
       clasificacion: "Caceria",
       cantidad: 1,
       categoria: "aguasalada",
       subcategoria1: "navajas",
       subcategoria2: "",
       marca: "Yellow Tail",
       precio: 500.00,
       precio_antiguo: 1000.00,
       image: [{
         idProducto: 762,
         secuencial: 1,
         url: "/assets/imagenes/PNGsinfondo/043403_01.jpg"
       },
       {
         idProducto: 762,
         secuencial: 1,
         url: "/assets/imagenes/PNGsinfondo/042556_01.jpg"
       }
    
      ],
       descuento: 0,
       nuevo: true,
       destacado: true,
       existencia: 10,
       descripcion: "Caña de spinning para pesca en agua dulce, ideal para lances con señuelos de peso mediano, fabricada en TC24T que le brinda una característica para lograr grandes capturas. "

   },
     {
       sku: 12821,
       id: 98792,
       nombre: "cuchilleria  cuchillos",
       modelo: "SENS662M",
       clasificacion: "Caceria",
       cantidad: 1,
       categoria: "lineas",
       subcategoria1: "cuchillo",
       subcategoria2: "",
       marca: "Yellow Tail",
       precio: 500.00,
       precio_antiguo: 1000.00,
       image: [{
         idProducto: 762,
         secuencial: 1,
         url: "/assets/imagenes/JPGconfondo/043398_01.jpg"
       },
       {
         idProducto: 762,
         secuencial: 1,
         url: "/assets/imagenes/JPGconfondo/043406_01.jpg"
       }
      ],
       descuento: 0,
       nuevo: true,
       destacado: true,
       existencia: 20,
       descripcion: "Caña de spinning para pesca en agua dulce, ideal para lances con señuelos de peso mediano, fabricada en TC24T que le brinda una característica para lograr grandes capturas. "

   },
     {
       sku: 12821,
       id: 191212122,
       nombre: "Arqueria  bayestas",
       modelo: "SENS662M",
       clasificacion: "Caceria",
       cantidad: 1,
       categoria: "embarcaciones",
       subcategoria1: "bayestas",
       subcategoria2: "",
       marca: "Yellow Tail",
       precio: 500.00,
       precio_antiguo: 1000.00,
       image: [{
         idProducto: 762,
         secuencial: 1,
         url: "/assets/imagenes/PNGsinfondo/043391_01.jpg"
       },
       {
         idProducto: 762,
         secuencial: 1,
         url: "/assets/imagenes/PNGsinfondo/042556_01.jpg"
       }
      ],
       descuento: 0,
       nuevo: true,
       destacado: true,
       existencia: 10,
       descripcion: "Caña de spinning para pesca en agua dulce, ideal para lances con señuelos de peso mediano, fabricada en TC24T que le brinda una característica para lograr grandes capturas. "

   },
     {
       sku: 12821,
       id: 196552,
       nombre: "Arqueria arcos",
       modelo: "SENS662M",
       clasificacion: "Caceria",
       cantidad: 1,
       categoria: "buceorec",
       subcategoria1: "arcos",
       subcategoria2: "",
       marca: "Yellow Tail",
       precio: 500.00,
       precio_antiguo: 1000.00,
       existencia: 30,
       image: [{
         idProducto: 762,
         secuencial: 1,
         url: "/assets/imagenes/PNGsinfondo/042556_01.jpg"
       },
       {
         idProducto: 762,
         secuencial: 1,
         url: "/assets/imagenes/PNGsinfondo/042556_01.jpg"
       }
      ],
       descuento: 0,
       nuevo: true,
       destacado: true,
       descripcion: "Caña de spinning para pesca en agua dulce, ideal para lances con señuelos de peso mediano, fabricada en TC24T que le brinda una característica para lograr grandes capturas. "

   },

     {
       sku: 12821,
       id: 97778999,
       nombre: "Accesorios de Rifles cartucheras",
       modelo: "SENS662M",
       clasificacion: "Caceria",
       cantidad: 1,
       categoria: "ropa",
       subcategoria1: "accesorios",
       subcategoria2: "cartucheras",
       marca: "Yellow Tail",
       precio: 500.00,
       precio_antiguo: 1000.00,
       image: [{
         idProducto: 762,
         secuencial: 1,
         url: "/assets/imagenes/PNGsinfondo/042555_01.jpg"
       },
       {
         idProducto: 762,
         secuencial: 1,
         url: "/assets/imagenes/PNGsinfondo/042556_01.jpg"
       }
      ],
       descuento: 0,
       nuevo: true,
       destacado: true,
       existencia: 14,
       descripcion: "Caña de spinning para pesca en agua dulce, ideal para lances con señuelos de peso mediano, fabricada en TC24T que le brinda una característica para lograr grandes capturas. "

   },

     {
       sku: 12821,
       id: 12121,
       nombre: "Accesorios de Rifles mantenimiento",
       modelo: "SENS662M",
       clasificacion: "Caceria",
       cantidad: 1,
       categoria: "accesorios",
       subcategoria1: "accesorios",
       subcategoria2: "mantenimiento",
       marca: "Yellow Tail",
       precio: 500.00,
       precio_antiguo: 1000.00,
       image: [{
         idProducto: 762,
         secuencial: 1,
         url: "/assets/imagenes/PNGsinfondo/042555_01.jpg"
       },
       {
         idProducto: 762,
         secuencial: 1,
         url: "/assets/imagenes/PNGsinfondo/042556_01.jpg"
       }
      ],
       descuento: 0,
       nuevo: true,
       destacado: true,
       descripcion: "Caña de spinning para pesca en agua dulce, ideal para lances con señuelos de peso mediano, fabricada en TC24T que le brinda una característica para lograr grandes capturas. "

   },
     {
       sku: 12821,
       id: 1922,
       nombre: "Accesorios de Rifles salvaydiabolos",
       modelo: "SENS662M",
       clasificacion: "Caceria",
       cantidad: 1,
       categoria: "aguadulce",
       subcategoria1: "accesorios",
       subcategoria2: "salvaydiabolos",
       marca: "Yellow Tail",
       precio: 500.00,
       precio_antiguo: 1000.00,
       image: [
         {
           idProducto: 132,
           secuencial: 2,
           url: "/assets/imagenes/PNGsinfondo/042555_01.jpg"
         },
         {
           idProducto: 762,
           secuencial: 1,
           url: "/assets/imagenes/PNGsinfondo/042556_01.jpg"
         }
      
      ],
       descuento: 0,
       nuevo: true,
       destacado: true,
       existencia: 10,
       descripcion: "Caña de spinning para pesca en agua dulce, ideal para lances con señuelos de peso mediano, fabricada en TC24T que le brinda una característica para lograr grandes capturas. "

   },
     {
       sku: 12821,
       id: 19882,
       nombre: "Accesorios de Rifles salvaydiabolos",
       modelo: "SENS662M",
       clasificacion: "Caceria",
       cantidad: 1,
       categoria: "aguasalada",
       subcategoria1: "accesorios",
       subcategoria2: "salvaydiabolos",
       marca: "Yellow Tail",
       precio: 500.00,
       precio_antiguo: 1000.00,
       image: [{
         idProducto: 762,
         secuencial: 1,
         url: "/assets/imagenes/PNGsinfondo/042555_01.jpg"
       },
       {
         idProducto: 762,
         secuencial: 1,
         url: "/assets/imagenes/PNGsinfondo/042556_01.jpg"
       }
      ],
       descuento: 0,
       nuevo: true,
       destacado: true,
       existencia: 5,
       descripcion: "Caña de spinning para pesca en agua dulce, ideal para lances con señuelos de peso mediano, fabricada en TC24T que le brinda una característica para lograr grandes capturas. "

   },
     {
       sku: 12821,
       id: 197882,
       nombre: "Rifle de Nitropiston",
       modelo: "SENS662M",
       clasificacion: "Caceria",
       cantidad: 1,
       categoria: "lineas",
       subcategoria1: "nitropiston",
       subcategoria2: "",
       marca: "Yellow Tail",
       precio: 500.00,
       precio_antiguo: 1000.00,
       image: [{
         idProducto: 762,
         secuencial: 1,
         url: "/assets/imagenes/PNGsinfondo/042555_01.jpg"
       },
       {
         idProducto: 762,
         secuencial: 1,
         url: "/assets/imagenes/PNGsinfondo/042556_01.jpg"
       }
      ],
       existencia: 10,
       descuento: 0,
       nuevo: true,
       destacado: true,
       descripcion: "Caña de spinning para pesca en agua dulce, ideal para lances con señuelos de peso mediano, fabricada en TC24T que le brinda una característica para lograr grandes capturas. "

   },
     {
       sku: 12821,
       id: 177892,
       nombre: "Rifle de CO2",
       modelo: "SENS662M",
       clasificacion: "Caceria",
       cantidad: 1,
       categoria: "buceorec",
       subcategoria1: "co2",
       subcategoria2: "",
       marca: "Yellow Tail",
       precio: 500.00,
       precio_antiguo: 1000.00,
       image: [{
         idProducto: 762,
         secuencial: 1,
         url: "/assets/imagenes/PNGsinfondo/042555_01.jpg"
       },
       {
         idProducto: 762,
         secuencial: 1,
         url: "/assets/imagenes/PNGsinfondo/042556_01.jpg"
       }
      ],
       descuento: 0,
       nuevo: true,
       destacado: true,
       existencia: 10,
       descripcion: "Caña de spinning para pesca en agua dulce, ideal para lances con señuelos de peso mediano, fabricada en TC24T que le brinda una característica para lograr grandes capturas. "

   }
 ]
 }


  getProductosPesca(){
    return [
      {
        sku: 12341,
        idProducto: 1,
        nombre: "Señuelo Plomero",
        categoria: "señuelos",
        clasificacion: "pesca",
        marca: "Magbay",
        precio: 1250.50,
        precio_antiguo: 2000.00,
        image: [{
          idProducto:1,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/productos/magbay/050956.png",
         
        },{
          idProducto:1,
          secuencial: 2,
          url: "/assets/imagenes/paginaInicial/productos/magbay/050957.png",
        },
        {
          idProducto:1,
          secuencial: 3,
          url: "/assets/imagenes/paginaInicial/productos/magbay/050958.png",
        },
        {
          idProducto:1,
          secuencial: 4,
          url: "/assets/imagenes/paginaInicial/productos/magbay/050955.png",
        }

      ],
        descuento: 30,
        nuevo: true,
        destacado: true,
        descripcion: 'Con un peso de más de 1 lb con ojos que cambian de color, el señuelo el Plomero High Speed es un absoluto Wahoo Slayer. Su peso en la cabeza garantiza una inmersión profunda y una atracción de Trolling rápida que el Wahoo simplemente no puede resistir.'
      },

      {
        sku: 12341,
        idProducto: 2,
        nombre: "Señuelo Mag Trak",
        categoria: "Señuelos",
        clasificacion: "pesca",
        marca: "Mag Trak",
        precio: 2252.00,
        precio_antiguo: 2000.00,
        image: [{
          idProducto:2,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/productos/magtrack/050976.png",
         
        },{
          idProducto:2,
          secuencial: 2,
          url: "/assets/imagenes/paginaInicial/productos/magtrack/050977.png",
        },
        {
          idProducto:2,
          secuencial: 3,
          url: "/assets/imagenes/paginaInicial/productos/magtrack/050978.png",
        },
        {
          idProducto:2,
          secuencial: 4,
          url: "/assets/imagenes/paginaInicial/productos/magtrack/050979.png",
        }

      ],
        descuento: 30,
        nuevo: true,
        destacado: true,
        descripcion: "El MagTrak presenta un diseño que permite que el señuelo nade recto y debajo de la superficie a velocidades de hasta 20 nudos.Señuelo Wahoo MagTrak ™ de alta velocidad:Cuerpo dinámico de 10 pulgadas con diseño para nadar de una manera que reproduce pequeños wahooTecnología HookMag con anzuelos de acero inoxidable serie 10/0 Sin problemas a altas velocidades, no se requiere plomo troleador o profundizador."
        

      },
      {
        sku: 123452,
        idProducto: 3,
        nombre: "Caña de pescar Tatsukimuya kayato2",
        clasificacion: "pesca",
        categoria: "cañas",
        marca: "Abu Garcia",
        precio: 12229.30,
        precio_antiguo: 2000.00,
        image: [{
          idProducto:3,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/carretes/042699_1.png",
         
        },{
          idProducto:3,
          secuencial: 2,
          url: "/assets/imagenes/paginaInicial/productos/magbay/050957.png",
        },
        {
          idProducto:3,
          secuencial: 3,
          url: "/assets/imagenes/paginaInicial/carretes/042699_1.png",
        },
        {
          idProducto:3,
          secuencial: 4,
          url: "/assets/imagenes/paginaInicial/carretes/042699_1.png",
        }

      ],
        nuevo: true,
        destacado: true        
      },
      {
        sku: 12343,
        idProducto: 4,
        nombre: "Caña de pescar Orci Hayato3",
        clasificacion: "pesca",
        categoria: "cañas",
        marca: "Mindframe",
        precio: 1289.40,
        precio_antiguo: 2000.00,
        image: [{
          idProducto:4,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/carretes/042560_1.png",
         
        },{
          idProducto:1,
          secuencial: 2,
          url: "/assets/imagenes/paginaInicial/productos/magbay/050957.png",
        },
        {
          idProducto:1,
          secuencial: 3,
          url: "/assets/imagenes/paginaInicial/carretes/042560_1.png",
        },
        {
          idProducto:1,
          secuencial: 4,
          url: "/assets/imagenes/paginaInicial/carretes/042699_1.png",
        }

      ],
        nuevo: true,
        destacado: false,   
        descuento: 25,     
      },
      {
        sku: 12344,
        idProducto: 5,
        nombre: "Carrte onion 20204",
        categoria: "cañas",
        clasificacion: "pesca",
        marca: "YELLOW TAIL",
        precio: 29.45,
        precio_antiguo: 2000.00,
        
        image: [{
          idProducto:5,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/carretes/042560_1.png",
         
        },{
          idProducto:5,
          secuencial: 2,
          url: "/assets/imagenes/paginaInicial/productos/magbay/050957.png",
        },
        {
          idProducto:5,
          secuencial: 3,
          url: "/assets/imagenes/paginaInicial/carretes/042554_1.png",
        },
        {
          idProducto:5,
          secuencial:4,
          url: "/assets/imagenes/paginaInicial/carretes/042699_1.png",
        }

      ],
        nuevo: false,
        destacado: true

      },
      {
        sku: 12345,
        idProducto: 6,
        nombre: "Caña de pescar Yustukira5",
        clasificacion: "pesca",
        categoria: "cañas",
        marca: "Andamar20",
        precio: 1289.23,
        precio_antiguo: 2000.00,
        descuento: 10,
        image: [{
          idProducto:6,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/carretes/042562_1.png",
         
        },{
          idProducto:6,
          secuencial: 2,
          url: "/assets/imagenes/paginaInicial/productos/magbay/050957.png",
        },
        {
          idProducto:6,
          secuencial: 3,
          url: "/assets/imagenes/paginaInicial/carretes/042562_1.png",
        },
        {
          idProducto:6,
          secuencial: 4,
          url: "/assets/imagenes/paginaInicial/carretes/042699_1.png",
        }

      ],
        nuevo: false,
        destacado: true        
      },
       {
        sku: 12346,
        idProducto: 7,
        nombre: "Anzuelo Pescado Real6",
        clasificacion: "pesca",
        categoria: "Anzuelos",
        marca: "YELLOW TAIL",
        precio: 129.90,
        precio_antiguo: 2000.00,
        image: [{
          idProducto:7,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/carretes/042557_1.png",
         
        },{
          idProducto:7,
          secuencial: 2,
          url: "/assets/imagenes/paginaInicial/productos/magbay/050957.png",
        },
        {
          idProducto:7,
          secuencial: 3,
          url: "/assets/imagenes/paginaInicial/carretes/042557_1.png",
        },
        {
          idProducto:7,
          secuencial: 4,
          url: "/assets/imagenes/paginaInicial/carretes/042699_1.png",
        }

      ],
        nuevo: true,
        destacado: true        
      },
      {
        sku: 12347,
        idProducto: 8,
        nombre: "Kayak DirectiveSky7",
        clasificacion: "pesca",
        categoria: "Kayaks",
        marca: "Blur",
        precio: 10089.99, 
        precio_antiguo: 2000.00,
        image: [{
          idProducto:8,
          secuencial: 1,
          url:"/assets/imagenes/paginaInicial/carretes/042557_1.png",
         
        },{
          idProducto:8,
          secuencial: 2,
          url: "/assets/imagenes/paginaInicial/carretes/042557_1.png",
        },
        {
          idProducto:8,
          secuencial: 3,
          url: "/assets/imagenes/paginaInicial/carretes/042557_1.png",
        },
        {
          idProducto:8,
          secuencial: 4,
          url: "/assets/imagenes/paginaInicial/carretes/042699_1.png",
        }

      ],
        nuevo: false,
        destacado: true,   
        descuento: 15    
      },
      {
        sku: 12348,
        idProducto: 9,
        nombre: "Gorro de pescar8",
        clasificacion: "pesca",
        categoria: "accesorios",
        marca: "Yellow Tail",
        precio: 12089.18,   
        precio_antiguo: 2000.00,
        image: [{
          idProducto:9,
          secuencial: 1,
          url:"/assets/imagenes/paginaInicial/carretes/042554_1.png",
         
        },{
          idProducto:9,
          secuencial: 2,
          url: "/assets/imagenes/paginaInicial/carretes/042557_1.png",
        },
        {
          idProducto:9,
          secuencial: 3,
          url: "/assets/imagenes/paginaInicial/carretes/042554_1.png",
        },
        {
          idProducto:9,
          secuencial: 4,
          url: "/assets/imagenes/paginaInicial/carretes/042699_1.png",
        }

      ],
        nuevo: false,
        destacado: true     
      },
      {
        sku: 12349,
        idProducto: 10,
        nombre: "Caja para pescar RiverBox9",
        clasificacion: "pesca",
        categoria: "accesorios",
        marca: "YELLOW TAIL",
        precio: 599.20,  
        precio_antiguo: 2000.00,
        image: [{
          idProducto:10,
          secuencial: 1,
          url:"/assets/imagenes/paginaInicial/carretes/042560_1.png",
         
        },{
          idProducto:10,
          secuencial: 2,
          url: "/assets/imagenes/paginaInicial/carretes/042557_1.png",
        },
        {
          idProducto:10,
          secuencial: 3,
          url: "/assets/imagenes/paginaInicial/carretes/042560_1.png",
        },
        {
          idProducto:10,
          secuencial: 4,
          url: "/assets/imagenes/paginaInicial/carretes/042699_1.png",
        }

      ],
        nuevo: false,
        destacado: false,
        descuento: 20      
      },
      {
        sku: 12349,
        idProducto: 11,
        nombre: "Caña de pescar 110",
        clasificacion: "pesca",
        categoria: "cañas",
        marca: "YELLOW TAIL",
        precio: 1289.50,
        precio_antiguo: 2000.00,
        image: [{
          idProducto:11,
          secuencial: 1,
          url:"/assets/imagenes/paginaInicial/carretes/042694_1.png",
         
        },{
          idProducto:11,
          secuencial: 2,
          url: "/assets/imagenes/paginaInicial/carretes/042557_1.png",
        },
        {
          idProducto:11,
          secuencial: 3,
          url: "/assets/imagenes/paginaInicial/carretes/042694_1.png",
        },
        {
          idProducto:11,
          secuencial: 4,
          url: "/assets/imagenes/paginaInicial/carretes/042699_1.png",
        }

      ],
        descuento: 0,
        nuevo: true,
        destacado: true
      },
      {
        sku: 12310,
        idProducto: 12,
        nombre: "Caña de pescar Tatsukimuya kayato11",
        clasificacion: "pesca",
        categoria: "cañas",
        marca: "Abu Garcia",
        precio: 12229.30,
        precio_antiguo: 2000.00,
        image: [{
          idProducto:12,
          secuencial: 1,
          url:"/assets/imagenes/paginaInicial/carretes/042699_1.png",
         
        },{
          idProducto:12,
          secuencial: 2,
          url: "/assets/imagenes/paginaInicial/carretes/042557_1.png",
        },
        {
          idProducto:12,
          secuencial: 3,
          url: "/assets/imagenes/paginaInicial/carretes/042699_1.png",
        },
        {
          idProducto:12,
          secuencial: 4,
          url: "/assets/imagenes/paginaInicial/carretes/042699_1.png",
        }

      ],
        nuevo: true,
        destacado: true,
        descuento: 35        
      },
      {
        sku: 12311,
        idProducto: 13,
        nombre: "Caña de pescar Orci Hayato12",
        clasificacion: "pesca",
        categoria: "cañas",
        marca: "Mindframe",
        precio: 1289.40,
        precio_antiguo: 2000.00,
        image: [{
          idProducto:13,
          secuencial: 1,
          url:"/assets/imagenes/paginaInicial/carretes/042560_1.png",
         
        },{
          idProducto:13,
          secuencial: 2,
          url: "/assets/imagenes/paginaInicial/carretes/042557_1.png",
        },
        {
          idProducto:13,
          secuencial: 3,
          url: "/assets/imagenes/paginaInicial/carretes/042560_1.png",
        },
        {
          idProducto:13,
          secuencial: 4,
          url: "/assets/imagenes/paginaInicial/carretes/042699_1.png",
        }

      ],
        nuevo: true,
        destacado: false        
      },
      {
        sku: 12312,
        idProducto: 14,
        nombre: "Carrte onion 202013",
        categoria: "cañas",
        clasificacion: "pesca",
        marca: "YELLOW TAIL",
        precio: 29.45,
        precio_antiguo: 2000.00,
        image: [{
          idProducto:14,
          secuencial: 1,
          url:"/assets/imagenes/paginaInicial/carretes/042554_1.png",
         
        },{
          idProducto:14,
          secuencial: 2,
          url: "/assets/imagenes/paginaInicial/carretes/042557_1.png",
        },
        {
          idProducto:14,
          secuencial: 3,
          url: "/assets/imagenes/paginaInicial/carretes/042560_1.png",
        },
        {
          idProducto:14,
          secuencial: 4,
          url: "/assets/imagenes/paginaInicial/carretes/042699_1.png",
        }

      ],
        nuevo: false,
        destacado: true,
        descuento: 50

      },
      {
        sku: 12313,
        idProducto: 15,
        nombre: "Caña de pescar Yustukira14",
        clasificacion: "pesca",
        categoria: "cañas",
        marca: "Andamar20",
        precio: 1289.23,
        precio_antiguo: 2000.00,
        image: [{
          idProducto:15,
          secuencial: 1,
          url:"/assets/imagenes/paginaInicial/carretes/042562_1.png",
         
        },{
          idProducto:15,
          secuencial: 2,
          url: "/assets/imagenes/paginaInicial/carretes/042557_1.png",
        },
        {
          idProducto:15,
          secuencial: 3,
          url: "/assets/imagenes/paginaInicial/carretes/042562_1.png",
        },
        {
          idProducto:15,
          secuencial: 4,
          url: "/assets/imagenes/paginaInicial/carretes/042699_1.png",
        }

      ],
        nuevo: false,
        destacado: true        
      },
       {

        sku: 12314,
        idProducto: 16,
        nombre: "Anzuelo Pescado Real15",
        clasificacion: "pesca",
        categoria: "Anzuelos",
        marca: "YELLOW TAIL",
        precio: 129.90,
        precio_antiguo: 2000.00,
        image: [{
          idProducto:16,
          secuencial: 1,
          url:"/assets/imagenes/paginaInicial/carretes/042557_1.png",
         
        },{
          idProducto:16,
          secuencial: 2,
          url: "/assets/imagenes/paginaInicial/carretes/042557_1.png",
        },
        {
          idProducto:16,
          secuencial: 3,
          url: "/assets/imagenes/paginaInicial/carretes/042557_1.png",
        },
        {
          idProducto:16,
          secuencial: 4,
          url: "/assets/imagenes/paginaInicial/carretes/042699_1.png",
        }

      ],
        nuevo: true,
        destacado: true        
      },
      {
        sku: 12315,
        idProducto: 17,
        nombre: "Kayak DirectiveSky16",
        clasificacion: "pesca",
        categoria: "Kayaks",
        marca: "Blur",
        precio: 10089.99, 
        precio_antiguo: 2000.00,
        image: [{
          idProducto:17,
          secuencial: 1,
          url:"/assets/imagenes/paginaInicial/carretes/042557_1.png"
         
        },{
          idProducto:17,
          secuencial: 2,
          url: "/assets/imagenes/paginaInicial/carretes/042557_1.png",
        },
        {
          idProducto:17,
          secuencial: 3,
          url: "/assets/imagenes/paginaInicial/carretes/042560_1.png",
        },
        {
          idProducto:17,
          secuencial: 4,
          url: "/assets/imagenes/paginaInicial/carretes/042699_1.png",
        }

      ],
        nuevo: false,
        destacado: false       
      },
      {
        sku: 12316,
        idProducto: 18,
        nombre: "Gorro de pescar17",
        clasificacion: "pesca",
        categoria: "accesorios",
        marca: "Yellow Tail",
        precio: 12089.18,  
        precio_antiguo: 2000.00, 
        image: [{
          idProducto:18,
          secuencial: 1,
          url:"/assets/imagenes/paginaInicial/carretes/042554_1.png",
         
        },{
          idProducto:18,
          secuencial: 2,
          url: "/assets/imagenes/paginaInicial/carretes/042557_1.png",
        },
        {
          idProducto:18,
          secuencial: 3,
          url: "/assets/imagenes/paginaInicial/carretes/042554_1.png",
        },
        {
          idProducto:18,
          secuencial: 4,
          url: "/assets/imagenes/paginaInicial/carretes/042699_1.png",
        }

      ],
        nuevo: false,
        destacado: true,
        descuento: 40     
      },
      {
        sku: 12317,
        idProducto: 19,
        nombre: "Caja para pescar RiverBo18x",
        clasificacion: "pesca",
        categoria: "accesorios",
        marca: "YELLOW TAIL",
        precio: 599.20,  
        precio_antiguo: 2000.00,
        image: [{
          idProducto:19,
          secuencial: 1,
          url:"/assets/imagenes/paginaInicial/carretes/042560_1.png",
         
        },{
          idProducto:19,
          secuencial: 2,
          url: "/assets/imagenes/paginaInicial/carretes/042557_1.png",
        },
        {
          idProducto:19,
          secuencial: 3,
          url: "/assets/imagenes/paginaInicial/carretes/042560_1.png",
        },
        {
          idProducto:19,
          secuencial: 4,
          url: "/assets/imagenes/paginaInicial/carretes/042699_1.png",
        }

      ],
        nuevo: false,
        destacado: true      
      }
    ]
  }


  getProductosCaceria(){
    return [
     
      {
        sku: 12341,
        idProducto: 133,
        nombre: "Rifle PCP M16",
        categoria: "Rifles",
        clasificacion: "caceria",
        marca: "Black Moose",
        precio: 14010.00,
        precio_antiguo: 2000.00,
        image: [{
          idProducto: 133, 
          secuencial:1, 
          url: "/assets/imagenes/paginaInicial/productos/051275.png",
        },
        {
          idProducto: 133, 
          secuencial:2, 
          url: "/assets/imagenes/paginaInicial/productos/051275.png",
        }
      ], 
        descuento: 0,
        nuevo: true,
        destacado: true,
        descripcion: "Este rifle PCP de acción rápida se destaca por su diseño delgado. Su barril con supresor incorporado permite al tirador pasar desapercibido en cualquier entorno. Y su cargador proporciona muchos disparos antes de volver a cargar. Preciso, delgado, elegante."
      },
      {
        sku: 12341,
        idProducto: 134,
        nombre: "Rifle PCP M16",
        categoria: "Rifles",
        clasificacion: "caceria",
        marca: "Black Moose",
        precio: 14010.00,
        precio_antiguo: 2000.00,
        image: [{
          idProducto: 134,
          secuencial:1,
          url:"/assets/imagenes/paginaInicial/productos/051275.png"
        },
        {
          idProducto: 134,
          secuencial:2,
          url:"/assets/imagenes/paginaInicial/productos/051275.png"
        }

      ],
        descuento: 0,
        nuevo: true,
        destacado: true,
        descripcion: "Este rifle PCP bull barrel viene con la nueva acción de palanca lateral, desarrollado para tiradores exigentes.Encontrarán lo que se espera de un rifle de aire de gama alta destacada: precisión, largo alcance y confiabilidad."
      },
      {
        sku: 12341,
        idProducto: 135,
        nombre: "Rifle PR900W",
        categoria: "Rifles",
        clasificacion: "caceria",
        marca: "Black Moose",
        precio: 5400.00,
        precio_antiguo: 2000.00,
        image: [{
          idProducto:135,
          secuencial:1,
          url: "/assets/imagenes/paginaInicial/productos/051272.png"
        },
        {
          idProducto:135,
          secuencial:1,
          url: "/assets/imagenes/paginaInicial/productos/051272.png"
        }
      ],
        descuento: 0,
        nuevo: true,
        destacado: true,
        descripcion: "Potencia extrema, precisión, terminaciones de calidad y tecnología de punta son las principales características de estos nuevos modelos.Al ser un rifle regulado, todos sus disparos mantienen la misma velocidad promedio de 950 y 1000 FPS aproximadamente."
      },
      {
        sku: 12341,
        idProducto: 136,
        nombre: "Rifle BP P15",
        categoria: "Rifles",
        clasificacion: "caceria",
        marca: "Black Moose",
        precio: 16358.00,
        precio_antiguo: 2000.00,
        image: [{
          idProducto: 136,
          secuencial: 1, 
          url: "/assets/imagenes/paginaInicial/productos/051280.png"
        },
        {
          idProducto: 136,
          secuencial: 2, 
          url: "/assets/imagenes/paginaInicial/productos/051280.png"
        }
      ],
        descuento: 30,
        nuevo: true,
        destacado: true,
        descripcion: "Potencia extrema, precisión, terminaciones de calidad y tecnología de punta son las principales características de estos nuevos modelos.Al ser un rifle regulado, todos sus disparos mantienen la misma velocidad promedio de 950 y 1000 FPS aproximadamente."
      },
      {
        sku: 12341,
        idProducto: 120,
        nombre: "Rifle BP P15",
        categoria: "Rifles",
        clasificacion: "caceria",
        marca: "Black Moose",
        precio: 1289.50,
        precio_antiguo: 2000.00,
        image: [{
          idProducto: 120,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/productos/051281.png"
        },
        {
          idProducto: 120,
          secuencial: 2,
          url: "/assets/imagenes/paginaInicial/productos/051281.png"
        }
      
      ],
        descuento: 20,
        nuevo: true,
        destacado: true,
        descripcion: "Potencia extrema, precisión, terminaciones de calidad y tecnología de punta son las principales características de estos nuevos modelos.Al ser un rifle regulado, todos sus disparos mantienen la misma velocidad promedio de 950 y 1000 FPS aproximadamente."
      },
      {
        sku: 12341,
        idProducto: 137,
        nombre: "Caña de pescar 1",
        categoria: "cañas",
        clasificacion: "pesca",
        marca: "YELLOW TAIL",
        precio: 1289.50,
        precio_antiguo: 2000.00,
        image: [{
          idProducto: 137,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/carretes/042694_1.png"
        },
        {
          idProducto: 137,
          secuencial: 2,
          url: "/assets/imagenes/paginaInicial/carretes/042694_1.png"
        }
      ],
        descuento: 30,
        nuevo: true,
        destacado: true,
        descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
      },
      {
        sku: 123452,
        idProducto: 140,
        nombre: "Caña de pescar Tatsukimuya kayato2",
        categoria: "cañas",
        clasificacion: "pesca",
        marca: "Abu Garcia",
        precio: 12229.30,
        precio_antiguo: 2000.00,
        image: [{
          idProducto: 140,
          secuencial: 1, 
          url: "/assets/imagenes/paginaInicial/carretes/042699_1.png"
        },
        {
          idProducto: 140,
          secuencial: 1, 
          url: "/assets/imagenes/paginaInicial/carretes/042699_1.png"
        }],
        nuevo: true,
        destacado: true,
        descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"

      },
      {
        sku: 12343,
        idProducto: 140,
        nombre: "Caña de pescar Orci Hayato3",
        categoria: "cañas",
        marca: "Mindframe",
        precio: 1289.40,
        precio_antiguo: 2000.00,
        image: [{
          idProducto: 140,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/carretes/042560_1.png"
        },
        {
          idProducto: 140,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/carretes/042560_1.png"
        }
      ],
        nuevo: true,
        destacado: false,   
        descuento: 25,
        descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"     
      },
      {
        sku: 12344,
        idProducto: 141,
        nombre: "Carrte onion 20204",
        categoria: "cañas",
        marca: "YELLOW TAIL",
        clasificacion: "pesca",
        precio: 29.45,
        precio_antiguo: 2000.00,
        image: [{
          idProducto: 141,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/carretes/042554_1.png"
        },
        {
          idProducto: 140,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/carretes/042560_1.png"
        }
        
      ],
        nuevo: false,
        destacado: true,
        descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"

      },
      {
        sku: 12345,
        idProducto: 150,
        nombre: "Caña de pescar Yustukira5",
        categoria: "cañas",
        clasificacion: "pesca",
        marca: "Andamar20",
        precio: 1289.23,
        precio_antiguo: 2000.00,
        descuento: 10,
        image: [{
          idProducto: 150,
          secuencial: 1, 
          url: "/assets/imagenes/paginaInicial/carretes/042562_1.png"
        }],
        nuevo: false,
        destacado: true,
        descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"        
      },
       {
        sku: 12346,
        idProducto: 156,
        nombre: "Anzuelo Pescado Real6",
        categoria: "Anzuelos",
        clasificacion: "pesca",
        marca: "YELLOW TAIL",
        precio: 129.90,
        precio_antiguo: 2000.00,
        image: [{
          idProducto: 156,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/carretes/042557_1.png"
        }],
        nuevo: true,
        destacado: true,
        descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"        
      },
      {
        sku: 12347,
        idProducto: 157,
        nombre: "Kayak DirectiveSky7",
        clasificacion: "pesca",
        categoria: "Kayaks",
        marca: "Blur",
        precio: 10089.99, 
        precio_antiguo: 2000.00,
        image: [{
          idProducto: 157,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/carretes/042557_1.png"
        }],
        nuevo: false,
        destacado: true,   
        descuento: 15, 
        descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"    
      },
      {
        sku: 12348,
        idProducto: 158,
        nombre: "Gorro de pescar8",
        categoria: "accesorios",
        clasificacion: "pesca",
        marca: "Yellow Tail",
        precio: 12089.18,   
        precio_antiguo: 2000.00,
        image:[{
          idProducto: 158,
          secuencial: 1,
          url:  "/assets/imagenes/paginaInicial/carretes/042554_1.png"
        }],
        nuevo: false,
        destacado: true,
        descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"     
      },
      {
        sku: 12349,
        idProducto: 159,
        nombre: "Caja para pescar RiverBox9",
        categoria: "accesorios",
        clasificacion: "pesca",
        marca: "YELLOW TAIL",
        precio: 599.20,  
        precio_antiguo: 2000.00,
        image: [{
          idProducto: 159,
          secuencial: 1, 
          url: "/assets/imagenes/paginaInicial/carretes/042560_1.png"
        }],
        nuevo: false,
        destacado: false,
        descuento: 20,
        descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"      
      },
      {
        sku: 12349,
        idProducto: 159,
        nombre: "Caña de pescar 110",
        categoria: "cañas",
        marca: "YELLOW TAIL",
        precio: 1289.50,
        precio_antiguo: 2000.00,
        descuento: 0,
        image: [{
          idProducto: 159,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/carretes/042694_1.png"
        }],
        nuevo: true,
        destacado: true,
        descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
      },
      {
        sku: 12310,
        idProducto: 160,
        nombre: "Caña de pescar Tatsukimuya kayato11",
        categoria: "cañas",
        clasificacion: "pesca",
        marca: "Abu Garcia",
        precio: 12229.30,
        precio_antiguo: 2000.00,
        image: [{
          idProducto: 160, 
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/carretes/042699_1.png"

        }],
        nuevo: true,
        destacado: true,
        descuento: 35,
        descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"        
      },
      {
        sku: 12311,
        idProducto: 161,
        nombre: "Caña de pescar Orci Hayato12",
        categoria: "cañas",
        clasificacion: "pesca",
        marca: "Mindframe",
        precio: 1289.40,
        precio_antiguo: 2000.00,
        image: [{
          idProducto: 161,
          secuencial: 1,
          url:  "/assets/imagenes/paginaInicial/carretes/042560_1.png"
        }],
        nuevo: true,
        destacado: false, 
        descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"        
      },
      {
        sku: 12312,
        idProducto: 163,
        nombre: "Carrte onion 202013",
        categoria: "cañas",
        marca: "YELLOW TAIL",
        clasificacion: "pesca",
        precio: 29.45,
        precio_antiguo: 2000.00,
        image: [{
          idProducto: 163,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/carretes/042554_1.png"
        }],
        nuevo: false,
        destacado: true,
        descuento: 50,
        descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"

      },
      {
        sku: 12313,
        idProducto: 164,
        nombre: "Caña de pescar Yustukira14",
        clasificacion: "pesca",
        categoria: "cañas",
        marca: "Andamar20",
        precio: 1289.23,
        precio_antiguo: 2000.00,
        image: [{
          idProducto: 163,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/carretes/042562_1.png"
        }],
        nuevo: false,
        destacado: true,
        descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"        
      },
       {

        sku: 12314,
        idProducto: 165,
        nombre: "Anzuelo Pescado Real15",
        clasificacion: "pesca",
        categoria: "Anzuelos",
        marca: "YELLOW TAIL",
        precio: 129.90,
        precio_antiguo: 2000.00,
        image: [{
          idProducto: 165,
          secuencial: 1,
          url:"/assets/imagenes/paginaInicial/carretes/042557_1.png"
        }],
        
        nuevo: true,
        destacado: true,
        descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"        
      },
      {
        sku: 12315,
        idProducto: 166,
        nombre: "Kayak DirectiveSky16",
        clasificacion: "pesca",
        categoria: "Kayaks",
        marca: "Blur",
        precio: 10089.99, 
        precio_antiguo: 2000.00,
        image: [{
          idProducto: 166,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/carretes/042557_1.png"
        }],
        nuevo: false,
        destacado: false,
        descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"       
      },
      {
        sku: 12316,
        idProducto: 167,
        nombre: "Gorro de pescar17",
        clasificacion: "pesca",
        categoria: "accesorios",
        marca: "Yellow Tail",
        precio: 12089.18,  
        precio_antiguo: 2000.00, 
        image: [{
          idProducto: 167,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/carretes/042554_1.png"
        }],
        nuevo: false,
        destacado: true,
        descuento: 40,
        descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"     
      },
      {
        sku: 12317,
        idProducto: 168,
        nombre: "Caja para pescar RiverBo18x",
        categoria: "accesorios",
        clasificacion: "pesca",
        marca: "YELLOW TAIL",
        precio: 599.20,  
        precio_antiguo: 2000.00,
        image: [{
          idProducto: 168,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/carretes/042554_1.png"
        }],
        nuevo: false,
        destacado: true,
        descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"      
      }
    ]
  }


  getProductosSupervivencia(){
    return [
      {
        sku: 12341,
        idProducto: 1,
        nombre: "Caña de pescar 1",
        categoria: "cañas",
        marca: "YELLOW TAIL",
        precio: 1289.50,
        precio_antiguo: 2000.00,
        image: "/assets/imagenes/paginaInicial/carretes/042694_1.png",
        descuento: 30,
        nuevo: true,
        destacado: true
      },
      {
        sku: 123452,
        idProducto: 2,
        nombre: "Caña de pescar Tatsukimuya kayato2",
        categoria: "cañas",
        marca: "Abu Garcia",
        precio: 12229.30,
        precio_antiguo: 2000.00,
        image: "/assets/imagenes/paginaInicial/carretes/042699_1.png",
        nuevo: true,
        destacado: true        
      },
      {
        sku: 12343,
        idProducto: 3,
        nombre: "Caña de pescar Orci Hayato3",
        categoria: "cañas",
        marca: "Mindframe",
        precio: 1289.40,
        precio_antiguo: 2000.00,
        image: "/assets/imagenes/paginaInicial/carretes/042560_1.png",
        nuevo: true,
        destacado: false,   
        descuento: 25,     
      },
      {
        sku: 12344,
        idProducto: 4,
        nombre: "Carrte onion 20204",
        categoria: "cañas",
        marca: "YELLOW TAIL",
        precio: 29.45,
        precio_antiguo: 2000.00,
        image: "/assets/imagenes/paginaInicial/carretes/042554_1.png",
        nuevo: false,
        destacado: true

      },
      {
        sku: 12345,
        idProducto: 5,
        nombre: "Caña de pescar Yustukira5",
        categoria: "cañas",
        marca: "Andamar20",
        precio: 1289.23,
        precio_antiguo: 2000.00,
        descuento: 10,
        image: "/assets/imagenes/paginaInicial/carretes/042562_1.png",
        nuevo: false,
        destacado: true        
      },
       {
        sku: 12346,
        idProducto: 6,
        nombre: "Anzuelo Pescado Real6",
        categoria: "Anzuelos",
        marca: "YELLOW TAIL",
        precio: 129.90,
        precio_antiguo: 2000.00,
        image: "/assets/imagenes/paginaInicial/carretes/042557_1.png",
        nuevo: true,
        destacado: true        
      },
      {
        sku: 12347,
        idProducto: 7,
        nombre: "Kayak DirectiveSky7",
        categoria: "Kayaks",
        marca: "Blur",
        precio: 10089.99, 
        precio_antiguo: 2000.00,
        image: "/assets/imagenes/paginaInicial/carretes/042557_1.png",
        nuevo: false,
        destacado: true,   
        descuento: 15    
      },
      {
        sku: 12348,
        idProducto: 7,
        nombre: "Gorro de pescar8",
        categoria: "accesorios",
        marca: "Yellow Tail",
        precio: 12089.18,   
        precio_antiguo: 2000.00,
        image: "/assets/imagenes/paginaInicial/carretes/042554_1.png",
        nuevo: false,
        destacado: true     
      },
      {
        sku: 12349,
        idProducto: 8,
        nombre: "Caja para pescar RiverBox9",
        categoria: "Accesorios",
        marca: "YELLOW TAIL",
        precio: 599.20,  
        precio_antiguo: 2000.00,
        image: "/assets/imagenes/paginaInicial/carretes/042560_1.png",
        nuevo: false,
        destacado: false,
        descuento: 20      
      },
      {
        sku: 12349,
        idProducto: 9,
        nombre: "Caña de pescar 110",
        categoria: "cañas",
        marca: "YELLOW TAIL",
        precio: 1289.50,
        precio_antiguo: 2000.00,
        image: "/assets/imagenes/paginaInicial/carretes/042694_1.png",
        nuevo: true,
        destacado: true
      },
      {
        sku: 12310,
        idProducto: 10,
        nombre: "Caña de pescar Tatsukimuya kayato11",
        categoria: "cañas",
        marca: "Abu Garcia",
        precio: 12229.30,
        precio_antiguo: 2000.00,
        image: "/assets/imagenes/paginaInicial/carretes/042699_1.png",
        nuevo: true,
        destacado: true,
        descuento: 35        
      },
      {
        sku: 12311,
        idProducto: 11,
        nombre: "Caña de pescar Orci Hayato12",
        categoria: "cañas",
        marca: "Mindframe",
        precio: 1289.40,
        precio_antiguo: 2000.00,
        image: "/assets/imagenes/paginaInicial/carretes/042560_1.png",
        nuevo: true,
        destacado: false        
      },
      {
        sku: 12312,
        idProducto: 12,
        nombre: "Carrte onion 202013",
        categoria: "cañas",
        marca: "YELLOW TAIL",
        precio: 29.45,
        precio_antiguo: 2000.00,
        image: "/assets/imagenes/paginaInicial/carretes/042554_1.png",
        nuevo: false,
        destacado: true,
        descuento: 50

      },
      {
        sku: 12313,
        idProducto: 13,
        nombre: "Caña de pescar Yustukira14",
        categoria: "cañas",
        marca: "Andamar20",
        precio: 1289.23,
        precio_antiguo: 2000.00,
        image: "/assets/imagenes/paginaInicial/carretes/042562_1.png",
        nuevo: false,
        destacado: true        
      },
       {

        sku: 12314,
        idProducto: 14,
        nombre: "Anzuelo Pescado Real15",
        categoria: "Anzuelos",
        marca: "YELLOW TAIL",
        precio: 129.90,
        precio_antiguo: 2000.00,
        image: "/assets/imagenes/paginaInicial/carretes/042557_1.png",
        nuevo: true,
        destacado: true        
      },
      {
        sku: 12315,
        idProducto: 15,
        nombre: "Kayak DirectiveSky16",
        categoria: "Kayaks",
        marca: "Blur",
        precio: 10089.99, 
        precio_antiguo: 2000.00,
        image: "/assets/imagenes/paginaInicial/carretes/042557_1.png",
        nuevo: false,
        destacado: false       
      },
      {
        sku: 12316,
        idProducto: 16,
        nombre: "Gorro de pescar17",
        categoria: "accesorios",
        marca: "Yellow Tail",
        precio: 12089.18,  
        precio_antiguo: 2000.00, 
        image: "/assets/imagenes/paginaInicial/carretes/042554_1.png",
        nuevo: false,
        destacado: true,
        descuento: 40     
      },
      {
        sku: 12317,
        idProducto: 17,
        nombre: "Caja para pescar RiverBo18x",
        categoria: "accesorios",
        marca: "YELLOW TAIL",
        precio: 599.20,  
        precio_antiguo: 2000.00,
        image: "/assets/imagenes/paginaInicial/carretes/042560_1.png",
        nuevo: false,
        destacado: true      
      }
    ]
  }


}
