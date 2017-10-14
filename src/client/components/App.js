/* @flow */
import React from 'react'
import styled from 'styled-components'
import { colors, fonts, fontSize, media } from 'styles/base'
import heroText from '!raw-loader!components/home/Hero'

const Container = styled.div`
  border: 1px solid ${colors.darkGray};
  height: 100%;
  border-radius: 5px;
  margin: 0 0 auto;
  flex-direction: column;
  background: linear-gradient(-45deg, ${colors.blue} 0%, ${colors.gray} 100%);
  box-shadow: 0 35px 40px -20px rgba(0, 10, 20, 0.3);
`

const TabBar = styled.div`
  background: ${colors.darkGray};
  height: 36px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`

const Tab = styled.div`
  background: ${colors.white};
  border-top: 3px solid ${colors.blue};
  height: 36px;
  line-height: 3.6rem;
  color: ${colors.gray};
  margin-left: 3.6rem;
  font-size: ${fontSize.small};
  padding: 0 1rem;
  display: inline-block;
  min-width: 120px;
  ${media.mobile`
    min-width: 200px;
    margin-left: 4.8rem;
  `};
`

const AddressBar = styled.div`
  height: 3.6rem;
  padding: 4px 0;
  background: ${colors.white};
`

const Address = styled.div`
  height: 2.8rem;
  border: 1px solid ${colors.lightGray};
  margin: 0 1rem;
  line-height: 2.8rem;
  padding: 0 9px;
  color: ${colors.gray};
  font-size: ${fontSize.small};
  border-radius: 3px;
`

const Content = styled.div`
  margin: auto 0;
  height: 100%;
  overflow: hidden;
`

const Code = styled.pre`
  font-family: ${fonts.monospace};
  line-height: 1.4rem;
  font-size: 1.2rem;
  color: white;
  opacity: 0.2;
  overflow: hidden;
  height: 100%;
`

export default () => (
  <Container>
    <TabBar>
      <Tab />
    </TabBar>
    <AddressBar>
      <Address>https://</Address>
    </AddressBar>
    <Content>
      <Code dangerouslySetInnerHTML={{ __html: heroText }} />
    </Content>
  </Container>
)
