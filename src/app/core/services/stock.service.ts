import { inject, Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, catchError, map, Observable, tap, throwError } from 'rxjs';
import { Product } from '../models/product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private loginService = inject(LoginService);
  private http = inject(HttpClient);
  userLoginOn: boolean = false;
  products: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(
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

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.urlApi + '/inventory').pipe(
      tap((userData) => {
        this.products.next(userData);
      }),
      map((userData) => userData),
      catchError(this.handleError)
    );
  }

  addProduct(product: Product): Observable<Product> {
    return this.http
      .post<Product>(environment.urlApi + '/inventory', product)
      .pipe(
        tap((userData) => {
          const currentProducts = this.products.getValue();
          currentProducts.push(userData);
          this.products.next(currentProducts);
        }),
        map((userData) => userData),
        catchError(this.handleError)
      );
  }

  updateProduct(product: Product) {
    return this.http
      .put<Product>(
        environment.urlApi + '/inventory/' + product.id,
        product
      )
      .pipe(
        tap((userData) => {
          const currentProducts = this.products.getValue();
          const productIndex = currentProducts.findIndex(
            (productInArray) => productInArray.id == product.id
          );
          currentProducts[productIndex] = userData;
          this.products.next(currentProducts);
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
