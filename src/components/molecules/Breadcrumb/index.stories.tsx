import { Meta } from '@storybook/react';
import Breadcrumb from './index';
import BreadcrumbItem from '@/components/atoms/BreadcrumbItem';

// export default { title: 'Molecules/Breadcrumb' } as ComponentMeta<
//   typeof Breadcrumb
// >

const meta: Meta<typeof Breadcrumb> = {
  title: 'Molecules/Breadcrumb',
  component: Breadcrumb,
};

export default meta;

export const Standard = () => (
  <Breadcrumb>
    <BreadcrumbItem>
      <a href="#">Top</a>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <a href="#">Clothes</a>
    </BreadcrumbItem>
    <BreadcrumbItem>Item</BreadcrumbItem>
  </Breadcrumb>
);
