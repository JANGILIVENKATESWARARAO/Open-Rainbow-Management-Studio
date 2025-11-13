import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  ViewChild,
  OnInit,
  OnDestroy,
  Input,
} from '@angular/core';
import {
  Chart,
  DoughnutController,
  ArcElement,
  Tooltip,
  Legend,
  ChartConfiguration,
  Plugin,
} from 'chart.js';

@Component({
  selector: 'orms-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css'],
  imports: [CommonModule],
})
export class DoughnutChartComponent implements OnInit, OnDestroy {
  @ViewChild('chartCanvas', { static: true })
  chartRef!: ElementRef<HTMLCanvasElement>;
  private chart!: Chart;

  @Input() showLegends: boolean = true;
  @Input() centerText: boolean = true;
  @Input() showAsValue: boolean = false;

  @Input() legendData: { color: string; value: number; label: string }[] = [];

  @Input() activeLabel: string = 'Total Data';
  activeValue: string = '0';
  total: number = 0;
  defaultLabel: string = '';

  ngOnInit() {
    Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

    this.total = this.legendData.reduce((sum, item) => sum + item.value, 0);
    this.activeValue = this.total.toString();
    this.defaultLabel = this.activeLabel;

    const centerTextPlugin: Plugin<'doughnut'> = {
      id: 'centerText',
      afterDraw: (chart) => {
        const { width, height, ctx } = chart;
        ctx.save();

        const fontSizeMain = (height / 7).toFixed(0);
        ctx.font = `bold ${fontSizeMain}px Arial`;
        ctx.fillStyle = '#1E1E1E';
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center';

        if (this.centerText) {
          if (this.activeLabel && this.activeLabel.trim() !== '') {
            ctx.fillText(this.activeValue, width / 2, height / 2 - 10);
            ctx.font = `${(+fontSizeMain / 2.0).toFixed(0)}px Arial`;
            ctx.fillStyle = '#9CA3AF';
            ctx.fillText(this.activeLabel, width / 2, height / 2 + 18);
          } else {
            ctx.fillText(this.activeValue, width / 2, height / 2);
          }
        }

        ctx.restore();
      },
    };

    const config: ChartConfiguration<'doughnut'> = {
      type: 'doughnut',
      data: {
        datasets: [
          {
            data: this.legendData.map((d) => d.value),
            backgroundColor: this.legendData.map((d) => d.color),
            borderWidth: 0,
            borderRadius: 25,
            spacing: 5,
          },
        ],
      },
      options: {
        cutout: '85%',
        rotation: 0,
        responsive: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            enabled: true,
            callbacks: {
              label: (context) => {
                const index = context.dataIndex;
                const item = this.legendData[index];
                const percentage = ((item.value / this.total) * 100).toFixed(1);

                return this.showAsValue
                  ? `${item.label}: ${item.value}`
                  : `${item.label}: ${percentage}%`;
              },
            },
          },
        },

        onHover: (event, elements) => {
          if (elements.length > 0) {
            const index = elements[0].index;
            const item = this.legendData[index];
            const percentage = ((item.value / this.total) * 100).toFixed(1);

            if (this.showAsValue) {
              this.activeValue = `${item.value}`;
            } else {
              this.activeValue = `${percentage}%`;
            }
            this.activeLabel = item.label;
          } else {
            this.activeValue = this.total.toString();
            this.activeLabel = this.defaultLabel;
          }

          this.chart.draw();
        },
      },
      plugins: [centerTextPlugin],
    };

    this.chart = new Chart(
      this.chartRef.nativeElement.getContext('2d')!,
      config
    );
  }

  ngOnDestroy() {
    this.chart?.destroy();
  }

  getDisplayValue(item: any): string {
    const percentage = ((item.value / this.total) * 100).toFixed(1);
    console.log(this.total);
    return this.showAsValue ? `${item.value}` : `${percentage}%`;
  }
}
