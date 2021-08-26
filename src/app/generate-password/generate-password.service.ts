import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { catchError} from 'rxjs/operators'
import { throwError} from 'rxjs'

type dataObject = {
  message:string,
  statusCode:number,
  status:string
}


@Injectable({
  providedIn: 'root'
})
export class generatePasswordService {
  public api = "http://localhost:4000";

  constructor(private http: HttpClient) { }


  generatePassword(token){
    return this.http.get(`${this.api}/generatePassword/${token}`).pipe(
        catchError(error => throwError(error))
    );

  }



  changePassword(token, password){
      return this.http.post<dataObject>(`${this.api}/changePassword`, {token: token, password: password}).pipe(
          catchError(error => throwError(error))
      )
  }




}