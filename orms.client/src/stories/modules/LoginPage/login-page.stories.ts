import type { Meta, StoryObj } from '@storybook/angular';
import { LoginPageComponent } from '../../../app/modules/login-page/login-page/login-page.component';


const meta: Meta<LoginPageComponent> = {
  title: 'Modules/LoginPage/LoginPage',
  component: LoginPageComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<LoginPageComponent>;

export const LoginPage: Story = {};