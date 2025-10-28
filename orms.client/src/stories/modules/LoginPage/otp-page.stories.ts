import type { Meta, StoryObj } from '@storybook/angular';
import { OtpPageComponent } from '../../../app/modules/login-page/otp-page/otp-page.component';


const meta: Meta<OtpPageComponent> = {
  title: 'Modules/LoginPage/OtpPage',
  component: OtpPageComponent,
  // tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<OtpPageComponent>;

export const OtpPage: Story = {};