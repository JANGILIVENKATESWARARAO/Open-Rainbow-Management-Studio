import type { Meta, StoryObj } from '@storybook/angular';
import { AdminHeaderComponent } from '../../../app/modules/common-modules/admin-header/admin-header.component';
import { HeaderDropdownComponent } from '../../../app/modules/common-modules/header-dropdown/header-dropdown.component';

const meta: Meta<HeaderDropdownComponent> = {
  title: 'Modules/CommonModules/HeaderDropdown',
  component: HeaderDropdownComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<HeaderDropdownComponent>;

export const HeaderDropdown: Story = {};