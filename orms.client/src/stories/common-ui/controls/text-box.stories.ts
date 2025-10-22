import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { TextBoxComponent } from '../../../app/common-ui/controls/text-box/text-box.component';


const meta: Meta<TextBoxComponent> = {
  title: 'Common-UI/Textbox',
  component: TextBoxComponent,
  //  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<TextBoxComponent>;

export const Textbox: Story = {
  args: {
    isRequired: true,
    label: "Full Name",
    placeHolder: "Enter Full Name"
  }
};
