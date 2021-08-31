import '../styles/globals.css'
import { useEffect } from 'react'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import * as gtag from '../utils/gtag'
import Head from 'next/head'

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
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
