import type { Meta, StoryObj } from '@storybook/angular';
import { ExpireAnnouncementComponent } from '../../../../app/modules/announcements/admin/expire-announcement/expire-announcement.component';

const meta: Meta<ExpireAnnouncementComponent> = {
  title: 'Modules/Announcements/Admin/ExpireAnnouncement',
  component: ExpireAnnouncementComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<ExpireAnnouncementComponent>;

export const ExpireAnnouncement: Story = {};
