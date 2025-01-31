import { Meta, StoryObj } from '@storybook/react';
import RectLoader from './index';

const meta: Meta<typeof RectLoader> = {
  title: 'Atoms/RectLoader',
  component: RectLoader,
  argTypes: {
    width: {
      control: { type: 'number' },
      defaultValue: 320,
      description: '가로폭',
      table: {
        type: { summary: 'number' },
      },
    },
    height: {
      control: { type: 'number' },
      description: '세로폭',
      defaultValue: 320,
      table: {
        type: { summary: 'number' },
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof RectLoader>;

export const Normal: Story = {
  args: {
    width: 320,
    height: 320,
  },
};
