import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor{

  constructor(private loginService:LoginService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token:String=this.loginService.userToken;
    if(token!=''){
      req=req.clone({
        setHeaders:{
          'Content-Type': 'application/json;charset=utf-8',
          'Accept': 'appication/json',
          'Authorization': `Bearer ${token}`,
        }
      })
    }
    return next.handle(req);
  }
}
