import React from 'react'
import styled from 'styled-components'
import * as style from 'styles/base'

const Background = styled.div`
  background: ${style.black};
  padding: 14.4rem 0;
`

const Content = styled.div`
  position: relative;
  width: 1000px;
  margin: 0 auto;
`

const Quote = styled.p`
  font-family: ${style.serif};
  color: ${style.gray};
  font-size: ${style.fontSizeLarge};
  width: 50%;
  line-height: 3.6rem;
  margin: 0 25%;
`

const Attrib = styled.span`
  font-family: ${style.serif};
  color: ${style.gray};
  font-size: ${style.fontSize};
  margin: 0 25%;
  width: 50%;
  display: block;
  text-align: right;
  line-height: 3.6rem;
`

const Footer = props => (
  <Background>
    <Content>
      <Quote>
        "Though we travel the world over to find the beautiful, we must carry it with us, or we find it not."
      </Quote>
      <Attrib>
        —Ralph Waldo Emerson
      </Attrib>
    </Content>
  </Background>
)

export default Footer
