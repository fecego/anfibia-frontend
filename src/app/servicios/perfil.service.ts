import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer, Subscription, fromEvent, of, from, interval, concat, throwError, BehaviorSubject, Subject} from 'rxjs';
import { concatMap, filter, map, shareReplay, switchMap, tap, delay, mergeMap, mapTo, merge, catchError, finalize} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(private http: HttpClient) {

   }
   public api = "https://localhost:4000";
   public subjectRefresh = new Subject<void>();


  getUserInfo(){
    return this.http.get(`${this.api}/perfil/userInfo`);
  }



  getAddresses(){
    return this.http.get(`${this.api}/perfil/userAddres`);
  }

  deleteAddress(sequential){
    return this.http.delete(`${this.api}/perfil/deleteAddress/${sequential}`).pipe(
      tap(() => {
        this.subjectRefresh.next();
      })
    );
   
  }

  
  getStates(){
    return this.http.get(`${this.api}/perfil/states`);

  }

  getCountry(){
    return this.http.get(`${this.api}/perfil/country`);
  }



  get behaviorS(){
    return this.subjectRefresh;
  }

  postAddress(data){
    return this.http.post(`${this.api}/perfilPostAddress/insertNewAddress`, 
    {'phone': data.phone, 'countryId': data.country, 'stateSeq':data.state,
      'street': data.street, 'number': data.number, 'cp': data.postalCode, 'neighborhood': data.neighborhood, 
      'reference': data.reference, 'municipality': data.municipality, 'default': data.direccionPrincipal    
    }).pipe(
      tap(() => {
        this.subjectRefresh.next();
      })
    )
  }


  
  getInformacionUser(){
    return this.http.get(`${this.api}/proceso-compra/getInformacion`);
  }


  editAddress(data){
    console.log('This is the data Im going to send', data)
    return this.http.put(`${this.api}/perfilEditAddress/updateInfoAddress`,
     {'sequential': data.sequential, 'phone': data.phone, 'countryId': data.country, 'stateSeq':data.state,
    'street': data.street, 'number': data.number, 'cp': data.postalCode, 'neighborhood': data.neighborhood, 
    'reference': data.reference, 'municipality': data.municipality, 'default': data.direccionPrincipal
    }).pipe(
      tap( () => {
        console.log('Entramos al tap para actualizar')
        this.subjectRefresh.next();
      })
      
    )
  }






  modifyAddress(dato){
    console.log(dato);
    return this.http.put(`${this.api}/editPredAddress/updateAddress`, {'sequential': dato.sequential, 'default': dato.default}).pipe(
      tap(() =>{
        console.log('Vamos a actualizar la vista desde el seleccionar nueva Dirección')
        this.subjectRefresh.next();
      })
    );
    
  }

  getInfoUserExpress(dato1){
    console.log('This is dato1', dato1)
    return this.http.get(`${this.api}/infoUserExpress/getInfoExpress/${dato1}`).pipe(
      catchError(error => throwError(error))
    );
  }



  communicateApiPayment(dato){
    return this.http.post(`${this.api}/pagoRecibido/getPayment`, {carritoId: dato})
  
  }




  


}
