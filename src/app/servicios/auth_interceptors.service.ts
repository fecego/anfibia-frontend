import {Injectable} from '@angular/core'
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http'
import { UsuariosService } from '../servicios/usuarios.service'
import {Observable, throwError} from 'rxjs';
import { take, tap, exhaustMap, switchMap, catchError} from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable()
export class interceptorsService implements HttpInterceptor{

    constructor(private userServ: UsuariosService, private router: Router){

    }

    intercept(request: HttpRequest<any>,next: HttpHandler ){

        /*Verificamos que exista un usuario loggeado*/
        return this.userServ.isLoggedIn.pipe(
            take(1),
            exhaustMap(user => {
                /*Si el usuario no esta loggeado ejecutamos la request, basicamente si hay TOKEN*/
                if(!user){
                  return next.handle(request)
                }else{
                    /*si el usuario esta loggeado le añadimos a los encabezados el token*/
                    const modified = request.clone({
                        setHeaders: {
                            'Authorization': `Barear ${user}`
                        }
                    })
                    /*Retornamos la petición con los encabezados, podemos interceptar la respuesta y los errores desde el interceptor.*/
                    return next.handle(modified).pipe(catchError(error => {
                        console.log('This is the error i get from the modified request', error);
                        /*Atrapamos si hay un error 403 o 401
                        en caso de que obtengamos un error 403 o 401 de que hemos perdido la sesión, 
                        ejecutaremos un metodo de refresh para el token

                        */
                        if(error.status == 403 || error.status == 401){

                            /*El refresh token obtiene el otro token si existe y lo inserta como token en cada petición*/
                            const refreshToken = this.userServ.getRefreshToken();
                            /*Se obtiene un refreshToken pero es porque se usa el mismo que existe en el refresh, nunca se actualiza el del localStorage ni el del refresh,
                            se pierde la conexión a la base de datos por lo mismo.
                            */
                            if(refreshToken){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
                                return this.userServ.refreshToken().pipe(switchMap(respuesta => {
                                    const modified = request.clone({
                                        setHeaders: {
                                            'Authorization': `Barear ${respuesta}`
                                        }
                                    });

                                    /*Pasamos al subject el nuevo valor que es el token y asignamos el valor al jwtToken del localStorage
                                    finalmente procedemos con la petición  modificada.
                                    */
                                    this.userServ.isLoggedIn.next(respuesta);
                                    localStorage.setItem('jwtToken', JSON.stringify(respuesta))
                                    return next.handle(modified);

                                }))
                                
                            }else{
                                /*CAso de que el refreshToken no exista*/
                                console.log('Send error from interceptor error 403 o 401', error);
                                //this.userServ.logout();
                                return throwError('No existe el refreshToken', error);
                                

                            }
                            
                        }else if(error.status == 410){
                            /*Perdida de la sesión sin posibilidad de recuperar el token, entra porque no*/
                            this.userServ.logout();
                            console.log('Send error from interceptor error 404');
                            this.userServ.isLoggedIn.next(null);
                            return throwError(error);
                        }
                    }));
                    
                }

                /*const modified = request.clone({
                    setHeaders: {
                        'Authorization': `Barear ${user}`
                    }
                })
                return next.handle(modified);*/



                /*return next.handle(modified).pipe(
                    catchError(error => {
                      if(error.status == 403 || error.status == 401){
                        // return this.userServ.refreshToken();
                        
                        console.log('Entramos a la petición fallida');
                        const tokenR = this.userServ.getRefreshToken();
                        
                        this.userServ.isLoggedIn.next(tokenR);
                        localStorage.setItem('jwtToken', tokenR);
                        if(tokenR){
                            return this.userServ.refreshToken().pipe(switchMap(respuesta => {
                                
                                 const modified  = request.clone({
                                    setHeaders: {
                                        'Authorization':`Barear ${respuesta}`
                                    }
                                })
                               
                                return next.handle(modified);
                            }))

                        }else{
                            return throwError('No existe el token RefreshToken')
                        }
                        
                        
                        /*Dependiendo del error que se lance, se va a ejecutar el refreshToken*/

                      /*}else{
                        return throwError('Here is the error',error);
                      }
                      
                        
                        
                        
                        


                    })
                    )*/
                
               
            }),
            
        )
        

    }
}