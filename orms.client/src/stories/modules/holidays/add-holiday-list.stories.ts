import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { UpcomingHolidaysComponent } from '../../../app/modules/holidays/upcoming-holidays/upcoming-holidays.component';
import { AddHolidayListComponent } from '../../../app/modules/holidays/upcoming-holidays/add-holiday-list/add-holiday-list.component';


const meta: Meta<AddHolidayListComponent> = {
   title: 'Modules/Holidays/AddHolidaysList',
  component: AddHolidayListComponent,
  // tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<AddHolidayListComponent>;

export const AddHolidaysList: Story = {};
