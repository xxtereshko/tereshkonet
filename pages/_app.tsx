import '../styles/globals.css';

import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import * as gtag from '../utils/gtag';

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta name="theme-color" content="#fff" />
        <meta
          name="theme-color"
          content="#18181b"
          media="(prefers-color-scheme: dark)"
        />

        <link rel="icon" href="/images/favicon.svg" />
        <link rel="icon shortcut" href="/favicon.ico" />

        <meta property="og:title" content="tereshko.net 🦄" />
        <meta property="og:description" content="Максим Дмитриевич Терешко" />
        <meta property="og:image" content="/images/og-image.jpg" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default App
