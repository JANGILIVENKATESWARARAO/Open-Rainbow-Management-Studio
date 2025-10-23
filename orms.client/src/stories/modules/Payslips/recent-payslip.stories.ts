import type { Meta, StoryObj } from '@storybook/angular';
import { RecentPayslipsComponent } from '../../../app/modules/Payslips/recent-payslips/recent-payslips.component';


const meta: Meta<RecentPayslipsComponent> = {
  title: 'Modules/Payslips/RecentPayslips',
  component: RecentPayslipsComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<RecentPayslipsComponent>;

export const RecentPayslips: Story = {};