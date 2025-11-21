import type { Meta, StoryObj } from '@storybook/angular';
import { LeaveUpdateComponent } from '../../../app/modules/dashboard/leave-update/leave-update.component';
import { DashboardComponent } from '../../../app/modules/dashboard/dashboard/dashboard.component';

const meta: Meta<DashboardComponent> = {
  title: 'Modules/Dashboard/Dashboard',
  component: DashboardComponent,
  // tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<DashboardComponent>;

export const Dashboard: Story = {};