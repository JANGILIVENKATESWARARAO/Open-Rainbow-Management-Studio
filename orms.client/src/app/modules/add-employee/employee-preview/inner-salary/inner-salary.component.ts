import { Component, Input } from '@angular/core';
import { LabelValueComponent } from '../../../../common-ui/controls/label-value/label-value.component';
import { Bankdetails } from '../../../../common-ui/assests/view-models/common-view-models';

@Component({
  selector: 'app-inner-salary',
  templateUrl: './inner-salary.component.html',
  styleUrl: './inner-salary.component.css',
  standalone: true,
  imports: [LabelValueComponent]
})
export class InnerSalaryComponent {
  @Input() currentCTC?: string;
  @Input() bankDetails?: Bankdetails;
}
