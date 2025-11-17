import type { Meta, StoryObj } from '@storybook/angular';
import { QuickAnnouncementsComponent } from '../../../app/modules/dashboard/quick-announcements/quick-announcements.component';

const meta: Meta<QuickAnnouncementsComponent> = {
  title: 'Modules/Dashboard/QuickAnnouncements',
  component: QuickAnnouncementsComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },

  // ⬇ Important: Provide Angular module metadata so template works
  decorators: [
    (story) => ({
      moduleMetadata: {
        imports: [QuickAnnouncementsComponent],  // standalone component import
      },
      props: story().props,
    }),
  ],

  // ⬇ Pass mock data to the @Input()
  args: {
    Announcements: [
      { name: 'Prepare monthly financial report', date: '2025-11-07T15:53:30' },
      { name: 'Develop new marketing strategy', date: '2025-11-07T10:12:43' },
      { name: 'Update website content', date: '2025-10-31T10:12:43' },
      { name: 'Reply to customer emails', date: '2025-10-31T10:12:43' },
      { name: 'Review employee performance', date: '2025-10-31T10:12:43' },
    ]
  }
};

export default meta;

type Story = StoryObj<QuickAnnouncementsComponent>;

export const Default: Story = {};
