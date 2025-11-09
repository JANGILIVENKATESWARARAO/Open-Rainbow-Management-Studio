import type { Meta, StoryObj } from '@storybook/angular';
import { HorizontalBarChartComponent } from '../../../app/common-ui/charts/horizontal-bar-chart/horizontal-bar-chart.component';

const meta: Meta<HorizontalBarChartComponent> = {
  title: 'Common-UI/Charts/HorizontalBar Chart',
  component: HorizontalBarChartComponent,
  // tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<HorizontalBarChartComponent>;

export const HorizontalBarChart: Story = {};
