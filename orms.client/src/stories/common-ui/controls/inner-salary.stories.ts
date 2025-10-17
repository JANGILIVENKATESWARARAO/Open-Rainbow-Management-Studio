import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { InnerSalaryComponent } from '../../../app/common-ui/controls/inner-salary/inner-salary.component';


const meta: Meta<InnerSalaryComponent> = {
  title: 'Common-UI/InnerSalary',
  component: InnerSalaryComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<InnerSalaryComponent>;

export const InnerSalary: Story = {};
