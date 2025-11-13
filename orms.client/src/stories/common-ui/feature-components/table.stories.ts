import type { Meta, StoryObj } from '@storybook/angular';
import { TableComponent } from '../../../app/common-ui/feature-components/table/table.component';



const meta: Meta<TableComponent> = {
  title: 'Feature Components/TableComponent',
  component: TableComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Tooltip = StoryObj<TableComponent>;

export const dot = new TableComponent();