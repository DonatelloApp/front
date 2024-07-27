import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/core/models/Transaction';
import { FinanzasService } from 'src/app/core/services/finanzas.service';

@Component({
  selector: 'app-limite-gastos',
  standalone:true,
  templateUrl: './limite-gastos.component.html',
  styleUrls: ['./limite-gastos.component.scss']
})
export class LimiteGastosComponent implements OnInit{

  limiteDeGasto = 200000;
  totalGastoDelMes = 0;
  porcentaje :number =0;
  gastosDelMes : Transaction[]=[];

  constructor(private finanzasService: FinanzasService){}

  ngOnInit(): void {
    this.loadGastosDelMes();
    //this.calcularGasto()
  }

  loadGastosDelMes(){
    this.finanzasService.getGastosdelMes().subscribe({
      next:(data)=> {
        this.gastosDelMes = data;
        this.calcularGasto();
      },
      error:(error)=> console.error('Error cargando gastos del mes:', error)
    });
  }

  calcularGasto(){
    this.gastosDelMes.forEach( gasto=> {
      this.totalGastoDelMes += gasto.amount;
    });
    this.totalGastoDelMes = this.totalGastoDelMes / 1000;
    this.calcularPorcentaje();
  }

  calcularPorcentaje(){
    this.porcentaje = (this.totalGastoDelMes / (this.limiteDeGasto / 1000) ) * 100;
  }

}
