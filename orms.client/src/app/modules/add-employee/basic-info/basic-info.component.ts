import { Component } from '@angular/core';
import { CalendarComponent } from "../../../common-ui/controls/calendar/calendar.component";
import { DropDownComponent } from "../../../common-ui/controls/drop-down/drop-down.component";
import { TextBoxComponent } from '../../../common-ui/controls/text-box/text-box.component';
import { IconComponent } from '../../../common-ui/feature-components/icon/icon.component';

@Component({
    selector: 'orms-basic-info',
    templateUrl: './basic-info.component.html',
    styleUrl: './basic-info.component.css',
    imports: [CalendarComponent, DropDownComponent, TextBoxComponent,IconComponent]
})
export class BasicInfoComponent {

}
