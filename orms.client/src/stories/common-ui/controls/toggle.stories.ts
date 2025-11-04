// import type { Meta, StoryObj } from '@storybook/angular';
// import { moduleMetadata } from '@storybook/angular';
// import { ToggleComponent } from '../../../app/common-ui/controls/toggle/toggle.component';

// const meta: Meta<ToggleComponent> = {
//   title: 'Common-UI/Toggle',
//   component: ToggleComponent,
//   tags: ['autodocs'],
//   decorators: [
//     moduleMetadata({
//       imports: [ToggleComponent],
//     }),
//   ],
//   parameters: {
//     layout: 'centered',
//   },
//   argTypes: {
//     checked: { control: 'boolean' },
//     color: { control: 'color' },
//     label: { control: 'text' },
//     labelPosition: {
//       control: { type: 'radio' },
//       options: ['left', 'right'],
//     },
//     labelColor: { control: 'color' },
//     size: {
//       control: { type: 'radio' },
//       options: ['small', 'medium', 'large'],
//       description: 'Toggle size',
//     },
//     checkedChange: { action: 'checkedChange' },
//     toggleChange: { action: 'toggleChange' },
//   },
//   args: {
//     checked: false,
//     color: '#4CAF50',
//     label: 'Enable Sync',
//     labelColor: '#333',
//     labelPosition: 'right',
//   },
// };

// export default meta;
// type Story = StoryObj<ToggleComponent>;


// export const Default: Story = {
//   args: {
//     size: 'medium',
//   },
// };


// export const Small: Story = {
//   args: {
//     size: 'small',
//     checked: false,
//     label: 'Enable Sync',
//   },
// };


// export const Medium: Story = {
//   args: {
//     size: 'medium',
//     checked: false,
//     label: 'Enable Sync',
//   },
// };


// export const Large: Story = {
//   args: {
//     size: 'large',
//     checked: false,
//     label: 'Enable Sync',
//   },
// };


import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { ToggleComponent } from '../../../app/common-ui/controls/toggle/toggle.component';

const meta: Meta<ToggleComponent> = {
  title: 'Common-UI/Toggle',
    tags: ['autodocs'],
  component: ToggleComponent,
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
    label: { control: 'text' },
    labelPosition: { control: { type: 'radio' }, options: ['left', 'right'] },
    labelColor: { control: 'color' },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
      description: 'Toggle size',
    },
    useCheckbox: { control: 'boolean' }, 
    checkedChange: { action: 'checkedChange' },
    toggleChange: { action: 'toggleChange' },
  },
  args: {
    checked: false,
    color: '#4CAF50',
    tickColor: '#fff',
    label: 'Enable Sync',
    labelColor: '#333',
    labelPosition: 'right',
    size: 'medium',
    useCheckbox: false, 
  },
};

export default meta;
type Story = StoryObj<ToggleComponent>;

export const Default: Story = {};