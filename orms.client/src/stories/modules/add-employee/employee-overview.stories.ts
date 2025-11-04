import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { EmployeeOverviewComponent } from '../../../app/modules/add-employee/employee-overview/employee-overview.component';

const meta: Meta<EmployeeOverviewComponent> = {
  title: 'Modules/AddEmployee/EducationDetails',
  component: EmployeeOverviewComponent,
  // tags: ['autodocs'],
  parameters: {
  layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<EmployeeOverviewComponent>;

export const EmployeeOverview: Story = {};