import clsx from 'clsx'

export type SpacerProps = | { extraWide: true } | { wide: true } | { medium: true } | { small: true }

export const Spacer = (props: SpacerProps) => {
  return (
    <div
      className={clsx(
        'extraWide' in props && 'pb-48',
        'wide' in props && 'pb-32',
        'medium' in props && 'pb-16',
        'small' in props && 'pb-8'
      )}
    />
  )
}
