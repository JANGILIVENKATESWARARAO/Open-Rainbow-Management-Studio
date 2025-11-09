
import { Component } from '@angular/core';
import { ButtonComponent } from '../../../common-ui/controls/button/button.component';
import { ChipComponent } from '../../../common-ui/controls/chip/chip.component';
import { TooltipDirective } from '../../../common-ui/feature-components/tooltip/directive/tooltip.directive';
import { TooltipComponent } from '../../../common-ui/feature-components/tooltip/tooltip.component';

export interface LeaveRequest {
  type: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  fromDate: string;
  toDate?: string;
  applyDate: string;
  description: string;
}

@Component({
    selector: 'orms-inner-recent-leave-request',
    templateUrl: './inner-recent-leave-request.component.html',
    styleUrl: './inner-recent-leave-request.component.css',
    imports: [
    ButtonComponent,
    ChipComponent,
    TooltipComponent,
    TooltipDirective
]
})
export class InnerRecentLeaveRequestComponent {
  leaveRequests: LeaveRequest[] = [
      {
        type: 'Vacation',
        status: 'Pending',
        fromDate: '15 Jan 2025',
        toDate: '17 Jan 2025',
        applyDate: '12 Jan 2025',
        description:
          'At the end of last year, my father announced that we will be having a family meeting to discuss our summer vacation plans. Not this again I thought.  Every year, when my father announced a family meeting regarding our vacation plans, he just explains how we',
      },
      {
        type: 'Sick Leave',
        status: 'Approved',
        fromDate: '8 Jan 2025',
        applyDate: '12 Jan 2025',
        description: 'Medical appointment',
      },
      {
        type: 'Personal',
        status: 'Rejected',
        fromDate: '20 Dec 2024',
        toDate: '23 Dec 2024',
        applyDate: '12 Jan 2025',
        description: 'Personal matters',
      },
    ];
  
    calculateDays(fromDate: string, toDate?: string): number {
      const from = new Date(fromDate);
      const to = new Date(toDate || fromDate);
      return Math.ceil((+to - +from) / 86400000) + 1;
    }
  
    isTruncated(text: string, limit: number): boolean {
      return !!text && text.length > limit;
    }
  
  
  
    leaveDescription(text: string, limit: number): string {
      if (!text) return '';
      if (text.length <= limit) return text;
  
      let trimmed = text.substring(0, limit);
  
      if (text.charAt(limit) !== ' ' && trimmed.lastIndexOf(' ') !== -1) {
        trimmed = trimmed.substring(0, trimmed.lastIndexOf(' '));
      }
  
      trimmed = trimmed.trim();
  
      return trimmed + '...';
    }
}
