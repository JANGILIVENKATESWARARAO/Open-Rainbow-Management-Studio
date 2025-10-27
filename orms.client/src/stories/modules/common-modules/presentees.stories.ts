import type { Meta, StoryObj } from '@storybook/angular';
import { PresenteesComponent } from '../../../app/modules/common-modules/presentees/presentees.component';

const meta: Meta<PresenteesComponent> = {
  title: 'Modules/CommonModules/Presentees',
  component: PresenteesComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<PresenteesComponent>;

export const Presentees: Story = {};