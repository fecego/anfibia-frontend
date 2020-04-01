import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() { 

  }

  getProductos(){
     return [
      {
        sku: 12341,
        idProducto: 1,
        nombre: "Caña de pescar 1",
        categoria: "cañas",
        marca: "YELLOW TAIL",
        precio: 1289.50,
        image: "/assets/imagenes/paginaInicial/carretes/042694_1.png",
        nuevo: true,
        destacado: true
      },
      {
        sku: 123452,
        idProducto: 2,
        nombre: "Caña de pescar Tatsukimuya kayato",
        categoria: "cañas",
        marca: "Abu Garcia",
        precio: 12229.30,
        image: "/assets/imagenes/paginaInicial/carretes/042699_1.png",
        nuevo: true,
        destacado: true        
      },
      {
        sku: 12343,
        idProducto: 3,
        nombre: "Caña de pescar Orci Hayato",
        categoria: "cañas",
        marca: "Mindframe",
        precio: 1289.40,
        image: "/assets/imagenes/paginaInicial/carretes/042560_1.png",
        nuevo: true,
        destacado: false        
      },
      {
        sku: 12344,
        idProducto: 4,
        nombre: "Carrte onion 2020",
        categoria: "cañas",
        marca: "YELLOW TAIL",
        precio: 29.45,
        image: "/assets/imagenes/paginaInicial/carretes/042554_1.png",
        nuevo: false,
        destacado: true

      },
      {
        sku: 12345,
        idProducto: 5,
        nombre: "Caña de pescar Yustukira",
        categoria: "cañas",
        marca: "Andamar20",
        precio: 1289.23,
        image: "/assets/imagenes/paginaInicial/carretes/042562_1.png",
        nuevo: false,
        destacado: true        
      },
       {
        sku: 12346,
        idProducto: 6,
        nombre: "Anzuelo Pescado Real",
        categoria: "Anzuelos",
        marca: "YELLOW TAIL",
        precio: 129.90,
        image: "/assets/imagenes/paginaInicial/carretes/042557_1.png",
        nuevo: true,
        destacado: true        
      },
      {
        sku: 12347,
        idProducto: 7,
        nombre: "Kayak DirectiveSky",
        categoria: "Kayaks",
        marca: "Blur",
        precio: 10089.99, 
        image: "/assets/imagenes/paginaInicial/carretes/042557_1.png",
        nuevo: false,
        destacado: true       
      },
      {
        sku: 12348,
        idProducto: 7,
        nombre: "Gorro de pescar",
        categoria: "Accesorios",
        marca: "Yellow Tail",
        precio: 12089.18,   
        image: "/assets/imagenes/paginaInicial/carretes/042554_1.png",
        nuevo: false,
        destacado: true     
      },
      {
        sku: 12349,
        idProducto: 8,
        nombre: "Caja para pescar RiverBox",
        categoria: "Accesorios",
        marca: "YELLOW TAIL",
        precio: 599.20,  
        image: "/assets/imagenes/paginaInicial/carretes/042560_1.png",
        nuevo: false,
        destacado: false      
      },
      {
        sku: 12349,
        idProducto: 9,
        nombre: "Caña de pescar 1",
        categoria: "cañas",
        marca: "YELLOW TAIL",
        precio: 1289.50,
        image: "/assets/imagenes/paginaInicial/carretes/042694_1.png",
        nuevo: true,
        destacado: true
      },
      {
        sku: 12310,
        idProducto: 10,
        nombre: "Caña de pescar Tatsukimuya kayato",
        categoria: "cañas",
        marca: "Abu Garcia",
        precio: 12229.30,
        image: "/assets/imagenes/paginaInicial/carretes/042699_1.png",
        nuevo: true,
        destacado: true        
      },
      {
        sku: 12311,
        idProducto: 11,
        nombre: "Caña de pescar Orci Hayato",
        categoria: "cañas",
        marca: "Mindframe",
        precio: 1289.40,
        image: "/assets/imagenes/paginaInicial/carretes/042560_1.png",
        nuevo: true,
        destacado: false        
      },
      {
        sku: 12312,
        idProducto: 12,
        nombre: "Carrte onion 2020",
        categoria: "cañas",
        marca: "YELLOW TAIL",
        precio: 29.45,
        image: "/assets/imagenes/paginaInicial/carretes/042554_1.png",
        nuevo: false,
        destacado: true

      },
      {
        sku: 12313,
        idProducto: 13,
        nombre: "Caña de pescar Yustukira",
        categoria: "cañas",
        marca: "Andamar20",
        precio: 1289.23,
        image: "/assets/imagenes/paginaInicial/carretes/042562_1.png",
        nuevo: false,
        destacado: true        
      },
       {

        sku: 12314,
        idProducto: 14,
        nombre: "Anzuelo Pescado Real",
        categoria: "Anzuelos",
        marca: "YELLOW TAIL",
        precio: 129.90,
        image: "/assets/imagenes/paginaInicial/carretes/042557_1.png",
        nuevo: true,
        destacado: true        
      },
      {
        sku: 12315,
        idProducto: 15,
        nombre: "Kayak DirectiveSky",
        categoria: "Kayaks",
        marca: "Blur",
        precio: 10089.99, 
        image: "/assets/imagenes/paginaInicial/carretes/042557_1.png",
        nuevo: false,
        destacado: false       
      },
      {
        sku: 12316,
        idProducto: 16,
        nombre: "Gorro de pescar",
        categoria: "Accesorios",
        marca: "Yellow Tail",
        precio: 12089.18,   
        image: "/assets/imagenes/paginaInicial/carretes/042554_1.png",
        nuevo: false,
        destacado: true     
      },
      {
        sku: 12317,
        idProducto: 17,
        nombre: "Caja para pescar RiverBox",
        categoria: "Accesorios",
        marca: "YELLOW TAIL",
        precio: 599.20,  
        image: "/assets/imagenes/paginaInicial/carretes/042560_1.png",
        nuevo: false,
        destacado: true      
      }
    ]
  }


  getProductosPesca(){
    return [
      {
        nombre: "Caña de pescar 1",
        categoria: "cañas",
        marca: "YELLOW TAIL",
        precio: 1289.50,
        image: "/assets/imagenes/paginaInicial/carretes/042694_1.png",
        nuevo: true,
        destacado: true
      },
      {
        nombre: "Caña de pescar Tatsukimuya kayato",
        categoria: "cañas",
        marca: "Abu Garcia",
        precio: 12229.30,
        image: "/assets/imagenes/paginaInicial/carretes/042699_1.png",
        nuevo: true,
        destacado: true        
      },
      {
        nombre: "Caña de pescar Orci Hayato",
        categoria: "cañas",
        marca: "Mindframe",
        precio: 1289.40,
        image: "/assets/imagenes/paginaInicial/carretes/042560_1.png",
        nuevo: true,
        destacado: false        
      },
      {
        nombre: "Carrte onion 2020",
        categoria: "cañas",
        marca: "YELLOW TAIL",
        precio: 29.45,
        image: "/assets/imagenes/paginaInicial/carretes/042554_1.png",
        nuevo: false,
        destacado: true

      },
      {
        nombre: "Caña de pescar Yustukira",
        categoria: "cañas",
        marca: "Andamar20",
        precio: 1289.23,
        image: "/assets/imagenes/paginaInicial/carretes/042562_1.png",
        nuevo: false,
        destacado: true        
      },
       {
        nombre: "Anzuelo Pescado Real",
        categoria: "Anzuelos",
        marca: "YELLOW TAIL",
        precio: 129.90,
        image: "/assets/imagenes/paginaInicial/carretes/042557_1.png",
        nuevo: true,
        destacado: true        
      },
      {
        nombre: "Kayak DirectiveSky",
        categoria: "Kayaks",
        marca: "Blur",
        precio: 10089.99, 
        image: "/assets/imagenes/paginaInicial/carretes/042557_1.png",
        nuevo: false,
        destacado: true       
      },
      {
        nombre: "Gorro de pescar",
        categoria: "Accesorios",
        marca: "Yellow Tail",
        precio: 12089.18,   
        image: "/assets/imagenes/paginaInicial/carretes/042554_1.pn",
        nuevo: false,
        destacado: true     
      },
      {
        nombre: "Caja para pescar RiverBox",
        categoria: "Accesorios",
        marca: "YELLOW TAIL",
        precio: 599.20,  
        image: "/assets/imagenes/paginaInicial/carretes/042560_1.png",
        nuevo: false,
        destacado: true      
      }
    ]
  }


  getProductosCaceria(){
    return [
      {
        nombre: "Caña de pescar 1",
        categoria: "cañas",
        marca: "YELLOW TAIL",
        precio: 1289.50,
        image: "/assets/imagenes/paginaInicial/carretes/042694_1.png",
        nuevo: true,
        destacado: true
      },
      {
        nombre: "Caña de pescar Tatsukimuya kayato",
        categoria: "cañas",
        marca: "Abu Garcia",
        precio: 12229.30,
        image: "/assets/imagenes/paginaInicial/carretes/042699_1.png",
        nuevo: true,
        destacado: true        
      },
      {
        nombre: "Caña de pescar Orci Hayato",
        categoria: "cañas",
        marca: "Mindframe",
        precio: 1289.40,
        image: "/assets/imagenes/paginaInicial/carretes/042560_1.png",
        nuevo: true,
        destacado: false        
      },
      {
        nombre: "Carrte onion 2020",
        categoria: "cañas",
        marca: "YELLOW TAIL",
        precio: 29.45,
        image: "/assets/imagenes/paginaInicial/carretes/042554_1.png",
        nuevo: false,
        destacado: true

      },
      {
        nombre: "Caña de pescar Yustukira",
        categoria: "cañas",
        marca: "Andamar20",
        precio: 1289.23,
        image: "/assets/imagenes/paginaInicial/carretes/042562_1.png",
        nuevo: false,
        destacado: true        
      },
       {
        nombre: "Anzuelo Pescado Real",
        categoria: "Anzuelos",
        marca: "YELLOW TAIL",
        precio: 129.90,
        image: "/assets/imagenes/paginaInicial/carretes/042557_1.png",
        nuevo: true,
        destacado: true        
      },
      {
        nombre: "Kayak DirectiveSky",
        categoria: "Kayaks",
        marca: "Blur",
        precio: 10089.99, 
        image: "/assets/imagenes/paginaInicial/carretes/042557_1.png",
        nuevo: false,
        destacado: true       
      },
      {
        nombre: "Gorro de pescar",
        categoria: "Accesorios",
        marca: "Yellow Tail",
        precio: 12089.18,   
        image: "/assets/imagenes/paginaInicial/carretes/042554_1.pn",
        nuevo: false,
        destacado: true     
      },
      {
        nombre: "Caja para pescar RiverBox",
        categoria: "Accesorios",
        marca: "YELLOW TAIL",
        precio: 599.20,  
        image: "/assets/imagenes/paginaInicial/carretes/042560_1.png",
        nuevo: false,
        destacado: true      
      }
    ]
  }


  getProductosSupervivencia(){
    return [
      {
        nombre: "Caña de pescar 1",
        categoria: "cañas",
        marca: "YELLOW TAIL",
        precio: 1289.50,
        image: "/assets/imagenes/paginaInicial/carretes/042694_1.png",
        nuevo: true,
        destacado: true
      },
      {
        nombre: "Caña de pescar Tatsukimuya kayato",
        categoria: "cañas",
        marca: "Abu Garcia",
        precio: 12229.30,
        image: "/assets/imagenes/paginaInicial/carretes/042699_1.png",
        nuevo: true,
        destacado: true        
      },
      {
        nombre: "Caña de pescar Orci Hayato",
        categoria: "cañas",
        marca: "Mindframe",
        precio: 1289.40,
        image: "/assets/imagenes/paginaInicial/carretes/042560_1.png",
        nuevo: true,
        destacado: false        
      },
      {
        nombre: "Carrte onion 2020",
        categoria: "cañas",
        marca: "YELLOW TAIL",
        precio: 29.45,
        image: "/assets/imagenes/paginaInicial/carretes/042554_1.png",
        nuevo: false,
        destacado: true

      },
      {
        nombre: "Caña de pescar Yustukira",
        categoria: "cañas",
        marca: "Andamar20",
        precio: 1289.23,
        image: "/assets/imagenes/paginaInicial/carretes/042562_1.png",
        nuevo: false,
        destacado: true        
      },
       {
        nombre: "Anzuelo Pescado Real",
        categoria: "Anzuelos",
        marca: "YELLOW TAIL",
        precio: 129.90,
        image: "/assets/imagenes/paginaInicial/carretes/042557_1.png",
        nuevo: true,
        destacado: true        
      },
      {
        nombre: "Kayak DirectiveSky",
        categoria: "Kayaks",
        marca: "Blur",
        precio: 10089.99, 
        image: "/assets/imagenes/paginaInicial/carretes/042557_1.png",
        nuevo: false,
        destacado: true       
      },
      {
        nombre: "Gorro de pescar",
        categoria: "Accesorios",
        marca: "Yellow Tail",
        precio: 12089.18,   
        image: "/assets/imagenes/paginaInicial/carretes/042554_1.pn",
        nuevo: false,
        destacado: true     
      },
      {
        nombre: "Caja para pescar RiverBox",
        categoria: "Accesorios",
        marca: "YELLOW TAIL",
        precio: 599.20,  
        image: "/assets/imagenes/paginaInicial/carretes/042560_1.png",
        nuevo: false,
        destacado: true      
      }
    ]
  }


}
