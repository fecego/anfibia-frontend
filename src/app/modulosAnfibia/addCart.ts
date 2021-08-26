import { ModalCarritoComponent } from '../modals/modal-carrito/modal-carrito.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
 
export class addCart{


    public productosCarrito;

    constructor(private modalProducto: NgbModal){

    }
    public addCart(dato){
      console.log("This is the dato you want to handle", dato);
      }


      

}

