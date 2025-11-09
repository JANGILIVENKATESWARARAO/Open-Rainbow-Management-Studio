import { Component, Input } from '@angular/core';
import { LabelValueComponent } from '../../../../common-ui/controls/label-value/label-value.component';
import { EducationDetails } from '../../../../common-ui/assests/view-models/common-view-models';

@Component({
    selector: 'orms-inner-education',
    templateUrl: './inner-education.component.html',
    styleUrl: './inner-education.component.css',
    imports: [LabelValueComponent]
})
export class InnerEducationComponent {
  @Input() educationDetails?: EducationDetails;
}
