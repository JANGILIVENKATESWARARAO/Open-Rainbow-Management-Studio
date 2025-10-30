import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { InnerContentComponent } from '../../../app/modules/add-employee/inner-content/inner-content.component';

const meta: Meta<InnerContentComponent> = {
  title: 'Modules/AddEmployee/InnerContent',
  component: InnerContentComponent,
  // tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<InnerContentComponent>;

export const InnerContent: Story = {};