import { inject, Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, catchError, map, Observable, tap, throwError } from 'rxjs';
import { Customer } from '../models/customer';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private loginService = inject(LoginService);
  private http = inject(HttpClient);
  userLoginOn: boolean = false;
  customers: BehaviorSubject<Customer[]> = new BehaviorSubject<Customer[]>(
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

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(environment.urlApi + '/customers').pipe(
      tap((userData) => {
        this.customers.next(userData);
      }),
      map((userData) => userData),
      catchError(this.handleError)
    );
  }

  addCustomer(customer: Customer): Observable<Customer> {
    return this.http
      .post<Customer>(environment.urlApi + '/customers', customer)
      .pipe(
        tap((userData) => {
          const customersActuales = this.customers.getValue();
          customersActuales.push(userData);
          this.customers.next(customersActuales);
        }),
        map((userData) => userData),
        catchError(this.handleError)
      );
  }

  updateCustomer(customer: Customer) {
    return this.http
      .put<Customer>(
        environment.urlApi + '/customers/' + customer.id,
        customer
      )
      .pipe(
        tap((userData) => {
          const customersActuales = this.customers.getValue();
          const indiceCustomer = customersActuales.findIndex(
            (customerInArray) => customerInArray.id == customer.id
          );
          customersActuales[indiceCustomer] = userData;
          this.customers.next(customersActuales);
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
