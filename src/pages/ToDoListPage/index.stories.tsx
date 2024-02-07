import type { Meta, StoryObj } from '@storybook/react';

import { ToDoListPage } from '.';
import { ToDoListContextProvider } from 'contexts/ToDoList';

const meta = {
  title: 'Pages/ToDoListPage',
  component: ToDoListPage,
  // component: args => <ToDoListContextProvider>{<ToDoListPage {...args} />}</ToDoListContextProvider>,
} satisfies Meta<typeof ToDoListPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // ToDoListPage: [],
  },
};
