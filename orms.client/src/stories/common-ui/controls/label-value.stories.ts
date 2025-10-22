import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { LabelValueComponent } from '../../../app/common-ui/controls/label-value/label-value.component';


const meta: Meta<LabelValueComponent> = {
  title: 'Common-UI/LabelValue',
  component: LabelValueComponent,
  // tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<LabelValueComponent>;

export const LabelValue: Story = {};
