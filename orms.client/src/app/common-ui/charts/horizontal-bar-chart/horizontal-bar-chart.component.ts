import { Component, ElementRef, Input, SimpleChanges, ViewChild } from '@angular/core';
import { Chart, BarController, BarElement, CategoryScale, LinearScale, Legend, Tooltip, ChartConfiguration } from 'chart.js';

@Component({
  selector: 'orms-horizontal-bar-chart',
  imports: [],
  templateUrl: './horizontal-bar-chart.component.html',
  styleUrl: './horizontal-bar-chart.component.css',
})
export class HorizontalBarChartComponent {@ViewChild('chartCanvas', { static: true }) chartRef!: ElementRef<HTMLCanvasElement>;
  @Input() horizontal: boolean = false;
  private chart!: Chart;

  ngOnInit() {
    Chart.register(BarController, BarElement, CategoryScale, LinearScale, Legend, Tooltip);
    this.createChart();
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('horizontal' in changes && this.chart) {
      this.createChart();
    }
  }

  createChart() {
    const config: ChartConfiguration<'bar'> = {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        datasets: [
          {
            label: 'Net Profit',
            data: [390, 120, 295, 230, 100, 20, 180, 230, 250],
            backgroundColor: '#2166E1',
            borderRadius: 8
          },
          {
            label: 'Revenue',
            data: [100, 190, 110, 380, 100, 200, 290, 300, 100],
            backgroundColor: '#FF8800',
            borderRadius: 8
          },
          {
            label: 'Free Cash Flow',
            data: [150, 200, 190, 120, 100, 400, 90, 120, 200],
            backgroundColor: '#13C9E4',
            borderRadius: 8
          }
        ]
      },
      options: {
        indexAxis: this.horizontal ? 'y' : 'x',
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
            labels: { boxWidth: 15, padding: 8 }
          },
          tooltip: { enabled: true }
        },
        scales: {
          x: {
            grid: { color: '#F0F4FA' },
            ticks: { color: '#BCC2D9', font: { size: 13, weight: 'bold' } }
          },
          y: {
            beginAtZero: true,
            grid: { color: '#F0F4FA' },
            ticks: { color: '#BCC2D9', font: { size: 13, weight: 'bold' } }
          }
        },
        responsive: false,
        animation: false,
        maintainAspectRatio: false,
      }
    };

    if (this.chart) {
      this.chart.destroy();
    }
    this.chart = new Chart(this.chartRef.nativeElement.getContext('2d')!, config);
  }

  ngOnDestroy() {
    this.chart?.destroy();
  }
}
