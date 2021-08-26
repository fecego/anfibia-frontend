import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ProductosService } from '../../servicios/productos.service';
import { Observable, Observer, Subscription, fromEvent, of, from, interval, concat, throwError} from 'rxjs';
import { concatMap, filter, map, shareReplay, switchMap, tap, delay, mergeMap, mapTo, merge, catchError, finalize} from 'rxjs/operators';


@Component({
  selector: 'app-modal-carrito',
  templateUrl: './modal-carrito.component.html',
  styleUrls: ['./modal-carrito.component.css']
})
export class ModalCarritoComponent implements OnInit, AfterViewInit {

  constructor(private modal: NgbActiveModal, private router: Router, private _productsS: ProductosService) { }
  @Input() fromParent;
  public productoModalCarrito;
  public totalCompra:number;


  ngOnInit(): void {
   


    /*const datoEntrada = this.fromParent;
    console.log('This is the datoEntrada', datoEntrada);
    this.productoModalCarrito = this._productsS.getProductos_carrito().pipe(map(x => x['rows']));
    //this._productsS.getProductos_carrito(this.productoModalCarrito).subscribe(console.log)

    /*this.totalCompra = 0;
    this.productoModalCarrito.forEach(producto =>{
      return this.totalCompra = this.totalCompra +producto.precio;
    })
    console.log("Esto es lo que te esta mandando", this.productoModalCarrito);*/

  }

  ngAfterViewInit(){
    setTimeout(() => {
      this.modal.close();
      this.router.navigate(['/login']);
    }, 10000);
  }

  closeModal() {
    
    this.modal.close();
    this.router.navigate(['/login'])
  }


  sendProducto(producto){
    console.log(producto);
    this.router.navigate(['tienda', producto.id_producto, producto.nombre_producto]);
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
