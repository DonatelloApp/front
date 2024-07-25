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
    this.calcularGanancia();
  }

  loadIngresoDelMes(){
    this.finanzasService.getIngresosDelMes().subscribe({
      next:(data)=> this.ingresoDelMes = data,
      error:(error)=> console.error('Error cargando ingresos del mes:', error)
    });
  }

  loadGastosDelMes(){
    this.finanzasService.getGastosdelMes().subscribe({
      next:(data)=> this.gastoDelMes = data,
      error:(error)=> console.error('Error cargando gastos del mes:', error)
    });
  }

  calcularGanancia(){
    
    this.ingresoDelMes.forEach( ing=> {
      this.totalIngresoDelMes += ing.amount;
    });

    this.gastoDelMes.forEach( gasto=> {
      this.totalGastoDelMes += gasto.amount;
    })

    this.ganancias = this.totalIngresoDelMes - this.totalGastoDelMes;

  }
}
