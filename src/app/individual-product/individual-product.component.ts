import { Component, OnInit } from '@angular/core';
/*import * as slick from 'slick-carousel';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import * as ezPlus from 'ez-plus';*/
import { ProductosService } from '../servicios/productos.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { ProductosModalComponent } from '../modals/productos-modal/productos-modal.component';
declare let $:any;


@Component({
  selector: 'app-individual-product',
  templateUrl: './individual-product.component.html',
  styleUrls: ['./individual-product.component.css']
})
export class IndividualProductComponent implements OnInit {

<<<<<<< HEAD
  public customOptions: OwlOptions = {
    items: 8,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    margin: 30,
    
    navSpeed: 2500,
    navText: ['ANTERIOR', 'SIGUIENTE'],
    responsive: {
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
        items: 4
      }
    },
    nav: true
  }

  constructor(private _productos:ProductosService, private route: ActivatedRoute, private modal: NgbModal) { 
    
  }


  public listCart:Array<any> = [];
  public productosInteres:Array<any> = [];
  public productosPescaList:Array<any> = [];
  public productosCaceriaList:Array<any> = [];
  public productoIndividual:any = {};
  public pId;
  public pClasificacion;
  public pdNombre;



  /*Abre una ventana modal pasandole la información obtenida desde el padre, que en este caso es este 
  componente*/
  public openModal(datos) {
    const modalRef = this.modal.open(ProductosModalComponent,
      {
        scrollable: true,
        windowClass: 'myCustomModalClass',
        size: 'lg'
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
  public addCart(datos){
    console.log('this button will make ')
    this.listCart.push(datos);
    console.log(this.listCart);
  }





   /*El Metodo ngOnInit solo se desplegara cuando el componente es desplegado por primera vez*/
=======
  constructor() { }
  
>>>>>>> c86bdb3a2f581c063209187afca7abfc06394fdf
  ngOnInit() {
    console.log("Se cargo el ngOnInit");
    /*Carga la lista del Servicio, es una instancia de la clase ProductosServices*/
    this.productosInteres = this._productos.getProductos();
    
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
     this.route.paramMap.subscribe(params => { 
        this.pId = parseInt(params.get('id'));
        this.pClasificacion = params.get('clasificacion')
        console.log(this.pClasificacion, this.pId);
        this.productoIndividual = this.productosInteres.filter((producto)=>{
          return producto.idProducto === this.pId;
        });
        this.productoIndividual = this.productoIndividual[0];
        console.log(this.productoIndividual);

        /*Tomamos el valor con el que se inicializo y lo asignamos a la función hoverZoom, cada que inice un nuevo componente 
        el valor asignado a la url inicial será el que obtiene del primer elemento.
        */
        this.hoverZoom(this.productoIndividual.image[0].url);
      });

     
  
  
    
     
      
  }     



  /*Nuestras funciones de cambio de Imagen, obtenemos el atributo src, lo asignamos como cambio con el image-container2 que es el contenedor
  de la imagen y finalmente llamamos la función hover, la cual efectuará el zoom a la imagen seleccionada.
  */
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
    $("#image-container2").data('zoom-image', dato).ezPlus({
      zoomWindowFadeIn: 500,
      zoomWindowFadeOut: 500,
      lensFadeIn: 500,
      lensFadeOut: 500,
      scrollZoom: true,
      responsive:true  });  

  }


}
