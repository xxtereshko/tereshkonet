import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="px-4 py-8 space-y-4">
      <p className="pb-3">Максим Дмитриевич Терешкó 🦄</p>
      <p>
        <a href="tel:+79097767696" className="text-blue-600">
          +7 909 776 76 96
        </a>
      </p>
      <p>4274 3200 3066 1923</p>
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

      <p>Где только модно — @xxtereshko</p>

      <p className="pt-3">Спасибо за внимание.</p>
    </div>
  )
}

export default Home
