import type { Preview } from '@storybook/angular';
import { applicationConfig } from '@storybook/angular';
import { importProvidersFrom } from '@angular/core';
import { AppRoutingModule, routes } from '../src/app/app-routing.module';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';
import { provideRouter, RouterModule } from '@angular/router';

setCompodocJson(docJson);

export const decorators = [
  applicationConfig({
    providers: [importProvidersFrom(AppRoutingModule)],
  }),
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
function withComponentInputs(): import('@angular/router').RouterFeatures {
  throw new Error('Function not implemented.');
}
