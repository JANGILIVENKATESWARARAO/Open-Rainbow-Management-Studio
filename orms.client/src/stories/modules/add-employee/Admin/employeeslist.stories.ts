import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { EmployeePreviewDetailsComponent } from '../../../../app/modules/add-employee/employee-preview/employee-preview-details/employee-preview-details.component';
import { EmployeeslistComponent } from '../../../../app/modules/add-employee/Admin/employeeslist/employeeslist.component';

const meta: Meta<EmployeeslistComponent> = {
  title: 'Modules/AddEmployee/Admin/EmployeesList',
  component: EmployeeslistComponent,
  // tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<EmployeeslistComponent>;

export const EmployeesList: Story = {};
