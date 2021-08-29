import "../styles/globals.css";

import { AppProps, NextWebVitalsMetric } from "next/app";
import { useEffect, FC } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/analytics";
import NextNProgress from "nextjs-progressbar";
import Head from "next/head";

const Noop: FC = ({ children }) => <>{children}</>;

export default function NextApp({ pageProps, Component }: AppProps) {
  const LayoutNoop = (Component as any).LayoutNoop || Noop;
  // remove chrome-bug.css loading class on FCP
  useEffect(() => {
    document.body.classList?.remove("loading");
  }, []);

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>tereshko.net</title>
        <link rel="icon" href="images/favicon.ico" />
      </Head>

      <LayoutNoop pageProps={pageProps}>
        <NextNProgress
          color="#4B5563"
          height={2}
          showOnShallow={true}
          options={{ showSpinner: false }}
        />
        <Component {...pageProps} />
      </LayoutNoop>
    </>
  );
}

export function reportWebVitals(metric: NextWebVitalsMetric): void {
  switch (metric.name) {
    case "FCP":
      console.log("FCP: ", metric);
      break;
    case "LCP":
      console.log("LCP: ", metric);
      break;
    case "CLS":
      console.log("CLS: ", metric);
      break;
    case "FID":
      console.log("FID: ", metric);
      break;
    case "TTFB":
      console.log("TTFB: ", metric);
      break;
    case "Next.js-hydration":
      console.log("Next.js-hydration: ", metric);
      break;
    case "Next.js-route-change-to-render":
      console.log("Next.js-route-change-to-render: ", metric);
      break;
    case "Next.js-render":
      console.log("Next.js-render: ", metric);
      break;
    default:
      break;
  }
}
