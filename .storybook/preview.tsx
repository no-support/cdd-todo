import { BrowserRouter } from 'react-router-dom';
import type { Preview } from '@storybook/react';
import { ToDoListContextProvider } from '../src/contexts/ToDoList';

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
      <ToDoListContextProvider>
      <BrowserRouter>
        <Story />
        </BrowserRouter>
      </ToDoListContextProvider>
    ),
  ],
};

export default preview;
