import {Component,ElementRef,Input,SimpleChanges,ViewChild,OnDestroy,OnInit,} from '@angular/core';
import {Chart,BarController,BarElement,CategoryScale,LinearScale,Legend,Tooltip,ChartConfiguration,} from 'chart.js';

type LegendShape = 'circle' | 'rectRounded' | 'rect';

@Component({
  selector: 'orms-horizontal-bar-chart',
  standalone: true,
  templateUrl: './horizontal-bar-chart.component.html',
  styleUrls: ['./horizontal-bar-chart.component.css'],
})
export class HorizontalBarChartComponent implements OnInit, OnDestroy {
  @ViewChild('chartCanvas', { static: true })
  chartRef!: ElementRef<HTMLCanvasElement>;

  @Input() horizontal: boolean = false;
  @Input() showLegend: boolean = true;
  @Input() singleLine: boolean = false;
  @Input() showLabels: boolean = true;
  @Input() showData: boolean = true;
  @Input() backgroundcolor1: string = '#FF8800';
  @Input() backgroundcolor2: string = '#13C9E4';
  @Input() backgroundcolor: string = '#2166E1';
  @Input() legendShapes: LegendShape[] = [];
  @Input() labels: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
  @Input() data: number[][] = [
    [390, 120, 295, 230, 100, 20, 180, 230, 250],
    [100, 190, 110, 380, 100, 200, 290, 300, 100],
    [150, 200, 190, 120, 100, 400, 90, 120, 200]
  ];
  @Input() datasetLabels: string[] = ['Net Profit', 'Revenue', 'Free Cash Flow'];
  @Input() yAxisTicks: number[] = [0, 50, 100, 150, 200, 250, 300, 350, 400];

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
        changes['backgroundcolor2'] ||
        changes['legendShapes'] ||
        changes['labels'] ||
        changes['data'] ||
        changes['datasetLabels'] ||
        changes['yAxisTicks']) &&
      this.chart
    ) {
      this.createChart();
    }
  }

  createChart() {
    const baseDatasets = this.data.map((datasetData, index) => ({
      label: this.datasetLabels[index] || `Series ${index + 1}`,
      data: datasetData,
      backgroundColor: this.getBackgroundColor(index),
      borderRadius: 8,
      borderSkipped: false,
    }));

    const datasets = this.showData
      ? baseDatasets
      : baseDatasets.map((ds) => ({
          ...ds,
          data: new Array(ds.data.length).fill(0),
          backgroundColor: 'rgba(0,0,0,0)',
        }));

    const config: ChartConfiguration<'bar'> = {
      type: 'bar',
      data: {
        labels: this.labels,
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
              usePointStyle: true,
              generateLabels: (chart: Chart) => {
                const datasets = chart.data.datasets || [];
                return datasets.map((dataset: any, i: number) => {
                  const shape = this.getLegendShape(i);
                  const bgColor =
                    typeof dataset.backgroundColor === 'string'
                      ? dataset.backgroundColor
                      : Array.isArray(dataset.backgroundColor)
                      ? dataset.backgroundColor[0]
                      : '#999';

                  return {
                    text: dataset.label ?? `Series ${i + 1}`,
                    fillStyle: bgColor,
                    strokeStyle: bgColor,
                    datasetIndex: i,
                    hidden: !chart.isDatasetVisible(i),
                    lineWidth: 0,
                    pointStyle: shape as any,
                  };
                });
              },
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
              callback: (value) => {
                if (typeof value === 'number') {
                  return value.toString();
                }
                return value;
              },
              stepSize: this.calculateStepSize(this.yAxisTicks),
            },
            min: this.yAxisTicks[0],
            max: this.yAxisTicks[this.yAxisTicks.length - 1],
            suggestedMax: Math.max(...this.data.flat()) * 1.1,
          },
        },
        responsive: true,
        maintainAspectRatio: false,
        animation: false,
        datasets: {
          bar: {
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

  private calculateStepSize(ticks: number[]): number {
    if (ticks.length < 2) return 1;
    return ticks[1] - ticks[0];
  }

  private getBackgroundColor(index: number): string {
    const colors = [this.backgroundcolor, this.backgroundcolor1, this.backgroundcolor2];
    return colors[index] || this.getRandomColor();
  }

  private getRandomColor(): string {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  private getLegendShape(index: number): LegendShape {
    if (this.legendShapes && this.legendShapes[index] !== undefined) {
      return this.legendShapes[index];
    }
    return 'rectRounded';
  }

  ngOnDestroy() {
    this.chart?.destroy();
  }
}