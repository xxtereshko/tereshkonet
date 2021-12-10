import Head from 'next/head';
import Image from 'next/image';

import qrDark from '../images/qr-dark.svg';
import tereshko from '../images/tereshko.jpeg';
import qr from '../images/vector.svg';

import type { NextPage } from 'next'
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Максим Терешко</title>
      </Head>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col items-center my-12 mx-4">
          <Image
            src={tereshko}
            width={100}
            height={100}
            className="rounded-full"
            alt={'tereshko.net'}
          />
          <p className="text-xl mt-4">Максим Терешко́</p>
          <p className="text-sm mt-1 text-gray-500 dark:text-gray-400 mb-16">
            @xxtereshko
          </p>

          <div className="block dark:hidden">
            <Image src={qr} width={150} height={150} alt={'tereshko.net'} />
          </div>

          <div className="hidden dark:block">
            <Image src={qrDark} width={150} height={150} alt={'tereshko.net'} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
