import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Ingredient } from 'src/app/core/models/ingredient';
import { CalculadoraService } from 'src/app/core/services/calculadora.service';

@Component({
  selector: 'app-tabla-calculadora',
  standalone:true,
  imports:[AsyncPipe, CommonModule],
  templateUrl: './tabla-calculadora.component.html',
  styleUrls: ['./tabla-calculadora.component.scss']
})
export class TablaCalculadoraComponent implements OnInit{

  ingredientes : Ingredient[] | null = null;
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
