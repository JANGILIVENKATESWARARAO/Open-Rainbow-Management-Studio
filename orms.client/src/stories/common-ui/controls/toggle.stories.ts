import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { ToggleComponent } from '../../../app/common-ui/controls/toggle/toggle.component';

const meta: Meta<ToggleComponent> = {
  title: 'Common-UI/Toggle',
  component: ToggleComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [ToggleComponent], 
    }),
  ],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    checked: { control: 'boolean' },
    color: { control: 'color' },      
    checkedChange: { action: 'checkedChange' },
    toggleChange: { action: 'toggleChange' },
  },
  args: {
    checked: false,
    color: '#4CAF50',
  },
};

export default meta;
type Story = StoryObj<ToggleComponent>;

export const Toggle: Story = {
  render: (args) => ({
    props: {
      ...args,
      
      checkedChange: (val: boolean) => {
        args.checked = val; 
      },
      toggleChange: (val: boolean) => {
        args.checked = val;
        
      },
    },
  }),
};
