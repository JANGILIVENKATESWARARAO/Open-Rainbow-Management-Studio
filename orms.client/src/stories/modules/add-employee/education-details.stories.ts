import type { Meta, StoryObj } from '@storybook/angular';
import { EmployeeDetailsComponent } from '../../../app/modules/add-employee/employee-details/employee-details.component';

const meta: Meta<EmployeeDetailsComponent> = {
  title: 'Modules/AddEmployee/EmployeeDetails',
  component: EmployeeDetailsComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    employee: {
      name: 'Arjuna Sivam Chandhran',
      designation: 'Desig1',
      id: 9203,
      email: 'arjunasivam@gmail.com',
      gender: 'Male',
      department: 'Dept1',
      doj: '14/06/1997',
      location: 'Head Office',
    },
  },
};

export default meta;
type Story = StoryObj<EmployeeDetailsComponent>;

export const EmployeeDetails: Story = {};
