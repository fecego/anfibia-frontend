import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CarritoInfoService {


  public api = "https://localhost:4000";


  constructor(private http:HttpClient) { }

  getInfoCarrito(){
    return [{
      id: 1,
      idCliente: 20,
      idPago: 121231,
      cantidad: 10,
      descuento: 30,
      tax: 300,
      total: 1000,
      productos:[
        {
          cartId: 1, 
          sequential: 1,
          sku: 12821,
          idProducto: 198,
          nombre: "Cañas Jigging Agua Salada",
          modelo: "ALCS501XH",
          clasificacion: "pesca",
          categoria: "cañas",
          cantidad: 2,
          subcategoria1: "Spinning",
          subcategoria2: "Spinning",
          marca: "Yellow Tail",
          precio: 100.00,
          precio_antiguo: 1000.00,
          image: [{
            idProducto: 762,
            secuencial: 1,
            url: "/assets/imagenes/paginaInicial/productos/029324_1.png"
          },
          {
            idProducto: 132,
            secuencial: 2,
            url: "/assets/imagenes/paginaInicial/productos/029324_2.png"
          },
          {
            idProducto: 132,
            secuencial: 3,
            url: "/assets/imagenes/paginaInicial/productos/029324_3.png"
          },
          {
            idProducto: 132,
            secuencial: 4,
            url: "/assets/imagenes/paginaInicial/productos/029324_4.png"
          },
          {
            idProducto: 132,
            secuencial: 5,
            url: "/assets/imagenes/paginaInicial/productos/029324_5.png"
          },
          {
            idProducto: 132,
            secuencial: 6,
            url: "/assets/imagenes/paginaInicial/productos/029324_5.png"
          }
        ],
          descuento: 0,
          nuevo: true,
          destacado: true,
          descripcion: "Caña para pesca vertical, fabricada en TC24T la cual combina poder con flexibilidad, para un mejor trabajo con señuelos de alto peso y grandes capturas, todos sus componentes son de la marca ALPS."
      

        },
        {
          sku: 12821,
        idProducto: 192,
        nombre: "Caña Senna",
        modelo: "SENS662M",
        clasificacion: "pesca",
        cantidad: 1,
        categoria: "cañas",
        subcategoria1: "Agua dulce",
        subcategoria2: "Spinning",
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
          idProducto: 365,
          nombre: "Carrete Silver King SK100",
          modelo: "SK100",
          clasificacion: "pesca",
          cantidad: 3,
          categoria: "carretes",
          subcategoria1: "Spinning",
          subcategoria2: "Spinning",
          marca: "Yellow Tail",
          precio: 300.00,
          precio_antiguo: 1000.00,
          image: [{
            idProducto: 762,
            secuencial: 1,
            url: "/assets/imagenes/paginaInicial/productos/042552_1.png"
          },
          {
            idProducto: 132,
            secuencial: 2,
            url: "/assets/imagenes/paginaInicial/productos/042552_2.png"
          }
        ],
          descuento: 0,
          nuevo: true,
          destacado: true,
          descripcion: "Carrete tipo convencional ideal para jigging, con cuerpo de aluminio. Cuenta con 11 baleros de acero resistentes a la corrosión. Excelente recuperación. Incluyen cubierta protectora de neopreno."
      
        },
        
      ]
    }]
  }



  getCategorias_pesca(dato){
    return this.http.get(`${this.api}/categorias/${dato}`);
  }




}
