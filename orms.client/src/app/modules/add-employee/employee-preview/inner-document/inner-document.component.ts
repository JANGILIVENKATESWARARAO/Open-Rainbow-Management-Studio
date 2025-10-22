import { Component } from '@angular/core';
import { LabelValueComponent } from '../../../../common-ui/controls/label-value/label-value.component';

@Component({
  selector: 'app-inner-document',
  templateUrl: './inner-document.component.html',
  styleUrl: './inner-document.component.css',
  standalone: true,
  imports:[LabelValueComponent]
})
export class InnerDocumentComponent {

}
