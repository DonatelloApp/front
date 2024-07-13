import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gastos',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.scss']
})
export class GastosComponent {


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

  
}
