import { Component } from '@angular/core';
import { NoticeBannerComponent } from '../../../common-ui/feature-components/notice-banner/notice-banner';
import { CalendarComponent } from '../../../common-ui/controls/calendar/calendar.component';
import { TextAreaComponent } from '../../../common-ui/controls/text-area/text-area.component';
import { ButtonComponent } from '../../../common-ui/controls/button/button.component';
import { DropDownComponent } from '../../../common-ui/controls/drop-down/drop-down.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrl: './apply-leave.component.css',
  imports: [NoticeBannerComponent,CalendarComponent,TextAreaComponent,ButtonComponent,DropDownComponent,CommonModule],
  standalone: true,
})
export class ApplyLeaveComponent {
    showForm: boolean = false; 
   

  
  showLeaveForm() {
    
    this.showForm = !this.showForm; 
  }

  submitApplication() {
    this.showForm = false;
  }
  


}
