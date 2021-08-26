import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators, AbstractControl  } from '@angular/forms';
import { PerfilService, } from '../../servicios/perfil.service';
import { Observable, Observer, Subscription, fromEvent, of, from, interval, concat, throwError} from 'rxjs';
import { concatMap, filter, map, shareReplay, switchMap, tap, delay, mergeMap, mapTo, merge, catchError, finalize, exhaustMap} from 'rxjs/operators';



@Component({
  selector: 'app-edit-perfil',
  templateUrl: './edit-perfil.component.html',
  styleUrls: ['./edit-perfil.component.css']
})
export class EditPerfilComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder, private perfilS:PerfilService) { }
  @Input() fromParent;
  @ViewChild('referenceButtonEditarAddress') buttonEditarAddress: ElementRef;
  public usuario:Array<any> = [];
  public estados:Observable<any>


  public editAddress;
  public newAddresForm = this.fb.group({
  
    street: ['', Validators.required],
    neighborhood: ['', Validators.required],
    number: ['', [Validators.required, Validators.pattern('[0-9]{1,10}')]],
    postalCode: ['', [Validators.required, Validators.pattern('[0-9]{5}')]],
    country: [{value: 'México', disabled: true}, Validators.required],
    state: ['', Validators.required],
    municipality: ['', Validators.required],
    direccionPrincipal: ['', Validators.required],
    reference: ['', Validators.required],
    phone: ['', [Validators.required, Validators.pattern('[0-9]{10}')]]
  })
  
  

  ngOnInit(): void {
    this.estados = this.perfilS.getStates();
    console.log("Recibira la información del usario");
    this.usuario = this.fromParent;
    console.log("ESta es la información que recibo del usuario", this.usuario);
    this.newAddresForm.patchValue({
      
      street: this.usuario['street'],
      neighborhood: this.usuario['neighborhood'],
      number: this.usuario['number'],
      postalCode: this.usuario['postalCode'],
      country: this.usuario['country'],
      state: this.usuario['stateSeq'],
      municipality: this.usuario['municipality'],
      direccionPrincipal: this.usuario['direccionPrincipal'],
      reference: this.usuario['reference'],
      phone: this.usuario['phone']
    });

  }




  ngAfterViewInit(){
    fromEvent(this.buttonEditarAddress.nativeElement, 'click').pipe(exhaustMap(() => this.editDireccion())).subscribe()
  }

  closeModal() {
    this.activeModal.close();
  }

  onSelectedChange(dato){
    

  }


  editDireccion(){
   
  
      this.editAddress = {
        street: this.newAddresForm.value.street,
        neighborhood: this.newAddresForm.value.neighborhood,
        number: this.newAddresForm.value.number,
        postalCode: this.newAddresForm.value.postalCode,
        country: 1,
        state: this.newAddresForm.value.state,
        municipality: this.newAddresForm.value.municipality,
        direccionPrincipal: this.newAddresForm.value.direccionPrincipal,
        reference: this.newAddresForm.value.reference,
        phone: this.newAddresForm.value.phone,
        sequential: this.fromParent.sequential

      }
  
      console.log('Esto es lo que vamos a enviar con el boton de editar', this.editAddress);
      this.closeModal();
      return this.perfilS.editAddress(this.editAddress);
    
      
  }

 

}
