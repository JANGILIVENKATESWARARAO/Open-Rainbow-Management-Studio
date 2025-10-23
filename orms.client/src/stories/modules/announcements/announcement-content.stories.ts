import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { AnnouncementContentComponent } from '../../../app/modules/announcements/announcement-content/announcement-content.component';


const meta: Meta<AnnouncementContentComponent> = {
   title: 'Modules/Announcements/Announcement-content',
  component: AnnouncementContentComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<AnnouncementContentComponent>;

export const AnnouncementContent: Story = {};
