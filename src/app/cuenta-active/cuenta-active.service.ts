import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer, Subscription, fromEvent, of, from, interval, concat, throwError, BehaviorSubject, Subject} from 'rxjs';
import { concatMap, filter, map, shareReplay, switchMap, tap, delay, mergeMap, mapTo, merge, catchError, finalize} from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
  })


  export class cuentaActiveService{
      constructor(private http: HttpClient){

      }

      public api = "http://localhost:4000";
      public bsCuentaActive = new BehaviorSubject<boolean>(null);
      
    
     generateLink(dato){
         return this.http.get(`${this.api}/generateLink/${dato}`).pipe(
             catchError(error => throwError(error)));
     }


     removeLocal(){
         localStorage.removeItem("valorPrueba");
     }


  

  }