import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators, AbstractControl  } from '@angular/forms';
import { userLogin } from '../modelos/userLogin';
import { UsuariosService } from '../servicios/usuarios.service';
import { NgxSpinnerService } from "ngx-spinner";
import { Observable, Observer, Subscription, fromEvent, of, from, interval, concat, throwError, Subject, BehaviorSubject} from 'rxjs';
import { concatMap, filter, map, shareReplay, switchMap, tap, delay, mergeMap, mapTo, merge, catchError, finalize, exhaustMap} from 'rxjs/operators';
import { Router, NavigationEnd} from '@angular/router'
import { ProductosService } from '../servicios/productos.service';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";


@Component({
  selector: 'app-login-access',
  templateUrl: './login-access.component.html',
  styleUrls: ['./login-access.component.css']
})
export class LoginAccessComponent implements OnInit, AfterViewInit, OnDestroy {


  @ViewChild('buttonRegister') buttonR: ElementRef;

  
  constructor(private authService: SocialAuthService, private fb: FormBuilder, private userService: UsuariosService, private route: Router, private spinner: NgxSpinnerService, private productsS: ProductosService) { }

  
  public formLogin = this.fb.group({
    accessData: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],

  });
  public userLogin:userLogin;

  public pruebaToken;
  public mensajeError = "";
  public mensajeErrorFb;
  public sujeto:BehaviorSubject<boolean> = new BehaviorSubject(true);
  public subjectObj = this.sujeto.asObservable()
  public enlaceActivacion:boolean = false;
  public previousUrl:any;
  public pruebaSubscLogin:Subscription;
  ngOnInit(): void {
      this.authService.authState.subscribe(res => {
        if(res != null){
          this.userService.signupWithFb(res).subscribe(res => {
            this.userService.isLoggedIn.next(res.tokenAcceso);
            this.userService.refreshTokenSubject.next(res.refreshToken)
            this.productsS.subjectRefreshPrueba.next(true);
            this.productsS.subjectRefreshWish.next(true);
            this.productsS.subjectRefreshCartList.next(true);
            this.userService.subjectBehaviorClientInfoBasic.next(true);
  
            const dato = {
              tokenA: res.tokenAcceso,
              refreshT: res.refreshToken
            }
    
            console.log('This is the dato de los tokens', dato);
    
            this.userService.storeToken(dato);
            this.route.navigateByUrl('/anfibia-i');
  
          })
        }else{
          const objectUser = {
            estatus: 'Not-logged',
            mensaje: 'El usuario no se encuentra loggeado'
          }
  
          return new Observable(subscriber => {
            subscriber.next(objectUser)
          }).subscribe(res => console.log(res));

        }
      });

      
    /*this.pruebaSubscLogin = this.authService.authState.subscribe(respuesta => {
      console.log('This is the respuesta from authService', respuesta);
      if(respuesta != null){
         this.userService.signInwithFb(respuesta).subscribe(respuesta => {
          if(respuesta.estatus == 'loggeado'){
            //Cuando el usuario esta loggeado
            this.userService.isLoggedIn.next(respuesta.accessToken);
            this.userService.refreshTokenSubject.next(respuesta.refreshToken);
            /*this.productsS.subjectRefreshPrueba.next(true);
            this.productsS.subjectRefreshWish.next(true);
            this.productsS.subjectRefreshCartList.next(true);
            this.userService.subjectBehaviorClientInfoBasic.next(true);*/
    
            /*const dato = {
              tokenA: respuesta.accessToken,
              refreshT: respuesta.refreshToken
            }
    
            console.log('This is the dato de los tokens', dato);
    
            this.userService.storeToken(dato);
    
            this.route.navigateByUrl('/anfibia-i');
            
    
          }else if(respuesta.estatus == 'no-existe'){
            //cuando el usuario no existe
            this.mensajeErrorFb = respuesta.mensaje;
            console.log(this.mensajeErrorFb);
          }else if(respuesta.estatus == 'Not-logged'){
            //cuando el usuario no esta loggeado
            console.log('REspuesta cuando el usuario no esta loggeado', respuesta.mensaje);
          }
           

         });

      }else{
        const objectUser = {
          estatus: 'Not-logged',
          mensaje: 'El usuario no se encuentra loggeado'
        }
        
        return new Observable(subscriber => {
          subscriber.next(objectUser)
        });
      }

    });
   
    */
    /*this.authService.authState.pipe(concatMap(respuesta => {
      if(respuesta != null){
        return this.userService.signInwithFb(respuesta);
      }else{
        const objectUser = {
          estatus: 'Not-logged',
          mensaje: 'El usuario no se encuentra loggeado'
        }
        
        return new Observable(subscriber => {
          subscriber.next(objectUser)
        });
      }
    })).subscribe(respuesta => {
      console.log('This is the respuesta del login==============================////////////ng', respuesta)
      if(respuesta.estatus == 'loggeado'){
        //Cuando el usuario esta loggeado
        this.userService.isLoggedIn.next(respuesta.accessToken);
        this.userService.refreshTokenSubject.next(respuesta.refreshToken);
        this.productsS.subjectRefreshPrueba.next(true);
        this.productsS.subjectRefreshWish.next(true);
        this.productsS.subjectRefreshCartList.next(true);
        this.userService.subjectBehaviorClientInfoBasic.next(true);

        const dato = {
          tokenA: respuesta.accessToken,
          refreshT: respuesta.refreshToken
        }

        console.log('This is the dato de los tokens', dato);

        this.userService.storeToken(dato);

        this.route.navigateByUrl('/anfibia-i');
        

      }else if(respuesta.estatus == 'no-existe'){
        //cuando el usuario no existe
        this.mensajeErrorFb = respuesta.mensaje;
        console.log(this.mensajeErrorFb);
      }else if(respuesta.estatus == 'Not-logged'){
        //cuando el usuario no esta loggeado
        console.log('REspuesta cuando el usuario no esta loggeado', respuesta.mensaje);
      }


    });*/


    /*this.authService.authState.pipe(concatMap(res => this.userService.signInwithFb(res))).subscribe(respuesta => {
      console.log('Esta es la respuesta que obtuve al autenticarme', respuesta);
      if(respuesta.estatus == 'loggeado'){
        //Here goes everything that must do when someone is logged
        this.userService.isLoggedIn.next(respuesta.accessToken);
        this.userService.refreshTokenSubject.next(respuesta.refreshToken);
        this.productsS.subjectRefreshPrueba.next(true);
        this.productsS.subjectRefreshWish.next(true);
        this.productsS.subjectRefreshCartList.next(true);
        this.userService.subjectBehaviorClientInfoBasic.next(true);

        const dato = {
          tokenA: respuesta.accessToken,
          refreshT: respuesta.refreshToken
        }

        console.log('This is the dato de los tokens', dato);

        this.userService.storeToken(dato);

        this.route.navigateByUrl('/anfibia-i');
      }else{
        this.mensajeErrorFb = respuesta.mensaje;
      }
    }, error => {
      console.log('This is the error when signin', error);
    });*/
    //this.authService.authState.pipe(concatMap(res => this.userService.signupWithFb(res))).subscribe(x => console.log('This is the resutlado from the login in fb', x));
  }

  

  ngAfterViewInit(){
    fromEvent(this.buttonR.nativeElement, 'click').pipe(
    exhaustMap(() => this.loginUser())
    ).subscribe(x => { 
      this.spinner.hide();

      this.productsS.behaviorRoute.subscribe(x => {
        console.log('This is the route I want', x)
        if(x == '/anfibia-i' || x == '/ubicaciones' || x == '/anfibia-pesca' || x == '/anfibia-caceria' || x == '/lista-deseos' || x == '/carrito' || x == '/perfil' || x == '/pedidos' || x == '/tienda'){
          this.previousUrl = x;
          
        }else{
          this.previousUrl = 'anfibia-i';
        }
      })

      this.route.navigateByUrl(`${this.previousUrl}`);
      
        
  },error => {
    this.ngAfterViewInit();
    if(error.error.status == 'inactive'){
      this.enlaceActivacion = true
    }else{
      this.enlaceActivacion = false
    }
    //console.log('Error m', errorM);
    //this.mensajeError = errorM.error;
    //this.mensajeError = error.error.message
   if(error.error.message){
    console.log(error.error.message, error.error.statusCode);
    this.mensajeError = error.error.message;
    this.spinner.hide();
   }else{
     this.spinner.hide();
     console.log(error);
   }
  });
  }

  ngOnDestroy(){
    //this.pruebaSubscLogin.unsubscribe()
  }



    /*Crea el objeto userLoging para mandar los datos al servidor, verificar que el correo o el usuario existan en la base de datos y corro
    borar que la contraseña coincida, retornara error en caso de que no, de que si devolvera el token con la sesión iniciada
    */
   onSubmit(){
     //this.sujeto.pipe(exhaustMap(() => this.loginUser())).subscribe(x => console.log(x));
      
     
   
    
    /*Observable.create(observer => {
      observer.next(evento)
    }).pipe(exhaustMap(() => 
        this.loginUser()
      )).subscribe(x => { this.route.navigate(['/anfibia-i'])
        
      },error => {
        //console.log('Error m', errorM);
        //this.mensajeError = errorM.error;
        console.log(error);
      }
    );*/
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signinWithGoogle():void{
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

  


  seeSomethigng(elemento){
    elemento.subscribe(r => {
      console.log(r);
    })

  }
      
    



   


  


  loginUser(){
    this.userLogin = {
      accessDato: this.formLogin.value.accessData,
      password: this.formLogin.value.password
    }
    this.spinner.show();

    return this.userService.usersLogin(this.userLogin);
      
  }


}
