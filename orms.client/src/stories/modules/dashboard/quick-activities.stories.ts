import type { Meta, StoryObj } from '@storybook/angular';
import { QuickActivitiesComponent } from '../../../app/modules/dashboard/quick-activities/quick-activities.component';

const meta: Meta<QuickActivitiesComponent> = {
  title: 'Modules/Dashboard/QuickActivities',
  component: QuickActivitiesComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<QuickActivitiesComponent>;

export const QuickActivities: Story = {};