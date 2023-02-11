import * as React from 'react';

export const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex text-3xl font-mono tracking-tight">
      <h1 className="">{children}</h1>
      <span className="text-zinc-400 dark:text-zinc-700">\0</span>
    </div>
  )
}
