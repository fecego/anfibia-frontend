import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../servicios/usuarios.service';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators, AbstractControl  } from '@angular/forms';
import { invalid } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css']
})
export class CrearCuentaComponent implements OnInit {

  constructor(private route: Router, private _usuarios: UsuariosService, private fb: FormBuilder) { }
  public usuario:any = {};
  public usuarios:Array<any> = [];
  public mensaje:any = {};
  


  public registerForm = this.fb.group({
    userName: ['', Validators.required],
    nombre: ['', Validators.required],
    apellidoPaterno: ['', Validators.required],
    apellidoMaterno:['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    passwords: this.fb.group({
      password: ['', [Validators.required, Validators.pattern('[A-Z]{1}[a-z1-9]{7,9}[A-Z]{1}')]],
      passwordConfirmado: ['', Validators.required],
    }, {validators: this.comparePasswords}),
    
    fechaNacimiento: ['', Validators.required],
    terminosyCondiciones: ['', Validators.required],
  });


  ngOnInit() {
    console.log(this.registerForm);
    window.scrollTo({top: 0, behavior: 'smooth'});
  
   

  }

  


  onSubmit(){
    let passwordsVariables = this.registerForm.get('passwords').value;    
    var usuario = {
      userName: this.registerForm.value.userName,
      name: this.registerForm.value.nombre,
      apellidoPaterno: this.registerForm.value.apellidoPaterno,
      apellidoMaterno: this.registerForm.value.apellidoMaterno,
      email: this.registerForm.value.email,
      password: passwordsVariables.password,
      passwordConfirmado: passwordsVariables.passwordConfirmado,
      birthday: this.registerForm.value.fechaNacimiento,
      terminosyCondiciones: this.registerForm.value.terminosyCondiciones
      
    }
    console.log("ESte es el json que vamos a mandar a la base de datos", usuario);
    this.registerForm.patchValue({
      userName: '',
      nombre: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      email: '',
      password: '',
      passwordConfirmado: '',
      fechaNacimiento: '',
      terminosyCondiciones:''
    })
  }





  comparePasswords(group: FormGroup):{[s:string]: boolean} {
    
    let password =group.get('password').value;
    let passwordConfirm = group.get('passwordConfirmado').value;
    if(password !== passwordConfirm){
      return {'notMatchPassword': true}
    }


  }

 
}
