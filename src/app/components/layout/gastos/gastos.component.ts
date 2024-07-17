import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ModalComponent } from "../../common/modal/modal.component";
import { TablaGastosComponent } from "../../common/tabla-gastos/tabla-gastos.component";
import { FormAgregarGastoComponent } from "../../common/form-agregar-gasto/form-agregar-gasto.component";

@Component({
  selector: 'app-gastos',
  standalone:true,
  imports: [CommonModule, ModalComponent, TablaGastosComponent, FormAgregarGastoComponent],
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.scss']
})
export class GastosComponent {

  modalTabla : Boolean = false;
  modalAgregar : Boolean = false;

  gastos = [
    {
      "motivo":"Factura",
      "monto":"$52.000",
      "vencimiento":"03/07/24"
    },
    {
      "motivo":"Servicio",
      "monto":"$48.000",
      "vencimiento":"10/07/24"
    },
    {
      "motivo":"Proveedor",
      "monto":"$35.000",
      "vencimiento":"10/07/24"
    },
    {
      "motivo":"Suscripcion",
      "monto":"$9.400",
      "vencimiento":"10/07/24"
    }
  ] 

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
