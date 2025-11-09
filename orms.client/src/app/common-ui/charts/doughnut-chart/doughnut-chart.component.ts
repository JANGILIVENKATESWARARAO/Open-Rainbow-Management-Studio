import { Component, ElementRef, ViewChild } from '@angular/core';
import { Chart, DoughnutController, ArcElement, Tooltip, Legend, ChartConfiguration } from 'chart.js';

@Component({
  selector: 'orms-doughnut-chart',
  imports: [],
  templateUrl: './doughnut-chart.component.html',
  styleUrl: './doughnut-chart.component.css',
})
export class DoughnutChartComponent {
  @ViewChild('chartCanvas', { static: true }) chartRef!: ElementRef<HTMLCanvasElement>;
  private chart!: Chart;

  ngOnInit() {
    Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

    const config: ChartConfiguration<'doughnut'> = {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [26, 13, 11, 20, 30],
          backgroundColor: [
            '#FFD600',
            '#FF4C4C',
            '#27AE60',
            '#29B6F6',
            '#FF9800',
          ],
          borderWidth: 0,
          borderRadius: 10
        }]
      },
      options: {
        cutout: '90%',
        spacing: 5,
        plugins: {
          legend: { display: false },
          tooltip: { enabled: false }
        },
        responsive: false,
        animation: false,
      },
      plugins: [/* ...centerText plugin code here... */]
    };


    this.chart = new Chart(this.chartRef.nativeElement.getContext('2d')!, config);
  }

  ngOnDestroy() {
    this.chart?.destroy();
  }
}
