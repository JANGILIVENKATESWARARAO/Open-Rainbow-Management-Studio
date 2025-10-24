import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { UpcomingHolidaysComponent } from '../../../app/modules/holidays/upcoming-holidays/upcoming-holidays.component';
import { LeaveManagementComponent } from '../../../app/modules/leavemanagement/leave-management/leave-management.component';


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
