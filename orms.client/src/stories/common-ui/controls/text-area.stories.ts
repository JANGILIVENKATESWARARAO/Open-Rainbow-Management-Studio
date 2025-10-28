import type { Meta, StoryObj } from '@storybook/angular';
import { TextAreaComponent } from '../../../app/common-ui/controls/text-area/text-area.component';

const meta: Meta<TextAreaComponent> = {
  title: 'Common-UI/TextArea',
  component: TextAreaComponent,
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<TextAreaComponent>;

export const TextArea: Story = {
  args: {
    label: 'Address',
    Placeholder: 'Enter your address',
    isRequired: true,
    showBorder: true,
    maxChars: 50,
    showCharCount: true
  }
};
