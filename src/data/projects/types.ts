export interface Project {
  name: string
  description: string
  milestones: { name: string; progress?: number }[]
}
