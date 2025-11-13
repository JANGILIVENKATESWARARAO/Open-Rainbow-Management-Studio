import type { Meta, StoryObj } from '@storybook/angular';
import { DoughnutChartComponent } from '../../../app/common-ui/charts/doughnut-chart/doughnut-chart.component';

const meta: Meta<DoughnutChartComponent> = {
  title: 'Common-UI/Charts/Doughnut Chart',
  component: DoughnutChartComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {},
};

export default meta;
type Story = StoryObj<DoughnutChartComponent>;

export const DoughnutChart: Story = {
  args: {
    showLegends: true,
    centerText: true,
    showAsValue: false,
    legendData: [
      {
        color: 'gray',
        value: 30,
        label: 'Earing',
      },
      {
        color: 'blue',
        value: 40,
        label: 'deduction',
      },
      {
        color: 'yellow',
        value: 20,
        label: 'food',
      },
      {
        color: 'black',
        value: 20,
        label: 'PF',
      },
    ],
  },
};
