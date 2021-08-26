import { Component, OnInit, Input, ViewChild, AfterViewInit, ElementRef} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { PerfilService, } from '../servicios/perfil.service';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators, AbstractControl  } from '@angular/forms';
import { Observable, Observer, Subscription, fromEvent, of, from, interval, concat, throwError} from 'rxjs';
import { concatMap, filter, map, shareReplay, switchMap, tap, delay, mergeMap, mapTo, merge, catchError, finalize, exhaustMap} from 'rxjs/operators';
import { UsuariosService } from '../servicios/usuarios.service';



@Component({
  selector: 'app-register-address',
  templateUrl: './register-address.component.html',
  styleUrls: ['./register-address.component.css']
})
export class RegisterAddressComponent implements OnInit {

  constructor(private perfilS: PerfilService, private fb: FormBuilder, private router: Router, private userStatus:UsuariosService) { }
  public mensaje:any = {};
  public usuarioDirecciones;
  public usuario = {};
  public newAddress;
  public isAutheticated = false;
  private userSub:Subscription;
  //@ViewChild('referButtonAddAddress') buttonAddressRefer: ElementRef;


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
    //const identificador = this.fromParent;
    this.estados = this.perfilS.getStates();


    this.userSub = this.userStatus.isLoggedIn.subscribe(user => {
      this.isAutheticated = !!user
      console.log(this.isAutheticated)
    });
    
  
  }


  

  /*closeModal() {
    this.activeModal.close();
  }*/


  ngAfterViewInit(){
      //fromEvent(this.buttonAddressRefer.nativeElement, 'click').pipe(exhaustMap(() => this.saveNewAddress())).subscribe()

  }


  saveNewAddress(){
    console.log('Presionaste el botón de saveNewAddress');
    
    this.newAddress = {
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

    this.newAddresForm.reset()
    this.router.navigate(['/perfil']);

    /*this.closeModal();*/
    this.perfilS.postAddress(this.newAddress).subscribe(x => console.log(x));
    
  
  }

}
