import type { Meta, StoryObj } from '@storybook/angular';
import { ValueDropdownComponent } from '../../../app/common-ui/controls/value-dropdown/value-dropdown.component';

const meta: Meta<ValueDropdownComponent> = {
  title: 'Common-UI/ValueDropdown',
  component: ValueDropdownComponent,
  tags: ['autodocs'],
  parameters: {
    // layout: 'centered',
  },
  args: {
    dropdownValues: [2025, 2024, 2023, 2022],
    // defaultSelected: 2024,
    placeholderText: 'Select Year',
    textColor: '#111',
    activeTextColor: '#4076ff',
    backgroundColor: 'white',
    activeBackgroundColor: '#ecf2fd',
    borderColor: 'lightgray',
    dropdownWidth: '140px',
  },
};

export default meta;
type Story = StoryObj<ValueDropdownComponent>;

export const ValueDropdown: Story = {
  args: {
    dropdownValues: [2030, 2029, 2028, 2027],
    // defaultSelected: 2029,
  },
};
