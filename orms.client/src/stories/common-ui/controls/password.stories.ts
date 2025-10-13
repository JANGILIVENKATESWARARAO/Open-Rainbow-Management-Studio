import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { PasswordComponent } from '../../../app/common-ui/controls/password/password.component';

const meta: Meta<PasswordComponent> = {
  title: 'Common-UI/Password',
  component: PasswordComponent,
  // tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<PasswordComponent>;

export const Password: Story = {};
