import type { Meta, StoryObj } from '@storybook/react';
import { Document } from '.';

const meta = {
  title: 'components/ui/Document',
  component: Document,
  parameters: {},
  args: {},
} satisfies Meta<typeof Document>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    primary: true,
  },
};
