import { Meta, StoryObj } from '@storybook/react';
import ShapeImage from './index';

const meta: Meta<typeof ShapeImage> = {
  title: 'Atoms/ShapeImage',
  component: ShapeImage,
  argTypes: {
    shape: {
      options: ['circle', 'square'],
      control: { type: 'radio' },
      defaultValue: 'square',
      description: '이미지 형태',
      table: {
        type: { summary: 'circle | square' },
        defaultValue: { summary: 'square' },
      },
    },
    src: {
      control: { type: 'text' },
      description: '이미지 URL',
      table: {
        type: { summary: 'string' },
      },
    },
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
      defaultValue: 320,
      description: '세로폭',
      table: {
        type: { summary: 'number' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ShapeImage>;

export const Circle: Story = {
  args: { src: '/images/sample/1.jpg', shape: 'circle' },
};

export const Square: Story = {
  args: { src: '/images/sample/1.jpg', shape: 'square' },
};
