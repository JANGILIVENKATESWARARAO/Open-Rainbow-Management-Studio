import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { BasicInfoComponent } from '../../../app/modules/add-employee/basic-info/basic-info.component';

const meta: Meta<BasicInfoComponent> = {
  title: 'Modules/AddEmployee/BasicInfo',
  component: BasicInfoComponent,
  // tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<BasicInfoComponent>;

export const BasicInfo: Story = {};
