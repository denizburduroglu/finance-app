import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartItem } from 'chart.js';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  @ViewChild('myChart') myChart: any;

  labels = ['January', 'February', 'March', 'April', 'May', 'June'];

  data = {
    labels: this.labels,
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };

  config: ChartConfiguration = {
    type: 'line',
    data: this.data,
    options: {},
  };

  constructor() {}

  ngOnInit(): void {
    const myChart = new Chart(
      document.getElementById('myChart') as ChartItem,
      this.config
    );
  }
}