import Link from 'next/link'
import { zinc } from 'tailwindcss/colors'
import { GitHub, Twitter } from 'react-feather'
import clsx from 'clsx'

const Separator = ({ className }) => {
  return (
    <div className={clsx(className, 'px-3 sm:px-6')}>
      <div className="border-l w-0 border-solid border-zinc-500">&nbsp;</div>
    </div>
  )
}

export const Header = () => {
  return (
    <div className="fixed bottom-2 sm:bottom-8 inset-x-2 sm:inset-x-8 flex pointer-events-none">
      <nav className="w-full sm:w-auto sm:mx-auto pl-4 pr-2 sm:px-6 sm:pr-4 py-4 backdrop-blur flex items-center text-white bg-black/80 rounded-md pointer-events-auto">
        <Link href="/">
          <a className="hover:underline decoration-zinc-400">
            <span className="font-bold">jsonnull</span>
          </a>
        </Link>
        <Separator />
        <ul className="flex gap-3 sm:gap-6">
          {[
            ['/projects/', 'projects'],
            // ['/blog/', 'blog'],
            ['/about/', 'about'],
          ].map(([url, title]) => {
            return (
              <li key={url}>
                <Link href={url}>
                  <a className="hover:underline decoration-zinc-400">{title}</a>
                </Link>
              </li>
            )
          })}
        </ul>
        <Separator className="pr-1 sm:pr-4 hidden sm:block" />
        <ul className="flex gap-1 sm:gap-2 ml-auto leading-none items-center">
          {[
            [GitHub, 'https://github.com/jsonnull'],
            [Twitter, 'https://twitter.com/jsonnull'],
          ].map(([Icon, href]) => {
            return (
              <a
                href={href}
                key={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-zinc-600 p-2 rounded-full"
              >
                <Icon width={18} height={18} color={zinc['400']} />
              </a>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
