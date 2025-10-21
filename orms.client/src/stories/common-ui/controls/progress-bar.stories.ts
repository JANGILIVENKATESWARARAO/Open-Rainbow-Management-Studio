import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { ProgressBarComponent } from '../../../app/common-ui/controls/progress-bar/progress-bar.component';


const meta: Meta<ProgressBarComponent> = {
  title: 'Common-UI/ProgressBar',
  component: ProgressBarComponent,
  // tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<ProgressBarComponent>;

export const ProgressBar: Story = {};
