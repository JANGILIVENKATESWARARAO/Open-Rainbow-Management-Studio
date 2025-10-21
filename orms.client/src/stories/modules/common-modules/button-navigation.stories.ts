import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonNavigationComponent } from '../../../app/modules/common-modules/button-navigation/button-navigation.component';

const meta: Meta<ButtonNavigationComponent> = {
  title: 'Modules/CommonModules/ButtonNavigation',
  component: ButtonNavigationComponent,
  // tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<ButtonNavigationComponent>;

export const ButtonNavigation: Story = {};