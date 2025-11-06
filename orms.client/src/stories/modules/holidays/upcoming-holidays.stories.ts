import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { UpcomingHolidaysComponent } from '../../../app/modules/holidays/upcoming-holidays/upcoming-holidays.component';


const meta: Meta<UpcomingHolidaysComponent> = {
   title: 'Modules/Holidays/UpcomingHolidays',
  component: UpcomingHolidaysComponent,
  // tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<UpcomingHolidaysComponent>;

export const UpcomingHolidays: Story = {
  args: { 
    holidayleave : [
    {
      holidayname: 'christmas holiday',
      holidaylist: 'National Holiday',
      holidaydate: '25 Dec 2025',
    },
    {
      holidayname: 'Happy New Year',
      holidaylist: 'National Holiday',
      holidaydate: '1 Jan 2026',
    },
    {
      holidayname: 'Re-Public Day',
      holidaylist: 'federal Holiday',
      holidaydate: '26 Jan 2026',
    },
  ]
 }
};
