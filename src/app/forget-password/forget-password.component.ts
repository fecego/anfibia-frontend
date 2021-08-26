import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, OnDestroy} from '@angular/core';
import { Router, Route, ActivatedRoute} from '@angular/router'
import { FormGroup, FormBuilder, FormArray, FormControl, Validators, AbstractControl  } from '@angular/forms';
import { Observable, Observer, Subscription, fromEvent, of, from, interval, concat, throwError, Subject, BehaviorSubject} from 'rxjs';
import { concatMap, filter, map, shareReplay, switchMap, tap, delay, mergeMap, mapTo, merge, catchError, finalize, exhaustMap} from 'rxjs/operators';
import { ForgetPasswordService } from './forget-password.service'
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private fb:FormBuilder, private forgetPasswordService: ForgetPasswordService, private spinner: NgxSpinnerService) { }


  public mensajeError:any;
  public mensajeSucess:string;
  public showForm:boolean;
  public showResponse:boolean;

  public formRecover = this.fb.group({
    accessData:['', [Validators.required, Validators.email]]
  })

  ngOnInit(): void {
  }


  onSubmit(){
    const email = this.formRecover.value.accessData;
    this.spinner.show();
    this.forgetPasswordService.forgetPassword(email).subscribe(respuesta => {
      console.log(respuesta.message);
      //console.log(respuesta.message);
      /*Oculta el formulario y muestra el mensaje*/
      this.showForm = true;
      this.showResponse = true;
      this.mensajeSucess = respuesta.message;
      localStorage.setItem('valorGenerarContraseña', 'true');
      this.spinner.hide();
    }, error => {
      this.showForm = true;
      console.log(error)
      if(error.status == 404){
        this.mensajeError = {
          mensaje: error.error.message,
          status: error.error.statusCode
        }
      }else if(error.status == 401){
        this.mensajeError = {
          mensaje: error.error.message,
          status: error.error.statusCode
        }

      }
      this.spinner.hide();
    })
  }

  ngOnDestroy(){
    
  }

}
