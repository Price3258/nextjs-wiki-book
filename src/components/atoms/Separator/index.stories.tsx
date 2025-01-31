import { Meta } from '@storybook/react';
import Separator from './index';

const meta: Meta = {
  title: 'Atoms/Separator',
  component: Separator,
};

export default meta;

export const Standard = () => (
  <>
    <Separator>or</Separator>
    <Separator>and</Separator>
    <Separator />
  </>
);
