import { Component } from '@angular/core';
import { CalendarComponent } from "../../../common-ui/controls/calendar/calendar.component";
import { DropDownComponent } from "../../../common-ui/controls/drop-down/drop-down.component";
import { TextBoxComponent } from '../../../common-ui/controls/text-box/text-box.component';
@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrl: './basic-info.component.css',
  standalone: true,
  imports: [CalendarComponent, DropDownComponent, TextBoxComponent]
})
export class BasicInfoComponent {

}
