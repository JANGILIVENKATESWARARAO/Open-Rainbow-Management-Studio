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
  args: {},
};

export default meta;
type Story = StoryObj<ViewTeamMembersComponent>;

export const ViewTeamMembers: Story = {};
