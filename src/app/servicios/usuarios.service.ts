import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer, Subscription, fromEvent, of, from, interval, concat, throwError, BehaviorSubject, Subject} from 'rxjs';
import { concatMap, filter, map, shareReplay, switchMap, tap, delay, mergeMap, mapTo, merge, catchError, finalize, take} from 'rxjs/operators';
import { io } from 'socket.io-client'
import { ProductosService } from './productos.service'
import { Router} from '@angular/router';

export interface user{
  tokenA:string
  refreshT:string
}

@Injectable({
  providedIn: 'root'
})





export class UsuariosService {




  /*Propiedades para generar el loggin y logout*/
  //public isLogged = BehaviorSubject;
  

  public isLoggedIn = new BehaviorSubject<any>(null);
  public refreshTokenSubject = new BehaviorSubject<any>(null);
  public subjectBehaviorClientInfoBasic = new BehaviorSubject<any>(null);


  public api = "https://localhost:4000";
  public respuestaSocket = new BehaviorSubject<any>(null);
  public respuestaSocketDB = new BehaviorSubject<any>(null);
  private socket:any;
  public messagesFromDb = [];
  public sMessagesFromDb = new BehaviorSubject<any>(null);


  constructor(private http: HttpClient, private productsS: ProductosService, private router:Router) { 

    /*Se establece la conexión al objeto io y lo asignamos al socket*/
    this.socket = io(this.api);
  }



  get isLoggedInData(){
    return this.isLoggedIn;

  }



  get subjectInfoClient(){
    return this.subjectBehaviorClientInfoBasic;
  }

  getConnectionSocket(){
    return Observable.create(observer => {
      /*this.socket.on('message', (data) => {
        console.log('This is the dataConnection', data);
        this.respuestaSocket.next(data);
      });*/
  
      /*Obtenemos la información que se nos emite  con el socket.on y el nombre del evento*/
      this.socket.on('databaseResultados', (data) => {
        console.log('This is the data', data);
         observer.next(data);
  
        //this.respuestaSocketDB.next(data);
      });
    }).pipe(
      tap(data => this.respuestaSocketDB.next(data))
    )
      



    /*this.socket.on('message', (data) => {
      console.log('This is the dataConnection', data);
      this.respuestaSocket.next(data);

    this.socket.on('databaseResultados', (data) => {
      console.log('This is the data', data);
       this.respuestaSocketDB.next(data);

      //this.respuestaSocketDB.next(data);
    });
    return this.respuestaSocketDB.next(data);
      
    });*/


    
    /*socket.emit('messageBack', {messageBack: 'Este es un mensaje que se pintara en el server xd'});*/



  }

  getNotificaciones(){
    return this.respuestaSocketDB.subscribe(x => {
      console.log('This is the data que quiero puta mierda de vida', x);
    })
  }


 





  getUsuarios(){
    return [{
      nombre: "Adrián",
      apellidos: "Alvarado Mantilla", 
      fecha_nacimiento: "25/06/1992",
      telefono: 2292350398,
      email: "adrianalvaradomantilla@gmail.com",
      contraseña: "quetiimporta",
      terminos: true
    },
    {
      nombre: "Santiao",
      apellidos: "Alvarado Canela", 
      fecha_nacimiento: "25/07/1963",
      telefono: 2292350398,
      email: "salca63@outlook.com",
      contraseña: "marinero",
      terminos: false
    }
  ]
  }

  postUsuario(dato){
    return this.http.post(`${this.api}/usersRegister/post`, {'userName': dato.userName, 'name': dato.name, 'apellidoPaterno': dato.apellidoPaterno, 'apellidoMaterno': dato.apellidoMaterno, 'email': dato.email, 'phoneNumber': dato.phoneNumber, 'password': dato.password, 'birthday': dato.birthday, 'terminosyCondiciones': dato.terminosyCondiciones, 'gender': dato.gender}).pipe(
      catchError(error => throwError(error))
    ); 

  }

  sendEmailContact(dato){
    return this.http.post(`${this.api}/sendEmail/prueba`, {'nombre': dato.nombre, 'from': dato.email, 'subject': dato.asunto, 'text':dato.mensaje}).pipe(
      catchError(error => throwError(error))
    );
  }

  /*Le estamos diciendo que la respuesta que nos regresara será del tipo user, que en esta caso nos retorna un token*/
  usersLogin(dato){
    return this.http.post<user>(`${this.api}/usersLogin/loggin`, {'email': dato.accessDato, 'password': dato.password}).pipe(
      catchError(error => throwError(error)),
      tap(
      respuesta => {

     


      /*const c = respuesta.toString();
      const d = c.split('.');
      const f = atob(d[1]);
      const g = JSON.parse(f);
      const z = new Date().toLocaleString();*/
      
      
     
      console.log(respuesta); 
      this.isLoggedIn.next(respuesta.tokenA);
      this.refreshTokenSubject.next(respuesta.refreshT);
      this.productsS.subjectRefreshPrueba.next(true);
      this.productsS.subjectRefreshWish.next(true);
      this.productsS.subjectRefreshCartList.next(true);
      this.subjectBehaviorClientInfoBasic.next(true);

      /*LocalStorage, eso es lo que se manda*/
      this.storeToken(respuesta);
      }));
  }




  signupWithFb(resultado):Observable<any>{
    return this.http.post(`${this.api}/signup-facebook`, {'email': resultado.email, 'firstName': resultado.firstName, 'id': resultado.id, 'lastName': resultado.lastName, 'name': resultado.name, 'authToken': resultado.authToken});
  }

  signInwithFb(resultado):Observable<any>{
    return this.http.post(`${this.api}/signin-facebook`, {'email': resultado.email, 'firstName': resultado.firstName, 'id': resultado.id, 'lastName': resultado.lastName, 'name': resultado.name, 'authToken': resultado.authToken});

  }

  getInfoBasicClient(){
    return this.http.get(`${this.api}/clientBasicInfo/getInfoBasicClient`).pipe(
      take(1),
      catchError(error => throwError(error)
      ));
  }



  /*Este metodo se ejecut al iniciar la aplicación 
  obtiene el estado del token para loggear si contamos con el dato.
  */
  autoLogin(){
    const d = this.getToken();
    if(!d){
      localStorage.removeItem('jwtToken');
      return this.isLoggedIn.next(null);
      
    }
    this.isLoggedIn.next(d);
  }



  autoLogOut(){
    
  }



  refreshToken(){
    return this.http.post(`${this.api}/refreshToknes/rTokens`, {refreshToken: this.getRefreshToken()})
  }



  


 


  storeToken(dato){
    localStorage.setItem('jwtToken', dato.tokenA);
    localStorage.setItem('refreshToken', dato.refreshT);
  
  }


  getToken(){
    return localStorage.getItem('jwtToken');
  }


  getRefreshToken(){
    console.log('This is the localStorage Refresh', localStorage.getItem('refreshToken'));
    return localStorage.getItem('refreshToken');
  }


  logout(){
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('jwtToken');
    this.router.navigate(['/login']);
  }



 


}
