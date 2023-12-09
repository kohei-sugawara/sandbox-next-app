import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from '.';

const meta = {
  title: 'components/ui/Footer',
  component: Footer,
  parameters: {},
  args: {},
} satisfies Meta<typeof Footer>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    primary: true,
  },
};
