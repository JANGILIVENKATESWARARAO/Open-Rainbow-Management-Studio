import { CommonModule, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Announcement } from '../../../common-ui/assests/view-models/common-view-models';
import { ChipComponent } from "../../../common-ui/controls/chip/chip.component";

@Component({
  selector: 'app-announcement-box',
  templateUrl: './announcement-box.component.html',
  styleUrls: ['./announcement-box.component.css'],
  imports: [CommonModule, ChipComponent],
  standalone: true
})
export class AnnouncementBoxComponent {
  @Input() announcements: Announcement[] = [
    {
      title: 'Holiday Schedule Update',
      priority: 'high' as const,
      description: 'Please note that the office will be closed from December 24th to January 2nd. Emergency contacts will be available during this period.',
      postedDate: '24/12/2024',
      postedBy: 'HR Department'
    },
    // {
    //   title: 'New Security Policy',
    //   priority: 'low' as const,
    //   description: 'All employees must update their passwords by end of week following the new security guidelines.',
    //   postedDate: '25/12/2024',
    //   postedBy: 'IT Security'
    // },
    {
      title: 'Holiday Schedule Update1',
      priority: 'high' as const,
      description: 'Please note that the office will be closed from December 24th to January 2nd. Emergency contacts will be available during this period.',
      postedDate: '29/12/2024',
      postedBy: 'HR Department'
    },
  ];

  get highPriorityAnnouncements(): Announcement[] {
    return this.announcements
      .filter(a => a.priority === 'high')
      .sort((a, b) => this.parseDate(b.postedDate) - this.parseDate(a.postedDate));
  }

  get otherAnnouncements(): Announcement[] {
    return this.announcements
      .filter(a => a.priority !== 'high')
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
