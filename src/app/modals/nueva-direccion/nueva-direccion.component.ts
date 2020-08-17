import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioService } from '../../servicios/usuario.service';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators, AbstractControl  } from '@angular/forms';

@Component({
  selector: 'app-nueva-direccion',
  templateUrl: './nueva-direccion.component.html',
  styleUrls: ['./nueva-direccion.component.css']
})
export class NuevaDireccionComponent implements OnInit {
  @Input() fromParent;

  constructor(public activeModal: NgbActiveModal, private _listaUsuarios: UsuarioService, private fb: FormBuilder) { }
  public mensaje:any = {};
  public usuarioDirecciones;
  public usuario = {};

  

  public estados:Array<any> = [
    "Aguascalientes","Baja California", "Baja California Sur", "Campeche", "Chiapas", "Chihuahua", "Ciudad de México",
    "Coahuila de Zaragoza", "Colima", "Durango", "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "México",
    "Michoacán de Ocampo", "Morelos", "Nayarit", "Nuevo León", "Oaxaca", "Puebla", "Querétaro", "Quintana Roo", 
    "San Luis Potosí", "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz de Ignacio de la Llave", "Yucatán", "Zacatecas"
  ];

  public newAddresForm = this.fb.group({
    nombre: ['', Validators.required],
    apellidos: ['', Validators.required],
    calle: ['', Validators.required],
    colonia: ['', Validators.required],
    numero: ['', [Validators.required, Validators.pattern('[0, 9]+')]],
    codigoPostal: ['', [Validators.required, Validators.pattern('[0-9]{5}]')]],
    pais: ['México', Validators.required],
    estado: ['', Validators.required],
    municipio: ['', Validators.required],
    direccionPrincipal: ['', Validators.required]
  })



  ngOnInit(): void {
  
    this.usuario = this.fromParent;
    console.log(this.usuario);
    console.log("Object that i need ", this.usuario["nombre"]);
    this.newAddresForm.patchValue({
      nombre: this.usuario['nombre'],
      apellidos: this.usuario['apellidos']
    });
    console.log('Datos: ',this.newAddresForm);
 
  }

  closeModal(sendData) {
    this.activeModal.close(sendData);
  }


  addNuevaDireccion(){
    console.log('Presionaste el botón de addNuevaDireccion');
    console.log(this.newAddresForm);
    this.usuarioDirecciones = this._listaUsuarios.getUsuario();
    this.usuarioDirecciones = this.usuarioDirecciones[0];
    var quantityAddress = this.usuarioDirecciones.direccion.length;
    console.log("Este es el largo", quantityAddress)
    if(quantityAddress == 3){
      this.mensaje = {
        mensaje: "*Solo puedes agregar 3 direcciones para guardar, elimina una dirección para poder agregar una nueva"
      }
    }else{
      console.log("Procederemos a guardar tu dato en la base de datos");
    }

    /*console.log('Presionaste addNuevaDireccion');
    this.usuarioDirecciones = this._listaUsuarios.getUsuario();
    console.log("Estos son los usuarios de direcciones", this.usuarioDirecciones)
    this.usuarioDirecciones = this.usuarioDirecciones[0];
    var quantityAddress = this.usuarioDirecciones.direccion.length;
    console.log("Este es el largo", quantityAddress)
    if(quantityAddress == 3){
      this.mensaje = {
        mensaje: "*Solo puedes agregar 3 direcciones para guardar, elimina una dirección para poder agregar una nueva"
      }
    }else{
      console.log("Procederemos a guardar tu dato en la base de datos");
    }*/
  
  
  }
  
  




}
