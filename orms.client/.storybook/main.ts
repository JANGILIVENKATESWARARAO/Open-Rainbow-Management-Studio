import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  "addons": [
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    // "@storybook/addon-postcss",
  ],
  "framework": {
    "name": "@storybook/angular",
    "options": {}
  }
};
export default config;