import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { tap, map, concatMap, mergeMap, switchMap} from 'rxjs/operators';
import { generatePasswordService } from './generate-password.service'
import { NgxSpinnerService } from "ngx-spinner";



@Component({
  selector: 'app-generate-password',
  templateUrl: './generate-password.component.html',
  styleUrls: ['./generate-password.component.css']
})
export class GeneratePasswordComponent implements OnInit {

  


  constructor(private activeR: ActivatedRoute, private fb:FormBuilder, private genPassService: generatePasswordService, private spinner: NgxSpinnerService) { 

  }

  public mensajeError:string;
  public changePassword:boolean;
  public tokenError:boolean;
  public successMessage:string;
  public formRecover = this.fb.group({
    passwords: this.fb.group({
      password: ['', [Validators.required, Validators.pattern(`^(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$`)]],
      confirmPassword: ['', Validators.required],
    }, {validators: this.comparePasswords})
   

  })

  ngOnInit(): void {

    /*Hacemos el concatMap generando una petición en base al resultado de la anterior subscribción
    Llamamos el metodo para leer el token y generar una respuesta en base a la generación de dicho Token
    Definirá si definimos: 
    1.-Que el usuario solicite otro token por expiración
    2.-Que el usaurio pueda cambiar su clave.
    3.-Que el verifyToken no coincida con el de db, por lo tanto deberá solicitar uno nuevo.

    */
    /*this.activeR.queryParams.subscribe(respuesta => {
      console.log(respuesta.token)
     this.genPassService.generatePassword(respuesta.token).subscribe(x => {
       console.log(x);
     }, error => {
       console.log(error);
     })
    })*/


    /*Obtenemos el token generado y lo añadimos al servicio que leera el token, dicho servicio nos debe retornar la posibilidad de 
    editar la contraseña en caso  de que el token funcione como corresponde*/
    this.activeR.queryParams.pipe(concatMap((x) => 
      this.genPassService.generatePassword(x.token)
    )).subscribe(x => {

      /*No hay mensaje exitoso, solo la activación del formulario*/
      console.log(x);
      this.changePassword = true;
      localStorage.removeItem('valorGenerarContraseña');
    }, error => {
      //Asignamos el error al mensajeError para que lo pinte, no importa el caso
     this.mensajeError = error.error.message;
     this.tokenError = true;
     this.changePassword = false;
    })

 
    

  

    

  }


  
  comparePasswords(group: FormGroup):{[s:string]: boolean} {
    
    let password =group.get('password').value;
    let passwordConfirm = group.get('confirmPassword').value;
    if(password !== passwordConfirm){
      return {'notMatchPassword': true}
    }


  }

  sendPassword(){
    this.spinner.show();
    console.log('Presionaste sendPassword');
    const password = this.formRecover.value.passwords.password;
    this.activeR.queryParams.pipe(concatMap((x) => 
      this.genPassService.changePassword(x.token, password)
    )).subscribe(x => {
      console.log(x.message);
      this.changePassword = false;
      this.successMessage = x.message;
      localStorage.removeItem('valorGenerarContraseña');
      this.spinner.hide();
    }, error => {
      console.log(error);
      this.tokenError = false;
      this.changePassword = false;
      localStorage.removeItem('valorGenerarContraseña');
      this.spinner.hide();
    })
    

  }


  ngOnDestroy(){
    localStorage.removeItem('valorGenerarContraseña');
    
  }

}
