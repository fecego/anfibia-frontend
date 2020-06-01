import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioService } from '../../servicios/usuario.service';

@Component({
  selector: 'app-nueva-direccion',
  templateUrl: './nueva-direccion.component.html',
  styleUrls: ['./nueva-direccion.component.css']
})
export class NuevaDireccionComponent implements OnInit {
  @Input() fromParent;

  constructor(public activeModal: NgbActiveModal, private _listaUsuarios: UsuarioService) { }
  public mensaje:any = {};
  public usuarioDirecciones;
  public usuario = {};
  ngOnInit(): void {
    this.usuario = this.fromParent;
    console.log(this.usuario);
  }

  closeModal(sendData) {
    this.activeModal.close(sendData);
  }


  addNuevaDireccion(dato){
    console.log('Presionaste addNuevaDireccion');
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
    }
  }
  
  




}
