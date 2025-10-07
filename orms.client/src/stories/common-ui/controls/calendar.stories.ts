import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { CalendarComponent } from '../../../app/common-ui/controls/calendar/calendar.component';

const meta: Meta<CalendarComponent> = {
  title: 'Common-UI/calendar',
  component: CalendarComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<CalendarComponent>;

export const calendar: Story = {};
