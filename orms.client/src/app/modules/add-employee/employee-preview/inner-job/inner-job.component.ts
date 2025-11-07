import { Component, Input } from '@angular/core';
import { LabelValueComponent } from '../../../../common-ui/controls/label-value/label-value.component';
import { CountWidgetComponent } from '../../../../common-ui/feature-components/count-widget/count-widget.component';
import { JobDetails, LeaveAllocation } from '../../../../common-ui/assests/view-models/common-view-models';

@Component({
  selector: 'app-inner-job',
  templateUrl: './inner-job.component.html',
  styleUrl: './inner-job.component.css',
  standalone: true,
  imports: [LabelValueComponent, CountWidgetComponent]
})
export class InnerJobComponent {
  @Input() jobDetails?: JobDetails;
  @Input() leaveAlloation?: LeaveAllocation;

}
