import React from 'react';

export const tailwind = (el, tailwind) =>
  ({ children = [], className = '' }) => {
    return React.createElement(
      el,
      { className: [tailwind, className].filter(Boolean).join(' ') },
      ...children
    )
  }

