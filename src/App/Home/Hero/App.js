/* @flow */
import React from 'react'
import styled from 'styled-components'
import * as style from 'styles/base'
import heroText from 'raw-loader!App/Home/Hero'

const Container = styled.div`
  border: 1px solid ${style.darkGray};
  height: 200px;
  border-radius: 5px;
  margin: 0 0 auto;
  display: flex;
  flex-direction: column;
  background: linear-gradient(-45deg, ${style.blue} 0%, ${style.gray} 100%);
  box-shadow: 0 35px 40px -20px rgba(0, 10, 20, 0.3);
`

const TabBar = styled.div`
  background: ${style.darkGray};
  height: 3.6rem;
  display: flex;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`

const Tab = styled.div`
  background: ${style.white};
  border-top: 3px solid ${style.blue};
  height: 3.6rem;
  line-height: 3.6rem;
  color: ${style.gray};
  margin-left: 4.8rem;
  font-size: ${style.fontSizeSmall};
  padding: 0 1rem;
  min-width: 200px;
  flex: 0;
`

const AddressBar = styled.div`
  height: 3.6rem;
  background: ${style.white};
`

const Address = styled.div`
  height: 2.8rem;
  border: 1px solid ${style.lightGray};
  margin: 4px 1rem;
  line-height: 2.8rem;
  padding: 0 9px;
  color: ${style.gray};
  font-size: ${style.fontSizeSmall};
  border-radius: 3px;
`

const Content = styled.div`
  margin: auto 0;
  overflow: hidden;
`

const Code = styled.pre`
  font-family: ${style.monospace};
  line-height: 1.4rem;
  font-size: 1.2rem;
  color: white;
  opacity: 0.2;
  overflow: hidden;
`

export default () => (
  <Container>
    <TabBar>
      <Tab />
    </TabBar>
    <AddressBar>
      <Address>
        https://
      </Address>
    </AddressBar>
    <Content>
      <Code dangerouslySetInnerHTML={{__html: heroText }} />
    </Content>
  </Container>
)
