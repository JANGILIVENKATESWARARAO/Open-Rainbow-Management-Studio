import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { AddNewEmployeeComponent } from '../../../app/modules/add-employee/add-new-employee/add-new-employee.component';

const meta: Meta<AddNewEmployeeComponent> = {
  title: 'Modules/AddEmployee/AddNewEmployee',
  component: AddNewEmployeeComponent,
  // tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<AddNewEmployeeComponent>;

export const AddNewEmployee: Story = {};
