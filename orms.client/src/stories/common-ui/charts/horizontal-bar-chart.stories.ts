import type { Meta, StoryObj } from '@storybook/angular';
import { HorizontalBarChartComponent } from '../../../app/common-ui/charts/horizontal-bar-chart/horizontal-bar-chart.component';

const meta: Meta<HorizontalBarChartComponent> = {
  title: 'Common-UI/Charts/HorizontalBar Chart',
  component: HorizontalBarChartComponent,
  // tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    labels: {
      control: { type: 'object' },
      description: 'Array of labels for the chart axes',
      defaultValue: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
    },
    data: {
      control: { type: 'object' },
      description: '2D array of data values for each dataset',
      defaultValue: [
        [390, 120, 295, 230, 100, 20, 180, 230, 250],
        [100, 190, 110, 380, 100, 200, 290, 300, 100],
        [150, 200, 190, 120, 100, 400, 90, 120, 200]
      ]
    },
    datasetLabels: {
      control: { type: 'object' },
      description: 'Labels for each dataset series',
      defaultValue: ['Net Profit', 'Revenue', 'Free Cash Flow']
    },
    yAxisTicks: {
      control: { type: 'object' },
      description: 'Y-axis scale values (0, 50, 100, etc.)',
      defaultValue: [0, 50, 100, 150, 200, 250, 300, 350, 400]
    },
    horizontal: {
      control: { type: 'boolean' },
      description: 'Display chart horizontally',
      defaultValue: false
    },
    showLegend: {
      control: { type: 'boolean' },
      description: 'Show/hide chart legend',
      defaultValue: true
    },
    singleLine: {
      control: { type: 'boolean' },
      description: 'Use single line/stacked layout',
      defaultValue: false
    },
    showLabels: {
      control: { type: 'boolean' },
      description: 'Show/hide axis labels',
      defaultValue: true
    },
    showData: {
      control: { type: 'boolean' },
      description: 'Show/hide chart data',
      defaultValue: true
    },
    backgroundcolor: {
      control: { type: 'color' },
      description: 'Primary background color',
      defaultValue: '#2166E1'
    },
    backgroundcolor1: {
      control: { type: 'color' },
      description: 'Secondary background color',
      defaultValue: '#FF8800'
    },
    backgroundcolor2: {
      control: { type: 'color' },
      description: 'Tertiary background color',
      defaultValue: '#13C9E4'
    },
    legendShapes: {
      control: { 
        type: 'object' 
      },
      description: 'Array of legend shapes (circle, rectRounded, rect)',
      defaultValue: ['rectRounded', 'rectRounded', 'rectRounded']
    },
  },
  args: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    data: [
      [390, 120, 295, 230, 100, 20, 180, 230, 250],
      [100, 190, 110, 380, 100, 200, 290, 300, 100],
      [150, 200, 190, 120, 100, 400, 90, 120, 200]
    ],
    datasetLabels: ['Net Profit', 'Revenue', 'Free Cash Flow'],
    yAxisTicks: [0, 50, 100, 150, 200, 250, 300, 350, 400],
    horizontal: false,
    showLegend: true,
    singleLine: false,
    showLabels: true,
    showData: true,
    backgroundcolor: '#2166E1',
    backgroundcolor1: '#FF8800',
    backgroundcolor2: '#13C9E4',
    legendShapes: ['rectRounded', 'rectRounded', 'rectRounded'],
  },
};

export default meta;
type Story = StoryObj<HorizontalBarChartComponent>;

export const HorizontalBarChart: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 20px; height: 500px;">
        <orms-horizontal-bar-chart
          [labels]="labels"
          [data]="data"
          [datasetLabels]="datasetLabels"
          [yAxisTicks]="yAxisTicks"
          [horizontal]="horizontal"
          [showLegend]="showLegend"
          [singleLine]="singleLine"
          [showLabels]="showLabels"
          [showData]="showData"
          [backgroundcolor]="backgroundcolor"
          [backgroundcolor1]="backgroundcolor1"
          [backgroundcolor2]="backgroundcolor2"
          [legendShapes]="legendShapes"
        ></orms-horizontal-bar-chart>
      </div>
    `,
  }),
};
export const SmallScaleData: Story = {
  ...HorizontalBarChart,
  args: {
    ...HorizontalBarChart.args,
    data: [
      [15, 25, 35, 20, 30, 10],
      [20, 15, 25, 30, 10, 35]
    ],
    yAxisTicks: [0, 5, 10, 15, 20, 25, 30, 35, 40],
    datasetLabels: ['Small Values A', 'Small Values B'],
  },
};

export const LargeScaleData: Story = {
  ...HorizontalBarChart,
  args: {
    ...HorizontalBarChart.args,
    data: [
      [5000, 7500, 6000, 9000, 8000],
      [3000, 4500, 3500, 5500, 5000]
    ],
    yAxisTicks: [0, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000],
    datasetLabels: ['Revenue (K)', 'Profit (K)'],
  },
};

export const PercentageScale: Story = {
  ...HorizontalBarChart,
  args: {
    ...HorizontalBarChart.args,
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    data: [
      [85, 92, 78, 88],
      [65, 75, 70, 80]
    ],
    yAxisTicks: [0, 20, 40, 60, 80, 100],
    datasetLabels: ['Success Rate %', 'Completion Rate %'],
  },
};

export const CustomStepSize: Story = {
  ...HorizontalBarChart,
  args: {
    ...HorizontalBarChart.args,
    yAxisTicks: [0, 25, 50, 75, 100, 125, 150],
  },
};