import { inject, Injectable } from '@angular/core';
import { UserProfile } from '../models/userProfile';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, catchError, map, Observable, Subject, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  private loginService = inject(LoginService);
  private http = inject(HttpClient);
  userLoginOn:boolean = false;
  userProfile: Subject<UserProfile> = new Subject<UserProfile>();
  errorMessage:String="";

  constructor() { 

    this.loginService.userLoginOn.subscribe({
      next:(userLoginOn) => {
        this.userLoginOn = userLoginOn;
      },
      error: (errorData) => {
        this.errorMessage = errorData;
      },
      complete: () => {
        console.info('User Data ok');
      }
    })

  }

  getUserProfile():Observable<UserProfile>{
    return this.http.get<UserProfile>(environment.urlApi + "/profile").pipe(
      tap((userData) => {
        this.userProfile.next(userData);
      }),
      map((userData)=>userData),
      catchError(this.handleError),
    );
  }

  updateUserProfile(userProfile:UserProfile):Observable<UserProfile>{
    return this.http.put<UserProfile>(environment.urlApi + '/profile', userProfile).pipe(
      tap((userData) => {
        this.userProfile.next(userData);
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
