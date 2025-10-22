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
  args: {},
};

export default meta;
type Story = StoryObj<RecentLeaveRequestComponent>;

export const RecentLeaveRequest: Story = {};
