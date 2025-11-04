import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
interface activity {
  name: string;
  date: string;
}
@Component({
  selector: 'app-quick-activities',
  templateUrl: './quick-activities.component.html',
  styleUrl: './quick-activities.component.css',
  standalone:true,
    imports: [CommonModule, FormsModule],
})
export class QuickActivitiesComponent {
// You can pass this list dynamically from Storybook
  @Input() activities: activity[] = [
    { name: 'Prepare monthly financial report', date: '2025-10-31' },
    { name: 'Develop new marketing strategy', date: '2025-10-31' },
    { name: 'Update website content', date: '2025-10-31' },
    { name: 'Reply to customer emails', date: '2025-10-31' },
    { name: 'Review employee performance', date: '2025-10-31' },
  ];


}
