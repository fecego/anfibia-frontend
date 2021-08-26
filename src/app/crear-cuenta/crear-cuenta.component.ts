import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { ModalCarritoComponent } from '../modals/modal-carrito/modal-carrito.component';
import { ModalFacebookRTCComponent } from '../modals/modal-facebook-rtc/modal-facebook-rtc.component'
import { Router } from '@angular/router';
import { UsuariosService } from '../servicios/usuarios.service';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators, AbstractControl  } from '@angular/forms';
import { invalid } from '@angular/compiler/src/render3/view/util';
import  {scrollToTop} from '../modulosAnfibia/prueba';
import { users} from '../modelos/users'
import { Observable, Observer, Subscription, fromEvent, of, from, interval, concat, throwError} from 'rxjs';
import { concatMap, filter, map, shareReplay, switchMap, tap, delay, mergeMap, mapTo, merge, catchError, finalize, exhaustMap} from 'rxjs/operators';
import { NgxSpinnerService } from "ngx-spinner";
import { ProductosService } from '../servicios/productos.service'
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";





@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css']
})
export class CrearCuentaComponent implements AfterViewInit, OnInit, OnDestroy {
 

  constructor(private _productos: ProductosService, private authService: SocialAuthService, private route: Router, private _usuarios: UsuariosService, private fb: FormBuilder, private modal: NgbModal, private spinner: NgxSpinnerService) { }
  public usuario:users;
  public usuarios:Array<any> = [];
  public mensajeError:any = "";
  public dataSucces:any;
  public mensajeErrorFB:any;
  public mensajeExitoso:any;
  public pruebaSubsc: Subscription;


  @ViewChild('registerButton') registerB:ElementRef;
  


  public registerForm = this.fb.group({
    userName: ['', Validators.required],
    nombre: ['', Validators.required],
    apellidoPaterno: ['', Validators.required],
    apellidoMaterno:['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phoneNumber: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
    passwords: this.fb.group({
      /*Contraseña formada por 1 letra mayuscula,
      7-9 letras o numeros,
      1 letra mayuscula.
      */
      password: ['', [Validators.required, Validators.pattern(`^(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$`)]],
      passwordConfirmado: ['', Validators.required],
    }, {validators: this.comparePasswords}),
    
    fechaNacimiento: ['', Validators.required],
    terminosyCondiciones: ['', Validators.required],
    gender: ['', Validators.required]
  });


  ngOnInit() {

    //this.pruebaSubsc = this.authService.authState.subscribe(res => console.log('This is the response from crearCuenta', res));
    this.authService.authState.subscribe(res => {
      if(res != null){
        this._usuarios.signupWithFb(res).subscribe(res => {
          this._usuarios.isLoggedIn.next(res.tokenAcceso);
          this._usuarios.refreshTokenSubject.next(res.refreshToken)
          this._productos.subjectRefreshPrueba.next(true);
          this._productos.subjectRefreshWish.next(true);
          this._productos.subjectRefreshCartList.next(true);
          this._usuarios.subjectBehaviorClientInfoBasic.next(true);

          const dato = {
            tokenA: res.tokenAcceso,
            refreshT: res.refreshToken
          }
  
          console.log('This is the dato de los tokens', dato);
  
          this._usuarios.storeToken(dato);
          this.route.navigateByUrl('/anfibia-i');

        })
      }else{
        const objectUser = {
          estatus: 'Not-logged',
          mensaje: 'El usuario no se encuentra loggeado'
        }

        return new Observable(subscriber => {
          subscriber.next(objectUser)
        })
      }
    })

    /*this.authService.authState.pipe(concatMap(res => 
     {
      console.log('This is the respuesta', res); 
      if(res != null){
        return this._usuarios.signupWithFb(res)
      }else{
        const objectUser = {
          estatus: 'Not-logged',
          mensaje: 'El usuario no se encuentra loggeado'
        }
        
        return new Observable(subscriber => {
          subscriber.next(objectUser)
        });
        //return Observable.create(objectUser)
      } 
     } 
    )).subscribe(respuesta => {
      console.log('this is the respuesta ======================>', respuesta);
      if(respuesta.estatus == 'cuenta-repetida'){
        //Pintar mensaje de cuenta repetida
        this.mensajeErrorFB = respuesta.mensaje;
      }else if(respuesta.estatus == 'registro-exitoso'){
        //Hacer todo lo concerniente al registro exitoso
        this.mensajeErrorFB = null;
        this._usuarios.isLoggedIn.next(respuesta.tokenAcceso);
        this._usuarios.refreshTokenSubject.next(respuesta.refreshToken)
        this._productos.subjectRefreshPrueba.next(true);
        this._productos.subjectRefreshWish.next(true);
        this._productos.subjectRefreshCartList.next(true);
        this._usuarios.subjectBehaviorClientInfoBasic.next(true);
        console.log('this is the respuesta i get', respuesta);


        const dato = {
          tokenA: respuesta.tokenAcceso,
          refreshT: respuesta.refreshToken
        }

        console.log('This is the dato de los tokens', dato);

        this._usuarios.storeToken(dato);
        this.route.navigateByUrl('/anfibia-i');
        
      }else if(respuesta.estatus == 'Not-logged'){
        
        //Practicamente es cuando la cuenta no se encuentra loggeada, se manda cuando el usuario esta deslogeado
        console.log('Respuesta cuando el usuario no esta loggeado', respuesta);
      }
    });*/


































    
    //==========================================================================================================
    /*this.authService.authState.pipe(concatMap(res => this._usuarios.signupWithFb(res))).subscribe(respuesta => {
      if(respuesta.estatus == 'existe'){
        console.log('Existe carapan la cuenta ya existe, debes crear otra cuenta');
        this.mensajeErrorFB = respuesta.mensaje;
        this.mensajeExitoso = null;
      }else{

        //Aqui se maneja todo el inicio de la logica del signup de Facebook
        this.mensajeExitoso = respuesta.mensaje;
        //this.route.navigateByUrl('/anfibia-i');
        this._usuarios.isLoggedIn.next(respuesta.tokenAcceso);
        this._usuarios.refreshTokenSubject.next(respuesta.refreshToken)
        this._productos.subjectRefreshPrueba.next(true);
        this._productos.subjectRefreshWish.next(true);
        this._productos.subjectRefreshCartList.next(true);
        this._usuarios.subjectBehaviorClientInfoBasic.next(true);
        console.log('this is the respuesta i get', respuesta);


        const dato = {
          tokenA: respuesta.tokenAcceso,
          refreshT: respuesta.refreshToken
        }

        console.log('This is the dato de los tokens', dato);

        this._usuarios.storeToken(dato);
        this.route.navigateByUrl('/anfibia-i');
        /*LocalStorage, eso es lo que se manda*/
      
        /*this.route.navigateByUrl('/anfibia-i');


      }

    });*/

    //========================================================================================================


    //this.authService.authState.subscribe(x => console.log('This is the value of x', x));
    //this.authService.authState.pipe(concatMap(res => this._usuarios.signupWithFb(res))).subscribe(x => console.log('This is the resutlado from the login in fb', x));
    //console.log(this.registerForm);
    scrollToTop();
  
   

  }



  openModalToLogin(){
    const modalRef = this.modal.open(ModalFacebookRTCComponent,
      {
        scrollable: true,
        windowClass: 'myCustomModalClass',
        size: 'md',
        
        // keyboard: false,
        // backdrop: 'static'
      });
  }

  ngAfterViewInit(){
    fromEvent(this.registerB.nativeElement, 'click').pipe(
      exhaustMap(() => this.createUser())).subscribe(
        x => {
          console.log(x)
          this.dataSucces = x;
          localStorage.setItem("valorPrueba", "true");
          this.openModalCarrito();
          this.registerForm.reset();
          this.spinner.hide();
          /*setTimeout(() =>{
            this.
          }, 5000)*/
        },
        error => {
          this.ngAfterViewInit();
          console.log(error.error.message)
          this.mensajeError = error.error.message;
          this.registerForm.patchValue({
            userName: '',
            email: '',
            
          });
          this.spinner.hide();
        }

      )
  }

  ngOnDestroy(){
    //this.pruebaSubsc.unsubscribe();
  }



  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signinWithGoogle ():void{
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }


  signOut(): void {
    this.authService.signOut();
  }

  
  pressMe(){
    this.openModalCarrito();
  }


  onSubmit(evento){

    /*Le decimos que regrese en caso de que el formulario no sea valido, esto para evitar que el usuario lo modifique desde el fron
    es una validación extra.
    */
   

    /*console.log('Presionaste el boton');
    Observable.create(observer => {
      observer.next(evento)
    }).pipe(exhaustMap(() => 
        this.createUser()
      )).subscribe(
        x => {
          console.log(x)
          this.dataSucces = x;
          this.openModalCarrito();
          this.registerForm.reset();*/
          /*setTimeout(() =>{
            this.
          }, 5000)*/
       /* },
        error => {
          console.log(error.error.message)
          this.mensajeError = error.error.message;
          this.registerForm.patchValue({
            userName: '',
            email: '',
            
          })
        }
        
       
        
      
       
      );*/

     
  }



  createUser(){

    if(!this.registerForm.valid){
      return;
    }
    let passwordsVariables = this.registerForm.get('passwords').value;    
    

    this.usuario = {
      userName: this.registerForm.value.userName,
      name: this.registerForm.value.nombre,
      apellidoPaterno: this.registerForm.value.apellidoPaterno,
      apellidoMaterno: this.registerForm.value.apellidoMaterno,
      email: this.registerForm.value.email,
      phoneNumber: this.registerForm.value.phoneNumber,
      password: passwordsVariables.password,
      birthday: this.registerForm.value.fechaNacimiento,
      terminosyCondiciones: this.registerForm.value.terminosyCondiciones,
      gender: this.registerForm.value.gender
    }
    console.log("Este es el json que vamos a mandar a la base de datos", this.usuario);
    this.spinner.show();

    /*patchValue sirve para cambiar los valores del registro*/
    /*this.registerForm.patchValue({
      userName: '',
      nombre: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      email: '',
      password: '',
      phoneNumber:'',
      passwordConfirmado: '',
      passwords: '',
      fechaNacimiento: '',
      terminosyCondiciones:'',
      gender: ''
    })*/

    
    return this._usuarios.postUsuario(this.usuario);

  }


 




  comparePasswords(group: FormGroup):{[s:string]: boolean} {
    
    let password =group.get('password').value;
    let passwordConfirm = group.get('passwordConfirmado').value;
    if(password !== passwordConfirm){
      return {'notMatchPassword': true}
    }


  }


  public openModalCarrito(){
    const modalRef = this.modal.open(ModalCarritoComponent,
     {
       scrollable: true,
       windowClass: 'myCustomModalClass',
       size: 'lg',
       
       // keyboard: false,
       // backdrop: 'static'
     });
   
   //let productoModalCarrito = idUsuario;
   
 

   //modalRef.componentInstance.fromParent = idUsuario;
   modalRef.result.then((result) => {
     console.log(result);
   }, (reason) => {
   });
 }

 
}
