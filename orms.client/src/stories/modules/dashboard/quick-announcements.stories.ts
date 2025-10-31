import type { Meta, StoryObj } from '@storybook/angular';
import { QuickAnnouncementsComponent } from '../../../app/modules/dashboard/quick-announcements/quick-announcements.component';

const meta: Meta<QuickAnnouncementsComponent> = {
  title: 'Modules/Dashboard/QuickAnnouncements',
  component: QuickAnnouncementsComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<QuickAnnouncementsComponent>;

export const QuickAnnouncements: Story = {};