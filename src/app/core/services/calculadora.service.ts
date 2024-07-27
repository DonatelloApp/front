import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Ingredient } from '../models/ingredient';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  constructor() { }
  
  private title = new BehaviorSubject<string>('');
  private ingredientsSubject = new BehaviorSubject <Ingredient[]>([]);
  ingredientes$: Observable<Ingredient[]> = this.ingredientsSubject.asObservable();

  
  agregarIngrediente(nuevoIngrediente:Ingredient){

    const ingredienteModificado = this.calcularIngrediente(nuevoIngrediente);

    const ingredienteActual = this.ingredientsSubject.value;
    this.ingredientsSubject.next([ ...ingredienteActual, ingredienteModificado ])
  }

  private calcularIngrediente( ingr: Ingredient ){
    let precioModificado = 0;

    if(ingr.unit === 'kg' || ingr.unit === 'lt'){
      precioModificado = ingr.cantidad * ingr.price / 1000;
    }
    if(ingr.unit === 'un'){
      precioModificado = ingr.price * ingr.cantidad;
    }    
    
    return{ ...ingr, coste:precioModificado }
  }


  limpiarIngredientes(){
    this.ingredientsSubject.next([]);
  }

  getTitle(): Observable<string>{
    return this.title.asObservable();
  }

  setTitle(titulo: string){
    this.title.next(titulo);
  }



}
