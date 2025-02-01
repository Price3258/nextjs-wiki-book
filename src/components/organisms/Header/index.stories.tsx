import { Meta, StoryObj } from '@storybook/react';
import React, { useEffect } from 'react';
import Header from './index';
import { AuthContextProvider } from '@/contexts/AuthContext';
import {
  ShoppingCartContextProvider,
  useShoppingCartContext,
} from '@/contexts/ShoppingCartContext';

const meta: Meta<typeof Header> = {
  title: 'Organisms/Header',
  component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

export const NoLogin: Story = {
  render: () => <Header />,
};

export const Login: Story = {
  render: () => {
    const authUser = {
      id: 1,
      username: 'dummy',
      displayName: 'Hana Kim',
      email: 'hana.kim@example.com',
      profileImageUrl: '/images/sample/1.jpg',
      description: '',
    };

    const ChildComponent = () => {
      const { addProductToCart } = useShoppingCartContext();

      useEffect(() => {
        addProductToCart({
          id: 1,
          category: 'book',
          title: 'Product',
          description: '',
          imageUrl: '/images/sample/1.jpg',
          blurDataUrl: '',
          price: 10000,
          condition: 'used',
          owner: authUser,
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

      return <Header />;
    };

    return (
      <ShoppingCartContextProvider>
        <AuthContextProvider
          context={{ apiRootUrl: 'https://dummy' }}
          authUser={authUser}
        >
          <ChildComponent />
        </AuthContextProvider>
      </ShoppingCartContextProvider>
    );
  },
};
