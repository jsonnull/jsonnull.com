import styled from 'styled-components'

const Overlay = styled.div`
  clip: rect(0, auto, auto, 0);
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: ${({ allowPointerEvents = false }) => allowPointerEvents ? 'auto' : 'none'};

  /*
   * Holy shit this hack for Safari tho
   * https://stackoverflow.com/questions/28488059/safari-rendering-bug-with-css-clip/28640880#28640880
   * Also seems to fix clicking on chrome
   */
  @media screen and (-webkit-min-device-pixel-ratio:0) { 
    clip: auto;
    -webkit-mask-image: -webkit-linear-gradient(top, #ffffff 0%,#ffffff 100%)
  }
`

export default Overlay
