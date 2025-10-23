import { Component } from '@angular/core';
import { LabelValueComponent } from '../../../../common-ui/controls/label-value/label-value.component';

@Component({
  selector: 'app-inner-insurance',
  templateUrl: './inner-insurance.component.html',
  styleUrl: './inner-insurance.component.css',
  standalone: true,
  imports:[LabelValueComponent]
})
export class InnerInsuranceComponent {

}
