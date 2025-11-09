import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../../common-ui/controls/button/button.component';
import { TextAreaComponent } from '../../../../common-ui/controls/text-area/text-area.component';
import { TextBoxComponent } from '../../../../common-ui/controls/text-box/text-box.component';
import { DropDownComponent } from '../../../../common-ui/controls/drop-down/drop-down.component';
import { CalendarComponent } from '../../../../common-ui/controls/calendar/calendar.component';
import { ChipComponent } from '../../../../common-ui/controls/chip/chip.component';
import { Announcement } from '../../../../common-ui/assests/view-models/common-view-models';

@Component({
    selector: 'app-add-edit-announcement',
    templateUrl: './add-edit-announcement.component.html',
    styleUrl: './add-edit-announcement.component.css',
    imports: [
        CommonModule,
        ButtonComponent,
        TextAreaComponent,
        TextBoxComponent,
        DropDownComponent,
        CalendarComponent,
        ChipComponent,
    ]
})
export class AddEditAnnouncementComponent {
  showForm = false;
    isSaveClicked: boolean = false;

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
      description:
        'Please note that the office will be closed from December 24th to January 2nd. Emergency contacts will be available during this period.',
      postedDate: '29/12/2024',
      postedBy: 'HR Department',
      expireDate: '24/12/2024',
    },
  ];

  onSave() {
    this.isSaveClicked = true;
  }
  toggleForm() {
    this.showForm = !this.showForm;
  }

  //   get highPriorityAnnouncements(): Announcement[] {
  //   return this.announcements
  //     .filter(a => a.priority === 'high')
  //     .sort((a, b) => this.parseDate(b.postedDate) - this.parseDate(a.postedDate));
  // }

  get otherAnnouncements(): Announcement[] {
    return this.announcements.sort(
      (a, b) => this.parseDate(b.postedDate) - this.parseDate(a.postedDate)
    );
  }

  formatDate(value: string): string {
    const parts = value.split('/');
    if (parts.length === 3) {
      const [day, month, year] = parts.map(Number);
      const date = new Date(year, month - 1, day);
      const options: Intl.DateTimeFormatOptions = {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      };
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

  isTruncated(text: string, limit: number): boolean {
    return !!text && text.length > limit;
  }

  leaveDescription(text: string, limit: number): string {
    if (!text) return '';
    if (text.length <= limit) return text;

    let trimmed = text.substring(0, limit);

    if (text.charAt(limit) !== ' ' && trimmed.lastIndexOf(' ') !== -1) {
      trimmed = trimmed.substring(0, trimmed.lastIndexOf(' '));
    }

    trimmed = trimmed.trim();

    return trimmed + '...';
  }
}
