import React from 'react'
import Link from 'next/link'

const useIsPastScrolly = scrollY => {
  const [isPast, setIsPast] = React.useState(false)

  const isPastRef = React.useRef()
  isPastRef.current = isPast

  React.useEffect(() => {
    const handleScroll = () => {
      const isNowPast = window.scrollY > scrollY
      if (isPastRef.current !== isNowPast) {
        setIsPast(isNowPast)
      }
    }

    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [isPastRef])

  return isPast
}

export const Header = () => {
  const isOpaque = useIsPastScrolly(30)

  return (
    <nav className="fixed flex-1 inset-x-0 p-8">
      <div
        className={`transition duration-200 bg-cloud-900 absolute inset-0 ${
          isOpaque ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <div className="relative flex absolute inset-0">
        <Link href="/">
          <a>jsonnull</a>
        </Link>
        <ul className="ml-auto flex">
          {[
            ['/blog/', 'blog'],
            ['/about/', 'about']
          ].map(([url, title]) => {
            return (
              <li className="ml-8" key={url}>
                <Link href={url}>
                  <a>{title}</a>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
