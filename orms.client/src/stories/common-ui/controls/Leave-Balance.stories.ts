import type { Meta, StoryObj } from '@storybook/angular';
import { LeaveBalanceComponent } from '../../../app/common-ui/controls/leave-balance/leave-balance.component';

const meta: Meta<LeaveBalanceComponent> = {
  title: 'Common-UI/AdminHeader',
  component: LeaveBalanceComponent,
  // tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<LeaveBalanceComponent>;

export const LeaveBalance: Story = {};