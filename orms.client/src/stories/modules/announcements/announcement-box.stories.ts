import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { AnnouncementBoxComponent } from '../../../app/modules/announcements/announcement-box/announcement-box.component';


const meta: Meta<AnnouncementBoxComponent> = {
   title: 'Modules/Announcements/Announcement-box',
  component: AnnouncementBoxComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<AnnouncementBoxComponent>;

export const AnnouncementBox: Story = {};
