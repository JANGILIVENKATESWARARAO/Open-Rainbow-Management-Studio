import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { InnerWorkComponent } from '../../../app/common-ui/controls/inner-work/inner-work.component';


const meta: Meta<InnerWorkComponent> = {
  title: 'Common-UI/InnerWork',
  component: InnerWorkComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<InnerWorkComponent>;

export const InnerWork: Story = {};
