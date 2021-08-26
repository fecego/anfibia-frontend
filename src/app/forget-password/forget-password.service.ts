import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, Observer, Subscription, fromEvent, of, from, interval, concat, throwError, BehaviorSubject, Subject} from 'rxjs';
import { concatMap, filter, map, shareReplay, switchMap, tap, delay, mergeMap, mapTo, merge, catchError, finalize} from 'rxjs/operators';



type dataObject = {
  message:string,
  status:number,
  statusCode:string
}
@Injectable({
  providedIn: 'root'
})



export class ForgetPasswordService {
  public api = "http://localhost:4000";
  public behaviorSubjectPassword = new BehaviorSubject<boolean>(null);


  constructor(private http: HttpClient) { }


  forgetPassword(email){
    return this.http.get<dataObject>(`${this.api}/forgetPassword/${email}`);

  }


  getTokenForgetPassword(){
    return localStorage.getItem('valorGenerarContraseña');

  }




}
