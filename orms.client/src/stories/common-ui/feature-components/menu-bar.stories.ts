import type { Meta, StoryObj } from '@storybook/angular';
import { MenuBarComponent } from '../../../app/common-ui/feature-components/menu-bar/menu-bar.component';



const meta: Meta<MenuBarComponent> = {
  title: 'Common-UI/Feature Components/menubar',
  component: MenuBarComponent,
  // tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<MenuBarComponent>;

export const dot: Story = {};
