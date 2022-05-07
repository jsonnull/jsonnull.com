import clsx from 'clsx'

export const Project = ({
  name,
  description,
  progress = 100,
  milestone,
  className,
  retired,
}) => {
  return (
    <div className={clsx(className, 'flex flex-col', retired && 'text-dimmed')}>
      <div className="text-xl font-semibold pb-4 rounded-t">{name}</div>
      <div className="pb-6 text-sm">{description}</div>
      <div
        className={clsx(
          'flex mt-auto',
          'border border-solid border-zinc-500',
          'pattern-bg-transparent pattern-fg-zinc-500 pattern-lines'
        )}
      >
        <div
          className={clsx(
            'flex items-center h-6 pl-2 pr-1 m-[-1px] min-w-[100px]',
            'text-sm text-zinc-100 dark:text-black dark:font-bold',
            'bg-zinc-900 dark:bg-zinc-200',
            retired && 'bg-zinc-700 dark:bg-zinc-400'
          )}
          style={{ width: `calc(${progress}% + 2px)` }}
        >
          {milestone && <div>{milestone}</div>}
          {progress !== 100 && <div className="ml-auto">{progress}%</div>}
        </div>
      </div>
    </div>
  )
}
