import Head from 'next/head';
import { ThemeProvider } from 'styled-components'
import { ChallengProvider } from '../contexts/ChallengeContexts';
import { GlobalStyle } from '../styles/globals';
import { theme } from '../styles/theme';

export default function App({ Component, pageProps }) {
  return (
    <ChallengProvider>
      <Head>
        <link rel="shortcut icon" href="favicon.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ChallengProvider>
  )
}