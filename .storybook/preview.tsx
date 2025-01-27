import type { Preview, StoryFn } from '@storybook/react';
import React from 'react';
import * as NextImage from 'next/image';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from '../src/themes';

export const GlobalStyle = createGlobalStyle`
  html,
  body,
  textarea {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    transition: .25s;
    color: #000000;
  }
  button {
    
  }
`;

const ThemeDecorator = (Story: StoryFn, context: any) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Story />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
};

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) =>
    typeof props.src === 'string' ? (
      <OriginalNextImage {...props} unoptimized blurDataURL={props.src} />
    ) : (
      <OriginalNextImage {...props} unoptimized />
    ),
});

const preview: Preview = {
  decorators: [ThemeDecorator],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
