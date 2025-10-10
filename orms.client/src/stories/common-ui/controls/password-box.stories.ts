import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { PasswordBoxComponent } from '../../../app/common-ui/controls/password-box/password-box.component';

const meta: Meta<PasswordBoxComponent> = {
  title: 'Common-UI/password-box',
  component: PasswordBoxComponent,
  // tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<PasswordBoxComponent>;

export const Password: Story = {};
