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
      subcategoria2: "Spinning",
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
        idProducto: 192,
        nombre: "Caña Senna",
        modelo: "SENS662M",
        clasificacion: "pesca",
        categoria: "cañas",
        subcategoria1: "Agua dulce",
        subcategoria2: "Spinning",
        marca: "Yellow Tail",
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
        sku: 12821,
        idProducto: 198,
        nombre: "Cañas Jigging Agua Salada",
        modelo: "ALCS501XH",
        clasificacion: "pesca",
        categoria: "cañas",
        subcategoria1: "Spinning",
        subcategoria2: "Spinning",
        marca: "Yellow Tail",
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
        categoria: "cañas",
        subcategoria1: "Spinning",
        subcategoria2: "Spinning",
        marca: "Yellow Tail",
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
        sku: 12821,
        idProducto: 365,
        nombre: "Carrete Silver King SK100",
        modelo: "SK100",
        clasificacion: "pesca",
        categoria: "carretes",
        subcategoria1: "Spinning",
        subcategoria2: "Spinning",
        marca: "Yellow Tail",
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
        sku: 12821,
        idProducto: 287,
        nombre: "Carrete Silver King SK200",
        modelo: "SK200",
        clasificacion: "pesca",
        categoria: "carretes",
        subcategoria1: "Spinning",
        subcategoria2: "Spinning",
        marca: "Yellow Tail",
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
    
    }

    ]
  }

  getProductos(){
     return [
      {
        sku: 12821,
        idProducto: 192,
        nombre: "Caña Senna",
        modelo: "SENS662M",
        clasificacion: "pesca",
        categoria: "cañas",
        subcategoria1: "Agua dulce",
        subcategoria2: "Spinning",
        marca: "Yellow Tail",
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
        sku: 12821,
        idProducto: 198,
        nombre: "Cañas Jigging Agua Salada",
        modelo: "ALCS501XH",
        clasificacion: "pesca",
        categoria: "cañas",
        subcategoria1: "Spinning",
        subcategoria2: "Spinning",
        marca: "Yellow Tail",
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
        categoria: "cañas",
        subcategoria1: "Spinning",
        subcategoria2: "Spinning",
        marca: "Yellow Tail",
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
        sku: 12821,
        idProducto: 365,
        nombre: "Carrete Silver King SK100",
        modelo: "SK100",
        clasificacion: "pesca",
        categoria: "carretes",
        subcategoria1: "Spinning",
        subcategoria2: "Spinning",
        marca: "Yellow Tail",
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
        sku: 12821,
        idProducto: 287,
        nombre: "Carrete Silver King SK200",
        modelo: "SK200",
        clasificacion: "pesca",
        categoria: "carretes",
        subcategoria1: "Spinning",
        subcategoria2: "Spinning",
        marca: "Yellow Tail",
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
        categoria: "carretes",
        subcategoria1: "Spinning",
        subcategoria2: "Spinning",
        marca: "Yellow Tail",
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
        sku: 12821,
        idProducto: 195,
        nombre: "Caña Holbox Spinning HO-S-531MH",
        modelo: "HO-S-531MH",
        clasificacion: "pesca",
        categoria: "cañas",
        subcategoria1: "Spinning",
        subcategoria2: "Spinning",
        marca: "Yellow Tail",
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
        categoria: "cañas",
        subcategoria1: "Spinning",
        subcategoria2: "Trolling",
        marca: "Yellow Tail",
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
        nombre: "Caña Oahu Trolling Convencional OA581R30S",
        modelo: "OA581R30S",
        subcategoria1: "Spinning",
        subcategoria2: "Trolling",
        clasificacion: "pesca",
        categoria: "cañas",
        marca: "Yellow Tail",
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
        categoria: "accesorios",
        marca: "",
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
        idProducto: 502,
        nombre: "Rifle PCP M22 ESTE ES EL EDITADO",
        clasificacion: "caceria",
        categoria: "rifles",
        marca: "Black Moose",
        precio: 12444.00,
        precio_antiguo: 2000.00,
        image: [{
          idProducto: 132,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/productos/051277.png"
        },
        {
          idProducto: 132,
          secuencial: 2,
          url: "/assets/imagenes/paginaInicial/productos/051279.png"
        },
        {
          idProducto: 132,
          secuencial: 3,
          url: "/assets/imagenes/paginaInicial/productos/051277.png"
        }
      ],
        descuento: 0,
        nuevo: true,
        destacado: true,
        descripcion: "Este rifle PCP de acción rápida se destaca por su diseño delgado. Su barril con supresor incorporado permite al tirador pasar desapercibido en cualquier entorno. Y su cargador proporciona muchos disparos antes de volver a cargar. Preciso, delgado, elegante."
      
      },
      {
        sku: 12341,
        idProducto: 503,
        nombre: "Rifle PCP M16",
        categoria: "rifles",
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
        descuento: 20,
        nuevo: true,
        destacado: true,
        descripcion: "Este rifle PCP de acción rápida se destaca por su diseño delgado. Su barril con supresor incorporado permite al tirador pasar desapercibido en cualquier entorno. Y su cargador proporciona muchos disparos antes de volver a cargar. Preciso, delgado, elegante."
      },
      {
        sku: 12341,
        idProducto: 765,
        nombre: "Rifle PCP M16",
        categoria: "rifles",
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
        idProducto: 873,
        nombre: "Rifle PR900W",
        categoria: "rifles",
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
        idProducto: 98,
        nombre: "Rifle BP P15",
        categoria: "rifles",
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
        idProducto: 491,
        nombre: "Carrete 1",
        categoria: "carretes",
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
        idProducto: 999,
        nombre: "carrete 2",
        categoria: "carretes",
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
        descuento: 30,
        nuevo: true,
        destacado: true,
        descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
    
      },
      {
        sku: 12343,
        idProducto: 998,
        nombre: "carrete 3",
        categoria: "carretes",
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
        idProducto: 997,
        nombre: "Carrete Onion 2024",
        categoria: "carretes",
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
        idProducto: 996,
        nombre: "carrete 4",
        categoria: "carretes",
        clasificacion: "pesca",
        marca: "Andamar20",
        precio: 1289.23,
        precio_antiguo: 2000.00,
        descuento: 10,
        image: [{
          idProducto: 150,
          secuencial: 1, 
          url: "/assets/imagenes/paginaInicial/carretes/042562_1.png"
        },
        {
          idProducto: 150,
          secuencial: 1, 
          url: "/assets/imagenes/paginaInicial/carretes/042562_1.png"
        }
      ],
        nuevo: false,
        destacado: true,
        descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"        
      },
       {
        sku: 12346,
        idProducto: 995,
        nombre: "Anzuelo Pescado Real6",
        categoria: "anzuelos",
        clasificacion: "pesca",
        marca: "YELLOW TAIL",
        precio: 129.90,
        precio_antiguo: 2000.00,
        image: [{
          idProducto: 156,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/carretes/042557_1.png"
        },
        {
          idProducto: 150,
          secuencial: 1, 
          url: "/assets/imagenes/paginaInicial/carretes/042562_1.png"
        }
      
      
      ],
        descuento:0,
        nuevo: true,
        destacado: true,
        descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"        
      },
      {
        sku: 12347,
        idProducto: 994,
        nombre: "Kayak DirectiveSky7",
        clasificacion: "pesca",
        categoria: "kayaks",
        marca: "Blur",
        precio: 10089.99, 
        precio_antiguo: 2000.00,
        image: [{
          idProducto: 157,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/carretes/042557_1.png"
        },
        {
          idProducto: 150,
          secuencial: 1, 
          url: "/assets/imagenes/paginaInicial/carretes/042562_1.png"
        }
      
      
      ],
        descuento:0,
        nuevo: false,
        destacado: true,   
        
        descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"    
      },
      {
        sku: 12348,
        idProducto: 993,
        nombre: "Gorro de pescar8",
        categoria: "accesorios",
        clasificacion: "pesca",
        marca: "Yellow Tail",
        descuento: 0,
        precio: 12089.18,   
        precio_antiguo: 2000.00,
        image:[{
          idProducto: 158,
          secuencial: 1,
          url:  "/assets/imagenes/paginaInicial/carretes/042554_1.png"
        },
        {
          idProducto: 150,
          secuencial: 1, 
          url: "/assets/imagenes/paginaInicial/carretes/042562_1.png"
        }
      
      
      ],
        nuevo: false,
        destacado: true,
        descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"     
      },
      {
        sku: 12349,
        idProducto: 899,
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
        },
        {
          idProducto: 150,
          secuencial: 1, 
          url: "/assets/imagenes/paginaInicial/carretes/042562_1.png"
        }
      
      
      
      ],
        nuevo: false,
        destacado: false,
        descuento: 20,
        descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"      
      },
      {
        sku: 12349,
        idProducto: 897,
        nombre: "Carrete numero 6",
        categoria: "carretes",
        marca: "YELLOW TAIL",
        precio: 1289.50,
        precio_antiguo: 2000.00,
        image: [{
          idProducto: 159,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/carretes/042694_1.png"
        }
      ],
        descuento: 0,
        nuevo: true,
        destacado: true,
        descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
      },
      {
        sku: 12310,
        idProducto: 894,
        nombre: "carrete 10",
        categoria: "carretes",
        clasificacion: "pesca",
        marca: "Abu Garcia",
        precio: 12229.30,
        precio_antiguo: 2000.00,
        image: [{
          idProducto: 160, 
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/carretes/042699_1.png"
    
        },
        {
          idProducto: 150,
          secuencial: 1, 
          url: "/assets/imagenes/paginaInicial/carretes/042562_1.png"
        }
      ],
        nuevo: true,
        destacado: true,
        descuento: 35,
        descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"        
      },
      {
        sku: 12311,
        idProducto: 891,
        nombre: "Carrete 11",
        categoria: "carretes",
        clasificacion: "pesca",
        marca: "Mindframe",
        precio: 1289.40,
        precio_antiguo: 2000.00,
        image: [{
          idProducto: 161,
          secuencial: 1,
          url:  "/assets/imagenes/paginaInicial/carretes/042560_1.png"
        },
        {
          idProducto: 150,
          secuencial: 1, 
          url: "/assets/imagenes/paginaInicial/carretes/042562_1.png"
        }
      
      ],
        nuevo: true,
        destacado: false, 
        descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"        
      },
      {
        sku: 12312,
        idProducto: 730,
        nombre: "Carrete onion 202013",
        categoria: "carretes",
        marca: "YELLOW TAIL",
        clasificacion: "pesca",
        precio: 29.45,
        precio_antiguo: 2000.00,
        image: [{
          idProducto: 163,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/carretes/042554_1.png"
        },
        {
          idProducto: 150,
          secuencial: 1, 
          url: "/assets/imagenes/paginaInicial/carretes/042562_1.png"
        }
      
      ],
        nuevo: false,
        destacado: true,
        descuento: 50,
        descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
    
      },
      {
        sku: 12313,
        idProducto: 731,
        nombre: "Carrete 24",
        clasificacion: "pesca",
        categoria: "carretes",
        marca: "Andamar20",
        precio: 1289.23,
        precio_antiguo: 2000.00,
        image: [{
          idProducto: 163,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/carretes/042562_1.png"
        },
        {
          idProducto: 150,
          secuencial: 1, 
          url: "/assets/imagenes/paginaInicial/carretes/042562_1.png"
        }
      
      ],
        nuevo: false,
        destacado: true,
        descuento:0,
        descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"        
      },
       {
    
        sku: 12314,
        idProducto: 732,
        nombre: "Anzuelo Pescado Real15",
        clasificacion: "pesca",
        categoria: "anzuelos",
        marca: "YELLOW TAIL",
        precio: 129.90,
        precio_antiguo: 2000.00,
        image: [{
          idProducto: 165,
          secuencial: 1,
          url:"/assets/imagenes/paginaInicial/carretes/042557_1.png"
        },
        {
          idProducto: 150,
          secuencial: 1, 
          url: "/assets/imagenes/paginaInicial/carretes/042562_1.png"
        }
      
      
      ],
        descuento:0,
        nuevo: true,
        destacado: true,
        descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"        
      },
      {
        sku: 12315,
        idProducto: 733,
        nombre: "Kayak DirectiveSky16",
        clasificacion: "pesca",
        categoria: "kayaks",
        marca: "Blur",
        precio: 10089.99, 
        precio_antiguo: 2000.00,
        image: [{
          idProducto: 166,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/carretes/042557_1.png"
        },
        {
          idProducto: 150,
          secuencial: 1, 
          url: "/assets/imagenes/paginaInicial/carretes/042562_1.png"
        }
      
      ],
        descuento: 30,
        nuevo: false,
        destacado: false,
        descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"       
      },
      {
        sku: 12316,
        idProducto: 734,
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
        },
        {
          idProducto: 150,
          secuencial: 1, 
          url: "/assets/imagenes/paginaInicial/carretes/042562_1.png"
        }
      
      ],
        nuevo: false,
        destacado: true,
        descuento: 40,
        descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"     
      },
      {
        sku: 12317,
        idProducto: 735,
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
        },
        {
          idProducto: 150,
          secuencial: 1, 
          url: "/assets/imagenes/paginaInicial/carretes/042562_1.png"
        }
      
      
      ],
        nuevo: false,
        destacado: true,
        descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"      
      },
         {
        sku: 12341,
        idProducto: 1,
        nombre: "Señuelo Plomero",
        categoria: "Anzuelos",
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
        categoria: "Anzuelos",
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
        
    
      }

    ]
  }


  getProductosPesca(){
    return [
      {
        sku: 12341,
        idProducto: 1,
        nombre: "Señuelo Plomero",
        categoria: "Señuelos",
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
        categoria: "Accesorios",
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
        categoria: "Accesorios",
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
        categoria: "Accesorios",
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
        idProducto: 132,
        nombre: "Rifle PCP M22 ESTE ES EL EDITADO",
        clasificacion: "caceria",
        categoria: "Rifles",
        marca: "Black Moose",
        precio: 12444.00,
        precio_antiguo: 2000.00,
        image: [{
          idProducto: 132,
          secuencial: 1,
          url: "/assets/imagenes/paginaInicial/productos/051277.png"
        },
        {
          idProducto: 132,
          secuencial: 2,
          url: "/assets/imagenes/paginaInicial/productos/051279.png"
        },
        {
          idProducto: 132,
          secuencial: 3,
          url: "/assets/imagenes/paginaInicial/productos/051277.png"
        }
      ],
        descuento: 0,
        nuevo: true,
        destacado: true,
        descripcion: "Este rifle PCP de acción rápida se destaca por su diseño delgado. Su barril con supresor incorporado permite al tirador pasar desapercibido en cualquier entorno. Y su cargador proporciona muchos disparos antes de volver a cargar. Preciso, delgado, elegante."
      },
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
        categoria: "Accesorios",
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
        categoria: "Accesorios",
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
        categoria: "Accesorios",
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
        categoria: "Accesorios",
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
        categoria: "Accesorios",
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
        categoria: "Accesorios",
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
        categoria: "Accesorios",
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
