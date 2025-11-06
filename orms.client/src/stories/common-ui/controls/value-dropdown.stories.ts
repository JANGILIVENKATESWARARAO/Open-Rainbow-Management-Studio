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
    dropdownValues: [
      {
        value: '2024',
        isDefault: false,
        textColor: 'blue',
        backgroundColor: 'black',
        isDisabled: false,
      },
      {
        value: '2023',
        isDefault: true,
        textColor: 'green',
        backgroundColor: 'black',
        isDisabled: false,
      },
      {
        value: '2022',
        isDefault: true,
        textColor: 'orange',
        backgroundColor: 'red',
        isDisabled: false,
      },
      {
        value: '2021',
        isDefault: false,
        textColor: 'red',
        backgroundColor: 'lightgray',
        isDisabled: true,
      },
    ],
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
