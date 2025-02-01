import { Meta, StoryObj } from '@storybook/react';
import ProductForm from './index';

const meta: Meta<typeof ProductForm> = {
  title: 'Organisms/ProductForm',
  component: ProductForm,
  argTypes: {
    onProductSave: {
      description: '등록 버튼을 클릭했을 때의 이벤트 핸들러',
      table: { type: { summary: 'function' } },
    },
  },
};
export default meta;

type Story = StoryObj<typeof ProductForm>;

export const Form: Story = {};
