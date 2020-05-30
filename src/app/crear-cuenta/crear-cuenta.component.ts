import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../servicios/usuarios.service';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css']
})
export class CrearCuentaComponent implements OnInit {

  constructor(private route: Router, private _usuarios: UsuariosService) { }
  public usuario:any = {};
  public usuarios:Array<any> = [];
  public mensaje:any = {};
  ngOnInit() {
   

  }

  registrarse(datos:any){
    var arregloEmails = []
   this.usuarios = this._usuarios.getUsuarios();
   this.usuarios.forEach((el) =>{
    arregloEmails.push(el.email);
    
   })
   var aver = arregloEmails.includes(datos.email);
   if(aver == true){
    console.log("El dato existe en el arreglo");
    this.mensaje = {
      message: "El email que intentas registrar ya se encuentra registrado, favor de ingresar otro email"
    }
    return this.mensaje;
   }else{
     console.log("El dato no existe en el arreglo");
     this.mensaje = {
       message : "Usuario Registrado con exito"
     }
     this.route.navigate['/anfibia-i'];
     return this.mensaje;
   }
   

   }

   /*this.usuarios.forEach(element => {
     if(element.email == datos.email){
        this.mensaje = {
          message: "Este correo ya se encuentra registrado"
       }
       return this.mensaje;
     }
     else{
       this.usuarios.push(datos);
       console.log(this.usuarios);
       return this.mensaje = {
         message: "El usuario se ha registrado con exito"
       }
     }
   });*/
  

}
