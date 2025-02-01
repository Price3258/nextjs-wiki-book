import { Meta } from '@storybook/react';
import SigninForm from './index';

const meta: Meta<typeof SigninForm> = {
  title: 'Organisms/SigninForm',
  component: SigninForm,
  argTypes: {
    onSignin: {
      description: '로그인 버튼을 클릭했을 때의 이벤트 핸들러',
      table: {
        type: { summary: 'function' },
      },
    },
  },
};

export default meta;

const Template = (args: any) => <SigninForm {...args} />;
export const Form = {
  render: Template,
};
