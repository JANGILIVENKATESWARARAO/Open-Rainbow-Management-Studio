import type { Meta, StoryObj } from '@storybook/angular';
import { HorizontalBarChartComponent } from '../../../app/common-ui/charts/horizontal-bar-chart/horizontal-bar-chart.component';

const meta: Meta<HorizontalBarChartComponent> = {
  title: 'Common-UI/Charts/HorizontalBar Chart',
  component: HorizontalBarChartComponent,
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
    gridDisplay: {
      control: { 
        type: 'select',
        options: ['both', 'horizontal', 'vertical', 'none']
      },
      description: 'Which grid lines to display',
      defaultValue: 'both'
    },
    gridLineStyle: {
      control: { 
        type: 'select',
        options: ['solid', 'dashed', 'dotted', 'none']
      },
      description: 'Style of grid lines',
      defaultValue: 'solid'
    },
    gridLineColor: {
      control: { type: 'color' },
      description: 'Color of grid lines',
      defaultValue: '#F0F4FA'
    },
    gridLineWidth: {
      control: { type: 'number', min: 1, max: 5, step: 1 },
      description: 'Width of grid lines in pixels',
      defaultValue: 1
    },
    whiteTheme: {
      control: { type: 'boolean' },
      description: 'Enable white theme with hover colors',
      defaultValue: false
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
    gridDisplay: 'both',
    gridLineStyle: 'solid',
    gridLineColor: '#F0F4FA',
    gridLineWidth: 1,
    whiteTheme: false,
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
          [gridDisplay]="gridDisplay"
          [gridLineStyle]="gridLineStyle"
          [gridLineColor]="gridLineColor"
          [gridLineWidth]="gridLineWidth"
          [whiteTheme]="whiteTheme"
        ></orms-horizontal-bar-chart>
      </div>
    `,
  }),
};

// NEW STORY: White Theme with Hover Colors
export const WhiteThemeWithHover: Story = {
  args: {
    whiteTheme: true,
    backgroundcolor: '#FFFFFF',
    backgroundcolor1: '#FFFFFF', 
    backgroundcolor2: '#FFFFFF',
    gridLineColor: '#E5E7EB',
    showData: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 20px; height: 500px; background: #1F2937;">
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
          [gridDisplay]="gridDisplay"
          [gridLineStyle]="gridLineStyle"
          [gridLineColor]="gridLineColor"
          [gridLineWidth]="gridLineWidth"
          [whiteTheme]="whiteTheme"
        ></orms-horizontal-bar-chart>
      </div>
    `,
  }),
};

// Additional story variations
