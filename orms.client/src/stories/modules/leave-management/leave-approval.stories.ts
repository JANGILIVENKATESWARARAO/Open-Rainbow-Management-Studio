import type { Meta, StoryObj } from '@storybook/angular';
import { LeaveApprovalComponent } from '../../../app/modules/leave-management/leave-approval/leave-approval.component';

const meta: Meta<LeaveApprovalComponent> = {
  title: 'Modules/LeaveManagement/LeaveApproval',
  component: LeaveApprovalComponent,
  // tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<LeaveApprovalComponent>;

export const LeaveApproval: Story = {};