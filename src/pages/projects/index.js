import { Page } from '../../components'

const Projects = () => {
  return (
    <p className="py-[100vh]">Content goes here</p>
  )
}

Projects.getLayout = (page) => (
  <Page title="Projects">
    {page}
  </Page>
)

export default Projects
