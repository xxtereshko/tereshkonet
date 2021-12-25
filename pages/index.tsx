import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Максим Терешко</title>
      </Head>

      <header className="p-8 text-2xl flex justify-between">
        <p>Максим Терешкó</p>
        {/* ← */}
        <span>
          {/* ✨{' '} */}
          <a href="//t.me/xxtereshko" className="border-b-2 border-gray-500">
            @xxtereshko
          </a>
        </span>
      </header>
    </>
  )
}

export default Home
