import { Meta, StoryObj } from '@storybook/react';
import UserProfile from './index';

const meta: Meta<typeof UserProfile> = {
  title: 'Organisms/UserProfile',
  component: UserProfile,
  argTypes: {
    variant: {
      options: ['normal', 'small'],
      control: { type: 'radio' },
      defaultValue: 'normal',
      description: '변형(표지 스타일)',
      table: {
        type: { summary: 'normal | small' },
        defaultValue: { summary: 'normal' },
      },
    },
    username: {
      control: { type: 'text' },
      description: '사용자명',
      table: {
        type: { summary: 'string' },
      },
    },
    profileImageUrl: {
      control: { type: 'text' },
      description: '사용자 이미지 URL',
      table: {
        type: { summary: 'string' },
      },
    },
    numberOfProducts: {
      control: { type: 'number' },
      description: '사용자 소유한 상품 수',
      table: {
        type: { summary: 'number' },
      },
    },
    description: {
      control: { type: 'text' },
      description: '사용자 설명',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof UserProfile>;

export const Small: Story = {
  args: {
    variant: 'small',
    username: '테스트 사용자',
    profileImageUrl: '/images/sample/1.jpg',
    numberOfProducts: 2000,
    description: '샘플 텍스트',
  },
};

export const Normal: Story = {
  args: {
    variant: 'normal',
    username: '테스트 사용자',
    profileImageUrl: '/images/sample/1.jpg',
    numberOfProducts: 2000,
    description: '샘플 텍스트',
  },
};
