import { Meta, StoryObj } from '@storybook/react';
import CheckBox from './index';

const meta: Meta<typeof CheckBox> = {
  title: 'Molecules/CheckBox',
  component: CheckBox,
  argTypes: {
    label: {
      control: { type: 'text' },
      description: '표시 라벨',
      table: {
        type: { summary: 'string' },
      },
    },
    checked: {
      control: { type: 'boolean' },
      description: '체크 여부',
      table: {
        type: { summary: 'boolean' },
      },
    },
    onChange: {
      action: 'changed', // 스토리북 액션 로그에서 확인 가능
      description: '값이 변화했을 때의 이벤트 핸들러',
      table: {
        type: {
          summary: '(event: React.ChangeEvent<HTMLInputElement>) => void',
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CheckBox>;

export const WithLabel: Story = {
  args: {
    label: 'Label',
    checked: false,
  },
};
