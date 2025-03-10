import { Meta } from '@storybook/react';
import Footer from './';

const meta: Meta<typeof Footer> = {
  title: 'Organisms/Footer',
  component: Footer,
};

export default meta;

export const Standard = () => <Footer />;
