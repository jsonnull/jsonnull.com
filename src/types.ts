export interface PostFrontMatter {
  template: string
  title: string
  date: string
}

export interface Post {
  template: string
  title: string
  date: string
  content: string
  url: string
}

export interface Project {
  name: string
  description: string
  milestones: { name: string; progress?: number }[]
}

