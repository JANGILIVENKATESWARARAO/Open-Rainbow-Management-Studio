import type { Meta, StoryObj } from '@storybook/angular';
import { NoticeBannerComponent } from '../../../app/common-ui/feature-components/notice-banner/notice-banner';

const meta: Meta<NoticeBannerComponent> = {
  title: 'Common-UI/NoticeBanner',
  component: NoticeBannerComponent,
  // tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    heading: {
      control: 'text',
      description: 'Heading text of the notice banner',
      defaultValue: 'Important',
    },
    content: {
      control: 'text',
      description: 'Content text of the notice banner',
      defaultValue:
        'Changes to leave policies will apply to all employees from the next calendar year. Current year balances will remain unchanged.',
    },
    headingColor: {
      control: 'color',
      description: 'Color for heading text',
      defaultValue: '#1E3A8A',
    },
    contentColor: {
      control: 'color',
      description: 'Color for content text',
      defaultValue: '#374151',
    },

  },
};

export default meta;
type Story = StoryObj<NoticeBannerComponent>;

export const NoticeBanner: Story = {
  args: {
    heading: 'Important',
    content:
      'Changes to leave policies will apply to all employees from the next calendar year. Current year balances will remain unchanged.',
    headingColor: '#1E3A8A',
    contentColor: '#374151',
  },
};
