import type { Meta, StoryObj } from '@storybook/angular';
import { LineChartComponent } from '../../../app/common-ui/charts/line-chart/line-chart.component';

const meta: Meta<LineChartComponent> = {
  title: 'Common-UI/Charts/Line Chart',
  component: LineChartComponent,
   tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<LineChartComponent>;

export const LineChart: Story = {
args: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    seriesLabels: ['Revenue', 'Expenses', 'Profit'],
    data: [
      [300, 200, 100, 250, 300, 350, 500],
      [200, 150, 180, 220, 260, 300, 400],
      [100, 80, 70, 150, 200, 250, 350],
    ],
    colors: ['orange', 'blue', 'green'],
    lineStyles: ['solid', 'dotted', 'dashed'],
    visible: [true, true, true],
    lineThickness: [2, 2, 2],
    legendShapes: ['circle', 'circle', 'rectRounded'],
  },
};


