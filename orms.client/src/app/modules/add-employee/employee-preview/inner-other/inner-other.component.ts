import { Component } from '@angular/core';
import { LabelValueComponent } from '../../../../common-ui/controls/label-value/label-value.component';

@Component({
  selector: 'app-inner-other',
  templateUrl: './inner-other.component.html',
  styleUrl: './inner-other.component.css',
  standalone: true,
  imports:[LabelValueComponent]
})
export class InnerOtherComponent {

}
