import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer, Subscription, fromEvent, of, from, interval, concat, throwError, BehaviorSubject, Subject} from 'rxjs';
import { concatMap, filter, map, shareReplay, switchMap, tap, delay, mergeMap, mapTo, merge, catchError, finalize} from 'rxjs/operators';
type datoO = {
    title:string,
    message:string,
    statusCode: number,
    status:string
  }
@Injectable({
    providedIn: 'root',
  })


  export class verificacionCuenta{
      constructor(private http: HttpClient){

      }

      public api = "http://localhost:4000";

      
    
     verificarCuenta(dato){
         return this.http.get<datoO>(`${this.api}/verificar-cuenta/${dato}`).pipe(
             catchError(error => throwError(error)));
     }

  }