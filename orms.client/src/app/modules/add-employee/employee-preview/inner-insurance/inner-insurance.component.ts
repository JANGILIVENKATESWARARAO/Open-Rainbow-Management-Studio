import { Component, Input } from '@angular/core';
import { LabelValueComponent } from '../../../../common-ui/controls/label-value/label-value.component';
import { FatherDtails, MotherDetails, SpouseDetails } from '../../../../common-ui/assests/view-models/common-view-models';

@Component({
    selector: 'orms-inner-insurance',
    templateUrl: './inner-insurance.component.html',
    styleUrl: './inner-insurance.component.css',
    imports: [LabelValueComponent]
})
export class InnerInsuranceComponent {
  @Input() fatherDetails?: FatherDtails;
  @Input() motherDetails?: MotherDetails;
  @Input() spouseDetails?: SpouseDetails;
}
