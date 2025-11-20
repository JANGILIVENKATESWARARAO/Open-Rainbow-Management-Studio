import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { HomeComponent } from '../../../app/modules/application-layer/layout/home/home.component';

const meta: Meta<HomeComponent> = {
  title: 'Modules/ApplicationLayout/Home',
  component: HomeComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<HomeComponent>;

export const Home: Story = {};
