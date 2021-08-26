import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators, AbstractControl  } from '@angular/forms';
import { mensaje } from '../modelos/mensaje';
import  {scrollToTop} from '../modulosAnfibia/prueba';
import { UsuariosService } from '../servicios/usuarios.service'
import { Observable, Observer, Subscription, fromEvent, of, from, interval, concat, throwError} from 'rxjs';
import { concatMap, filter, map, shareReplay, switchMap, tap, delay, mergeMap, mapTo, merge, catchError, finalize, exhaustMap} from 'rxjs/operators';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements AfterViewInit, OnInit {

  public mensaje:mensaje;
  @ViewChild('saveButtonContact') saveBContact: ElementRef;
  @ViewChild('buttonContacto') bContacto: ElementRef;
  constructor(private fb: FormBuilder, private userService: UsuariosService, private spinner: NgxSpinnerService) {}


  public contactForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]], 
      asunto: ['', Validators.required],
      mensaje: ['', Validators.required]
  })
  
  ngOnInit() {
    scrollToTop();
    

  }

  ngAfterViewInit(){
    fromEvent(this.bContacto.nativeElement, 'click').pipe(
      
      exhaustMap(() => this.sendMail()
      )
    ).subscribe(x => {
       console.log('Entramos a la subscripcion', x)
       this.contactForm.reset();
       this.spinner.hide();
    },error => {
        console.log('Entramso al error en la subscripción', error); 
        this.ngAfterViewInit();
        this.contactForm.reset();
        
        console.log(error)
        this.spinner.hide();
      });
    
  }

  onSubmit(evento){
    /*console.log('Hello'),
    Observable.create(observer => {
      observer.next(evento);
    }).pipe(exhaustMap(() => 
        this.sendMail()
      )).subscribe()*/
     
  

    



  }

  sendMail(){
    this.mensaje = {
      nombre: this.contactForm.value.nombre,
      email: this.contactForm.value.email,
      asunto: this.contactForm.value.asunto,
      mensaje: this.contactForm.value.mensaje
    }

    
    console.log(this.mensaje);
    this.spinner.show();
    /*this.contactForm.patchValue({
      nombre: '', 
      email: '',
      asunto: '',
      mensaje: ''

    });*/
    
    return this.userService.sendEmailContact(this.mensaje)
    

  }

}
