import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';

@Component({
  selector: 'app-productos-modal',
  templateUrl: './productos-modal.component.html',
  styleUrls: ['./productos-modal.component.css']
})
export class ProductosModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }
  public productoModal = [];
  @Input() fromParent;

  ngOnInit(): void {
 
    this.productoModal = this.fromParent;
    console.log(this.productoModal);


   
    /* Output:
     {prop1: "Some Data", prop2: "From Parent Component", prop3: "This Can be anything"}
    */
  }
  

  closeModal(sendData) {
    this.activeModal.close(sendData);
  }


  changeImage(dato){
    console.log('Presionaste changeImage', dato);
    var valorImagen = $("#imagen-principal").attr("src")
    console.log("this is dato", dato, "This is imagenPrincipal", valorImagen);
    var cambio = $("#imagen-principal").attr("src", dato);
  }

}
