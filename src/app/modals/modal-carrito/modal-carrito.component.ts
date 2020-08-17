import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-carrito',
  templateUrl: './modal-carrito.component.html',
  styleUrls: ['./modal-carrito.component.css']
})
export class ModalCarritoComponent implements OnInit {

  constructor(private modal: NgbActiveModal, private router: Router) { }
  @Input() fromParent;
  public productoModalCarrito = [];
  public totalCompra:number;


  ngOnInit(): void {
    this.productoModalCarrito = this.fromParent;
    this.totalCompra = 0;
    this.productoModalCarrito.forEach(producto =>{
      return this.totalCompra = this.totalCompra +producto.precio;
    })
    console.log("Esto es lo que te esta mandando", this.productoModalCarrito);

  }

  closeModal() {
    this.modal.close();
  }


  sendProducto(producto){
    console.log(producto);
    this.router.navigate(['tienda', producto.idProducto, producto.nombre]);
    this.closeModal();
  }

  sendStore(){
    this.router.navigate(['tienda']);
    this.closeModal();
  }

  sendCarrito(){
    this.router.navigate(['carrito']);
    this.closeModal();
  }
}
