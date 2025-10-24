import type { Meta, StoryObj } from '@storybook/angular';
import { ApplyLeaveComponent } from '../../../app/modules/leave-management/apply-leave/apply-leave.component';

const meta: Meta<ApplyLeaveComponent> = {
  title: 'Modules/LeaveManagement/ApplyLeave',
  component: ApplyLeaveComponent,
  // tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<ApplyLeaveComponent>;

export const ApplyLeave: Story = {};