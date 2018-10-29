import styled, { injectGlobal } from 'react-emotion'
import { colors } from '../styles/base'
import { color, background } from '../styles/links'
import '../styles/normalize.css'
import '../styles/typeset.css'
import '../styles/global.css'

injectGlobal`
  a, a:link, a:visited, a:hover, a:active {
    ${color(colors.blue)}
    ${background(colors.white)}
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: ${props => (props.dark ? colors.darkGray : colors.white)};
`

export default Wrapper
