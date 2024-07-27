import { Component, OnInit } from '@angular/core';
import { Chart, ChartType } from 'chart.js/auto';
import { Transaction } from 'src/app/core/models/Transaction';
import { FinanzasService } from 'src/app/core/services/finanzas.service';
import * as plugin from 'tailwindcss';

@Component({
  selector: 'app-analisis',
  standalone: true,
  templateUrl: './analisis.component.html',
  styleUrls: ['./analisis.component.scss']
})
export class AnalisisComponent implements OnInit {

  public chart?: Chart;


  facturasDelMes: Transaction[] = [];
  totalFacturas: number = 124;
  serviciosDelMes: Transaction[] = [];
  totalServicios: number = 421;
  proveedoresDelMes: Transaction[] = [];
  totalProveedores: number = 24;
  suscripcionesDelMes: Transaction[] = [];
  totalSuscripciones: number = 67;

  constructor(private finanzasServ: FinanzasService) { }

  ngOnInit(): void {
    Promise.all([
      this.loadFacturas(),
      this.loadServicios(),
      this.loadProveedor(),
      this.loadSuscripcion(),

    ]).then(() => {

      const data = {
        labels: [
          'Facturas',
          'Servicios',
          'Proveedores',
          'Suscripciones'
        ],
        datasets: [{
          label: 'Analisis de gastos',
          data: [this.totalFacturas, this.totalServicios, this.totalProveedores, this.totalSuscripciones],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(54, 205, 86)'
          ],
          hoverOffset: 4
        }]
      };

      const options = {
        responsive: true,
        mantainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right' as const// Puedes usar 'left', 'right', 'top', 'bottom'
          }
        }
      };

      const ctx = document.getElementById('chart') as HTMLCanvasElement;

      this.chart = new Chart(ctx, {
        type: 'pie' as ChartType,
        data,
        options
      });
      
    });
  }





  loadFacturas() {
    this.finanzasServ.getGastosPorMotivo("FACTURA").subscribe({
      next: (data) => {
        this.facturasDelMes = data;
        this.facturasDelMes.forEach(factura => {
          this.totalFacturas += factura.amount;
        });
      },
      error: (error) => console.error('Error cargando gastos de facturas del mes:', error)
    })
  }

  loadServicios() {
    this.finanzasServ.getGastosPorMotivo("SERVICIO").subscribe({
      next: (data) => {
        this.serviciosDelMes = data;
        this.serviciosDelMes.forEach(serv => {
          this.totalServicios += serv.amount;
        });
      },
      error: (error) => console.error('Error cargando gastos de servicios del mes:', error)
    })
  }

  loadProveedor() {
    this.finanzasServ.getGastosPorMotivo("PROVEEDOR").subscribe({
      next: (data) => {
        this.proveedoresDelMes = data;
        this.proveedoresDelMes.forEach(prov => {
          this.totalProveedores += prov.amount;
        });
      },
      error: (error) => console.error('Error cargando gastos de proveedores del mes:', error)
    })
  }

  loadSuscripcion() {
    this.finanzasServ.getGastosPorMotivo("SUSCRIPCION").subscribe({
      next: (data) => {
        this.suscripcionesDelMes = data;
        this.suscripcionesDelMes.forEach(sus => {
          this.totalSuscripciones += sus.amount;
        });
      },
      error: (error) => console.error('Error cargando gastos de suscripciones del mes:', error)
    })
  }



}
