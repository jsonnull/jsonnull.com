/* @flow */
import React from 'react'
import styled from 'styled-components'
import feather from 'feather-icons'
import * as style from 'styles/base'

type Props = {
  home: boolean
}

const Description = styled.h2`
  display: none;
  font-size: ${style.fontSizeSmall};
  color: ${style.gray};
  font-weight: 700;
  line-height: ${style.lineUnit};

  /*
  @media (min-width: $tablet) {
    display: block;
  }
  */
`

const padding = '4.8rem'
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  padding: ${padding};
`

const Title = styled.h1`
  display: flex;
  font-size: ${style.fontSizeLarge};
  font-family: ${style.heading};
  font-weight: bold;
  line-height: ${style.lineUnit};
  height: ${style.lineUnit};
  background-color: ${style.white};
  margin-bottom: ${padding};
  z-index: 700;
  color: ${style.black};

  @media (min-width: ${style.tablet}) {
    right: auto;
    background-color: transparent;
  }
`

const Social = styled.div`
  margin-top: auto;
`

const IconWrapper = styled.div`
  height: ${style.lineUnit};
  line-height: ${style.lineUnit};
  margin-top: 1.2rem;
  padding-top: 2px;
`

const Icon = ({ name }) => (
  <IconWrapper dangerouslySetInnerHTML={{
    __html: feather.toSvg(name, {
      color: style.gray,
      width: 20,
      height: 20
    })
  }} />
)

class Header extends React.Component<*, Props, *> {
  render () {
    const { home = false } = this.props

      /*
    const photo = (!home)
      ? <img className={styles.photo} src={img} />
      : null
      */

    return (
      <Wrapper>
        <Title>Jason Nall</Title>
        <Description>
          Designer &amp; Developer
        </Description>
        <Social>
          <Icon name='github' />
          <Icon name='twitter' />
        </Social>
      </Wrapper>
    )
  }
}

export default Header
