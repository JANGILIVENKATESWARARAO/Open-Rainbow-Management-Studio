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
  args: {},
};

export default meta;
type Story = StoryObj<UpcomingHolidaysComponent>;

export const UpcomingHolidays: Story = {};
