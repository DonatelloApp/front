import { Component } from '@angular/core';
import { ModalComponent } from '../../common/modal/modal.component';
import { Ingreso } from 'src/app/core/models/ingreso';
import { FormAgregarIngresoComponent } from "../../common/form-agregar-ingreso/form-agregar-ingreso.component";
import { FinanzasService } from 'src/app/core/services/finanzas.service';
import { CommonModule, CurrencyPipe } from '@angular/common';

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
  modalIngreso:Boolean = false;

  constructor( private finanzasServ:FinanzasService){

  }

  ngOnInit(){
    this.loadIngreso();
  }

  onModalFalse(){
    console.log("cerrando modal");
    this.modalIngreso = false;
  }
  onModalTrue(){
    console.log("abriendo modal");
    this.modalIngreso = true;
  }

  loadIngreso(){
    this.ingresosDia = this.finanzasServ.getIngresosDia();
    this.ingresosSemana = this.finanzasServ.getIngresosSemana();
    this.ingresosMes = this.finanzasServ.getIngresosMes();
  }

}
