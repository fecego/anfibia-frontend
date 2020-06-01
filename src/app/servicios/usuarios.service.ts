import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor() { }

  getUsuarios(){
    return [{
      nombre: "Adrián",
      apellidos: "Alvarado Mantilla", 
      fecha_nacimiento: "25/06/1992",
      telefono: 2292350398,
      email: "adrianalvaradomantilla@gmail.com",
      contraseña: "quetiimporta",
      terminos: true
    },
    {
      nombre: "Santiao",
      apellidos: "Alvarado Canela", 
      fecha_nacimiento: "25/07/1963",
      telefono: 2292350398,
      email: "salca63@outlook.com",
      contraseña: "marinero",
      terminos: false
    }
  ]
  }
}
