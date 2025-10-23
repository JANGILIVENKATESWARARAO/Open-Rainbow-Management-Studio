import { Component } from '@angular/core';
import { ButtonComponent } from '../../../common-ui/controls/button/button.component';
import { TextAreaComponent } from '../../../common-ui/controls/text-area/text-area.component';
import { TextBoxComponent } from '../../../common-ui/controls/text-box/text-box.component';
import { DropDownComponent } from '../../../common-ui/controls/drop-down/drop-down.component';

@Component({
  selector: 'app-announcement-content',
  templateUrl: './announcement-content.component.html',
  styleUrl: './announcement-content.component.css',
  standalone: true,
  imports: [ButtonComponent, TextAreaComponent,  TextBoxComponent, DropDownComponent]
})
export class AnnouncementContentComponent {

}
