import { Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration, ChartItem } from 'chart.js';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-chart-template',
  templateUrl: './chart-template.component.html',
  styleUrls: ['./chart-template.component.css'],
})
export class ChartTemplateComponent implements OnInit {
  @Input() type: any = 'line';
  @Input() data = {
    labels: ['11/01', '11/02', '11/03', '11/04', '11/05', '11/06'],
    datasets: [
      {
        label: 'Income',
        backgroundColor: 'rgb(99, 255, 132)',
        borderColor: 'rgb(99, 255, 132)',
        data: [3, 4, 6, 7, 8, 20],
      },
      {
        label: 'Expenses',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {
    // Setup chart.js
    const myChart = new Chart(document.getElementById('myChart') as ChartItem, {
      type: this.type,
      data: this.data,
      options: {},
    });
  }
}

/*
 Example Data:
 {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Income',
        backgroundColor: 'rgb(99, 255, 132)',
        borderColor: 'rgb(99, 255, 132)',
        data: [3, 4, 6, 7, 8, 20],
      },
      {
        label: 'Expenses',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };
*/
