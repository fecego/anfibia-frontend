import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import * as Mapboxgl from 'mapbox-gl';
import * as Granim from 'granim';
import { BrowserStack } from 'protractor/built/driverProviders';



@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.css']
})


export class UbicacionComponent implements OnInit{
  public sucursalSeleccionada:string;
  public sucursalSanRafael:boolean;
  public sucursalMerida:boolean;
 
  constructor() { 
    this.sucursalSeleccionada = "SELECCIONE UNA SUCURSAL";
    this.sucursalSanRafael = false;
    this.sucursalMerida = false;
  }

  ngOnInit() {
    

    var granimInstance = new Granim({
      element: '#canvas-basic',
      direction: 'left-right',
      isPausedWhenNotInView: true,
      states : {
          "default-state": {
              gradients: [
                  ['#FF0000', '#FF4000'],
                  ['#2EFEF7', '#0101DF'],
                  ['#40FF00', '#01DF01']
              ]
          }
      }
  });
    

  
      
  }

  cambiarSucursal(sucursalSeleccionada){
    console.log(sucursalSeleccionada);
    switch(sucursalSeleccionada){
      case 'SanRafael':{
        this.sucursalMerida = false;
        this.sucursalSanRafael = true;

        break;
      }
      case 'Merida':{
        this.sucursalMerida = true;
        this.sucursalSanRafael = false;

        break;
      }

      case 'SELECCIONE UNA SUCURSAL':{
        this.sucursalMerida = false;
        this.sucursalSanRafael = false;
        break;
      }
        
        
      
    }
  }

}
