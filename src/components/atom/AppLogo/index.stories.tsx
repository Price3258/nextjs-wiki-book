import { Meta } from '@storybook/react';
import AppLogo from './index';

const meta: Meta = {
  title: 'Atoms/AppLogo',
  component: AppLogo,
};
export default meta;

export const Logo = () => <AppLogo />;
