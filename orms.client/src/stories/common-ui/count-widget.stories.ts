import type { Meta, StoryObj } from '@storybook/angular';
import { CountWidgetComponent } from '../../app/common-ui/feature-components/count-widget/count-widget.component';



const meta: Meta<CountWidgetComponent> = {
  title: 'Feature Components/Count-widget',
  component: CountWidgetComponent,
  // tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<CountWidgetComponent>;

export const countWidget: Story = {};
