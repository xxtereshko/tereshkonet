import Document, { Html, Head, Main, NextScript } from 'next/document'
import AnalyticsScripts from '../utils/AnalyticsScripts'
import PWA from '../utils/PWA'
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ru">
        <Head>
          {process.env.NODE_ENV === 'production' && <AnalyticsScripts />}
          <PWA />
        </Head>
        <body className="bg-white text-black dark:bg-gray-900 dark:text-white">
          <a className="skip-link absolute -top-28" href="#maincontent">
            Skip to main
          </a>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
