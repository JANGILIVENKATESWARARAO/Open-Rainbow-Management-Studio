import type { Meta, StoryObj } from '@storybook/angular';
import { HolidayStatisticsComponent } from '../../../app/modules/holidays/holiday-statistics/holiday-statistics.component';

const meta: Meta<HolidayStatisticsComponent> = {
  title: 'Modules/Holidays/HolidayStatistics',
  component: HolidayStatisticsComponent,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    data: {
      control: 'object',
      description: 'Array of holiday statistics objects',
    },
  },
};

export default meta;
type Story = StoryObj<HolidayStatisticsComponent>;

export const HolidayStatistics: Story = {
  args: {
    data: [
      { name: 'Total Holidays', number: 12, color: 'blue', bg: 'rgb(244 244 255)' },
      { name: 'Federal Holidays', number: 8, color: 'green', bg: '#ddffdd' },
      { name: 'Company Holidays', number: 4, color: 'rgb(250, 139, 4)', bg: '#fff4e7' },
      { name: 'Upcoming', number: 3, color: 'rgb(245, 4, 245)', bg: 'rgb(255, 205, 255)' },
    ],
  },
};
