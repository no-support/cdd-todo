import type { Meta, StoryObj } from '@storybook/react';

import { TodoItem } from '.';

const meta = {
  title: 'Organisms/TodoItem',
  component: TodoItem,
} satisfies Meta<typeof TodoItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: '리액트 공부하기',
  },
};

