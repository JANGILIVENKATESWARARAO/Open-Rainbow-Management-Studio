import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Announcement, HolidayList } from '../../../../common-ui/assests/view-models/common-view-models';
import { ButtonComponent } from '../../../../common-ui/controls/button/button.component';
import { ChipComponent } from '../../../../common-ui/controls/chip/chip.component';
import { CountWidgetComponent } from '../../../../common-ui/feature-components/count-widget/count-widget.component';

@Component({
  selector: 'orms-holiday-list',
  templateUrl: './holiday-list.component.html',
  styleUrl: './holiday-list.component.css',
  imports: [
    ButtonComponent,
    ChipComponent,
    CountWidgetComponent
  ]
})
export class HolidayListComponent implements OnInit, OnChanges {
  @Input() data: HolidayList[] = [];
  @Input() announcements: Announcement[] = [];
  
  showForm = false;
  processedData: any[] = [];

  ngOnInit() {
    this.processHolidayData();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {
      this.processHolidayData();
    }
  }

  private processHolidayData() {
    this.processedData = this.data.map(holiday => {
      try {
        const date = new Date(holiday.holidayCalendar);
        if (isNaN(date.getTime())) {
          console.warn('Invalid date:', holiday.holidayCalendar);
          return {
            ...holiday,
            holidayMonth: 'N/A',
            holidayDate: 0
          };
        }

        return {
          ...holiday,
          holidayMonth: date.toLocaleString('en-US', { month: 'short' }).toUpperCase(),
          holidayDate: date.getDate()
        };
      } catch (error) {
        console.error('Error processing date:', error);
        return {
          ...holiday,
          holidayMonth: 'ERR',
          holidayDate: 0
        };
      }
    });
  }
}