import { inject, Injectable } from '@angular/core';
import { Proveedor } from '../models/proveedor';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {
  BehaviorSubject,
  catchError,
  map,
  Observable,
  Subject,
  tap,
  throwError,
} from 'rxjs';
import { LoginService } from './login.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProveedoresService {
  private loginService = inject(LoginService);
  private http = inject(HttpClient);
  userLoginOn: boolean = false;
  proveedores: BehaviorSubject<Proveedor[]> = new BehaviorSubject<Proveedor[]>(
    []
  );
  errorMessage: String = '';

  constructor() {
    this.loginService.userLoginOn.subscribe({
      next: (userLoginOn) => {
        this.userLoginOn = userLoginOn;
      },
      error: (errorData) => {
        this.errorMessage = errorData;
      },
      complete: () => {
        console.info('User Data ok');
      },
    });
  }

  getProveedores(): Observable<Proveedor[]> {
    return this.http.get<Proveedor[]>(environment.urlApi + '/providers').pipe(
      tap((userData) => {
        this.proveedores.next(userData);
      }),
      map((userData) => userData),
      catchError(this.handleError)
    );
  }

  addProveedor(proveedor: Proveedor): Observable<Proveedor> {
    return this.http
      .post<Proveedor>(environment.urlApi + '/providers', proveedor)
      .pipe(
        tap((userData) => {
          const proveedoresActuales = this.proveedores.getValue();
          proveedoresActuales.push(userData);
          this.proveedores.next(proveedoresActuales);
        }),
        map((userData) => userData),
        catchError(this.handleError)
      );
  }

  updateProveedor(proveedor: Proveedor) {
    return this.http
      .put<Proveedor>(
        environment.urlApi + '/providers/' + proveedor.id,
        proveedor
      )
      .pipe(
        tap((userData) => {
          const proveedoresActuales = this.proveedores.getValue();
          const indiceProveedor = proveedoresActuales.findIndex(
            (proveedorInArray) => proveedorInArray.id == proveedor.id
          );
          proveedoresActuales[indiceProveedor] = userData;
          this.proveedores.next(proveedoresActuales);
        }),
        map((userData) => userData),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('se ha producido un error', error);
    } else {
      console.error(
        'Backend retorno el codigo de estado: ',
        error.status,
        error.error
      );
    }
    return throwError(
      () => new Error('Algo fallo. Por favor intente de nuevo')
    );
  }
}
