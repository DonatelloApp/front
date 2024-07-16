import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FinanzasService {

  ganancias=234900;

  ingresos = {
    dia:50280,
    semana:250200,
    mes:850700
  };

  gastos = {
    mes:24650,
    motivo:'Factura',
    monto:52000,
    vencimiento:'03/7/24'
  }

  constructor() { }

  //GANANCIAS
  getGanancias(){
    return this.ganancias;
  }

  //INGRESOS
  getIngresosDia(){
    return this.ingresos.dia;
  }
  getIngresosSemana(){
    return this.ingresos.semana;
  }
  getIngresosMes(){
    return this.ingresos.mes;
  }

  agregarIngreso(ingreso:any){
    this.ingresos = ingreso;
  }

  //GASTOS
  getGastos(){
    return this.gastos;
  }
  getGastosMes(){
    return this.gastos.mes;
  }
  cargarGasto(gasto:any){
    this.gastos = gasto;
  }

}
