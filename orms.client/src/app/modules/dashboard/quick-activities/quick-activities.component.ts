import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DotComponent } from '../../../common-ui/feature-components/dot/dot.component';
import { DurationPipe } from '../../../common-ui/assests/pipes/duration.pipe';


interface Activity {
  name: string;
  date: string;
}

@Component({
    selector: 'app-quick-activities',
    templateUrl: './quick-activities.component.html',
    styleUrls: ['./quick-activities.component.css'],
    imports: [CommonModule, FormsModule, DotComponent, DurationPipe]
})
export class QuickActivitiesComponent {
  @Input() activities: Activity[] = [
    { name: 'Prepare monthly financial report', date: '2025-11-07T15:53:30' },
    { name: 'Develop new marketing strategy', date: '2025-11-07T10:12:43' },
    { name: 'Update website content', date: '2025-10-31T10:12:43' },
    { name: 'Reply to customer emails', date: '2025-10-31T10:12:43' },
    { name: 'Review employee performance', date: '2025-10-31T10:12:43' },
  ];
}
