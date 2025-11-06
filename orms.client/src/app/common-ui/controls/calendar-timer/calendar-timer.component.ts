import { Component } from '@angular/core';
import { CalendarComponent } from '../calendar/calendar.component';
import { TimepickerComponent } from '../timepicker/timepicker.component';

@Component({
  selector: 'app-calendar-timer',
  standalone:true,
  templateUrl: './calendar-timer.component.html',
  styleUrl: './calendar-timer.component.css',
  imports:[CalendarComponent, TimepickerComponent]
})
export class CalendarTimerComponent {

}
