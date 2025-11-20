import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { DetailedCalendarComponent } from '../../../app/common-ui/controls/detailed-calendar/detailed-calendar.component';

const meta: Meta<DetailedCalendarComponent> = {
  title: 'Common-UI/DetailedCalendar',
  component: DetailedCalendarComponent,
  // tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<DetailedCalendarComponent>;

export const DetailedCalendar: Story = {};
