// @flow
import React from 'react'
import styled, { css } from 'react-emotion'
import map from 'styled-map'
import { colors, fonts, fontSize } from '../../styles/base'

const lineHeight = `${2.4 * 1.4}rem`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: 400;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 10%;
  right: 10%;
  line-height: ${lineHeight};
`

const Left = styled.div`
  text-align: right;
  flex: 1;
  padding: 10px 30px;
  padding-left: 0;
  font-weight: 300;
  font-family: ${fonts.heading};
  color: ${colors.gray600};
  font-size: 2rem;
`

const Name = styled.h1`
  font-weight: 400;
  color: ${colors.white};
  font-size: 2.4rem;
`

const Right = styled.div`
  flex: 1;
  padding: 10px 30px;
  position: relative;

  border-radius: 5px;
  background: ${colors.gray100};
  letter-spacing: -0.02em;
  font-family: ${fonts.monospace};
  font-weight: 400;
  color: ${colors.gray900};
  font-size: 1.8rem;
`

const Bracket = styled.div`
  color: ${colors.gray400};
  position: absolute;
  ${props =>
    props.left &&
    css`
      top: 10px;
      left: 10px;
    `};

  ${props =>
    props.right &&
    css`
      bottom: 10px;
      right: 10px;
    `};

  &:before {
    content: ${map`
    left: "{";
    right: "}";
  `};
  }
`

const Comment = styled.div`
  color: ${colors.gray500};
  letter-spacing: -0.06em;
`

const Hero = () => (
  <Wrapper>
    <Left>
      <Name>Jason Nall</Name>
      <div>I build things for the web</div>
    </Left>
    <Right>
      jsonnull
      <Comment>// JavaScript engineer</Comment>
      <Bracket left />
      <Bracket right />
    </Right>
  </Wrapper>
)

export default Hero
