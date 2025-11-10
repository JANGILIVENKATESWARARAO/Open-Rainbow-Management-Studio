import { Component } from '@angular/core';
import { NoticeBannerComponent } from '../../../common-ui/feature-components/notice-banner/notice-banner';
import { CalendarComponent } from '../../../common-ui/controls/calendar/calendar.component';
import { TextAreaComponent } from '../../../common-ui/controls/text-area/text-area.component';
import { ButtonComponent } from '../../../common-ui/controls/button/button.component';
import { DropDownComponent } from '../../../common-ui/controls/drop-down/drop-down.component';
import { CommonModule } from '@angular/common';
import { ApplyLeave } from '../../../common-ui/assests/view-models/common-view-models';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrl: './apply-leave.component.css',
  imports: [
    NoticeBannerComponent,
    CalendarComponent,
    TextAreaComponent,
    ButtonComponent,
    DropDownComponent,
    CommonModule,
  ],
  standalone: true,
})
export class ApplyLeaveComponent {
  showForm: boolean = false;

  applyLeave: ApplyLeave = new ApplyLeave();
  showLeaveForm() {
    this.showForm = !this.showForm;
  }

  CloseApplication() {
    this.showForm = false;
  }

  formatDate(date: Date | null): string {
    if (!date) return '';
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}-${month}-${year}`;
  }

  submitApplication() {
    console.log(this.applyLeave);
  }
}
