import { Component, Input } from '@angular/core';
import { LabelValueComponent } from '../../../../common-ui/controls/label-value/label-value.component';
import { BasicInformation } from '../../../../common-ui/assests/view-models/common-view-models';

@Component({
  selector: 'app-inner-info',
  templateUrl: './inner-info.component.html',
  styleUrl: './inner-info.component.css',
  standalone: true,
  imports: [LabelValueComponent]
})
export class InnerInfoComponent {
  @Input() basicInformation: BasicInformation | undefined;
}
