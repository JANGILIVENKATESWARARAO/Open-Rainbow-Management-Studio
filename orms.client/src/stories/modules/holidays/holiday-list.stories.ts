import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { UpcomingHolidaysComponent } from '../../../app/modules/holidays/upcoming-holidays/upcoming-holidays.component';
import { AddHolidayListComponent } from '../../../app/modules/holidays/upcoming-holidays/add-holiday-list/add-holiday-list.component';
import { HolidayListComponent } from '../../../app/modules/holidays/upcoming-holidays/holiday-list/holiday-list.component';


const meta: Meta<HolidayListComponent> = {
   title: 'Modules/Holidays/HolidayList',
  component: HolidayListComponent,
  // tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<HolidayListComponent>;

export const HolidayList: Story = {};
