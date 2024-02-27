import type { Meta, StoryObj } from '@storybook/react';

import { ToDoList } from '.';

const meta = {
  title: 'Templates/ToDoList',
  component: ToDoList,
} satisfies Meta<typeof ToDoList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    toDoList: [],
  },
};
export const WithToDoList: Story = {
  args: {
    toDoList: [{ id: 0, text: '할 일 1'}],
  },
};

