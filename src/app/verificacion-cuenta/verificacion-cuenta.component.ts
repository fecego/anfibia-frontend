import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, Route, ActivatedRoute} from '@angular/router';
import {verificacionCuenta } from './verification-cuenta.service';
import { cuentaActiveService } from '../cuenta-active/cuenta-active.service'

@Component({
  selector: 'app-verificacion-cuenta',
  templateUrl: './verificacion-cuenta.component.html',
  styleUrls: ['./verificacion-cuenta.component.css']
})




export class VerificacionCuentaComponent implements OnInit {
  public mensaje;
  public mensajeError;
  public generateLink = false;
  public errorTitle:string;
  public successTitle:string;
  public crearCuenta:boolean = false;
  constructor(private acR: ActivatedRoute, private router: Router, private verificacionCuenta: verificacionCuenta, private cuentaS: cuentaActiveService) { }

  ngOnInit(): void {
    
    console.log('Sup biches este es verificacion-cuenta');
    this.acR.queryParams.subscribe(p => {
      const token = p.token;
      console.log(token)
      this.verificacionCuenta.verificarCuenta(token).subscribe(x=>{
        this.successTitle = 'Cuanta activada',
        this.mensaje = x.message

        //Remueve el acceso al Guard de verficacion cuenta.
        //localStorage.removeItem("valorPrueba");
      },
      error => {
        console.log('This is the error', error);
        localStorage.removeItem("valorPrueba");
        if(error.error.statusCode == 401){
          this.generateLink = true;
          this.errorTitle = 'Token no valido'
          this.mensajeError = 'El token de validación presenta un error, puede ser un error de tiempo de expiración, (Lo cual quiere decír que el enlace ha caducado, dado que el tiempo de vida es de 1 día despues de su generación), o puede deberse a un error en su creación, te sugerimos generar un nuevo enlace de activación';
        }else if(error.error.statusCode == 404){
          this.mensajeError = error.error.message;
          this.crearCuenta = true;
        }else if(error.error.statusCode == 400){
          this.mensajeError = error.error.message;
          this.generateLink = true;

        }
        
        }
      )

      
    })
  }


  ngOnDestroy(){
    localStorage.removeItem("valorPrueba");
    //this.cuentaS.removeLocal();
   
  }

}
