import { Component } from '@angular/core';
import { FileUploadComponent } from '../../../common-ui/controls/file-upload/file-upload.component';
import { TextAreaComponent } from '../../../common-ui/controls/text-area/text-area.component';
import { TextBoxComponent } from "../../../common-ui/controls/text-box/text-box.component";
import { IconComponent } from '../../../common-ui/feature-components/icon/icon.component';


@Component({
    selector: 'orms-documents-upload',
    templateUrl: './documents-upload.component.html',
    styleUrl: './documents-upload.component.css',
    imports: [FileUploadComponent, TextAreaComponent, TextBoxComponent,IconComponent]
})
export class DocumentsUploadComponent {

}
