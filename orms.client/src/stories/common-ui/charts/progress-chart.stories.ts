import type { Meta, StoryObj } from '@storybook/angular';
import { ProgressChartComponent } from '../../../app/common-ui/charts/progress-chart/progress-chart.component';

const meta: Meta<ProgressChartComponent> = {
  title: 'Common-UI/Charts/ProgressChart',
  component: ProgressChartComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered', 
  },
argTypes: {
    goalText: {
      control: 'text',
      description: 'Label displayed on the left side (e.g. "720 to Goal")',
    },
    progress: {
      control: { type: 'number', min: 0, max: 100 },
      description: 'Progress percentage (0–100)',
    },
    barColor: {
      control: 'color',
      description: 'Foreground progress bar color',
    },
    bgColor: {
      control: 'color',
      description: 'Background bar color',
    },
  },

    args: {
    goalText: '720 to Goal',
    progress: 70,
    barColor: '#d18238',
    bgColor: '#fbe7d2',
  },
};

export default meta;
type Story = StoryObj<ProgressChartComponent>;

export const ProgressChart: Story = {
 args: {
    goalText: '720 to Goal',
    progress: 70,
    barColor: '#d18238',
    bgColor: '#fbe7d2',
  },
};
