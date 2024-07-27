import { AsyncPipe, CommonModule, CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Ingredient } from 'src/app/core/models/ingredient';
import { MedidaPipe } from 'src/app/core/pipes/medida.pipe';
import { CalculadoraService } from 'src/app/core/services/calculadora.service';

@Component({
  selector: 'app-tabla-calculadora',
  standalone:true,
  imports:[AsyncPipe, CurrencyPipe,MedidaPipe, CommonModule],
  templateUrl: './tabla-calculadora.component.html',
  styleUrls: ['./tabla-calculadora.component.scss']
})
export class TablaCalculadoraComponent implements OnInit{

  ingredientes : Ingredient[] = [];
  title$: Observable<string>;

  total = 0;

  constructor( private calculadora:CalculadoraService){
    this.title$ = this.calculadora.getTitle();
  }

  ngOnInit(): void {
    this.calculadora.ingredientes$.subscribe( ingred => {
      this.ingredientes = ingred;
      this.total = 0;
      this.ingredientes.forEach(element => {
        this.total += element.coste;
      });

    } );
  }
}
