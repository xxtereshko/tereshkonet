import { FC, ReactElement } from 'react';

type ChildProps = {
  title: string
  link: string
  href: string
}

const Social: FC<ChildProps> = ({ title, link, href }): ReactElement => {
  return (
    <>
      <p>
        {title + ' '}
        <a href={href} className="text-blue-600 dark:text-blue-400">
          {link}
        </a>
      </p>
    </>
  )
}

export default Social
