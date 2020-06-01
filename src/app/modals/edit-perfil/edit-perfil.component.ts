import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-perfil',
  templateUrl: './edit-perfil.component.html',
  styleUrls: ['./edit-perfil.component.css']
})
export class EditPerfilComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }
  @Input() fromParent;
  public usuario:Array<any> = [];
  public estados:Array<any> = [
    "Aguascalientes","Baja California", "Baja California Sur", "Campeche", "Chiapas", "Chihuahua", "Ciudad de México",
    "Coahuila de Zaragoza", "Colima", "Durango", "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "México",
    "Michoacán de Ocampo", "Morelos", "Nayarit", "Nuevo León", "Oaxaca", "Puebla", "Querétaro", "Quintana Roo", 
    "San Luis Potosí", "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz de Ignacio de la Llave", "Yucatán", "Zacatecas"
  ]

  
  

  ngOnInit(): void {
    this.estados;
    console.log("Recibira la información del usario");
    this.usuario = this.fromParent;
    console.log("ESta es la información que recibo del usuario", this.usuario);
   
  }

  closeModal(sendData) {
    this.activeModal.close(sendData);
  }

  onSelectedChange(dato){
    

  }

  editarDireccion(dato){
    
    console.log("Este es el dato que vamos a editar", dato);
  }

  nuevaDireccion(dato){
   
    console.log("Este es el objeto que vamos a insertar en la base de datos", dato)
  }

}
