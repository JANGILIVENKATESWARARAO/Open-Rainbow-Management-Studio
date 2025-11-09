import { Component, Input } from '@angular/core';
import { ChipComponent } from '../../../common-ui/controls/chip/chip.component';


export interface HolidayLeave {
  holidayname: string;
  holidaydate: string;
  holidaylist: 'National Holiday' | 'federal Holiday' | 'Festival Holiday';
}

@Component({
    selector: 'app-upcoming-holidays',
    templateUrl: './upcoming-holidays.component.html',
    styleUrl: './upcoming-holidays.component.css',
    imports: [ChipComponent]
})
export class UpcomingHolidaysComponent {
  todayDate: Date = new Date();
  @Input() holidayleave: HolidayLeave[] = [];
  

  calculateDays(holidaydate: string, todayDate: Date): number {
    const from = new Date(holidaydate);
    const to = new Date(todayDate || holidaydate);
    return Math.ceil((+from - +to) / 86400000) + 1;
  }
}
