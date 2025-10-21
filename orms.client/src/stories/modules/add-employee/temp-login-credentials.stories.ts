import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';

import { TempLoginCredentialsComponent } from '../../../app/modules/add-employee/temp-login-credentials/temp-login-credentials.component';


const meta: Meta<TempLoginCredentialsComponent> = {
  title: 'Modules/AddEmployee/TempLoginCredentials',
  component: TempLoginCredentialsComponent,
  // tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<TempLoginCredentialsComponent>;

export const BasicInfo: Story = {};
