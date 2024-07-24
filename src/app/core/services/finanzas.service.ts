import { inject, Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, catchError, map, Observable, tap, throwError } from 'rxjs';
import { Transaction } from '../models/Transaction';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FinanzasService {
  private loginService = inject(LoginService);
  private http = inject(HttpClient);
  userLoginOn: boolean = false;
  transactions: BehaviorSubject<Transaction[]> = new BehaviorSubject<Transaction[]>(
    []
  );
  errorMessage: String = '';

  ganancias=234900;

  ingresos = {
    dia:50280,
    semana:250200,
    mes:850700
  };

  gastos = {
    mes:24650,
    motivo:'Factura',
    monto:52000,
    vencimiento:'03/7/24'
  }

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

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(environment.urlApi + '/finances').pipe(
      tap((userData) => {
        this.transactions.next(userData);
      }),
      map((userData) => userData),
      catchError(this.handleError)
    );
  }

  addTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http
      .post<Transaction>(environment.urlApi + '/finances', transaction)
      .pipe(
        tap((userData) => {
          const currentTransactions = this.transactions.getValue();
          currentTransactions.push(userData);
          this.transactions.next(currentTransactions);
        }),
        map((userData) => userData),
        catchError(this.handleError)
      );
  }

  updateProveedor(transaction: Transaction) {
    return this.http
      .put<Transaction>(
        environment.urlApi + '/finances/' + transaction.id,
        transaction
      )
      .pipe(
        tap((userData) => {
          const currentTransactions = this.transactions.getValue();
          const indiceTransaction = currentTransactions.findIndex(
            (transactionInArray) => transactionInArray.id == transaction.id
          );
          currentTransactions[indiceTransaction] = userData;
          this.transactions.next(currentTransactions);
        }),
        map((userData) => userData),
        catchError(this.handleError)
      );
  }

  //GANANCIAS
  getGanancias(){
    return this.ganancias;
  }

  //INGRESOS
  getIngresosDia(){
    return this.ingresos.dia;
  }
  getIngresosSemana(){
    return this.ingresos.semana;
  }
  getIngresosMes(){
    return this.ingresos.mes;
  }

  agregarIngreso(ingreso:any){
    this.ingresos = ingreso;
  }

  //GASTOS
  getGastos(){
    return this.gastos;
  }
  getGastosMes(){
    return this.gastos.mes;
  }
  cargarGasto(gasto:any){
    this.gastos = gasto;
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
