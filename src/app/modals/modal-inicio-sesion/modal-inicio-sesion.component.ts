import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-inicio-sesion',
  templateUrl: './modal-inicio-sesion.component.html',
  styleUrls: ['./modal-inicio-sesion.component.css']
})
export class ModalInicioSesionComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal, private router: Router) { }
  public usuario:any = {};

  ngOnInit(): void {
  }

  closeModal() {
    this.activeModal.close();
  }

  iniciarSesion(datos){
    console.log("Este es el usuario que iniciara sesión", datos);
    this.router.navigate(['/anfibia-i']);
    this.closeModal();
  }

}
