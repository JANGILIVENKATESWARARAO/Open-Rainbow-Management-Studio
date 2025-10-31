import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quick-announcements',
  standalone:true,
  templateUrl: './quick-announcements.component.html',
  styleUrl: './quick-announcements.component.css',
  imports: [FormsModule, CommonModule]
})
export class QuickAnnouncementsComponent {
announcements = [
    { name: 'Prepare monthly financial report', date: 'oct 31 2025' },
    { name: 'Develop new marketing strategy',date: 'oct 31 2025' },
    { name: 'Update website content',date: 'oct 31 2025' },
    { name: 'Reply to customer emails',date: 'oct 31 2025' },
    { name: 'Review employee performance',date: 'oct 31 2025' },
    { name: 'Reply to customer emails',date: 'oct 31 2025' }
  ];
}

