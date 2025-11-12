import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { HolidayListComponent } from '../../../app/modules/holidays/upcoming-holidays/holiday-list/holiday-list.component';

const meta: Meta<HolidayListComponent> = {
  title: 'Modules/Holidays/HolidayList',
  component: HolidayListComponent,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    data: [
      {
        holidayName: `New Year's Day`,
        holidayType: 'National Holiday',
        holidayClassification: 'Paid Leave',
        holidayCalendar: 'January 1, 2024',
        holidayMonth: '',
        holidayDate: 0
      },
      {
        holidayName: `Republic Day`,
        holidayType: 'National Holiday',
        holidayClassification: 'Paid Leave',
        holidayCalendar: 'January 26, 2024',
        holidayMonth: '',
        holidayDate: 0
      },
      {
        holidayName: `Good Friday`,
        holidayType: 'Religious Holiday',
        holidayClassification: 'Paid Leave',
        holidayCalendar: 'March 29, 2024',
        holidayMonth: '',
        holidayDate: 0
      },
      {
        holidayName: `Labour Day`,
        holidayType: 'National Holiday',
        holidayClassification: 'Paid Leave',
        holidayCalendar: 'May 1, 2024',
        holidayMonth: '',
        holidayDate: 0
      }
    ]
  },
};

export default meta;
type Story = StoryObj<HolidayListComponent>;

export const HolidayList: Story = {};