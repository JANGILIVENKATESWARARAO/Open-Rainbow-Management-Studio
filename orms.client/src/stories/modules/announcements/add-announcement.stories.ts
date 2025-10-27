import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { AddAnnouncementComponent } from '../../../app/modules/announcements/add-announcement/add-announcement.component';


const meta: Meta<AddAnnouncementComponent> = {
   title: 'Modules/Announcements/AddAnnouncement',
  component: AddAnnouncementComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<AddAnnouncementComponent>;

export const AddAnnouncement: Story = {};
