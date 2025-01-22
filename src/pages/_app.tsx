import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body,
  textarea {
    margin: 0;
    padding: 0;
    font-family: 'Noto Sans KR', sans-serif;
  }
  * {
    box-sizing: border-box;
  }
  a {
    cursor: pointer;
    text-decoration: none;
    transition: 250ms;
    color: #000;
  }

  ol, ul {
    list-style: none;
  }
`

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta key="viewport" name="viewport" content="width=device-width, initial-scale=1.0 shrink-to-fit=no maximum-scale=5" />
        <meta key="charSet" name="charSet" charSet="utf-8" />
        <meta property="og:locale" content="ko-KR" />
        <meta property="og:type" content="website" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;