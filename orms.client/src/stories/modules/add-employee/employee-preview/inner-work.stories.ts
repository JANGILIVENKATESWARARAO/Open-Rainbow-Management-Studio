import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { InnerWorkComponent } from '../../../../app/modules/add-employee/employee-preview/inner-work/inner-work.component';


const meta: Meta<InnerWorkComponent> = {
  title: 'Modules/AddEmployee/EmployeePreview/InnerWork',
  component: InnerWorkComponent,
  // tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<InnerWorkComponent>;

export const InnerWork: Story = {};
