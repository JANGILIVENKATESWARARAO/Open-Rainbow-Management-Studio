import { Component } from '@angular/core';
import { ChipComponent } from '../../../common-ui/controls/chip/chip.component';

@Component({
  selector: 'app-upcoming-holidays',
  templateUrl: './upcoming-holidays.component.html',
  styleUrl: './upcoming-holidays.component.css',
  standalone: true,
  imports:[ChipComponent]
})
export class UpcomingHolidaysComponent {

}
