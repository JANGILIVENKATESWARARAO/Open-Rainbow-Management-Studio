import type { Meta, StoryObj } from '@storybook/angular';
import { MenuBarComponent } from '../../../app/common-ui/feature-components/menu-bar/menu-bar.component';
import { PaginationComponent } from '../../../app/common-ui/feature-components/pagination/pagination.component';

const meta: Meta<PaginationComponent> = {
  title: 'Common-UI/Feature Components/Pagination',
  component: PaginationComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<PaginationComponent>;

export const Pager: Story = {};
