import { Component, OnInit } from '@angular/core';
import { Chart, ChartType } from 'chart.js/auto';
import { Finance, tipo } from 'src/app/core/models/finance';
import * as plugin from 'tailwindcss';

@Component({
  selector: 'app-analisis',
  standalone:true,
  templateUrl: './analisis.component.html',
  styleUrls: ['./analisis.component.scss']
})
export class AnalisisComponent implements OnInit{

  public chart?: Chart;

  finanzas: Finance[] = [
    {
      "id": 0,
      "tipo": tipo.gasto,
      "monto": 15323,
      "fecha": "01/01/1992"
    },
    {
      "id": 1,
      "tipo": tipo.ingreso,
      "monto": 32142,
      "fecha": "02/02/1992"
    }
  ]

  constructor(){}

  ngOnInit(): void {
    
    const data = {
      labels: [
        'Red',
        'Blue',
        'Yellow'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }]
    };

    const options ={
      responsive : true,
      mantainAspectRatio:false,
      plugins: {
        legend: {
          position: 'right' as const// Puedes usar 'left', 'right', 'top', 'bottom'
        }
      }
    };

    const ctx = document.getElementById('chart') as HTMLCanvasElement;
    
    this.chart = new Chart(ctx,{
      type:'pie' as ChartType,
      data,
      options
    });
  }
}
