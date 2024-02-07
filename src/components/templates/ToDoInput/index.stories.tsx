import type { Meta, StoryObj } from '@storybook/react';

import { ToDoInput } from '.';

const meta = {
  title: 'Templates/ToDoInput',
  component: ToDoInput,
} satisfies Meta<typeof ToDoInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // ToDoInput: [],
  },
};

