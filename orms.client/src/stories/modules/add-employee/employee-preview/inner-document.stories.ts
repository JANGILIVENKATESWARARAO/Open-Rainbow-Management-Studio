import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { InnerDocumentComponent } from '../../../../app/modules/add-employee/employee-preview/inner-document/inner-document.component';


const meta: Meta<InnerDocumentComponent> = {
  title: 'Common-UI/InnerDocument',
  component: InnerDocumentComponent,
  // tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<InnerDocumentComponent>;

export const InnerDocument: Story = {};
