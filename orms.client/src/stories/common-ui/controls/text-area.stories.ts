import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { TextAreaComponent } from '../../../app/common-ui/controls/text-area/text-area.component';

const meta: Meta<TextAreaComponent> = {
  title: 'Common-UI/TextArea',
  component: TextAreaComponent,
  // tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<TextAreaComponent>;

export const TextArea: Story = {};
