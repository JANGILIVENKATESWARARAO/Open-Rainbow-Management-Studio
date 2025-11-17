import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { IconComponent } from '../../../common-ui/feature-components/icon/icon.component';

interface Announcement {
  name: string;
  date: string;
}

@Component({
  selector: 'orms-quick-announcements',
  standalone:true,
  templateUrl: './quick-announcements.component.html',
  styleUrl: './quick-announcements.component.css',
  imports: [FormsModule, DatePipe, IconComponent]
})
export class QuickAnnouncementsComponent {
    @Input() Announcements: Announcement[] = [
    { name: 'Prepare monthly financial report', date: '2025-11-07T15:53:30' },
    { name: 'Develop new marketing strategy', date: '2025-11-07T10:12:43' },
    { name: 'Update website content', date: '2025-10-31T10:12:43' },
    { name: 'Reply to customer emails', date: '2025-10-31T10:12:43' },
    { name: 'Review employee performance', date: '2025-10-31T10:12:43' },
  ];
}
