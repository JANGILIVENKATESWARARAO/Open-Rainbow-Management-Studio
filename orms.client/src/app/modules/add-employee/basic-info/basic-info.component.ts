import { Component } from '@angular/core';
import { CalendarComponent } from "../../../common-ui/controls/calendar/calendar.component";
import { DropDownComponent } from "../../../common-ui/controls/drop-down/drop-down.component";

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrl: './basic-info.component.css',
  standalone: true,
  imports: [CalendarComponent, DropDownComponent]
})
export class BasicInfoComponent {

}
