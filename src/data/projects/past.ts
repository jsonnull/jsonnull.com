import type { Project } from '../../types'

export const reactRoutine: Project = {
  name: 'React Routine',
  description: 'Before React introduced hooks, I made this library which lets you write sharable component logic using generators (sagas) instead of lifecycle methods.',
  milestones: [{ name: 'Released' }],
}

export const reactRedux: Project = {
  name: 'React Redux',
  description: 'React bindings for Redux using render props. These days you should use the official ones.',
  milestones: [{ name: 'Released, archived' }],
}
