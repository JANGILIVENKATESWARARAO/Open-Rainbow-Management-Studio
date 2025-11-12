import { Component } from '@angular/core';
import { FileUploadComponent } from '../../../common-ui/controls/file-upload/file-upload.component';
import { TextAreaComponent } from '../../../common-ui/controls/text-area/text-area.component';
import { TextBoxComponent } from "../../../common-ui/controls/text-box/text-box.component";

@Component({
    selector: 'orms-documents-upload',
    templateUrl: './documents-upload.component.html',
    styleUrl: './documents-upload.component.css',
    imports: [FileUploadComponent, TextAreaComponent, TextBoxComponent]
})
export class DocumentsUploadComponent {

}
