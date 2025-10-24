import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { BasicCardComponent } from '../../../app/modules/basic-card/basic-card.component';

const meta: Meta<BasicCardComponent> = {
  title: 'Modules/AddEmployee/BasicCard',
  component: BasicCardComponent,
  // tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<BasicCardComponent>;

export const BasicCard: Story = {};