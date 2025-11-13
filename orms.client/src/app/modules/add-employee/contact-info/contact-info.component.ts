import { Component } from '@angular/core';
import { TextAreaComponent } from "../../../common-ui/controls/text-area/text-area.component";
import { TextBoxComponent } from "../../../common-ui/controls/text-box/text-box.component";
import { ToggleComponent } from "../../../common-ui/controls/toggle/toggle.component";
import { DropDownComponent } from "../../../common-ui/controls/drop-down/drop-down.component";
import { IconComponent } from '../../../common-ui/feature-components/icon/icon.component';


@Component({
    selector: 'orms-contact-info',
    templateUrl: './contact-info.component.html',
    styleUrl: './contact-info.component.css',
    imports: [TextAreaComponent, TextBoxComponent, ToggleComponent, DropDownComponent,IconComponent]
})
export class ContactInfoComponent {
selectedChange($event: any) {
throw new Error('Method not implemented.');
}
checkedChange($event: boolean) {
throw new Error('Method not implemented.');
}
toggleChange($event: boolean) {
throw new Error('Method not implemented.');
}

}
