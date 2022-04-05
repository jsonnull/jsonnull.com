import React from 'react'
export * from './Footer'
export * from './Header'
export * from './Page'

const tailwind =
  (el, tailwind) =>
  ({ children = [], className = '' }) => {
    return React.createElement(
      el,
      { className: [tailwind, className].filter(Boolean).join(' ') },
      ...children
    )
  }

export const Wrapper = tailwind('div', 'inset-x-0 p-8')
export const Heading = tailwind('h1', 'font-display text-3xl')
