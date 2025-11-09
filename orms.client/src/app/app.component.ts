import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [],
})
export class AppComponent implements OnInit, OnDestroy {
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
