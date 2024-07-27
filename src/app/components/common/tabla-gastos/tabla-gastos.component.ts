import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/core/models/Transaction';
import { FinanzasService } from 'src/app/core/services/finanzas.service';

@Component({
  selector: 'app-tabla-gastos',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './tabla-gastos.component.html',
  styleUrls: ['./tabla-gastos.component.scss']
})
export class TablaGastosComponent implements OnInit{

  gastos : Transaction[] = [];

  constructor ( private finanzasService:FinanzasService ){

  }
 
  ngOnInit():void{
    this.obtenerGastosDelMes();
  }

  obtenerGastosDelMes(){
    this.finanzasService.getGastosdelMes().subscribe({
      next:(transacciones) =>{
        this.gastos = transacciones;
      },
      error: ( error )=>{
        console.error('Error obteniendo los gastos del mes:',error);
      }
    })
  }

}
