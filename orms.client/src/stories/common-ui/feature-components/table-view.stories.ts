import type { Meta, StoryObj } from '@storybook/angular';
import { TabelViewComponent } from '../../../app/common-ui/feature-components/tabel-view/tabel-view.component';

const meta: Meta<TabelViewComponent> = {
  title: 'Common-UI/Feature Components/TabelViewComponent',
  component: TabelViewComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Tooltip = StoryObj<TabelViewComponent>;

export const dot: TabelViewComponent = {};