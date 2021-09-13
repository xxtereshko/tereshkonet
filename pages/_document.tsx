import Document, { Html, Head, Main, NextScript } from 'next/document'
import AnalyticsScripts from '../utils/AnalyticsScripts'
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ru">
        <Head>
          {process.env.NODE_ENV === 'production' && <AnalyticsScripts />}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
