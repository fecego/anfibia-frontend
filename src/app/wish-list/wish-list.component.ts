import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../servicios/productos.service'

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {


  public listaDeseos:Array<any> = [];
  public listaProductosCarrito:Array<any> = [];
  constructor(private _productosLista: ProductosService) {}

  ngOnInit() {
    window.scrollTo({top: 0, behavior: 'smooth'});
    this.listaDeseos = this._productosLista.getProductosWishList();
    this.listaProductosCarrito = this._productosLista.getProductoCarrito();
    console.log(this.listaDeseos);
  }

  removeElemento(dato, indice){
    console.log("Este metodo sirve para eliminar los elementos de la lista de deseos", dato, indice);
    this.listaDeseos.splice(indice, 1);
  }

  addCartElement(dato){
    this.listaProductosCarrito.forEach(producto => {
        if(producto.idProducto === dato.idProducto){
          console.log("El producto ya ha sido añadido previamente");
        }else{
          console.log("Se ha agregado el producto a tu carrito de compras");
        }

    });
  }
}
