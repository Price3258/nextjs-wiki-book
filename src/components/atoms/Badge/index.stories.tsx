import { Meta, StoryObj } from '@storybook/react';
import Badge from './index';

const meta: Meta<typeof Badge> = {
  title: 'Atoms/Badge',
  component: Badge,
  argTypes: {
    content: {
      control: { type: 'text' },
      description: '배지 텍스트',
      table: {
        type: { summary: 'string' },
      },
    },
    backgroundColor: {
      control: { type: 'color' },
      description: '배지 색상',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

// ✅ Orange Badge
export const Orange: Story = {
  args: { content: '1', backgroundColor: '#ed9f28' },
};

// ✅ Green Badge
export const Green: Story = {
  args: { content: '2', backgroundColor: '#32bf00' },
};

// ✅ Red Badge
export const Red: Story = {
  args: { content: '10', backgroundColor: '#d4001a' },
};
