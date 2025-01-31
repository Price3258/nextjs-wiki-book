import { Meta, StoryObj } from '@storybook/react';
import BadgeIconButton from './index';
import {
  PersonIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@/components/atoms/IconButton';

const meta: Meta<typeof BadgeIconButton> = {
  title: 'Molecules/BadgeIconButton',
  component: BadgeIconButton,
  argTypes: {
    icon: {
      control: false, // 객체형 props는 제어하지 않는 것이 일반적
      description: '아이콘',
      table: {
        type: { summary: 'ReactElement' },
      },
    },
    badgeContent: {
      control: { type: 'number' },
      description: '배지 카운터',
      table: {
        type: { summary: 'number' },
      },
    },
    badgeBackgroundColor: {
      control: { type: 'color' },
      description: '배지 배경 색상',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof BadgeIconButton>;

export const SearchBadgeIcon: Story = {
  args: {
    icon: <SearchIcon size={24} />,
    badgeContent: 1,
    badgeBackgroundColor: '#ed9f28',
  },
};

export const PersonBadgeIcon: Story = {
  args: {
    icon: <PersonIcon size={24} />,
    badgeContent: 1,
    badgeBackgroundColor: '#d4001a',
  },
};

export const ShoppingCartBadgeIcon: Story = {
  args: {
    icon: <ShoppingCartIcon size={24} />,
    badgeContent: 1,
    badgeBackgroundColor: '#32bf00',
  },
};
