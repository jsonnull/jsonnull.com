import { useState, useEffect, useLayoutEffect } from 'react'
import { zinc } from 'tailwindcss/colors'
import { Listbox } from '@headlessui/react'
import { Sun, Monitor, Moon } from 'react-feather'
import { usePopper } from 'react-popper'

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

const changeTheme = () => {
  const theme = localStorage.theme || 'system'

  if (
    theme === 'dark' ||
    (theme === 'system' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

const themes = [
  ['light', Sun, 'Light'],
  ['dark', Moon, 'Dark'],
  ['system', Monitor, 'System'],
]

export const Theme = () => {
  const [theme, setTheme] = useState('system')
  const [referenceElement, setReferenceElement] = useState(null)
  const [popperElement, setPopperElement] = useState(null)
  const { styles, attributes } = usePopper(referenceElement, popperElement)

  // Ensure localStorage theme is populated
  useIsomorphicLayoutEffect(() => {
    if (!'theme' in localStorage) {
      localStorage.theme = 'system'
    }
  }, [])

  // Ensure change to setting is propagated to localStorage (as a layout effect)
  useIsomorphicLayoutEffect(() => {
    if (theme !== localStorage.theme) {
      localStorage.theme = theme
    }
    changeTheme()
  }, [theme])

  // Install listeners
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const onStorageChange = () => {
      const theme = localStorage.theme
      setTheme(theme)
      changeTheme()
    }

    mediaQuery.addEventListener('change', setTheme)
    window.addEventListener('storage', onStorageChange)

    return () => {
      mediaQuery.removeEventListener('change', setTheme)
      window.removeEventListener('storage', onStorageChange)
    }
  }, [setTheme])

  return (
    <Listbox value={theme} onChange={setTheme}>
      <Listbox.Button ref={setReferenceElement}>
        <Sun
          className="block"
          width={18}
          height={18}
          color={'#ffffff'}
          className="dark:hidden"
        />
        <Moon
          className="block"
          width={18}
          height={18}
          color={'#ffffff'}
          className="hidden dark:block"
        />
      </Listbox.Button>
      <Listbox.Options
        ref={setPopperElement}
        className="bg-black/90 rounded mb-2"
        style={styles.popper}
        {...attributes.popper}
      >
        {themes.map(([theme, Icon, display]) => {
          return (
            <Listbox.Option
              value={theme}
              className="flex gap-2 py-2 px-4 items-center cursor-pointer"
            >
              <Icon
                className="block"
                width={18}
                height={18}
                color={'#ffffff'}
              />{' '}
              {display}
            </Listbox.Option>
          )
        })}
      </Listbox.Options>
    </Listbox>
  )
}
