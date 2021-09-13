import type { NextPage } from 'next'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <>
      <a className="skip-link absolute -top-28" href="#maincontent">
        Skip to main
      </a>

      <div className="px-4 py-8 space-y-3">
        <div className="flex flex-col items-start sm:flex-row pb-4 sm:items-center sm:space-x-5 space-y-6 sm:space-y-0">
          <Image
            src="/images/pic.jpeg"
            width="64"
            height="64"
            layout="fixed"
            alt="Максим Терешко"
            className="rounded-full"
          />
          <div className="space-y-1">
            <p>Максим Дмитриевич Терешкó 🦄</p>
            <p className="text-gray-600">
              UIE, TS, React и крафтовое{' '}
              <a href="https://untappd.com/user/xxtereshko">пиво</a>...
            </p>
          </div>
        </div>
        <p>
          <a href="tel:+79097767696" className="text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-400 inline-block -mt-1 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            +7 909 776 76 96
          </a>
        </p>
        <p>
          Telegram{' '}
          <a href="https://t.me/xxtereshko" className="text-blue-600">
            @xxtereshko
          </a>
        </p>
        <p>
          Instagram{' '}
          <a href="https://instagram.com/xxtereshko" className="text-blue-600">
            @xxtereshko
          </a>
        </p>
        <p>
          GitHub{' '}
          <a href="https://github.com/xxtereshko" className="text-blue-600">
            @xxtereshko
          </a>
        </p>
      </div>
    </>
  )
}

export default Home
