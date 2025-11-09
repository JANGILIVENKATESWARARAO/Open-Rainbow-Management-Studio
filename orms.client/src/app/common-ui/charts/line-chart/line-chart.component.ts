import { Component, ElementRef, ViewChild } from '@angular/core';
import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, ChartConfiguration } from 'chart.js';

@Component({
  selector: 'orms-line-chart',
  imports: [],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.css',
})
export class LineChartComponent {
@ViewChild('chartCanvas', { static: true }) private chartRef!: ElementRef<HTMLCanvasElement>;
  private chart!: Chart;

  ngOnInit() {
    Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);

    const config: ChartConfiguration = {
      type: 'line',
      data: {
        labels: ['chit', 'January', 'February', 'March', 'April'],
        datasets: [{
          label: 'My Dataset',
          data: [50, 10, 20, 30, 40],
          fill: false,
          borderColor: 'blue'
        }]
      },
      options: {
        responsive: true,
      }
    };

    this.chart = new Chart(this.chartRef.nativeElement.getContext('2d')!, config);
  }

  ngOnDestroy() {
    this.chart.destroy();
  }
}
