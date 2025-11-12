import type { Meta, StoryObj } from '@storybook/angular';

import { ConfirmPopupComponent } from '../../../app/common-ui/feature-components/confirm-popup/confirm-popup.component';

const meta: Meta<ConfirmPopupComponent> = {
  title: 'Feature Components/ConfirmPopup',
  component: ConfirmPopupComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    label: 'You are about to permanently delete the employee: <span style="color:red; font-weight:bold;">Sohan Kumar</span>. This action cannot be undone.',
    borderColor: 'red',
    changeIcon: ''

  },
};

export default meta;
type Confirmpopup = StoryObj<ConfirmPopupComponent>;

export const ConfirmPopup: Confirmpopup = {};
