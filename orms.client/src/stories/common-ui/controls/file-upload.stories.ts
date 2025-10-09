import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { FileUploadComponent } from '../../../app/common-ui/controls/file-upload/file-upload.component';


const meta: Meta<FileUploadComponent> = {
  title: 'Common-UI/FileUpload',
  component: FileUploadComponent,
  // tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<FileUploadComponent>;

export const FileUpload: Story = {};
