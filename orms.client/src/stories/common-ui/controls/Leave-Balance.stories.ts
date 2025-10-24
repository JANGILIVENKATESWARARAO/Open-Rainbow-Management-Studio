import type { Meta, StoryObj } from '@storybook/angular';
import { LeaveBalanceComponent } from '../../../app/modules/leave-management/leave-balance/leave-balance.component';

const meta: Meta<LeaveBalanceComponent> = {
  title: 'Modules/LeaveManagement/LeaveBalance',
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