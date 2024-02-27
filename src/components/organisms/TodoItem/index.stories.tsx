import type { Meta, StoryObj } from '@storybook/react';

import { ToDoItem } from '.';

const meta = {
  title: 'Organisms/ToDoItem',
  component: ToDoItem,
} satisfies Meta<typeof ToDoItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'label',
  },
};

