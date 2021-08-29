import "../styles/globals.css";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>tereshko.net 🥺</title>
        <link rel="icon" href="images/favicon.ico" />
      </Head>

      <NextNProgress
        color="#4B5563"
        height={2}
        showOnShallow={true}
        options={{ showSpinner: false }}
      />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
