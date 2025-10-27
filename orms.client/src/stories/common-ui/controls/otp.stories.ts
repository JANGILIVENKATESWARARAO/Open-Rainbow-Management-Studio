import type { Meta, StoryObj } from '@storybook/angular';
import { OtpComponent } from '../../../app/common-ui/controls/otp/otp.component';

const meta: Meta<OtpComponent> = {
  title: 'Common-UI/Otp',
  component: OtpComponent,
  //tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<OtpComponent>;

export const Otp: Story = {};
