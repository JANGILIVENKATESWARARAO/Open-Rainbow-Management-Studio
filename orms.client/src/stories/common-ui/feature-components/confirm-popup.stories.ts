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
    changeIcon: '',
    data: [
      
      {
        text: 'No',
        bgColor: '#e6e1e1',
        color: '#061f4b',
        hoverBGColor: '#1c1c1a',
        hoverColor: '#fff8f8',
        borderColor: '#e81e1e',
        showBorder: false
      },
      {
        text: 'Yes',
        bgColor: '#f30b0b',
        color: '#e8e0e0',
        hoverBGColor: '#fff',
        hoverColor: '#ec1717',
        borderColor: '#e81e1e',
        showBorder: true
      },
      {
        text: 'Cancel',
        bgColor: '#cccccc',
        color: '#000',
        hoverBGColor: '#b3b3b3',
        hoverColor: '#000',
        borderColor: '#888',
        showBorder: false
      },
    ]
}

}

export default meta;
type Confirmpopup = StoryObj<ConfirmPopupComponent>;

export const ConfirmPopup: Confirmpopup = {};
