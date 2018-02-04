// @flow
import { colors } from '../styles/base'
import type { Project } from '../types'

const aleamancer = {
  title: 'Aleamancer',
  url: 'https://www.aleamancer.com',
  github: 'https://github.com/jsonnull/aleamancer',
  tags: ['Design', 'Dev', 'JavaScript'],
  color: colors.red,
  description:
    'A groundbreaking online tabletop role-playing platform, built with cutting-edge tools and tech from the React+Redux ecosystem.'
}

const wasmrust = {
  title: 'WebAssembly Rust Utils',
  github: 'https://github.com/jsonnull/wasm-rust-utils',
  tags: ['Dev', 'Rust', 'JavaScript'],
  color: colors.gray,
  description:
    '📦 A Rust and JavaScript utility suite for writing WebAssembly modules.'
}

const reduxrender = {
  title: 'Redux Render',
  github: 'https://github.com/jsonnull/redux-render',
  tags: ['Dev', 'JavaScript'],
  color: colors.blue,
  description:
    '📦 Ergonomic React bindings for Redux using the render prop pattern.'
}

const jsonnull = {
  title: 'jsonnull',
  github: 'https://github.com/jsonnull/jsonnull.com',
  tags: ['Design', 'Dev', 'JavaScript'],
  color: colors.orange,
  description:
    'The content and build system for this site, a statically rendered React application.'
}

export const featured = [aleamancer, wasmrust, reduxrender, jsonnull]
