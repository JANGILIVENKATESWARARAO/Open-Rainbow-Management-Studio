import type { Meta, StoryObj } from '@storybook/angular';
import { applicationConfig } from '@storybook/angular';
import { importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'iconify-icon';
import { IconComponent } from '../../../app/common-ui/feature-components/icon/icon.component';
import { iconRegistry } from '../../../app/common-ui/assests/icons/icon-registry';

const allIconNames = Object.keys(iconRegistry);

const meta: Meta<IconComponent> = {
  title: 'Common-UI/Feature Components/Icon',
  component: IconComponent,
  tags: ['autodocs'],

  decorators: [
    (storyFn) => {
      return storyFn();
    },
    applicationConfig({
      providers: [importProvidersFrom(CommonModule)],
    }),
  ],
  
  argTypes: {
    name: {
      name: 'Icon Name (alias)',
      description: 'The alias of the icon from `icon-registry.ts`',
      control: { type: 'select' },
      options: allIconNames,
    },
  },
};

export default meta;

type Story = StoryObj<IconComponent>;

export const Default: Story = {
  name: 'Icon Playground',
  args: {
    name: 'home',
  },
};

export const IconGallery: Story = {
  name: 'Icon Gallery (All Icons)',
  render: () => ({
    props: {
      iconNames: allIconNames,
    },
    template: `
      <p>Displaying all <strong>{{ iconNames.length }}</strong> registered icons:</p>
      <div style="display: flex; flex-wrap: wrap; gap: 1rem;">
        <div 
          *ngFor="let iconName of iconNames" 
          style="
            display: flex; 
            flex-direction: column; 
            align-items: center; 
            gap: 0.5rem; 
            padding: 1rem; 
            border: 1px solid #eee; 
            border-radius: 8px; 
            width: 100px;
            font-size: 24px;
          "
        >
          <orms-icon [name]="iconName"></orms-icon>
          <code style="font-size: 12px; background-color: #f4f4f4; padding: 2px 4px; border-radius: 4px;">
            {{ iconName }}
          </code>
        </div>
      </div>
    `,
  }),
};