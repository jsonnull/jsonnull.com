import type { Project } from '../../types'

export const alea: Project = {
  name: 'Alea',
  description: 'Building a modern online tabletop roleplaying experience.',
  milestones: [{ name: 'v1', progress: 15 }],
}

export const jsonnull: Project = {
  name: 'jsonnull.com',
  description: 'My personal blog, where I share technical work.',
  milestones: [{ name: 'Redesign', progress: 50 }],
}

export const novel: Project = {
  name: 'Novel',
  description: "I'm writing an epic fantasy novel!",
  milestones: [{ name: 'First draft', progress: 5 }],
}

export const configuration: Project = {
  name: 'Configuration',
  description:
    'System configuration for all of my development machines, defined using Nix and home-manager.',
  milestones: [{ name: 'Currently maintaining', progress: 100 }],
}

