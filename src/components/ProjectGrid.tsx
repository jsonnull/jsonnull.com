import { Project } from './Project'
import clsx from 'clsx'
import { Project as ProjectType } from '../types'

export const ProjectGrid = ({
  projects,
  retired,
}: {
  projects: ProjectType[]
  retired?: boolean
}) => {
  return (
    <div
      className={clsx('grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-16')}
    >
      {projects.map(({ name, description, milestones }) => {
        return (
          <Project
            key={name}
            name={name}
            description={description}
            milestone={milestones[0].name}
            progress={milestones[0].progress}
            retired={retired}
          />
        )
      })}
    </div>
  )
}
