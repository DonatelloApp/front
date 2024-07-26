import { Component, OnInit } from '@angular/core';
import { Chart, ChartType } from 'chart.js/auto';
import { Transaction } from 'src/app/core/models/Transaction';
import * as plugin from 'tailwindcss';

@Component({
  selector: 'app-analisis',
  standalone:true,
  templateUrl: './analisis.component.html',
  styleUrls: ['./analisis.component.scss']
})
export class AnalisisComponent implements OnInit{

  public chart?: Chart;


  finanzas: Transaction[] = [/*    
    {
      "id": 0,
      "type": "spend",
      "amount": 15323,
      "date": new Date()
    },
    {
      "id": 1,
      "type": "income",
      "amount": 32142,
      "date": new Date()
    }*/
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
