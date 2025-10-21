import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { ContactInfoComponent } from '../../../app/modules/add-employee/contact-info/contact-info.component';

const meta: Meta<ContactInfoComponent> = {
  title: 'Modules/AddEmployee/ContactInfo',
  component: ContactInfoComponent,
   tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<ContactInfoComponent>;

export const ContactInfo: Story = {};