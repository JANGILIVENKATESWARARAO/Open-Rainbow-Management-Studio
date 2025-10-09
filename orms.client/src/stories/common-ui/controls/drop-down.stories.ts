import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { DropDownComponent } from '../../../app/common-ui/controls/drop-down/drop-down.component';

const meta: Meta<DropDownComponent> = {
  title: 'Common-UI/Dropdown',
  component: DropDownComponent,
  // tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<DropDownComponent>;

export const Dropdown: Story = {};
