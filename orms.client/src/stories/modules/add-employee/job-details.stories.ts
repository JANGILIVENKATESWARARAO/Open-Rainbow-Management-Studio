import type { Meta, StoryObj } from '@storybook/angular';
import { JobDetailsComponent } from '../../../app/modules/add-employee/job-details/job-details.component';


const meta: Meta<JobDetailsComponent> = {
  title: 'Common-UI/jobdetails',
  component: JobDetailsComponent,
  // tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<JobDetailsComponent>;

export const Calendar: Story = {};
