import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { InnerInfoComponent } from '../../../app/common-ui/controls/inner-info/inner-info.component';


const meta: Meta<InnerInfoComponent> = {
  title: 'Common-UI/InnerInfo',
  component: InnerInfoComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<InnerInfoComponent>;

export const InnerInfo: Story = {};
