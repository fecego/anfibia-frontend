import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../servicios/usuario.service'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditPerfilComponent } from '../modals/edit-perfil/edit-perfil.component';
import { NuevaDireccionComponent } from '../modals/nueva-direccion/nueva-direccion.component';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  public nuevaDir:any = {};
  public usuario:any = {};
  constructor(private _listaUsuarios: UsuarioService, private modalEditar: NgbModal) { }
  public usuarioCreado:any = {};


  ngOnInit() {
    window.scrollTo({top: 0, behavior: 'smooth'});
    this.usuario = this._listaUsuarios.getUsuario();
    this.usuario = this.usuario[0];
    console.log(this.usuario);
    
    
  }

  openModal(datos, dato2){
    console.log('Presioanste openModal');
    console.log("La direccion");
    const modalRef = this.modalEditar.open(EditPerfilComponent,
      {
        scrollable: true,
        windowClass: 'myCustomModalClass',
        size: 'lg'
        // keyboard: false,
        // backdrop: 'static'
      });
    
    this.usuarioCreado = {
      nombre: datos.nombre,
      apellidos: datos.apellidos,
      calle: dato2.calle,
      numero: dato2.numero,
      fraccionamiento: dato2.fraccionamiento,
      municipio: dato2.municipio,
      estado: dato2.estado,
      pais: dato2.pais,
      codigoPostal: dato2.codigoPostal,
      telefono: dato2.telefono
    }
    
    let perfilModal = this.usuarioCreado;
    
  
 
    modalRef.componentInstance.fromParent = perfilModal;
    modalRef.result.then((result) => {
      console.log(result);
    }, (reason) => {
    });
  }

  openModalNuevaDireccion(nombre:string, apellidos:string){
    console.log('Presionaste openModalNuevaDireccion');
    const modalRef = this.modalEditar.open(NuevaDireccionComponent,
      {
        scrollable: true,
        windowClass: 'myCustomModalClass',
        size: 'lg'
        // keyboard: false,
        // backdrop: 'static'
      });

      this.nuevaDir = {
        nombre: nombre,
        apellidos: apellidos
      }

      let infoNuevaDir = this.nuevaDir;
      modalRef.componentInstance.fromParent = infoNuevaDir;
      modalRef.result.then((result) => {
        console.log(result);
      }, (reason) => {
      });

  }

  eliminarDireccion(dato1, dato2, dato3){
    console.log(this.usuario.direccion);
    this.usuario.direccion.splice(dato3,1);
    console.log(this.usuario);
  }

}

