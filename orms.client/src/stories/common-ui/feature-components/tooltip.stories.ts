import type { Meta, StoryObj } from '@storybook/angular';

import { TooltipComponent } from '../../../app/common-ui/feature-components/tooltip/tooltip.component';

const meta: Meta<TooltipComponent> = {
  title: 'Feature Components/ToolTip',
  component: TooltipComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Tooltip = StoryObj<TooltipComponent>;

export const dot: Tooltip = {};
