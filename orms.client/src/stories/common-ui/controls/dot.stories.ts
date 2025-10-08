import type { Meta, StoryObj } from '@storybook/angular';
import { DotComponent } from '../../../app/dot/dot.component';


const meta: Meta<DotComponent> = {
  title: 'dot',
  component: DotComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<DotComponent>;

export const dot: Story = {};
