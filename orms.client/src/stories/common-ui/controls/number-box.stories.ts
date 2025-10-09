import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { NumberBoxComponent } from '../../../app/common-ui/controls/number-box/number-box.component';

const meta: Meta<NumberBoxComponent> = {
  title: 'Common-UI/NumberBox',
  component: NumberBoxComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<NumberBoxComponent>;

export const NumberBox: Story = {};