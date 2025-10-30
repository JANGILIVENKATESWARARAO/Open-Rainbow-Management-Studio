import type { Meta, StoryObj } from '@storybook/angular';
import { SalaryStructureComponent } from '../../../app/modules/payroll/salary-structure/salary-structure.component';

const meta: Meta<SalaryStructureComponent> = {
  title: 'Modules/Payroll/RecentPayslips',
  component: SalaryStructureComponent,
  // tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<SalaryStructureComponent>;

export const SalaryStructure: Story = {};