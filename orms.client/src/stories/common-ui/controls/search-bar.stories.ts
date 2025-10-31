import type { Meta, StoryObj } from '@storybook/angular';
import { SearchBarComponent } from '../../../app/common-ui/controls/search-bar/search-bar.component';

const meta: Meta<SearchBarComponent> = {
  title: 'Common-UI/SearchBar',
  component: SearchBarComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    showBorder: { control: 'boolean' },
    borderColor: { control: 'color' },
    placeholderText: { control: 'text' },
  },
  args: {
    placeholderText: 'Search employees by name, email, position, or department...',
    showBorder: true,
    borderColor: '#2563eb', 
  },
};

export default meta;
type Story = StoryObj<SearchBarComponent>;

export const SearchBar: Story = {};
