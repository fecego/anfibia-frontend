import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  /*const api = 'http://localhost:300';*/

  constructor(private http:HttpClient) { 

  }

  getProductoCarrito(){
    return[
      
      {
        sku: 12821,
        idProducto: 192,
        nombre: "Caña Senna",
        modelo: "SENS662M",
        clasificacion: "pesca",
        cantidad: 1,
        categoria: "cañas",
        subcategoria1: "aguadulce",
        subcategoria2: "spinning",
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
    {
      sku: 12821,
      idProducto: 287,
      nombre: "Carrete Silver King SK200",
      modelo: "SK200",
      cantidad: 4,
      clasificacion: "pesca",
      categoria: "carretes",
      subcategoria1: "Spinning",
      subcategoria2: "",
      marca: "Yellow Tail",
      precio: 200.00,
      precio_antiguo: 1000.00,
      image: [{
        idProducto: 762,
        secuencial: 1,
        url: "/assets/imagenes/paginaInicial/productos/042554_1.png"
      },
      {
        idProducto: 132,
        secuencial: 2,
        url: "/assets/imagenes/paginaInicial/productos/042554_2.png"
      }
    ],
      descuento: 0,
      nuevo: true,
      destacado: true,
      descripcion: "Carrete tipo convencional ideal para jigging, con cuerpo de aluminio. Cuenta con 11 baleros de acero resistentes a la corrosión. Excelente recuperación. Incluyen cubierta protectora de neopreno."
  
  }

    ]

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

  getProductos(){
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
        idProducto: 9776,
        nombre: "accesorios   termos",
        modelo: "SENS662M",
        clasificacion: "Caceria",
        cantidad: 1,
        categoria: "accesorios",
        subcategoria1: "termos",
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
        idProducto: 88899,
        nombre: "accesorios  caceria hieleras",
        modelo: "SENS662M",
        clasificacion: "Caceria",
        cantidad: 1,
        categoria: "accesorios",
        subcategoria1: "hieleras",
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
        idProducto: 766,
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

    },
      {
        sku: 12821,
        idProducto: 2368,
        nombre: "Cuchilleria  navajas",
        modelo: "SENS662M",
        clasificacion: "Caceria",
        cantidad: 1,
        categoria: "cuchilleria",
        subcategoria1: "navajas",
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
        idProducto: 98792,
        nombre: "cuchilleria  cuchillos",
        modelo: "SENS662M",
        clasificacion: "Caceria",
        cantidad: 1,
        categoria: "cuchilleria",
        subcategoria1: "cuchillo",
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
        idProducto: 191212122,
        nombre: "Arqueria  bayestas",
        modelo: "SENS662M",
        clasificacion: "Caceria",
        cantidad: 1,
        categoria: "arqueria",
        subcategoria1: "bayestas",
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
        idProducto: 196552,
        nombre: "Arqueria arcos",
        modelo: "SENS662M",
        clasificacion: "Caceria",
        cantidad: 1,
        categoria: "arqueria",
        subcategoria1: "arcos",
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
        idProducto: 97778999,
        nombre: "Accesorios de Rifles cartucheras",
        modelo: "SENS662M",
        clasificacion: "Caceria",
        cantidad: 1,
        categoria: "rifles",
        subcategoria1: "accesorios",
        subcategoria2: "cartucheras",
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
        idProducto: 12121,
        nombre: "Accesorios de Rifles mantenimiento",
        modelo: "SENS662M",
        clasificacion: "Caceria",
        cantidad: 1,
        categoria: "rifles",
        subcategoria1: "accesorios",
        subcategoria2: "mantenimiento",
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
        idProducto: 1922,
        nombre: "Accesorios de Rifles salvaydiabolos",
        modelo: "SENS662M",
        clasificacion: "Caceria",
        cantidad: 1,
        categoria: "rifles",
        subcategoria1: "accesorios",
        subcategoria2: "salvaydiabolos",
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
        idProducto: 19882,
        nombre: "Accesorios de Rifles salvaydiabolos",
        modelo: "SENS662M",
        clasificacion: "Caceria",
        cantidad: 1,
        categoria: "rifles",
        subcategoria1: "accesorios",
        subcategoria2: "salvaydiabolos",
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
        idProducto: 197882,
        nombre: "Rifle de Nitropiston",
        modelo: "SENS662M",
        clasificacion: "Caceria",
        cantidad: 1,
        categoria: "rifles",
        subcategoria1: "nitropiston",
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
        idProducto: 177892,
        nombre: "Rifle de CO2",
        modelo: "SENS662M",
        clasificacion: "Caceria",
        cantidad: 1,
        categoria: "rifles",
        subcategoria1: "co2",
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
        idProducto: 187892,
        nombre: "Rifle de Diabolos",
        modelo: "SENS662M",
        clasificacion: "pesca",
        cantidad: 1,
        categoria: "rifles",
        subcategoria1: "diabolos",
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
        sku: 464289,
        idProducto: 17792,
        nombre: "Kayaks ",
        modelo: "",
        subcategoria1: "kayaks",
        subcategoria2: "tandem",
        clasificacion: "pesca",
        categoria: "kayaks",
        marca: "cushit",
        precio: 667.00,
        precio_antiguo: 663.00,
        image: [{
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/productos/021770- Cush It.png"
        }
      ],
        descuento: 0,
        nuevo: true,
        destacado: false,
        descripcion: "¡Seamos realistas, buenas cañas de pescar, carretes, línea y aparejos no son baratos! Entonces, ¿por qué arriesgaría su costosa caña de pescar y señuelos por la borda, que nunca se volverá a ver, cuando puede agregar fácilmente esta espuma premium asequible, liviana, fácil de poner y quitar Cush-it para proporcionar comodidad y tranquilidad ... e incluso mejorar tu pesca!"
      },
      {
        sku: 464289,
        idProducto: 177892,
        nombre: "Kayaks mini",
        modelo: "",
        subcategoria1: "kayaks",
        subcategoria2: "mini",
        clasificacion: "pesca",
        categoria: "kayaks",
        marca: "cushit",
        precio: 667.00,
        precio_antiguo: 663.00,
        image: [{
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/productos/021770- Cush It.png"
        }
      ],
        descuento: 0,
        nuevo: true,
        destacado: false,
        descripcion: "¡Seamos realistas, buenas cañas de pescar, carretes, línea y aparejos no son baratos! Entonces, ¿por qué arriesgaría su costosa caña de pescar y señuelos por la borda, que nunca se volverá a ver, cuando puede agregar fácilmente esta espuma premium asequible, liviana, fácil de poner y quitar Cush-it para proporcionar comodidad y tranquilidad ... e incluso mejorar tu pesca!"
      },
      {
        sku: 464289,
        idProducto: 1762,
        nombre: "Kayaks remos",
        modelo: "",
        subcategoria1: "remos",
        subcategoria2: "",
        clasificacion: "pesca",
        categoria: "kayaks",
        marca: "cushit",
        precio: 667.00,
        precio_antiguo: 663.00,
        image: [{
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/productos/021770- Cush It.png"
        }
      ],
        descuento: 0,
        nuevo: true,
        destacado: false,
        descripcion: "¡Seamos realistas, buenas cañas de pescar, carretes, línea y aparejos no son baratos! Entonces, ¿por qué arriesgaría su costosa caña de pescar y señuelos por la borda, que nunca se volverá a ver, cuando puede agregar fácilmente esta espuma premium asequible, liviana, fácil de poner y quitar Cush-it para proporcionar comodidad y tranquilidad ... e incluso mejorar tu pesca!"
      },
       
      {
        sku: 464289,
        idProducto: 1998000002,
        nombre: "Ropa de Pesca lineas reinales",
        modelo: "",
        subcategoria1: "reinales",
        subcategoria2: "",
        clasificacion: "pesca",
        categoria: "lineas",
        marca: "cushit",
        precio: 667.00,
        precio_antiguo: 663.00,
        image: [{
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/productos/021770- Cush It.png"
        }
      ],
        descuento: 0,
        nuevo: true,
        destacado: false,
        descripcion: "¡Seamos realistas, buenas cañas de pescar, carretes, línea y aparejos no son baratos! Entonces, ¿por qué arriesgaría su costosa caña de pescar y señuelos por la borda, que nunca se volverá a ver, cuando puede agregar fácilmente esta espuma premium asequible, liviana, fácil de poner y quitar Cush-it para proporcionar comodidad y tranquilidad ... e incluso mejorar tu pesca!"
      },
      {
        sku: 464289,
        idProducto: 54434343499,
        nombre: "Ropa de Pesca lineas fluorocarbono",
        modelo: "",
        subcategoria1: "fluorocarbono",
        subcategoria2: "",
        clasificacion: "pesca",
        categoria: "lineas",
        marca: "cushit",
        precio: 667.00,
        precio_antiguo: 663.00,
        image: [{
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/productos/021770- Cush It.png"
        }
      ],
        descuento: 0,
        nuevo: true,
        destacado: false,
        descripcion: "¡Seamos realistas, buenas cañas de pescar, carretes, línea y aparejos no son baratos! Entonces, ¿por qué arriesgaría su costosa caña de pescar y señuelos por la borda, que nunca se volverá a ver, cuando puede agregar fácilmente esta espuma premium asequible, liviana, fácil de poner y quitar Cush-it para proporcionar comodidad y tranquilidad ... e incluso mejorar tu pesca!"
      },

      {
        sku: 464289,
        idProducto: 7474643333,
        nombre: "Ropa de Pesca lineas leaders",
        modelo: "",
        subcategoria1: "leaders",
        subcategoria2: "",
        clasificacion: "pesca",
        categoria: "lineas",
        marca: "cushit",
        precio: 667.00,
        precio_antiguo: 663.00,
        image: [{
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/productos/021770- Cush It.png"
        }
      ],
        descuento: 0,
        nuevo: true,
        destacado: false,
        descripcion: "¡Seamos realistas, buenas cañas de pescar, carretes, línea y aparejos no son baratos! Entonces, ¿por qué arriesgaría su costosa caña de pescar y señuelos por la borda, que nunca se volverá a ver, cuando puede agregar fácilmente esta espuma premium asequible, liviana, fácil de poner y quitar Cush-it para proporcionar comodidad y tranquilidad ... e incluso mejorar tu pesca!"
      },
      {
        sku: 464289,
        idProducto: 98727322222,
        nombre: "Ropa de Pesca lineas trenzadas",
        modelo: "",
        subcategoria1: "trenzadas",
        subcategoria2: "",
        clasificacion: "pesca",
        categoria: "lineas",
        marca: "cushit",
        precio: 667.00,
        precio_antiguo: 663.00,
        image: [{
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/productos/021770- Cush It.png"
        }
      ],
        descuento: 0,
        nuevo: true,
        destacado: false,
        descripcion: "¡Seamos realistas, buenas cañas de pescar, carretes, línea y aparejos no son baratos! Entonces, ¿por qué arriesgaría su costosa caña de pescar y señuelos por la borda, que nunca se volverá a ver, cuando puede agregar fácilmente esta espuma premium asequible, liviana, fácil de poner y quitar Cush-it para proporcionar comodidad y tranquilidad ... e incluso mejorar tu pesca!"
      },
      {
        sku: 464289,
        idProducto: 422746492,
        nombre: "Ropa de Pesca lineas monofilamento",
        modelo: "",
        subcategoria1: "monofilamento",
        subcategoria2: "",
        clasificacion: "pesca",
        categoria: "lineas",
        marca: "cushit",
        precio: 667.00,
        precio_antiguo: 663.00,
        image: [{
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/productos/021770- Cush It.png"
        }
      ],
        descuento: 0,
        nuevo: true,
        destacado: false,
        descripcion: "¡Seamos realistas, buenas cañas de pescar, carretes, línea y aparejos no son baratos! Entonces, ¿por qué arriesgaría su costosa caña de pescar y señuelos por la borda, que nunca se volverá a ver, cuando puede agregar fácilmente esta espuma premium asequible, liviana, fácil de poner y quitar Cush-it para proporcionar comodidad y tranquilidad ... e incluso mejorar tu pesca!"
      },
      {
        sku: 464289,
        idProducto: 876592,
        nombre: "Ropa de Pesca Accesorios Cinturones",
        modelo: "",
        subcategoria1: "accesorios",
        subcategoria2: "cinturones",
        clasificacion: "pesca",
        categoria: "ropa",
        marca: "cushit",
        precio: 667.00,
        precio_antiguo: 663.00,
        image: [{
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/productos/021770- Cush It.png"
        }
      ],
        descuento: 0,
        nuevo: true,
        destacado: false,
        descripcion: "¡Seamos realistas, buenas cañas de pescar, carretes, línea y aparejos no son baratos! Entonces, ¿por qué arriesgaría su costosa caña de pescar y señuelos por la borda, que nunca se volverá a ver, cuando puede agregar fácilmente esta espuma premium asequible, liviana, fácil de poner y quitar Cush-it para proporcionar comodidad y tranquilidad ... e incluso mejorar tu pesca!"
      },
      {
        sku: 464289,
        idProducto: 57822,
        nombre: "Ropa de Pesca Jersey ",
        modelo: "",
        subcategoria1: "jersey",
        subcategoria2: "cuerdas",
        clasificacion: "pesca",
        categoria: "ropa",
        marca: "cushit",
        precio: 667.00,
        precio_antiguo: 663.00,
        image: [{
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/productos/021770- Cush It.png"
        }
      ],
        descuento: 0,
        nuevo: true,
        destacado: false,
        descripcion: "¡Seamos realistas, buenas cañas de pescar, carretes, línea y aparejos no son baratos! Entonces, ¿por qué arriesgaría su costosa caña de pescar y señuelos por la borda, que nunca se volverá a ver, cuando puede agregar fácilmente esta espuma premium asequible, liviana, fácil de poner y quitar Cush-it para proporcionar comodidad y tranquilidad ... e incluso mejorar tu pesca!"
      },
      {
        sku: 464289,
        idProducto: 186121292,
        nombre: "Categoría Navegación ",
        modelo: "",
        subcategoria1: "accesorios",
        subcategoria2: "cuerdas",
        clasificacion: "pesca",
        categoria: "navegacion",
        marca: "cushit",
        precio: 667.00,
        precio_antiguo: 663.00,
        image: [{
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/productos/021770- Cush It.png"
        }
      ],
        descuento: 0,
        nuevo: true,
        destacado: false,
        descripcion: "¡Seamos realistas, buenas cañas de pescar, carretes, línea y aparejos no son baratos! Entonces, ¿por qué arriesgaría su costosa caña de pescar y señuelos por la borda, que nunca se volverá a ver, cuando puede agregar fácilmente esta espuma premium asequible, liviana, fácil de poner y quitar Cush-it para proporcionar comodidad y tranquilidad ... e incluso mejorar tu pesca!"
      },
      {
        sku: 464289,
        idProducto:98712192,
        nombre: "Categoría Navegación subcategoria accesorios ",
        modelo: "",
        subcategoria1: "accesorios",
        subcategoria2: "fender",
        clasificacion: "pesca",
        categoria: "navegacion",
        marca: "cushit",
        precio: 667.00,
        precio_antiguo: 663.00,
        image: [{
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/productos/021770- Cush It.png"
        }
      ],
        descuento: 0,
        nuevo: true,
        destacado: false,
        descripcion: "¡Seamos realistas, buenas cañas de pescar, carretes, línea y aparejos no son baratos! Entonces, ¿por qué arriesgaría su costosa caña de pescar y señuelos por la borda, que nunca se volverá a ver, cuando puede agregar fácilmente esta espuma premium asequible, liviana, fácil de poner y quitar Cush-it para proporcionar comodidad y tranquilidad ... e incluso mejorar tu pesca!"
      },
      {
        sku: 464289,
        idProducto: 877777,
        nombre: "Categoría Navegación subcategoria motor",
        modelo: "",
        subcategoria1: "motor",
        subcategoria2: "",
        clasificacion: "pesca",
        categoria: "navegacion",
        marca: "cushit",
        precio: 667.00,
        precio_antiguo: 663.00,
        image: [{
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/productos/021770- Cush It.png"
        }
      ],
        descuento: 0,
        nuevo: true,
        destacado: false,
        descripcion: "¡Seamos realistas, buenas cañas de pescar, carretes, línea y aparejos no son baratos! Entonces, ¿por qué arriesgaría su costosa caña de pescar y señuelos por la borda, que nunca se volverá a ver, cuando puede agregar fácilmente esta espuma premium asequible, liviana, fácil de poner y quitar Cush-it para proporcionar comodidad y tranquilidad ... e incluso mejorar tu pesca!"
      },
      {
        sku: 464289,
        idProducto: 6666,
        nombre: "Categoría Navegación subcategoria iluminación",
        modelo: "",
        subcategoria1: "iluminacion",
        subcategoria2: "",
        clasificacion: "pesca",
        categoria: "navegacion",
        marca: "cushit",
        precio: 667.00,
        precio_antiguo: 663.00,
        image: [{
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/productos/021770- Cush It.png"
        }
      ],
        descuento: 0,
        nuevo: true,
        destacado: false,
        descripcion: "¡Seamos realistas, buenas cañas de pescar, carretes, línea y aparejos no son baratos! Entonces, ¿por qué arriesgaría su costosa caña de pescar y señuelos por la borda, que nunca se volverá a ver, cuando puede agregar fácilmente esta espuma premium asequible, liviana, fácil de poner y quitar Cush-it para proporcionar comodidad y tranquilidad ... e incluso mejorar tu pesca!"
      },
      {
        sku: 464289,
        idProducto: 11,
        nombre: "Categoría Navegación subcategoria Bombas ",
        modelo: "",
        subcategoria1: "bombas",
        subcategoria2: "",
        clasificacion: "pesca",
        categoria: "navegacion",
        marca: "cushit",
        precio: 667.00,
        precio_antiguo: 663.00,
        image: [{
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/productos/021770- Cush It.png"
        }
      ],
        descuento: 0,
        nuevo: true,
        destacado: false,
        descripcion: "¡Seamos realistas, buenas cañas de pescar, carretes, línea y aparejos no son baratos! Entonces, ¿por qué arriesgaría su costosa caña de pescar y señuelos por la borda, que nunca se volverá a ver, cuando puede agregar fácilmente esta espuma premium asequible, liviana, fácil de poner y quitar Cush-it para proporcionar comodidad y tranquilidad ... e incluso mejorar tu pesca!"
      },
      {
        sku: 464289,
        idProducto: 88899,
        nombre: "Categoría Navegación subcategoria Plomería ",
        modelo: "",
        subcategoria1: "plomeria",
        subcategoria2: "",
        clasificacion: "pesca",
        categoria: "navegacion",
        marca: "cushit",
        precio: 667.00,
        precio_antiguo: 663.00,
        image: [{
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/productos/021770- Cush It.png"
        }
      ],
        descuento: 0,
        nuevo: true,
        destacado: false,
        descripcion: "¡Seamos realistas, buenas cañas de pescar, carretes, línea y aparejos no son baratos! Entonces, ¿por qué arriesgaría su costosa caña de pescar y señuelos por la borda, que nunca se volverá a ver, cuando puede agregar fácilmente esta espuma premium asequible, liviana, fácil de poner y quitar Cush-it para proporcionar comodidad y tranquilidad ... e incluso mejorar tu pesca!"
      },
      {
        sku: 464289,
        idProducto: 196325282,
        nombre: "Categoría Navegación subcategoria electricos conectores",
        modelo: "",
        subcategoria1: "electricos",
        subcategoria2: "conectores",
        clasificacion: "pesca",
        categoria: "navegacion",
        marca: "cushit",
        precio: 667.00,
        precio_antiguo: 663.00,
        image: [{
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/productos/021770- Cush It.png"
        }
      ],
        descuento: 0,
        nuevo: true,
        destacado: false,
        descripcion: "¡Seamos realistas, buenas cañas de pescar, carretes, línea y aparejos no son baratos! Entonces, ¿por qué arriesgaría su costosa caña de pescar y señuelos por la borda, que nunca se volverá a ver, cuando puede agregar fácilmente esta espuma premium asequible, liviana, fácil de poner y quitar Cush-it para proporcionar comodidad y tranquilidad ... e incluso mejorar tu pesca!"
      },

      {
        sku: 464289,
        idProducto: 191212312,
        nombre: "Categoría Navegación subcategoria electricos ",
        modelo: "",
        subcategoria1: "electricos",
        subcategoria2: "switches",
        clasificacion: "pesca",
        categoria: "navegacion",
        marca: "cushit",
        precio: 667.00,
        precio_antiguo: 663.00,
        image: [{
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/productos/021770- Cush It.png"
        }
      ],
        descuento: 0,
        nuevo: true,
        destacado: false,
        descripcion: "¡Seamos realistas, buenas cañas de pescar, carretes, línea y aparejos no son baratos! Entonces, ¿por qué arriesgaría su costosa caña de pescar y señuelos por la borda, que nunca se volverá a ver, cuando puede agregar fácilmente esta espuma premium asequible, liviana, fácil de poner y quitar Cush-it para proporcionar comodidad y tranquilidad ... e incluso mejorar tu pesca!"
      },
      {
        sku: 464289,
        idProducto: 18892,
        nombre: "Categoría Navegación Subcategoria Audio ",
        modelo: "",
        subcategoria1: "audio",
        subcategoria2: "",
        clasificacion: "pesca",
        categoria: "navegacion",
        marca: "cushit",
        precio: 667.00,
        precio_antiguo: 663.00,
        image: [{
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/productos/021770- Cush It.png"
        }
      ],
        descuento: 0,
        nuevo: true,
        destacado: false,
        descripcion: "¡Seamos realistas, buenas cañas de pescar, carretes, línea y aparejos no son baratos! Entonces, ¿por qué arriesgaría su costosa caña de pescar y señuelos por la borda, que nunca se volverá a ver, cuando puede agregar fácilmente esta espuma premium asequible, liviana, fácil de poner y quitar Cush-it para proporcionar comodidad y tranquilidad ... e incluso mejorar tu pesca!"
      },
      {
        sku: 464289,
        idProducto: 192,
        nombre: "Categoría Navegación subcategoria brujulas",
        modelo: "",
        subcategoria1: "brujulas",
        subcategoria2: "",
        clasificacion: "pesca",
        categoria: "navegacion",
        marca: "cushit",
        precio: 667.00,
        precio_antiguo: 663.00,
        image: [{
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/productos/021770- Cush It.png"
        }
      ],
        descuento: 0,
        nuevo: true,
        destacado: false,
        descripcion: "¡Seamos realistas, buenas cañas de pescar, carretes, línea y aparejos no son baratos! Entonces, ¿por qué arriesgaría su costosa caña de pescar y señuelos por la borda, que nunca se volverá a ver, cuando puede agregar fácilmente esta espuma premium asequible, liviana, fácil de poner y quitar Cush-it para proporcionar comodidad y tranquilidad ... e incluso mejorar tu pesca!"
      },
      {
        sku: 464289,
        idProducto: 192,
        nombre: "Categoría Navegación GPS ",
        modelo: "",
        subcategoria1: "gps",
        subcategoria2: "",
        clasificacion: "pesca",
        categoria: "navegacion",
        marca: "cushit",
        precio: 667.00,
        precio_antiguo: 663.00,
        image: [{
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/productos/021770- Cush It.png"
        }
      ],
        descuento: 0,
        nuevo: true,
        destacado: false,
        descripcion: "¡Seamos realistas, buenas cañas de pescar, carretes, línea y aparejos no son baratos! Entonces, ¿por qué arriesgaría su costosa caña de pescar y señuelos por la borda, que nunca se volverá a ver, cuando puede agregar fácilmente esta espuma premium asequible, liviana, fácil de poner y quitar Cush-it para proporcionar comodidad y tranquilidad ... e incluso mejorar tu pesca!"
      },

    
      {
        sku: 464289,
        idProducto: 9872,
        nombre: "CATEGORIA ACCESORIO ALMACENAMIENTO MALETAS",
        modelo: "",
        subcategoria1: "almacenamiento",
        subcategoria2: "maletas",
        clasificacion: "pesca",
        categoria: "accesorios",
        marca: "cushit",
        precio: 667.00,
        precio_antiguo: 663.00,
        image: [{
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/productos/021770- Cush It.png"
        }
      ],
        descuento: 0,
        nuevo: true,
        destacado: false,
        descripcion: "¡Seamos realistas, buenas cañas de pescar, carretes, línea y aparejos no son baratos! Entonces, ¿por qué arriesgaría su costosa caña de pescar y señuelos por la borda, que nunca se volverá a ver, cuando puede agregar fácilmente esta espuma premium asequible, liviana, fácil de poner y quitar Cush-it para proporcionar comodidad y tranquilidad ... e incluso mejorar tu pesca!"
      },
      {
        sku: 464289,
        idProducto: 64647192,
        nombre: "CATEGORIA ACCESORIO ALMACENAMIENTO",
        modelo: "",
        subcategoria1: "almacenamiento",
        subcategoria2: "cajas",
        clasificacion: "pesca",
        categoria: "accesorios",
        marca: "cushit",
        precio: 667.00,
        precio_antiguo: 663.00,
        image: [{
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/productos/021770- Cush It.png"
        }
      ],
        descuento: 0,
        nuevo: true,
        destacado: false,
        descripcion: "¡Seamos realistas, buenas cañas de pescar, carretes, línea y aparejos no son baratos! Entonces, ¿por qué arriesgaría su costosa caña de pescar y señuelos por la borda, que nunca se volverá a ver, cuando puede agregar fácilmente esta espuma premium asequible, liviana, fácil de poner y quitar Cush-it para proporcionar comodidad y tranquilidad ... e incluso mejorar tu pesca!"
      },
      {
        sku: 464289,
        idProducto: 192,
        nombre: "ACCESORIO DE AGUA SALADA CALCOMANIAS",
        modelo: "",
        subcategoria1: "accesorios",
        subcategoria2: "calcomanias",
        clasificacion: "pesca",
        categoria: "aguasalada",
        marca: "cushit",
        precio: 667.00,
        precio_antiguo: 663.00,
        image: [{
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/productos/021770- Cush It.png"
        }
      ],
        descuento: 0,
        nuevo: true,
        destacado: false,
        descripcion: "¡Seamos realistas, buenas cañas de pescar, carretes, línea y aparejos no son baratos! Entonces, ¿por qué arriesgaría su costosa caña de pescar y señuelos por la borda, que nunca se volverá a ver, cuando puede agregar fácilmente esta espuma premium asequible, liviana, fácil de poner y quitar Cush-it para proporcionar comodidad y tranquilidad ... e incluso mejorar tu pesca!"
      },
      {
        sku: 464289,
        idProducto: 192,
        nombre: "ACCESORIO DE AGUA SALADA RED RECOLECTORA",
        modelo: "",
        subcategoria1: "accesorios",
        subcategoria2: "redRecolectora",
        clasificacion: "pesca",
        categoria: "aguasalada",
        marca: "cushit",
        precio: 667.00,
        precio_antiguo: 663.00,
        image: [{
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/productos/021770- Cush It.png"
        }
      ],
        descuento: 0,
        nuevo: true,
        destacado: false,
        descripcion: "¡Seamos realistas, buenas cañas de pescar, carretes, línea y aparejos no son baratos! Entonces, ¿por qué arriesgaría su costosa caña de pescar y señuelos por la borda, que nunca se volverá a ver, cuando puede agregar fácilmente esta espuma premium asequible, liviana, fácil de poner y quitar Cush-it para proporcionar comodidad y tranquilidad ... e incluso mejorar tu pesca!"
      },
      {
        sku: 464289,
        idProducto: 192,
        nombre: "ACCESORIO DE AGUA SALADA ANZUELOS",
        modelo: "",
        subcategoria1: "accesorios",
        subcategoria2: "anzuelos",
        clasificacion: "pesca",
        categoria: "aguasalada",
        marca: "cushit",
        precio: 667.00,
        precio_antiguo: 663.00,
        image: [{
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/productos/021770- Cush It.png"
        }
      ],
        descuento: 0,
        nuevo: true,
        destacado: false,
        descripcion: "¡Seamos realistas, buenas cañas de pescar, carretes, línea y aparejos no son baratos! Entonces, ¿por qué arriesgaría su costosa caña de pescar y señuelos por la borda, que nunca se volverá a ver, cuando puede agregar fácilmente esta espuma premium asequible, liviana, fácil de poner y quitar Cush-it para proporcionar comodidad y tranquilidad ... e incluso mejorar tu pesca!"
      },
      {
        sku: 464289,
        idProducto: 192,
        nombre: "ACCESORIO DE AGUA SALADA OCHOS",
        modelo: "",
        subcategoria1: "accesorios",
        subcategoria2: "ocho",
        clasificacion: "pesca",
        categoria: "aguasalada",
        marca: "cushit",
        precio: 667.00,
        precio_antiguo: 663.00,
        image: [{
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/productos/021770- Cush It.png"
        }
      ],
        descuento: 0,
        nuevo: true,
        destacado: false,
        descripcion: "¡Seamos realistas, buenas cañas de pescar, carretes, línea y aparejos no son baratos! Entonces, ¿por qué arriesgaría su costosa caña de pescar y señuelos por la borda, que nunca se volverá a ver, cuando puede agregar fácilmente esta espuma premium asequible, liviana, fácil de poner y quitar Cush-it para proporcionar comodidad y tranquilidad ... e incluso mejorar tu pesca!"
      },
      {
        sku: 464289,
        idProducto: 192,
        nombre: "ACCESORIO DE AGUA SALADA ARGOLLAS",
        modelo: "",
        subcategoria1: "accesorios",
        subcategoria2: "argollas",
        clasificacion: "pesca",
        categoria: "aguasalada",
        marca: "cushit",
        precio: 667.00,
        precio_antiguo: 663.00,
        image: [{
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/productos/021770- Cush It.png"
        }
      ],
        descuento: 0,
        nuevo: true,
        destacado: false,
        descripcion: "¡Seamos realistas, buenas cañas de pescar, carretes, línea y aparejos no son baratos! Entonces, ¿por qué arriesgaría su costosa caña de pescar y señuelos por la borda, que nunca se volverá a ver, cuando puede agregar fácilmente esta espuma premium asequible, liviana, fácil de poner y quitar Cush-it para proporcionar comodidad y tranquilidad ... e incluso mejorar tu pesca!"
      },

      {
        sku: 464289,
        idProducto: 192,
        nombre: "ACCESORIOS DE AGUA SALADA LLAMADORES",
        modelo: "",
        subcategoria1: "accesorios",
        subcategoria2: "llamadores",
        clasificacion: "pesca",
        categoria: "aguasalada",
        marca: "cushit",
        precio: 667.00,
        precio_antiguo: 663.00,
        image: [{
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/productos/021770- Cush It.png"
        }
      ],
        descuento: 0,
        nuevo: true,
        destacado: false,
        descripcion: "¡Seamos realistas, buenas cañas de pescar, carretes, línea y aparejos no son baratos! Entonces, ¿por qué arriesgaría su costosa caña de pescar y señuelos por la borda, que nunca se volverá a ver, cuando puede agregar fácilmente esta espuma premium asequible, liviana, fácil de poner y quitar Cush-it para proporcionar comodidad y tranquilidad ... e incluso mejorar tu pesca!"
      },
      {
        sku: 464289,
        idProducto: 19736352,
        nombre: "ACCESORIO DE AGUA SALADA FALDA",
        modelo: "",
        subcategoria1: "accesorios",
        subcategoria2: "faldas",
        clasificacion: "pesca",
        categoria: "aguasalada",
        marca: "cushit",
        precio: 667.00,
        precio_antiguo: 663.00,
        image: [{
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/productos/021770- Cush It.png"
        }
      ],
        descuento: 0,
        nuevo: true,
        destacado: false,
        descripcion: "¡Seamos realistas, buenas cañas de pescar, carretes, línea y aparejos no son baratos! Entonces, ¿por qué arriesgaría su costosa caña de pescar y señuelos por la borda, que nunca se volverá a ver, cuando puede agregar fácilmente esta espuma premium asequible, liviana, fácil de poner y quitar Cush-it para proporcionar comodidad y tranquilidad ... e incluso mejorar tu pesca!"
      },

      {
        sku: 464289,
        idProducto: 192,
        nombre: "Protector MEDIANO COMBO AGUA SALADA",
        modelo: "",
        subcategoria1: "combos",
        subcategoria2: "surft",
        clasificacion: "pesca",
        categoria: "aguasalada",
        marca: "cushit",
        precio: 667.00,
        precio_antiguo: 663.00,
        image: [{
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/productos/021770- Cush It.png"
        }
      ],
        descuento: 0,
        nuevo: true,
        destacado: false,
        descripcion: "¡Seamos realistas, buenas cañas de pescar, carretes, línea y aparejos no son baratos! Entonces, ¿por qué arriesgaría su costosa caña de pescar y señuelos por la borda, que nunca se volverá a ver, cuando puede agregar fácilmente esta espuma premium asequible, liviana, fácil de poner y quitar Cush-it para proporcionar comodidad y tranquilidad ... e incluso mejorar tu pesca!"
      },

      {
        sku: 464289,
        idProducto: 192,
        nombre: "Protector MEDIANO COMBO AGUA DULCE",
        modelo: "",
        subcategoria1: "combos",
        subcategoria2: "trolling",
        clasificacion: "pesca",
        categoria: "aguasalada",
        marca: "cushit",
        precio: 667.00,
        precio_antiguo: 663.00,
        image: [{
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/productos/021770- Cush It.png"
        }
      ],
        descuento: 0,
        nuevo: true,
        destacado: false,
        descripcion: "¡Seamos realistas, buenas cañas de pescar, carretes, línea y aparejos no son baratos! Entonces, ¿por qué arriesgaría su costosa caña de pescar y señuelos por la borda, que nunca se volverá a ver, cuando puede agregar fácilmente esta espuma premium asequible, liviana, fácil de poner y quitar Cush-it para proporcionar comodidad y tranquilidad ... e incluso mejorar tu pesca!"
      },

      {
        sku: 464289,
        idProducto: 19087472,
        nombre: "Protector mediano 10005 Yellow",
        modelo: "",
        subcategoria1: "accesorios",
        subcategoria2: "granpines",
        clasificacion: "pesca",
        categoria: "aguadulce",
        marca: "cushit",
        precio: 667.00,
        precio_antiguo: 663.00,
        image: [{
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/productos/021770- Cush It.png"
        }
      ],
        descuento: 0,
        nuevo: true,
        destacado: false,
        descripcion: "¡Seamos realistas, buenas cañas de pescar, carretes, línea y aparejos no son baratos! Entonces, ¿por qué arriesgaría su costosa caña de pescar y señuelos por la borda, que nunca se volverá a ver, cuando puede agregar fácilmente esta espuma premium asequible, liviana, fácil de poner y quitar Cush-it para proporcionar comodidad y tranquilidad ... e incluso mejorar tu pesca!"
      },

      {
        sku: 465289,
        idProducto: 182,
        nombre: "Portacañas BRH negro",
        modelo: "",
        subcategoria1: "accesorios",
        subcategoria2: "granpines",
        clasificacion: "pesca",
        categoria: "aguadulce",
        marca: "berkley",
        precio: 393.00,
        precio_antiguo: 1000.00,
        image: [{
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/productos/003662- portacañas.png"
        }
      ],
        descuento: 0,
        nuevo: true,
        destacado: false,
        descripcion: "Soporte para cañas en fibra y totalmente inoxidable, ideal para nuestras embarcaciones. 100% ajustable en posición y giro con bloqueo de seguridad. Posibilidad de montaje sobre rail y regala (lateral y horizontal).."
      },
      {
        sku: 12341,
        idProducto: 132,
        nombre: "Pistola CO2 S&W M&P 40",
        modelo: "OA581R30S",
        subcategoria1: "diabolos",
        subcategoria2: "",
        clasificacion: "Caceria",
        categoria: "pistolas",
        marca: "s&w",
        precio: 1485.00,
        precio_antiguo: 1000.00,
        image: [{
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/productos/037505.png"
        }
      ],
        descuento: 0,
        nuevo: true,
        destacado: false,
        descripcion: "Esta Pistola CO2 es una muy buena opción si buscas algo económico, modelo réplica y fácil de disparar. Incluye riel táctico en el cañón para montura de accesorios y el cargador es totalmente hecho de metal."
      },
      {
        sku: 12821,
        idProducto: 11292192,
        nombre: "Caña Senna",
        modelo: "SENS662M",
        clasificacion: "pesca",
        categoria: "aguasalada",
        subcategoria1: "cañas",
        subcategoria2: "trolling",
        marca: "yellowtail",
        precio: 795.00,
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
      sku: 12341,
      idProducto: 132,
      nombre: "Pistola Colt Phyton",
      modelo: "OA581R30S",
      subcategoria1: "salva",
      subcategoria2: "",
      clasificacion: "Caceria",
      categoria: "pistolas",
      marca: "umarex",
      precio: 1529.00,
      precio_antiguo: 1000.00,
      image: [{
        idProducto: 762,
        secuencial: 1,
        url: "/assets/imagenes/paginaInicial/productos/037506.png"
      }
    ],
      descuento: 0,
      nuevo: true,
      destacado: false,
      descripcion: "El revólver Airguns Colt Python hecha de metal (full metal), fabricada por Umarex bajo licencia Colt es una verdadera réplica revolver de fuego. Detalles como el peso, potencia, precisión y estética del arma hacen que este revolver sea una buena opción de compra para la práctica de tiro deportivo. Si eres amante de los revolvers esta es una que debes de tener en tu colección."
    },
      {
        sku: 12821,
        idProducto: 198,
        nombre: "Cañas Jigging Agua Salada",
        modelo: "ALCS501XH",
        clasificacion: "pesca",
        categoria: "aguasalada",
        subcategoria1: "cañas",
        subcategoria2: "popping",
        marca: "yellowtail",
        precio: 3835.00,
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
        idProducto: 378,
        nombre: "Caña Tortuga Spinning",
        modelo: "TORS561MH",
        clasificacion: "pesca",
        categoria: "aguadulce",
        subcategoria1: "cañas",
        subcategoria2: "casting",
        marca: "yellowtail",
        precio: 4532.00,
        precio_antiguo: 1000.00,
        image: [{
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/productos/041833_1.png"
        },
        {
          idProducto: 132,
          secuencial: 2,
          url: "/assets/imagenes/paginaInicial/productos/041833_2.png"
        },
        {
          idProducto: 132,
          secuencial: 3,
          url: "/assets/imagenes/paginaInicial/productos/041833_3.png"
        },
        {
          idProducto: 132,
          secuencial: 4,
          url: "/assets/imagenes/paginaInicial/productos/041833_4.png"
        },
        {
          idProducto: 132,
          secuencial: 5,
          url: "/assets/imagenes/paginaInicial/productos/041833_5.png"
        },
        {
          idProducto: 132,
          secuencial: 6,
          url: "/assets/imagenes/paginaInicial/productos/041833_6.png"
        }
      ],
        descuento: 0,
        nuevo: true,
        destacado: true,
        descripcion: "Carrete tipo convencional ideal para jigging, con cuerpo de aluminio. Cuenta con 11 baleros de acero resistentes a la corrosión. Excelente recuperación. Incluyen cubierta protectora de neopreno."
    
    },
    {
      sku: 12341,
      idProducto: 132,
      nombre: "Pistola CO2 Umarex TDP45",
      modelo: "OA581R30S",
      subcategoria1: "co2",
      subcategoria2: "",
      clasificacion: "Caceria",
      categoria: "pistolas",
      marca: "umarex",
      precio: 1107.00,
      precio_antiguo: 1000.00,
      image: [{
        idProducto: 762,
        secuencial: 1,
        url: "/assets/imagenes/paginaInicial/productos/041910.png"
      }
    ],
      descuento: 0,
      nuevo: true,
      destacado: false,
      descripcion: "Modelo básico e ideal para los fanáticos del CO2 y los que se quieran iniciar en el tiro 4.5mm por su fácil manejo, atractivo diseño, ergonómica y relación calidad precio. La carga de Co2 y el cargador de bola son de fácil cambio y el modo de tiro de doble acción  permite un disparo rápido, también dispone de un raíl Picatinny por si se quiere instalar accesorio para tiro practico."
    },

    {
      sku: 184781,
      idProducto: 1292,
      nombre: "Carrete Laguna LAG4000",
      modelo: "OA581R30S",
      subcategoria1: "carretes",
      subcategoria2: "spinning", 
      clasificacion: "pesca",
      categoria: "aguadulce",
      marca: "daiwa",
      precio: 1057.00,
      precio_antiguo: 1000.00,
      image: [{
        idProducto: 762,
        secuencial: 1,
        url: "/assets/imagenes/paginaInicial/productos/030532.png"
      }
    ],
      descuento: 0,
      nuevo: true,
      destacado: false,
      descripcion: "Nuevo marco compuesto ligero rediseñado y placa lateral, Mango barrido de 90 mm para menos tambaleo, mejor sensación y potencia de bobinado, Perilla de mango suave en forma de I, Sistema de 6 rodamientos (5BB + 1RB) ,Magforce Cast Control, Compuesto fácil de ajustar arrastre de estrellas, Mango barrido de 90 mm para menos oscilación, mejor sensación y potencia de enrollamiento, arrastre de estrella compuesto fácil de ajustar."
    },
      {
        sku: 12821,
        idProducto: 365,
        nombre: "Carrete Silver King SK100",
        modelo: "SK100",
        clasificacion: "pesca",
        categoria: "aguasalada",
        subcategoria1: "carretes",
        subcategoria2: "jigging",
        marca: "yellowtail",
        precio: 4532.00,
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
    {
      sku: 12341,
      idProducto: 132,
      nombre: "Pistola CO2 H&K USP",
      modelo: "OA581R30S",
      subcategoria1: "salva",
      subcategoria2: "",
      clasificacion: "Caceria",
      categoria: "pistolas",
      marca: "h&k",
      precio: 1603.00,
      precio_antiguo: 1000.00,
      image: [{
        idProducto: 762,
        secuencial: 1,
        url: "/assets/imagenes/paginaInicial/productos/037504.png"
      }
    ],
      descuento: 0,
      nuevo: true,
      destacado: false,
      descripcion: "pistola de co2 semiautomatica con unos grandes acabados en cuerpo metalico y fibra de polimero. Esta pistola de co2 logra una velocidad de salida del balin de 130 m/s con balines bola. El funcionamiento de la pistola de co2 Hk es con cargas de gas de 12 gramos, ideal para descargar el cargador de 22 disparos del que dispone esta magnifica pistola de co2."
    },
      {
        sku: 12821,
        idProducto: 287,
        nombre: "Carrete Silver King SK200",
        modelo: "SK200",
        clasificacion: "pesca",
        categoria: "aguadulce",
        subcategoria1: "carretes",
        subcategoria2: "casting",
        marca: "yellowtail",
        precio: 4632.00,
        precio_antiguo: 1000.00,
        image: [{
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/productos/042554_1.png"
        },
        {
          idProducto: 132,
          secuencial: 2,
          url: "/assets/imagenes/paginaInicial/productos/042554_2.png"
        }
      ],
        descuento: 0,
        nuevo: true,
        destacado: true,
        descripcion: "Carrete tipo convencional ideal para jigging, con cuerpo de aluminio. Cuenta con 11 baleros de acero resistentes a la corrosión. Excelente recuperación. Incluyen cubierta protectora de neopreno."
    
    },
      {
        sku: 12821,
        idProducto: 176,
        nombre: "Carrete Silver King SK500",
        modelo: "SK500",
        clasificacion: "pesca",
        categoria: "aguasalada",
        subcategoria1: "carretes",
        subcategoria2: "spinning",
        marca: "yellowtail",
        precio: 4964.00,
        precio_antiguo: 1000.00,
        image: [{
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/productos/042558_1.png"
        },
        {
          idProducto: 132,
          secuencial: 2,
          url: "/assets/imagenes/paginaInicial/productos/042558_2.png"
        }
      ],
        descuento: 0,
        nuevo: true,
        destacado: true,
        descripcion: "Carrete tipo convencional ideal para jigging, con cuerpo de aluminio. Cuenta con 11 baleros de acero resistentes a la corrosión. Excelente recuperación."
    
    },
    {
      sku: 12341,
      idProducto: 132,
      nombre: "Pistola Bereta APX",
      modelo: "OA581R30S",
      subcategoria1: "co2",
      subcategoria2: "",
      clasificacion: "Caceria",
      categoria: "pistolas",
      marca: "pietrobaretta",
      precio: 2090.00,
      precio_antiguo: 1000.00,
      image: [{
        idProducto: 762,
        secuencial: 1,
        url: "/assets/imagenes/paginaInicial/productos/041910.png"
      }
    ],
      descuento: 0,
      nuevo: true,
      destacado: false,
      descripcion: "La Pistola Beretta APX Blow back de postas esta fabricada de metal solo el carro, cañón externo e interno y solo las cachas están fabricadas de polímero especial ABS,y un riel Picatinny para laser. Esta pistola tiene un realismo impresionante, desde sus materiales hasta su funcionamiento, sin duda una de las armas más codiciadas por todos los conocedores. Se puede cortar el carro como una arma de verdad, con sistema de Blow back en el disparo. Con una capacidad con cargador de clip de 19 tiros. Pistola de Co2 Semiautomática."
    },
      {
        sku: 12821,
        idProducto: 195,
        nombre: "Caña Holbox Spinning HO-S-531MH",
        modelo: "HO-S-531MH",
        clasificacion: "pesca",
        categoria: "aguadulce",
        subcategoria1: "cañas",
        subcategoria2: "spinning",
        marca: "yellowtail",
        precio: 2733.00,
        precio_antiguo: 1000.00,
        image: [{
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/productos/045854_1.png"
        },
        {
          idProducto: 132,
          secuencial: 2,
          url: "/assets/imagenes/paginaInicial/productos/045854_2.png"
        },
        {
          idProducto: 132,
          secuencial: 3,
          url: "/assets/imagenes/paginaInicial/productos/045854_3.png"
        },
        {
          idProducto: 132,
          secuencial: 4,
          url: "/assets/imagenes/paginaInicial/productos/045854_4.png"
        },
        {
          idProducto: 132,
          secuencial: 5,
          url: "/assets/imagenes/paginaInicial/productos/045854_5.png"
        }
      ],
        descuento: 0,
        nuevo: true,
        destacado: true,
        descripcion: "Caña para jiggin fabricada en TC24T y un acabado en espiral que le brinda mayor resistencia a la hora del enganche. Ideal para capturas de mediano peso."
    
    },
      {
        sku: 12821,
        idProducto: 400,
        nombre: "Caña Oahu Trolling Convencional OA58130S FUJI",
        modelo: "OA58130S FUJI",
        clasificacion: "pesca",
        categoria: "aguadulce",
        subcategoria1: "cañas",
        subcategoria2: "casting",
        marca: "yellowtail",
        precio: 2655.00,
        precio_antiguo: 1000.00,
        image: [{
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/productos/048072_1.png"
        },
        {
          idProducto: 132,
          secuencial: 2,
          url: "/assets/imagenes/paginaInicial/productos/048072_2.png"
        },
        {
          idProducto: 132,
          secuencial: 3,
          url: "/assets/imagenes/paginaInicial/productos/048072_3.png"
        },
        {
          idProducto: 132,
          secuencial: 4,
          url: "/assets/imagenes/paginaInicial/productos/048072_4.png"
        },
        {
          idProducto: 132,
          secuencial: 5,
          url: "/assets/imagenes/paginaInicial/productos/048072_5.png"
        },
        {
          idProducto: 132,
          secuencial: 6,
          url: "/assets/imagenes/paginaInicial/productos/048072_6.png"
        },
        {
          idProducto: 132,
          secuencial: 7,
          url: "/assets/imagenes/paginaInicial/productos/048072_7.png"
        }
      ],
        descuento: 0,
        nuevo: true,
        destacado: true,
        descripcion: "Caña de trolleo para agua salada ideal para la pesca del sábalo, atún, pez vela y especies medianas. "
    
    },
    {
      sku: 12341,
      idProducto: 132,
      nombre: "Pistola CO2 Bereta Elite II",
      modelo: "OA581R30S",
      subcategoria1: "salva",
      subcategoria2: "",
      clasificacion: "Caceria",
      categoria: "pistolas",
      marca: "pietrobaretta",
      precio: 1791.00,
      precio_antiguo: 1000.00,
      image: [{
        idProducto: 762,
        secuencial: 1,
        url: "/assets/imagenes/paginaInicial/productos/036635.png"
      }
    ],
      descuento: 0,
      nuevo: true,
      destacado: false,
      descripcion: "Con un cargador de 19 tiros, dispara municiones de acero calibre .177 a una velocidad de 410 pps (Es de las más potentes del mercado). Con su accesibilidad en el precio, potencia y diseño de réplica real la convierten en una excelente opción para iniciar en el tiro deportivo.."
    },
    
      {
        sku: 12341,
        idProducto: 1872,
        nombre: "Caña Oahu Trolling Convencional OA581R30S",
        modelo: "OA581R30S",
        subcategoria1: "cañas",
        subcategoria2: "trolling",
        clasificacion: "pesca",
        categoria: "aguadulce",
        marca: "yellowtail",
        precio: 3341.00,
        precio_antiguo: 1000.00,
        image: [{
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/productos/048072_1.png"
        },
        {
          idProducto: 132,
          secuencial: 2,
          url: "/assets/imagenes/paginaInicial/productos/048072_2.png"
        },
        {
          idProducto: 132,
          secuencial: 3,
          url: "/assets/imagenes/paginaInicial/productos/048072_3.png"
        },
        {
          idProducto: 132,
          secuencial: 4,
          url: "/assets/imagenes/paginaInicial/productos/048072_4.png"
        },
        {
          idProducto: 132,
          secuencial: 5,
          url: "/assets/imagenes/paginaInicial/productos/048072_5.png"
        },
        {
          idProducto: 132,
          secuencial: 6,
          url: "/assets/imagenes/paginaInicial/productos/048072_6.png"
        },
        {
          idProducto: 132,
          secuencial: 7,
          url: "/assets/imagenes/paginaInicial/productos/048072_7.png"
        }
      ],
        descuento: 0,
        nuevo: true,
        destacado: true,
        descripcion: "Relleno de polietileno expandible cómodo y de alta densidad, puede aumentar la flotabilidad del chaleco salvavidas en el agua. Composición de poliéster duradero para uso prolongado. Elaborado en un color brillante para su fácil ubicación. Cierre reforzado con protector y broche de ajuste lateral para obtener mayor confort, así como broches inferiores para mejor ajuste. Cuenta con una bolsa frontal multipropósito. Capacidad de 60 kg."
      },
      {
        sku: 12341,
        idProducto: 501,
        nombre: "Chaleco Salvavidas para Kayak",
        clasificacion: "pesca",
        categoria: "snorkel",
        subcategoria1: 'chalecos',
        subcategoria2: '',
        marca: "yellowtail",
        precio: 1500.00,
        precio_antiguo: 1000.00,
        image: [{
          idProducto: 132,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/productos/IMG_9826.png"
        },
        {
          idProducto: 132,
          secuencial: 2,
          url: "/assets/imagenes/paginaInicial/productos/IMG_9840.png"
        }
      ],
        descuento: 0,
        nuevo: true,
        destacado: true,
        descripcion: "Relleno de polietileno expandible cómodo y de alta densidad, puede aumentar la flotabilidad del chaleco salvavidas en el agua. Composición de poliéster duradero para uso prolongado. Elaborado en un color brillante para su fácil ubicación. Cierre reforzado con protector y broche de ajuste lateral para obtener mayor confort, así como broches inferiores para mejor ajuste. Cuenta con una bolsa frontal multipropósito. Capacidad de 60 kg."
      },
      {
        sku: 12341,
        idProducto: 132,
        nombre: "Pistola CO2 Revolver S&W R8",
        modelo: "OA581R30S",
        subcategoria1: "co2",
        subcategoria2: "",
        clasificacion: "Caceria",
        categoria: "pistolas",
        marca: "h&k",
        precio: 1603.00,
        precio_antiguo: 1000.00,
        image: [{
          idProducto: 762,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/productos/036636.png"
        }
      ],
        descuento: 0,
        nuevo: true,
        destacado: false,
        descripcion: "pistola de co2 semiautomatica con unos grandes acabados en cuerpo metalico y fibra de polimero. Esta pistola de co2 logra una velocidad de salida del balin de 130 m/s con balines bola. El funcionamiento de la pistola de co2 Hk es con cargas de gas de 12 gramos, ideal para descargar el cargador de 22 disparos del que dispone esta magnifica pistola de co2."
      },
      {
        sku: 459341,
        idProducto: 765,
        nombre: "Caja para pesca 6201-06",
        categoria: "accesorios ",
        clasificacion: "pesca",
        subcategoria1: 'almacenamiento', 
        subcategoria2: 'cajas', 
        marca: "plano",
        precio: 14010.00,
        precio_antiguo: 529.00,
        image: [{
          idProducto: 134,
          secuencial:1,
          url:"/assets/imagenes/paginaInicial/productos/031708.png"
        }
       
      ],
        descuento: 0,
        nuevo: true,
        destacado: true,
        descripcion: "Caja de pesca 1 bandeja, Divisiones ajustables que permite de 7 a 13 divisiones, 2 compartimientos en la parte superior, Seguro con arillo de metal, 2 Entradas para candado"
      },
     
    
      {
        sku: 12341,
        idProducto: 7121265,
        nombre: "Rifle PCP M16",
        categoria: "rifles",
        clasificacion: "Caceria",
        subcategoria1: 'diabolos',
        subcategoria2: '',
        marca: "blackmoose",
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
        idProducto: 873,
        nombre: "Rifle PR900W",
        categoria: "rifles",
        subcategoria1: 'nitropiston',
        subcategoria2:'', 
        clasificacion: "Caceria",
        marca: "blackmoose",
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
        descuento: 30,
        nuevo: true,
        destacado: true,
        descripcion: "Potencia extrema, precisión, terminaciones de calidad y tecnología de punta son las principales características de estos nuevos modelos.Al ser un rifle regulado, todos sus disparos mantienen la misma velocidad promedio de 950 y 1000 FPS aproximadamente."
      },
      {
        sku: 12341,
        idProducto: 872,
        nombre: "Rifle BP P15",
        categoria: "rifles",
        subcategoria1: 'piston',
        subcategoria2: '', 
        clasificacion: "Caceria",
        marca: "blackmooose",
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
        sku: 865771,
        idProducto: 764,
        nombre: "Caja para pesca 3952-10",
        categoria: "accesorios ",
        subcategoria1: 'almacenamiento', 
        subcategoria2: 'cajas', 
        clasificacion: "pesca",
        marca: "plano",
        precio: 2252.00,
        precio_antiguo: 1224.00,
        image: [{
          idProducto:2,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/productos/025039.png",
        }
      ],
        descuento: 30,
        nuevo: true,
        destacado: true,
        descripcion: "Organizador de doble cubierta, ofrece almacenamiento a granel junto con las opciones de compartimentación para satisfacer sus necesidades específicas. Medidas: 11.4”x 14.5”x 6.5"

      },
      {
        sku: 12341,
        idProducto: 1,
        nombre: "Señuelo Plomero",
        categoria: "aguasalada",
        clasificacion: "pesca",
        subcategoria1: 'señuelos',
        subcategoria2: 'offshore', 
        marca: "magbay",
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
        categoria: "aguasalada",
        clasificacion: "pesca",
        subcategoria1: 'señuelos',
        subcategoria2: 'jigging',
        marca: "magtrack",
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
