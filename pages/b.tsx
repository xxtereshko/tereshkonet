import Head from "next/head";
import Link from "next/link";

export default function Blog() {
  return (
    <>
      <Head>
        <title>🦄 tereshko</title>
      </Head>

      <Link href="/">
        <a>{"<"}</a>
      </Link>

      <p className="p-6 md:p-7 m-4 md:m-8 md:text-lg bg-white rounded-2xl md:text-center">
        🦄
      </p>
    </>
  );
}
