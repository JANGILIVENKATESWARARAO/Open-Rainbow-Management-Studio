import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { InnerJobComponent } from '../../../../app/modules/add-employee/employee-preview/inner-job/inner-job.component';


const meta: Meta<InnerJobComponent> = {
  title: 'Common-UI/InnerJob',
  component: InnerJobComponent,
  // tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<InnerJobComponent>;

export const InnerJob: Story = {};
