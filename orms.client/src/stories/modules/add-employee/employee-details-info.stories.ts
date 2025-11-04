import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { EmployeeDetailsInfoComponent } from '../../../app/modules/add-employee/employee-details-info/employee-details-info.component';


const meta: Meta<EmployeeDetailsInfoComponent> = {
  title: 'Modules/AddEmployee/EducationDetails',
  component: EmployeeDetailsInfoComponent,
  tags: ['autodocs'],
  parameters: {
  layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<EmployeeDetailsInfoComponent>;

export const EmployeeDetailsInfo: Story = {};