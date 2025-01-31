import { Meta, StoryObj } from '@storybook/react';
import { SearchIcon } from './';
import colors from '@/themes/colors';

const meta: Meta<typeof SearchIcon> = {
  title: 'Atoms/IconButton',
  component: SearchIcon, // 기본 컴포넌트 설정
  argTypes: {
    // color: {
    //   control: { type: 'color' },
    //   description: '아이콘 색상',
    //   table: {
    //     type: { summary: 'ThemeColors' },
    //   },
    // },
    color: {
      options: Object.keys(colors),
      control: { type: 'select' },
      description: '아이콘 색상',
      table: {
        type: { summary: 'ThemeColors' },
        defaultValue: { summary: 'primary' },
      },
    },
    backgroundColor: {
      control: { type: 'color' },
      description: '배경 색상',
      table: {
        type: { summary: 'string' },
      },
    },
    size: {
      control: { type: 'number' },
      defaultValue: 24,
      description: '아이콘 크기',
      table: {
        type: { summary: 'number' },
      },
    },
    onClick: {
      description: 'onClick 이벤트 핸들러',
      table: {
        type: { summary: 'function' },
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof SearchIcon>;

// ✅ SearchIcon 스토리
export const Search: Story = {
  args: {
    color: 'primary',
  },
};
