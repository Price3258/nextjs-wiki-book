import { Meta, StoryObj } from '@storybook/react';
import Dropdown from './index';

const meta: Meta<typeof Dropdown> = {
  title: 'Molecules/Dropdown',
  component: Dropdown,
  argTypes: {
    options: {
      control: { type: 'object' },
      description: '드롭다운 선택지',
      table: {
        type: { summary: 'array' },
      },
    },
    hasError: {
      control: { type: 'boolean' },
      description: '에러 상태 플래그',
      table: {
        type: { summary: 'boolean' },
      },
    },
    placeholder: {
      control: { type: 'text' },
      description: '플레이스홀더',
      table: {
        type: { summary: 'string' },
      },
    },
    value: {
      control: { type: 'text' },
      description: '선택된 값',
      table: {
        type: { summary: 'string' },
      },
    },
    onChange: {
      action: 'changed', // 스토리북 액션 패널에서 확인 가능
      description: '값이 변경될 때 실행되는 이벤트 핸들러',
      table: {
        type: { summary: '(value: string) => void' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Normal: Story = {
  args: {
    options: [
      { value: '', label: '-' },
      { value: 'one', label: 'One' },
      { value: 'two', label: 'Two' },
      { value: 'three', label: 'Three' },
    ],
    placeholder: 'Please select an item',
  },
};

export const InitialValue: Story = {
  args: {
    options: [
      { value: '', label: '-' },
      { value: 'one', label: 'One' },
      { value: 'two', label: 'Two' },
      { value: 'three', label: 'Three' },
    ],
    placeholder: 'Please select an item',
    value: 'one',
  },
};

export const Many: Story = {
  args: {
    options: Array.from({ length: 20 }, (_, k) => ({
      value: k.toString(),
      label: `Option ${k}`,
    })),
    placeholder: 'Please select an item',
  },
};
