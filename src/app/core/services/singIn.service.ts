import { inject, Injectable } from '@angular/core';
import { Auth } from '../models/auth';
import { environment } from 'src/environments/environment';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { SingInRequest } from '../models/singInRequest';
import { LoginService } from 'src/app/core/services/login.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SingInService {

  private loginService = inject(LoginService);

  private http = inject(HttpClient);

  constructor() {}

  singIn(credentials:SingInRequest):Observable<Auth>{
    return this.http.post<Auth>(environment.urlApi + '/auth/register', credentials).pipe(
      tap((userData) => {
        sessionStorage.setItem("token", userData.token);
        this.loginService.currentUserData.next(userData.token);
        this.loginService.currentUserLoginOn.next(true);
      }),
      map((userData)=>userData),
      catchError(this.handleError),
    );
  }

  private handleError(error:HttpErrorResponse){
    if(error.status===0){
      console.error('se ha producido un error', error);
    }else{
      console.error('Backend retorno el codigo de estado: ', error.status, error.error)
    }
    return throwError(()=>new Error('Algo fallo. Por favor intente de nuevo'));
   }
}
