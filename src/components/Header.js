import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Home, GitHub, Twitter } from 'react-feather'
import { Theme } from './Theme'
import clsx from 'clsx'

const PADDING = 8

const useNavigation = () => {
  const navRef = useRef()
  const homeRef = useRef()
  const projectsRef = useRef()
  const aboutRef = useRef()
  const router = useRouter()
  const [bounds, setBounds] = useState({ left: 10000, width: 0 })

  const path = router.pathname

  const updateBounds = useCallback(() => {
    const root = navRef.current.getBoundingClientRect()

    let navBounds

    if (path === '/') {
      navBounds = homeRef.current.getBoundingClientRect()
    } else if (path === '/projects') {
      navBounds = projectsRef.current.getBoundingClientRect()
    } else if (path === '/about') {
      navBounds = aboutRef.current.getBoundingClientRect()
    } else {
      setBounds({ left: 10000, width: 0 })
      return
    }

    const left = navBounds.x - root.x
    const width = navBounds.width

    setBounds({ left, width })
  }, [navRef, homeRef, projectsRef, aboutRef, setBounds, path])

  useEffect(() => {
    updateBounds()
  }, [navRef, homeRef, projectsRef, aboutRef, setBounds, path])

  useEffect(() => {
    window.addEventListener('resize', updateBounds)
    return () => window.removeEventListener('resize', updateBounds)
  }, [updateBounds])

  return {
    navRef,
    homeRef,
    projectsRef,
    aboutRef,
    left: bounds.left,
    width: bounds.width,
    updateNavigation: updateBounds,
  }
}

const Separator = ({ className }) => {
  return (
    <div className={clsx(className, 'px-3 sm:px-6')}>
      <div className="border-l w-0 border-solid border-zinc-500 dark:border-zinc-500">
        &nbsp;
      </div>
    </div>
  )
}

const styles = {
  text: 'dark:font-semibold text-white dark:text-black',
  homeText: 'font-semibold dark:font-bold',
  underline: 'underline-themed',
}

export const Header = () => {
  const {
    navRef,
    homeRef,
    projectsRef,
    aboutRef,
    left,
    width,
    updateNavigation,
  } = useNavigation()

  return (
    <div
      className={clsx(
        styles.text,
        'fixed bottom-0 sm:bottom-8 inset-x-0 sm:inset-x-8 flex pointer-events-none'
      )}
    >
      <nav
        className="relative w-full sm:w-auto sm:mx-auto pl-4 pr-2 sm:px-6 sm:pr-4 py-4 backdrop-blur flex items-center bg-black/80 dark:bg-white/80 sm:rounded-md pointer-events-auto"
        ref={navRef}
      >
        <div
          className="bg-black/90 dark:bg-zinc-400/90 rounded-lg h-8 absolute z-1 transition-[left,width] ease-in"
          style={{
            left: `${left - PADDING}px`,
            width: `${width + PADDING * 2}px`,
          }}
        >
          &nbsp;
        </div>
        <div className="z-1 flex items-center w-full z-10">
          <Link href="/">
            <a className={clsx(styles.underline)} ref={homeRef}>
              <span className={clsx(styles.homeText, 'hidden sm:inline')}>
                jsonnull
              </span>
              <Home
                className={clsx('block sm:hidden', styles.text)}
                width={18}
                height={18}
              />
            </a>
          </Link>
          <Separator />
          <ul className="flex gap-3 sm:gap-6">
            {[
              ['/projects/', 'projects', projectsRef],
              // ['/blog/', 'blog'],
              ['/about/', 'about', aboutRef],
            ].map(([url, title, ref]) => {
              return (
                <li key={url}>
                  <Link href={url}>
                    <a className={clsx(styles.underline)} ref={ref}>
                      {title}
                    </a>
                  </Link>
                </li>
              )
            })}
          </ul>
          <Separator className="pr-1 sm:pr-4" />
          <Theme onChange={() => updateNavigation()} />
          <Separator className="px-1 sm:px-4 hidden sm:block" />
          <ul className="flex gap-1 sm:gap-2 ml-auto leading-none items-center text-zinc-400 dark:text-zinc-600">
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
                  className="hover:bg-zinc-600 hover:text-white dark:hover:text-black dark:hover:bg-zinc-400 p-2 rounded-full"
                >
                  <Icon width={18} height={18} />
                </a>
              )
            })}
          </ul>
        </div>
      </nav>
    </div>
  )
}
