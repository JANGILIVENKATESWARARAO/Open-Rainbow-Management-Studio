import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { BadgeComponent } from '../../../app/common-ui/controls/badge/badge.component';

const meta: Meta<BadgeComponent> = {
  title: 'Common-UI/badge',
  component: BadgeComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<BadgeComponent>;

export const badge: Story = {};
