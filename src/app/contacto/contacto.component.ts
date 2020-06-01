import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  public contacto = {}
  constructor() {}
  
  ngOnInit() {

  }

  enviarMensaje(dato){
    this.contacto = dato;
    console.log("Esta información se enviara al servidor para que lo envie a travez de un metodo del server", this.contacto);
  }

}
