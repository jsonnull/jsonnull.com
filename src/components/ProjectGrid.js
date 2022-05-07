import { Project } from './Project'
import clsx from 'clsx'

export const ProjectGrid = ({ projects, retired }) => {
  return (
    <div className={clsx('grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-16')}>
      {projects.map(({ name, description, milestones }) => {
        return (
          <Project
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
