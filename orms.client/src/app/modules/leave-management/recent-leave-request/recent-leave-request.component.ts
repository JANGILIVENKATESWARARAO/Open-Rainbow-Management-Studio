import { Component } from '@angular/core';
import { ChipComponent } from '../../../common-ui/controls/chip/chip.component';
import { ButtonComponent } from '../../../common-ui/controls/button/button.component';
import { CommonModule } from '@angular/common';

export interface LeaveRequest {
  type: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  fromDate: string;
  toDate?: string;
  description: string;
  days: number;
  showCancel?: boolean;
}

@Component({
  selector: 'app-recent-leave-request',
  templateUrl: './recent-leave-request.component.html',
  styleUrl: './recent-leave-request.component.css',
  standalone: true,
  imports: [CommonModule, ButtonComponent, ChipComponent],
})
export class RecentLeaveRequestComponent {
  leaveRequests: LeaveRequest[] = [
    {
      type: 'Vacation',
      status: 'Pending',
      fromDate: '15 Jan 2025',
      toDate: '17 Jan 2025',
      description:
        'At the end of last year, my father announced that we will be having a family meeting to discuss our summer vacation plans. Not this again I thought.  Every year, when my father announced a family meeting regarding our vacation plans, he just explains how we',
      days: 3,
      showCancel: true,
    },
    {
      type: 'Sick Leave',
      status: 'Approved',
      fromDate: '8 Jan 2025',
      description: 'Medical appointment',
      days: 1,
    },
    {
      type: 'Personal',
      status: 'Rejected',
      fromDate: '20 Dec 2024',
      toDate: '23 Dec 2024',
      description: 'Personal matters',
      days: 4,
    },
  ];

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
