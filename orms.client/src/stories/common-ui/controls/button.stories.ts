import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { ButtonComponent } from '../../../app/common-ui/controls/button/button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Common-UI/Button',
  component: ButtonComponent,
  // tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Button: Story = {};
