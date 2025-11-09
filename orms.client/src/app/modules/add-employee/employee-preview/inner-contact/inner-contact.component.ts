import { Component, Input } from '@angular/core';
import { LabelValueComponent } from '../../../../common-ui/controls/label-value/label-value.component';
import { ContactInformation } from '../../../../common-ui/assests/view-models/common-view-models';


@Component({
    selector: 'app-inner-contact',
    templateUrl: './inner-contact.component.html',
    styleUrl: './inner-contact.component.css',
    imports: [LabelValueComponent]
})
export class InnerContactComponent {
  @Input() contactInformation?: ContactInformation
}
