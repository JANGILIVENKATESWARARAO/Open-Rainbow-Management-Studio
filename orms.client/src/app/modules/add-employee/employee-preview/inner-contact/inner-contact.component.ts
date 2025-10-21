import { Component } from '@angular/core';
import { LabelValueComponent } from '../../../../common-ui/controls/label-value/label-value.component';

@Component({
  selector: 'app-inner-contact',
  templateUrl: './inner-contact.component.html',
  styleUrl: './inner-contact.component.css',
  standalone: true,
  imports:[LabelValueComponent]
})
export class InnerContactComponent {

}
