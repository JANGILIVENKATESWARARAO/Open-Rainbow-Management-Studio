import type { Meta, StoryObj } from '@storybook/angular';
import { AdminHeaderComponent } from '../../../app/common-ui/controls/admin-header/admin-header.component';

const meta: Meta<AdminHeaderComponent> = {
  title: 'Common-UI/AdminHeader',
  component: AdminHeaderComponent,
  // tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<AdminHeaderComponent>;

export const AdminHeader: Story = {};