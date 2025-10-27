import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { AddEditAnnouncementComponent } from '../../../../app/modules/announcements/admin/add-edit-announcement/add-edit-announcement.component';


const meta: Meta<AddEditAnnouncementComponent> = {
   title: 'Modules/Announcements/Admin/AddEditAnnouncement',
  component: AddEditAnnouncementComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<AddEditAnnouncementComponent>;

export const AddEditAnnouncement: Story = {};
