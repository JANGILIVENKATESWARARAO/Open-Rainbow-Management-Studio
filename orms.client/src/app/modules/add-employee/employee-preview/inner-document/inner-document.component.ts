import { Component, Input } from '@angular/core';
import { LabelValueComponent } from '../../../../common-ui/controls/label-value/label-value.component';
import { DocumentsUploaded } from '../../../../common-ui/assests/view-models/common-view-models';

@Component({
    selector: 'orms-inner-document',
    templateUrl: './inner-document.component.html',
    styleUrl: './inner-document.component.css',
    imports: [LabelValueComponent]
})
export class InnerDocumentComponent {
  @Input() uploadedDocuments?: DocumentsUploaded;
}
