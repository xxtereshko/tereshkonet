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
        <title>tereshko.net 🦄</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="tereshko.net 🦄" />
        <meta name="theme-color" content="currentColor" />
        <link rel="icon" href="/images/favicon.svg" />
        <link rel="icon shortcut" href="/favicon.ico" />

        {/* OG */}
        <meta property="og:title" content="tereshko.net 🦄" />
        <meta property="og:description" content="Максим Дмитриевич Терешко" />
        <meta property="og:image" content="/images/og-image.jpg" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default App
