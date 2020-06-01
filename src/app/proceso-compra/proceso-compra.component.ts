import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../servicios/usuario.service';
import { CarritoInfoService } from '../servicios/carrito-info.service';

@Component({
  selector: 'app-proceso-compra',
  templateUrl: './proceso-compra.component.html',
  styleUrls: ['./proceso-compra.component.css']
})
export class ProcesoCompraComponent implements OnInit {

  constructor(private usuarioDir: UsuarioService, private carrito: CarritoInfoService) { }
  public usuario:any = {}
  public carritoUsuario:any = {};
  public gastosEnvio:number;
  public totalParcial:number = 0;
  public total:number = 0;

  ngOnInit() {
    this.gastosEnvio = 200;
    this.usuario = this.usuarioDir.getUsuario();
    this.usuario = this.usuario[0];
    this.carritoUsuario = this.carrito.getInfoCarrito();
    this.carritoUsuario = this.carritoUsuario[0];
    console.log("Esta es la info del carrio", this.carritoUsuario.productos);
    this.carritoUsuario.productos.forEach(producto => {
        console.log(producto.cantidad, producto.precio);
        producto.totalProductoIndividual = this.totalProductoporCantidad(producto.cantidad,producto.precio);
        console.log(producto.totalProductoIndividual);
        this.totalParcial = this.totalParcial + producto.totalProductoIndividual;
        
    });
    this.total = this.totalParcial + this.gastosEnvio;
    
  }

  totalProductoporCantidad(dato1:number, dato2:number){
    console.log(dato1 * dato2);
    return dato1 * dato2;
  }



}
