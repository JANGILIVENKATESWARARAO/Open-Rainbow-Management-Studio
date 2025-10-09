import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {
  @Input() label?: string = 'Calendar';
  @Input() isRequired?: boolean = true;
  openDatePicker(event: Event) {
    const input = event.target as HTMLInputElement;
    input.showPicker();
  }
}
