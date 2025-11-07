import { CommonModule } from '@angular/common';
import { Component, input, Input } from '@angular/core';
import { Announcement, HolidayList } from '../../../../common-ui/assests/view-models/common-view-models';
import { ButtonComponent } from '../../../../common-ui/controls/button/button.component';
import { ChipComponent } from '../../../../common-ui/controls/chip/chip.component';
import { CountWidgetComponent } from '../../../../common-ui/feature-components/count-widget/count-widget.component';

@Component({
  selector: 'app-holiday-list',
  templateUrl: './holiday-list.component.html',
  styleUrl: './holiday-list.component.css',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    ChipComponent,
    CountWidgetComponent,
  ],
})
export class HolidayListComponent {
  @Input() data: HolidayList[] = [];

  showForm = false;

  @Input() announcements: Announcement[] = [

  ];



}






