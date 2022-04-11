import {
  Fragment,
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react'
import { zinc } from 'tailwindcss/colors'
import { Listbox } from '@headlessui/react'
import { Sun, Monitor, Moon } from 'react-feather'
import { usePopper } from 'react-popper'
import clsx from 'clsx'

const themes = [
  ['light', Sun, 'Light'],
  ['dark', Moon, 'Dark'],
  ['system', Monitor, 'System'],
]

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

const applyTheme = (theme) => {
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

const useTheme = () => {
  const initialTheme =
    typeof window !== 'undefined' && 'theme' in localStorage
      ? localStorage.theme
      : 'system'

  const [theme, setThemeState] = useState(initialTheme)

  const setTheme = useCallback(
    (theme) => {
      setThemeState(theme)
      localStorage.theme = theme
      applyTheme(theme)
    },
    [setThemeState]
  )

  useIsomorphicLayoutEffect(() => {
    applyTheme(initialTheme)
  }, [])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    mediaQuery.addEventListener('change', applyTheme)

    return () => {
      mediaQuery.removeEventListener('change', applyTheme)
    }
  }, [])

  return [theme, setTheme]
}

export const Theme = () => {
  const [theme, setTheme] = useTheme()
  const [referenceElement, setReferenceElement] = useState(null)
  const [popperElement, setPopperElement] = useState(null)
  const { styles, attributes } = usePopper(referenceElement, popperElement)

  return (
    <Listbox value={theme} onChange={setTheme}>
      <Listbox.Button ref={setReferenceElement}>
        <Sun className="block" width={18} height={18} className="dark:hidden" />
        <Moon
          className="block"
          width={18}
          height={18}
          className="hidden dark:block"
        />
      </Listbox.Button>
      <Listbox.Options
        ref={setPopperElement}
        className="rounded bg-black mb-3 overflow-hidden"
        style={styles.popper}
        {...attributes.popper}
      >
        {themes.map(([theme, Icon, display]) => {
          return (
            <Listbox.Option value={theme} key={theme} as={Fragment}>
              {({ selected }) => {
                return (
                  <li
                    className={clsx(
                      'flex gap-2 py-2 px-4 items-center cursor-pointer hover:bg-zinc-900/50',
                      selected && 'text-sky'
                    )}
                  >
                    <Icon className="block" width={18} height={18} /> {display}
                  </li>
                )
              }}
            </Listbox.Option>
          )
        })}
      </Listbox.Options>
    </Listbox>
  )
}
