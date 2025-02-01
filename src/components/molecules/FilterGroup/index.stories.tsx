import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import FilterGroup from './index';

const meta: Meta<typeof FilterGroup> = {
  title: 'Molecules/FilterGroup',
  component: FilterGroup,
  argTypes: {
    title: {
      control: { type: 'text' },
      description: '제목',
      table: { type: { summary: 'string' } },
    },
    items: {
      control: { type: 'object' }, // 배열이지만 객체 배열 형태로 설정
      description: '필터 옵션 목록',
      table: { type: { summary: '{ label: string; name: string }[]' } },
    },
    onChange: {
      action: 'changed', // Storybook의 액션으로 감지
      description: '선택한 값이 변경될 때 실행되는 핸들러',
      table: { type: { summary: '(value: string[]) => void' } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FilterGroup>;

const Template = (args: any) => {
  const [value, setValue] = useState<string[]>([]);

  const handleChange = (selectedValues: string[]) => {
    setValue(selectedValues);
    args.onChange?.(selectedValues);
  };

  return <FilterGroup {...args} value={value} onChange={handleChange} />;
};

export const Standard: Story = {
  args: {
    title: 'All Categories',
    items: [
      { label: 'Clothes', name: 'clothes' },
      { label: 'Books', name: 'books' },
      { label: 'Shoes', name: 'shoes' },
    ],
  },
  render: Template,
};
