import { Component, Input } from '@angular/core';
import { LabelValueComponent } from '../../../../common-ui/controls/label-value/label-value.component';
import { OtherDetails } from '../../../../common-ui/assests/view-models/common-view-models';

@Component({
    selector: 'orms-inner-other',
    templateUrl: './inner-other.component.html',
    styleUrl: './inner-other.component.css',
    imports: [LabelValueComponent]
})
export class InnerOtherComponent {
  @Input() otherDetails?: OtherDetails
}
