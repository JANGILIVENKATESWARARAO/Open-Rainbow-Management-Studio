import type { Meta, StoryObj } from '@storybook/angular';
import { HorizontalBarChartComponent } from '../../../app/common-ui/charts/horizontal-bar-chart/horizontal-bar-chart.component';
import { SpinningChartComponent } from '../../../app/common-ui/charts/spinning-chart/spinning-chart.component';

const meta: Meta<SpinningChartComponent> = {
  title: 'Common-UI/Charts/Spinning Chart',
  component: SpinningChartComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<SpinningChartComponent>;

export const SpinningChart: Story = {};
