import * as React from 'react';
import clsx from 'clsx'

export const Button = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <div
      className={clsx(
        'p-3 px-6 bg-zinc-900 dark:bg-zinc-200 text-white dark:text-black font-semibold dark:font-bold cursor-pointer',
        className
      )}
    >
      {children}
    </div>
  )
}
