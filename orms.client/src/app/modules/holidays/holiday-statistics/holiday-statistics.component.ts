import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-holiday-statistics',
    templateUrl: './holiday-statistics.component.html',
    styleUrls: ['./holiday-statistics.component.css'],
    imports: [CommonModule]
})
export class HolidayStatisticsComponent {
  @Input() data: Array<{ name: string; number: number; color: string; bg: string }> = [];
}
