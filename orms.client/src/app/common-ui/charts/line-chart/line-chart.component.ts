import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
  ChartConfiguration,
} from 'chart.js';

type LegendShape = 'circle' | 'square' | 'rectRounded';

@Component({
  selector: 'orms-line-chart',
  standalone: true,
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
})
export class LineChartComponent implements OnInit, OnChanges, OnDestroy {
  @ViewChild('chartCanvas', { static: true })
  private chartRef!: ElementRef<HTMLCanvasElement>;
  private chart!: Chart;

  // Dynamic Inputs
  @Input() labels: string[] = [];
  @Input() data: number[][] = []; // Each array = one line
  @Input() colors: string[] = []; // Color per line
  @Input() lineStyles: ('solid' | 'dotted' | 'dashed')[] = []; // Line style per line
  @Input() visible: boolean[] = []; // Visibility per line
  @Input() seriesLabels: string[] = []; // Label per line
  @Input() lineThickness: number[] = []; // Line thickness per line
  @Input() legendShapes: LegendShape[] = []; // Legend shape per series

  ngOnInit() {
    Chart.register(
      LineController,
      LineElement,
      PointElement,
      LinearScale,
      Title,
      CategoryScale,
      Tooltip,
      Legend
    );
    this.createChart();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (
      this.chart &&
      (changes['labels'] ||
        changes['data'] ||
        changes['colors'] ||
        changes['lineStyles'] ||
        changes['visible'] ||
        changes['lineThickness'] ||
        changes['legendShapes'])
    ) {
      this.updateChart();
    }
  }

  private createChart() {
    const ctx = this.chartRef.nativeElement.getContext('2d');
    if (!ctx) return;

    const config: ChartConfiguration<'line'> = {
      type: 'line',
      data: {
        labels: this.labels,
        datasets: this.buildDatasets(),
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 2,
        interaction: { mode: 'index', intersect: false },
        plugins: {
          tooltip: {
            enabled: true,
            backgroundColor: 'rgba(79, 79, 79, 0.85)',
            titleColor: '#fff',
            bodyColor: '#fff',
            padding: 10,
            borderWidth: 0,
            cornerRadius: 6,
          },
          legend: ({} as any) /* cast to any to allow generateLabels */ as any,
        },
        scales: {
          x: { grid: { display: false } },
          y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.1)' } },
        },
      },
    };

    // now assign legend with generateLabels at runtime (so we can reference `this`)
    (config.options!.plugins as any).legend = {
      display: true,
      position: 'bottom',
      labels: {
        usePointStyle: true,
        // default static pointStyle (won't be used for per-item override)
        pointStyle: 'rectRounded',
        boxWidth: 18,
        boxHeight: 10,
        color: '#374151',
        padding: 14,
        font: {
          size: 13,
          family: 'Poppins, sans-serif',
          weight: '500',
        },
      },
      // place generateLabels on legend (typed as any to avoid TS errors)
      generateLabels: (chart: Chart) => {
        const datasets = chart.data.datasets || [];
        return datasets
          .map((dataset: any, i: number) => {
            const isVisible = this.visible[i] === undefined ? true : this.visible[i];
            if (!isVisible) return null;

            return {
              text: dataset.label ?? `Series ${i + 1}`,
              fillStyle: dataset.borderColor ?? dataset.backgroundColor ?? '#999',
              strokeStyle: dataset.borderColor ?? dataset.backgroundColor ?? '#999',
              lineWidth: 0,
              hidden: !chart.isDatasetVisible(i),
              datasetIndex: i,
              // set per-item shape from legendShapes input (fallback to rectRounded)
              pointStyle: this.legendShapes[i] ?? 'rectRounded',
            };
          })
          .filter((d): d is NonNullable<typeof d> => d !== null);
      },
    } as any;

    this.chart = new Chart(ctx, config);
  }

  private buildDatasets() {
    return this.data
      .map((dataset, i) => {
        if (this.visible[i] === false) return null;

        return {
          label: this.seriesLabels[i] || `Series ${i + 1}`,
          data: dataset,
          borderColor: this.colors[i] || 'gray',
          borderDash: this.getLineDash(this.lineStyles[i]),
          fill: false,
          tension: 0.3,
          pointRadius: 4,
          pointHoverRadius: 6,
          borderWidth: this.lineThickness[i] ?? 2,
        };
      })
      .filter((d): d is NonNullable<typeof d> => d !== null);
  }

  private getLineDash(style?: 'solid' | 'dotted' | 'dashed'): number[] {
    switch (style) {
      case 'dotted':
        return [2, 6];
      case 'dashed':
        return [8, 6];
      default:
        return [];
    }
  }

  private updateChart() {
    if (!this.chart) return;
    this.chart.data.labels = this.labels;
    this.chart.data.datasets = this.buildDatasets();
    // chart legend is regenerated on update()
    this.chart.update();
  }

  ngOnDestroy() {
    this.chart?.destroy();
  }
}
