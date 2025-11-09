import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-progress-bar',
    imports: [CommonModule],
    templateUrl: './progress-bar.component.html',
    styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnChanges {
  // @Input() leaveType: string = 'Sick Leave';
  @Input() total: number = 12;
  @Input() used: number = 3;

  @Input() barColor: string = 'blueviolet';
  @Input() showBorderRadius: boolean = true;

  @Input() totalTextColor: string = '#374151';      
  @Input() usedTextColor: string = '#6b7280';      
  @Input() remainingTextColor: string = '#4f46e5';  


  remainingDays: number = 0;
  progressPercentage: number = 0;


   ngOnInit(): void {
    this.calculateProgress();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['total'] || changes['used']) {
      this.calculateProgress();
    }
  }

  private calculateProgress(): void {
    const safeTotal = this.total > 0 ? this.total : 0;
    const safeUsed = Math.min(this.used, safeTotal);

    this.remainingDays = safeTotal - safeUsed;
    this.progressPercentage = safeTotal > 0 ? (safeUsed / safeTotal) * 100 : 0;
  }
}
