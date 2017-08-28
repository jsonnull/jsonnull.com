import React from 'react'
import styled from 'styled-components'
import Content from 'App/components/Content'
import Title from 'App/components/Title'
import Links from 'App/components/Links'
import Footer from 'App/components/Footer'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Wrapper = styled.div`
  width: 1000px;
  position: relative;
  margin: 0 auto;
  padding: 4.8rem 0;
`

class Page extends React.Component {
  render () {
    return (
      <Container>
        <Wrapper>
          <Content {...this.props} />
        </Wrapper>
        <Title />
        <Links />
        <Footer />
      </Container>
    )
  }
}

export default Page
