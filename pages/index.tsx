import Image from 'next/image'
import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Social from '../components/Index/Social'

const Home: NextPage = () => {
  const social = [
    {
      title: 'Telegram',
      href: 'https://t.me/xxtereshko',
      link: '@xxtereshko',
    },
    {
      title: 'Instagram',
      href: 'https://instagram.com/xxtereshko',
      link: '@xxtereshko',
    },
    {
      title: 'GitHub',
      href: 'https://github.com/xxtereshko',
      link: '@xxtereshko',
    },
  ]

  return (
    <>
      <NextSeo
        title="Максим Терешко 🦄"
        description="Личный блог Максима Терешко. Объясняю словами и кодом."
      />

      <div className="px-4 py-8 space-y-3">
        <div className="flex flex-col items-start sm:flex-row pb-4 sm:items-center sm:space-x-5 space-y-6 sm:space-y-0">
          <div className="w-16">
            <Image
              src="/images/pic.jpg"
              width="64"
              height="64"
              layout="responsive"
              alt="Максим Терешко"
              className="rounded-full"
            />
          </div>
          <div className="space-y-1">
            <p>Максим Дмитриевич Терешкó 🦄</p>
            <p className="text-gray-600 dark:text-gray-400">
              Фронтенд на React и TypeScript
            </p>
          </div>
        </div>
        <p>
          <a
            href="https://instagram.com/xxtereshko"
            className="text-blue-600 dark:text-blue-400"
          >
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
        {social.map((el) => (
          <Social
            key={el.href}
            title={el.title}
            link={el.link}
            href={el.href}
          />
        ))}
        <div className="pt-5">
          <div className="w-16 hover:w-44 transition-width dark:hidden">
            <Image
              src="/images/qr.svg"
              layout="responsive"
              alt="QR Code"
              width={64}
              height={64}
            />
          </div>

          <div className="w-16 hover:w-32 transition-width hidden dark:block">
            <Image
              src="/images/qr-dark.svg"
              layout="responsive"
              alt="QR Code"
              width={64}
              height={64}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
