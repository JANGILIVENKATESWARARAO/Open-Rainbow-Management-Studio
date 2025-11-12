import { Component, input, Input } from '@angular/core';
import { NoticeBannerComponent } from '../../../common-ui/feature-components/notice-banner/notice-banner';
import { RecentLeaveRequestComponent } from '../recent-leave-request/recent-leave-request.component';
import { CountWidgetComponent } from '../../../common-ui/feature-components/count-widget/count-widget.component';
import { ButtonComponent } from '../../../common-ui/controls/button/button.component';
import { ChipComponent } from '../../../common-ui/controls/chip/chip.component';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-leave-approval',
  templateUrl: './leave-approval.component.html',
  styleUrl: './leave-approval.component.css',
  standalone:true,
  imports:[NoticeBannerComponent,RecentLeaveRequestComponent,CountWidgetComponent,ButtonComponent,ChipComponent,CommonModule]
})
export class LeaveApprovalComponent {

   @Input() label: string = ''; 
   @Input() EmployeeID: string = '';
   @Input() data: any [] = [];
   
   
   
}
