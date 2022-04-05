import { ClearHeader, Heading, Page, Wrapper } from '../../components'

const About = () => {
  return (
    <Page title="About">
      <ClearHeader />
      <Wrapper>
        <Heading>About</Heading>
        <p>This site was generated by Next.js.</p>
      </Wrapper>
    </Page>
  )
}

export default About
