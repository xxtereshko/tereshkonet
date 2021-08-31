import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <a className="skip-link absolute -top-28" href="#maincontent">
        Skip to main
      </a>

      <div className="px-4 py-8 space-y-3">
        <p>Максим Дмитриевич Терешкó 🦄</p>
        <p className="pb-2 text-gray-600">
          JavaScript, React и крафтовое пиво...
        </p>
        <p>
          <a href="tel:+79097767696" className="text-blue-600">
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

        <p className="pt-2">@xxtereshko там, где модно</p>
      </div>
    </>
  )
}

export default Home
