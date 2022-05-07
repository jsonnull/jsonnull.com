export * from './Footer'
export * from './Header'
export * from './Page'
export * from './Title'
import { tailwind } from './tailwind'

export const Wrapper = tailwind('div', 'w-full max-w-[900px] inset-x-0 mx-auto px-8')

export const Heading = tailwind('h1', 'text-3xl font-semibold tracking-tight')
