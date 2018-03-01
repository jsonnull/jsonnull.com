// @flow
import { colors } from '../styles/base'
import type { Project } from '../types'

export const aleamancer = {
  title: 'Aleamancer',
  url: 'https://www.aleamancer.com',
  github: 'https://github.com/jsonnull/aleamancer',
  tags: ['Design', 'Dev', 'JavaScript'],
  color: colors.red,
  description:
    'A groundbreaking online tabletop role-playing platform, built with cutting-edge tools and tech from the React+Redux ecosystem.'
}

export const wasmrust = {
  title: 'WebAssembly Rust Utils',
  github: 'https://github.com/jsonnull/wasm-rust-utils',
  tags: ['Dev', 'Rust', 'JavaScript'],
  color: colors.gray,
  description:
    'A Rust and JavaScript utility suite for writing WebAssembly modules.'
}

export const reactroutine = {
  title: 'React Routine',
  github: 'https://github.com/jsonnull/react-routine',
  tags: ['Dev', 'JavaScript'],
  color: colors.blue,
  description: 'Write stateful React components without complex lifecycles.'
}

export const reduxrender = {
  title: 'Redux Render',
  github: 'https://github.com/jsonnull/redux-render',
  tags: ['Dev', 'JavaScript'],
  color: colors.blue,
  description:
    'Ergonomic React bindings for Redux using the render prop pattern.'
}

export const jsonnull = {
  title: 'jsonnull.com',
  github: 'https://github.com/jsonnull/jsonnull.com',
  tags: ['Design', 'Dev', 'JavaScript'],
  color: colors.orange,
  description:
    'Content and build system for this site, a statically rendered React application.'
}

export const valor = {
  title: 'Valor',
  github: 'https://github.com/jsonnull/valor',
  tags: ['Dev', 'Rust'],
  color: colors.gray,
  description: 'A game engine in Rust focused on ergonomics and flexibility.'
}

export const featured = [aleamancer, wasmrust, reduxrender, jsonnull]
