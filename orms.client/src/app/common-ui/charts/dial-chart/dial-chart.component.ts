import { Component, AfterViewInit, ElementRef, ViewChild, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Chart, ArcElement, DoughnutController, Tooltip, Legend } from 'chart.js';

Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

@Component({
  selector: 'orms-dial-chart',
  templateUrl: './dial-chart.component.html',
  styleUrls: ['./dial-chart.component.css'],
  standalone: true,
})
export class DialChartComponent implements AfterViewInit, OnChanges {
  @ViewChild('dialCanvas') dialCanvas!: ElementRef<HTMLCanvasElement>;
  @Input() percentage = 70;
  @Input() lastMonthChange = 5;
  @Input() isRounded = false;

  dialColor = '#ff7a00'; // normal orange
  hoverColor = '#1d4ed8'; // blue-700 for hover (choose any color you like)

  private chart!: Chart;

  ngAfterViewInit() {
    this.drawChart();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isRounded'] && !changes['isRounded'].firstChange) {
      this.drawChart();
    }
  }

  onDialEnter() {
    this.dialColor = this.hoverColor;
    this.drawChart();
  }

  onDialLeave() {
    this.dialColor = '#ff7a00';
    this.drawChart();
  }

  drawChart() {
    const ctx = this.dialCanvas.nativeElement.getContext('2d');
    if (!ctx) return;
    if (this.chart) this.chart.destroy();

    this.chart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: [],
        datasets: [{
          data: [this.percentage, 100 - this.percentage],
          backgroundColor: [this.dialColor, '#f5f5f5'],
          borderWidth: 0,
          borderRadius: this.isRounded ? 40 : 0
        }],
      },
      options: {
        responsive: true,
        rotation: -90,
        circumference: 180,
        cutout: '80%',
        plugins: {
          legend: { display: false },
          tooltip: { enabled: false }
        }
      }
    });
  }
}
