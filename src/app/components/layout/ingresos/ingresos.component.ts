import { Component } from '@angular/core';
import { ModalComponent } from '../../common/modal/modal.component';
import { Ingreso } from 'src/app/core/models/ingreso';
import { FormAgregarIngresoComponent } from "../../common/form-agregar-ingreso/form-agregar-ingreso.component";
import { FinanzasService } from 'src/app/core/services/finanzas.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-ingresos',
  standalone:true,
  imports: [ModalComponent, FormAgregarIngresoComponent,CurrencyPipe],
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.scss']
})
export class IngresosComponent {

  ingresosDia:number =0;
  ingresosSemana:number =0;
  ingresosMes:number =0;

  ingreso:Ingreso | null = null;
  modal:Boolean = false;

  constructor( private finanzasServ:FinanzasService){

  }

  ngOnInit(){
    this.loadIngreso();
  }

  onCloseModal(){
    this.modal = false;
  }
  onOpenModal(){
    this.modal = true;
  }

  loadIngreso(){
    this.ingresosDia = this.finanzasServ.getIngresosDia();
    this.ingresosSemana = this.finanzasServ.getIngresosSemana();
    this.ingresosMes = this.finanzasServ.getIngresosMes();
  }

  onSaveIngreso(ingreso: Ingreso){
    this.finanzasServ.agregarIngreso(ingreso);
    this.loadIngreso();
    this.ingreso = null;
    this.modal = false;
  }
}
