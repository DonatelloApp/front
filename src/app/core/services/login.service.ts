import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, catchError, tap, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginRequest } from '../models/loginRequest';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  currentUserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  currentUserData: BehaviorSubject<String> = new BehaviorSubject<String>("");

  constructor(private http:HttpClient) {
    this.currentUserLoginOn = new BehaviorSubject<boolean>(sessionStorage.getItem("token")!=null);
    this.currentUserData = new BehaviorSubject<String>(sessionStorage.getItem("token") || "");
   }

   login(credentials:LoginRequest):Observable<any>{
    return this.http.post<any>(environment.urlApi + '/auth/login', credentials).pipe(
      tap((userData) => {
        sessionStorage.setItem("token", userData.token);
        this.currentUserData.next(userData.token);
        this.currentUserLoginOn.next(true);
      }),
      map((userData)=>userData.token),
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

   logOut():void{
    sessionStorage.removeItem("token");
    this.currentUserLoginOn.next(false);
   }

   get userToken():String{
    return this.currentUserData.value;
   }

   get userLoginOn(){
    return this.currentUserLoginOn.asObservable();
   }
}
