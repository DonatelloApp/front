import { Component } from '@angular/core';
import { FormCalculadoraComponent } from "../../common/form-calculadora/form-calculadora.component";
import { TablaCalculadoraComponent } from "../../common/tabla-calculadora/tabla-calculadora.component";

@Component({
  selector: 'app-calculadora',
  standalone:true,
  imports: [FormCalculadoraComponent, TablaCalculadoraComponent],
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent {

}
