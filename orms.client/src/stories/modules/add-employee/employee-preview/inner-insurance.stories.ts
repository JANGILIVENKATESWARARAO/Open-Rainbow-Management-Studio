import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { InnerInsuranceComponent } from '../../../../app/modules/add-employee/employee-preview/inner-insurance/inner-insurance.component';


const meta: Meta<InnerInsuranceComponent> = {
  title: 'Modules/AddEmployee/EmployeePreview/InnerInsurance',
  component: InnerInsuranceComponent,
  // tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<InnerInsuranceComponent>;

export const InnerInsurance: Story = {};
