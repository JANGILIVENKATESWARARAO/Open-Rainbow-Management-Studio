import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { EmployeeDetailsComponent } from '../../../app/modules/add-employee/employee-details/employee-details.component';

const meta: Meta<EmployeeDetailsComponent> = {
  title: 'Modules/AddEmployee/EducationDetails',
  component: EmployeeDetailsComponent,
  tags: ['autodocs'],
  parameters: {
  layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<EmployeeDetailsComponent>;

export const EmployeeDetails: Story = {};