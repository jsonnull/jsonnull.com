/* @flow */
import React from 'react'
import styled from 'styled-components'
import feather from 'feather-icons'
import { colors, fonts, fontSize, lineUnit, breakpoints } from 'styles/base'
import { background, color, underlineIn, underlineOut } from 'styles/links'

type Props = {
  home: boolean
}

const Description = styled.h2`
  display: none;
  font-size: ${fontSize.small};
  color: ${colors.gray};
  font-weight: 700;
  line-height: ${lineUnit};

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
  font-size: ${fontSize.large};
  font-family: ${fonts.heading};
  line-height: ${lineUnit};
  height: ${lineUnit};
  background-color: ${colors.white};
  margin-bottom: ${padding};
  z-index: 700;
  color: ${colors.black};

  @media (min-width: ${breakpoints.tablet}) {
    right: auto;
    background-color: transparent;
  }

  a, a:link, a:visited, a:hover, a:active {
    transition: background-size ease 100ms;
    ${props => background(props.background)}
    ${color(colors.black)}
    ${underlineOut}
    background-position: 0 100%;
  }

  a:hover {
    ${underlineIn}
  }
`

const Social = styled.div`
  margin-top: auto;
`

const IconWrapper = styled.div`
  height: ${lineUnit};
  line-height: ${lineUnit};
  margin-top: 1.2rem;
  padding-top: 2px;
`

const Icon = ({ name }) => (
  <IconWrapper dangerouslySetInnerHTML={{
    __html: feather.toSvg(name, {
      color: colors.gray,
      width: 20,
      height: 20
    })
  }} />
)

class Header extends React.Component<*, Props, *> {
  render () {
    const { home = false, background = colors.white } = this.props

      /*
    const photo = (!home)
      ? <img className={styles.photo} src={img} />
      : null
      */

    return (
      <Wrapper>
        <Title background={background}>
          <a href='/'>Jason Nall</a>
        </Title>
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
