import { Component, Input } from '@angular/core';

import { ButtonComponent } from '../../../../common-ui/controls/button/button.component';
import { TextAreaComponent } from '../../../../common-ui/controls/text-area/text-area.component';
import { TextBoxComponent } from '../../../../common-ui/controls/text-box/text-box.component';
import { DropDownComponent } from '../../../../common-ui/controls/drop-down/drop-down.component';
import { CalendarComponent } from '../../../../common-ui/controls/calendar/calendar.component';
import { ChipComponent } from '../../../../common-ui/controls/chip/chip.component';
import { Announcement } from '../../../../common-ui/assests/view-models/common-view-models';

@Component({
    selector: 'orms-add-holiday-list',
    templateUrl: './add-holiday-list.component.html',
    styleUrl: './add-holiday-list.component.css',
    imports: [
    ButtonComponent,
    CalendarComponent,
    DropDownComponent,
    TextAreaComponent,
    TextBoxComponent
]
})
export class AddHolidayListComponent {
  showForm = false; 

  @Input() announcements: Announcement[] = [
    {
      title: 'Holiday Schedule Update',
      priority: 'medium' as const,
      description:
        'Please note that the office will be closed from December 24th to January 2nd. Emergency contacts will be available during this period.',
      postedDate: '30/12/2024',
      postedBy: 'HR Department',
      expireDate: '24/12/2024',
    },
    {
      title: 'New Security Policy',
      priority: 'low' as const,
      description:
        'All employees must update their passwords by end of week following the new security guidelines.',
      postedDate: '25/12/2024',
      postedBy: 'IT Security',
      expireDate: '24/12/2024',
    },
    {
      title: 'Holiday Schedule Update1',
      priority: 'high' as const,
      description: 'Please note that the office will be closed from December 24th to January 2nd. Emergency contacts will be available during this period.',
      postedDate: '29/12/2024',
      postedBy: 'HR Department',
      expireDate: '24/12/2024',
    },
  ];

  toggleForm() {
    this.showForm = !this.showForm;
  }



  get otherAnnouncements(): Announcement[] {
    return this.announcements
      .sort((a, b) => this.parseDate(b.postedDate) - this.parseDate(a.postedDate));
  }

  formatDate(value: string): string {
    const parts = value.split('/');
    if (parts.length === 3) {
      const [day, month, year] = parts.map(Number);
      const date = new Date(year, month - 1, day);
      const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric' };
      return date.toLocaleDateString('en-GB', options).replace(/ /g, '-');
    }
    return value;
  }

  private parseDate(value: string): number {
    const parts = value.split('/');
    if (parts.length === 3) {
      const [day, month, year] = parts.map(Number);
      return new Date(year, month - 1, day).getTime();
    }
    return 0;
  }

}





