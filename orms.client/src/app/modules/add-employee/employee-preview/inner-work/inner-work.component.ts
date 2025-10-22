import { Component } from '@angular/core';
import { LabelValueComponent } from '../../../../common-ui/controls/label-value/label-value.component';

@Component({
  selector: 'app-inner-work',
  templateUrl: './inner-work.component.html',
  styleUrl: './inner-work.component.css',
  standalone: true,
  imports:[LabelValueComponent]
})
export class InnerWorkComponent {

}
