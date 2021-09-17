import { GA_TRACKING_ID } from '../utils/gtag';

export default function AnalyticsScripts() {
  return (
    <>
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />

      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
                cookie_domain: 'tereshko.net',
                cookie_flags: 'SameSite=Lax;Secure'
              });
          `,
        }}
      />
    </>
  )
}
