import Head from 'next/head';
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/globals';
import { theme } from '../styles/theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}