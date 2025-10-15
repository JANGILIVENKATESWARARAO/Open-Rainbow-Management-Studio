import type { Meta, StoryObj } from '@storybook/angular';
import { EdynCheckboxComponent } from '../../../app/common-ui/controls/edyn-checkbox/edyn-checkbox.component';

const meta: Meta<EdynCheckboxComponent> = {
  title: 'Common-UI/EdynCheckbox',
  component: EdynCheckboxComponent,
  // tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<EdynCheckboxComponent>;

export const EdynCheckbox: Story = {};
