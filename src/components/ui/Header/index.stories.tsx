import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '.';

const meta = {
  title: 'components/ui/Header',
  component: Header,
  parameters: {},
  args: {},
} satisfies Meta<typeof Header>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    primary: true,
  },
};
