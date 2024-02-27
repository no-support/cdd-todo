import { BrowserRouter } from 'react-router-dom';
import type { Preview } from '@storybook/react';
import { TodoProvider } from '../src/contexts/ToDoList';

import React from 'react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <TodoProvider>
        <Story />
      </TodoProvider>
    ),
  ],
};

export default preview;
