import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { AppComponent } from '../app/app.component';

const meta: Meta<AppComponent> = {
  title: 'Root/App',
  component: AppComponent,
  // tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<AppComponent>;

export const App: Story = {};
