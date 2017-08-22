/* @flow */
import React from 'react'
import styled from 'styled-components'
import * as style from 'styles/base'

type Props = {
  home: boolean
}

const Description = styled.h2`
  /* display: none; */
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
  padding-top: ${padding};
  padding-left: ${padding};
  padding-right: ${padding};
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

  /*
  @media (min-width: $tablet) {
    right: auto;
    background-color: transparent;
  }
  */
`

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
      </Wrapper>
    )
  }
}

export default Header
