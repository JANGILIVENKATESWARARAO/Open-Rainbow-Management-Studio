import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { DocumentsUploadComponent } from '../../../app/modules/add-employee/documents-upload/documents-upload.component';

const meta: Meta<DocumentsUploadComponent> = {
  title: 'Modules/AddEmployee/DocumentsUpload',
  component: DocumentsUploadComponent,
  // tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<DocumentsUploadComponent>;

export const DocumentsUpload: Story = {};
