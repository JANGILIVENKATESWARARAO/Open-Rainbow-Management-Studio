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
  args: {
    options: [
      {
        value: 1,
        name: 'Male',
      },
      {
        value: 2,
        name: 'Female',
      },
      {
        value: 3,
        name: 'Other',
      },
    ],
  },
};

export default meta;
type Story = StoryObj<DropDownComponent>;

export const Dropdown: Story = {};
