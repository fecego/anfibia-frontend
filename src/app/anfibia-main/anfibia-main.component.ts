import { Component, OnInit } from '@angular/core';
import * as Granim from 'granim';
import * as AOS from 'aos';
import { ProductosService } from '../servicios/productos.service';


@Component({
  selector: 'app-anfibia-main',
  templateUrl: './anfibia-main.component.html',
  styleUrls: ['./anfibia-main.component.css']
})
export class AnfibiaMainComponent implements OnInit {
  constructor(private _productosS: ProductosService) { }

  public productos = [];


  ngOnInit(){

    this.productos = this._productosS.getProductos();
    console.log(this.productos);
    
  }

}
