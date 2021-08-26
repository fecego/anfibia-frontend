import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, OnDestroy} from '@angular/core';
import { Router, Route, ActivatedRoute} from '@angular/router'
import { FormGroup, FormBuilder, FormArray, FormControl, Validators, AbstractControl  } from '@angular/forms';
import { Observable, Observer, Subscription, fromEvent, of, from, interval, concat, throwError, Subject, BehaviorSubject} from 'rxjs';
import { concatMap, filter, map, shareReplay, switchMap, tap, delay, mergeMap, mapTo, merge, catchError, finalize, exhaustMap} from 'rxjs/operators';
import { cuentaActiveService } from '../cuenta-active/cuenta-active.service'
import { ParentToChildService } from '../servicios/parent-to-child.service'
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-cuenta-active',
  templateUrl: './cuenta-active.component.html',
  styleUrls: ['./cuenta-active.component.css']
})

export class CuentaActiveComponent implements OnInit, AfterViewInit {
  @ViewChild('buttonRegister') buttonR: ElementRef;
  constructor(private fb: FormBuilder, private cuentaActiveS: cuentaActiveService, private sharedInfo: ParentToChildService, private spinner: NgxSpinnerService) { 

  }


  public mensaje:boolean;
  public mensajeError:boolean;
  public formLogin = this.fb.group({
    accessData: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],

  });

  public fullResponse;
  public fulError

  ngOnInit(): void {
    this.mensaje = false;
    this.mensajeError = false;

  }

  ngAfterViewInit(){
  
  }


  ngOnDestroy(){
    this.sharedInfo.datoCompartido.next(null);
  }

  onSubmit(){
    this.spinner.show();
    console.log('Presionaste el botón');
    //this.cuentaActiveS.bsCuentaActive.next(true);
    
    const email = this.formLogin.value.accessData;
    this.cuentaActiveS.generateLink(email).subscribe(x => {
      console.log(x);
      console.log('Over here up')
        //this.fullResponse = x
        this.mensaje = true;
        //this.mensajeError = null;
        this.sharedInfo.datoCompartido.next(x);


        //Por que le di true a valor Prueba para activar el Guard, aunque creo que esta mal, dado que ahora podremos ingresar a verificacion cuenta solo generando
        //el email de activación de la cuenta.?
        localStorage.setItem("valorPrueba", "true");
        this.spinner.hide();
    }, error => {
      console.log('Here it is');
      console.log('pinta los errores',error.error.message);
      //this.fulError = error;
      this.mensajeError = true
      this.spinner.hide();
      //this.mensaje = null
      this.sharedInfo.datoCompartido.next(error);
    })
}


}
