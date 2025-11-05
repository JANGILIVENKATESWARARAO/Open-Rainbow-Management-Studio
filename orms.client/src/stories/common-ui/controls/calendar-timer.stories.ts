import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { CalendarTimerComponent } from '../../../app/common-ui/controls/calendar-timer/calendar-timer.component';

const meta: Meta<CalendarTimerComponent> = {
  title: 'Common-UI/CalendarTimer',
  component: CalendarTimerComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<CalendarTimerComponent>;

export const CalendarTimer: Story = {};
