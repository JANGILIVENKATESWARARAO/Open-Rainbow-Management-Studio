import { Component, Input } from '@angular/core';
import { LabelValueComponent } from '../../../../common-ui/controls/label-value/label-value.component';
import { EducationDetails } from '../../../../common-ui/assests/view-models/common-view-models';

@Component({
  selector: 'app-inner-education',
  templateUrl: './inner-education.component.html',
  styleUrl: './inner-education.component.css',
  standalone: true,
  imports: [LabelValueComponent]
})
export class InnerEducationComponent {
  @Input() educationDetails?: EducationDetails;
}
