import Image from 'next/image'
import type { NextPage } from 'next'
import tereshko from '../images/tereshko.jpeg'

const Home: NextPage = () => {
  return (
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
        <p className="text-sm mt-1 text-gray-500">@xxtereshko</p>
      </div>
    </div>
  )
}

export default Home
