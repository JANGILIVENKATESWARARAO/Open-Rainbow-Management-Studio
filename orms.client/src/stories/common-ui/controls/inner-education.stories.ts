import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { InnerEducationComponent } from '../../../app/common-ui/controls/inner-education/inner-education.component';


const meta: Meta<InnerEducationComponent> = {
  title: 'Common-UI/InnerEducation',
  component: InnerEducationComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<InnerEducationComponent>;

export const InnerEducation: Story = {};
