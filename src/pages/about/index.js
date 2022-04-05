import { Heading, Page, Wrapper } from '../../components'

const About = () => {
  return (
    <Wrapper>
      <Heading>About</Heading>
      <p>This site was generated by Next.js.</p>
    </Wrapper>
  )
}

About.getLayout = (page) => (
  <Page title="About">
    {page}
  </Page>
)

export default About
