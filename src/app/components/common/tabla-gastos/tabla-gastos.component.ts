import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tabla-gastos',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './tabla-gastos.component.html',
  styleUrls: ['./tabla-gastos.component.scss']
})
export class TablaGastosComponent {

  gastos = [
    { 
      "id":0,
      "destinatario":"Electricidad S.A.",
      "monto":"$52.000",
      "vencimiento":"03/07/24"
    },
    {
      "id":1,
      "destinatario":"Aguas S.A.",
      "monto":"$48.000",
      "vencimiento":"10/07/24"
    },
    {
      "id":2,
      "destinatario":"Gas S.A.",
      "monto":"$35.000",
      "vencimiento":"10/07/24"
    },
    {
      "id":3,
      "destinatario":"Harinera Molinos",
      "monto":"$9.400",
      "vencimiento":"10/07/24"
    }
  ] 
}
