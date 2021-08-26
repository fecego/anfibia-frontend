import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import 'aos/dist/aos.css';
import * as $ from 'jquery';
import { UsuariosService } from './servicios/usuarios.service';
import { ProductosService } from './servicios/productos.service';
import { Observable, Observer, Subscription, fromEvent, of, from, interval, concat, throwError, BehaviorSubject, } from 'rxjs';
import { concatMap, filter, map, shareReplay, switchMap, tap, delay, mergeMap, mapTo, merge, catchError, finalize, exhaustMap, take} from 'rxjs/operators';

import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'anfibiaFecego';
  constructor(private authService: SocialAuthService, private userSer: UsuariosService, private productS: ProductosService){

  }

  ngOnInit(){
    AOS.init();
    this.userSer.autoLogin();
    //this.authService.authState.subscribe(respuestaUser => console.log('This is the userResponse from fb', respuestaUser));
    //this.authService.authState.pipe(concatMap(res => this.userSer.signupWithFb(res))).subscribe(x => console.log('This is the resutlado from the login in fb', x));

    /*Consigue las rutas que el usuario va accediendo y las guarda en un BehaviourSubject*/
    this.productS.getLasRoute().subscribe(x => {
      if("url" in x[0]){
        console.log('This is the value from x[0].url', x[0].url);
        /*Esta es la anterior ruta*/
        this.productS.behaviorRoute.next(x[0].url);

        /*Esta es la ruta actual*/

      }

      if("url" in x[1]){
        this.productS.behaviorRouteCurrent.next(x[1].url);
      }
    }, error => {
      console.log(error);
    })
    

    this.userSer.respuestaSocketDB.subscribe(x => {
      console.log('I have printed this shit', x);

    })


    

  
    /*this.userSer.getConnectionSocket().subscribe(x => {
      console.log('Que iris', x)});*/

    /*this.userSer.respuestaSocket.subscribe(x => {
      console.log('This is the valor of subjectX', x);
    });*/


    /*this.userSer.respuestaSocketDB.subscribe(x => {
     
    });*/

   


    /*this.userSer.respuestaSocketDB.subscribe(x => {
      console.log('Respuesta from db, this should be updated with every changed in the db', x);
      

    });*/
    //this.userSer.autoLogin()
   
  
    
  }  


  pressSomething(){
  
  }
}
