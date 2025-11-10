import type { Meta, StoryObj } from '@storybook/angular';
import { DialChartComponent } from '../../../app/common-ui/charts/dial-chart/dial-chart.component';


const meta: Meta<DialChartComponent> = {
  title: 'Components/Dial Chart',
  component: DialChartComponent,
  tags: ['autodocs'],
  argTypes: {
    percentage: { control: 'number' },
    lastMonthChange: { control: 'number' },
    isRounded: { control: 'boolean' } // Dynamic Storybook control
  }
};

export default meta;
type Story = StoryObj<DialChartComponent>;

export const Default: Story = {
  args: {
    // percentage: 70,
    percentage: 70,
    lastMonthChange: 5,
    isRounded: true
    
  },
};
