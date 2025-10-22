import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { InnerContactComponent } from '../../../../app/modules/add-employee/employee-preview/inner-contact/inner-contact.component';


const meta: Meta<InnerContactComponent> = {
  title: 'Modules/AddEmployee/EmployeePreview/InnerContact',
  component: InnerContactComponent,
  // tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<InnerContactComponent>;

export const InnerContact: Story = {};
