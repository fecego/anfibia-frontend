import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { userLogin } from '../../modelos/userLogin';
import { ProductosService } from '../../servicios/productos.service';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators, AbstractControl  } from '@angular/forms';
import { UsuariosService } from '../../servicios/usuarios.service';
import { Observable, Observer, Subscription, fromEvent, of, from, interval, concat, throwError, Subject} from 'rxjs';
import { concatMap, filter, map, shareReplay, switchMap, tap, delay, mergeMap, mapTo, merge, catchError, finalize, exhaustMap} from 'rxjs/operators';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";




@Component({
  selector: 'app-modal-inicio-sesion',
  templateUrl: './modal-inicio-sesion.component.html',
  styleUrls: ['./modal-inicio-sesion.component.css']
})
export class ModalInicioSesionComponent implements OnInit {

  constructor(private authService: SocialAuthService, public activeModal: NgbActiveModal, private router: Router, private fb: FormBuilder, private userService: UsuariosService, private productS:ProductosService) { }
  public usuario:any = {};
  public pruebaToken;
  public mensajeError = "";
  public userLogin:userLogin;

  public formLogin = this.fb.group({
    accessData: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],

  });

  ngOnInit(): void {
  }

  closeModal() {
    this.activeModal.close();
  }

  closeRed(){
    this.activeModal.close();
    this.router.navigate(['/crear-cuenta']);

  }



  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }


  signOut(): void {
    this.authService.signOut();
  }

  onSubmit(evento){
    console.log('You push submit to Login');
    Observable.create(observer => {
      observer.next(evento)
    }).pipe(exhaustMap(() => 
        this.loginUser()
      )).subscribe(x => { 
        this.router.navigate(['/anfibia-i'])
        this.closeModal();
        
    },errorM => {
      console.log(errorM);
      //console.log('Error m', errorM);
      this.mensajeError = errorM.error.message;
    }
  );
  }


  loginUser(){
    this.userLogin = {
      accessDato: this.formLogin.value.accessData,
      password: this.formLogin.value.password
    }


    return this.userService.usersLogin(this.userLogin)
      
  }

}
