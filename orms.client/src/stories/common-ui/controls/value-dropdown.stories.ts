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
    dropdownValues: [2024, 2023, 2022, 2021],
    placeholderText: '2024',
    textColor: '#111',
    activeTextColor: '#4076ff',
    backgroundColor: 'white',
    activeBackgroundColor: '#ecf2fd',
    borderColor: 'lightgray',
  },
};

export default meta;
type Story = StoryObj<ValueDropdownComponent>;

export const ValueDropdown: Story = {};
