import type { Meta, StoryObj } from '@storybook/angular';
import { TimepickerComponent } from '../../../app/common-ui/controls/timepicker/timepicker.component';

const meta: Meta<TimepickerComponent> = {
  title: 'Common-UI/Timepicker',
  component: TimepickerComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    use24HourFormat: {
      control: 'boolean',
      description: 'Toggle between 12-hour and 24-hour format',
      defaultValue: false,
    },
  },
  args: {
    use24HourFormat: false, // default (12-hour)
  },
};

export default meta;
type Story = StoryObj<TimepickerComponent>;
/** Default 12-hour timepicker */
export const Timepicker12Hour: Story = {
  args: {
    use24HourFormat: false,
  },
};
/** 24-hour timepicker example */
export const Timepicker24Hour: Story = {
  args: {
    use24HourFormat: true,
  },
};
export const Timepicker: Story = {};
