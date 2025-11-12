import type { Meta, StoryObj } from '@storybook/angular';
import { LeaveApprovalComponent } from '../../../app/modules/leave-management/leave-approval/leave-approval.component';

const meta: Meta<LeaveApprovalComponent> = {
  title: 'Modules/LeaveManagement/LeaveApproval',
  component: LeaveApprovalComponent,
  // tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    data: [
      {
        empName: 'Rajesh Sharma',
        empNo: 'EMP0001',
        empRole: 'Software Engineer',
        totalDays: 25,
        used: 18,
        remaining: 7,
        leaves: [
          {
          type: 'Sick Leave',
          fromDate: '12-Nov-2025',
          toDate: '13-Nov-2025',
          applyOn: '11-Nov-2025',
          title: 'health Issue',
          description: 'Need to join in hospital, Medical appointment',
          status: 'Pending',
        },
        
      ]
      },
      {
        empName: 'Suresh',
        empNo: 'EMP0002',
        empRole: 'tester',
        totalDays: 10,
        used: 2,
        remaining: 8,
        leaves: [{
          type: 'Casual Leave',
          fromDate: '14-Nov-2025',
          toDate: '15-Nov-2025',
          applyOn: '09-Nov-2025',
          title: 'Vacation',
          description: 'Family gatherting',
          status: 'Rejected',
        }]
      },

    ]
  },
};
 
export default meta;
type Story = StoryObj<LeaveApprovalComponent>;

export const LeaveApproval: Story = {};