import { Component } from '@angular/core';
import { ModalComponent } from '../../common/modal/modal.component';
import { Ingreso } from 'src/app/core/models/ingreso';
import { FormAgregarIngresoComponent } from "../../common/form-agregar-ingreso/form-agregar-ingreso.component";
import { FinanzasService } from 'src/app/core/services/finanzas.service';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Transaction } from 'src/app/core/models/Transaction';

@Component({
  selector: 'app-ingresos',
  standalone:true,
  imports: [ModalComponent, FormAgregarIngresoComponent,CurrencyPipe,CommonModule],
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.scss']
})
export class IngresosComponent {

  ingresosDia:number =0;
  ingresosSemana:number =0;
  ingresosMes:number =0;

  ingreso:Ingreso | null = null;

  ingresosDelDia : Transaction[] = [];
  ingresosDeLaSemana : Transaction[] = [];
  ingresosDelMes : Transaction[] = [];

  modalIngreso:Boolean = false;

  constructor( private finanzasServ:FinanzasService){

  }

  ngOnInit(){
    this.loadIngresosDelDia();
    this.loadIngresosDeLaSemana();
    this.loadIngresosDelMes();
  }

  onModalFalse(){
    console.log("cerrando modal");
    this.modalIngreso = false;
  }
  onModalTrue(){
    console.log("abriendo modal");
    this.modalIngreso = true;
  }

  loadIngresosDelDia(){
    this.finanzasServ.getIngresosDelDia().subscribe({
      next:(data) => {
        this.ingresosDelDia = data
        this.ingresosDelDia.forEach( ing =>{
          this.ingresosDia += ing.amount;
        });
      },
      error:(error) => console.error('Error cargando ingresos del dia:', error)
    });
    
  }

  loadIngresosDeLaSemana(){
    this.finanzasServ.getIngresosDeLaSemana().subscribe({
      next:(data) => {
        this.ingresosDeLaSemana = data
        this.ingresosDeLaSemana.forEach( ing =>{
          this.ingresosSemana += ing.amount;
        });
      },
      error:(error) => console.error('Error cargando ingresos del mes:', error)
    });
  }

  loadIngresosDelMes(){
    this.finanzasServ.getIngresosDelMes().subscribe({
      next:(data) => {
        this.ingresosDelMes = data
        this.ingresosDelMes.forEach( ing =>{
          this.ingresosMes += ing.amount;
        });
      },
      error:(error) => console.error('Error cargando ingresos del mes:', error)
    });
  }

}
