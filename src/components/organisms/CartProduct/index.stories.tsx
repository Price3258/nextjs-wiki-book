import { Meta, StoryObj } from '@storybook/react';
import CartProduct from './index';

const meta: Meta<typeof CartProduct> = {
  title: 'Organisms/CartProduct',
  component: CartProduct,
  argTypes: {
    id: {
      control: { type: 'number' },
      description: '상품 ID',
      table: { type: { summary: 'number' } },
    },
    title: {
      control: { type: 'text' },
      description: '상품명',
      table: { type: { summary: 'string' } },
    },
    imageUrl: {
      control: { type: 'text' },
      description: '상품 이미지 URL',
      table: { type: { summary: 'string' } },
    },
    price: {
      control: { type: 'number' },
      description: '상품 가격',
      table: { type: { summary: 'number' } },
    },
    onBuyButtonClick: {
      action: '구매 버튼 클릭됨', // 스토리북 액션 추가
      description: '구입 버튼을 클릭했을 때 실행되는 핸들러',
      table: { type: { summary: '(id: number) => void' } },
    },
    onRemoveButtonClick: {
      action: '삭제 버튼 클릭됨', // 스토리북 액션 추가
      description: '삭제 버튼을 클릭했을 때 실행되는 핸들러',
      table: { type: { summary: '(id: number) => void' } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CartProduct>;

export const NiceShoes: Story = {
  args: {
    id: 1,
    imageUrl: '/images/sample/1.jpg',
    title: '멋진 신발',
    price: 32000,
  },
};
