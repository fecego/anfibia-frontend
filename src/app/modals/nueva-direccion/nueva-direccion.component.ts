import { Component, OnInit, Input, ViewChild, AfterViewInit, ElementRef} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PerfilService, } from '../../servicios/perfil.service';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators, AbstractControl  } from '@angular/forms';
import { Observable, Observer, Subscription, fromEvent, of, from, interval, concat, throwError} from 'rxjs';
import { concatMap, filter, map, shareReplay, switchMap, tap, delay, mergeMap, mapTo, merge, catchError, finalize, exhaustMap} from 'rxjs/operators';

@Component({
  selector: 'app-nueva-direccion',
  templateUrl: './nueva-direccion.component.html',
  styleUrls: ['./nueva-direccion.component.css']
})
export class NuevaDireccionComponent implements OnInit {
  @Input() fromParent;

  constructor(public activeModal: NgbActiveModal, private perfilS: PerfilService, private fb: FormBuilder) { }
  public mensaje:any = {};
  public usuarioDirecciones;
  public usuario = {};
  public newAddress;
  @ViewChild('referButtonAddAddress') buttonAddressRefer: ElementRef;
  

  public estados:Observable<any>;

  public newAddresForm = this.fb.group({
    //name: ['', Validators.required],
    //apellidos: ['', Validators.required],
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
    const identificador = this.fromParent;
    this.estados = this.perfilS.getStates();
    
  
  }


  

  closeModal() {
    this.activeModal.close();
  }


  ngAfterViewInit(){
      fromEvent(this.buttonAddressRefer.nativeElement, 'click').pipe(exhaustMap(() => this.saveNewAddress())).subscribe()

  }


  saveNewAddress(){
    console.log('Presionaste el botón de saveNewAddress');
    this.newAddress = {
      userId: this.fromParent,
      street: this.newAddresForm.value.street,
      neighborhood: this.newAddresForm.value.neighborhood,
      number: this.newAddresForm.value.number,
      postalCode: this.newAddresForm.value.postalCode,
      country: 1,
      state: this.newAddresForm.value.state,
      municipality: this.newAddresForm.value.municipality,
      direccionPrincipal: this.newAddresForm.value.direccionPrincipal,
      reference: this.newAddresForm.value.reference,
      phone: this.newAddresForm.value.phone
    }

    console.log('Esto es lo que vamos a enviar', this.newAddress);

    this.newAddresForm.patchValue({
      userId: '',
      street:'',
      neighborhood: '',
      number:'',
      postalCode: '',
      country: '',
      state: '',
      municipality: '',
      direccionPrincipal: '',
      reference: '',
      phone: ''
    }
      

    )

    this.closeModal();
    return this.perfilS.postAddress(this.newAddress);
    
  
  }
  
  




}
