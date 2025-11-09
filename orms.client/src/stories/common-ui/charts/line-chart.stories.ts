import type { Meta, StoryObj } from '@storybook/angular';
import { LineChartComponent } from '../../../app/common-ui/charts/line-chart/line-chart.component';

const meta: Meta<LineChartComponent> = {
  title: 'Common-UI/Charts/Line Chart',
  component: LineChartComponent,
  // tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<LineChartComponent>;

export const LineChart: Story = {};
