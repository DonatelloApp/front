import { Component } from '@angular/core';
import { AnalisisComponent } from 'src/app/components/layout/analisis/analisis.component';
import { GananciasComponent } from 'src/app/components/layout/ganancias/ganancias.component';
import { GastosComponent } from 'src/app/components/layout/gastos/gastos.component';
import { IngresosComponent } from 'src/app/components/layout/ingresos/ingresos.component';
import { LimiteGastosComponent } from 'src/app/components/layout/limite-gastos/limite-gastos.component';
import { NavbarComponent } from "../../../components/layout/navbar/navbar.component";
import { SidebarComponent } from "../../../components/layout/sidebar/sidebar.component";
import { CalculadoraComponent } from "../../../components/layout/calculadora/calculadora.component";

@Component({
  selector: 'app-finanzas',
  standalone:true,
  imports: [
    GananciasComponent,
    GastosComponent,
    IngresosComponent,
    LimiteGastosComponent,
    AnalisisComponent,
    NavbarComponent,
    SidebarComponent,
    CalculadoraComponent
],
  templateUrl: './finanzas.component.html',
  styleUrls: ['./finanzas.component.scss']
})
export class FinanzasComponent {
  navbarTitle = "Finanzas"
}
