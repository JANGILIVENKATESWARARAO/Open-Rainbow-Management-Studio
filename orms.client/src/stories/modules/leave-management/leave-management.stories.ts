import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { LeaveManagementComponent } from '../../../app/modules/leave-management/leave-management/leave-management.component';


const meta: Meta<LeaveManagementComponent> = {
   title: 'Modules/Holidays/LeaveManagement',
  component: LeaveManagementComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<LeaveManagementComponent>;

export const LeaveManagement: Story = {};
