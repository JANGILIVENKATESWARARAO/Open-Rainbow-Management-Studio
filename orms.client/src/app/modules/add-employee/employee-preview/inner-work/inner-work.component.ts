import { Component, Input } from '@angular/core';
import { LabelValueComponent } from '../../../../common-ui/controls/label-value/label-value.component';
import { WorkExperience } from '../../../../common-ui/assests/view-models/common-view-models';

@Component({
    selector: 'app-inner-work',
    templateUrl: './inner-work.component.html',
    styleUrl: './inner-work.component.css',
    imports: [LabelValueComponent]
})
export class InnerWorkComponent {
  @Input() workExperience?: WorkExperience
}
