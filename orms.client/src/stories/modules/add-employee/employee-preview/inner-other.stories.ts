import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { InnerOtherComponent } from '../../../../app/modules/add-employee/employee-preview/inner-other/inner-other.component';


const meta: Meta<InnerOtherComponent> = {
  title: 'Modules/AddEmployee/EmployeePreview/InnerOther',
  component: InnerOtherComponent,
  // tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<InnerOtherComponent>;

export const InnerOther: Story = {};
