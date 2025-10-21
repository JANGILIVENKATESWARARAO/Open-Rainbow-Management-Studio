import type { Meta, StoryObj } from '@storybook/angular';
import { JobDetailsComponent } from '../../../app/modules/add-employee/job-details/job-details.component';


const meta: Meta<JobDetailsComponent> = {
  title: 'Modules/AddEmployee/JobDetails',
  component: JobDetailsComponent,
  // tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<JobDetailsComponent>;

export const JobDetails: Story = {};
