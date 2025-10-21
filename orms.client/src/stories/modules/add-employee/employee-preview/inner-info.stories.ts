import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { InnerInfoComponent } from '../../../../app/modules/add-employee/employee-preview/inner-info/inner-info.component';


const meta: Meta<InnerInfoComponent> = {
  title: 'Common-UI/InnerInfo',
  component: InnerInfoComponent,
  // tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<InnerInfoComponent>;

export const InnerInfo: Story = {};
