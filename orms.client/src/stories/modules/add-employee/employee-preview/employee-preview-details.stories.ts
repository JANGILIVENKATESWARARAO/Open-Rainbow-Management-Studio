import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { EmployeePreviewDetailsComponent } from '../../../../app/modules/add-employee/employee-preview/employee-preview-details/employee-preview-details.component';

const meta: Meta<EmployeePreviewDetailsComponent> = {
  title: 'Modules/AddEmployee/EmployeePreview/EmployeePreviewDetails',
  component: EmployeePreviewDetailsComponent,
  // tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<EmployeePreviewDetailsComponent>;

export const EmployeePreviewDetails: Story = {};
