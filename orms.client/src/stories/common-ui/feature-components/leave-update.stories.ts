import type { Meta, StoryObj } from '@storybook/angular';
import { LeaveUpdateComponent } from '../../../app/common-ui/feature-components/leave-update/leave-update.component';

const meta: Meta<LeaveUpdateComponent> = {
  title: 'Feature Components/LeaveUpdate',
  component: LeaveUpdateComponent,
  // tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<LeaveUpdateComponent>;

export const LeaveUpdate: Story = {};