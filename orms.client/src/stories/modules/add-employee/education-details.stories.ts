import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { EducationDetailsComponent } from '../../../app/modules/add-employee/education-details/education-details.component';

const meta: Meta<EducationDetailsComponent> = {
  title: 'Modules/AddEmployee/EducationDetails',
  component: EducationDetailsComponent,
  tags: ['autodocs'],
  parameters: {
  layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<EducationDetailsComponent>;

export const EducationDetails: Story = {};
