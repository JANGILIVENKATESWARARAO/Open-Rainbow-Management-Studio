import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { ProgressBarComponent } from '../../../app/common-ui/controls/progress-bar/progress-bar.component';
import { SearchDropDownComponent } from '../../../app/common-ui/controls/search-drop-down/search-drop-down.component';

const meta: Meta<SearchDropDownComponent> = {
  title: 'Common-UI/SearchDropdown',
  component: SearchDropDownComponent,
  // tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    showBorder: { control: 'boolean' },
    borderColor: { control: 'color' },
    placeholderText: { control: 'text' },
    iconPosition: {
      control: 'select',
      options: ['left', 'right'],
    },
    showIcon: { control: 'boolean' },
  },
  args: {
    placeholderText:
      'Search employees by name, email, position, or department...',
    showBorder: true,
    borderColor: '#2563eb',
    iconPosition: 'left',
    showIcon: true,
  },
};

export default meta;
type Story = StoryObj<SearchDropDownComponent>;

export const SearchDropdown: Story = {};
