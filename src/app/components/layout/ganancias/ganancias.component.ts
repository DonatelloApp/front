import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/core/models/Transaction';
import { FinanzasService } from 'src/app/core/services/finanzas.service';

@Component({
  selector: 'app-ganancias',
  standalone:true,
  imports:[CurrencyPipe],
  templateUrl: './ganancias.component.html',
  styleUrls: ['./ganancias.component.scss']
})
export class GananciasComponent implements OnInit{

  ingresoDelMes: Transaction[]=[];
  gastoDelMes: Transaction[]=[];
  totalGastoDelMes:number = 0;
  totalIngresoDelMes:number = 0;

  ganancias:number =0;

  constructor(private finanzasService: FinanzasService){}

  ngOnInit(): void {
    this.loadIngresoDelMes();
    this.loadGastosDelMes();
  }

  loadIngresoDelMes(){
    this.finanzasService.getIngresosDelMes().subscribe({
      next:(data)=> {
        this.ingresoDelMes = data;

        this.ingresoDelMes.forEach( ing=> {
          this.totalIngresoDelMes += ing.amount;
        });
      },

      error:(error)=> console.error('Error cargando ingresos del mes:', error)
    });
  }

  loadGastosDelMes(){
    this.finanzasService.getGastosdelMes().subscribe({
      next:(data)=> {
        this.gastoDelMes = data;

        this.gastoDelMes.forEach( gasto=> {
          this.totalGastoDelMes += gasto.amount;
        });
        this.calcularGanancia();
      },

      error:(error)=> console.error('Error cargando gastos del mes:', error)
    });
      
  }

  calcularGanancia(){
    this.ganancias = this.totalIngresoDelMes - this.totalGastoDelMes;
  }
}
