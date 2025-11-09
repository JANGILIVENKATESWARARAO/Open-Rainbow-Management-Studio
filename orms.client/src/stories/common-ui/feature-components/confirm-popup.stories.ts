import type { Meta, StoryObj } from '@storybook/angular';

import { ConfirmPopupComponent } from '../../../app/common-ui/feature-components/confirm-popup/confirm-popup.component';

const meta: Meta<ConfirmPopupComponent> = {
  title: 'Common-UI/Feature Components/ConfirmPopup',
  component: ConfirmPopupComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Confirmpopup = StoryObj<ConfirmPopupComponent>;

export const ConfirmPopup: Confirmpopup = {};
