import type { Meta, StoryObj } from '@storybook/react';

import { ToDo } from '.';

const meta = {
  title: 'Pages/ToDo',
  component: ToDo,
} satisfies Meta<typeof ToDo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // ToDo: [],
  },
};
