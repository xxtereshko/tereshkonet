import Head from "next/head";
import Image from "next/image";

import image from "../public/pic.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>tereshko.net</title>
      </Head>
      <p>tereshko.net</p>

      <Image
        src={image}
        alt="..."
        width="3600"
        height="4500"
        layout="responsive"
      />
    </>
  );
}
