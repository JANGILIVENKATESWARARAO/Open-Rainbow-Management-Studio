import type { Meta, StoryObj } from '@storybook/angular';
import { ChipComponent } from '../../../app/common-ui/controls/chip/chip.component';

const meta: Meta<ChipComponent> = {
  title: 'Common-UI/Chip',
  component: ChipComponent,
  // tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<ChipComponent>;

export const Chip: Story = {};
