import { Component } from '@angular/core';
import { FileUploadComponent } from '../../../common-ui/controls/file-upload/file-upload.component';
import { TextAreaComponent } from '../../../common-ui/controls/text-area/text-area.component';
import { CalendarComponent } from '../../../common-ui/controls/calendar/calendar.component';
import { ToggleComponent } from '../../../common-ui/controls/toggle/toggle.component';
import { TextBoxComponent } from "../../../common-ui/controls/text-box/text-box.component";

@Component({
    selector: 'orms-insurance-details',
    templateUrl: './insurance-details.component.html',
    styleUrl: './insurance-details.component.css',
    imports: [FileUploadComponent, TextAreaComponent, CalendarComponent, ToggleComponent, TextBoxComponent]
})
export class InsuranceDetailsComponent {

}
