import { Meta, StoryObj } from '@storybook/react';
import Text from './index';

const meta: Meta<typeof Text> = {
  title: 'Atoms/Text',
  component: Text,
  argTypes: {
    variant: {
      options: [
        'extraSmall',
        'small',
        'medium',
        'mediumLarge',
        'large',
        'extraLarge',
      ],
      control: { type: 'select' },
      defaultValue: 'medium',
      // docs에 표시할 내용을 설정
      description: '텍스트 변형',
      table: {
        type: {
          summary: 'extraSmall , small, medium, mediumLarge, large, extraLarge',
        },
        defaultValue: { summary: 'medium' },
      },
    },
    children: {
      control: { type: 'text' },
      description: '텍스트',
      table: {
        type: { summary: 'string' },
      },
    },
    fontWeight: {
      control: { type: 'text' },
      description: '폰트 굵기',
      table: {
        type: { summary: 'string' },
      },
    },
    lineHeight: {
      control: { type: 'text' },
      description: '행 높이',
      table: {
        type: { summary: 'string' },
      },
    },
    color: {
      control: { type: 'color' },
      description: '텍스트 색상',
      table: {
        type: { summary: 'string' },
      },
    },
    backgroundColor: {
      control: { type: 'color' },
      description: '배경 색상',
      table: {
        type: { summary: 'string' },
      },
    },
    margin: {
      control: { type: 'number' },
      description: '마진',
      table: {
        type: { summary: 'number' },
      },
    },
    marginTop: {
      control: { type: 'number' },
      description: '위쪽 마진',
      table: {
        type: { summary: 'number' },
      },
    },
    marginRight: {
      control: { type: 'number' },
      description: '오른쪽 마진',
      table: {
        type: { summary: 'number' },
      },
    },
    marginBottom: {
      control: { type: 'number' },
      description: '아래쪽 마진',
      table: {
        type: { summary: 'number' },
      },
    },
    marginLeft: {
      control: { type: 'number' },
      description: '왼쪽 마진',
      table: {
        type: { summary: 'number' },
      },
    },
    padding: {
      control: { type: 'number' },
      description: '패딩',
      table: {
        type: { summary: 'number' },
      },
    },
    paddingTop: {
      control: { type: 'number' },
      description: '위쪽 패딩',
      table: {
        type: { summary: 'number' },
      },
    },
    paddingRight: {
      control: { type: 'number' },
      description: '오른쪽 패딩',
      table: {
        type: { summary: 'number' },
      },
    },
    paddingBottom: {
      control: { type: 'number' },
      description: '아래쪽 패딩',
      table: {
        type: { summary: 'number' },
      },
    },
    paddingLeft: {
      control: { type: 'number' },
      description: '왼쪽 패딩',
      table: {
        type: { summary: 'number' },
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Text>;

const longText = `It is a long established fact that a reader will be
distracted by the readable content of a page when looking at its layout.
The point of using Lorem Ipsum is that it has a more - or - less normal
distribution of letters, as opposed to using Content here, content here,
making it look like readable English.Many desktop publishing packages and
web page editors now use Lorem Ipsum as their default model text, and a
search for lorem ipsum will uncover many web sites still in their infancy.
Various versions have evolved over the years, sometimes by accident,
sometimes on purpose(injected humour and the like).`;

export const ExtraSmall: Story = {
  args: { variant: 'extraSmall', children: longText },
};

export const Small: Story = {
  args: { variant: 'small', children: longText },
};

export const Medium: Story = {
  args: { variant: 'medium', children: longText },
};

export const MediumLarge: Story = {
  args: { variant: 'mediumLarge', children: longText },
};

export const Large: Story = {
  args: { variant: 'large', children: longText },
};

export const ExtraLarge: Story = {
  args: { variant: 'extraLarge', children: longText },
};
