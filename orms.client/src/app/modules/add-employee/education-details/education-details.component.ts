import { Component } from '@angular/core';
import { TextBoxComponent } from '../../../common-ui/controls/text-box/text-box.component';
import { DropDownComponent } from '../../../common-ui/controls/drop-down/drop-down.component';
import { TextAreaComponent } from '../../../common-ui/controls/text-area/text-area.component';

@Component({
    selector: 'app-education-details',
    templateUrl: './education-details.component.html',
    styleUrl: './education-details.component.css',
    imports: [TextBoxComponent, DropDownComponent, TextAreaComponent]
})
export class EducationDetailsComponent {

  selectedChange(value:any){
    
  }
}
