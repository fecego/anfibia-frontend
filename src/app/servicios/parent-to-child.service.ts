import { Injectable } from '@angular/core';
import { Observable, Observer, Subscription, fromEvent, of, from, interval, concat, throwError, BehaviorSubject, Subject} from 'rxjs';
import { concatMap, filter, map, shareReplay, switchMap, tap, delay, mergeMap, mapTo, merge, catchError, finalize} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ParentToChildService {


  public datoCompartido = new BehaviorSubject<any>(null); 
  constructor() {

   }



   get datoShared(){
     return this.datoCompartido;
   }

  

}
