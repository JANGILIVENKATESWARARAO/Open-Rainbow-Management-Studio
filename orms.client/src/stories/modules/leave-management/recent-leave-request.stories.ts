import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';

import { RecentLeaveRequestComponent } from '../../../app/modules/leave-management/recent-leave-request/recent-leave-request.component';

const meta: Meta<RecentLeaveRequestComponent> = {
  title: 'Modules/LeaveManagement/RecentLeaveRequest',
  component: RecentLeaveRequestComponent,
  // tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    data: [
      {
          type: 'Sick Leave',
          fromDate: '12-Nov-2025',
          toDate: '13-Nov-2025',
          applyOn: '11-Nov-2025',
          title: 'health Issue',
          description: 'Need to join in hospital, Medical appointment',
          status: 'Pending',
        },
        {
          type: 'Casual Leave',
          fromDate: '14-Nov-2025',
          toDate: '15-Nov-2025',
          applyOn: '09-Nov-2025',
          title: 'Vacation',
          description: 'Family gatherting',
          status: 'Rejected',
        }
      ]
  },
};

export default meta;
type Story = StoryObj<RecentLeaveRequestComponent>;

export const RecentLeaveRequest: Story = {};
