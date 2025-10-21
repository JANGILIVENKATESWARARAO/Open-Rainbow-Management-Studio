import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';

import { InsuranceDetailsComponent } from '../../../app/modules/add-employee/insurance-details/insurance-details.component';

const meta: Meta<InsuranceDetailsComponent> = {
  title: 'Modules/AddEmployee/InsuranceDetails',
  component: InsuranceDetailsComponent,
  // tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<InsuranceDetailsComponent>;

export const InsuranceDetails: Story = {};
