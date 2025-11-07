import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';

import { ViewTeamMembersComponent } from '../../../app/modules/team-members/view-team-members/view-team-members.component';

const meta: Meta<ViewTeamMembersComponent> = {
  title: 'Modules/TeamMembers/ViewTeamMembers',
  component: ViewTeamMembersComponent,
  // tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    data: [
      {
        name: 'Ganesh',
        designation: 'UI/UX Designer',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1661757403301-ae68e1f1b827?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735'
      },
      {
        name: 'Venkat',
        designation: 'Senior Software Engineer Lead',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1661757403301-ae68e1f1b827?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735'
      },
      {
        name: 'Vidhatha',
        designation: 'CECO',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1661757403301-ae68e1f1b827?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735'
      },
      {
        name: 'Chitranjan',
        designation: 'Web Developer',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1661757403301-ae68e1f1b827?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735'
      },
    ]
  },
};

export default meta;
type Story = StoryObj<ViewTeamMembersComponent>;

export const ViewTeamMembers: Story = {};
