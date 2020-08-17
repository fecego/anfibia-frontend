import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators, AbstractControl  } from '@angular/forms';


@Component({
  selector: 'app-edit-perfil',
  templateUrl: './edit-perfil.component.html',
  styleUrls: ['./edit-perfil.component.css']
})
export class EditPerfilComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder) { }
  @Input() fromParent;
  public usuario:Array<any> = [];
  public estados:Array<any> = [
    "Aguascalientes","Baja California", "Baja California Sur", "Campeche", "Chiapas", "Chihuahua", "Ciudad de México",
    "Coahuila de Zaragoza", "Colima", "Durango", "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "México",
    "Michoacán de Ocampo", "Morelos", "Nayarit", "Nuevo León", "Oaxaca", "Puebla", "Querétaro", "Quintana Roo", 
    "San Luis Potosí", "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz de Ignacio de la Llave", "Yucatán", "Zacatecas"
  ]


  
  public newAddresForm = this.fb.group({
    nombre: ['', Validators.required],
    apellidos: ['', Validators.required],
    calle: ['', Validators.required],
    colonia: ['', Validators.required],
    numero: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    codigoPostal: ['', [Validators.required, Validators.pattern('[0-9]{5}')]],
    pais: ['México', Validators.required],
    estado: ['', Validators.required],
    municipio: ['', Validators.required],
    direccionPrincipal: ['', Validators.required]
  })
  
  

  ngOnInit(): void {
    this.estados;
    console.log("Recibira la información del usario");
    this.usuario = this.fromParent;
    console.log("ESta es la información que recibo del usuario", this.usuario);
    this.newAddresForm.patchValue({
      nombre: this.usuario['nombre'],
      apellidos: this.usuario['apellidos'],
      calle: this.usuario['calle'],
      colonia: this.usuario['fraccionamiento'],
      numero: this.usuario['numero'],
      codigoPostal: this.usuario['codigoPostal'],
      pais: this.usuario['pais'],
      estado: this.usuario['estado'],
      municipio: this.usuario['municipio'],
      direccionPrincipal: this.usuario['direccionPrincipal']
    });

  }

  closeModal() {
    this.activeModal.close();
  }

  onSelectedChange(dato){
    

  }


  editDireccion(){
    console.log("Estos son los nuevos datos que quiero editar",this.newAddresForm.get('municipio').value);
    this.newAddresForm.patchValue({
      calle: this.newAddresForm.get('calle').value,
      municipio: this.newAddresForm.get('municipio').value
    });

    console.log(this.newAddresForm.value)
    this.closeModal();
  }

  editarDireccion(dato){
    
    console.log("Este es el dato que vamos a editar", dato);
  }

  nuevaDireccion(dato){
   
    console.log("Este es el objeto que vamos a insertar en la base de datos", dato)
  }

}
