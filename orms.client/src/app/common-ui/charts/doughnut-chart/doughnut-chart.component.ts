import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, OnInit, OnDestroy, Input } from '@angular/core';
import {
  Chart,
  DoughnutController,
  ArcElement,
  Tooltip,
  Legend,
  ChartConfiguration,
  Plugin
} from 'chart.js';

@Component({
  selector: 'orms-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css'],
  imports:[CommonModule]
})
export class DoughnutChartComponent implements OnInit, OnDestroy {
  @ViewChild('chartCanvas', { static: true }) chartRef!: ElementRef<HTMLCanvasElement>;
  private chart!: Chart;

  @Input() showLegends: boolean = true;
  @Input() centerText: boolean = true;
  @Input() showAsValue: boolean = false; 

  activeLabel: string = 'Total Data';
  activeValue: string = '7433';

  legendData = [
    { color: '#FF4C4C', value: 15, label: 'Salary' },
    { color: '#27AE60', value: 8, label: 'Bonus' },
    { color: '#29B6F6', value: 20, label: 'Commission' },
    { color: '#FF9800', value: 11, label: 'Overtime' },
    { color: '#1217AB', value: 28, label: 'Reimbursement' },
    { color: '#FFD600', value: 18, label: 'Benefits' }
  ];

  ngOnInit() {
    Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

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
          ctx.fillText(this.activeValue, width / 2, height / 2 - 10);
          ctx.font = `${(+fontSizeMain / 2.0).toFixed(0)}px Arial`;
          ctx.fillStyle = '#9CA3AF';
          ctx.fillText(this.activeLabel, width / 2, height / 2 + 18);
        }

        ctx.restore();
      }
    };

    const config: ChartConfiguration<'doughnut'> = {
      type: 'doughnut',
      data: {
        datasets: [
          {
            data: [15, 8, 20, 11, 28, 18],
            backgroundColor: [
              '#FF4C4C',
              '#27AE60',
              '#29B6F6',
              '#FF9800',
              '#1217AB',
              '#FFD600',
            ],
            borderWidth: 0,
            borderRadius: 25,
            spacing: 5
          }
        ]
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
                const total = 7433;
                const actualValue = Math.round((item.value / 100) * total);

                return this.showAsValue
                  ? `${item.label}: ${actualValue}`
                  : `${item.label}: ${item.value}%`;
              }
            }
          }
        },

        onHover: (event, elements) => {
          if (elements.length > 0) {
            const index = elements[0].index;
            const item = this.legendData[index];
            const total = 7433; 
            const actualValue = Math.round((item.value / 100) * total);

            if (this.showAsValue) {
              this.activeValue = `${item.value}%`;
            } else {
              this.activeValue = `${actualValue}`;
            }
            this.activeLabel = item.label;
          } else {
            this.activeValue = '7433';
            this.activeLabel = 'Total Data';
          }

          this.chart.draw();
        },

      },
      plugins: [centerTextPlugin]
    };

    this.chart = new Chart(this.chartRef.nativeElement.getContext('2d')!, config);
  }

  ngOnDestroy() {
    this.chart?.destroy();
  }

  getDisplayValue(item: any): string {
    const total = 7433;
    const actualValue = Math.round((item.value / 100) * total);
    return this.showAsValue ? `${actualValue}` : `${item.value}%`;
  }
}
