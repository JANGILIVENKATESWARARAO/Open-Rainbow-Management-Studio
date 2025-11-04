import type { Meta, StoryObj } from '@storybook/angular';
import { RecentPayslipsComponent } from '../../../app/modules/payroll/recent-payslips/recent-payslips.component';
import { MyReporteesComponent } from '../../../app/modules/reportees/my-reportees/my-reportees.component';

const meta: Meta<MyReporteesComponent> = {
  title: 'Modules/Reportees/MyReportees',
  component: MyReporteesComponent,
  // tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<MyReporteesComponent>;

export const MyReportees: Story = {};
