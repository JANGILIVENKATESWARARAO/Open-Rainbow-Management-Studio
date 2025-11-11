import { Component, ElementRef, Input, SimpleChanges, ViewChild } from '@angular/core';
import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
  ChartConfiguration
} from 'chart.js';

@Component({
  selector: 'orms-horizontal-bar-chart',
  standalone: true,
  templateUrl: './horizontal-bar-chart.component.html',
  styleUrl: './horizontal-bar-chart.component.css',
})
export class HorizontalBarChartComponent {
  @ViewChild('chartCanvas', { static: true }) chartRef!: ElementRef<HTMLCanvasElement>;

  @Input() horizontal: boolean = false;
  @Input() showLegend: boolean = true;
  @Input() singleLine: boolean = false;
  @Input() showLabels: boolean = true;
  @Input() showData: boolean = true;
  @Input() backgroundcolor1: string = '#FF8800';
  @Input() backgroundcolor2: string = '#13C9E4';
  @Input() backgroundcolor: string = '#2166E1';

  private chart!: Chart;

  ngOnInit() {
    Chart.register(BarController, BarElement, CategoryScale, LinearScale, Legend, Tooltip);
    this.createChart();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (
      (changes['horizontal'] ||
        changes['showLegend'] ||
        changes['singleLine'] ||
        changes['showLabels'] ||
        changes['showData'] ||
        changes['backgroundcolor'] ||
        changes['backgroundcolor1'] ||
        changes['backgroundcolor2']) &&
      this.chart
    ) {
      this.createChart();
    }
  }

  createChart() {
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];

    const baseDatasets = [
      {
        label: 'Net Profit',
        data: [390, 120, 295, 230, 100, 20, 180, 230, 250],
        backgroundColor: this.backgroundcolor,
        borderRadius: 8,
        borderSkipped: false,
      },
      {
        label: 'Revenue',
        data: [100, 190, 110, 380, 100, 200, 290, 300, 100],
        backgroundColor: this.backgroundcolor1,
        borderRadius: 8,
        borderSkipped: false,
      },
      {
        label: 'Free Cash Flow',
        data: [150, 200, 190, 120, 100, 400, 90, 120, 200],
        backgroundColor: this.backgroundcolor2,
        borderRadius: 8,
        borderSkipped: false,
      },
    ];

    const datasets = this.showData
      ? baseDatasets
      : baseDatasets.map(ds => ({
        ...ds,
        data: new Array(ds.data.length).fill(0),
        backgroundColor: 'rgba(0,0,0,0)',
      }));

    const config: ChartConfiguration<'bar'> = {
      type: 'bar',
      data: {
        labels,
        datasets,
      },
      options: {
        indexAxis: this.horizontal ? 'y' : 'x',
        plugins: {
          legend: {
            display: this.showLegend,
            position: 'bottom',
            labels: {
              boxWidth: 15,
              padding: 8,
              color: '#555',
              font: { size: 13 },
            },
          },
          tooltip: { enabled: this.showData },
        },
        scales: {
          x: {
            stacked: this.singleLine,
            grid: {
              color: '#F0F4FA',
              drawTicks: false,
              display: true,
            },
            ticks: {
              display: this.showLabels,
              color: '#BCC2D9',
              font: { size: 13, weight: 'bold' },
            },
          },
          y: {
            beginAtZero: true,
            stacked: this.singleLine,
            grid: {
              color: '#F0F4FA',
              drawTicks: false,
              display: true,
            },
            ticks: {
              display: this.showLabels,
              color: '#BCC2D9',
              font: { size: 13, weight: 'bold' },
            },
            suggestedMax: 400,
          },
        },
        responsive: true,
        maintainAspectRatio: false,
        animation: false,
        datasets: {
          bar: {
            // borderRadius: 8,
            categoryPercentage: this.singleLine ? 0.9 : 0.8,
            barPercentage: this.singleLine ? 0.25 : 0.8,
          },
        },
      },
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
