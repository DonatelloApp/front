import { CommonModule, CurrencyPipe, SlicePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ModalComponent } from "../../common/modal/modal.component";
import { TablaGastosComponent } from "../../common/tabla-gastos/tabla-gastos.component";
import { FormAgregarGastoComponent } from "../../common/form-agregar-gasto/form-agregar-gasto.component";
import { FinanzasService } from 'src/app/core/services/finanzas.service';
import { Transaction } from 'src/app/core/models/Transaction';

@Component({
  selector: 'app-gastos',
  standalone:true,
  imports: [CommonModule, CurrencyPipe, SlicePipe, ModalComponent, TablaGastosComponent, FormAgregarGastoComponent],
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.scss']
})
export class GastosComponent implements OnInit{

  modalTabla : Boolean = false;
  modalAgregar : Boolean = false;

  totalGastosDelMes: number = 0;
  gastosDelMes: Transaction[] = [];


  // gastos = [
  //   {
  //     "motivo":"Factura",
  //     "monto":"$52.000",
  //     "vencimiento":"03/07/24"
  //   },
  //   {
  //     "motivo":"Servicio",
  //     "monto":"$48.000",
  //     "vencimiento":"10/07/24"
  //   },
  //   {
  //     "motivo":"Proveedor",
  //     "monto":"$35.000",
  //     "vencimiento":"10/07/24"
  //   },
  //   {
  //     "motivo":"Suscripcion",
  //     "monto":"$9.400",
  //     "vencimiento":"10/07/24"
  //   }
  // ] 

  constructor( private finanzasServ:FinanzasService){ }

  ngOnInit(): void {
    this.loadGastoDelMes();
  }

  loadGastoDelMes(){
    this.finanzasServ.getGastosdelMes().subscribe({
      next:(data)=>{
        this.gastosDelMes = data;
        this.gastosDelMes.forEach( gasto=>{
          this.totalGastosDelMes += gasto.amount;
        });
      },
      error:(error)=> console.error('Error cargando gastos del mes:', error)
    });
  }



  onModalTablaTrue(){
    this.modalTabla = true;
  }

  onModalTablaFalse(){
    this.modalTabla = false;
  }

  onModalAgregarTrue(){
    this.modalAgregar = true;
  }

  onModalAgregarFalse(){
    this.modalAgregar = false;
  }

  
}
