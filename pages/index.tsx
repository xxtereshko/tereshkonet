import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>tereshko</title>
        <link rel="icon" href="images/favicon.ico" />
      </Head>

      <Link href="/b">
        <a>{">"}</a>
      </Link>

      <p className="p-6 md:p-7 m-4 md:m-8 md:text-lg bg-white rounded-2xl md:text-center">
        tereshko.net 🥺
      </p>
    </>
  );
}
