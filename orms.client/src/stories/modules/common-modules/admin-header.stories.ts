import type { Meta, StoryObj } from '@storybook/angular';
import { AdminHeaderComponent } from '../../../app/modules/common-modules/admin-header/admin-header.component';

const meta: Meta<AdminHeaderComponent> = {
  title: 'Modules/CommonModules/AdminHeader',
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