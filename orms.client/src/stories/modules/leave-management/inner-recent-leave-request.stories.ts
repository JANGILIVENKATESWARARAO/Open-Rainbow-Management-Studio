import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { InnerRecentLeaveRequestComponent } from '../../../app/modules/leave-management/inner-recent-leave-request/inner-recent-leave-request.component';

const meta: Meta<InnerRecentLeaveRequestComponent> = {
  title: 'Modules/LeaveManagement/InnerRecentLeaveRequest',
  component: InnerRecentLeaveRequestComponent,
  // tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<InnerRecentLeaveRequestComponent>;

export const InnerRecentLeaveRequest: Story = {};
